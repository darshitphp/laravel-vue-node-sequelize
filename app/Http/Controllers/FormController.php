<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $token = $this->xAuthToken;
        $metadata = [
            'title' => 'Form-List | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Form/List",['token' => $token])->with($metadata);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $token = $this->xAuthToken;
        $metadata = [
            'title' => 'Form-Add | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];

        return Inertia::render("Admin/Form/Add",['token' => $token])->with($metadata);
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
    public function show(Form $form)
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
            'title' => 'Form-Edit | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $data = [
            'id' => $id
        ];
        $response = Http::withHeaders([
            'x-auth-token' => $token,
        ])->post(env('NODE_BASEURL_LIVE').'form/getFormDataById', $data);
        $data = $response->json();
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Form/Edit",[
            'form' => $data['data'],
            'token' => $token
        ])->with($metadata);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Form $form)
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
        ])->post(env('NODE_BASEURL_LIVE').'form/deleteFormData', $data);
        unset($data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/form');
        }
    }
}
