// ==UserScript==
// @name         流畅阅读
// @license      GPL-3.0 license
// @namespace    https://fr.unmeta.cn/
// @version      0.3
// @description  基于上下文语境的人工智能翻译引擎，为部分网站提供精准翻译，让所有人都能够拥有基于母语般的阅读体验。程序Github开源：https://github.com/Bistutu/FluentRead，欢迎 star。
// @author       ThinkStu
// @match        *://*/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAtlQTFRFAAAA/3ci/4Aq/wAA/24f/3Af/28g/28f/28e/28f/28f/3Ag/3Ma/24f/24g/3Af/28f/2sh/28e/28f/28f/20h/3Ag9oxQ/3Ag/20e/28g5cWx3OLi7amB/28f/28e/28f/3Ag/28f/24f/3Ec/28f/28d/28g/28f/3Yn/28f/3Af/28e/24d/28e/3Af/H0r8qdO7LZz58SY4tO9/3Ee/28e+4IvwIxMjnFKXVZJKztH+oY06ZdetkSprje00G6BrTW3oSHJy2eI7J1W6Jdc5ZJi4oxm3oZr4o5l6Zhb0nJ+qzG5x2COxFySwVeXv1OavE+eukqiuEantUKpsj2usDmyqzG7qC29pSjCpCXE7J1X3YNvz22DwleXtEGspiq/qi67t0am24Jv7JxYsTqxu0uh1np4pyy/pyrAzWqF76FUxl6QqS297qBUoyXE13p3vlGc4Ypo0XCAuEelpinAtUGrtUKrrTW2pSnCyWSKsjywuUmkvU+ewVWYyWKMzGiH1HV813t23IFw34dr55Ng6ppa76BUrjmyvlKcpCjC65tZ5pNg24By3YVt8aZP03N94otnqTC7qzO4u02gx1+QtkKpyWOMwFWZzmuFv1KbzmqFzWqGw1mVxFuTymSLyWONymWKu0ui1XZ676JS7p9V5ZBi4o1m4Ilp3oZsqC682n5zpSjBy2aJ3YRuxl2R5JBjpy295pNhuUeloyTE2X508aVQ76NT8KRQrja055Rf2Ht2vE2gxV2S449k03R8rDS3qjG5tEGr6JVfwliWxFmU6JZdt0Wn4Yto7Z5X3YRtsz+tsj6u445k8KNS7Z9WvlCe3IJv2Hx1uUmj2n9yyWKNvE6g13p2z2yE6Zlb1nd5x2CPpCbE76FTrzi0tkOpwVaX0XF/3INvv1Kc1HR91XZ739nT2+Hh2+Pj3OLi6rp+8adO+Ycy86dQ/Hsp8qdN+oIu/Xcm/HspehNLBAAAAPN0Uk5TAA8GATpyuvH7/7+AFGSyW7cfj/6uNrn/QCqx////lWX8IMh0CcNOiLwN7ilcYV57//////9vZ43/////cP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PgEC/wIDfQKC/wN/vi3GgxgAABTlJREFUeJzt2/lbFVUYB/CrmXWxfcPC277vA1SAmjpBhgghASWhllbSIpKKkJomCZEQFWW0SGmalYC2WGS7kWaL2Wqb7XtpaH9B931n7p0zyzlzYs6509Mz70933nOe8/046x0ebyjErn79+rvMkFZ7DNhz4F57h0VW0qBB3PH77Luf0Ox4cRL2P0BOPCfhwIMOlpfPIRhwiMx4d8GhhxFzkwWVWTCYlX/4EfHwlCECKxIxAEkswJFS4jUDzy446mh9jvB4ECS77oJjjtWniP/3YyW7AY7T8yNy8oek6OvT8o8/QTIgdh7QToITY2eJrPzYQaABTooBJJ0CroCTw7IPgX4WUACnnBq/CfkDOM24WcnbBSzA6eEECFiAM8Jh+QQW4MywuSIRCQgW4Kywrc5WPFdqWjov4BwpgGilcQLOlQVQUtN9BiipfgOMo+AXQPEdkO43IM1vQCoH4LwAEAACQAAIAO6AjMwst8rMlAjIHMpTWfIAXPnOAiEAvh3wHwAM7SNgWAAIAAEgAASAAOAGyODM7+vT0BWgZPEBnL4TiQFwHYSsDId8UYC+VwAIAAHg/wAYfv6Ikb4CRqmqegEzJDvnwtEX5Y6RA8jNi+arY/MLLi4cV3RJcUnpqEsvG6+WFV4Og2PKJ0ycdIUaqysn508RDLjqapVS1yjK1AqH/rXXXS8ScAMtX52mVE53HqmoEgi4kQooVmZQx2aKA8ykZczKUSqNreqS2TW1Nxnbo8WdhHNm44pz5908v2DBLSMX1t26KLe+4TYcK69RG29fDMNN2uTmO4o0wDyBV4FSBis2O11hWCoBiFZLNTaMS9IzoAkXvJOW34DDREM7M+4SB7gb1mul7gDMu4fs3AudJeIAdbBeDRVQBcP3kZ026NwvDvAArPcgFfCQbXgpdNrFAR6G9R6hAnB4GdmZCJ3l4gCPwnorVj7WlFO/6vEnnsy2AHA4j+yshk6HMMCyTssdqMsMmAu9cqKxBmetFAVYa78HPmUCPA2tZ4hGLTSeNbY9AtbZAc+R+c9jqzu+/cJkbKwRBlhvy+9sIgEvQqvipZdfeRU3X3sd5xQpwgBTqonsig2Nb7T3mI5AS3zwzZaqjWO1j9M3iQNoj8O3Nq/KeVtxqoX2Q6SuW0TO8ApYAkuudQyHWu6Q/45phlfAOFiT/qV4vi3/XcuD0yvgPVi0w5obr1kwPN6IX7/COsMrYBosu4UKGAHDLVMLa7T8PPsMjwDrdW4t/LYCJ30XTqx9XzSgGS99av5WjMWPH2gXo2jAh7BqKRWwBYZX48fuUhR8JBiAr0UfUwGfwHCJ9rkHb9uLrS9oHgGfwqIbqQC8TW3TNyaoBEcUAF9MllIB+TBcENsqRkG7eYoJ4JzPAkyCJT+jAtD3eWzrC+27w5ciAa2w4gwqAC//uvhmh3YvNs0nAbT/4E8HaLcB0wPYVBtgeLOx/RXO7yTvxjogpW+ATbBeGTVfey1qIBrbsNO61RFA/YUDHYCvRY10wPbo8Hay8fU3KCBej3VAhH4GMM+Bb82rWes71fqs7sGHx/cOgCT6rwsYgOy2th/o+Up314/Wx1999GtRbaUNwPyFidg/03X/9DP58NIAvzB/X5KAvxP+yspPBOA3vwHM/AQA2EcgAQB2vnyAyw6QD3DJlw5w2wGyAb+75csGsO8B8gGuByBaMgF/cORLBfzJA9ghEbCTB/CXPEAvT34otEsagGsHhOxngSgA1xkANXi3FAB3vu0oCAH08u5/fScM27X771jt6PVcO/9dfILrHxqGWhuSTXKrAAAAAElFTkSuQmCC
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @connect      fr.unmeta.cn
// @connect      127.0.0.1
// @run-at       document-end
// @downloadURL https://update.greasyfork.org/scripts/482986/%E6%B5%81%E7%95%85%E9%98%85%E8%AF%BB.user.js
// @updateURL https://update.greasyfork.org/scripts/482986/%E6%B5%81%E7%95%85%E9%98%85%E8%AF%BB.meta.js
// ==/UserScript==

