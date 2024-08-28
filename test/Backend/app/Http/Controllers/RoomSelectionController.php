<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class RoomSelectionController extends Controller
{
    public function registerRoom(Request $request)
    {
        try {
            $hostelName = $request->input('hostel_name');
            $roomNumber = $request->input('room_number');
            $nameWithInitials = $request->input('name_with_initials');
            $indexNumber = $request->input('index_number');

            // Ensure that the correct table exists
            if (!DB::getSchemaBuilder()->hasTable($hostelName)) {
                throw new \Exception("Table $hostelName does not exist.");
            }

            // Insert the user data into the appropriate room in the table
            DB::table($hostelName)->insert([
                'room_number' => $roomNumber,
                'name_with_initials' => $nameWithInitials,
                'index_number' => $indexNumber,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            return response()->json(['message' => 'Room registered successfully'], 201);
        } catch (\Exception $e) {
            Log::error('Room registration failed: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to register room'], 500);
        }
    }
}

