<?php
remove_action ('wp_head','rsd_link');
remove_action ('wp_head','wlwmanifest_link');
remove_action ('wp_head','wp_generator');

show_admin_bar(false);


add_action( 'wp_enqueue_scripts', 'generationlead_styles' );
add_action( 'wp_enqueue_scripts', 'main_js' );

function main_js() {
	wp_enqueue_script( 'jqueryMy', get_template_directory_uri().'/libs/jquery-3.4.1.min.js', array('jquery'),null,true );
	wp_enqueue_script( 'inputMask', get_template_directory_uri().'/libs/jquery.inputmask.bundle.min.js', array('jquery'),null,true );
	wp_enqueue_script( 'psti', get_template_directory_uri().'/libs/psti/jquery.malihu.PageScroll2id.min.js', array('jquery'),null,true );
	wp_enqueue_script( 'mpopup', get_template_directory_uri().'/libs/magnific-popup/jquery.magnific-popup.min.js', array('jquery'),null,true );
	wp_enqueue_script( 'slick', get_template_directory_uri().'/libs/slick/slick.min.js', array('jquery'),null,true );
	wp_enqueue_script( 'bootstrap', get_template_directory_uri().'/libs/bootstrap/bootstrap.min.js', array('jquery'),null,true );
	wp_enqueue_script( 'fontawesome', get_template_directory_uri().'/libs/fontawesome/js/all.min.js', array('jquery'),null,true );
	wp_enqueue_script( 'aos', get_template_directory_uri().'/libs/aos/aos.js', array('jquery'),'1',true );
	wp_enqueue_script( 'plug', get_template_directory_uri().'/js/plug.js', array('jquery'),'2',true );
	wp_enqueue_script( 'main', get_template_directory_uri().'/js/main.js', array('jquery'),'1',true );

}

function generationlead_styles() {
	wp_enqueue_style( 'main', get_stylesheet_uri() );
	wp_enqueue_style( 'aos', get_template_directory_uri() .'/libs/aos/aos.css',array(),'1');
	wp_enqueue_style( 'slick', get_template_directory_uri() .'/libs/slick/slick.css',array(),'1');
  wp_enqueue_style( 'slick-theme', get_template_directory_uri() .'/libs/slick/slick-theme.css',array(),'1');
  wp_enqueue_style( 'bootstrap', get_template_directory_uri() .'/libs/bootstrap/bootstrap.min.css',array(),'1');
	wp_enqueue_style( 'mpopup', get_template_directory_uri() .'/libs/magnific-popup/magnific-popup.css',array(),'1');
  wp_enqueue_style( 'fontawesome', get_template_directory_uri() .'/libs/fontawesome/css/all.min.css',array(),'1');
  wp_enqueue_style( 'main-custom', get_template_directory_uri() .'/css/main.css',array(),'1');
}


add_theme_support( 'post-thumbnails' );

