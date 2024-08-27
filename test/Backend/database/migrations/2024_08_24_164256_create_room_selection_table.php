<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomSelectionTable extends Migration
{
    public function up()
    {
        Schema::create('room_selection', function (Blueprint $table) {
            $table->id();
            $table->string('hostel_name');
            $table->integer('room_number');
            $table->string('user1_index')->nullable();
            $table->string('user1_name')->nullable();
            $table->string('user2_index')->nullable();
            $table->string('user2_name')->nullable();
            $table->string('user3_index')->nullable();
            $table->string('user3_name')->nullable();
            $table->string('user4_index')->nullable();
            $table->string('user4_name')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('room_selection');
    }
}

