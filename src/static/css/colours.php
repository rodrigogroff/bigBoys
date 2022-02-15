<?php

$primary_color = '';
if(of_get_option('primary_color')) $primary_color = of_get_option('primary_color');

$matches_shape = get_theme_file_uri('img/matches-shape.png');

$header_font_color = '';
if(of_get_option('header_font_color')) $header_font_color = of_get_option('header_font_color');

$button = '';
if(of_get_option('button')) $button = of_get_option('button');

$button_hover = '';
if(of_get_option('button_hover')) $button_hover = of_get_option('button_hover');

$bottom_grad_color = '';
if(of_get_option('bottom_grad_color')) $bottom_grad_color = of_get_option('bottom_grad_color');

$top_grad_color = '';
if(of_get_option('top_grad_color')) $top_grad_color = of_get_option('top_grad_color');

$menu_extra = get_theme_file_uri('img/menu-extra.png');

$bodygc1 = '';
if(of_get_option('bodygc_1')) $bodygc1 = of_get_option('bodygc_1');

$bodygc2 = '';
if(of_get_option('bodygc_2')) $bodygc2 = of_get_option('bodygc_2');

$bodygc3 = '';
if(of_get_option('bodygc_3')) $bodygc3 = of_get_option('bodygc_3');

$header_bg = '';
if(of_get_option('header_bg')) $header_bg = of_get_option('header_bg');

$copyright_color = '';
if(of_get_option('copyright_color')) $copyright_color = of_get_option('copyright_color');

$footer_bg = '';
if(of_get_option('footer_bg')) $footer_bg = of_get_option('footer_bg');


$gameaddict_colors_css = "
.psearch-content,.widget a, html body .widget a, body .widget  .page_item a, body .widget  .recentcomments a, .woocommerce ul.product_list_widget li a:hover span, body #latest-twitter-follow-link a, .latest-twitter-tweet i.fa, body .vc_images_carousel .vc_carousel-control, body a, .social a, .dropdown-menu li > a:hover, .wallnav i,  div.rating:after, footer .copyright .social a:hover, .navbar-inverse .brand:hover, .member:hover > .member-social a, footer ul li a:hover, body .breadcrumbs span a, .blog-ind .post-pinfo i, #respond .add-on i, .widget .review > li:hover .read-more-link, .post-meta i, .pagination ul li a, .pagination ul > a.page-selector, .widget .block_tabs .tab-content .review-single a.read-more-link, .ticker-title, .ticker p a, .wp-clanwars-pagination a, .matchimages .matchpage-versus, .clanwar-list .maplist, .clanwar-list .maplist a, .post-pinfo .fa, .woocommerce div.product .woocommerce-tabs .panel h2, .comment-body .comment-author .comment-info a, #myModalR .modal-header h3, .bbp-forum-info i, .bbp-topic-title i {

	color: $primary_color;
}
.sticky .blog-content h2 a, footer .copyright a, footer ul li a:hover, .cart-notification span.item-name, .woocommerce div.product p.price, .price span.amount, .woocommerce .widget_shopping_cart .total span, .nm-date span, .topbar .top-ticker i, .topbar-register a, .dropdown-menu > li > a:hover, .footer_widget h3, .widget .clanwar-list .date, .overall-score .rating .fa-star:before, .overall-score .rating .fa-star-half:before, .mcontainer, .portfolio .pinfo a, .owl-buttons .owl-prev:before, .owl-buttons .owl-next:before, .woocommerce table.shop_table tr td a, .product_meta .posted_in a {
	color: $primary_color !important;
}

