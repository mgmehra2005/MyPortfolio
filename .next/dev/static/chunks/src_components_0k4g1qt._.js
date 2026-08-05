(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/sections/aiDevelopmentService.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AiDevelopmentService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/scrollReveal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AiDevelopmentService() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "5a6c143fc3dccfd5d47736b97184fca8a22c6bce5150dd034f549cf14c09b9ba") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5a6c143fc3dccfd5d47736b97184fca8a22c6bce5150dd034f549cf14c09b9ba";
    }
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "AiDevelopmentService[useEffect()]": ()=>{
                const canvas = canvasRef.current;
                if (!canvas) {
                    return;
                }
                const ctx = canvas.getContext("2d");
                let animationFrameId;
                let width = canvas.width = canvas.parentElement.clientWidth || 500;
                let height = canvas.height = canvas.parentElement.clientHeight || 500;
                const GLOBE_RADIUS = Math.min(width, height) * 0.38;
                const SPHERE_CENTER_X = width / 2;
                const SPHERE_CENTER_Y = height / 2;
                const PERSPECTIVE = width * 0.8;
                const DOT_COLOR = {
                    r: 48,
                    g: 103,
                    b: 255
                };
                const points = [];
                const phi = Math.PI * (3 - Math.sqrt(5));
                for(let i = 0; i < 1200; i++){
                    const y = 1 - i / 1199 * 2;
                    const radiusAtY = Math.sqrt(1 - y * y);
                    const theta = phi * i;
                    const x = Math.cos(theta) * radiusAtY;
                    const z = Math.sin(theta) * radiusAtY;
                    points.push({
                        x: x * GLOBE_RADIUS,
                        y: y * GLOBE_RADIUS,
                        z: z * GLOBE_RADIUS
                    });
                }
                let angleY = 3;
                const render = {
                    "AiDevelopmentService[useEffect() > render]": ()=>{
                        ctx.clearRect(0, 0, width, height);
                        angleY = angleY + 0.002;
                        angleY;
                        const cosX = Math.cos(0.2);
                        const sinX = Math.sin(0.2);
                        const cosY = Math.cos(angleY);
                        const sinY = Math.sin(angleY);
                        const projectedPoints = [];
                        for(let i_0 = 0; i_0 < points.length; i_0++){
                            const p = points[i_0];
                            const x1 = p.x * cosY - p.z * sinY;
                            const z1 = p.z * cosY + p.x * sinY;
                            const y2 = p.y * cosX - z1 * sinX;
                            const z2 = z1 * cosX + p.y * sinX;
                            const scale = PERSPECTIVE / (PERSPECTIVE + z2);
                            const projX = SPHERE_CENTER_X + x1 * scale;
                            const projY = SPHERE_CENTER_Y + y2 * scale;
                            projectedPoints.push({
                                x: projX,
                                y: projY,
                                z: z2,
                                scale
                            });
                        }
                        projectedPoints.sort(_AiDevelopmentServiceUseEffectRenderProjectedPointsSort);
                        for(let i_1 = 0; i_1 < projectedPoints.length; i_1++){
                            const p_0 = projectedPoints[i_1];
                            const alpha = Math.max(0.1, Math.min(1, (p_0.z + GLOBE_RADIUS) / (2 * GLOBE_RADIUS)));
                            const dotRadius = Math.max(0.5, p_0.scale * 2.2);
                            ctx.beginPath();
                            ctx.arc(p_0.x, p_0.y, dotRadius, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(${DOT_COLOR.r}, ${DOT_COLOR.g}, ${DOT_COLOR.b}, ${alpha * 0.95})`;
                            ctx.fill();
                        }
                        animationFrameId = requestAnimationFrame(render);
                    }
                }["AiDevelopmentService[useEffect() > render]"];
                render();
                const handleResize = {
                    "AiDevelopmentService[useEffect() > handleResize]": ()=>{
                        if (!canvas || !canvas.parentElement) {
                            return;
                        }
                        width = canvas.width = canvas.parentElement.clientWidth;
                        height = canvas.height = canvas.parentElement.clientHeight;
                    }
                }["AiDevelopmentService[useEffect() > handleResize]"];
                window.addEventListener("resize", handleResize);
                return ()=>{
                    cancelAnimationFrame(animationFrameId);
                    window.removeEventListener("resize", handleResize);
                };
            }
        })["AiDevelopmentService[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white/50",
            children: "services"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative py-[16px] px-[40px] w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between w-full gap-3 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                        className: "uppercase flex gap-3 text-[12px] shrink-0 mx-3 tracking-widest",
                        children: [
                            t2,
                            " /",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "ai development"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                                lineNumber: 127,
                                columnNumber: 217
                            }, this),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                        lineNumber: 127,
                        columnNumber: 127
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-px w-full bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                        lineNumber: 127,
                        columnNumber: 254
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "uppercase text-white/50 flex items-center shrink-0 mx-3 tracking-widest text-[12px]",
                        children: "AI-powered websites, apps & tools"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                        lineNumber: 127,
                        columnNumber: 297
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                lineNumber: 127,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px w-full bg-white/10"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "relative z-2 font-medium text-7xl leading-[110px]",
            children: [
                "LONDON CUSTOM",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                    lineNumber: 137,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[var(--primary-color)]",
                    children: "AI DEVELOPMENT"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                    lineNumber: 137,
                    columnNumber: 95
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center justify-start w-[60%] h-[500px] px-5 py-[40px]",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute h-[400px] w-[400px] bottom-2 right-0 left-140 opacity-45",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        className: "w-full h-full right-0 top-0 bottom-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                        lineNumber: 145,
                        columnNumber: 188
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                    lineNumber: 145,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-full w-px bg-white/10"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
            lineNumber: 146,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "leading-[30px] text-white/50",
            children: "We're an AI development team based in London, ranked in the top 5% of AI developers globally. We design and build AI-powered websites, web applications, internal tools and custom software for UK and international clients - primarily using Claude (Anthropic), Lovable, Supabase and GitHub alongside senior engineering expertise. From AI-assisted builds that ship faster, to bespoke AI agents and automations that genuinely move the needle for your business."
        }, void 0, false, {
            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
            lineNumber: 155,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative px-[40px] flex flex-row justify-between h-full w-full",
            children: [
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col w-[30%] py-[20px] items-center justify-center text-wrap px-[20px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-start flex-col",
                        children: [
                            t8,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "",
                                className: "pt-[40px] flex flex-row gap-4 items-center group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-1 border-white/10 rounded-full p-3 group-hover:bg-[var(--primary-color)] duration-600 ease-in-out",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 576 512",
                                            className: "w-[12px] h-[12px] fill-white/80  rotate-[320deg] group-hover:fill-black duration-300 ease-in-out",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                                                lineNumber: 163,
                                                columnNumber: 612
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                                            lineNumber: 163,
                                            columnNumber: 441
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                                        lineNumber: 163,
                                        columnNumber: 319
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "uppercase",
                                        children: "Start a project"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                                        lineNumber: 163,
                                        columnNumber: 856
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                                lineNumber: 163,
                                columnNumber: 244
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                        lineNumber: 163,
                        columnNumber: 195
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                    lineNumber: 163,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
            lineNumber: 163,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px w-full bg-white/10"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex items-center justify-center w-full pt-[128px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1600px] w-full border-1 rounded-4xl border-white/10 overflow-hidden bg-[var(--glass-background)]",
                    children: [
                        t3,
                        t4,
                        t9,
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-[16px] px-[40px] bg-[#161717] flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-5 shrink-0 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex flex-col items-center justify-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute h-3 w-3 rounded-full bg-[var(--primary-color)] align-middle justify-center flex items-center animate-ping duration-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                                                    lineNumber: 173,
                                                    columnNumber: 439
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 w-2 rounded-full bg-[var(--primary-color)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                                                    lineNumber: 173,
                                                    columnNumber: 586
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                                            lineNumber: 173,
                                            columnNumber: 365
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/50 tracking-widest text-[12px]",
                                            children: "LDN / WordPress / 51.5074° N"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                                            lineNumber: 173,
                                            columnNumber: 658
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                                    lineNumber: 173,
                                    columnNumber: 306
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollToExplore, {}, void 0, false, {
                                    fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                                    lineNumber: 173,
                                    columnNumber: 759
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                            lineNumber: 173,
                            columnNumber: 235
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                    lineNumber: 173,
                    columnNumber: 97
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                lineNumber: 173,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    return t11;
}
_s(AiDevelopmentService, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = AiDevelopmentService;
function _AiDevelopmentServiceUseEffectRenderProjectedPointsSort(a, b) {
    return b.z - a.z;
}
function ScrollToExplore() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "5a6c143fc3dccfd5d47736b97184fca8a22c6bce5150dd034f549cf14c09b9ba") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5a6c143fc3dccfd5d47736b97184fca8a22c6bce5150dd034f549cf14c09b9ba";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: "\n        @keyframes lineTravel {\n          0% {\n            left: -35%;\n          }\n          100% {\n            left: 100%;\n          }\n        }\n      "
        }, void 0, false, {
            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
            lineNumber: 193,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[12px] tracking-[0.25em] uppercase select-none",
            style: {
                color: "#3067FF"
            },
            children: "Scroll to Explore"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
            lineNumber: 200,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 px-2",
                    children: [
                        t1,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-36 md:w-48 h-[2px] overflow-hidden rounded-full bg-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 h-full w-[35%] rounded-full shadow-[0_0_8px_#3067FF]",
                                style: {
                                    background: "#3067FF",
                                    animation: "lineTravel 2s cubic-bezier(0.4, 0, 0.2, 1) infinite"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                                lineNumber: 209,
                                columnNumber: 154
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                            lineNumber: 209,
                            columnNumber: 66
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/aiDevelopmentService.jsx",
                    lineNumber: 209,
                    columnNumber: 16
                }, this)
            ]
        }, void 0, true);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c1 = ScrollToExplore;
var _c, _c1;
__turbopack_context__.k.register(_c, "AiDevelopmentService");
__turbopack_context__.k.register(_c1, "ScrollToExplore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/clientFeedback.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientFeedback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/scrollReveal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ClientFeedback() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "b0baaa897f63062253aa3b192311757099c91d77738eb1d4957d60a8513eadde") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b0baaa897f63062253aa3b192311757099c91d77738eb1d4957d60a8513eadde";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                title: "Sirshi Ladha",
                subTitle: "From Unnati Silks",
                desc: "CloudTrains transformed our platform into a powerful web portal with 200K+ monthly active users, ranking top in our category. They consistently deliver ahead of milestones \u2014 more than a vendor, they've become true partners in our growth.",
                id: "01"
            },
            {
                title: "Margaret Wejnkaim",
                subTitle: "From WhatUni.com",
                desc: "Working with CloudTrains changed everything for us. They rebuilt our app and portal so smoothly that within weeks we hit 100K+ downloads and 2K reviews. Their tech skills truly speak for themselves",
                id: "02"
            },
            {
                title: "Manni Gupta",
                subTitle: "From Glazonoid.com",
                desc: "CloudTrains built our D2C mobile app with clear milestones and constant support. Despite the distance, communication felt seamless \u2014 like they were right next door. Their guidance at every step made the whole process effortless.",
                id: "03"
            },
            {
                title: "James Green",
                subTitle: "From Nutriseed UK",
                desc: "Working with CloudTrains felt effortless. They understood what Nutriseed stands for and translated it into a website that's simple, clear, and true to our mission. It finally feels like our online home reflects who we are.",
                id: "04"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const testimonials = t0;
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [animateKey, setAnimateKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    if ($[2] !== currentIndex || $[3] !== isPlaying) {
        t1 = [
            isPlaying,
            currentIndex
        ];
        $[2] = currentIndex;
        $[3] = isPlaying;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientFeedback[useEffect()]": {
            "ClientFeedback.useEffect": ()=>{
                let timer;
                if (isPlaying) {
                    timer = setInterval({
                        "ClientFeedback[useEffect() > setInterval()]": {
                            "ClientFeedback.useEffect": ()=>{
                                setProgress({
                                    "ClientFeedback[useEffect() > setInterval() > setProgress()]": {
                                        "ClientFeedback.useEffect": (prev)=>{
                                            if (prev >= 100) {
                                                handleNextSlide();
                                                return 0;
                                            }
                                            return prev + 0.625;
                                        }
                                    }["ClientFeedback.useEffect"]
                                }["ClientFeedback[useEffect() > setInterval() > setProgress()]"]);
                            }
                        }["ClientFeedback.useEffect"]
                    }["ClientFeedback[useEffect() > setInterval()]"], 50);
                }
                return ({
                    "ClientFeedback.useEffect": ()=>clearInterval(timer)
                })["ClientFeedback.useEffect"];
            }
        }["ClientFeedback.useEffect"]
    }["ClientFeedback[useEffect()]"], t1);
    const handleNextSlide = {
        "ClientFeedback[handleNextSlide]": ()=>{
            setProgress(0);
            setCurrentIndex({
                "ClientFeedback[handleNextSlide > setCurrentIndex()]": (prev_0)=>(prev_0 + 1) % testimonials.length
            }["ClientFeedback[handleNextSlide > setCurrentIndex()]"]);
            setAnimateKey(_ClientFeedbackHandleNextSlideSetAnimateKey);
        }
    }["ClientFeedback[handleNextSlide]"];
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ClientFeedback[handlePrevSlide]": ()=>{
                setProgress(0);
                setCurrentIndex({
                    "ClientFeedback[handlePrevSlide > setCurrentIndex()]": (prev_2)=>(prev_2 - 1 + testimonials.length) % testimonials.length
                }["ClientFeedback[handlePrevSlide > setCurrentIndex()]"]);
                setAnimateKey(_ClientFeedbackHandlePrevSlideSetAnimateKey);
            }
        })["ClientFeedback[handlePrevSlide]"];
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handlePrevSlide = t2;
    let t3;
    if ($[6] !== isPlaying) {
        t3 = ({
            "ClientFeedback[togglePlayPause]": ()=>{
                setIsPlaying(!isPlaying);
            }
        })["ClientFeedback[togglePlayPause]"];
        $[6] = isPlaying;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const togglePlayPause = t3;
    const currentTestimonial = testimonials[currentIndex];
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: "\n        @keyframes slideUpFade {\n          0% {\n            opacity: 0;\n            transform: translateY(24px);\n          }\n          100% {\n            opacity: 1;\n            transform: translateY(0);\n          }\n        }\n        .animate-slide-up {\n          animation: slideUpFade 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n        }\n      "
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white/50 tracking-widest text-[12px] block mb-2 uppercase shrink-0",
            children: "Client Feedback"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-px w-full bg-white/10 mx-5"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[9] = t5;
        $[10] = t6;
    } else {
        t5 = $[9];
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-8 w-full",
            children: [
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col items-center justify-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute h-3 w-3 rounded-full bg-[var(--primary-color)] align-middle justify-center flex items-center animate-ping duration-200"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/clientFeedback.jsx",
                            lineNumber: 135,
                            columnNumber: 155
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-2 w-2 rounded-full bg-[var(--primary-color)]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/clientFeedback.jsx",
                            lineNumber: 135,
                            columnNumber: 302
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/clientFeedback.jsx",
                    lineNumber: 135,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 135,
            columnNumber: 10
        }, this);
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== currentTestimonial.desc) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-4xl font-normal leading-snug tracking-tight text-white max-w-6xl",
            children: currentTestimonial.desc
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[12] = currentTestimonial.desc;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== currentTestimonial.title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-bold text-white tracking-wide",
            children: currentTestimonial.title
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[14] = currentTestimonial.title;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== currentTestimonial.subTitle) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-mono text-white/50 mt-1 uppercase tracking-wider",
            children: currentTestimonial.subTitle
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[16] = currentTestimonial.subTitle;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t9;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== animateKey || $[22] !== t11 || $[23] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-slide-up min-h-[220px] w-full flex flex-col justify-between",
            children: [
                t8,
                t11
            ]
        }, animateKey, true, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[21] = animateKey;
        $[22] = t11;
        $[23] = t8;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handlePrevSlide,
            className: "w-10 h-10 rounded-full border border-white/10 bg-transparent hover:border-[#3067FF] flex items-center justify-center text-slate-400 hover:text-white transition-all active:scale-95 group",
            "aria-label": "Previous Slide",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-4 h-4 group-hover:stroke-[#3067FF] duration-300 ease-in-out",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M15 19l-7-7 7-7"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/clientFeedback.jsx",
                    lineNumber: 185,
                    columnNumber: 420
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/clientFeedback.jsx",
                lineNumber: 185,
                columnNumber: 271
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            color: "white"
        };
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    const t15 = isPlaying ? "Pause Slider" : "Play Slider";
    let t16;
    if ($[27] !== isPlaying) {
        t16 = isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-4 h-4 fill-current group-hover:fill-[#3067FF] duration-300 ease-in-out",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/clientFeedback.jsx",
                lineNumber: 202,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 202,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-4 h-4 fill-current ml-0.5 group-hover:fill-[#3067FF] duration-300 ease-in-out",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 5v14l11-7z"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/clientFeedback.jsx",
                lineNumber: 202,
                columnNumber: 303
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 202,
            columnNumber: 186
        }, this);
        $[27] = isPlaying;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== t15 || $[30] !== t16 || $[31] !== togglePlayPause) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: togglePlayPause,
            className: "w-10 h-10 rounded-full border border-white/10 bg-transparent hover:border-[#3067FF] flex items-center justify-center transition-all active:scale-95 group",
            style: t14,
            "aria-label": t15,
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[29] = t15;
        $[30] = t16;
        $[31] = togglePlayPause;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-4 h-4 group-hover:stroke-[#3067FF] duration-300 ease-in-out",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M9 5l7 7-7 7"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/clientFeedback.jsx",
                lineNumber: 220,
                columnNumber: 160
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    let t19;
    if ($[34] !== handleNextSlide) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleNextSlide,
            className: "w-10 h-10 rounded-full border border-white/10 bg-transparent hover:border-[#3067FF] flex items-center justify-center text-white hover:text-white transition-all active:scale-95 group",
            "aria-label": "Next Slide",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[34] = handleNextSlide;
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    let t20;
    if ($[36] !== t17 || $[37] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 shrink-0",
            children: [
                t13,
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[36] = t17;
        $[37] = t19;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    const t21 = `${progress}%`;
    let t22;
    if ($[39] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 h-[2px] bg-slate-800/80 rounded-full overflow-hidden relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full transition-all duration-75 ease-linear rounded-full shadow-[0_0_8px_#3067FF]",
                style: {
                    width: t21,
                    backgroundColor: "#3067FF"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/sections/clientFeedback.jsx",
                lineNumber: 245,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[39] = t21;
        $[40] = t22;
    } else {
        t22 = $[40];
    }
    let t23;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            color: "#3067FF"
        };
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    const t24 = String(currentIndex + 1);
    let t25;
    if ($[42] !== t24) {
        t25 = t24.padStart(2, "0");
        $[42] = t24;
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    let t26;
    if ($[44] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t23,
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[44] = t25;
        $[45] = t26;
    } else {
        t26 = $[45];
    }
    let t27;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: String(testimonials.length).padStart(2, "0")
        }, void 0, false, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[46] = t27;
    } else {
        t27 = $[46];
    }
    let t28;
    if ($[47] !== t26) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shrink-0 text-xs font-mono font-bold tracking-widest text-white/50",
            children: [
                t26,
                " / ",
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[47] = t26;
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    let t29;
    if ($[49] !== t20 || $[50] !== t22 || $[51] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-14 pt-8 flex items-center gap-6 justify-between w-full",
            children: [
                t20,
                t22,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/clientFeedback.jsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[49] = t20;
        $[50] = t22;
        $[51] = t28;
        $[52] = t29;
    } else {
        t29 = $[52];
    }
    let t30;
    if ($[53] !== t12 || $[54] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        id: "journal",
                        className: "flex items-center justify-center w-full mt-[32px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "relative items-start max-w-[1600px] w-full border-1 rounded-4xl border-white/10 bg-[var(--glass-background)] p-[24.6px_44.6px_32px_44.6px] flex flex-col gap-12",
                            children: [
                                t7,
                                t12,
                                t29
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/clientFeedback.jsx",
                            lineNumber: 307,
                            columnNumber: 112
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/clientFeedback.jsx",
                        lineNumber: 307,
                        columnNumber: 31
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/clientFeedback.jsx",
                    lineNumber: 307,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
        $[53] = t12;
        $[54] = t29;
        $[55] = t30;
    } else {
        t30 = $[55];
    }
    return t30;
}
_s(ClientFeedback, "D17xVjQUJk0ywvSHpI+UKBngTgg=");
_c = ClientFeedback;
function _ClientFeedbackHandlePrevSlideSetAnimateKey(prev_3) {
    return prev_3 + 1;
}
function _ClientFeedbackHandleNextSlideSetAnimateKey(prev_1) {
    return prev_1 + 1;
}
var _c;
__turbopack_context__.k.register(_c, "ClientFeedback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/sideHeader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SideHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/scrollReveal.jsx [app-client] (ecmascript)");
;
;
;
;
function SideHeader(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "fbd69b1607ed166d3559ba5042052d8360c493c9f34a7d0fe98a7dea1bd3c3d1") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fbd69b1607ed166d3559ba5042052d8360c493c9f34a7d0fe98a7dea1bd3c3d1";
    }
    let t0;
    if ($[1] !== props.titleSet.subTitle) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white/50 tracking-widest text-[12px] block mb-6 uppercase",
            children: props.titleSet.subTitle
        }, void 0, false, {
            fileName: "[project]/src/components/common/sideHeader.jsx",
            lineNumber: 14,
            columnNumber: 10
        }, this);
        $[1] = props.titleSet.subTitle;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== props.titleSet.Title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl font-extralight leading-[60px]",
            children: props.titleSet.Title
        }, void 0, false, {
            fileName: "[project]/src/components/common/sideHeader.jsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[3] = props.titleSet.Title;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== props.titleSet.desc) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/50 mt-6 max-w-[400px]",
            children: props.titleSet.desc
        }, void 0, false, {
            fileName: "[project]/src/components/common/sideHeader.jsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[5] = props.titleSet.desc;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t0 || $[8] !== t1 || $[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-row justify-between min-w-full flex-wrap h-full items-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-4",
                    children: [
                        t0,
                        t1,
                        t2
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/sideHeader.jsx",
                    lineNumber: 38,
                    columnNumber: 118
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/sideHeader.jsx",
                lineNumber: 38,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/sideHeader.jsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[7] = t0;
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
}
_c = SideHeader;
var _c;
__turbopack_context__.k.register(_c, "SideHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/commonQuestions.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommonQuestions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$sideHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/sideHeader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/scrollReveal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CommonQuestions() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "8c5e8be566660e7ba95043a6bf93a16ea8f7d46377dca25360443d0481aab6fa") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8c5e8be566660e7ba95043a6bf93a16ea8f7d46377dca25360443d0481aab6fa";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex items-center justify-center w-full mt-[32px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative items-end max-w-[1600px] w-full border-1 rounded-4xl border-white/10 bg-[var(--glass-background)] p-[32px_44.6px_32px_44.6px] grid grid-cols-3 gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$sideHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        titleSet: {
                            subTitle: "Common Questions",
                            Title: "Frequently asked.",
                            desc: "Quick answers to the things we get asked most. Still need clarity? Drop us a line."
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/commonQuestions.jsx",
                        lineNumber: 17,
                        columnNumber: 258
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionSection, {}, void 0, false, {
                        fileName: "[project]/src/components/sections/commonQuestions.jsx",
                        lineNumber: 21,
                        columnNumber: 14
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/commonQuestions.jsx",
                lineNumber: 17,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/commonQuestions.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = CommonQuestions;
function AccordionSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "8c5e8be566660e7ba95043a6bf93a16ea8f7d46377dca25360443d0481aab6fa") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8c5e8be566660e7ba95043a6bf93a16ea8f7d46377dca25360443d0481aab6fa";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: "01",
                question: "What is an AI developer?",
                answer: "An AI developer specializes in designing, building, and deploying artificial intelligence models, machine learning algorithms, and intelligent software solutions that automate complex workflows and enhance business efficiency."
            },
            {
                id: "02",
                question: "Do you work with clients outside London?",
                answer: "Yes! We work with clients globally across the UK, Europe, US, and MENA region. Our entire communication, development, and project management processes are optimized for seamless remote collaboration."
            },
            {
                id: "03",
                question: "What can you build with AI?",
                answer: "We build custom AI chatbots, autonomous workflow agents, copilot integrations, predictive data analytics dashboards, fine-tuned LLM interfaces, and RAG systems connected to your internal documentation."
            },
            {
                id: "04",
                question: "Which AI tools and models do you use?",
                answer: "We leverage state-of-the-art models including GPT-4o, Claude 3.5 Sonnet, Gemini 1.5, and LLaMA 3, integrated alongside platforms like Supabase, LangChain, and custom vector databases."
            },
            {
                id: "05",
                question: "How long does an AI build take?",
                answer: "A standard AI prototype or MVP takes between 2 to 4 weeks. Enterprise-grade AI solutions with custom API integrations and complex data security pipelines usually take 6 to 10 weeks."
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const faqData = t0;
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[2] !== openIndex) {
        t1 = ({
            "AccordionSection[toggleItem]": (index)=>{
                setOpenIndex(openIndex === index ? null : index);
            }
        })["AccordionSection[toggleItem]"];
        $[2] = openIndex;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const toggleItem = t1;
    let t2;
    if ($[4] !== openIndex || $[5] !== toggleItem) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-[1000px] flex",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col divide-y divide-white/10",
                    children: faqData.map({
                        "AccordionSection[faqData.map()]": (item, index_0)=>{
                            const isOpen = openIndex === index_0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-6 first:pt-0 last:pb-0 transition-colors duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "AccordionSection[faqData.map() > <button>.onClick]": ()=>toggleItem(index_0)
                                        }["AccordionSection[faqData.map() > <button>.onClick]"],
                                        className: "w-full flex items-center justify-between text-left gap-6 group focus:outline-none",
                                        "aria-expanded": isOpen,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold tracking-wider font-mono shrink-0",
                                                        style: {
                                                            color: "#3067FF"
                                                        },
                                                        children: item.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/commonQuestions.jsx",
                                                        lineNumber: 85,
                                                        columnNumber: 232
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-base md:text-lg font-medium transition-colors duration-300 ease-in-out ${isOpen ? "text-white font-semibold" : "text-slate-200 group-hover:text-[#3067FF]"}`,
                                                        children: item.question
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/commonQuestions.jsx",
                                                        lineNumber: 87,
                                                        columnNumber: 40
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/commonQuestions.jsx",
                                                lineNumber: 85,
                                                columnNumber: 191
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: `w-4 h-4 text-white/50    transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90 text-[#3067FF]" : "group-hover:text-white/50"}`,
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M9 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/commonQuestions.jsx",
                                                        lineNumber: 87,
                                                        columnNumber: 502
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/commonQuestions.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 271
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/commonQuestions.jsx",
                                                lineNumber: 87,
                                                columnNumber: 245
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/commonQuestions.jsx",
                                        lineNumber: 83,
                                        columnNumber: 110
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-hidden pl-12 pr-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base text-white/50 leading-relaxed font-normal",
                                                children: item.answer
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/commonQuestions.jsx",
                                                lineNumber: 87,
                                                columnNumber: 799
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/commonQuestions.jsx",
                                            lineNumber: 87,
                                            columnNumber: 755
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/commonQuestions.jsx",
                                        lineNumber: 87,
                                        columnNumber: 593
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/sections/commonQuestions.jsx",
                                lineNumber: 83,
                                columnNumber: 22
                            }, this);
                        }
                    }["AccordionSection[faqData.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/commonQuestions.jsx",
                    lineNumber: 80,
                    columnNumber: 61
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/commonQuestions.jsx",
                lineNumber: 80,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/commonQuestions.jsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[4] = openIndex;
        $[5] = toggleItem;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    return t2;
}
_s(AccordionSection, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c1 = AccordionSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "CommonQuestions");
__turbopack_context__.k.register(_c1, "AccordionSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/getQuote.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GetQuote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/scrollReveal.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function GetQuote() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "3e64836324bed578bf4ae16e13fc00b00f8b07de6252f30e23da7de01295444d") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e64836324bed578bf4ae16e13fc00b00f8b07de6252f30e23da7de01295444d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/components/sections/getQuote.jsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                id: "contact",
                className: "flex items-center justify-center w-full mt-[32px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "relative items-start max-w-[1600px] w-full border-1 rounded-4xl border-white/10 bg-[var(--glass-background)] p-[24.6px_44.6px_32px_44.6px] flex flex-col gap-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between p-8 items-center w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "max-w-3xl text-8xl font-light",
                                children: [
                                    "Get a quote ",
                                    t0,
                                    "for your",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--primary-color)]",
                                        children: "project"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/getQuote.jsx",
                                        lineNumber: 23,
                                        columnNumber: 423
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/getQuote.jsx",
                                lineNumber: 23,
                                columnNumber: 348
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RotatingQuoteButton, {}, void 0, false, {
                                fileName: "[project]/src/components/sections/getQuote.jsx",
                                lineNumber: 23,
                                columnNumber: 488
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/getQuote.jsx",
                        lineNumber: 23,
                        columnNumber: 286
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/getQuote.jsx",
                    lineNumber: 23,
                    columnNumber: 105
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/getQuote.jsx",
                lineNumber: 23,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/getQuote.jsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = GetQuote;
function RotatingQuoteButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "3e64836324bed578bf4ae16e13fc00b00f8b07de6252f30e23da7de01295444d") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e64836324bed578bf4ae16e13fc00b00f8b07de6252f30e23da7de01295444d";
    }
    const { href: t1 } = t0;
    const href = t1 === undefined ? "#contact" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: "\n        @keyframes spinSlow {\n          0% {\n            transform: rotate(0deg);\n          }\n          100% {\n            transform: rotate(360deg);\n          }\n        }\n        .animate-spin-slow {\n          animation: spinSlow 20s linear infinite;\n        }\n      "
        }, void 0, false, {
            fileName: "[project]/src/components/sections/getQuote.jsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 rounded-full bg-transparent border border-white/10 shadow-lg transition-transform duration-300 group-hover:scale-105"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/getQuote.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                id: "textCircle",
                d: "M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/getQuote.jsx",
                lineNumber: 58,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/getQuote.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 w-full h-full animate-spin-slow origin-center pointer-events-none p-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-full h-full",
                viewBox: "0 0 100 100",
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        className: "fill-white/50 text-[8.2px] font-light tracking-[0.18em] uppercase",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textPath", {
                            href: "#textCircle",
                            startOffset: "0%",
                            children: "REQUEST A QUOTE \u2022 REQUEST A QUOTE \u2022 "
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/getQuote.jsx",
                            lineNumber: 65,
                            columnNumber: 255
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/getQuote.jsx",
                        lineNumber: 65,
                        columnNumber: 171
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/getQuote.jsx",
                lineNumber: 65,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/getQuote.jsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            backgroundColor: "#3067FF"
        };
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-12 w-25 h-25 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_20px_#3067FF]",
            style: t6,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-8 h-8 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: "2.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M7 17L17 7M17 7H9M17 7V15"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/getQuote.jsx",
                    lineNumber: 81,
                    columnNumber: 389
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/getQuote.jsx",
                lineNumber: 81,
                columnNumber: 190
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/getQuote.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    if ($[7] !== href) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: href,
                    className: "relative group inline-flex items-center justify-center w-54 h-54 rounded-full overflow-hidden focus:outline-none",
                    "aria-label": "Request a quote",
                    children: [
                        t3,
                        t5,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/getQuote.jsx",
                    lineNumber: 88,
                    columnNumber: 16
                }, this)
            ]
        }, void 0, true);
        $[7] = href;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    return t8;
}
_c1 = RotatingQuoteButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "GetQuote");
__turbopack_context__.k.register(_c1, "RotatingQuoteButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/topHeader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/scrollReveal.jsx [app-client] (ecmascript)");
;
;
;
;
function TopHeader(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "e271da9945c7364bd352ac212d4e74c5d5b0d22a01ae5fbc6ffe250e718173fb") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e271da9945c7364bd352ac212d4e74c5d5b0d22a01ae5fbc6ffe250e718173fb";
    }
    let t0;
    if ($[1] !== props.titleSet.subTitle) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white/50 tracking-widest text-[12px] block mb-6 uppercase",
            children: props.titleSet.subTitle
        }, void 0, false, {
            fileName: "[project]/src/components/common/topHeader.jsx",
            lineNumber: 14,
            columnNumber: 10
        }, this);
        $[1] = props.titleSet.subTitle;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== props.titleSet.Title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl font-extralight leading-[60px]",
            children: props.titleSet.Title
        }, void 0, false, {
            fileName: "[project]/src/components/common/topHeader.jsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[3] = props.titleSet.Title;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== t0 || $[6] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-4",
            children: [
                t0,
                t1
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/topHeader.jsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[5] = t0;
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== props.titleSet.sideTitle) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex align-bottom justify-end items-end h-full ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "px-3 h-full text-white/50 tracking-widest text-[12px] block uppercase",
                children: props.titleSet.sideTitle
            }, void 0, false, {
                fileName: "[project]/src/components/common/topHeader.jsx",
                lineNumber: 39,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/topHeader.jsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[8] = props.titleSet.sideTitle;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== t2 || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-row justify-between min-w-full flex-wrap h-full items-end ",
                children: [
                    t2,
                    t3
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/topHeader.jsx",
                lineNumber: 47,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/topHeader.jsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_c = TopHeader;
var _c;
__turbopack_context__.k.register(_c, "TopHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/ourApproach.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OurApproach
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$topHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/topHeader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/scrollReveal.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function OurApproach() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "ac0f81864341409fba33c986d7a620d17a6d675ed59dd693f9f228bf94899b0e") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ac0f81864341409fba33c986d7a620d17a6d675ed59dd693f9f228bf94899b0e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: "01",
                title: "Discovery & AI Strategy",
                desc: "We map the problem to the right AI approach - model choice, data sources, evaluation criteria and a clear, measurable business outcome before any code is written."
            },
            {
                id: "02",
                title: "Design & Prototype",
                desc: "Rapid AI prototypes and UI designs that let you experience the product early, validate model behaviour and de-risk the build before full investment."
            },
            {
                id: "03",
                title: "AI-Assisted Build",
                desc: "Senior engineers building production-grade systems with AI-accelerated workflows - typed, tested, observable, and ready for real users on day one."
            },
            {
                id: "04",
                title: "Launch, Monitor & Iterate",
                desc: "Deployment with logging, evaluations and guardrails in place. We monitor model performance and iterate as your data, users and the AI landscape evolve."
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const ourApproachSteps = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$topHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            titleSet: {
                subTitle: "Our Approach",
                Title: "How we deliver.",
                sideTitle: "Step by step"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ourApproach.jsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            id: "about",
            className: "flex items-center justify-center w-full mt-[32px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative items-start max-w-[1600px] w-full border-1 rounded-4xl border-white/10 bg-[var(--glass-background)] p-[24.6px_44.6px_32px_44.6px] flex flex-col gap-12",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6 w-full justify-between overflow-hidden",
                        children: ourApproachSteps.map(_OurApproachOurApproachStepsMap)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/ourApproach.jsx",
                        lineNumber: 52,
                        columnNumber: 274
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/ourApproach.jsx",
                lineNumber: 52,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ourApproach.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = OurApproach;
function _OurApproachOurApproachStepsMap(items) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
        step: items
    }, items.id, false, {
        fileName: "[project]/src/components/sections/ourApproach.jsx",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
function Card(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "ac0f81864341409fba33c986d7a620d17a6d675ed59dd693f9f228bf94899b0e") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ac0f81864341409fba33c986d7a620d17a6d675ed59dd693f9f228bf94899b0e";
    }
    const { id, title, desc } = props.step;
    let t0;
    if ($[1] !== id) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-medium text-5xl text-[#3067FF]",
            children: id
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ourApproach.jsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[1] = id;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tracking-wide font-bold text-[20px]",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ourApproach.jsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== desc) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-wrap tracking-wide text-left text-white/50 text-[18px]",
            children: desc
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ourApproach.jsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[5] = desc;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t0 || $[8] !== t1 || $[9] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex rounded-3xl flex-col gap-4 bg-[#161717] hover:bg-[#161717]/30 hover:border-[#3067FF] duration-600 ease-in-out p-8 border-1 border-white/10  min-w-[340px] max-w-[380px] max-h-[356px] min-h-[356px] transition-colors",
                    children: [
                        t0,
                        t1,
                        t2
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/ourApproach.jsx",
                    lineNumber: 101,
                    columnNumber: 26
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ourApproach.jsx",
                lineNumber: 101,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[7] = t0;
        $[8] = t1;
        $[9] = t2;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    return t3;
}
_c1 = Card;
var _c, _c1;
__turbopack_context__.k.register(_c, "OurApproach");
__turbopack_context__.k.register(_c1, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/relatedServices.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RelatedServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$topHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/topHeader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/scrollReveal.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function RelatedServices() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "21241f298ad1eec7c63f4fb493a94879696d22b5d7e699913281977d1a2b5a06") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21241f298ad1eec7c63f4fb493a94879696d22b5d7e699913281977d1a2b5a06";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                subTitle: "Custom-built from scratch",
                title: "Web Development",
                link: ""
            },
            {
                subTitle: "Proactive & reliable",
                title: "Website Support",
                link: ""
            },
            {
                subTitle: "Expert Guidance",
                title: "Consultancy",
                link: ""
            },
            {
                subTitle: "Connect Everything",
                title: "API & Integrations",
                link: ""
            },
            {
                subTitle: "Pixel-Perfect Creativity",
                title: "Web Design",
                link: ""
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const services = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$topHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            titleSet: {
                subTitle: "Related Services",
                Title: "You might also need.",
                sideTitle: "All Services"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/sections/relatedServices.jsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex items-center justify-center w-full mt-[32px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative items-start max-w-[1600px] w-full border-1 rounded-4xl border-white/10 bg-[var(--glass-background)] p-[24.6px_44.6px_32px_44.6px] flex flex-col gap-12",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-6 w-full h-full py-0 justify-between",
                        children: services.map(_RelatedServicesServicesMap)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/relatedServices.jsx",
                        lineNumber: 57,
                        columnNumber: 263
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/relatedServices.jsx",
                lineNumber: 57,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/relatedServices.jsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = RelatedServices;
function _RelatedServicesServicesMap(items, itemsIdx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
        service: items
    }, itemsIdx, false, {
        fileName: "[project]/src/components/sections/relatedServices.jsx",
        lineNumber: 65,
        columnNumber: 10
    }, this);
}
function Card(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "21241f298ad1eec7c63f4fb493a94879696d22b5d7e699913281977d1a2b5a06") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "21241f298ad1eec7c63f4fb493a94879696d22b5d7e699913281977d1a2b5a06";
    }
    let t0;
    if ($[1] !== props.service.subTitle) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white/50 tracking-widest text-[12px] block mb-2 uppercase",
            children: props.service.subTitle
        }, void 0, false, {
            fileName: "[project]/src/components/sections/relatedServices.jsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[1] = props.service.subTitle;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== props.service.title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-[24px] font-extralight text-white leading-[60px]",
            children: props.service.title
        }, void 0, false, {
            fileName: "[project]/src/components/sections/relatedServices.jsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[3] = props.service.title;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== t0 || $[6] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col py-4",
            children: [
                t0,
                t1
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/relatedServices.jsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[5] = t0;
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white/50 tracking-widest text-[12px] block mb-2 uppercase",
            children: "EXPLORE"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/relatedServices.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-1 border-white/10 rounded-full p-3 group-hover:bg-[var(--primary-color)] duration-300 ease-in-out transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 576 512",
                className: "w-[12px] h-[12px] fill-white/80  rotate-[320deg] group-hover:fill-black duration-600 ease-in-out",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M566.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l434.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/relatedServices.jsx",
                    lineNumber: 109,
                    columnNumber: 321
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/relatedServices.jsx",
                lineNumber: 109,
                columnNumber: 150
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/relatedServices.jsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== props.service.link) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between min-w-full mt-3",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: props.service.link,
                    className: "",
                    children: t4
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/relatedServices.jsx",
                    lineNumber: 116,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/relatedServices.jsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[10] = props.service.link;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t2 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex rounded-3xl flex-col gap-4 bg-[#161717] hover:bg-[#161717]/30 hover:border-[#3067FF] duration-600 ease-in-out p-4 border-1 border-white/10  w-full my-0 h-full items-start group transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-medium text-[16px] text-white/50 text-pretty flex align-middle w-full h-full flex flex-col px-4",
                        children: [
                            t2,
                            t5
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/relatedServices.jsx",
                        lineNumber: 124,
                        columnNumber: 244
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/relatedServices.jsx",
                    lineNumber: 124,
                    columnNumber: 26
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/relatedServices.jsx",
                lineNumber: 124,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[12] = t2;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_c1 = Card;
var _c, _c1;
__turbopack_context__.k.register(_c, "RelatedServices");
__turbopack_context__.k.register(_c1, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/whatIncluded.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatIncluded
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/animation/scrollReveal.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function WhatIncluded() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "8686ce4200ce233de2fbd127a0d5089b809fd9a1e3e564f5c572d5ab9c3d2ebb") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8686ce4200ce233de2fbd127a0d5089b809fd9a1e3e564f5c572d5ab9c3d2ebb";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                topic: "AI-Assisted Web Development",
                desc: "AI-accelerated websites and web apps built with Lovable and React. Faster delivery, lower cost, no compromise on code quality or performance."
            },
            {
                topic: "AI Web Apps & SaaS",
                desc: "Custom AI-powered web applications and SaaS products - chat interfaces, copilots, dashboards and internal platforms built on a secure, scalable architecture."
            },
            {
                topic: "Custom AI Tools & Agents",
                desc: "Bespoke AI tools and autonomous agents powered by Claude that automate research, content, support and back-office workflows specific to your business."
            },
            {
                topic: "LLM & API Integrations",
                desc: "Production integrations with Claude, OpenAI and Gemini - with prompt engineering, evaluation and cost controls. We primarily use Claude for its reliability and reasoning, and Supabase for secure data storage and real-time APIs."
            },
            {
                topic: "RAG & Knowledge Bases",
                desc: "Retrieval-augmented generation systems that let AI answer accurately from your own documents, data and policies - with citations and access controls."
            },
            {
                topic: "AI Automation & Workflows",
                desc: "End-to-end AI automations across your stack - CRM, email, Slack, Notion and custom APIs - removing manual work and unlocking real operational leverage."
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const topicList = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-[12px_150px_12px_20px] sticky self-start top-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/50 tracking-widest text-[12px] block mb-6 uppercase",
                        children: "What's Included"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/whatIncluded.jsx",
                        lineNumber: 42,
                        columnNumber: 91
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl font-extralight leading-[60px]",
                        children: "Everything needed to design, build & evolve a WordPress website."
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/whatIncluded.jsx",
                        lineNumber: 42,
                        columnNumber: 194
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/whatIncluded.jsx",
                lineNumber: 42,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/whatIncluded.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "service",
            className: "flex items-center justify-center w-full mt-[32px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative items-start max-w-[1600px] w-full border-1 rounded-4xl border-white/10 bg-[var(--glass-background)] p-[24.6px_44.6px_32px_24.6px] grid grid-cols-[39%_60%]",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto flex flex-col",
                            children: topicList.map(_WhatIncludedTopicListMap)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/whatIncluded.jsx",
                            lineNumber: 49,
                            columnNumber: 297
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/whatIncluded.jsx",
                        lineNumber: 49,
                        columnNumber: 279
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/whatIncluded.jsx",
                lineNumber: 49,
                columnNumber: 94
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/whatIncluded.jsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = WhatIncluded;
function _WhatIncludedTopicListMap(item, itemsIdx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$animation$2f$scrollReveal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-white/10 items-start group transition-colors duration-600 px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-bold tracking-wider",
                        style: {
                            color: "#3067FF"
                        },
                        children: [
                            "0",
                            itemsIdx + 1
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/whatIncluded.jsx",
                        lineNumber: 57,
                        columnNumber: 211
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/whatIncluded.jsx",
                    lineNumber: 57,
                    columnNumber: 180
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl md:text-2xl font-medium tracking-tight text-white duration-300 ease-in-out group-hover:text-[var(--primary-color)]",
                        children: item.topic
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/whatIncluded.jsx",
                        lineNumber: 59,
                        columnNumber: 71
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/whatIncluded.jsx",
                    lineNumber: 59,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm md:text-base text-white/50 font-normal leading-relaxed text-left",
                        children: item.desc
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/whatIncluded.jsx",
                        lineNumber: 59,
                        columnNumber: 264
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/whatIncluded.jsx",
                    lineNumber: 59,
                    columnNumber: 233
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/whatIncluded.jsx",
            lineNumber: 57,
            columnNumber: 39
        }, this)
    }, itemsIdx, false, {
        fileName: "[project]/src/components/sections/whatIncluded.jsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "WhatIncluded");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_0k4g1qt._.js.map