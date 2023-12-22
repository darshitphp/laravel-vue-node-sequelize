<?php

namespace App\Http\Controllers;

use App\Models\Popup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class PopupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $metadata = [
            'title' => 'Popup-List | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Popup/List")->with($metadata);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $metadata = [
            'title' => 'Popup-Add | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $pageData = Http::post(env('NODE_BASEURL_LOCAL').'page/pageData');
        return Inertia::render("Admin/Popup/Add",[
            'data' => $pageData['data']
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
    public function show(Popup $popup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $metadata = [
            'title' => 'Popup-Edit | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $data = [
            'id' => $id
        ];
        $response = Http::post(env('NODE_BASEURL_LOCAL').'popup/getPopupDataById', $data);
        $pageData = Http::post(env('NODE_BASEURL_LOCAL').'page/pageData');
        $data = $response->json();
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Popup/Edit",[
            'data' => $data['data'],
            'page' => $pageData['data']
        ])->with($metadata);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Popup $popup)
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
        $response = Http::post(env('NODE_BASEURL_LOCAL').'page/deletePopupData', $data);
        unset($data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/popup');
        }
    }
}
