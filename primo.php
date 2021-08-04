<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Primo</title>
</head>
<body>
    <header id="titulo">
        <h1>Los Numeros Primos</h1>
    </header>
    <center>
        <?php
            for ($i=1; $i <20 ; $i++) { 
                $a=1;
                $cont=0;
                while ($a <=$i) {
                    if ($i%$a==0) {
                        $cont++;
                    }
                    $a++;
                }
                if ($cont==2) {
                    echo "<table border='1' class='table'>";
                    echo "<tr id='row'>";
                    echo "<td class='cols'>el numero</td>";
                    echo "<td class='cols'>$i</td>";
                    echo "<td class='cols'>es primo</td>";
                    echo "</tr>";
                    echo "</table>";
                }
            }
        ?>
    </center>
</body>
</html>