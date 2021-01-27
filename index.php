<?php
  include('config.php');
  $url = @explode('/',$_GET['url'])[0];
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <!--// title //-->
  <title>Pess</title>

  <!--// meta //-->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!--// link //-->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="<?= INCLUDE_PATH ?>css/style.css">
</head>
<body>

<header>
  <div class="container">
    <div class="logo"><a href="<?= INCLUDE_PATH ?>">Pess</a></div><!--logo-->
    <nav class="desktop">
      <ul>
        <li><a class="selected" href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav><!--desktop-->
    <nav class="mobile">
      <a class="iconMenu" href=""><i class="fas fa-align-right"></i></a>
      <ul>
        <li><a class="selected" href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav><!--mobile-->
  </div><!--container-->
</header>

<?php
  if($url == '')
    include('pages/home.php');
?>
  
<script src="<?= INCLUDE_PATH ?>js/all.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>