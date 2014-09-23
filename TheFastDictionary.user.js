// ==UserScript==
// @name TheFastDictionary
// @author James Edward Lewis II
// @namespace greasyfork.org
// @icon http://img.tfd.com/favicon.ico
// @version 1.0
// @description This keeps TheFreeDictionary from making *every single word* into a hyperlink to its dictionary entry, thereby keeping it from becoming unresponsive for a couple minutes on long articles.
// @include http://thefreedictionary.com/*
// @include http://*.thefreedictionary.com/*
// @include https://thefreedictionary.com/*
// @include https://*.thefreedictionary.com/*
// @include http://thefreelibrary.com/*
// @include http://*.thefreelibrary.com/*
// @include https://thefreelibrary.com/*
// @include https://*.thefreelibrary.com/*
// @run-at document-end
// ==/UserScript==
if (document.body.onload && typeof dictionary === 'function') document.body.onload = dictionary;
else document.body.onload = null;
