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
        <li><a class="selected cool-link" href="#home">Home</a></li>
        <li><a class="cool-link" href="#sobre">Sobre</a></li>
        <li><a class="cool-link" href="#services">Serviços</a></li>
        <li><a class="cool-link" href="#portfolio">Portfólio</a></li>
        <li><a class="cool-link" href="#contato">Contato</a></li>
      </ul>
    </nav><!--desktop-->
    <nav class="mobile">
      <div class="menu-btn" aria-expanded="false">
        <div class="menu-btn-cool"></div>
      </div><!--menu-btn-->
      <ul aria-expanded="false">
        <li><a class="selected cool-link" href="#home">Home</a></li>
        <li><a class="cool-link" href="#sobre">Sobre</a></li>
        <li><a class="cool-link" href="#services">Serviços</a></li>
        <li><a class="cool-link" href="#portfolio">Portfólio</a></li>
        <li><a class="cool-link" href="#contato">Contato</a></li>
      </ul>
    </nav><!--mobile-->
  </div><!--container-->
</header>

  <div id="btnScrollToTop" class="scroll-top">
    <i class="fas fa-arrow-up"></i>
  </div><!--scrollTop-->

<?php

  if(file_exists('pages/'.$url.'.php')){
    include('pages/'.$url.'.php');
  }else{
    //podemos fazer o que quiser pois a pagina não existe.
    include('pages/home.php');
  }
?>
<script src="<?= INCLUDE_PATH ?>src/all.min.js"></script>
<script type="module" src="<?= INCLUDE_PATH ?>src/App.js"></script>
</body>
</html>