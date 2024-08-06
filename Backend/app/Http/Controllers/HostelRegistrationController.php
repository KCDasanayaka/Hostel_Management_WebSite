<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HostelRegistration;
use Illuminate\Support\Facades\Storage;

class HostelRegistrationController extends Controller
{
    // In your Controller, e.g., HostelRegistrationController.php

    public function registerHostel(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'address' => 'required',
            'index_number' => 'required',
            'faculty' => 'required',
            'academic_year' => 'required',
            'birthday' => 'required|date',
            'department' => 'required',
            'phone_number' => 'required',
            'nic_number' => 'required',
            'image' => 'nullable|image',
            'name' => 'nullable|string', // Add validation for 'name'
        ]);
    
        $hostelRegistration = new HostelRegistration($data);
        $hostelRegistration->save();
    
        return response()->json(['message' => 'Hostel registered successfully.']);
    }
    

}

