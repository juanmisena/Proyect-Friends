<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
</head>
<body>
    <?php
        $fibonacci = [];

        for($i=0; $i < 20; $i++) {
          if($i <= 1) {
            $fibonacci[$i] = 1;
            continue;
          }
          $fibonacci[$i] = $fibonacci[$i-1] + $fibonacci[$i-2]; 
        }
        
        print_r($fibonacci);
    ?>
</body>
</html>