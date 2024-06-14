// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gbXMy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _units3Json = require("./units3.json"); //with path
var _units3JsonDefault = parcelHelpers.interopDefault(_units3Json);
console.log("Hello world!");
console.log((0, _units3JsonDefault.default));
//console.log(unitJson['length']);
//console.log(unitJson[0]);
console.log("--------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------");
//console.log(words);
//document.text = 'Hello world!';
var unitInfoText = document.getElementById("unitInfo");
unitInfoText.innerHTML = "Hello world!";
var deckStatsText = document.getElementById("deckStats");
deckStatsText.innerHTML = "Deck Stats:";
var coreP = document.getElementById("Core");
coreP.appendChild(document.createElement("br"));
var foundryP = document.getElementById("Foundry");
foundryP.appendChild(document.createElement("br"));
var advFoundryP = document.getElementById("AdvFoundry");
advFoundryP.appendChild(document.createElement("br"));
var starforgeP = document.getElementById("Starforge");
starforgeP.appendChild(document.createElement("br"));
var advStarforgeP = document.getElementById("AdvStarforge");
advStarforgeP.appendChild(document.createElement("br"));
document.getElementById("mainTable").appendChild(coreP);
document.getElementById("mainTable").appendChild(foundryP);
document.getElementById("mainTable").appendChild(advFoundryP);
document.getElementById("mainTable").appendChild(starforgeP);
document.getElementById("mainTable").appendChild(advStarforgeP);
document.getElementById("mainTable").appendChild(unitInfoText);
var cell1 = document.getElementById("cell1");
var cell2 = document.getElementById("cell2");
var cell3 = document.getElementById("cell3");
var cell4 = document.getElementById("cell4");
var cell5 = document.getElementById("cell5");
var cell6 = document.getElementById("cell6");
var cell7 = document.getElementById("cell7");
var cell8 = document.getElementById("cell8");
var deckCells = [
    cell1,
    cell2,
    cell3,
    cell4,
    cell5,
    cell6,
    cell7,
    cell8
];
function updateDeckCells(deckSlot, unitName) {
    //console.log(deckSlot);
    //console.log(unitName);
    //console.log(deckCells[deckSlot]);
    //console.log(deckCells[deckSlot].innerHTML);
    //console.log(deckCells[deckSlot].innerHTML.indexOf(unitName));
    if (deckCells[deckSlot].innerHTML.indexOf(unitName) == -1) deckCells[deckSlot].innerHTML += unitName + "<br>";
}
//turn this into a function below
//for each unit in json append a child containing its name
/*
Object.keys(json).forEach((key) => {
	console.log(json[key].Name);
	text.innerHTML += json[key].Name + '<br>';
});
 */ //write the function from here:
function addUnitNames() {
    Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
        console.log((0, _units3JsonDefault.default)[key].Name);
        unitInfoText.innerHTML += (0, _units3JsonDefault.default)[key].Name + "<br>";
    });
}
/*
//repeat the function to add all other properties of units

properties:
		"Health": 4,
		"Damage": 5,
		"Speed": 3,
		"Range": 3,
		"Matter": 125,
		"Energy": 125,
		"Bandwidth": 5,
		"Building": "Advanced Starforge",
		"Attack Type": "Anti-Air",
		"Attack Type 2": "",
		"Unit Type": "Air",
		"Ability": "",
		"Image": "valkyrie.png"
*/ function addUnitProperties() {
    Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
        unitInfoText.innerHTML += "<br>";
        Object.keys((0, _units3JsonDefault.default)[key]).forEach((prop)=>{
            unitInfoText.innerHTML += prop + ": " + (0, _units3JsonDefault.default)[key][prop] + "<br>";
        });
    });
}
//addUnitProperties();
//only add the unit properties for the name passed to the function
function addUnitPropertiesByName(name) {
    Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
        if ((0, _units3JsonDefault.default)[key].Name == name) {
            unitInfoText.innerHTML = "";
            unitInfoText.innerHTML += "<br>";
            Object.keys((0, _units3JsonDefault.default)[key]).forEach((prop)=>{
                unitInfoText.innerHTML += prop + ": " + (0, _units3JsonDefault.default)[key][prop] + "<br>";
                //if prop is Image, show the image instead of text
                if (prop == "Image") unitInfoText.innerHTML += `<img src="images/${(0, _units3JsonDefault.default)[key][prop]}" class="img">`;
            });
        }
    });
}
//make an array to store each button so they can be iterated upon
var buttonStore = [];
//create a button for each unit
function addButton(name, onClickFunc, buildingElement, mouseOverFunc) {
    //look the unit up in json by its name and check the confirmed value
    //if the value is true, then add the button to the buildingElement
    //if the value is false, then do not add the button
    //if the value is not present, then add the button
    console.log("boo!");
    var button = document.createElement("button");
    var unitName = name;
    Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
        if ((0, _units3JsonDefault.default)[key].Name == name) {
            console.log("foundkey");
            if ((0, _units3JsonDefault.default)[key].Confirmed == "y") {
                console.log("confirmed");
                buttonStore.push(button);
                if (buildingElement.appendChild) buildingElement.appendChild(button);
                console.log(name);
                button.innerHTML = `<table><tr><td><img src="images/${(0, _units3JsonDefault.default)[key].Image}.png" class="buttonImg"></td><td id="buttonStats">${(0, _units3JsonDefault.default)[key].Name}</td><tr></table>`;
                button.classList.add("unitButton");
                button.onclick = onClickFunc;
                button.addEventListener("mouseover", mouseOverFunc);
                buttonStore.push(button);
                return button;
            }
        }
    });
