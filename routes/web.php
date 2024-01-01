<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\HeaderController;
use App\Http\Controllers\FooterController;
use App\Http\Controllers\BlogCategoryController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\PopupController;
use App\Http\Controllers\GallaryController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
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
//Route::group(['middleware' => 'jwt.verify'], function () {
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

//Form CRUD routes
Route::get('/form', [FormController::class, 'index']);
Route::get('/form/add', [FormController::class, 'create']);
Route::get('/form/edit/{id}', [FormController::class, 'edit']);
Route::get('/form/delete/{id}', [FormController::class, 'destroy']);

//Header CRUD routes
Route::get('/header', [HeaderController::class, 'index']);
Route::get('/header/add', [HeaderController::class, 'create']);
Route::get('/header/edit/{id}', [HeaderController::class, 'edit']);
Route::get('/header/delete/{id}', [HeaderController::class, 'destroy']);

//Footer CRUD routes
Route::get('/footer', [FooterController::class, 'index']);
Route::get('/footer/add', [FooterController::class, 'create']);
Route::get('/footer/edit/{id}', [FooterController::class, 'edit']);
Route::get('/footer/delete/{id}', [FooterController::class, 'destroy']);

//Blog Category CRUD routes
Route::get('/blog-category', [BlogCategoryController::class, 'index']);
Route::get('/blog-category/add', [BlogCategoryController::class, 'create']);
Route::get('/blog-category/edit/{id}', [BlogCategoryController::class, 'edit']);
Route::get('/blog-category/delete/{id}', [BlogCategoryController::class, 'destroy']);

//Blog Category CRUD routes
Route::get('/blog', [BlogController::class, 'index']);
Route::get('/blog/add', [BlogController::class, 'create']);
Route::get('/blog/edit/{id}', [BlogController::class, 'edit']);
Route::get('/blog/delete/{id}', [BlogController::class, 'destroy']);

//Blog Category CRUD routes
Route::get('/popup', [PopupController::class, 'index']);
Route::get('/popup/add', [PopupController::class, 'create']);
Route::get('/popup/edit/{id}', [PopupController::class, 'edit']);
Route::get('/popup/delete/{id}', [PopupController::class, 'destroy']);

//Slider CRUD routes
Route::get('/gallary', [GallaryController::class, 'index']);
Route::get('/gallary/add', [GallaryController::class, 'create']);
Route::get('/gallary/edit/{id}', [GallaryController::class, 'edit']);
Route::get('/gallary/delete/{id}', [GallaryController::class, 'destroy']);

//Category CRUD routes
Route::get('/category', [CategoryController::class, 'index']);
Route::get('/category/add', [CategoryController::class, 'create']);
Route::get('/category/edit/{id}', [CategoryController::class, 'edit']);
Route::get('/category/delete/{id}', [CategoryController::class, 'destroy']);

//Product CRUD routes
Route::get('/product', [ProductController::class, 'index']);
Route::get('/product/add', [ProductController::class, 'create']);
Route::get('/product/edit/{id}', [ProductController::class, 'edit']);
Route::get('/product/delete/{id}', [ProductController::class, 'destroy']);

//Blog Category CRUD routes
Route::get('/setting', [SettingController::class, 'index']);
});

//Login Register Forgot Password
Route::get('/dashboard', [UserController::class, 'dashboard'])->name('dashboard');
Route::get('/login', [UserController::class, 'login'])->name('login');
Route::post('/login-action', [UserController::class, 'authenticate'])->name('login_action');
Route::post('/register-action', [UserController::class, 'register_action'])->name('register_action');
Route::get('/register', [UserController::class, 'register']);
Route::get('/logout', [UserController::class, 'logout'])->name('logout');
Route::get('/forgot-password', [UserController::class, 'forgot_password']);
Route::get('/reset-password', [UserController::class, 'reset_password']);
Route::post('/reset-password-action', [UserController::class, 'reset_password_action'])->name('reset_password_action');
Route::post('/forgot-password-action', [UserController::class, 'forgot_password_action'])->name('forgot_password_action');
Route::get('/testSendMail', [UserController::class, 'sendHtmlEmail']);
Route::get('/get-active-user',[UserController::class,'getActiveUser']);
Route::post('/removeFileFromPath', [UserController::class, 'removeFileFromPath'])->name('removeFileFromPath');