.gallery-item a img, .match-map .map-image img, .nextmatch_wrap img, .clan1img, .matchimages img, .blog-content blockquote, .widget ul.clanwar-list li.clanwar-item:before, .footer_widget h3.widget-title, footer ul li, .pagination ul li, .pagination ul > a.page-selector, .wp-clanwars-pagination a, .wp-clanwars-pagination span.page-numbers, .woocommerce .woocommerce-ordering select, .woocommerce .woocommerce-ordering select:focus, .woocommerce .woocommerce-ordering select:active, .woocommerce-ordering:focus, .orderby option, .woocommerce nav.woocommerce-pagination ul, .woocommerce nav.woocommerce-pagination ul li {
	border-color: $primary_color !important;
}
body .vc_tta-color-black.vc_tta-style-classic .vc_tta-panel .vc_tta-panel-heading, .nextmatch_wrap .vsdiv, .results-main .vsdiv, .splitter li[class*=\"selected\"] > a, .splitter li a:hover, .ls-wp-container .ls-nav-prev,
.ls-wp-container .ls-nav-next, a.ui-accordion-header-active, .accordion-heading:hover, .block_accordion_wrapper .ui-state-hover, .cart-wrap, #buddypress div.item-list-tabs ul li a, .nextmatch_wrap .teamwrapper hr:after, .nextmatch_wrap .nm-date .gametitle, .widget .wcontainer .cat-item, .pcomments, body.home .ls-slide .comment-reply-link, .newsb-text .newsb-category, .pagination ul li a:hover, .pagination ul > a.page-selector:hover, .pagination ul > li.active > a, .r-home-team hr:after, .r-opponent-team hr:after, .wp-clanwars-pagination span.page-numbers, .wp-clanwars-pagination a:hover,.ncategory {
	background-color: $primary_color;
}

.news_horizontal_tabbed .comment-reply-link:hover , .beaconCircle1, .beaconCircle2, .portfolio .pview .button-medium:hover, .woocommerce nav.woocommerce-pagination ul li a:focus, .woocommerce nav.woocommerce-pagination ul li a:hover, .woocommerce nav.woocommerce-pagination ul li span.current {
	background-color: $primary_color !important;
}

.clanwarlist-page > li.odd, .bbp-body > ul.odd{
	background: #cecece url($matches_shape) top right no-repeat;
}

.clanwarlist-page > li {
	background: url( $matches_shape ) top right no-repeat;
}

.owl-buttons .owl-next:hover:before, .owl-buttons .owl-prev:hover:before {
	text-shadow: 0 0 10px $primary_color;
}

.clanwarlist-page .upcoming, .clanwar-list .scores-wrapper .draw {
	background: #fffc24 url($matches_shape) -3% 43% no-repeat;
}

.clanwarlist-page .scores-wrapper .win {
	background: #a5d808 url( $matches_shape ) -3% 43% no-repeat;
}

.clanwarlist-page .scores-wrapper .loose {
	background: #ff3000 url($matches_shape) -3% 43% no-repeat;
}

.portfolio .row .span8 .plove a:hover, .span3 .plove a:hover, .icons-block i:hover,
 .similar-projects ul li h3,
 .member h3, .main-colour,
  .dropdown-menu li > a:focus, .dropdown-submenu:hover > a,  .pagination ul > li > a:hover, .pagination ul > li > a:focus,
  .comment-body .comment-author,  .navigation a:hover, .cart-wrap a, .member h3 a:hover {
    color: $primary_color;
}
.woocommerce nav.woocommerce-pagination ul li a:focus,
.block h3:first-child, .tagcloud a:hover, .progress-striped .bar ,  .bgpattern:hover > .icon, .progress-striped .bar, .member:hover > .bline, .blog-date span.date,
 .pbg, .pbg:hover, .pimage:hover > .pbg, ul.social-media li a:hover, .navigation a ,.pagination ul > .active > span, .list_carousel a.prev:hover, .list_carousel a.next:hover, .pricetable .pricetable-col.featured .pt-price, .block_toggle .open, .pricetable .pricetable-featured .pt-price, #bbpress-forums li.bbp-header, #bbpress-forums fieldset.bbp-form legend, .bbp-topic-title h3, .modal-header, .modal-body .reg-btn, #LoginWithAjax_SubmitButton .reg-btn, .title-wrapper, .footer_widget h3, buddypress div.item-list-tabs ul li.selected a, #buddypress div.item-list-tabs ul li.current a, #buddypress div.item-list-tabs ul li a:hover, .results-main-bg, .nextmatch_widget, .ticker-wrapper.has-js, .ticker-swipe  {
    background-color: $primary_color;
}
.navbar-inverse .brand,
.navbar-inverse .nav > li > a,
.navbar-inverse .nav > li > a  > span{
	color: $header_font_color;
}
body .vc_images_carousel .vc_carousel-control:hover, body a, body a:hover, body a:active, body a:focus, body a:visited{
	color: $button;
}
.dropdown .caret{
  border-top: 4px solid $header_font_color !important;
 }
