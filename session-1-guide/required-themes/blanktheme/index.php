<?php
get_header();
if ( have_posts() ) :
	while ( have_posts() ) :
		the_post();
?>


<?php
	endwhile;

	the_posts_navigation();

else :

	echo "No content";

endif;
?>


<?php
get_footer();