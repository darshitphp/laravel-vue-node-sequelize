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
        $metadata = [
            'title' => 'Footer-List | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Footer/List")->with($metadata);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $metadata = [
            'title' => 'Footer-Add | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $response = Http::post(env('NODE_BASEURL_LOCAL').'page/pageData');
        $data = $response->json();
        return Inertia::render("Admin/Footer/Add",[
            'data' => $data['data']
        ])->with($metadata);
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
        $metadata = [
            'title' => 'Footer-Edit | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $data = [
            'id' => $id
        ];
        $pageData = Http::post(env('NODE_BASEURL_LOCAL').'page/pageData');
        $response = Http::post(env('NODE_BASEURL_LOCAL').'footer/getFooterDataById', $data);
        $data = $response->json();
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Footer/Edit",[
            'footer' => $data['data'],
            'data' => $pageData['data']
        ])->with($metadata);
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
        $response = Http::post(env('NODE_BASEURL_LOCAL').'footer/deleteFooterData', $data);
        unset($data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/footer');
        }
    }
}