// region 常量与变量

// URL 相关
const POST = "POST";
let url = new URL(location.href.split('?')[0]);

// cacheKey
const checkKey = "fluent_read_check";

// 时间
const expiringTime = 86400000 / 4;

// 服务请求地址
let source = "http://127.0.0.1"
// let source = "https://fr.unmeta.cn"
const read = "%s/read".replace("%s", source), preread = "%s/preread".replace("%s", source);
// 其余常量
const typeMap = {'Test': '测试', 'Provided': '提供', 'Compile': '编译'};

// 预编译正则表达式
const timeRegex = /^(a|an|\d+)\s+(minute|hour|day|month|year)(s)?\s+ago$/; // "2 days ago"
const paginationRegex = /^(\d+)\s*-\s*(\d+)\s+of\s+([\d,]+)$/; // "10 - 20 of 300"
const lastReleaseRegex = /Last Release on (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{1,2}),\s(\d{4})/; // "Last Release on Jul 4, 2022"
const dependencyRegex = /(Test|Provided|Compile) Dependencies \((\d+)\)/; // "Compile Dependencies (5)"
const rankRegex = /#(\d+) in\s*(.*)/; // "#3 in Algorithms"
const artifactsRegex = /^([\d,]+)\s+artifacts$/; // "1,024 artifacts"
const vulnerabilityRegex = /^(\d+)\s+vulnerabilit(y|ies)$/; // "3 vulnerabilities"
const indexedRegex = /Indexed Artifacts \(([\d.]+)M\)/;   // Indexed Artifacts (1.2M)
const repositoriesRegex = /Indexed Repositories \((\d+)\)/; //  Indexed Repositories (100)
const packagesRegex = /([\d,]+) indexed packages/;  // 12,795,152 indexed packages
const joinedRegex = /Joined ((Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec).*\s\d{1,2},?\s\d{4}$)/;  // Joined March 27, 2022
const moreRegex = /\+(\d+) more\.\.\./; // More 100
const commentsRegex = /(\d+)\sComments/;    // 数字 Comments
const gamesRegex = /(\d{1,3}(?:,\d{3})*)( games| Collections)/;
const combinedDateRegex = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec).*\s\d{1,2},?\s\d{4}$|^\d{1,2}\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec).*,?\s\d{4}$|^\d{1,2}\/\d{1,2}\/\d{4}$/i;
const emailRegex = /^Receive feedback emails \((.*)\)$/;
const verifyDomain = /To verify ownership of (.*), navigate to your DNS provider and add a TXT record with this value:/

