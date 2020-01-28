/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';

	var browser = navigator.userAgent.toLowerCase();

	//ie7일 때
	if(browser.indexOf('msie 7.0') > -1) {
		browser = 'ie7';

	//ie8일 때
	}else if(browser.indexOf('msie 8.0') > -1) {
		browser = 'ie8';

	//ie9일 때
	}else if(browser.indexOf('msie 9.0') > -1) {
		browser = 'ie9';

	//ie10일 때
	}else if(browser.indexOf('msie 10.0') > -1) {
		browser = 'ie10';

	//ie11일 때
	}else if(browser.indexOf('trident/7.0') > -1) {
		browser = 'ie11';

	//edge일 때
	}else if(browser.indexOf('edge') > -1) {
		browser = 'edge';

	//opera일 때
	}else if(browser.indexOf('opr') > -1) {
		browser = 'opera';

	//chrome일 때
	}else if(browser.indexOf('chrome') > -1) {
		browser = 'chrome';

	//firefox일 때
	}else if(browser.indexOf('firefox') > -1) {
		browser = 'firefox'; 

	//safari일 때
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