<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use App\Models\DynamicHostelTable;

class RoomRegistrationController extends Controller
{
    public function register(Request $request)
    {
        try {
            // Get inputs from request
            $hostelName = strtolower(str_replace(' ', '_', $request->input('hostel_name')));
            $roomNumber = $request->input('room_number');
            $nameWithInitials = $request->input('name_with_initials');
            $indexNumber = $request->input('index_number');
            
            // Ensure table exists and matches the hostel name
            if (!DB::getSchemaBuilder()->hasTable($hostelName)) {
                throw new \Exception("Table $hostelName does not exist.");
            }

            // Insert data into the correct table
            DB::enableQueryLog();
            // Your insertion code
            DB::table($hostelName)->insert([
                'room_number' => $roomNumber,
                'name_with_initials_1' => $nameWithInitials,
                'index_number_1' => $indexNumber,
            ]);
            dd(DB::getQueryLog()); // Display the query log


            return response()->json(['message' => 'Room registered successfully'], 201);
        } catch (\Exception $e) {
            \Log::error('Room registration failed: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to register room', 'details' => $e->getMessage()], 500);
        }
    }

    public function getRoomDetails($hostel_name, $room_number)
    {
        // Sanitize and format the table name
        $tableName = strtolower(str_replace(' ', '_', $hostel_name));

        if (Schema::hasTable($tableName)) {
            $dynamicTable = new DynamicHostelTable();
            $dynamicTable->setTableName($tableName);

            // Fetch room details
            $roomDetails = $dynamicTable->where('room_number', $room_number)->first();

            if ($roomDetails) {
                return response()->json($roomDetails);
            } else {
                return response()->json(['error' => 'Room not found'], 404);
            }
        } else {
            return response()->json(['error' => 'Hostel not found'], 404);
        }
    }
}
