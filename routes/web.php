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
Route::middleware('auth')->group(function (){


Route::get('/', [TestController::class, 'login']);

Route::get('/contact-us', function () {
    return Inertia::render("Contact");
});

//Tag CRUD routes
Route::get('/tag', [TestController::class, 'index']);
Route::get('/tag/add', [TestController::class, 'add']);
Route::get('/tag/edit/{id}', [TestController::class, 'edit']);
Route::get('/tag/delete/{id}', [TestController::class, 'delete']);

});

//Login Register Forgot Password
Route::get('/login', [TestController::class, 'login'])->name('login');
Route::post('/login-action', [TestController::class, 'authenticate'])->name('login_action');
Route::get('/register', [TestController::class, 'register']);
Route::get('/logout', [TestController::class, 'logout'])->name('logout');