// 特例适配
const Maven = "mvnrepository.com";
const DockerHub = "hub.docker.com";
const Nexusmods = "www.nexusmods.com"
const openai = "openai.com"
const chatGPT = "chat.openai.com"

let adapterMap = new (Map);

// DOM 防抖，单位毫秒
let throttleObserveDOM = throttle(observeDOM, 3000);

// 剪枝 set
let pruneSet = new Set();

// endregion

(function () {
    'use strict';

    // 初始化逻辑
    init()

    // 检查是否需要拉取数据
    checkRun(function (shouldRun) {
        // 如果 host 包含在 preread 中，shouldRun 为 true，则开始解析 DOM 树并设置监听器
        if (shouldRun) {
            // 1、添加监听器，使用 MutationObserver 监听 DOM 变化
            const observer = new MutationObserver(function (mutations, obs) {
                mutations.forEach(mutation => {
                    if (isNull(mutation.target)) return;
                    // console.log("原先变更记录：", mutation.target);
                    if (["div", "section", "main", "tbody", "tr", "td", "button", "svg", "span", "nav", "body", "label"].includes(mutation.target.tagName.toLowerCase())) {
                        handleDOMUpdate(mutation.target);
                    }
                });
            });
            observer.observe(document.body, {childList: true, subtree: true});

            // 2、手动开启一次解析 DOM 树
            handleDOMUpdate(document.body);
        }
    });

    // 快捷键 F2，清空所有缓存
    document.addEventListener('keydown', function (event) {
        if (event.key === 'F2') {
            let listValues = GM_listValues();
            listValues.forEach(e => {
                GM_deleteValue(e)
            })
            console.log('Cache cleared!');
        }
    });
})();

