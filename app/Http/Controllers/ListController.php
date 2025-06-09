<?php

namespace App\Http\Controllers;

use App\Models\TaskList;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Ambil semua list, tanpa filter user_id
        $lists = TaskList::with('tasks')->get();

        return Inertia::render('Lists/Index', [
            'lists' => $lists,
            'flash' => [
                'success' => session('success'),
                'error' => session('error')
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string'
        ]);

        TaskList::create([
            ...$validated,
            'user_id' => auth()->id()
        ]);

        return redirect()->route('admin')->with('success', 'List created successfully!');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TaskList $list)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string'
        ]);

        $list->update($validated);

        return redirect()->route('admin')->with('success', 'List updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TaskList $list)
    {
        $list->delete();
        return redirect()->route('admin')->with('success', 'List deleted successfully!');
    }
}
