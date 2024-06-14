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
var _units2Json = require("./units2.json"); //with path
var _units2JsonDefault = parcelHelpers.interopDefault(_units2Json);
console.log("Hello world!");
console.log((0, _units2JsonDefault.default));
console.log((0, _units2JsonDefault.default)["length"]);
console.log((0, _units2JsonDefault.default)[0]);
console.log("--------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------");
console.log("--------------------------------------------------------------------------------------");
//console.log(words);
//document.text = 'Hello world!';
text = document.getElementById("idk");
text.innerHTML = "Hello world!";
coreP = document.getElementById("Core");
coreP.appendChild(document.createElement("br"));
foundryP = document.getElementById("Foundry");
foundryP.appendChild(document.createElement("br"));
advFoundryP = document.getElementById("AdvFoundry");
advFoundryP.appendChild(document.createElement("br"));
starforgeP = document.getElementById("Starforge");
starforgeP.appendChild(document.createElement("br"));
advStarforgeP = document.getElementById("AdvStarforge");
advStarforgeP.appendChild(document.createElement("br"));
document.getElementById("mainTable").appendChild(coreP);
document.getElementById("mainTable").appendChild(foundryP);
document.getElementById("mainTable").appendChild(advFoundryP);
document.getElementById("mainTable").appendChild(starforgeP);
document.getElementById("mainTable").appendChild(advStarforgeP);
document.getElementById("mainTable").appendChild(text);
//turn this into a function below
//for each unit in json append a child containing its name
/*
Object.keys(json).forEach((key) => {
	console.log(json[key].Name);
	text.innerHTML += json[key].Name + '<br>';
});
 */ //write the function from here:
