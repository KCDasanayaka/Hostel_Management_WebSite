<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'pass1' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->first()], 400);
        }

        $user = User::create([
            'name' => $request->user,
            'email' => $request->email,
            'password' => Hash::make($request->pass1),
        ]);

        return response()->json(['message' => 'Registration successful'], 200);
    }
}