//button.innerHTML = name;
//set button.innerHTML to image file from json, if the values exists
//if (json[name].Image != undefined) button.innerHTML = `<img src="images/${json[name].Image}" class="img">`;
//button class
//button.classList.add('unitButton');
//document.body.appendChild(button);
//addbutton to array for iteration
}
//addUnitPropertiesByName('Valkyrie');
var currentDeckList = [];
//write a function to get the total matter of the current deck list
function getDeckMatter() {
    var totalMatter = 0;
    currentDeckList.forEach((unit)=>{
        Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
            if ((0, _units3JsonDefault.default)[key].Name == unit) totalMatter += (0, _units3JsonDefault.default)[key].Matter;
        });
    });
    return totalMatter;
}
function getDeckEnergy() {
    var totalEnergy = 0;
    currentDeckList.forEach((unit)=>{
        Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
            if ((0, _units3JsonDefault.default)[key].Name == unit) totalEnergy += (0, _units3JsonDefault.default)[key].Energy;
        });
    });
    return totalEnergy;
}
function getDeckSpeed() {
    var totalSpeed = 0;
    currentDeckList.forEach((unit)=>{
        Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
            if ((0, _units3JsonDefault.default)[key].Name == unit) totalSpeed += (0, _units3JsonDefault.default)[key].Speed;
        });
    });
    return totalSpeed;
}
function getDeckDamage() {
    var totalDamage = 0;
    currentDeckList.forEach((unit)=>{
        Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
            if ((0, _units3JsonDefault.default)[key].Name == unit) totalDamage += (0, _units3JsonDefault.default)[key].Damage;
        });
    });
    return totalDamage;
}
function getDeckHealth() {
    var totalHealth = 0;
    currentDeckList.forEach((unit)=>{
        Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
            if ((0, _units3JsonDefault.default)[key].Name == unit) totalHealth += (0, _units3JsonDefault.default)[key].Health;
        });
    });
    return totalHealth;
}
function getDeckStrengths() {
    var strengths = [];
    currentDeckList.forEach((unit)=>{
        Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
            if ((0, _units3JsonDefault.default)[key].Name == unit) {
                if ((0, _units3JsonDefault.default)[key].Strengths != undefined) strengths.push((0, _units3JsonDefault.default)[key].Strengths);
            }
        });
    });
    //return strengths;
    return strengths.join(", ");
}
// we need to write the following functions, to show them in the deckStats:
// getDeckWeaknesses; getDeckAbilities; getDeckAttackTypes; getDeckUnitTypes;
//make this work for the weak against json key
function getDeckWeaknesses() {
    var weaknesses = [];
    currentDeckList.forEach((unit)=>{
        Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
            if ((0, _units3JsonDefault.default)[key].Name == unit) {
                if ((0, _units3JsonDefault.default)[key]["Weak Against"] != undefined) weaknesses.push((0, _units3JsonDefault.default)[key]["Weak Against"]);
            }
        });
    });
    return weaknesses.join(", ");
