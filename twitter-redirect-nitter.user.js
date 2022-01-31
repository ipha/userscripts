// ==UserScript==
// @name         Redirect Twitter
// @namespace    https://github.com/ipha/userscripts
// @version      1.0
// @description  Redirect twitter to nitter
// @author       ipha
// @license      MIT
// @match        https://twitter.com/
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';
    window.location.replace(window.location.href.replace("twitter.com", "nitter.net"));
})();