// region read
// read：异步返回 callback，表示是否需要拉取数据
function checkRun(callback) {
    // 1、检查缓存
    let pageMapCache = GM_getValue(checkKey, false);
    if (pageMapCache) {
        pageMapCache[url.host] ? callback(true) : callback(false);
        // return;
    }

    // 2、网络请求
    const lastRun = GM_getValue("lastRun", undefined);
    const now = new Date().getTime();

    if (isNull(lastRun) || now - lastRun > expiringTime) {
        console.log("开始更新 preread 缓存");
        GM_xmlhttpRequest({
            method: POST,
            url: preread,
            onload: function (response) {
                // pagesMap 是新获取的数据，pageMapCache 是从缓存中获取的旧数据
                const pagesMap = JSON.parse(response.responseText).Data;

                pagesMap[url.host] ? callback(true) : callback(false);

                // 将 fluent_read_check 设置为新的缓存
                GM_setValue(checkKey, pagesMap);

                // 检查 preread 名单判断是否需要更新对应 host 的 read 数据
                const listValues = GM_listValues();
                listValues.forEach(host => {
                    if (pageMapCache[host] !== pagesMap[host]) {
                        GM_deleteValue(host);
                        console.log("删除过期的缓存数据：", host);
                    }
                });

            },
            onerror: (error) => console.error("请求失败: ", error)
        });

        GM_setValue("lastRun", now.toString()); // 设置当前时间
    }
}

// read：处理 DOM 更新
function handleDOMUpdate(node) {
    let cachedData = GM_getValue(url.host, undefined);
    // 如果对应 host 的数据存在，则直接使用解析 parseDfs解析，否则发送网络请求（同时防抖动）
    if (!isNull(cachedData)) {
        parseDfs(node, cachedData);
    } else {
        // 防抖包装观察函数
        throttleObserveDOM()
    }
}

// read：监听器配置
function observeDOM() {
    let param = {page: url.origin};
    GM_xmlhttpRequest({
        method: POST,
        url: read,
        data: JSON.stringify(param),
        onload: function (response) {
            console.log("新的 read 请求：", url.host);

            let respMap = JSON.parse(response.responseText).Data;
            GM_setValue(url.host, respMap);
            parseDfs(document.body, respMap);
        },
        onerror: function (error) {
            console.error("请求失败: ", error);
        }
    });
}

// read：递归提取节点的文本内容
function parseDfs(node, respMap) {
    // 检查node是否为null
    if (isNull(node)) {
        return;
    }
    // console.log("当前节点：", node)

    switch (node.nodeType) {
        // 1、元素节点
        case Node.ELEMENT_NODE:
            // console.log("元素节点： ", node);
            if (["head", "path", "script", "style", "img", "noscript"].includes(node.tagName.toLowerCase()) || isSkip(node)) {
                // console.log("忽略节点: ", node);
                return;
            }
            if (node.hasAttribute("aria-label")) {
                processAriaLabel(node, respMap)
            }
            // 按钮与文本域节点
            if (["input", "button", "textarea"].includes(node.tagName.toLowerCase())) {
                processInput(node, respMap);
            }
            break;
        // 2、文本节点
        case  Node.TEXT_NODE:
            // console.log("文本节点：", node);
            // 如果存在适配的第三方方法，则使用
            let fn = adapterMap[url.host];
            isNull(fn) ? procPlain(node, respMap) : fn(node, respMap);
    }

    let child = node.firstChild;
    while (child) {
        parseDfs(child, respMap);
        child = child.nextSibling;
    }
}

// read：判断具有特殊属性的节点是否应该被跳过
function isSkip(node) {
    return node.classList.contains("s-post-summary--content")   // 兼容 openai
        || node.classList.contains("thread-item")
        || node.hasAttribute("data-message-author-role")
        // 适配 nexusmods
        || node.classList.contains("desc")
}

