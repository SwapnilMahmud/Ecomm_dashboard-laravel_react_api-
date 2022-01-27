<?php

namespace App\Http\Controllers;
use shurjopayv2\ShurjopayLaravelPackage8\Http\Controllers\ShurjopayController;

use Illuminate\Http\Request;

class PaymentController extends Controller
{  
    function index(){
   

        $info = array( 'currency' => "BDT", 'amount' =>100 , 'order_id' => "sp31568944", 'discsount_amount' =>10 , 'disc_percent' =>2 , 'client_ip' => "102.101.1.1", 'customer_name' => "swapnil", 'customer_phone' => "01839500005", 'email' => "mahmudaiub51@gmail.com", 'customer_address' => "Dhaka,kuril", 'customer_city' => "dhaka", 'customer_state' => "kuril", 'customer_postcode' => "1212", 'customer_country' => "Bangladesh", );

        $shurjopay_service = new ShurjopayController(); 
        return $shurjopay_service->checkout($info);


    return $user;
}

}
