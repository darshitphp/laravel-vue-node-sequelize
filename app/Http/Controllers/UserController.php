<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use App\Mail\HtmlEmail;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    //
    public function index(){
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Tag/List");
    }

    public function dashboard(){
        //Loading component with proper file structure managable
        $metadata = [
            'title' => 'Dashboard | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        return Inertia::render("Admin/Dashboard")->with($metadata);
    }

    public function add(){
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Tag/Add");
    }

    public function edit($iTagId){
        $data = [
            'iTagId' => $iTagId
        ];
        $response = Http::post(env('NODE_BASEURL_LOCAL').'tags/getTagDataById', $data);
        $data = $response->json();
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Tag/Edit",[
            'tag' => $data['data']
        ]);
    }

    public function delete($iTagId){
        $data = [
            'iTagId' => $iTagId
        ];
        $response = Http::post(env('NODE_BASEURL_LOCAL').'tags/deleteTagData', $data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/tag');
        }
    }

    public function login(){
        if (Auth::check()) {
            return redirect('/page'); // Replace '/dashboard' with your intended dashboard URL
        }
        $metadata = [
            'title' => 'Login | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Login")->with($metadata);
    }

    public function forgot_password(){
        $metadata = [
            'title' => 'Forgot-Password | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        return Inertia::render("Admin/ForgotPassword")->with($metadata);
    }

    public function getActiveUser(){
        if (auth()->check()) {
            // User is logged in
            $data = auth()->user();
            return response()->json([
                'data' => $data,
                'status' => '200',
                'message' => 'user authenticated successfully',
            ])->header('X-CSRF-TOKEN', csrf_token());
        } else {
            return response()->json([
                'data' => null,
                'status' => '500',
                'message' => 'User is not authenticated',
            ])->header('X-CSRF-TOKEN', csrf_token());
        }
    }

    public function removeFileFromPath(Request $request){
        $file = $request->input('filePath');
        if (isset($file)) {
            $publicPath = public_path();
            $filePath = $publicPath . $file;
            if (file_exists($filePath)) {
                unlink($filePath);
                echo json_encode(['success' => true, 'message' => 'File deleted successfully.']);
            } else {
                echo json_encode(['success' => false, 'message' => 'File not found.']);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid request.']);
        }
    }

    public function forgot_password_action(Request $request){
        dd($request->all());
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'user_name' => 'required|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'email' => $request->input('email'),
            'user_name' => $request->input('user_name'),
            'password' => Hash::make($request->input('password')),
        ]);

        if($user){
            $data['message'] = 'You have successfully registred pleas get back to login.';
            $data['status'] = '200';
        }else{
            $data['message'] = 'Something went wrong.';
            $data['status'] = '500';
        }

        return response()->json($data);
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, true, 'users')) {
            $request->session()->regenerate();
            $user = Auth::user();

            $data['message'] = 'success';
            $data['status'] = '200';
            $data['data'] = $user;
            return response()->json($data);
        }

        $data['message'] = 'The provided credentials do not match our records.';
        $data['status'] = '500';
        return response()->json($data);
    }

    public function register_action(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'user_name' => 'required|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'email' => $request->input('email'),
            'user_name' => $request->input('user_name'),
            'password' => Hash::make($request->input('password')),
        ]);

        if($user){
            $data['message'] = 'You have successfully registred pleas get back to login.';
            $data['status'] = '200';
        }else{
            $data['message'] = 'Something went wrong.';
            $data['status'] = '500';
        }

        return response()->json($data);
    }

    public function logout(){
        Auth::logout();

        return redirect()->route('login');
    }

    public function sendHtmlEmail()
    {
        Mail::to('darshit@mailinator.com')->send(new HtmlEmail());
        dd('ok');
        return "HTML email sent!";
    }

    public function register(){
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Register");
    }
}
