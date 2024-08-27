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

        }
}
