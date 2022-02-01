// ==UserScript==
// @name         Fix Reddit Links
// @namespace    https://github.com/ipha/userscripts
// @version      1.0
// @description  Fix improper escaping(\_) of underscores in reddit
// @author       ipha
// @license      MIT
// @include      https://*.reddit.com/*/comments/*
// @include      https://*.reddit.com/user/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    function fixLinks() {
        //var start = Date.now();
        document.querySelectorAll('a[href*="%5C_"').forEach((element) => {
            console.log("Fixing: " + element.href);
            element.href = element.href.replace('%5C_', '_');
            element.textContent = element.textContent.replace('\\_', '_');
        });
        //var end = Date.now();
        //console.log("Fix took: " + (end - start) + "ms");
    }

    function mutationCallback(mutations) {
        fixLinks();
    }

    // Fix links on static page
    fixLinks();

    // Watch for page updates on comments
    if (window.location.href.includes("/comments/")) {
        var observer = new MutationObserver(mutationCallback);
        observer.observe(document.querySelector('.commentarea > .sitetable'), {
            attributes: false,
            childList: true,
            subtree: false
        });
    }
})();
