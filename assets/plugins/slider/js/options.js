N2R('documentReady', function ($) {

	nextend.fontsDeferred = $.Deferred();
	if (nextend.fontsLoaded) {
		nextend.fontsDeferred.resolve();
	} else {
		nextend.fontsLoadedActive = function () {
			nextend.fontsLoaded = true;
			nextend.fontsDeferred.resolve();
		};
		var intercalCounter = 0;
		nextend.fontInterval = setInterval(function () {
			if (intercalCounter > 3 || document.documentElement.className.indexOf('wf-active') !== -1) {
				nextend.fontsLoadedActive();
				clearInterval(nextend.fontInterval);
			}
			intercalCounter++;
		}, 1000);
	}
	N2R(["nextend-frontend", "smartslider-frontend", "nextend-gsap", "smartslider-simple-type-frontend"], function () {
		new N2Classes.SmartSliderSimple('#n2-ss-2', {
			"admin": false,
			"translate3d": 1,
			"callbacks": "",
			"background.video.mobile": 1,
			"randomize": {
				"randomize": 0,
				"randomizeFirst": 0
			},
			"align": "normal",
			"isDelayed": 0,
			"load": {
				"fade": 1,
				"scroll": 0
			},
			"playWhenVisible": 1,
			"playWhenVisibleAt": 0.5,
			"responsive": {
				"desktop": 1,
				"tablet": 1,
				"mobile": 1,
				"onResizeEnabled": true,
				"type": "fullpage",
				"downscale": 1,
				"upscale": 1,
				"minimumHeight": -1,
				"maximumHeight": -1,
				"maximumSlideWidth": 3000,
				"maximumSlideWidthLandscape": 3000,
				"maximumSlideWidthTablet": 3000,
				"maximumSlideWidthTabletLandscape": 3000,
				"maximumSlideWidthMobile": 3000,
				"maximumSlideWidthMobileLandscape": 3000,
				"maximumSlideWidthConstrainHeight": 0,
				"forceFull": 1,
				"forceFullOverflowX": "body",
				"forceFullHorizontalSelector": "",
				"constrainRatio": 0,
				"verticalOffsetSelectors": ".header-line-wrapper",
				"decreaseSliderHeight": 0,
				"focusUser": 0,
				"focusAutoplay": 0,
				"deviceModes": {
					"desktopPortrait": 1,
					"desktopLandscape": 0,
					"tabletPortrait": 1,
					"tabletLandscape": 0,
					"mobilePortrait": 1,
					"mobileLandscape": 0
				},
				"normalizedDeviceModes": {
					"unknownUnknown": ["unknown", "Unknown"],
					"desktopPortrait": ["desktop", "Portrait"],
					"desktopLandscape": ["desktop", "Portrait"],
					"tabletPortrait": ["tablet", "Portrait"],
					"tabletLandscape": ["tablet", "Portrait"],
					"mobilePortrait": ["mobile", "Portrait"],
					"mobileLandscape": ["mobile", "Portrait"]
				},
				"verticalRatioModifiers": {
					"unknownUnknown": 1,
					"desktopPortrait": 1,
					"desktopLandscape": 1,
					"tabletPortrait": 1,
					"tabletLandscape": 1,
					"mobilePortrait": 1,
					"mobileLandscape": 1
				},
				"minimumFontSizes": {
					"desktopPortrait": 1,
					"desktopLandscape": 1,
					"tabletPortrait": 1,
					"tabletLandscape": 1,
					"mobilePortrait": 1,
					"mobileLandscape": 1
				},
				"ratioToDevice": {
					"Portrait": {
						"tablet": 0.7,
						"mobile": 0.5
					},
					"Landscape": {
						"tablet": 0,
						"mobile": 0
					}
				},
				"sliderWidthToDevice": {
					"desktopPortrait": 1200,
					"desktopLandscape": 1200,
					"tabletPortrait": 840,
					"tabletLandscape": 0,
					"mobilePortrait": 600,
					"mobileLandscape": 0
				},
				"basedOn": "combined",
				"orientationMode": "width_and_height",
				"overflowHiddenPage": 0,
				"desktopPortraitScreenWidth": 1200,
				"tabletPortraitScreenWidth": 800,
				"mobilePortraitScreenWidth": 440,
				"tabletLandscapeScreenWidth": 800,
				"mobileLandscapeScreenWidth": 440
			},
			"controls": {
				"scroll": 0,
				"drag": 1,
				"touch": "horizontal",
				"keyboard": 1,
				"tilt": 0
			},
			"lazyLoad": 0,
			"lazyLoadNeighbor": 0,
			"blockrightclick": 0,
			"maintainSession": 0,
			"autoplay": {
				"enabled": 1,
				"start": 1,
				"duration": 8000,
				"autoplayToSlide": -1,
				"autoplayToSlideIndex": -1,
				"allowReStart": 0,
				"pause": {
					"click": 1,
					"mouse": "0",
					"mediaStarted": 1
				},
				"resume": {
					"click": 0,
					"mouse": "0",
					"mediaEnded": 1,
					"slidechanged": 0
				}
			},
			"perspective": 1000,
			"layerMode": {
				"playOnce": 0,
				"playFirstLayer": 1,
				"mode": "skippable",
				"inAnimation": "mainInEnd"
			},
			"parallax": {
				"enabled": 1,
				"mobile": 0,
				"is3D": 0,
				"animate": 1,
				"horizontal": "mouse",
				"vertical": "mouse",
				"origin": "slider",
				"scrollmove": "both"
			},
			"postBackgroundAnimations": 0,
			"initCallbacks": ["N2D(\"SmartSliderWidgetArrowImage\",function(i,e){function s(e,s,t,h){this.slider=e,this.slider.started(i.proxy(this.start,this,s,t,h))}return s.prototype.start=function(e,s,t){return this.slider.sliderElement.data(\"arrow\")?!1:(this.slider.sliderElement.data(\"arrow\",this),this.deferred=i.Deferred(),this.slider.sliderElement.on(\"SliderDevice\",i.proxy(this.onDevice,this)).trigger(\"addWidget\",this.deferred),this.previous=i(\"#\"+this.slider.elementID+\"-arrow-previous\").on(\"click\",i.proxy(function(i){i.stopPropagation(),this.slider[n2const.rtl.previous]()},this)),this.previousResize=this.previous.find(\".n2-resize\"),0===this.previousResize.length&&(this.previousResize=this.previous),this.next=i(\"#\"+this.slider.elementID+\"-arrow-next\").on(\"click\",i.proxy(function(i){i.stopPropagation(),this.slider[n2const.rtl.next]()},this)),this.nextResize=this.next.find(\".n2-resize\"),0===this.nextResize.length&&(this.nextResize=this.next),this.desktopRatio=e,this.tabletRatio=s,this.mobileRatio=t,void i.when(this.previous.n2imagesLoaded(),this.next.n2imagesLoaded()).always(i.proxy(this.loaded,this)))},s.prototype.loaded=function(){this.previous.css(\"display\",\"inline-block\"),this.previousResize.css(\"display\",\"inline-block\"),this.previousWidth=this.previousResize.width(),this.previousHeight=this.previousResize.height(),this.previousResize.css(\"display\",\"\"),this.previous.css(\"display\",\"\"),this.next.css(\"display\",\"inline-block\"),this.nextResize.css(\"display\",\"inline-block\"),this.nextWidth=this.nextResize.width(),this.nextHeight=this.nextResize.height(),this.nextResize.css(\"display\",\"\"),this.next.css(\"display\",\"\"),this.previousResize.find(\"img\").css(\"width\",\"100%\"),this.nextResize.find(\"img\").css(\"width\",\"100%\"),this.onDevice(null,{device:this.slider.responsive.getDeviceMode()}),this.deferred.resolve()},s.prototype.onDevice=function(i,e){var s=1;switch(e.device){case\"tablet\":s=this.tabletRatio;break;case\"mobile\":s=this.mobileRatio;break;default:s=this.desktopRatio}this.previousResize.width(this.previousWidth*s),this.previousResize.height(this.previousHeight*s),this.nextResize.width(this.nextWidth*s),this.nextResize.height(this.nextHeight*s)},s});", "new N2Classes.SmartSliderWidgetArrowImage(this, 1.2, 0.7, 0.5);"],
			"allowBGImageAttachmentFixed": false,
			"bgAnimationsColor": "RGBA(51,51,51,1)",
			"bgAnimations": 0,
			"mainanimation": {
				"type": "horizontal",
				"duration": 800,
				"delay": 0,
				"ease": "easeOutQuad",
				"parallax": 0,
				"shiftedBackgroundAnimation": "auto"
			},
			"carousel": 1,
			"dynamicHeight": 0
		});
	});
});