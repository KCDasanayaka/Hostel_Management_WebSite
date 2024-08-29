<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HostelRegistrationController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\HostelListController;
use App\Http\Controllers\RoomSelectionController;




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/hostel-register', [HostelRegistrationController::class, 'register']);
Route::post('/Adminregister', [AdminController::class, 'register']);
Route::post('/AdminLogin', [AdminController::class, 'login']);

Route::post('/Hostel-Details', [HostelListController::class, 'store']);
Route::get('/Hostel-Details', [HostelListController::class, 'index']);

// Route to delete a specific hostel by id
Route::delete('/Hostel-Details/{id}', [HostelListController::class, 'destroy']);

// Route to get hostels by department
// Route to get all hostels
Route::get('/hostels', [HostelListController::class, 'getIndex']);
Route::get('/registration/{email}', [HostelRegistrationController::class, 'getUserRegistration']);



Route::post('/register-room', [RoomSelectionController::class, 'registerRoom']);
Route::get('/room-details', [RoomSelectionController::class, 'getRoomDetails']);



