<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
}
