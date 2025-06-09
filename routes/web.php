<?php

use App\Http\Controllers\AdminRouteController;
use App\Http\Controllers\AdminTaskController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ListController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// Redirect / ke /dashboard
Route::get('/', function () {
    return Auth::check() ? redirect('/dashboard') : redirect('/login');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('lists', ListController::class);
    Route::resource('tasks', TaskController::class);
});

Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::get('/admin/users', [AdminRouteController::class, 'admin'])->name('admin');
    Route::get('/admin/user', [AdminTaskController::class, 'index'])->name('user');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
