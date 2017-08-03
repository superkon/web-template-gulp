<div class="footer__menu__item">
  <a href="services.php" class="footer__menu__link"><?=showContent(array("mainmenu", "service"))?></a>
</div>
<?php foreach ($footer_services as $footer){ ?>
<div class="footer__menu__item">
  <a href="services.php?menu=<?=$footer['id']?>" class="footer__menu__link"><?=$footer['title']?></a>
</div>
<?php } ?>
