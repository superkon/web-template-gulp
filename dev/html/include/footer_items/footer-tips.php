<div class="footer__menu__item">
  <a href="tips.php" class="footer__menu__link"><?=showContent(array("mainmenu", "tips"))?></a>
</div>
<?php foreach ($footer_tips as $footer){ ?>
<div class="footer__menu__item">
  <a href="tips.php?menu=<?=$footer['id']?>" class="footer__menu__link"><?=$footer['title']?></a>
</div>
<?php } ?>