function addUnitNames() {
    Object.keys((0, _units2JsonDefault.default)).forEach((key)=>{
        console.log((0, _units2JsonDefault.default)[key].Name);
        text.innerHTML += (0, _units2JsonDefault.default)[key].Name + "<br>";
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
    Object.keys((0, _units2JsonDefault.default)).forEach((key)=>{
        text.innerHTML += "<br>";
        Object.keys((0, _units2JsonDefault.default)[key]).forEach((prop)=>{
            text.innerHTML += prop + ": " + (0, _units2JsonDefault.default)[key][prop] + "<br>";
        });
    });
}
//addUnitProperties();
//only add the unit properties for the name passed to the function
function addUnitPropertiesByName(name) {
    Object.keys((0, _units2JsonDefault.default)).forEach((key)=>{
        if ((0, _units2JsonDefault.default)[key].Name == name) {
            text.innerHTML = "";
            text.innerHTML += "<br>";
            Object.keys((0, _units2JsonDefault.default)[key]).forEach((prop)=>{
                text.innerHTML += prop + ": " + (0, _units2JsonDefault.default)[key][prop] + "<br>";
                //if prop is Image, show the image instead of text
                if (prop == "Image") text.innerHTML += `<img src="images/${(0, _units2JsonDefault.default)[key][prop]}" class="img">`;
            });
        }
    });
}
//make an array to store each button so they can be iterated upon
var buttonStore = [];
//create a button for each unit
function addButton(name, func, buildingElement) {
    button = document.createElement("button");
    //button.innerHTML = name;
    //set button.innerHTML to image file from json, if the values exist
    button.innerHTML = `<div class="testingclass"><img src="images/${name}.png" class="buttonImg">${name}</p>`;
    button.classList.add("test");
    button.onclick = func;
    button.addEventListener("mouseover", func);
    //button class
    button.classList.add("unitButton");
    //document.body.appendChild(button);
    buildingElement.appendChild(button);
    //addbutton to array for iteration
    buttonStore.push(button);
    return button;
}
//addUnitPropertiesByName('Valkyrie');
//for each unit's name, add a button
Object.keys((0, _units2JsonDefault.default)).forEach((key)=>{
    //create alocal onClickFunction that gets passed to the addButton function
    var onClickFunction = ()=>{
        console.log((0, _units2JsonDefault.default)[key].Name);
        addUnitPropertiesByName((0, _units2JsonDefault.default)[key].Name);
    };
    if ((0, _units2JsonDefault.default)[key].Building == "Core") addButton((0, _units2JsonDefault.default)[key].Name, onClickFunction, coreP);
    else if ((0, _units2JsonDefault.default)[key].Building == "Foundry") addButton((0, _units2JsonDefault.default)[key].Name, onClickFunction, foundryP);
    else if ((0, _units2JsonDefault.default)[key].Building == "Starforge") addButton((0, _units2JsonDefault.default)[key].Name, ()=>{
        console.log((0, _units2JsonDefault.default)[key].Name);
        addUnitPropertiesByName((0, _units2JsonDefault.default)[key].Name);
    }, starforgeP);
    else if ((0, _units2JsonDefault.default)[key].Building == "Advanced Foundry") addButton((0, _units2JsonDefault.default)[key].Name, ()=>{
        console.log((0, _units2JsonDefault.default)[key].Name);
        addUnitPropertiesByName((0, _units2JsonDefault.default)[key].Name);
    }, advFoundryP);
    else if ((0, _units2JsonDefault.default)[key].Building == "Advanced Starforge") addButton((0, _units2JsonDefault.default)[key].Name, ()=>{
        console.log((0, _units2JsonDefault.default)[key].Name);
        addUnitPropertiesByName((0, _units2JsonDefault.default)[key].Name);
    }, advStarforgeP);
    else addButton((0, _units2JsonDefault.default)[key].Name, ()=>{
        console.log((0, _units2JsonDefault.default)[key].Name);
        addUnitPropertiesByName((0, _units2JsonDefault.default)[key].Name);
    }, document.body);
}); //console.log(text);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./units2.json":"fgpnz"}],"gkKU3":[function(require,module,exports) {
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

},{}],"fgpnz":[function(require,module,exports) {
module.exports = JSON.parse('[{"Confirmed":"x","Name":"Blink","Health":2,"Damage":1,"Speed":3,"Range":2,"Matter":100,"Energy":0,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Blink","Strong Against":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"FAR HORIZON COLLECTIVE","Link":"https://www.playbattleaces.com/units/blink","":"","__1":"","z":"x"},{"Confirmed":"x","Name":"Blink Hunter","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"Blink","Strong Against":"Air","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"FAR HORIZON COLLECTIVE","Link":"https://www.playbattleaces.com/units/blinkhunter","":"","__1":"","z":"x"},{"Confirmed":"x","Name":"Crab","Health":4,"Damage":2,"Speed":3,"Range":1,"Matter":100,"Energy":0,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/crab","":"","__1":"","z":"x"},{"Confirmed":"x","Name":"Gunbot","Health":1,"Damage":1,"Speed":2,"Range":2,"Matter":50,"Energy":0,"Bandwidth":1,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Overclock","Strong Against":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"SENKAISHU LIMITED","Link":"https://www.playbattleaces.com/units/gunbot","":"","__1":"","z":"x"},{"Confirmed":"x","Name":"Hornet","Health":1,"Damage":2,"Speed":5,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Air","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"CORONA CENTRAL SYSTEMS","Link":"https://www.playbattleaces.com/units/hornet","":"","__1":"","z":"x"},{"Confirmed":"x","Name":"Hunter","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Air","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/hunter","":"","__1":"","z":"x"},{"Confirmed":"x","Name":"Missilebot","Health":2,"Damage":2,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"Overclock","Strong Against":"Air","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"SENKAISHU LIMITED","Link":"https://www.playbattleaces.com/units/missilebot","":"","__1":"","z":"x"},{"Confirmed":"x","Name":"Recall","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":100,"Energy":0,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Recall","Strong Against":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/recall","":"","__1":"","z":"x"},{"Confirmed":"x","Name":"Recall Hunter","Health":2,"Damage":2,"Speed":1,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Ground","Ability":"Recall","Strong Against":"Air","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/recallhunter","":"","__1":"","z":"x"},{"Confirmed":"x","Name":"Wasp","Health":1,"Damage":1,"Speed":5,"Range":1,"Matter":25,"Energy":0,"Bandwidth":1,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/wasp","":"","__1":"","z":"x"},{"Confirmed":"x","Name":"Beetle","Health":2,"Damage":1,"Speed":2,"Range":2,"Matter":75,"Energy":25,"Bandwidth":2,"Building":"Core","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Air","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/beetle","":"","__1":"","z":"x"},{"Confirmed":"x","Name":"Scorpion","Health":3,"Damage":1,"Speed":3,"Range":1,"Matter":50,"Energy":0,"Bandwidth":1,"Building":"Core","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"Splash","Weak Against 2":"Air","Other":"","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/scorpion","":"","__1":"","z":"x"},{"Confirmed":"","Name":"","Health":"","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"","Attack Type":"","Attack Type 2":"","Unit Type":"","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/","":"","__1":"","z":""},{"Confirmed":"x","Name":"Ballista","Health":2,"Damage":5,"Speed":2,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"High Health","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/ballista","":"","__1":"","z":""},{"Confirmed":"x","Name":"Bomber","Health":1,"Damage":5,"Speed":5,"Range":1,"Matter":50,"Energy":50,"Bandwidth":2,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"Self Destructs","Strong Against":"Core Units","Weak Against":"Splash","Weak Against 2":"High Health","Other":"","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/bomber","":"","__1":"","z":""},{"Confirmed":"x","Name":"Crusader","Health":5,"Damage":4,"Speed":3,"Range":1,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"Splash","Weak Against":"Burst","Weak Against 2":"","Other":"","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/crusader","":"","__1":"","z":""},{"Confirmed":"x","Name":"Destroyer","Health":3,"Damage":5,"Speed":2,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Burst","Unit Type":"Ground","Ability":"","Strong Against":"High Health","Weak Against":"Core Units","Weak Against 2":"","Other":"","Manufacturer":"HEAVY UNION ALLIANCE","Link":"https://www.playbattleaces.com/units/destroyer","":"","__1":"","z":""},{"Confirmed":"x","Name":"King Crab","Health":4,"Damage":5,"Speed":3,"Range":1,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Splash","Weak Against":"Burst","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/kingcrab","":"","__1":"","z":""},{"Confirmed":"x","Name":"Mortar","Health":4,"Damage":5,"Speed":2,"Range":5,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"Setup","Strong Against":"","Weak Against":"Long Range","Weak Against 2":"","Other":"","Manufacturer":"HEAVY UNION ALLIANCE","Link":"https://www.playbattleaces.com/units/mortar","":"","__1":"","z":""},{"Confirmed":"x","Name":"Recall Shocker","Health":3,"Damage":5,"Speed":1,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"Recall","Strong Against":"","Weak Against":"High Health","Weak Against 2":"","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/recallshocker","":"","__1":"","z":""},{"Confirmed":"x","Name":"Shocker","Health":3,"Damage":5,"Speed":2,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Core Units","Weak Against":"High Health","Weak Against 2":"","Other":"Shock Splash","Manufacturer":"CORONA CENTRAL SYSTEMS","Link":"https://www.playbattleaces.com/units/shocker","":"","__1":"","z":""},{"Confirmed":"z","Name":"Swift Shocker","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/swiftshocker","":"","__1":"","z":""},{"Confirmed":"Z","Name":"Heavy Hunter","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Foundry","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/heavyhunter","":"","__1":"","z":""},{"Confirmed":"Z","Name":"Raider","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Foundry","Attack Type":"Anti-Worker","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/raider","":"","__1":"","z":""},{"Confirmed":"Z","Name":"Turret (no image)","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Foundry","Attack Type":"","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/turret(noimage)","":"","__1":"","z":""},{"Confirmed":"","Name":"","Health":"","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"","Attack Type":"","Attack Type 2":"","Unit Type":"","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/","":"","__1":"","z":""},{"Confirmed":"x","Name":"Heavy Turret","Health":5,"Damage":4,"Speed":1,"Range":4,"Matter":200,"Energy":100,"Bandwidth":0,"Building":"Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Base defense","Ability":"","Strong Against":"Harassment","Weak Against":"Long Range","Weak Against 2":"","Other":"Placed","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/heavyturret","":"","__1":"","z":""},{"Confirmed":"x","Name":"Stinger","Health":3,"Damage":5,"Speed":5,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"Splash","Weak Against 2":"","Other":"Strong With Melee","Manufacturer":"IRON AND SONS","Link":"https://www.playbattleaces.com/units/stinger","":"","__1":"","z":""},{"Confirmed":"x","Name":"Advanced Recall","Health":1,"Damage":3,"Speed":2,"Range":2,"Matter":50,"Energy":50,"Bandwidth":2,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Recall","Strong Against":"Ground","Weak Against":"Splash","Weak Against 2":"","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/advancedrecall","":"","__1":"","z":""},{"Confirmed":"x","Name":"Airship","Health":4,"Damage":4,"Speed":3,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Air","Weak Against":"Ground Anti-Air","Weak Against 2":"","Other":"Air2Air Specialist","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/ariship","":"","__1":"","z":""},{"Confirmed":"x","Name":"Falcon","Health":4,"Damage":3,"Speed":1,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","Weak Against":"Anti-Air","Weak Against 2":"","Other":"","Manufacturer":"GHOSTS OF VENUS","Link":"https://www.playbattleaces.com/units/falcon","":"","__1":"","z":""},{"Confirmed":"x","Name":"Dragonfly","Health":4,"Damage":3,"Speed":4,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","Weak Against":"Anti-Air","Weak Against 2":"","Other":"Mobile Harassment","Manufacturer":"CORONA CENTRAL SYSTEMS","Link":"https://www.playbattleaces.com/units/dragonfly","":"","__1":"","z":""},{"Confirmed":"x","Name":"Butterfly","Health":1,"Damage":5,"Speed":3,"Range":2,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"Ground","Weak Against":"Anti-Air","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/butterfly","":"","__1":"","z":""},{"Confirmed":"z","Name":"Mammoth","Health":5,"Damage":3,"Speed":3,"Range":1,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/mammoth","":"","__1":"","z":""},{"Confirmed":"","Name":"","Health":"","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"","Attack Type":"","Attack Type 2":"","Unit Type":"","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/","":"","__1":"","z":""},{"Confirmed":"x","Name":"Predator","Health":2,"Damage":5,"Speed":2,"Range":5,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Anti-Air","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Air","Weak Against":"Ground","Weak Against 2":"","Other":"","Manufacturer":"HEAVY UNION ALLIANCE","Link":"https://www.playbattleaces.com/units/predator","":"","__1":"","z":""},{"Confirmed":"x","Name":"Heavy Ballista","Health":4,"Damage":5,"Speed":2,"Range":2,"Matter":250,"Energy":250,"Bandwidth":10,"Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"Splash","Unit Type":"Ground","Ability":"","Strong Against":"Core Units","Weak Against":"High Health","Weak Against 2":"","Other":"","Manufacturer":"NORTH PERFORMANCE","Link":"https://www.playbattleaces.com/units/heavyballista","":"","__1":"","z":""},{"Confirmed":"z","Name":"Sniper","Health":2,"Damage":5,"Speed":1,"Range":5,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/sniper","":"","__1":"","z":""},{"Confirmed":"Z","Name":"Behemoth","Health":5,"Damage":"?","Speed":2,"Range":2,"Matter":250,"Energy":0,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"Blink","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/behemoth","":"","__1":"","z":""},{"Confirmed":"z","Name":"Advanced Blink","Health":4,"Damage":2,"Speed":3,"Range":2,"Matter":50,"Energy":50,"Bandwidth":5,"Building":"Advanced Foundry","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/advancedblink","":"","__1":"","z":""},{"Confirmed":"Z","Name":"Double Machine Gun","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Advanced Foundry","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/doublemachinegun","":"","__1":"","z":""},{"Confirmed":"","Name":"","Health":"","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"","Attack Type":"","Attack Type 2":"","Unit Type":"","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/","":"","__1":"","z":""},{"Confirmed":"x","Name":"Valkyrie","Health":4,"Damage":5,"Speed":3,"Range":3,"Matter":125,"Energy":125,"Bandwidth":5,"Building":"Advanced Starforge","Attack Type":"Anti-Air","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/valkyrie","":"","__1":"","z":""},{"Confirmed":"x","Name":"Locust","Health":1,"Damage":2,"Speed":4,"Range":2,"Matter":50,"Energy":50,"Bandwidth":2,"Building":"Advanced Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/locust","":"","__1":"","z":""},{"Confirmed":"x","Name":"Katbus","Health":5,"Damage":5,"Speed":2,"Range":2,"Matter":250,"Energy":250,"Bandwidth":10,"Building":"Advanced Starforge","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/katbus","":"","__1":"","z":""},{"Confirmed":"x","Name":"Bulwark","Health":5,"Damage":5,"Speed":1,"Range":2,"Matter":250,"Energy":250,"Bandwidth":10,"Building":"Advanced Starforge","Attack Type":"Versatile","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/bulwark","":"","__1":"","z":""},{"Confirmed":"Z","Name":"Kraken","Health":5,"Damage":5,"Speed":1,"Range":"","Matter":3000,"Energy":3000,"Bandwidth":"","Building":"?","Attack Type":"Anti-Ground","Attack Type 2":"","Unit Type":"Air","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/kraken","":"","__1":"","z":""},{"Confirmed":"Z","Name":"Artillery","Health":"Unknown","Damage":"","Speed":"","Range":"","Matter":"","Energy":"","Bandwidth":"","Building":"Advanced Starforge","Attack Type":"Anti-Ground","Attack Type 2":"?","Unit Type":"Ground","Ability":"","Strong Against":"","Weak Against":"","Weak Against 2":"","Other":"","Manufacturer":"","Link":"https://www.playbattleaces.com/units/artillery","":"","__1":"","z":""}]');

},{}]},["gbXMy","bNKaB"], "bNKaB", "parcelRequire716c")

//# sourceMappingURL=index.0641b553.js.map
