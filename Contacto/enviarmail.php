<?php 
$mail= $_POST["email"]; 
$asu= $_POST["asun"]; 
$men= $_POST["mens"]; 
mail('meccalo@hotmail.com', $asu, $men); 
?>