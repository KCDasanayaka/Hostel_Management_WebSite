<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class RoomSelectionController extends Controller
{
    // Function to register a user to a room
    public function registerRoom(Request $request)
    {
        try {
            $hostelName = $request->input('hostel_name');
            $roomNumber = $request->input('room_number');
            $nameWithInitials = $request->input('name_with_initials');
            $indexNumber = $request->input('index_number');

            // Ensure that the correct table exists
            if (!DB::getSchemaBuilder()->hasTable($hostelName)) {
                return response()->json(['error' => 'Table does not exist'], 404);
            }

            // Check the number of existing users in the room
            $existingUsers = DB::table($hostelName)->where('room_number', $roomNumber)->count();

            if ($existingUsers < 4) {
                // Insert the new user data into the table
                DB::table($hostelName)->insert([
                    'room_number' => $roomNumber,
                    'name_with_initials' => $nameWithInitials,
                    'index_number' => $indexNumber,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);

                return response()->json(['message' => 'Room registered successfully'], 201);
            } else {
                return response()->json(['error' => 'Room is already full'], 400);
            }

        } catch (\Exception $e) {
            Log::error('Room registration failed: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to register room'], 500);
        }
    }

    // Function to get the users for a specific room
    public function getRoomUsers(Request $request)
    {
        try {
            $hostelName = $request->query('hostel_name');
            $roomNumber = $request->query('room_number');

            // Ensure that the correct table exists
            if (!DB::getSchemaBuilder()->hasTable($hostelName)) {
                return response()->json(['error' => 'Table does not exist'], 404);
            }

            // Fetch users registered in the specified room
            $usersInRoom = DB::table($hostelName)
                ->where('room_number', $roomNumber)
                ->get(['name_with_initials', 'index_number']);

            return response()->json($usersInRoom, 200);

        } catch (\Exception $e) {
            Log::error('Failed to fetch room users: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to fetch room users'], 500);
        }
    }
}
