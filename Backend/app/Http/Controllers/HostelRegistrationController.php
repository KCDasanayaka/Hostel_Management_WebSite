<?php

// app/Http/Controllers/HostelRegistrationController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HostelRegistration;
use Illuminate\Support\Facades\Validator;

class HostelRegistrationController extends Controller
{
    public function hostelRegister(Request $request)
    {
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
            // Log validation errors
            \Log::error('Validation errors:', $validator->errors()->toArray());

            // Return validation errors in the response
            return response()->json(['errors' => $validator->errors()], 422);
        }

        try {
            $data = $request->only([
                'name_with_initials', 'email', 'address', 'index_number', 'faculty', 
                'academic_year', 'birthday', 'department', 'phone_number', 'nic_number'
            ]);

            if ($request->hasFile('image')) {
                $path = $request->file('image')->store('images', 'public');
                $data['image_path'] = $path;
            }

            HostelRegistration::create($data);

            return response()->json(['message' => 'Registration successful'], 201);
        } catch (\Exception $e) {
            \Log::error('Error during hostel registration', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'error' => 'Server Error',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
 
