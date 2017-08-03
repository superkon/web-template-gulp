var IE9down = false;
var IpadFlag = false;
var MobileFlag = false;

var layout;

/******************************
SHOW / HIDE LOADING
******************************/
function initLoading()
{
  var _loadingWrapper = $('.loadingWrapper');
  var _loader = _loadingWrapper.find('.loader');

  TweenMax.staggerTo(_loader, 1,{
		y: 0, alpha: 1, ease:Back.easeInOut
	});
}

function showLoading() {
  $('.loadingWrapper').fadeIn();
}

function hideLoading(callback)
{
  var _loadingWrapper = $('.loadingWrapper');
  var _loader = _loadingWrapper.find('.loader');

	TweenMax.staggerTo(_loader, 1,{
		y: -200, alpha: 0, ease:Back.easeInOut
	});

  TweenMax.staggerTo(_loadingWrapper, 1,{
		y: -100+"%", alpha: 0.8, delay:0.5, ease:Power3.easeInOut,
    onComplete: function()
    {
      $('.loadingWrapper').hide();
      $('.wrapper').addClass('ready');

      TweenMax.set(_loadingWrapper, {
    		y: 0, alpha: 0
    	});

      if (typeof callback !== undefined) {
        callback();
      }

    }
	});


  // $('.loadingWrapper').fadeOut(function()
  // {
  //   if (typeof callback !== undefined) {
  //     $('.wrapper').addClass('ready');
  //
  //     setTimeout(function() {
  //         callback();
  //     }, 200);
  //   }
  // });
}

/******************************
SETTING
******************************/
function detectBroswer() {
    var ua = window.navigator.userAgent.toLowerCase();
    var ver = window.navigator.appVersion.toLowerCase();
    var gHasTouch = 'ontouchstart' in window;

    if (ua.indexOf("msie") != -1) {
        if (ver.indexOf("msie 6.") != -1) {
            IE9down = true;
        } else if (ver.indexOf("msie 7.") != -1) {
            IE9down = true;
        } else if (ver.indexOf("msie 8.") != -1) {
            IE9down = true;
        } else if (ver.indexOf("msie 9.") != -1) {
            IE9down = true;
        } else if (ver.indexOf("msie 10.") != -1) {
            IE9down = false;
        } else {
            IE9down = false;
        }
    }

    if (gHasTouch) {
        $('body').addClass('touchDevice');
    } else {
        $('body').addClass('notTouchDevice');
    }

    if (IE9down) {
        $('body').addClass('ie9down');
    }

    if (ua.match(/(iphone|ipad|ipod|android)/)) {
        MobileFlag = true;
    }

    if (ua.match(/(ipad)/)) {
        IpadFlag = true;
    }

    if (IE9down) {
        jQuery.fx.interval = 1000 / 30;
    } else {
        jQuery.fx.interval = 1000 / 60;
    }
}

function preventCss3Transition() {
    $("body").addClass("preload");

    setTimeout(function() {
        $("body").removeClass("preload");
    }, 500);
}

/******************************
RESPONSIVE PROTOTYPE
******************************/
responsive.prototype.window = null;
responsive.prototype.body = null;
responsive.prototype.layoutSize = null;
responsive.prototype.layoutType = null;

function responsive(config) {
    var _self = this;

    _self.window = $(window);
    _self.body = $('body');

    _self.settings = {
        layoutSize: [0, 750, 1020],
        layoutType: ["mobile", "tablet", "desktop"]
    };

    $.extend(_self.settings, config);

    _self.layoutSize = _self.settings.layoutSize;
    _self.layoutType = _self.settings.layoutType;

    _self.changeClass(_self.layoutType[_self.checkSize()]);
    _self.addEvent();

    // if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
    //     _self.body.addClass(_self.layoutType[_self.layoutType.length - 1]);
    //
    // } else {
    //     _self.changeClass(_self.layoutType[_self.checkSize()]);
    //     _self.addEvent();
    // }
}

responsive.prototype.addEvent = function() {
    var _self = this;

    _self.window.on('resize.responsive', function() {
        _self.changeClass(_self.layoutType[_self.checkSize()]);
    });
};

responsive.prototype.checkSize = function() {
    var _self = this;
    var _layout = 0;

    for (var i = 0; i < _self.layoutSize.length; i++) {
        if (_self.layoutSize[i] > _self.window.width()) {
            break;
        } else {
            _layout = i;
        }
    }

    return _layout;
};

responsive.prototype.changeClass = function(className) {
    var _self = this;

    if (!_self.body.hasClass(className)) {
        for (var i = 0; i < _self.layoutSize.length; i++) {
            _self.body.removeClass(_self.layoutType[i]);
        }

        _self.body.addClass(className);

        layout = className;

        $(document).trigger('responsive');
    }
};

