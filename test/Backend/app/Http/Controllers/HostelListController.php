<?php

namespace App\Http\Controllers;

use App\Models\HostelList;
use Illuminate\Http\Request;

class HostelListController extends Controller
{
    public function store(Request $request)
{
    try {
        // Create a new hostel entry
        $hostel = new HostelList();
        $hostel->faculty = $request->input('faculty');
        $hostel->department = $request->input('department');
        $hostel->room_count = $request->input('roomCount'); // Ensure field names match
        $hostel->academic_year = $request->input('academic_year');
        $hostel->hostel_name = $request->input('hostel');

        // Save the hostel entry to the database
        $hostel->save();

        // Return a success response
        return response()->json(['message' => 'Hostel details added successfully', 'data' => $hostel], 201);
    } catch (\Exception $e) {
        // Log the error for debugging
        \Log::error('Error saving hostel details: '.$e->getMessage());
        return response()->json(['error' => 'Failed to save hostel details'], 500);
    }
}

}
?>

