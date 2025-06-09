<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\TaskList;
use Illuminate\Http\Request;
use inertia\Inertia;
use inertia\Response;

class AdminRouteController extends Controller
{
    public function admin():Response
    {
         $lists = TaskList::with('tasks')->get();

        return Inertia::render('Admin/Users', [
            'lists' => $lists,
            'flash' => [
                'success' => session('success'),
                'error' => session('error')
            ]
        ]);
    }


    // 🟩 Simpan list baru (tanpa user_id)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string'
        ]);

        TaskList::create($validated); // tidak pakai user_id

        return redirect()->route('Admin/Users')->with('success', 'List created successfully!');
    }

    // 🟨 Update list
    public function update(Request $request, TaskList $list)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string'
        ]);

        $list->update($validated);

        return redirect()->route('Admin/Users')->with('success', 'List updated successfully!');
    }

    // 🟥 Hapus list
    public function destroy(TaskList $list)
    {
        $list->delete();

        return redirect()->route('Admin/Users')->with('success', 'List deleted successfully!');
    }
    
}
