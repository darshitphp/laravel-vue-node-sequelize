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
        $token = $this->xAuthToken;
        $metadata = [
            'title' => 'Header-List | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Header/List",['token' => $token])->with($metadata);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $token = $this->xAuthToken;
        $metadata = [
            'title' => 'Header-Add | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        return Inertia::render("Admin/Header/Add",['token' => $token])->with($metadata);
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
        $token = $this->xAuthToken;
        $metadata = [
            'title' => 'Header-Edit | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $data = [
            'id' => $id
        ];
        $response = Http::withHeaders([
            'x-auth-token' => $token,
        ])->post(env('NODE_BASEURL_LIVE').'header/getHeaderDataById', $data);
        $data = $response->json();
        $data['data']['social_links'] = json_decode($data['data']['social_links']);
//        dd($data['data']);
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Header/Edit",[
            'header' => $data['data'],
            'token' => $token
        ])->with($metadata);
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
        $token = $this->xAuthToken;
        $data = [
            'id' => $id
        ];
        $response = Http::withHeaders([
            'x-auth-token' => $token,
        ])->post(env('NODE_BASEURL_LIVE').'header/deleteHeaderData', $data);
        unset($data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/header');
        }
    }
}