.bgpattern, .post-review, .widget_shopping_cart, .woocommerce .cart-notification, .cart-notification{
	background-color: $primary_color;
}
.navbar-inverse, .modal-header, h3.widget-title, .widget h3, .member h3.widget-title,
.widget .clanwar-list .scores, .wpb_heading,
.widget .clanwar-list .upcoming,
.widget .clanwar-list .playing,
.widget .clanwar-list .tabs li:hover a,
.widget .clanwar-list .tabs li.selected a, .blog-date span.date, .blog-date-noimg span.date, .clanwar-list .draw, .title-wrapper, .widget .clanwar-list > li:first-child, .wcontainer .block_tabs .tab-inner, .isotopeMenu:before, .cat-news .block_tabs .tab-inner, .clanwarlist-page > li:first-child {
	background-image: -webkit-linear-gradient(bottom, $bottom_grad_color, $top_grad_color);
	background-image: -moz-linear-gradient(bottom, $bottom_grad_color, $top_grad_color);
	background-image: -o-linear-gradient(bottom, $bottom_grad_color, $top_grad_color);
	background-image: linear-gradient(to top, $bottom_grad_color, $top_grad_color);
}

.widget ul.clanwar-list li.clanwar-item:before {
	background: -webkit-linear-gradient(left, $bottom_grad_color, transparent);
	background: -moz-linear-gradient(right, $bottom_grad_color, transparent);
	background: -o-linear-gradient(right, $bottom_grad_color, transparent);
	background: linear-gradient(to right, $bottom_grad_color, transparent);
}

.isotopeItemOverlay:before, .owl-item .car_image:after {
	background: -webkit-linear-gradient(bottom, $bottom_grad_color, transparent)!important;
	background: -moz-linear-gradient(bottom, $bottom_grad_color, transparent)!important;
	background: -o-linear-gradient(bottom, $bottom_grad_color, transparent)!important;
	background: linear-gradient(to top, $bottom_grad_color, transparent)!important;
}


.button-medium, .button-small, .button-big, button[type=\"submit\"], input[type=\"submit\"],
body .btninvert:hover{
	background: $button  url($menu_extra) top right repeat-x !important;
}
 body .btninvert, .nav-tabs > li > a:hover, .nav-tabs > li > a:focus , .block_tabs .nav-tabs li a:hover,
 .button-medium:hover, .button-small:hover, .news_horizontal_tabbed .block_tabs .nav-tabs li.ui-tabs-active a,
 .button-big:hover, .blog-date span.date:hover, input[type=\"submit\"]:hover ,button[type=\"submit\"]:hover,
 .pricetable .pricetable-col.featured .pt-top, .pricetable .pricetable-featured .pt-top{
    background:$button_hover url($menu_extra) top right repeat-x !important;
}


.topbar-login{
	background-color:$button_hover;
}
.topbar-login:hover{
	background-color: $button;
}
.woocommerce a.button, .woocommerce button.button, .woocommerce input.button, .woocommerce #respond input#submit, .woocommerce #content input.button, .woocommerce-page a.button, .woocommerce-page button.button, .woocommerce-page input.button, .woocommerce-page #respond input#submit, .woocommerce-page #content input.button, .woocommerce div.product .woocommerce-tabs ul.tabs li a, .woocommerce #content div.product .woocommerce-tabs ul.tabs li a, .woocommerce-page div.product .woocommerce-tabs ul.tabs li a, .woocommerce-page #content div.product .woocommerce-tabs ul.tabs li a {
	background: $button  !important;
}


.woocommerce a.button:hover, .woocommerce button.button:hover, .woocommerce input.button:hover, .woocommerce #respond input#submit:hover, .woocommerce #content input.button:hover, .woocommerce-page a.button:hover, .woocommerce-page button.button:hover, .woocommerce-page input.button:hover, .woocommerce-page #respond input#submit:hover, .woocommerce-page #content input.button:hover, .woocommerce div.product .woocommerce-tabs ul.tabs li.active a, .woocommerce #content div.product .woocommerce-tabs ul.tabs li.active a, .woocommerce-page div.product .woocommerce-tabs ul.tabs li.active a, .woocommerce-page #content div.product .woocommerce-tabs ul.tabs li.active a, .woocommerce table.cart td.actions .button.checkout-button {
	background: $button_hover  !important;
}

