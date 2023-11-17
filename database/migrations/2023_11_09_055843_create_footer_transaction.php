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
        Schema::create('footer_transaction', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('footer_id');
            $table->unsignedBigInteger('page_id');
            $table->text('content');
            $table->string('custom_link');
            $table->enum('status',['active','inactive']);
            $table->timestamps();
            $table->foreign('footer_id')
                ->references('id')
                ->on('footers')
                ->onDelete('cascade');
            $table->foreign('page_id')
                ->references('id')
                ->on('pages')
                ->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('footer_transaction');
    }
};
