// ==UserScript==
// @name         Zddhub Watermark Remover
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  去除zddhub的水印
// @author       Indekkusu
// @license      MIT
// @match        https://zddhub.com/watermark/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zddhub.com
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  GM_addStyle(`#eb-watermark {
    z-index: -1;
  }`);

})();
