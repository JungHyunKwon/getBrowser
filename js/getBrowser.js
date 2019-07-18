/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';

	var _browser = navigator.userAgent.toLowerCase();

	//ie7일 때
	if(_browser.indexOf('msie 7.0') > -1) {
		_browser = 'ie7';

	//ie8일 때
	}else if(_browser.indexOf('msie 8.0') > -1) {
		_browser = 'ie8';

	//ie9일 때
	}else if(_browser.indexOf('msie 9.0') > -1) {
		_browser = 'ie9';

	//ie10일 때
	}else if(_browser.indexOf('msie 10.0') > -1) {
		_browser = 'ie10';

	//ie11일 때
	}else if(_browser.indexOf('trident/7.0') > -1) {
		_browser = 'ie11';

	//edge일 때
	}else if(_browser.indexOf('edge') > -1) {
		_browser = 'edge';

	//opera일 때
	}else if(_browser.indexOf('opr') > -1) {
		_browser = 'opera';

	//chrome일 때
	}else if(_browser.indexOf('chrome') > -1) {
		_browser = 'chrome';

	//firefox일 때
	}else if(_browser.indexOf('firefox') > -1) {
		_browser = 'firefox'; 

	//safari일 때
	}else if(_browser.indexOf('safari') > -1) {
		_browser = 'safari';
	}else{
		_browser = 'unknown';
	}

	/**
	 * @name getBrowser
	 * @since 2017-12-06
	 * @return {string}
	 */
	window.getBrowser = function() {
		return _browser;
	};
})();