// read：处理 input 与文本域的 placeholder
function processInput(node, respMap) {
    // 1、如果存在 placeholder 值
    if (node.placeholder) {
        let placeholder = node.placeholder.replace(/\u00A0/g, ' ').trim();
        // 剪枝：跳过已经处理的 text 元素
        if (pruneSet.has(placeholder)) {
            console.log("已处理的 placeholder，跳过：", placeholder)
            return;
        }
        if (placeholder.length > 0 && withoutChinese(placeholder)) {
            signature(url.host + placeholder).then((value) => {
                // respMap[signature] 不为空则替换原文本
                if (!isNull(respMap[value]) && respMap[value] !== "") {
                    node.placeholder = respMap[value];
                    pruneSet.add(respMap[value])    // 剪枝
                }
            }).catch((error) => {
                console.error("Error in signature promise: ", error);
            });
        }
    }
    // 2、如果存在 value 值（不应该修改 input 与 textarea 的 value 值）
    if (node.value && (node.tagName.toLowerCase() === "button" || (node.tagName.toLowerCase() === "input" && ["submit", "button"].includes(node.type)))) {
        let value = node.value.replace(/\u00A0/g, ' ').trim();
        // 剪枝：跳过已经处理的 text 元素
        if (pruneSet.has(value)) {
            console.log("已处理的按钮 value，跳过：", value)
            return;
        }
        if (value.length > 0 && withoutChinese(value)) {
            signature(url.host + value).then((value) => {
                // respMap[signature] 不为空则替换原文本
                if (!isNull(respMap[value]) && respMap[value] !== "") {
                    node.value = respMap[value];
                    pruneSet.add(respMap[value])    // 剪枝
                }
            }).catch((error) => {
                console.error("Error in signature promise: ", error);
            });
        }
    }
}

// read：处理文本内容
function procPlain(node, respMap) {
    let text = node.textContent.replace(/\u00A0/g, ' ').trim();
    // 剪枝：跳过已经处理的 text 元素
    if (pruneSet.has(text)) {
        console.log("已处理的 text，跳过：", text)
        return;
    }
    if (text.length > 0 && withoutChinese(text)) {
        signature(url.host + text).then((value) => {
            // 添加一个检查以确保 respMap 是有效的
            if (!isNull(respMap[value]) && respMap[value] !== "") {
                node.textContent = respMap[value];
            }
            pruneSet.add(respMap[value])    // 剪枝
        }).catch((error) => {
            console.error("Error in signature promise: ", error);
        });
    }
}

// read：处理 aria-label 属性
function processAriaLabel(node, respMap) {
    let ariaLabel = node.getAttribute('aria-label').replace(/\u00A0/g, ' ').trim();
    // 剪枝：跳过已经处理的 text 元素
    if (pruneSet.has(ariaLabel)) {
        console.log("已处理的 ariaLabel，跳过：", ariaLabel)
        return;
    }
    if (ariaLabel) {
        if (ariaLabel.length > 0 && withoutChinese(ariaLabel)) {
            signature(url.host + ariaLabel).then((value) => {
                // 添加一个检查以确保 respMap 是有效的
                if (respMap && respMap[value] !== undefined && respMap[value] !== "") {
                    node.setAttribute('aria-label', respMap[value]);
                    pruneSet.add(respMap[value])    // 剪枝
                }
            }).catch((error) => {
                console.error("Error in signature promise: ", error);
            });
        }
    }
}

// endregion

// region 第三方特例

// 适配 nexusmods
function procNexusmods(node, respMap) {
    let text = node.textContent.replace(/\u00A0/g, ' ').trim();
    if (text.length > 0 && withoutChinese(text)) {

        // 使用正则表达式匹配 text
        let commentsMatch = text.match(commentsRegex);
        if (commentsMatch) {
            // 提取数字部分
            let count = parseInt(commentsMatch[1], 10);
            // 构建中文翻译的字符串
            node.textContent = `${count} 条评论`;
            return;
        }

        // TODO 翻译不准确
        // 使用正则表达式匹配文本
        let gamesMatch = text.match(gamesRegex);
        if (gamesMatch) {
            // 提取数字部分
            let count = gamesMatch[1];
            // 判断是游戏还是收藏
            let type = gamesMatch[2] === " games" ? "份游戏" : "个收藏";
            // 构建中文翻译的字符串
            node.textContent = `${count}${type}`;
            return;
        }

        let dateOrFalse = parseDateOrFalse(text);
        if (dateOrFalse) {
            node.textContent = `${dateOrFalse.getFullYear()}-${String(dateOrFalse.getMonth() + 1).padStart(2, '0')}-${String(dateOrFalse.getDate()).padStart(2, '0')}`
        }

        // 如果都不符合，进行普通哈希替换
        procPlain(node, respMap);
    }
}

