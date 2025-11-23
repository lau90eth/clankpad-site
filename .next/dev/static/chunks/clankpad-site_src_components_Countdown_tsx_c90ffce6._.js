(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/clankpad-site/src/components/Countdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Countdown",
    ()=>Countdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$clankpad$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clankpad-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clankpad$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clankpad-site/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$clankpad$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/clankpad-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Countdown() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clankpad$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "244af4dc4f7c4722666ab0fe283ffd02a18e0bfb1972b56b240fd0d7f258f193") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "244af4dc4f7c4722666ab0fe283ffd02a18e0bfb1972b56b240fd0d7f258f193";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        const target = new Date("2025-11-24T14:00:00Z").getTime();
        t0 = ({
            "Countdown[calculate]": ()=>{
                const now = new Date().getTime();
                const diff = target - now;
                if (diff <= 0) {
                    return {
                        h: "00",
                        m: "00",
                        s: "00"
                    };
                }
                const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
                const m = String(Math.floor(diff % 3600000 / 60000)).padStart(2, "0");
                const s = String(Math.floor(diff % 60000 / 1000)).padStart(2, "0");
                return {
                    h,
                    m,
                    s
                };
            }
        })["Countdown[calculate]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const calculate = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = calculate();
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$clankpad$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Countdown[useEffect()]": ()=>{
                const timer = setInterval({
                    "Countdown[useEffect() > setInterval()]": ()=>setTime(calculate())
                }["Countdown[useEffect() > setInterval()]"], 1000);
                return ()=>clearInterval(timer);
            }
        })["Countdown[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$clankpad$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] !== time.h || $[6] !== time.m || $[7] !== time.s) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$clankpad$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-8xl font-mono font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent",
            children: [
                time.h,
                ":",
                time.m,
                ":",
                time.s
            ]
        }, void 0, true, {
            fileName: "[project]/clankpad-site/src/components/Countdown.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[5] = time.h;
        $[6] = time.m;
        $[7] = time.s;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_s(Countdown, "8mWE0DbSdZSw9NoEQYRwGrhNtC4=");
_c = Countdown;
var _c;
__turbopack_context__.k.register(_c, "Countdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=clankpad-site_src_components_Countdown_tsx_c90ffce6._.js.map