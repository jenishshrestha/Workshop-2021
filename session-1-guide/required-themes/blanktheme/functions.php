<?php

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Enqueue scripts and styles.
 */
function blank_scripts() {
	wp_enqueue_style( 'blank-style', get_stylesheet_uri(), array(), _S_VERSION );
}
add_action( 'wp_enqueue_scripts', 'blank_scripts' );

if ( ! function_exists( 'blank_setup' ) ){
    function blank_setup() {
        register_nav_menus(
            array(
                'menu-1' => esc_html__( 'Primary', 'blank' ),
            )
        );
    }
}

add_action( 'after_setup_theme', 'blank_setup' );