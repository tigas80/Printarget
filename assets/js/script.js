"use strict";

( function( $ )
{
    var stickyOn = $( 'header.sticky-on' ),
		toTop = $( '#toTop' );
	
	/**
	* Adaptive Menu Width
	*/

	var winObj = $( window ),
		docObj = $( document ),
		headerObj = $( 'header' ),
		bodyObj = $( 'body' ),
		ulMenu1 = $( 'ul.menu' );

	winObj.on( 'load', function()
	{
		var $preloader = $( '.loader-wrapper' );
			
		$preloader.find( '.cssload-loader' ).fadeOut();
		$preloader.delay( 350 ).fadeOut( 'slow' );

		if( winObj.width() > 992 )
		{
			ulMenu1.flexMenu( { showOnHover: true } );
		}
	} );

	ulMenu1.find( 'a' ).on( 'click', function( event )
	{
		if( !$( this ).attr( 'href' ) || $( this ).attr( 'href' ) === '#' )
		{
			event.preventDefault();
		}
	} );

	/**
	* Input Number Styling
	*/
	$(function() {
 
		(function quantityProducts() {
		  var $quantityArrowMinus = $( '.down-arrow' );
		  var $quantityArrowPlus = $( '.up-arrow' );
		  var $quantityNum = $( '.input-num' );
	   
		  $quantityArrowMinus.click( quantityMinus );
		  $quantityArrowPlus.click( quantityPlus );
	   
		  function quantityMinus() {
			if ( $quantityNum.val() > 1 ) {
			  $quantityNum.val( +$quantityNum.val() - 1 );
			}
		  }
	   
		  function quantityPlus() {
			$quantityNum.val( +$quantityNum.val() + 1 );
		  }
		})();
	   
	});

	docObj.ready( function()
	{
		/**
		* Form Styler
		*/
		var catSelect = $( '.category-select' )
		var	fontSelect = $( '.font-select' );

		if ( catSelect.length ) {

			$(function() {
				$( '.category-select' ).styler();
			});
		}

		if ( fontSelect.length ) {

			$(function() {
				$( '.font-select' ).styler();
			});
		}

		/**
		* Toggle Class for Radio Input 
		*/
		$( '.color-boxes' ).on( 'click', '.color-box', function( ){
			$( '.color-boxes .color-box' ).removeClass( 'checked' );
			$( this ).toggleClass( 'checked' );
		} );

		$( '.size-boxes' ).on( 'click', '.size-box', function( ){
			$( '.size-boxes .size-box' ).removeClass( 'checked' );
			$( this ).toggleClass( 'checked' );
		} );

		$( '.text-item .left-cell' ).change( function( ){
			$( this ).toggleClass( 'checked' );
		} );

		/**
		* Wow initialization
		*/
		new WOW().init();

		/**
		* Slick slider initialization
		*/

		$( '.related-products .items-container' ).slick( {
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			infinite: false,
			adaptiveHeight: true,
			arrows: true,
			prevArrow: '<i class="fa fa-angle-left left"></i>',
			nextArrow: '<i class="fa fa-angle-right right"></i>',
			responsive: [ {
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			}
			]
		} );
		
		$( '.nav-image-slider' ).slick( {
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.full-image-slider',
			arrows: false,
			focusOnSelect: true,
			infinite: false,
			responsive: [ {
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			} ]
		} );
	
		$( '.full-image-slider' ).slick( {
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			arrows: false,
			adaptiveHeight: true,
			asNavFor: '.nav-image-slider'
		} );

		$( '.post-quote-slider' ).slick( {
			autoplay: false,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			arrows: true,
			prevArrow: '<div class="arrows-wrapper left"></div>',
			nextArrow: '<div class="arrows-wrapper right"></i></div>',
		} );

		$( '.post-carousel' ).slick( {
			autoplay: false,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true
		} );

		
		$( '.single-service-slider' ).slick( {
			autoplay: true,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<div class="arrows-wrapper left"></div>',
			nextArrow: '<div class="arrows-wrapper right"></i></div>',
			responsive: [ {
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					autoplay: true
				}
			}
		]	
		} );

		$( '.recent-prints-slider' ).slick( {
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<i class="fa fa-angle-left left"></i>',
			nextArrow: '<i class="fa fa-angle-right right"></i>',
			responsive: [ {
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 590,
				settings: {
					slidesToShow: 2,
					arrows: false,
					autoplay: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: false,
					autoplay: true,
				}
			}
		]	
		} );

		$( '.print-collection-slider' ).slick( {
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<i class="fa fa-angle-left left"></i>',
			nextArrow: '<i class="fa fa-angle-right right"></i>',
			responsive: [ {
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					autoplay: true
				}
			}
		]	
		} );

		$( '.testimonial-slider' ).slick( {
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			adaptiveHeight: true,
			prevArrow: '<div class="arrows-wrapper left"></div>',
			nextArrow: '<div class="arrows-wrapper right"></i></div>'
		} );

		$( '.popular-slider' ).slick( {
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: '<i class="fa fa-angle-left left"></i>',
			nextArrow: '<i class="fa fa-angle-right right"></i>',
			responsive: [ {
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					autoplay: true
				}
			}
		]	
		} );
	} );

	/**
	* Price Filter Settings
	*/
	var filterLine = jQuery('.filter-price');
	
	if ( filterLine.length ) {
		var nonLinearSlider = document.getElementById('nonlinear');
		noUiSlider.create(nonLinearSlider, {
			connect: true,
			behaviour: 'tap',
			start: [ 30, 200 ],
			range: {
				// Starting at 500, step the value by 500,
				// until 4000 is reached. From there, step by 1000.
				'min': [ 0 ],
				'10%': [ 100, 1 ],
				'max': [ 900 ]
			}
		});

		var nodes = [
			document.getElementById('lower-value'), // 0
			document.getElementById('upper-value')  // 1
		];
		// Display the slider value and how far the handle moved
		// from the left edge of the slider.
		nonLinearSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
			nodes[handle].innerHTML = '$' + values[handle];
		});
	}

	/**
	* Mobile Sub Menu
	*/
	headerObj.on( 'click', '.menu.open .menu-item-has-children', function( e )
	{
		e.stopPropagation();
		$( e.target ).toggleClass( 'open-list' );
	} );

	/**
	* Toggle menu
	*/
	headerObj.on( 'click', '.toggle_menu', function()
	{
		$( this ).toggleClass( 'open' );
		if( $( this ).hasClass( 'open' ) )
		{
			$( '.menu' ).addClass( 'open' );
			bodyObj.addClass('no-scroll');
		}
		else
		{
			$( '.menu' ).removeClass( 'open' );
			$( '.menu-item-has-children' ).removeClass( 'open-list' );
			bodyObj.removeClass( 'no-scroll' );
		}
	} );

	/**
	 * Fixed Menu
	*/
	var nav1 = $( '.header-line-wrapper' )
		
	winObj.on( 'scroll', function()
	{
		if( $( this ).scrollTop() > 120 )
		{
			nav1.addClass( 'affix-top' );
		}
		else
		{
			nav1.removeClass( 'affix-top' );
		}
	} );

	winObj.on( 'load', function()
	{
		if( $( this ).scrollTop() > 0 )
		{
			nav1.addClass( 'affix-top' );
		}
		else
		{
			nav1.removeClass( 'affix-top' );
		}
	} );

	/**
	 * Equal height initialization
	*/
	$( '.equal-height' ).matchHeight();

	/**
	 * Parallax initialization
	*/
	$('.parallax').paroller();

	/**
	 * Animated Scroll To Top
	*/
	var toTop = $( '#toTop' );
	toTop.on( 'click', function()
	{
		$( 'html, body' ).animate( {
			scrollTop: 0
		}, 600 );
		return false;
	} );

	winObj.on( 'scroll', function()
	{
		if( $( this ).scrollTop() != 0 )
		{
			toTop.fadeIn();
		}
		else
		{
			toTop.fadeOut();
		}
	} );


	/**
	 * Accordion toggle 
	*/
	$( '.panel-group' ).on( 'click', '.panel-heading a', function() 
	{
		$( this ).siblings().find( '.panel-collapse' ).collapse( 'show' );
		$( '.panel-collapse' ).collapse( 'hide' );
	});

	/**
	* Muuri Settings
	*/

	if( $( '.grid' ).length )
	{
		var grid = new Muuri( '.grid' );
	}

	/**
	* Tabs toggle
	*/
	$( '.nav-tabs a' ).on( 'click', function()
	{
		$( this ).tab( 'show' );
	} );

	/*----------------------------------------------------*/
	/*	Progress Bar
	/*----------------------------------------------------*/
	$( '[data-pbar-animate]' ).each( function( )
	{
		var id = '_' + Math.random( ).toString( 36 ).substr( 2, 9 ),
			animate = $( this ).attr( 'data-pbar-animate' ),
			from = $( this ).attr( 'data-pbar-from' ),
			to = $( this ).attr( 'data-pbar-to' );

		$( this ).attr( 'id', id );
		
		var bar = new ProgressBar.Line( '#' + id, {
			strokeWidth: 1,
			color: '#fff',
			trailColor: '#fff',
			trailWidth: 1,
			easing: 'easeInOut',
			duration: 10000,
			svgStyle: null,
			text: {
				value: '',
				alignToBottom: false
			},
			from: {
				color: from
			},
			to: {
				color: to
			},
			// Set default step function for all animate calls
			step: function( state, bar )
			{
				bar.path.setAttribute( 'stroke', state.color );
				var value = ( Math.round( bar.value() * 100 ) + '%' );
				if( value === 0 )
				{
					bar.setText( '' );
				}
				else
				{
					bar.setText( value );
				}

				bar.text.style.color = state.color;
			}
		} );

		bar.text.style.fontFamily = '"Nunito Sans", sans-serif';
		bar.text.style.fontSize = '14px';

		$( this ).on( 'inview', function ( event, isInView )
		{
			if( isInView )
			{
				bar.animate( animate, {
					duration: 2500
				}, function() {} );
			}
		} );
	} );

	/*----------------------------------------------------*/
	/*	Google maps
	/*----------------------------------------------------*/
	if( $( '#map' ).length )
	{
		function initialize()
		{
			var mapOptions = {
				center: {
					lat: 40.7143528,
					lng: -74.0059731
				},
				zoom: 15,
				styles: [
					{
						"featureType": "administrative",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"color": "#444444"
							}
						]
					},
					{
						"featureType": "landscape",
						"elementType": "all",
						"stylers": [
							{
								"color": "#f2f2f2"
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "all",
						"stylers": [
							{
								"saturation": -100
							},
							{
								"lightness": 45
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "labels.icon",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "transit",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "all",
						"stylers": [
							{
								"color": "#46bcec"
							},
							{
								"visibility": "on"
							}
						]
					}
				],
				disableDefaultUI: true,
				scrollwheel: false,
				draggable: true
			};

			var map = new google.maps.Map( document.getElementById( 'map' ), mapOptions );

			// Create marker
			var marker = new google.maps.Marker( {
				position: {
					lat: 40.7143528,
					lng: -74.0059731
				},
				map: map,
				title: 'PRINTRO',
				animation: google.maps.Animation.DROP,
				icon: '../assets/images/marker.png'
			} );

			// Marker animation
			marker.setAnimation( google.maps.Animation.BOUNCE );
		}

		google.maps.event.addDomListener( window, 'load', initialize );
	}

} ( jQuery ) );

