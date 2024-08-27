<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RoomRegistrationController extends Controller
{
    public function register(Request $request)
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
            $room = DB::table($hostelName)->where('room_number', $roomNumber)->first();

            if ($room) {
                if (is_null($room->name_with_initials_1)) {
                    DB::table($hostelName)->where('room_number', $roomNumber)->update([
                        'name_with_initials_1' => $nameWithInitials,
                        'index_number_1' => $indexNumber,
                    ]);
                } elseif (is_null($room->name_with_initials_2)) {
                    DB::table($hostelName)->where('room_number', $roomNumber)->update([
                        'name_with_initials_2' => $nameWithInitials,
                        'index_number_2' => $indexNumber,
                    ]);
                } elseif (is_null($room->name_with_initials_3)) {
                    DB::table($hostelName)->where('room_number', $roomNumber)->update([
                        'name_with_initials_3' => $nameWithInitials,
                        'index_number_3' => $indexNumber,
                    ]);
                } elseif (is_null($room->name_with_initials_4)) {
                    DB::table($hostelName)->where('room_number', $roomNumber)->update([
                        'name_with_initials_4' => $nameWithInitials,
                        'index_number_4' => $indexNumber,
                    ]);
                } else {
                    return response()->json(['error' => 'Room is already full'], 400);
                }
            } else {
                return response()->json(['error' => 'Room not found'], 404);
            }

            return response()->json(['message' => 'Room registered successfully'], 201);
        } catch (\Exception $e) {
            \Log::error('Room registration failed: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to register room'], 500);
        }
    }
}
