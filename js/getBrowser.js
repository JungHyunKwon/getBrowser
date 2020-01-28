/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';

	var browser = navigator.userAgent.toLowerCase();

	//IE6일 때
	if(browser.indexOf('msie 6.0') > -1) {
		browser = 'ie6';

	//IE7일 때
	}else if(browser.indexOf('msie 7.0') > -1) {
		browser = 'ie7';

	//IE8일 때
	}else if(browser.indexOf('msie 8.0') > -1) {
		browser = 'ie8';

	//IE9일 때
	}else if(browser.indexOf('msie 9.0') > -1) {
		browser = 'ie9';

	//IE10일 때
	}else if(browser.indexOf('msie 10.0') > -1) {
		browser = 'ie10';

	//IE11일 때
	}else if(browser.indexOf('trident/7.0') > -1) {
		browser = 'ie11';

	//Edge일 때
	}else if(browser.indexOf('edge') > -1) {
		browser = 'edge';

	//Opera일 때
	}else if(browser.indexOf('opr') > -1) {
		browser = 'opera';

	//Chrome일 때
	}else if(browser.indexOf('chrome') > -1) {
		browser = 'chrome';

	//Firefox일 때
	}else if(browser.indexOf('firefox') > -1) {
		browser = 'firefox'; 

	//Safari일 때
	}else if(browser.indexOf('safari') > -1) {
		browser = 'safari';
	}else{
		browser = 'unknown';
	}

	/**
	 * @name getBrowser
	 * @since 2017-12-06
	 * @return {string}
	 */
	window.getBrowser = function() {
		return browser;
	};
})();