/******************************
SCROLL FUNCTION
******************************/
function scrollFn(pTarget, config) {
    var _self = this;

    _self.target = pTarget;

    _self.settings = {
        d_header: $('.headerWrapper').outerHeight(true),
        t_header: $('.headerWrapper').outerHeight(true),
        m_header: $('.mobileHeader').outerHeight(true),
        adjust: 0,
        time: 800,
        ease: 'easeInOutQuint'
    };

    $.extend(_self.settings, config);

    var _scrollNum = null;

    if (layout == "desktop") {
        _scrollNum = _self.target.offset().top - _self.settings.d_header - _self.settings.adjust;
    }

    if (layout == "tablet") {
        _scrollNum = _self.target.offset().top - _self.settings.t_header - _self.settings.adjust;
    }

    if (layout == "desktop") {
        _scrollNum = _self.target.offset().top - _self.settings.m_header - _self.settings.adjust;
    }

    $("html, body").animate({
        scrollTop: _scrollNum
    }, _self.settings.time, _self.settings.ease);
}

/********** EXAMPLE **********/
/*
scrollFn($('.contentWrapper'),{
	d_header: $('.headerWrapper').outerHeight(true),
	t_header: $('.headerWrapper').outerHeight(true),
	m_header: $('.mobileHeader').outerHeight(true),
	adjust: 100
});
*/

/******************************
POPUP
******************************/
function closePop(pTargetArray) {
    // if (typeof pTargetArray == "undefined") {
    //     pTargetArray = [];
    //     pTargetArray.push($('.popClose'));
    // }
    //
    // var _targetArray = pTargetArray;
    //
    // for (_i = 0; _i < _targetArray.length; _i++) {
    //     _targetArray[_i].off().on('click', function() {
    //         $.magnificPopup.close();
    //     });
    // }
}

function popup(pTarget, config) {
    var _settings = {
        items: {
            src: pTarget,
            type: 'inline'
        },
        showCloseBtn: false,
        closeOnBgClick: true,
        mainClass: 'mfp-zoom-in',
        fixedContentPos: true,
        fixedBgPos: true,
        removalDelay: 300,
        closeMarkup: '<button title="%title%" class="mfp-close"></button>',
        enableEscapeKey : false
    };

    $.extend(_settings, config);
    $.magnificPopup.open(_settings);
}

function popupAlert(setting, config) {
    var _preSet = {
        target: $('.alertPop'),
        targetText: $('.alertPop p'),
        msg: "Text in here."
    };

    $.extend(_preSet, setting);

    var _settings = {
        mainClass: 'mfp-zoom-in',
        callbacks: {
            open: function() {
                _preSet.targetText.html(_preSet.msg);
            },
            close: function() {
                _preSet.targetText.html('');
            }
        }
    };

    $.extend(_settings, config);
    popup(_preSet.target, _settings);
}


/******************************
MENUCONTROLER PROTOTYPE
******************************/
menuControler.prototype.target = null;
menuControler.prototype.settings = null;
menuControler.prototype.scrollTopVal = null;

menuControler.prototype.gHasTouch = null;
menuControler.prototype.scrollPane = null;

function menuControler(pTarget, config) {
    var _self = this;

    _self.target = pTarget;
    _self.gHasTouch = 'ontouchstart' in window;

    _self.settings = {
        type: 'mLeftMotion',
        scroll: 'scrollpane',
        topScrollHeight: 300
    };

    $.extend(_self.settings, config);

    _self.init();
    _self.addScrollPane();

    $(document).on('responsive', function() {
        if (layout == "desktop") {
            _self.closeMenu();

            //clear jscpane

        }

        if (layout != "desktop") {
            $('.contentWrapper').css({
                "top": $('.mobileHeader').outerHeight(true) - _self.scrollTopVal
            });

            //add jscpane if not null
        }
    });
}

menuControler.prototype.init = function() {
    var _self = this;

    // preset
    $('.headerWrapper').addClass(_self.settings.type);

    $('.menuBtn, .menuDim').on('click', function() {
        _self.target.toggleClass('menuOpen');

        if (_self.target.hasClass('menuOpen')) {
            _self.scrollTopVal = $(window).scrollTop();

            // openMenu
            $('.contentWrapper').css({
                "position": "fixed",
                "overflow": "hidden",
                "width": 100 + "%",
                "top": $('.mobileHeader').outerHeight(true) - _self.scrollTopVal
            });

        } else {
            // closeMenu
            _self.closeMenu();
        }
    });
};

menuControler.prototype.closeMenu = function() {
    var _self = this;

    _self.target.removeClass('menuOpen');

    $('.contentWrapper').css({
        "position": "",
        "overflow": "",
        "width": "",
        "top": ""
    });

    $(window).scrollTop(_self.scrollTopVal);
    _self.scrollTopVal = null;
};

menuControler.prototype.addScrollPane = function() {
    var _self = this;

    if ((!_self.gHasTouch) && (_self.settings.scroll == "scrollpane")) {
        //if not touch, use jscrollpane
        //$('.headerWrapper').addClass('scroll-pane');

        if (_self.settings.type == "mTopMotion") {
            $('.headerWrapper').css({
                height: _self.settings.topScrollHeight
            });
        }

        $('.headerWrapper.scroll-pane').jScrollPane({
            autoReinitialise: true
        });
    }
};
