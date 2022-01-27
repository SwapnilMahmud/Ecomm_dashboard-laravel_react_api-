<?php

namespace App\Http\Controllers;

use App\Models\cr;
use Illuminate\Http\Request;
use shurjopayv2\ShurjopayLaravelPackage8\Http\Controllers\ShurjopayController;

class Testcontroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $info = array( 'currency' => "Taka", 'amount' =>"100", 'order_id' => "spay612b73a935ab1", 'discsount_amount' =>0 , 'disc_percent' =>0 , 'client_ip' => "102.101.1.1", 'customer_name' => "Mahmud", 'customer_phone' => "01839500005", 'email' => "mahmudaiub51@gmail.com", 'customer_address' => "Dhaka", 'customer_city' => "Dhaka", 'customer_state' => "kuril", 'customer_postcode' => "+880", 'customer_country' => "Bangladesh", );
        $shurjopay_service = new ShurjopayController(); 
        return $shurjopay_service->checkout($info);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\cr  $cr
     * @return \Illuminate\Http\Response
     */
    public function show(cr $cr)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\cr  $cr
     * @return \Illuminate\Http\Response
     */
    public function edit(cr $cr)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\cr  $cr
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, cr $cr)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\cr  $cr
     * @return \Illuminate\Http\Response
     */
    public function destroy(cr $cr)
    {
        //
    }
}
