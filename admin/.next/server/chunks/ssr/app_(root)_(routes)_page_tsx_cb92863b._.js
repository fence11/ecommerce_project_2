module.exports = [
"[project]/app/(root)/(routes)/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$store$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-store-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const SetupPage = ()=>{
    const onOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$store$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStoreModal"])((state)=>state.onOpen);
    const isOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$store$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStoreModal"])((state)=>state.isOpen);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) {
            onOpen();
        }
    }, [
        isOpen,
        onOpen
    ]);
    return null;
};
const __TURBOPACK__default__export__ = SetupPage;
}),
];

//# sourceMappingURL=app_%28root%29_%28routes%29_page_tsx_cb92863b._.js.map