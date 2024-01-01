<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $token = $this->xAuthToken;
        $metadata = [
            'title' => 'Slider-List | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Slider/List",['token' => $token])->with($metadata);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $token = $this->xAuthToken;
        $metadata = [
            'title' => 'Slider-Add | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        return Inertia::render("Admin/Slider/Add",['token' => $token])->with($metadata);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Slider $slider)
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
            'title' => 'Slider-Edit | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $data = [
            'id' => $id
        ];
        $response = Http::withHeaders([
            'x-auth-token' => $token,
        ])->post(env('NODE_BASEURL_LIVE').'slider/getSliderDataById', $data);
        $data = $response->json();
//        dd($data['data']);
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Slider/Edit",[
            'slider' => $data['data'],
            'token' => $token
        ])->with($metadata);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Slider $slider)
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
        ])->post(env('NODE_BASEURL_LIVE').'slider/deleteSliderData', $data);
        unset($data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/slider');
        }
    }
}
