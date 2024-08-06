<?php

// app/Http/Controllers/HostelRegistrationController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HostelRegistration;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class HostelRegistrationController extends Controller
{
    public function register(Request $request)
    {
        // Validate incoming request
        $validator = Validator::make($request->all(), [
            'name_with_initials' => 'required|string|max:255',
            'email' => 'required|email|unique:hostel_registrations,email',
            'address' => 'required|string',
            'index_number' => 'required|string',
            'faculty' => 'required|string',
            'academic_year' => 'required|string',
            'birthday' => 'required|date',
            'department' => 'required|string',
            'phone_number' => 'required|string',
            'nic_number' => 'required|string|unique:hostel_registrations,nic_number',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $request->only([
            'name_with_initials', 'email', 'address', 'index_number', 'faculty', 'academic_year',
            'birthday', 'department', 'phone_number', 'nic_number'
        ]);

        // Handle file upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
            $data['image_path'] = $path;
        }

        // Create the record
        HostelRegistration::create($data);

        return response()->json(['message' => 'Registration successful'], 201);
    }
}


