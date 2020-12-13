"use strict";

/* global document */

var htmlDynamicTextRowsResizeTimeout = null;
var htmlDynamicTextRowsComponentHelper = {
    initialize: function initialize(domElement) {
        domElement.initialized = true;

        var rows = parseInt(domElement.getAttribute("dynamic-text-rows"), 10);
        var originHeight = null
        if (domElement.style["height"]) {
            originHeight = domElement.style["height"];
        }

        domElement.style["line-height"] = 1;
        domElement.style["display"] = "inline-block";
        domElement.style["padding"] = 0;
        domElement.style["height"] = "auto";
        domElement.style["word-break"] = "break-word";

        var height = 1;
        var max = true;
        domElement.style["font-size"] = "1px";
        while (max) {
            domElement.style["font-size"] = height + "px";
            if (rows != 1) {
                max = Math.floor(domElement.clientHeight/height) < rows;
            } else {
                max = Math.floor(domElement.clientHeight/height) <= rows;
            }

            height++;
            if (height > 1000) {
                // safety feature
                max = false;
            }
        }

        if (rows == 1) {
            domElement.style["font-size"] = height - 2 + "px";
        }

        domElement.style["line-height"] = null;
        domElement.style["height"] = null;
        domElement.style["display"] = null;
        domElement.style["padding"] = null;
        domElement.style["word-break"] = null;

        if (originHeight != null) {
            domElement.style["height"] = originHeight;
        }
    },
    documentResize: function documentResize() {
        if (htmlDynamicTextRowsResizeTimeout) {
            clearTimeout(htmlDynamicTextRowsResizeTimeout);
        }
        htmlDynamicTextRowsResizeTimeout = setTimeout(htmlDynamicTextRowsComponentHelper.initializeAll, 0);
    },
    initializeAll: function initializeAll() {
        var domElements = document.querySelectorAll("[dynamic-text-rows]");

        if (domElements.length > 0) {
            for (var i = 0; i < domElements.length; i++) {
                htmlDynamicTextRowsComponentHelper.initialize(domElements[i]);
            }
        }
    },
    nodeInserted: function nodeInserted(event) {
        if (event.animationName !== "htmlDynamicTextRowsComponentNodeInserted") {
            return;
        }

        if (!event.target.initialized) {
            htmlDynamicTextRowsComponentHelper.initialize(event.target);
        }
    }
};
/* global window, document, htmlDynamicTextRowsComponentHelper */
document.addEventListener("animationstart", htmlDynamicTextRowsComponentHelper.nodeInserted, false);
document.addEventListener("MSAnimationStart", htmlDynamicTextRowsComponentHelper.nodeInserted, false);
document.addEventListener("webkitAnimationStart", htmlDynamicTextRowsComponentHelper.nodeInserted, false);

document.addEventListener("DOMContentLoaded", htmlDynamicTextRowsComponentHelper.initializeAll, false);

window.addEventListener("resize", htmlDynamicTextRowsComponentHelper.documentResize);