<?php

    date_default_timezone_set('America/Sao_Paulo');
    $autoload = function($class){
        if($class == 'Email'){
            require_once('classes/phpmailer/PHPMailerAutoload.php');
        }
        include('classes/'.$class.'.php');
    };

    spl_autoload_register($autoload);

    define('INCLUDE_PATH','http://localhost/pess/portfolio/');

    //Connect with database!
    //define('HOST','localhost');
    //define('USER','root');
    //define('PASSWORD','');
    //define('DATABASE','');