function procOpenai(node, respMap) {
    let text = node.textContent.replace(/\u00A0/g, ' ').trim();

    if (text.length > 0 && withoutChinese(text)) {

        let dateOrFalse = parseDateOrFalse(text);
        if (dateOrFalse) {
            node.textContent = `${dateOrFalse.getFullYear()}-${dateOrFalse.getMonth() + 1}-${dateOrFalse.getDate()}`;
            return;
        }

        // 如果都不符合，进行普通哈希替换
        procPlain(node, respMap);
    }
}

function procChatGPT(node, respMap) {
    let text = node.textContent.replace(/\u00A0/g, ' ').trim();

    if (text.length > 0 && withoutChinese(text)) {

        // 提取电子邮件地址
        let emailMatch = text.match(emailRegex);
        if (emailMatch) {
            node.textContent = `接收反馈邮件（${emailMatch[1]}）`;
            return;
        }

        let verifyDomainMatch = text.match(verifyDomain);
        if (verifyDomainMatch) {
            node.textContent = `要验证 ${verifyDomainMatch[1]} 的所有权，请转到您的DNS提供商并添加一个带有以下值的TXT记录：`;
            return;
        }

        // 处理日期格式
        let dateOrFalse = parseDateOrFalse(text);
        if (dateOrFalse) {
            node.textContent = `${dateOrFalse.getFullYear()}-${String(dateOrFalse.getMonth() + 1).padStart(2, '0')}-${String(dateOrFalse.getDate()).padStart(2, '0')}`;
            return;
        }

        // 如果都不符合，进行普通哈希替换
        procPlain(node, respMap);
    }
}


