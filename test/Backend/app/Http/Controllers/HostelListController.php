<?php

namespace App\Http\Controllers;

use App\Models\HostelList;
use Illuminate\Http\Request;

class HostelListController extends Controller
{
    // Store a new hostel entry
    public function store(Request $request)
    {
        // Assume there's an issue with data formatting or saving
        $hostel = new HostelList();
        $hostel->faculty = $request->input('faculty');
        $hostel->department = $request->input('department');
        $hostel->room_count = $request->input('room_count');
        $hostel->academic_year = $request->input('academic_year');
        $hostel->hostel_name = $request->input('hostel_name');

        $hostel->save();  // This line could cause issues if the database is misconfigured

        return response()->json(['message' => 'Hostel details added successfully', 'data' => $hostel], 201);
    }


    // Retrieve all hostel entries
    public function index()
    {
        $hostels = HostelList::all();
        return response()->json($hostels);
    }

    // Retrieve a specific hostel entry
    public function show($department)
    {
        $hostel = HostelList::find($department);

        if (!$hostel) {
            return response()->json(['message' => 'Hostel not found'], 404);
        }

        return response()->json($hostel);
    }

    // Update a specific hostel entry
    public function update(Request $request, $department)
    {
        $hostel = HostelList::find($department);

        if (!$hostel) {
            return response()->json(['message' => 'Hostel not found'], 404);
        }

        // Directly update the hostel entry without validation
        $hostel->update($request->all());

        return response()->json(['message' => 'Hostel details updated successfully', 'data' => $hostel]);
    }

    // Delete a specific hostel entry
    public function destroy($department)
    {
        $hostel = HostelList::find($department);

        if (!$hostel) {
            return response()->json(['message' => 'Hostel not found'], 404);
        }

        $hostel->delete();

        return response()->json(['message' => 'Hostel deleted successfully']);
    }
}
