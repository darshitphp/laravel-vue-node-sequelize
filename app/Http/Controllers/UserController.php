<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use App\Mail\HtmlEmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class UserController extends BaseController
{
    //
    public function index(){
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Tag/List");
    }

    public function dashboard(){
        //Loading component with proper file structure managable
        $metadata = [
            'title' => 'Dashboard | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        return Inertia::render("Admin/Dashboard")->with($metadata);
    }

    public function my_profile(){
        // Check if a user is authenticated
        if (auth()->check()) {
            $user = auth()->user();
        }else{
            $user = [];
        }
        //Loading component with proper file structure managable
        $metadata = [
            'title' => 'Profile | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $this->xAuthToken = Session::get('x-auth-token');
//        dd($this->xAuthToken);
        return Inertia::render("Admin/Profile",[
            "user" => $user,
            "token" => $this->xAuthToken
        ])->with($metadata);
    }

    public function my_profile_action(Request $request){
        dd($request);
    }

    public function add(){
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Tag/Add");
    }

    public function edit($iTagId){
        $data = [
            'iTagId' => $iTagId
        ];
        $response = Http::post(env('NODE_BASEURL_LIVE').'tags/getTagDataById', $data);
        $data = $response->json();
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Tag/Edit",[
            'tag' => $data['data']
        ]);
    }

    public function delete($iTagId){
        $data = [
            'iTagId' => $iTagId
        ];
        $response = Http::post(env('NODE_BASEURL_LIVE').'tags/deleteTagData', $data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/tag');
        }
    }

    public function login(){
        if (Auth::check()) {
            return redirect('/dashboard'); // Replace '/dashboard' with your intended dashboard URL
        }
        $metadata = [
            'title' => 'Login | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $data['old_remember'] = session('remember');
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Login",['old_remember' => session('remember')])->with($metadata);
    }

    public function forgot_password(){
        $metadata = [
            'title' => 'Forgot-Password | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        return Inertia::render("Admin/ForgotPassword")->with($metadata);
    }

    public function reset_password(Request $request){
        $resetToken = $request->input('q');
        $metadata = [
            'title' => 'Reset-Password | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $email = base64_decode($resetToken);
        return Inertia::render("Admin/ResetPassword",['email' => $email])->with($metadata);
    }

    public function getActiveUser(){
        if (auth()->check()) {
            // User is logged in
            $data = auth()->user();
            return response()->json([
                'data' => $data,
                'status' => '200',
                'message' => 'user authenticated successfully',
            ])->header('X-CSRF-TOKEN', csrf_token());
        } else {
            return response()->json([
                'data' => null,
                'status' => '500',
                'message' => 'User is not authenticated',
            ])->header('X-CSRF-TOKEN', csrf_token());
        }
    }

    public function removeFileFromPath(Request $request){
        $file = $request->input('filePath');
        if (isset($file)) {
            $publicPath = public_path();
            $filePath = $publicPath . $file;
            if (file_exists($filePath)) {
                unlink($filePath);
                echo json_encode(['success' => true, 'message' => 'File deleted successfully.']);
            } else {
                echo json_encode(['success' => false, 'message' => 'File not found.']);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid request.']);
        }
    }

    public function reset_password_action(Request $request)
    {
        $email = $request->input('email');
        $password = Hash::make($request->input('password'));
        $data = [
            'email' => $email,
            'password' => $password
        ];
        $response = Http::post(env('NODE_BASEURL_LIVE').'auth/update_user_password', $data);
        return $response->json();
    }

    public function forgot_password_action(Request $request){
        $email = $request->input('email');
        $userData = User::where('email', $email)->get();
        if(!empty($userData[0])){
            $resetPasswordLink = env('BASEURL_LIVE').'reset-password?q='.base64_encode($userData[0]['email']);
            require '../vendor/autoload.php'; // Include PHPMailer autoload file

            // Create a new PHPMailer instance
            $mail = new PHPMailer(true);

            try {
                // Server settings
                $mail->isSMTP();
                $mail->Host       = 'smtp.gmail.com'; // Your SMTP server
                $mail->SMTPAuth   = true;
                $mail->Username   = 'darshit.adorncommerce@gmail.com'; // Your SMTP username
                $mail->Password   = 'rqbe ogye linj bxaj'; // Your SMTP password
                $mail->SMTPSecure = 'tls';
                $mail->Port       = 587;

                // Recipients
                $mail->setFrom('darshit.adorncommerce@gmail.com', 'Custom web | Adorn commerce');
                $mail->addAddress($userData[0]['email'], 'Darshit Prajapati');

                // Content
                $mail->isHTML(true); // Set email format to HTML
                $mail->Subject = 'Forgot Password';
                $html = '';
                $header = '<div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid black; border-radius: 10px;">
    <header style="background-color: #ffffff; padding: 10px 0; text-align: center;">
        <img src="https://assets-global.website-files.com/651ab75e1593e4377b7954ca/65215ec4f6d6c2778cd69c17_AdornCommerce%20Logo.png" alt="Company Logo" style="max-width: 100%; height: auto;">
    </header>';
                $html .= $header;
                $html .= '<div style="padding: 20px; background-color: #fff;">
        <h2>Hello '.$userData[0]['user_name'].'</h2>
        <p>To Reset your password please click below button.</p>
        <div style="text-align: center; margin-top: 20px;">
            <a href="'.$resetPasswordLink.'" style="background-color: #000000; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
        </div>
    </div>';
                $footer = '<footer style="background-color: #ffffff; padding: 10px 0; text-align: center;">
        <div style="display: inline-block; margin: 0 10px;">
            <a href="https://www.facebook.com/adornCommerce"><img src="https://assets-global.website-files.com/651ab75e1593e4377b7954ca/651ab75e1593e4377b795558_facebook.svg" alt="Facebook" style="max-width: 30px; height: auto;"></a>
        </div>
        <div style="display: inline-block; margin: 0 10px;">
            <a href="https://twitter.com/adorncommerce"><img src="https://assets-global.website-files.com/651ab75e1593e4377b7954ca/652a7c86622571ba145ce59b_logo-black-p-500.png" alt="Twitter" style="max-width: 30px; height: auto;"></a>
        </div>
        <!-- Add more social media icons as needed -->
    </footer>';
                $html .= $footer;
                $html .= '</div>';
                $mail->Body    = $html;

                // Send the email
                $mail->send();
                $data['message'] = 'Email has been sent successfully.';
                $data['status'] = '200';
                return response()->json($data);
            } catch (Exception $e) {
                $data['message'] = "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
                $data['status'] = '500';
                return response()->json($data);
            }
        }else{
            $data['message'] = 'The provided email do not match our records.';
            $data['status'] = '500';
            return response()->json($data);
        }
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        $remember = $request->has('remember');
//        dd($remember);
        session(['remember' => $remember]);
        if (Auth::attempt($credentials,$remember, 'users')) {
            $user = Auth::user();
            $response = Http::post(env('NODE_BASEURL_LIVE').'auth/login', [
                'email' => $credentials['email'],
                'password' => $credentials['password'],
            ]);
            $userAuthApi = $response->json();
            Session::put('x-auth-token', $userAuthApi['token']);
            if($userAuthApi['token'] != null){
                $request->session()->regenerate();
                $user = Auth::user();

                $data['message'] = 'success';
                $data['status'] = '200';
                $data['data'] = $user;
                return response()->json($data);
            }else{
                $data['message'] = 'Internal server error';
                $data['status'] = '500';
                return response()->json($data);
            }
        }

        $data['message'] = 'The provided credentials do not match our records.';
        $data['status'] = '500';
        return response()->json($data);
    }

    public function register_action(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'user_name' => 'required|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'email' => $request->input('email'),
            'user_name' => $request->input('user_name'),
            'password' => Hash::make($request->input('password')),
        ]);

        if($user){
            $data['message'] = 'You have successfully registred pleas get back to login.';
            $data['status'] = '200';
        }else{
            $data['message'] = 'Something went wrong.';
            $data['status'] = '500';
        }

        return response()->json($data);
    }

    public function logout(){
        // Destroy the 'x-auth-token' session variable
        Session::forget('x-auth-token');
        Auth::logout();
//        dd(session('remember'));
        return redirect()->route('login');
    }

    public function sendHtmlEmail()
    {

        require '../vendor/autoload.php'; // Include PHPMailer autoload file

        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com'; // Your SMTP server
            $mail->SMTPAuth   = true;
            $mail->Username   = 'darshit.adorncommerce@gmail.com'; // Your SMTP username
            $mail->Password   = 'rqbe ogye linj bxaj'; // Your SMTP password
            $mail->SMTPSecure = 'tls';
            $mail->Port       = 587;

            // Recipients
            $mail->setFrom('darshit.adorncommerce@gmail.com', 'Custom web | Adorn commerce');
            $mail->addAddress('darshit@mailinator.com', 'Darshit Prajapati');

            // Content
            $mail->isHTML(true); // Set email format to HTML
            $mail->Subject = 'Forgot Password';
            $html = '';
            $header = '<div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid black; border-radius: 10px;">
    <header style="background-color: #ffffff; padding: 10px 0; text-align: center;">
        <img src="https://assets-global.website-files.com/651ab75e1593e4377b7954ca/65215ec4f6d6c2778cd69c17_AdornCommerce%20Logo.png" alt="Company Logo" style="max-width: 100%; height: auto;">
    </header>';
            $html .= $header;
            $html .= '<div style="padding: 20px; background-color: #fff;">
        <h2>Your Email Content Goes Here</h2>
        <p>This is the middle content of your email.</p>
        <div style="text-align: center; margin-top: 20px;">
            <a href="https://www.adorncommerce.com/" style="background-color: #007bff; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Visit Adorn Commerce</a>
        </div>
    </div>';
            $footer = '<footer style="background-color: #ffffff; padding: 10px 0; text-align: center;">
        <div style="display: inline-block; margin: 0 10px;">
            <a href="https://www.facebook.com/adornCommerce"><img src="https://assets-global.website-files.com/651ab75e1593e4377b7954ca/651ab75e1593e4377b795558_facebook.svg" alt="Facebook" style="max-width: 30px; height: auto;"></a>
        </div>
        <div style="display: inline-block; margin: 0 10px;">
            <a href="https://twitter.com/adorncommerce"><img src="https://assets-global.website-files.com/651ab75e1593e4377b7954ca/652a7c86622571ba145ce59b_logo-black-p-500.png" alt="Twitter" style="max-width: 30px; height: auto;"></a>
        </div>
        <!-- Add more social media icons as needed -->
    </footer>';
            $html .= $footer;
            $html .= '</div>';
            $mail->Body    = $html;

            // Send the email
            $mail->send();
            echo 'Email has been sent successfully.';
        } catch (Exception $e) {
            echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }

    public function register(){
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Register");
    }
}
