<?php

namespace App\Http\Controllers;

use App\Models\Footer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class FooterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Footer/List");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $response = Http::post('http://127.0.0.1:7000/api/page/pageData');
        $data = $response->json();
//        dd($data);
        return Inertia::render("Admin/Footer/Add",[
            'data' => $data['data']
        ]);
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
    public function show(Footer $footer)
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
        $response = Http::post('http://localhost:7000/api/footer/getFooterDataById', $data);
        $data = $response->json();
        $data['data']['social_links'] = json_decode($data['data']['social_links']);
//        dd($data);
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Footer/Edit",[
            'footer' => $data['data']
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Footer $footer)
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
        $response = Http::post('http://localhost:7000/api/footer/deleteFooterData', $data);
        unset($data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/footer');
        }
    }
}
