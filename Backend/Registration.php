<?php
    $conn = new mysqli("localhost", "root","reactjsdb");
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }


?>