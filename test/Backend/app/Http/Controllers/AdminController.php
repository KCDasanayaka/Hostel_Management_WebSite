<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    // Register method for Admin with validation
    public function register(Request $request)
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'register_id' => 'required|string|max:255|unique:admins,register_id',
            'email' => 'required|email|max:255|unique:admins,email',
            'pass1' => 'required|string|min:8',
            'pass1_confirmation' => 'required|same:pass1',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create the admin
        $admin = Admin::create([
            'register_id' => $request->register_id,
            'email' => $request->email,
            'password' => Hash::make($request->pass1), // Hashing the password
        ]);

        return response()->json(['message' => 'Registration successful', 'user' => $admin], 201);
    }

    // Login method for Admin with validation
    public function login(Request $request)
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Attempt to log in the admin with the provided credentials
        if (Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password])) {
            $admin = Auth::guard('admin')->user();
            return response()->json([
                'message' => 'Login successful',
                'user' => $admin
            ], 200);
        } else {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }
    }
}
