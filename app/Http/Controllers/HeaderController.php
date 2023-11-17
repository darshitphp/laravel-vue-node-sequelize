<?php

namespace App\Http\Controllers;

use App\Models\Header;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class HeaderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Header/List");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Admin/Header/Add");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Header $header)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $data = [
            'id' => $id
        ];
        $response = Http::post('http://localhost:7000/api/header/getHeaderDataById', $data);
        $data = $response->json();
        $data['data']['social_links'] = json_decode($data['data']['social_links']);
//        dd($data);
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Header/Edit",[
            'header' => $data['data']
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Header $header)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $data = [
            'id' => $id
        ];
        $response = Http::post('http://localhost:7000/api/header/deleteHeaderData', $data);
        unset($data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/header');
        }
    }
}
