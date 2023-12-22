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
        $metadata = [
            'title' => 'Product-List | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Product/List")->with($metadata);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $metadata = [
            'title' => 'Product-Add | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $response = Http::post(env('NODE_BASEURL_LOCAL').'category/categoryData');
        $data = $response->json();
        return Inertia::render("Admin/Product/Add",[
            'category' => $data['data']
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
        $metadata = [
            'title' => 'Product-Edit | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $data = [
            'id' => $id
        ];
        $response = Http::post(env('NODE_BASEURL_LOCAL').'product/getProductDataById', $data);
        $data = $response->json();
        $categoryData = Http::post(env('NODE_BASEURL_LOCAL').'category/categoryData');
        $category_data = $categoryData->json();
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Product/Edit",[
            'product' => $data['data'],
            'category' => $category_data['data']
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
        $data = [
            'id' => $id
        ];
        $response = Http::post(env('NODE_BASEURL_LOCAL').'product/deleteProductData', $data);
        unset($data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/product');
        }
    }
}
