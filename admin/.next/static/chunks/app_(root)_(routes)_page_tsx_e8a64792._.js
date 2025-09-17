(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(root)/(routes)/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$store$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-store-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SetupPage = ()=>{
    _s();
    const onOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$store$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStoreModal"])({
        "SetupPage.useStoreModal[onOpen]": (state)=>state.onOpen
    }["SetupPage.useStoreModal[onOpen]"]);
    const isOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$store$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStoreModal"])({
        "SetupPage.useStoreModal[isOpen]": (state)=>state.isOpen
    }["SetupPage.useStoreModal[isOpen]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SetupPage.useEffect": ()=>{
            if (!isOpen) {
                onOpen();
            }
        }
    }["SetupPage.useEffect"], [
        isOpen,
        onOpen
    ]);
    return null;
};
_s(SetupPage, "wqi3/BmH1LWdhIsGAs0BPnCPrCM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$store$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStoreModal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$store$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStoreModal"]
    ];
});
_c = SetupPage;
const __TURBOPACK__default__export__ = SetupPage;
var _c;
__turbopack_context__.k.register(_c, "SetupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_%28root%29_%28routes%29_page_tsx_e8a64792._.js.map