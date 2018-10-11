// var BASE_URL = 'http://10.0.107.147:8082';
// var BASE_URL = 'http://192.168.100.114:8081';
var BASE_URL = 'http://47.94.251.74:8082';  //测试
// var BASE_URL = 'http://10.0.109.157:8080';
(function(factory){var registeredInModuleLoader=false;if(typeof define==='function' && define.amd){define(factory);registeredInModuleLoader=true}if(typeof exports==='object'){module.exports=factory();registeredInModuleLoader=true}if(!registeredInModuleLoader){var OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=OldCookies;return api}}}(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key]}}return result}function init(converter){function api(key,value,attributes){var result;if(typeof document==='undefined'){return}if(arguments.length>1){attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number'){var expires=new Date();expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);attributes.expires=expires}try{result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result}}catch(e){}if(!converter.write){value=encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)}else{value=converter.write(value,key)}key=encodeURIComponent(String(key));key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);key=key.replace(/[\(\)]/g,escape);return(document.cookie=[key,'=',value,attributes.expires?'; expires='+attributes.expires.toUTCString():'',attributes.path?'; path='+attributes.path:'',attributes.domain?'; domain='+attributes.domain:'',attributes.secure?'; secure':''].join(''))}if(!key){result={}}var cookies=document.cookie?document.cookie.split('; '):[];var rdecode=/(%[0-9A-Z]{2})+/g;var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('=');var cookie=parts.slice(1).join('=');if(cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1)}try{var name=parts[0].replace(rdecode,decodeURIComponent);cookie=converter.read?converter.read(cookie,name):converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent);if(this.json){try{cookie=JSON.parse(cookie)}catch(e){}}if(key===name){result=cookie;break}if(!key){result[name]=cookie}}catch(e){}}return result}api.set=api;api.get=function(key){return api.call(api,key)};api.getJSON=function(){return api.apply({json:true},[].slice.call(arguments))};api.defaults={};api.remove=function(key,attributes){api(key,'',extend(attributes,{expires:-1}))};api.withConverter=init;return api}return init(function(){})}));

var elv = (function() {
	return {
		//message 出现弹框
		message: function(info) {
			$('.message').remove();
			var messageHtmlStr = '' +
				'<div class="message">' +
				'	<p class="bg-warning"><span class="glyphicon glyphicon-warning-sign"></span>&nbsp;&nbsp;&nbsp;' +
				info +
				'	</p>' +
				'</div>';
			var $message = $(messageHtmlStr);
	
			$message.appendTo('body').fadeIn().one('click', function() {
				$message.remove();
			});
			setTimeout(function() {
				$message.fadeOut(1000, function() {
					$message.remove();
				});
			}, 1500);
		},
		confirm: function(info, fn) {
			var cf;
			$('.confirm').remove();
			if (!info) info = '确定执行此操作？';
			var confirmHtmlStr = '' +
				'<div class="confirm">' +
				'	<div class="confirm-content">' +
				'		<p>' + info + '</p>' +
				'		<div>' +
				'			<button type="button" class="btn btn-default no">取消</button>' +
				'			<button type="button" class="btn btn-primary">确定</button>' +
				'		</div>' +
				'		<button type="button" class="close no">' +
				'			<span aria-hidden="true">×</span>' +
				'		</button>' +
				'	</div>' +
				'</div>';
			var $confirm = $(confirmHtmlStr);
			$confirm.appendTo('body').fadeIn().on('click', '.no', function() {
				$confirm.remove();
			}).on('click', '.btn-primary', function() {
				$confirm.remove();
				fn();
			});
		},
		loading: function(op) {
			if (typeof op !== 'undefined' && op == 'ok') {
				$('.load-container').remove();
				return false;
			}
			var loadingStr = '<div class="load-container"><div class="load-animation br-half"></div><div class="load-text">加载中...</div></div>';
			$(loadingStr).appendTo('body');
		},
		setCookie: function(name, value) {
			Cookies.set(name, value, {
				expires: 7,
				// domain: '.elvdou.cn'
			});
		},
		getCookie: function(name) {
			return Cookies.get(name);
		},
		delCookie: function(name) {
			Cookies.remove(name);
		},
        mengBan: function( str){
		    var remove =  `<span class="remove" style="display: inline-block; width: 50px; height: 50px; position: fixed;top: 50px; right: 50px; font-size: 50px;cursor:pointer;">x</span>`
		    $('#box').html(str + remove);
		    $('#box > div').css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'right': '0',
                'bottom': '0',
                'background': 'rgba(100,100,100,.5)'
            });
            $('#box img').css({
                'width': '200px',
                'height': '200px',
                'margin-left': '10px',
                'margin-top' : '10px'
            })
            $('#box .imgParent').css({
                'width': '70%',
                // 'height': '500px',
                'margin': '100px auto'
            })
			var _this = this;
            $('.remove').click( function(){
                _this.mengBanReoove('#box');
            })
        },
        mengBanReoove: function(elem){
            $(elem).html('');
        }
	}
	return {
		message: function(info) {
			$('.message').remove();
			var messageHtmlStr = '' +
				'<div class="message">' +
				'	<p class="bg-warning"><span class="glyphicon glyphicon-warning-sign"></span>&nbsp;&nbsp;&nbsp;' +
				info +
				'	</p>' +
				'</div>';
			var $message = $(messageHtmlStr);
	
			$message.appendTo('body').fadeIn().one('click', function() {
				$message.remove();
			});
			setTimeout(function() {
				$message.fadeOut(1000, function() {
					$message.remove();
				});
			}, 1500);
		},
		confirm: function(info, fn) {
			var cf;
			$('.confirm').remove();
			if (!info) info = '确定执行此操作？';
			var confirmHtmlStr = '' +
				'<div class="confirm">' +
				'	<div class="confirm-content">' +
				'		<p>' + info + '</p>' +
				'		<div>' +
				'			<button type="button" class="btn btn-default no">取消</button>' +
				'			<button type="button" class="btn btn-primary">确定</button>' +
				'		</div>' +
				'		<button type="button" class="close no">' +
				'			<span aria-hidden="true">×</span>' +
				'		</button>' +
				'	</div>' +
				'</div>';
			var $confirm = $(confirmHtmlStr);
			$confirm.appendTo('body').fadeIn().on('click', '.no', function() {
				$confirm.remove();
			}).on('click', '.btn-primary', function() {
				$confirm.remove();
				fn();
			});
		},
		loading: function(op) {
			if (typeof op !== 'undefined' && op == 'ok') {
				$('.load-container').remove();
				return false;
			}
			var loadingStr = '<div class="load-container"><div class="load-animation br-half"></div><div class="load-text">加载中...</div></div>';
			$(loadingStr).appendTo('body');
		},
		setCookie: function(name, value) {
			Cookies.set(name, value, {
				expires: 7,
				// domain: '.elvdou.cn'
			});
		},
		getCookie: function(name) {
			return Cookies.get(name);
		},
		delCookie: function(name) {
			Cookies.remove(name);
		}
	}
    return {
        message: function(info) {
            $('.message').remove();
            var messageHtmlStr = '' +
                '<div class="message">' +
                '	<p class="bg-warning"><span class="glyphicon glyphicon-warning-sign"></span>&nbsp;&nbsp;&nbsp;' +
                info +
                '	</p>' +
                '</div>';
            var $message = $(messageHtmlStr);

            $message.appendTo('body').fadeIn().one('click', function() {
                $message.remove();
            });
            setTimeout(function() {
                $message.fadeOut(1000, function() {
                    $message.remove();
                });
            }, 1500);
        },
        confirm: function(info, fn) {
            var cf;
            $('.confirm').remove();
            if (!info) info = '确定执行此操作？';
            var confirmHtmlStr = '' +
                '<div class="confirm">' +
                '	<div class="confirm-content">' +
                '		<p>' + info + '</p>' +
                '		<div>' +
                '			<button type="button" class="btn btn-default no">取消</button>' +
                '			<button type="button" class="btn btn-primary">确定</button>' +
                '		</div>' +
                '		<button type="button" class="close no">' +
                '			<span aria-hidden="true">×</span>' +
                '		</button>' +
                '	</div>' +
                '</div>';
            var $confirm = $(confirmHtmlStr);
            $confirm.appendTo('body').fadeIn().on('click', '.no', function() {
                $confirm.remove();
            }).on('click', '.btn-primary', function() {
                $confirm.remove();
                fn();
            });
        },
        loading: function(op) {
            if (typeof op !== 'undefined' && op == 'ok') {
                $('.load-container').remove();
                return false;
            }
            var loadingStr = '<div class="load-container"><div class="load-animation br-half"></div><div class="load-text">加载中...</div></div>';
            $(loadingStr).appendTo('body');
        },
        setCookie: function(name, value) {
            Cookies.set(name, value, {
                expires: 7,
                // domain: '.elvdou.cn'
            });
        },
        getCookie: function(name) {
            return Cookies.get(name);
        },
        delCookie: function(name) {
            Cookies.remove(name);
        }
    }
})();


var $_GET = (function() {
	var url = window.document.location.href.toString();
	var u = url.split("?");
	if ( typeof(u[1]) == "string" ) {
		u = u[1].split("&");
		var get = {};
		for (var i in u) {
			var j = u[i].split("=");
			get[j[0]] = j[1];
        }
		return get;
	} else {
		return {};
	}
})();
//为html 解除代码注释
Function.prototype.getMultiLine = function() {
    var lines = new String(this);
    lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
    return lines;
};
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) {
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
};


