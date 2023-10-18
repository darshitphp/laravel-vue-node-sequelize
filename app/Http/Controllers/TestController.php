<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class TestController extends Controller
{
    //
    public function index(){
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Tag/List");
    }

    public function add(){
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Tag/Add");
    }

    public function edit($iTagId){
        $data = [
            'iTagId' => $iTagId
        ];
        $response = Http::post('http://localhost:7000/api/tags/getTagDataById', $data);
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
        $response = Http::post('http://localhost:7000/api/tags/deleteTagData', $data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/tag');
        }
    }

    public function login(){
        if (Auth::check()) {
            return redirect('/tag'); // Replace '/dashboard' with your intended dashboard URL
        }
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Login");
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, true, 'users')) {
            $request->session()->regenerate();
            $data['message'] = 'success';
            $data['status'] = '200';
            return response()->json($data);
        }

        $data['message'] = 'The provided credentials do not match our records.';
        $data['status'] = '500';
        return response()->json($data);
    }

    public function logout(){
        Auth::logout();

        return redirect()->route('login');
    }

    public function register(){
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Register");
    }
}
