<?php

namespace App\Http\Controllers;

use App\Models\HostelRegistration;
use Illuminate\Http\Request;

class HostelRegistrationController extends Controller
{
    public function register(Request $request)
    {
        // Handle the file upload if there is an image
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('hostel_registrations', 'public');
        }

        // Create a new hostel registration record without validation
        $registration = HostelRegistration::create([
            'name_with_initials' => $request->name_with_initials,
            'email' => $request->email,
            'address' => $request->address,
            'index_number' => $request->index_number,
            'faculty' => $request->faculty,
            'academic_year' => $request->academic_year,
            'birthday' => $request->birthday,
            'department' => $request->department,
            'phone_number' => $request->phone_number,
            'nic_number' => $request->nic_number,
            'image' => $imagePath,
        ]);

        // Return a success response with the created registration data
        return response()->json(['message' => 'Registration successful', 'data' => $registration], 201);
    }
}