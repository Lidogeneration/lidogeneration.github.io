<div class="bllurImg repair-bllurImg">
  <div class="bllurImg__wrap">
    <img src="<?php bloginfo(template_url);?>/img/prLogo.png" alt="">
  </div>
  <!-- /.bllurImg__wrap -->
</div>
<!-- /.bllurCont -->

<section class="about_repair about_motor">
<div class="globalCont">
  <div class="about_repair-cont">
    <div class="about_repair-cont-items">
      <div class="about_repair-cont-items-img">
      <h3 class="d-lg-none text-center"><?php echo get_the_title( 123 );?></h3>
        <img src="<?php the_field('other_img', 123); ?>" alt="<?php echo get_the_title( 123 );?>">
      </div>
      <!-- /.about_repair-cont-items-img -->
    </div>
    <!-- /.about_repair-cont-items -->
    <div class="about_repair-cont-items motor-items-text">
      <div class="about_repair-cont-items-desc">
        <h3 class="d-none d-lg-block"><?php echo get_the_title( 123 );?></h3>
        <?php echo get_post( 123 )->post_content;?>
        <a href="#mpopup-form" class="mainBtnC mpopup"  onclick="setNameScroll('Бесплатная консультация - > Склад запчастей','Введите данные и мы свяжемся с Вами в течение 30 минут');">Бесплатная консультация</a>
      </div>
      <!-- /.about_repair-cont-items-desc -->
    </div>
    <!-- /.about_repair-cont-items -->
  </div>
  <!-- /.about_repair-cont -->
</div>
</section>