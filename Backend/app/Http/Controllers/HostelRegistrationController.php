<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HostelRegistration; // Ensure this model exists
use Illuminate\Support\Facades\Validator;

class HostelRegistrationController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|exists:users,email', // Validate email exists in users table
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'index_number' => 'required|string|max:255',
            'faculty' => 'required|string|max:255',
            'academic_year' => 'required|string|max:255',
            'birthday' => 'required|date',
            'department' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'nic_number' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 400);
        }

        $registration = HostelRegistration::create($request->all());

        return response()->json(['message' => 'Registration successful'], 200);
    }
}
