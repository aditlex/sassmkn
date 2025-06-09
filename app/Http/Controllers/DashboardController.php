<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\TaskList;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Get all lists dari semua user
        $lists = TaskList::with('user')->get();

        // Get all tasks dari semua list
        $tasks = Task::with('list')->get();

        // Statistik global
        $stats = [
            'totalLists' => $lists->count(),
            'totalTasks' => $tasks->count(),
            'completedTasks' => $tasks->where('is_completed', true)->count(),
            'pendingTasks' => $tasks->where('is_completed', false)->count(),
        ];

        return Inertia::render('dashboard', [
            'stats' => $stats,
            'lists' => $lists,
            'tasks' => $tasks,
            'flash' => [
                'success' => session('success'),
                'error' => session('error')
            ]
        ]);
    }
}