;
(function($, window, document, undefined) {
    $.fn.elvdouZoomImg = function(options) {
        var options = $.extend({
                animationSpeed: 150,
                quitOnEnd: false
            }, options),

            targets = $([]),
            target = $(),
            image = $(),
            imageWidth = 0,
            imageHeight = 0,
            inProgress = false,
            targetSelector = '',

            isTargetValid = function(element) {
                return $(element).prop('tagName').toLowerCase() === 'img' && $(element).attr('src');
            },

            setImage = function() {
                if (!image.length) return true;

                var screenWidth = $(window).innerWidth(),
                    screenHeight = $(window).innerHeight(),
                    paddingScale = 0.8,
                    tmpImage = new Image();
                tmpImage.src = image.attr('src');

                tmpImage.onload = function() {
                    var imageWidth = tmpImage.width;
                    var imageHeight = tmpImage.height;
					var scaleWidth = imageWidth / screenWidth;
					var scaleHeight = imageHeight / screenHeight;


                    var scale;
                    if (imageWidth <= screenWidth * paddingScale && imageHeight <= screenHeight * paddingScale) {
                        image.width(imageWidth + 'px');
                        image.height(imageHeight + 'px');

                        image.css({
                            'top': ((screenHeight - imageHeight) / 2) + 'px',
                            'left': ((screenWidth - imageWidth) / 2) + 'px'
                        });
                    } else {
                        if (scaleWidth >= scaleHeight) {
                            scale = scaleWidth;
                        } else {
                            scale = scaleHeight;
                        }
                        image.width(((imageWidth / scale) * paddingScale) + 'px');
                        image.height(((imageHeight / scale) * paddingScale) + 'px');
                        image.css({
                            'top': ((screenHeight - (imageHeight / scale) * paddingScale) / 2) + 'px',
                            'left': ((screenWidth - (imageWidth / scale) * paddingScale) / 2) + 'px'
                        });
                    }
                };
            },
            loadImage = function(direction) {
                if (inProgress) return false;
                direction = typeof direction === 'undefined' ? false : direction == 'left' ? 1 : -1;
                if (image.length) {
                    if (direction !== false && (targets.length < 2 || (options.quitOnEnd === true && ((direction === -1 && targets.index(target) == 0) || (direction === 1 && targets.index(target) == targets.length - 1))))) {
                        quitLightbox();
                        return false;
                    }
                    var params = {
                        'opacity': 0
                    };
                    params.left = parseInt(image.css('left')) + 100 * direction + 'px';
                    image.animate(params, options.animationSpeed, function() {
                        removeImage();
                    });
                }

                inProgress = true;

                setTimeout(function() {
                    image = $('<img id="elvdou-image" />').attr('src', target.attr('src'));
                    image.appendTo('body');


                    setImage();


                    inProgress = false;

                }, options.animationSpeed + 100);
            },

            removeImage = function() {
                if (!image.length) return false;
                image.remove();
                image = $();
            },

            quitImage = function() {
                if (!image.length) return false;
                image.animate({
                    'opacity': 0
                }, options.animationSpeed, function() {
                    removeImage();
                    inProgress = false;
                    closeButtonOff();
                    if (targets.length > 1) arrowsOff();
                    overlayOff();
                });
            },

            arrowsOn = function() {
                var $arrows = $('<button type="button" class="elvdou-image-arrow elvdou-image-arrow-left elvdou-br-3 elvdou-tr"></button><button type="button" class="elvdou-image-arrow elvdou-image-arrow-right elvdou-br-3 elvdou-tr"></button>');

                $arrows.appendTo('body');

                $arrows.on('click', function(e) {
                    e.preventDefault();
                    var $this = $(this),
                        index = targets.index(target);
                    if ($this.hasClass('elvdou-image-arrow-left')) {
                        index = index - 1;
                        if (index === -1) index = targets.length - 1;
                    } else {
                        index = index + 1;
                        if (index === targets.length) index = 0;
                    }
                    switchElvdouImage(index, $this);
                    return false;
                });
            },
            arrowsOff = function() {
                $('.elvdou-image-arrow').remove();
            },

            overlayOn = function() {
                $('<div id="elvdou-image-overlay"></div>').appendTo('body');
            },
            overlayOff = function() {
                $('#elvdou-image-overlay').remove();
            },

            closeButtonOn = function(instance) {
                $('<button type="button" id="elvdou-image-close" class="elvdou-br-half elvdou-tr"></button>').appendTo('body').on('click', function() {
                    $(this).remove();
                    quitImage();
                    return false;
                });
            },
            closeButtonOff = function() {
                $('#elvdou-image-close').remove();
            },

            switchElvdouImage = function(index, $this) {
                var tmpTarget = targets.eq(index);
                if (tmpTarget.length) {
                    var currentIndex = targets.index(target);
                    target = tmpTarget;
                    if (targets.length === 2) {
                        if ($this.hasClass('elvdou-image-arrow-left')) {
                            loadImage('left');
                        } else {
                            loadImage('right');
                        }
                    } else if (currentIndex === 0 && index === targets.length - 1) {
                        loadImage('left');
                    } else if (currentIndex === targets.length - 1 && index === 0) {
                        loadImage('right');
                    } else {
                        loadImage(index < currentIndex ? 'left' : 'right');
                    }
                }
            };

        $(window).on('resize', setImage);

        targetSelector = this.selector;

        $(document).on('click', this.selector, function(e) {
            if (!isTargetValid(this)) return true;
            targets = $(targetSelector);
            e.preventDefault();
            if (inProgress) return false;
            inProgress = false;
            overlayOn();
            if (targets.length > 1) arrowsOn();
            closeButtonOn();
            target = $(this);
            loadImage();
        });

        return this;
    };
})(jQuery, window, document);


$(function() {
    $(document).keydown(function(e) {
        var keyEvent;
        if (e.keyCode == 8) {
            var d = e.srcElement || e.target;
            if (d.tagName.toUpperCase() == 'INPUT' || d.tagName.toUpperCase() == 'TEXTAREA') {
                keyEvent = d.readOnly || d.disabled;
            } else {
                keyEvent = true;
            }
        } else {
            keyEvent = false;
        }
        if (keyEvent) {
            e.preventDefault();
        }
    });

    $('.elv-zoom').elvdouZoomImg();


});