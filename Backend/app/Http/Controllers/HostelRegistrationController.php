<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HostelRegistration;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class HostelRegistrationController extends Controller
{
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'name_with_initials' => 'required|string|max:255',
            'address' => 'required|string',
            'index_number' => 'required|string|max:255',
            'faculty' => 'required|string|max:255',
            'academic_year' => 'required|string|max:255',
            'birthday' => 'required|date',
            'department' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'nic_number' => 'required|string|max:255',
            'image' => 'nullable|image|max:2048', // Image is optional and max size is 2MB
        ]);

        // Store image and get the path
        $imgPath = null;
        if ($request->hasFile('image')) {
            $imgPath = $request->file('image')->store('public/hostel_images');
        }

        // Create the registration record
        HostelRegistration::create([
            'email' => Auth::user()->email, // Get email from the authenticated user
            'name' => $request->name_with_initials,
            'address' => $request->address,
            'index_number' => $request->index_number,
            'faculty' => $request->faculty,
            'academic_year' => $request->academic_year,
            'birthday' => $request->birthday,
            'department' => $request->department,
            'phone_number' => $request->phone_number,
            'nic_number' => $request->nic_number,
            'imgPath' => $imgPath,
        ]);

        return response()->json(['message' => 'Registration successful!'], 201);
    }
}

