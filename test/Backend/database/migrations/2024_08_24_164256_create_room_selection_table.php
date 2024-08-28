<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVenuraFirstflowTable extends Migration
{
    public function up()
    {
        Schema::create('venura_firstflow', function (Blueprint $table) {
            $table->id();
            $table->integer('room_number');
            $table->string('name_with_initials');
            $table->string('index_number');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('venura_firstflow');
    }
}


