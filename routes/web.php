<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\SliderController;
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


Route::get('/', [UserController::class, 'login']);

Route::get('/contact-us', function () {
    return Inertia::render("Contact");
});

//Tag CRUD routes
Route::get('/tag', [UserController::class, 'index']);
Route::get('/tag/add', [UserController::class, 'add']);
Route::get('/tag/edit/{id}', [UserController::class, 'edit']);
Route::get('/tag/delete/{id}', [UserController::class, 'delete']);

//Page CRUD routes
Route::get('/page', [PageController::class, 'index']);
Route::get('/page/add', [PageController::class, 'create']);
Route::get('/page/edit/{id}', [PageController::class, 'edit']);
Route::get('/page/delete/{id}', [PageController::class, 'destroy']);

//Slider CRUD routes
Route::get('/slider', [SliderController::class, 'index']);
Route::get('/slider/add', [SliderController::class, 'create']);
Route::get('/slider/edit/{id}', [SliderController::class, 'edit']);
Route::get('/slider/delete/{id}', [SliderController::class, 'destroy']);
Route::post('/slider/store', [SliderController::class, 'store']);
});

//Login Register Forgot Password
Route::get('/login', [UserController::class, 'login'])->name('login');
Route::post('/login-action', [UserController::class, 'authenticate'])->name('login_action');
Route::post('/register-action', [UserController::class, 'register_action'])->name('register_action');
Route::get('/register', [UserController::class, 'register']);
Route::get('/logout', [UserController::class, 'logout'])->name('logout');
Route::get('/forgot-password', [UserController::class, 'forgot_password']);
Route::post('/forgot-password-action', [UserController::class, 'forgot_password_action'])->name('forgot_password_action');
Route::get('/testSendMail', [UserController::class, 'sendHtmlEmail']);

