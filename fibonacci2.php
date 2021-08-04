<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fibonacci</title>
</head>
<body>
    <<?php
    // Cantidad de números que deseamos imprimir
	$limit = 10;
	$fibonacci=array(0,1);

	for($i=2;$i<=$limit;$i++){
	    // El valor actual es la suma de la posición actual -1 y la posición actual -2
		echo $fibonacci[]=$fibonacci[$i-1]+$fibonacci[$i-2]."<br/>";
	}
    ?>
</body>
</html>