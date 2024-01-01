<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $token = $this->xAuthToken;
        $metadata = [
            'title' => 'Product-List | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Product/List",['token' => $token])->with($metadata);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $token = $this->xAuthToken;
        $metadata = [
            'title' => 'Product-Add | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $response = Http::withHeaders([
            'x-auth-token' => $token,
        ])->post(env('NODE_BASEURL_LIVE').'category/categoryData');
        $data = $response->json();
        return Inertia::render("Admin/Product/Add",[
            'category' => $data['data'],
            'token' => $token
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
    public function show(Product $product)
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
            'title' => 'Product-Edit | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $data = [
            'id' => $id
        ];
        $response = Http::withHeaders([
            'x-auth-token' => $token,
        ])->post(env('NODE_BASEURL_LIVE').'product/getProductDataById', $data);
        $data = $response->json();
        $categoryData = Http::withHeaders([
            'x-auth-token' => $token,
        ])->post(env('NODE_BASEURL_LIVE').'category/categoryData');
        $category_data = $categoryData->json();
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Product/Edit",[
            'product' => $data['data'],
            'category' => $category_data['data'],
            'token' => $token
        ])->with($metadata);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
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
        ])->post(env('NODE_BASEURL_LIVE').'product/deleteProductData', $data);
        unset($data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/product');
        }
    }
}
