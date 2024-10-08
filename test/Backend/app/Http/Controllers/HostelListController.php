<?php

namespace App\Http\Controllers;

use App\Models\HostelList;
use Illuminate\Http\Request;

class HostelListController extends Controller
{
    // Store a new hostel entry
    public function store(Request $request)
    {
        try {
            $hostel = HostelList::create([
                'faculty' => $request->input('faculty'),
                'department' => $request->input('department'),
                'room_count' => $request->input('room_count'),
                'academic_year' => $request->input('academic_year'),
                'hostel_name' => $request->input('hostel'),
                'gender' => $request->input('gender'),
            ]);

            return response()->json(['message' => 'Hostel details added successfully', 'data' => $hostel], 201);
        } catch (\Exception $e) {
            \Log::error('Error adding hostel details: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to add hostel details', 'details' => $e->getMessage()], 500);
        }
    }

    // Retrieve all hostel entries
    public function index()
    {
        try {
            $hostels = HostelList::all();
            return response()->json($hostels);
        } catch (\Exception $e) {
            \Log::error('Error fetching hostel details: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to retrieve hostel details'], 500);
        }
    }

    // Delete a specific hostel entry
    public function destroy($id)
    {
        try {
            $hostel = HostelList::findOrFail($id);
            $hostel->delete();
            return response()->json(['message' => 'Hostel deleted successfully'], 200);
        } catch (\Exception $e) {
            \Log::error('Error deleting hostel: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to delete hostel', 'details' => $e->getMessage()], 500);
        }
    }

    // Retrieve hostels by department
    // Retrieve all hostel entries
    public function getIndex()
    {
        try {
            $hostels = HostelList::all();
            return response()->json($hostels);
        } catch (\Exception $e) {
            \Log::error('Error fetching hostel details: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to retrieve hostel details'], 500);
        }
    }

}
