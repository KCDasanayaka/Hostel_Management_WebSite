<?php

namespace App\Http\Controllers;

use App\Models\HostelRegistration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HostelRegistrationController extends Controller
{
    public function register(Request $request)
    {
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'name_with_initials' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:hostel_registrations,email',
            'address' => 'required|string|max:255',
            'index_number' => 'required|string|max:20',
            'faculty' => 'required|string|max:255',
            'academic_year' => 'required|string|max:20',
            'birthday' => 'required|date',
            'department' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'nic_number' => 'required|string|max:20',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Handle the file upload if there is an image
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
            $validated['image'] = $imagePath;
        }

        // Create a new hostel registration record
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

    public function getUserRegistration($email)
    {
        try {
            // Fetch the registration data based on the email
            $registration = HostelRegistration::where('email', $email)->first();

            if (!$registration) {
                return response()->json(['error' => 'User not found'], 404);
            }

            // Return the registration data
            return response()->json($registration);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve registration data'], 500);
        }
    }


}
