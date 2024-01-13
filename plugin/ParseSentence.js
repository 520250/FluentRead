// ==UserScript==
// @name         ParseSentence
// @namespace    http://tampermonkey.net/
// @version      2024-01-11
// @description  解析获取页面上所有句子
// @author       ThinkStu
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Function to extract sentences from a string
    function extractSentences(text) {
        // Regular expression to match sentences
        const sentenceRegex = /[^.!?]+[.!?]/g;
        return text.match(sentenceRegex) || [];
    }

    // Function to get all text from the body of the webpage
    function getAllText() {
        return document.body.innerText || document.body.textContent;
    }

    // Main function to parse and log sentences
    function parseSentences() {
        const allText = getAllText();
        const sentences = extractSentences(allText);
        console.log("Parsed Sentences:", sentences);
    }

    // Run the parseSentences function after the page has loaded
    window.addEventListener('load', parseSentences);

})();