.woocommerce-page .product-wrap a.button{
	background-color: $button !important;
}
.woocommerce-page .product-wrap a.button:hover{
	background-color:$button_hover !important;
}
.woocommerce span.onsale, .woocommerce-page span.onsale, .woocommerce-message, .woocommerce-error, .woocommerce-info, .woocommerce .widget_price_filter .ui-slider .ui-slider-range, .woocommerce-page .widget_price_filter .ui-slider .ui-slider-range{
	background: $primary_color !important;
}

.woocommerce .product-wrap .add_to_cart_button.added, .woocommerce .product-wrap .add_to_cart_button.added:hover {
	border:2px solid $button_hover !important;
	background-color: $button_hover !important;
}

body .nextmatch_wrap .vsdiv:before, body .results-main .vsdiv:before,
body .nextmatch_wrap .vsdiv:after, body .results-main .vsdiv:after,
textarea:focus,
input[type=\"text\"]:focus,
input[type=\"password\"]:focus,
input[type=\"datetime\"]:focus,
input[type=\"datetime-local\"]:focus,
input[type=\"date\"]:focus,
input[type=\"month\"]:focus,
input[type=\"time\"]:focus,
input[type=\"week\"]:focus,
input[type=\"number\"]:focus,
input[type=\"email\"]:focus,
input[type=\"url\"]:focus,
input[type=\"search\"]:focus,
input[type=\"tel\"]:focus,
input[type=\"color\"]:focus,
.uneditable-input:focus,
.gallery-item a img:hover{
border-color: $primary_color;

}


.blog-content-title span.comments {
    background: $button !important;
}

.block h3:first-child, #bbpress-forums li.bbp-header, #bbpress-forums fieldset.bbp-form legend, .bbp-topic-title h3, .bbp-topics-front ul.super-sticky i.icon-comment,
.bbp-topics ul.super-sticky i.icon-comment,
.bbp-topics ul.sticky i.icon-comment,
.bbp-forum-content ul.sticky i.icon-comment,
.modal-header h3, h3.widget-title, .footer_widget h3, .widget h3, .header-colour,  .member h3 a {
	color: $header_font_color ;
}



body.single .content-wrapper, body.page-template .blog {
	margin-top: -6px;
	background: -webkit-radial-gradient(top,$bodygc1,$bodygc2,$bodygc3);
	background: radial-gradient(at top,$bodygc1,$bodygc2,$bodygc3);
}

/* Backgrounds */
body .normal-page, body .portfolio, body .blog{
	background: -webkit-radial-gradient(top, $bodygc1, $bodygc2, $bodygc3);
    background: radial-gradient(at top, $bodygc1, $bodygc2, $bodygc3);
}

header, body{

    background-attachment: fixed !important;
	background:url($header_bg) no-repeat center top !important;
}
footer .copyright p{
	color: $copyright_color !important;
}
footer .copyright{

	background:url($footer_bg) no-repeat center top !important;
}

@media (max-width: 979px) {
.splitter li a, .nav-tabs a{
 background-color: $primary_color;
}
}
";