//return weaknesses;
}
function getDeckAbilities() {
    var abilities = [];
    currentDeckList.forEach((unit)=>{
        Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
            if ((0, _units3JsonDefault.default)[key].Name == unit) {
                if ((0, _units3JsonDefault.default)[key].Ability != undefined) abilities.push((0, _units3JsonDefault.default)[key].Ability);
            }
        });
    });
    return abilities.join(", ");
//return abilities;
}
function getDeckAttackTypes() {
    var attackTypes = [];
    currentDeckList.forEach((unit)=>{
        Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
            if ((0, _units3JsonDefault.default)[key].Name == unit) {
                if ((0, _units3JsonDefault.default)[key]["Attack Type"] != undefined) attackTypes.push((0, _units3JsonDefault.default)[key]["Attack Type"]);
                if ((0, _units3JsonDefault.default)[key]["Attack Type 2"] != undefined) attackTypes.push((0, _units3JsonDefault.default)[key]["Attack Type 2"]);
            }
        });
    });
    //return attackTypes;
    return attackTypes.join(", ");
}
function getDeckUnitTypes() {
    var unitTypes = [];
    currentDeckList.forEach((unit)=>{
        Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
            if ((0, _units3JsonDefault.default)[key].Name == unit) {
                if ((0, _units3JsonDefault.default)[key]["Unit Type"] != undefined) unitTypes.push((0, _units3JsonDefault.default)[key]["Unit Type"]);
            }
        });
    });
    //return unitTypes;
    return unitTypes.join(", ");
}
//write a function to get the total matter of the current deck list
//handle when a deck unit is added to the current Deck list
var remCoreUnits = 2;
var remFoundryUnits = 2;
var remStarforgeUnits = 2;
var remAdvFoundryUnits = 2;
var remAdvStarforgeUnits = 2;
var remTotalFoundryUnits = 3;
var remTotalStarforgeUnits = 3;
function updateDeckStats() {
    deckStatsText.innerHTML = "Deck Stats: ";
    deckStatsText.innerHTML = '<p class ="Warning">Warning: Missing Anti-Ground Core</p>';
    deckStatsText.innerHTML += "<br> ";
    deckStatsText.innerHTML += '<p class ="Warning">Warning: Missing Anti-Air Core</p>';
    deckStatsText.innerHTML += "<br> ";
    deckStatsText.innerHTML += "Units: " + currentDeckList.length + "<br> ";
    //unit names
    for(var i = 0; i < currentDeckList.length; i++)deckStatsText.innerHTML += "-- " + currentDeckList[i] + "<br> ";
    deckStatsText.innerHTML += "Remaining units: " + (8 - currentDeckList.length) + "<br> ";
    deckStatsText.innerHTML += "Remaining Core Units: " + remCoreUnits + "<br> ";
    deckStatsText.innerHTML += "Remaining Foundry Units: " + remFoundryUnits + "<br> ";
    deckStatsText.innerHTML += "Remaining Starforge Units: " + remStarforgeUnits + "<br> ";
    deckStatsText.innerHTML += "Remaining Adv. Foundry Units: " + remAdvFoundryUnits + "<br> ";
    deckStatsText.innerHTML += "Remaining Adv. Starforge Units: " + remAdvStarforgeUnits + "<br> ";
    deckStatsText.innerHTML += "Matter: " + getDeckMatter() + "<br> ";
    deckStatsText.innerHTML += "Energy: " + getDeckEnergy() + "<br> ";
    deckStatsText.innerHTML += "Speed: " + getDeckSpeed() + "<br> ";
    deckStatsText.innerHTML += "Damage: " + getDeckDamage() + "<br> ";
    deckStatsText.innerHTML += "Health: " + getDeckHealth() + "<br> ";
    deckStatsText.innerHTML += "<br> ";
    deckStatsText.innerHTML += "Strengths: " + getDeckStrengths() + "<br> ";
    deckStatsText.innerHTML += "Weaknesses: " + getDeckWeaknesses() + "<br> ";
    deckStatsText.innerHTML += "<br> ";
    deckStatsText.innerHTML += "Abilities: " + getDeckAbilities() + "<br> ";
    deckStatsText.innerHTML += "<br> ";
    deckStatsText.innerHTML += "Attack Types: " + getDeckAttackTypes() + "<br> ";
    deckStatsText.innerHTML += "<br> ";
    deckStatsText.innerHTML += "Unit Types: " + getDeckUnitTypes() + "<br> ";
    deckStatsText.innerHTML += "<br> ";
}
//addDeckUnit is called by the onClickFunction for the deck, it is passed it's name, so it's a good place to update things when a unit is added to the deck
addDeckUnit = (name)=>{
    //check if the unit is already in the deck
    if (currentDeckList.includes(name)) console.log("Unit already in deck");
    else {
        currentDeckList.push(name);
        updateDeckStats();
        console.log("Added " + name + " to the deck");
    }
    console.log(currentDeckList);
    //update the deck stats text
    //update the deck cells
    updateDeckCells(currentDeckList.length - 1, name);
    //<div class="testingclass"><img src="images/${imageFile}.png" class="buttonImg">${name}</p>
    //add the name of each unit in the deck
    //for each unit in the deck, add a button to the deckStatsText
    currentDeckList.forEach((unit)=>{
        deckStatsText.innerHTML += unit + " ";
    });
};
//iterate through the deck cells and change the image to the units in the currentDeckList array
function updateAllDeckCells() {
    //iterate through the deck cells
    for(var i = 0; i < deckCells.length; i++)//if the deck cell is not empty, change the image to the next unit in the currentDeckList array
    if (deckCells[i].innerHTML != "") deckCells[i].innerHTML = `<img src="images/${currentDeckList[i]}.png" class="buttonImg">`;
}
//for each unit's name, add a button
Object.keys((0, _units3JsonDefault.default)).forEach((key)=>{
    //create alocal onClickFunction that gets passed to the addButton function
    var onClickFunction = ()=>{
        console.log((0, _units3JsonDefault.default)[key].Name);
        updateAllDeckCells();
        if ((0, _units3JsonDefault.default)[key].Building == "Core") {
            if (remCoreUnits > 0) remCoreUnits--;
            else {
                console.log("No more Core units");
                return;
            }
        } else if ((0, _units3JsonDefault.default)[key].Building == "Foundry") {
            if (remFoundryUnits > 0 && remTotalFoundryUnits > 0) {
                remFoundryUnits--;
                remTotalFoundryUnits--;
            } else {
                console.log("No more Foundry units");
                return;
            }
        } else if ((0, _units3JsonDefault.default)[key].Building == "Starforge") {
            if (remStarforgeUnits > 0 && remTotalStarforgeUnits > 0) {
                remStarforgeUnits--;
                remTotalStarforgeUnits--;
            } else {
                console.log("No more Starforge units");
                return;
            }
        } else if ((0, _units3JsonDefault.default)[key].Building == "Advanced Foundry") {
            if (remAdvFoundryUnits > 0 && remTotalFoundryUnits > 0) {
                remAdvFoundryUnits--;
                remTotalFoundryUnits--;
            } else {
                console.log("No more Advanced Foundry units");
                return;
            }
        } else if ((0, _units3JsonDefault.default)[key].Building == "Advanced Starforge") {
            if (remAdvStarforgeUnits > 0 && remTotalStarforgeUnits > 0) {
                remAdvStarforgeUnits--;
                remTotalStarforgeUnits--;
            } else {
                console.log("No more Advanced Starforge units");
                return;
            }
        }
        addDeckUnit((0, _units3JsonDefault.default)[key].Name);
        //iterate through the currentDeckList, if the unit is in the deck, add a class to the button
        buttonStore.forEach((button)=>{
            if (button.innerHTML.includes((0, _units3JsonDefault.default)[key].Name)) button.classList.add("inDeck");
        });
        //call the updateDeckCellsFunction on the highest index of the currentDeckList
        updateDeckCells(currentDeckList.length - 1, (0, _units3JsonDefault.default)[key].Name);
        updateAllDeckCells();
    };
    var mouseOverFunction = ()=>{
        console.log("Mouse over " + (0, _units3JsonDefault.default)[key].Name);
        addUnitPropertiesByName((0, _units3JsonDefault.default)[key].Name);
        updateDeckStats();
    };
    if ((0, _units3JsonDefault.default)[key].Name != "") {
        if ((0, _units3JsonDefault.default)[key].Building == "Core") addButton((0, _units3JsonDefault.default)[key].Name, onClickFunction, coreP, mouseOverFunction);
        else if ((0, _units3JsonDefault.default)[key].Building == "Foundry") addButton((0, _units3JsonDefault.default)[key].Name, onClickFunction, foundryP, mouseOverFunction);
        else if ((0, _units3JsonDefault.default)[key].Building == "Starforge") addButton((0, _units3JsonDefault.default)[key].Name, onClickFunction, starforgeP, mouseOverFunction);
        else if ((0, _units3JsonDefault.default)[key].Building == "Advanced Foundry") addButton((0, _units3JsonDefault.default)[key].Name, onClickFunction, advFoundryP, mouseOverFunction);
        else if ((0, _units3JsonDefault.default)[key].Building == "Advanced Starforge") addButton((0, _units3JsonDefault.default)[key].Name, onClickFunction, advStarforgeP, mouseOverFunction);
    } else console.log("No name for " + (0, _units3JsonDefault.default)[key].Name);
});
deckStatsText.appendChild(document.createElement("br"));
deckStatsText.classList.add("deckStatsText"); //console.log(text);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./units3.json":"aESxO"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aESxO":[function(require,module,exports) {
module.exports = JSON.parse('[{"Confirmed":"y","Name":"Blink","Image":"blink","Health":2,"Damage":1,"Speed":3,"Range":2,"Matter":100,"Energy":0,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Blink","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"FAR HORIZON COLLECTIVE","Link":"https://www.playbattleaces.com/units/blink","":"","__1":"","z":""},{"Confirmed":"y","Name":"Blink Hunter","Image":"blinkhunter","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"Blink","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"FAR HORIZON COLLECTIVE","Link":"https://www.playbattleaces.com/units/blinkhunter","":"","__1":"","z":""},{"Confirmed":"y","Name":"Crab","Image":"crab","Health":4,"Damage":2,"Speed":3,"Range":1,"Matter":100,"Energy":0,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/crab","":"","__1":"","z":""},{"Confirmed":"y","Name":"Gunbot","Image":"gunbot","Health":1,"Damage":1,"Speed":2,"Range":2,"Matter":50,"Energy":0,"Bandwidth":1,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Overclock","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"SENKAISHU LIMITED","Link":"https://www.playbattleaces.com/units/gunbot","":"","__1":"","z":""},{"Confirmed":"y","Name":"Hornet","Image":"hornet","Health":1,"Damage":2,"Speed":5,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"CORONA CENTRAL SYSTEMS","Link":"https://www.playbattleaces.com/units/hornet","":"","__1":"","z":""},{"Confirmed":"y","Name":"Hunter","Image":"hunter","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/hunter","":"","__1":"","z":""},{"Confirmed":"y","Name":"Missilebot","Image":"missilebot","Health":2,"Damage":2,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"Overclock","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"SENKAISHU LIMITED","Link":"https://www.playbattleaces.com/units/missilebot","":"","__1":"","z":""},{"Confirmed":"y","Name":"Recall","Image":"recall","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":100,"Energy":0,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Recall","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/recall","":"","__1":"","z":""},{"Confirmed":"y","Name":"Recall Hunter","Image":"recallhunter","Health":2,"Damage":2,"Speed":1,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"Recall","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/recallhunter","":"","__1":"","z":""},{"Confirmed":"y","Name":"Wasp","Image":"wasp","Health":1,"Damage":1,"Speed":5,"Range":1,"Matter":25,"Energy":0,"Bandwidth":1,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/wasp","":"","__1":"","z":""},{"Confirmed":"y","Name":"Beetle","Image":"beetle","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/beetle","":"","__1":"","z":""},{"Confirmed":"y","Name":"Scorpion","Image":"scorpion","Health":3,"Damage":1,"Speed":3,"Range":1,"Matter":50,"Energy":0,"Bandwidth":1,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/scorpion","":"","__1":"","z":""},{"Confirmed":"","Name":"Ballista","Image":"ballista","Health":2,"Damage":5,"Speed":2,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/ballista","":"","__1":"","z":""},{"Confirmed":"y","Name":"Bomber","Image":"bomber","Health":1,"Damage":5,"Speed":5,"Range":1,"Matter":50,"Energy":50,"Bandwidth":2,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"Self Destructs","Strong Against":"Core Units","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"High Health","Other":"","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/bomber","":"","__1":"","z":""},{"Confirmed":"y","Name":"Crusader","Image":"crusader","Health":5,"Damage":4,"Speed":3,"Range":1,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Splash","StrongAgainst 2":"","Weak Against":"Burst","Weak Against 2":"","Other":"","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/crusader","":"","__1":"","z":""},{"Confirmed":"y","Name":"Destroyer","Image":"destroyer","Health":3,"Damage":5,"Speed":2,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Burst","Unit Type":"Ground","Ability":"","Strong Against":"High Health","StrongAgainst 2":"","Weak Against":"Core Units","Weak Against 2":"","Other":"","Manufacturer":"HEAVY UNION ALLIANCE","Link":"https://www.playbattleaces.com/units/destroyer","":"","__1":"","z":""},{"Confirmed":"y","Name":"King Crab","Image":"kingcrab","Health":4,"Damage":5,"Speed":3,"Range":1,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Splash","StrongAgainst 2":"","Weak Against":"Burst","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/kingcrab","":"","__1":"","z":""},{"Confirmed":"y","Name":"Mortar","Image":"mortar","Health":4,"Damage":5,"Speed":2,"Range":5,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"Setup","Strong Against":"","StrongAgainst 2":"","Weak Against":"Long Range","Weak Against 2":"","Other":"","Manufacturer":"HEAVY UNION ALLIANCE","Link":"https://www.playbattleaces.com/units/mortar","":"","__1":"","z":""},{"Confirmed":"y","Name":"Recall Shocker","Image":"recallshocker","Health":3,"Damage":5,"Speed":1,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"Recall","Strong Against":"","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/recallshocker","":"","__1":"","z":""},{"Confirmed":"y","Name":"Shocker","Image":"shocker","Health":3,"Damage":5,"Speed":2,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Core Units","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":"Shock Splash","Manufacturer":"CORONA CENTRAL SYSTEMS","Link":"https://www.playbattleaces.com/units/shocker","":"","__1":"","z":""},{"Confirmed":"y","Name":"Swift Shocker","Image":"swiftshocker","Health":2,"Damage":5,"Speed":4,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Core Units","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":"Shock Splash","Manufacturer":"","Link":"https://www.playbattleaces.com/units/swiftshocker","":"","__1":"","z":""},{"Confirmed":"y?","Name":"Heavy Hunter","Image":"heavyhunter","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Foundry","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/heavyhunter","":"","__1":"","z":""},{"Confirmed":"y?","Name":"Raider","Image":"raider","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Foundry","Attack Type":"Anti-Worker","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/raider","":"","__1":"","z":""},{"Confirmed":"y","Name":"Heavy Turret","Image":"heavyturret","Health":5,"Damage":4,"Speed":1,"Range":4,"Matter":200,"Energy":100,"Bandwidth":0,"Building":"Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Base defense","Ability":"","Strong Against":"Harassment","StrongAgainst 2":"","Weak Against":"Long Range","Weak Against 2":"","Other":"Placed","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/heavyturret","":"","__1":"","z":""},{"Confirmed":"y","Name":"Stinger","Image":"stinger","Health":3,"Damage":5,"Speed":5,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"","Other":"Strong With Melee","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/stinger","":"","__1":"","z":""},{"Confirmed":"y","Name":"Advanced Recall","Image":"advancedrecall","Health":1,"Damage":3,"Speed":2,"Range":2,"Matter":50,"Energy":50,"Bandwidth":2,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Recall","Strong Against":"Ground","StrongAgainst 2":"","Weak Against":"Splash","Weak Against 2":"","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/advancedrecall","":"","__1":"","z":""},{"Confirmed":"y","Name":"Airship","Image":"airship","Health":4,"Damage":4,"Speed":3,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground Anti-Air","Weak Against 2":"","Other":"Air2Air Specialist","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/ariship","":"","__1":"","z":""},{"Confirmed":"y","Name":"Falcon","Image":"falcon","Health":4,"Damage":3,"Speed":1,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/falcon","":"","__1":"","z":""},{"Confirmed":"y","Name":"Dragonfly","Image":"dragonfly","Health":4,"Damage":3,"Speed":4,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"Mobile Harassment","Manufacturer":"CORONA CENTRAL SYSTEMS","Link":"https://www.playbattleaces.com/units/dragonfly","":"","__1":"","z":""},{"Confirmed":"y","Name":"Butterfly","Image":"butterfly","Health":1,"Damage":5,"Speed":3,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/butterfly","":"","__1":"","z":""},{"Confirmed":"y?","Name":"Mammoth","Image":"mammoth","Health":5,"Damage":3,"Speed":3,"Range":1,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/mammoth","":"","__1":"","z":"z"},{"Confirmed":"y","Name":"Predator","Image":"predator","Health":2,"Damage":5,"Speed":2,"Range":5,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Anti-Air","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"HEAVY UNION ALLIANCE","Link":"https://www.playbattleaces.com/units/predator","":"","__1":"","z":""},{"Confirmed":"y","Name":"Heavy Ballista","Image":"heavyballista","Health":4,"Damage":5,"Speed":2,"Range":2,"Matter":250,"Energy":250,"Bandwidth":10,"Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Core Units","StrongAgainst 2":"","Weak Against":"High Health","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/heavyballista","":"","__1":"","z":""},{"Confirmed":"z","Name":"Sniper","Image":"sniper","Health":2,"Damage":5,"Speed":1,"Range":5,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/sniper","":"","__1":"","z":"z"},{"Confirmed":"z","Name":"Behemoth","Image":"behemoth","Health":5,"Damage":"?","Speed":2,"Range":2,"Matter":250,"Energy":0,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Blink","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/behemoth","":"","__1":"","z":"z"},{"Confirmed":"y?","Name":"Advanced Blink","Image":"advancedblink","Health":4,"Damage":2,"Speed":3,"Range":2,"Matter":50,"Energy":50,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/advancedblink","":"","__1":"","z":""},{"Confirmed":"y?","Name":"Double Machine Gun","Image":"doublemachinegun","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/doublemachinegun","":"","__1":"","z":""},{"Confirmed":"y","Name":"Valkyrie","Image":"valkyrie","Health":4,"Damage":5,"Speed":3,"Range":3,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Advanced Starforge","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Air","StrongAgainst 2":"","Weak Against":"Ground Anti-Air","Weak Against 2":"","Other":"Air2Air Specialist","Manufacturer":"CORONA CENTRAL SYSTEMS","Link":"https://www.playbattleaces.com/units/valkyrie","":"","__1":"","z":""},{"Confirmed":"y","Name":"Locust","Image":"locust","Health":1,"Damage":2,"Speed":4,"Range":2,"Matter":50,"Energy":50,"Bandwidth":2,"Building":"Advanced Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"Mobile Harassment","Manufacturer":"","Link":"https://www.playbattleaces.com/units/locust","":"","__1":"","z":""},{"Confirmed":"y","Name":"Katbus","Image":"katbus","Health":5,"Damage":5,"Speed":2,"Range":2,"Matter":250,"Energy":250,"Bandwidth":10,"Building":"Advanced Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","StrongAgainst 2":"Splash","Weak Against":"Anti-Air","Weak Against 2":"","Other":"","Manufacturer":"CORONA CENTRAL SYSTEMS","Link":"https://www.playbattleaces.com/units/katbus","":"","__1":"","z":""},{"Confirmed":"y","Name":"Bulwark","Image":"bulwark","Health":5,"Damage":5,"Speed":1,"Range":2,"Matter":250,"Energy":250,"Bandwidth":10,"Building":"Advanced Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","StrongAgainst 2":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/bulwark","":"","__1":"","z":""},{"Confirmed":"z","Name":"Kraken","Image":"kraken","Health":5,"Damage":5,"Speed":1,"Range":"","Matter":3000,"Energy":3000,"Bandwidth":"","Building":"?","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/kraken","":"","__1":"","z":"x"},{"Confirmed":"y?","Name":"Artillery","Image":"artillery","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Advanced Starforge","Attack Type":"Anti-Ground","Attack Type 2":"?","Unit Type":"Ground","Ability":"","Strong Against":"","StrongAgainst 2":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/artillery","":"","__1":"","z":""}]');

},{}]},["gbXMy","bNKaB"], "bNKaB", "parcelRequire716c")

//# sourceMappingURL=index.0641b553.js.map
