<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //Loading component with proper file structure managable
        $data = [
            'title' => 'Page | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        return Inertia::render("Admin/Page/List")->with($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data = [
            'title' => 'Page-Add | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $sliderResponse = Http::post(env('NODE_BASEURL_LOCAL').'slider/sliderData', $data);
        $sliderData = $sliderResponse->json();
        $formResponse = Http::post(env('NODE_BASEURL_LOCAL').'form/formData', $data);
        $formData = $formResponse->json();
        return Inertia::render("Admin/Page/Add",[
            'slider' => $sliderData['data'],
            'form' => $formData['data']
        ])->with($data);
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
    public function show(Page $page)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($iPageId)
    {
        $data = [
            'id' => $iPageId
        ];
        $response = Http::post(env('NODE_BASEURL_LOCAL').'page/getPageDataById', $data);
        $data = $response->json();
        $sliderResponse = Http::post(env('NODE_BASEURL_LOCAL').'slider/sliderData', $data);
        $sliderData = $sliderResponse->json();
        $formResponse = Http::post(env('NODE_BASEURL_LOCAL').'form/formData', $data);
        $formData = $formResponse->json();
//        dd($data);
        $metaData = [
            'title' => 'Page-Edit | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Page/Edit",[
            'page' => $data['data'],
            'slider' => $sliderData['data'],
            'form' => $formData['data']
        ])->with($metaData);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Page $page)
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
            $response = Http::post(env('NODE_BASEURL_LOCAL').'page/deletePageData', $data);
        unset($data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/page');
        }
    }
}
