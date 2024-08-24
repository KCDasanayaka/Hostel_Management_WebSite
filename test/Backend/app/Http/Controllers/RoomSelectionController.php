<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RoomSelection;

class RoomSelectionController extends Controller
{
    public function register(Request $request)
    {
        $hostelName = $request->input('hostel_name');
        $roomNumber = $request->input('room_number');
        $nameWithInitials = $request->input('name_with_initials');
        $indexNumber = $request->input('index_number');

        // Find the room in the specified hostel
        $room = RoomSelection::where('hostel_name', $hostelName)
                            ->where('room_number', $roomNumber)
                            ->first();

        if (!$room) {
            // If no record exists, create a new one
            $room = new RoomSelection([
                'hostel_name' => $hostelName,
                'room_number' => $roomNumber,
            ]);
        }

        // Register the user in the first available slot
        if (is_null($room->user1_index)) {
            $room->user1_index = $indexNumber;
            $room->user1_name = $nameWithInitials;
        } elseif (is_null($room->user2_index)) {
            $room->user2_index = $indexNumber;
            $room->user2_name = $nameWithInitials;
        } elseif (is_null($room->user3_index)) {
            $room->user3_index = $indexNumber;
            $room->user3_name = $nameWithInitials;
        } elseif (is_null($room->user4_index)) {
            $room->user4_index = $indexNumber;
            $room->user4_name = $nameWithInitials;
        } else {
            return response()->json(['error' => 'Room is already fully occupied'], 400);
        }

        // Save the room selection
        $room->save();

        return response()->json(['message' => 'Room registered successfully'], 201);
    }
}

