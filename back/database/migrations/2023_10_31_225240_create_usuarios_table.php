<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('apellidos');
            $table->string('cedula')->unique();
            $table->string('telefono');
            $table->string('direccion');
            $table->string('ciudad');            
            $table->unsignedBigInteger('roleId')->default(3);
            $table->unsignedBigInteger('userId');
            $table->timestamps();

            $table->foreign('roleId')->references('id')->on('rols');
            $table->foreign('userId')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