// 适配 maven
function procMaven(node, respMap) {
    let text = node.textContent.replace(/\u00A0/g, ' ').trim();

    if (text.length > 0 && withoutChinese(text)) {

        // 处理 “Indexed Repositories (1936)”
        let repositoriesMatch = text.match(repositoriesRegex);
        if (repositoriesMatch) {
            let count = parseInt(repositoriesMatch[1], 10);
            node.textContent = `索引库数量（${count}）`;
            return;
        }

        // 处理 “Indexed Artifacts (37.2M)”
        let indexedMatch = text.match(indexedRegex);
        if (indexedMatch) {
            let count = parseFloat(indexedMatch[1]) * 100; // 将 M 转换为 万
            node.textContent = `索引包数量 (${count.toLocaleString('en-US', {useGrouping: false})}万)`;
            return;
        }

        // 匹配并处理 "indexed packages" 的格式
        let packagesMatch = text.match(packagesRegex);
        if (packagesMatch) {
            // 移除数字中的逗号，然后转换为整数
            let count = parseInt(packagesMatch[1].replace(/,/g, ''), 10);
            // 构建翻译后的字符串
            text = `${count.toLocaleString()}个索引包`;
            // 更新 DOM 节点的文本内容
            node.textContent = text;
            return;
        }

        // 处理日期格式
        let dateOrFalse = parseDateOrFalse(text);
        if (dateOrFalse) {
            node.textContent = `${dateOrFalse.getFullYear()}-${String(dateOrFalse.getMonth() + 1).padStart(2, '0')}-${String(dateOrFalse.getDate()).padStart(2, '0')}`;
            return;
        }

        // 处理“Last Release on”格式的日期
        let lastReleaseMatch = text.match(lastReleaseRegex);
        if (lastReleaseMatch) {
            let date = new Date(`${lastReleaseMatch[1]} ${lastReleaseMatch[2]}, ${lastReleaseMatch[3]}`);
            node.textContent = `最近更新 ${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
            return;
        }

        // 处理依赖类型
        let dependencyMatch = text.match(dependencyRegex);
        if (dependencyMatch) {
            let [_, type, count] = dependencyMatch;
            node.textContent = `${typeMap[type] || type}依赖 ${type} (${count})`;
            return;
        }

        // 处理排名
        let rankMatch = text.match(rankRegex);
        if (rankMatch) {
            node.textContent = `第 ${rankMatch[1]} 位 ${rankMatch[2]}`;
            return;
        }

        // 处理 artifacts 被引用次数
        let artifactsMatch = text.match(artifactsRegex);
        if (artifactsMatch) {
            node.textContent = `被引用 ${artifactsMatch[1]} 次`;
            return;
        }

        // 处理漏洞数量
        let vulnerabilityMatch = text.match(vulnerabilityRegex);
        if (vulnerabilityMatch) {
            node.textContent = `${vulnerabilityMatch[1]}个漏洞`;
            return;
        }

        // 如果都不符合，进行普通哈希替换
        procPlain(node, respMap);
    }
}

function procDockerhub(node, respMap) {
    let text = node.textContent.replace(/\u00A0/g, ' ').trim();

    if (text.length > 0 && withoutChinese(text)) {

        // 处理更新时间的翻译
        let timeMatch = text.match(timeRegex);
        if (timeMatch) {
            let [_, quantity, unit, isPlural] = timeMatch;
            // 将 'a' 或 'an' 转换为 '1'
            quantity = (quantity === 'a' || quantity === 'an') ? ' 1' : ` ${quantity}`;
            // 单位转换
            const unitMap = {'minute': '分钟', 'hour': '小时', 'day': '天', 'month': '月',};
            unit = unitMap[unit] || unit;
            // 构建新的文本格式
            node.textContent = `${quantity} ${unit}之前`;
            return;
        }

        // 处理分页信息的翻译
        let paginationMatch = text.match(paginationRegex);
        if (paginationMatch) {
            let [_, start, end, total] = paginationMatch;
            total = total.replace(/,/g, ''); // 去除数字中的逗号
            // 构建新的文本格式
            node.textContent = `当前第 ${start} - ${end} 项，共 ${total} `;
            return;
        }

        // 处理 "Joined March 27, 2022"
        let joinedMatch = text.match(joinedRegex);
        if (joinedMatch) {
            const date = new Date(joinedMatch[1]);
            node.textContent = `加入时间：${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
            return;
        }

        // 处理 "+5 more..."
        let moreMatch = text.match(moreRegex);
        if (moreMatch) {
            let count = parseInt(moreMatch[1], 10);
            node.textContent = `还有${count}个更多...`;
            return;
        }
        // 如果都不符合，则进行普通哈希替换
        procPlain(node, respMap);
    }
}

// endregion


// region 通用函数
// 判断字符串是否不包含中文
function withoutChinese(text) {
    return !/[\u4e00-\u9fa5]/.test(text);
}

// 计算SHA-1散列，取最后20个字符
async function signature(text) {
    if (text === "") {
        return "";
    }
    const hashBuffer = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(text));
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex.slice(-20);
}

function throttle(fn, interval) {
    // 维护上次执行的时间
    let last = 0;
    return function () {
        const now = Date.now();
        // 根据当前时间和上次执行时间的差值判断是否频繁
        if (now - last >= interval) {
            last = now;
            fn();
        }
    };
}

// 判断是否为空元素
function isNull(node) {
    if (node === null || node === undefined) {
        return true
    }
    return false
}

// 验证并解析日期格式，如果格式不正确则返回false
function parseDateOrFalse(dateString) {
    // 正则表达式，用于检查常见的日期格式（如 YYYY-MM-DD）
    if (!combinedDateRegex.test(dateString)) {
        return false;
    }
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
        return date; // 返回 Date 对象
    } else {
        return false; // 不是有效日期，返回 false
    }
}

// 初始化函数
function init() {
    adapterMap[Maven] = procMaven
    adapterMap[DockerHub] = procDockerhub
    adapterMap[Nexusmods] = procNexusmods
    adapterMap[openai] = procOpenai
    adapterMap[chatGPT] = procChatGPT
}

// endregion
