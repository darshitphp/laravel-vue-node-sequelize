<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


//Route::get('/', function () {
//    return Inertia::render("Home",[
//        'test_val' => 'Prop value'
//    ]);
//});

Route::get('/contact-us', function () {
    return Inertia::render("Contact");
});

Route::get('/tag', [TestController::class, 'index']);
Route::get('/tag/add', [TestController::class, 'add']);
Route::get('/tag/edit/{id}', [TestController::class, 'edit']);
Route::get('/tag/delete/{id}', [TestController::class, 'delete']);
