<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHostelListsTable extends Migration
{
    public function up()
    {
        Schema::create('hostel_lists', function (Blueprint $table) {
            $table->id();
            $table->string('faculty');
            $table->string('department');
            $table->integer('room_count');
            $table->string('academic_year');
            $table->string('hostel_name');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('hostel_lists');
    }
}
?>
