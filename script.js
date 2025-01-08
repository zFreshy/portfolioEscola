/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

( () => {
    var u = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports);
    var Ts = u( () => {
        (function() {
            if (typeof window > "u")
                return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./)
              , t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit"in document.documentElement.style && !t) {
                window.objectFitPolyfill = function() {
                    return !1
                }
                ;
                return
            }
            let n = function(s) {
                let c = window.getComputedStyle(s, null)
                  , d = c.getPropertyValue("position")
                  , h = c.getPropertyValue("overflow")
                  , p = c.getPropertyValue("display");
                (!d || d === "static") && (s.style.position = "relative"),
                h !== "hidden" && (s.style.overflow = "hidden"),
                (!p || p === "inline") && (s.style.display = "block"),
                s.clientHeight === 0 && (s.style.height = "100%"),
                s.className.indexOf("object-fit-polyfill") === -1 && (s.className += " object-fit-polyfill")
            }
              , o = function(s) {
                let c = window.getComputedStyle(s, null)
                  , d = {
                    "max-width": "none",
                    "max-height": "none",
                    "min-width": "0px",
                    "min-height": "0px",
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto",
                    "margin-top": "0px",
                    "margin-right": "0px",
                    "margin-bottom": "0px",
                    "margin-left": "0px"
                };
                for (let h in d)
                    c.getPropertyValue(h) !== d[h] && (s.style[h] = d[h])
            }
              , i = function(s) {
                let c = s.parentNode;
                n(c),
                o(s),
                s.style.position = "absolute",
                s.style.height = "100%",
                s.style.width = "auto",
                s.clientWidth > c.clientWidth ? (s.style.top = "0",
                s.style.marginTop = "0",
                s.style.left = "50%",
                s.style.marginLeft = s.clientWidth / -2 + "px") : (s.style.width = "100%",
                s.style.height = "auto",
                s.style.left = "0",
                s.style.marginLeft = "0",
                s.style.top = "50%",
                s.style.marginTop = s.clientHeight / -2 + "px")
            }
              , a = function(s) {
                if (typeof s > "u" || s instanceof Event)
                    s = document.querySelectorAll("[data-object-fit]");
                else if (s && s.nodeName)
                    s = [s];
                else if (typeof s == "object" && s.length && s[0].nodeName)
                    s = s;
                else
                    return !1;
                for (let c = 0; c < s.length; c++) {
                    if (!s[c].nodeName)
                        continue;
                    let d = s[c].nodeName.toLowerCase();
                    if (d === "img") {
                        if (t)
                            continue;
                        s[c].complete ? i(s[c]) : s[c].addEventListener("load", function() {
                            i(this)
                        })
                    } else
                        d === "video" ? s[c].readyState > 0 ? i(s[c]) : s[c].addEventListener("loadedmetadata", function() {
                            i(this)
                        }) : i(s[c])
                }
                return !0
            };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", a) : a(),
            window.addEventListener("resize", a),
            window.objectFitPolyfill = a
        }
        )()
    }
    );
    var Os = u( () => {
        (function() {
            if (typeof window > "u")
                return;
            function e(n) {
                Webflow.env("design") || ($("video").each(function() {
                    n && $(this).prop("autoplay") ? this.play() : this.pause()
                }),
                $(".w-background-video--control").each(function() {
                    n ? r($(this)) : t($(this))
                }))
            }
            function t(n) {
                n.find("> span").each(function(o) {
                    $(this).prop("hidden", () => o === 0)
                })
            }
            function r(n) {
                n.find("> span").each(function(o) {
                    $(this).prop("hidden", () => o === 1)
                })
            }
            $(document).ready( () => {
                let n = window.matchMedia("(prefers-reduced-motion: reduce)");
                n.addEventListener("change", o => {
                    e(!o.matches)
                }
                ),
                n.matches && e(!1),
                $("video:not([autoplay])").each(function() {
                    $(this).parent().find(".w-background-video--control").each(function() {
                        t($(this))
                    })
                }),
                $(document).on("click", ".w-background-video--control", function(o) {
                    if (Webflow.env("design"))
                        return;
                    let i = $(o.currentTarget)
                      , a = $(`video#${i.attr("aria-controls")}`).get(0);
                    if (a)
                        if (a.paused) {
                            let s = a.play();
                            r(i),
                            s && typeof s.catch == "function" && s.catch( () => {
                                t(i)
                            }
                            )
                        } else
                            a.pause(),
                            t(i)
                })
            }
            )
        }
        )()
    }
    );
    var Gi = u( () => {
        window.tram = function(e) {
            function t(l, y) {
                var T = new E.Bare;
                return T.init(l, y)
            }
            function r(l) {
                return l.replace(/[A-Z]/g, function(y) {
                    return "-" + y.toLowerCase()
                })
            }
            function n(l) {
                var y = parseInt(l.slice(1), 16)
                  , T = y >> 16 & 255
                  , A = y >> 8 & 255
                  , m = 255 & y;
                return [T, A, m]
            }
            function o(l, y, T) {
                return "#" + (1 << 24 | l << 16 | y << 8 | T).toString(16).slice(1)
            }
            function i() {}
            function a(l, y) {
                d("Type warning: Expected: [" + l + "] Got: [" + typeof y + "] " + y)
            }
            function s(l, y, T) {
                d("Units do not match [" + l + "]: " + y + ", " + T)
            }
            function c(l, y, T) {
                if (y !== void 0 && (T = y),
                l === void 0)
                    return T;
                var A = T;
                return Et.test(l) || !Ht.test(l) ? A = parseInt(l, 10) : Ht.test(l) && (A = 1e3 * parseFloat(l)),
                0 > A && (A = 0),
                A === A ? A : T
            }
            function d(l) {
                le.debug && window && window.console.warn(l)
            }
            function h(l) {
                for (var y = -1, T = l ? l.length : 0, A = []; ++y < T; ) {
                    var m = l[y];
                    m && A.push(m)
                }
                return A
            }
            var p = function(l, y, T) {
                function A(te) {
                    return typeof te == "object"
                }
                function m(te) {
                    return typeof te == "function"
                }
                function R() {}
                function K(te, ve) {
                    function W() {
                        var Pe = new ae;
                        return m(Pe.init) && Pe.init.apply(Pe, arguments),
                        Pe
                    }
                    function ae() {}
                    ve === T && (ve = te,
                    te = Object),
                    W.Bare = ae;
                    var se, Ie = R[l] = te[l], ot = ae[l] = W[l] = new R;
                    return ot.constructor = W,
                    W.mixin = function(Pe) {
                        return ae[l] = W[l] = K(W, Pe)[l],
                        W
                    }
                    ,
                    W.open = function(Pe) {
                        if (se = {},
                        m(Pe) ? se = Pe.call(W, ot, Ie, W, te) : A(Pe) && (se = Pe),
                        A(se))
                            for (var br in se)
                                y.call(se, br) && (ot[br] = se[br]);
                        return m(ot.init) || (ot.init = te),
                        W
                    }
                    ,
                    W.open(ve)
                }
                return K
            }("prototype", {}.hasOwnProperty)
              , _ = {
                ease: ["ease", function(l, y, T, A) {
                    var m = (l /= A) * l
                      , R = m * l;
                    return y + T * (-2.75 * R * m + 11 * m * m + -15.5 * R + 8 * m + .25 * l)
                }
                ],
                "ease-in": ["ease-in", function(l, y, T, A) {
                    var m = (l /= A) * l
                      , R = m * l;
                    return y + T * (-1 * R * m + 3 * m * m + -3 * R + 2 * m)
                }
                ],
                "ease-out": ["ease-out", function(l, y, T, A) {
                    var m = (l /= A) * l
                      , R = m * l;
                    return y + T * (.3 * R * m + -1.6 * m * m + 2.2 * R + -1.8 * m + 1.9 * l)
                }
                ],
                "ease-in-out": ["ease-in-out", function(l, y, T, A) {
                    var m = (l /= A) * l
                      , R = m * l;
                    return y + T * (2 * R * m + -5 * m * m + 2 * R + 2 * m)
                }
                ],
                linear: ["linear", function(l, y, T, A) {
                    return T * l / A + y
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, y, T, A) {
                    return T * (l /= A) * l + y
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, y, T, A) {
                    return -T * (l /= A) * (l - 2) + y
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, y, T, A) {
                    return (l /= A / 2) < 1 ? T / 2 * l * l + y : -T / 2 * (--l * (l - 2) - 1) + y
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, y, T, A) {
                    return T * (l /= A) * l * l + y
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, y, T, A) {
                    return T * ((l = l / A - 1) * l * l + 1) + y
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, y, T, A) {
                    return (l /= A / 2) < 1 ? T / 2 * l * l * l + y : T / 2 * ((l -= 2) * l * l + 2) + y
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, y, T, A) {
                    return T * (l /= A) * l * l * l + y
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, y, T, A) {
                    return -T * ((l = l / A - 1) * l * l * l - 1) + y
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, y, T, A) {
                    return (l /= A / 2) < 1 ? T / 2 * l * l * l * l + y : -T / 2 * ((l -= 2) * l * l * l - 2) + y
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, y, T, A) {
                    return T * (l /= A) * l * l * l * l + y
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, y, T, A) {
                    return T * ((l = l / A - 1) * l * l * l * l + 1) + y
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, y, T, A) {
                    return (l /= A / 2) < 1 ? T / 2 * l * l * l * l * l + y : T / 2 * ((l -= 2) * l * l * l * l + 2) + y
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, y, T, A) {
                    return -T * Math.cos(l / A * (Math.PI / 2)) + T + y
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, y, T, A) {
                    return T * Math.sin(l / A * (Math.PI / 2)) + y
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, y, T, A) {
                    return -T / 2 * (Math.cos(Math.PI * l / A) - 1) + y
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, y, T, A) {
                    return l === 0 ? y : T * Math.pow(2, 10 * (l / A - 1)) + y
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, y, T, A) {
                    return l === A ? y + T : T * (-Math.pow(2, -10 * l / A) + 1) + y
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, y, T, A) {
                    return l === 0 ? y : l === A ? y + T : (l /= A / 2) < 1 ? T / 2 * Math.pow(2, 10 * (l - 1)) + y : T / 2 * (-Math.pow(2, -10 * --l) + 2) + y
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, y, T, A) {
                    return -T * (Math.sqrt(1 - (l /= A) * l) - 1) + y
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, y, T, A) {
                    return T * Math.sqrt(1 - (l = l / A - 1) * l) + y
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, y, T, A) {
                    return (l /= A / 2) < 1 ? -T / 2 * (Math.sqrt(1 - l * l) - 1) + y : T / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + y
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, y, T, A, m) {
                    return m === void 0 && (m = 1.70158),
                    T * (l /= A) * l * ((m + 1) * l - m) + y
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, y, T, A, m) {
                    return m === void 0 && (m = 1.70158),
                    T * ((l = l / A - 1) * l * ((m + 1) * l + m) + 1) + y
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, y, T, A, m) {
                    return m === void 0 && (m = 1.70158),
                    (l /= A / 2) < 1 ? T / 2 * l * l * (((m *= 1.525) + 1) * l - m) + y : T / 2 * ((l -= 2) * l * (((m *= 1.525) + 1) * l + m) + 2) + y
                }
                ]
            }
              , O = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , S = document
              , w = window
              , L = "bkwld-tram"
              , C = /[\-\.0-9]/g
              , N = /[A-Z]/
              , b = "number"
              , M = /^(rgb|#)/
              , q = /(em|cm|mm|in|pt|pc|px)$/
              , P = /(em|cm|mm|in|pt|pc|px|%)$/
              , U = /(deg|rad|turn)$/
              , k = "unitless"
              , H = /(all|none) 0s ease 0s/
              , ne = /^(width|height)$/
              , J = " "
              , X = S.createElement("a")
              , I = ["Webkit", "Moz", "O", "ms"]
              , D = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , G = function(l) {
                if (l in X.style)
                    return {
                        dom: l,
                        css: l
                    };
                var y, T, A = "", m = l.split("-");
                for (y = 0; y < m.length; y++)
                    A += m[y].charAt(0).toUpperCase() + m[y].slice(1);
                for (y = 0; y < I.length; y++)
                    if (T = I[y] + A,
                    T in X.style)
                        return {
                            dom: T,
                            css: D[y] + l
                        }
            }
              , V = t.support = {
                bind: Function.prototype.bind,
                transform: G("transform"),
                transition: G("transition"),
                backface: G("backface-visibility"),
                timing: G("transition-timing-function")
            };
            if (V.transition) {
                var Q = V.timing.dom;
                if (X.style[Q] = _["ease-in-back"][0],
                !X.style[Q])
                    for (var ee in O)
                        _[ee][0] = O[ee]
            }
            var F = t.frame = function() {
                var l = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.oRequestAnimationFrame || w.msRequestAnimationFrame;
                return l && V.bind ? l.bind(w) : function(y) {
                    w.setTimeout(y, 16)
                }
            }()
              , j = t.now = function() {
                var l = w.performance
                  , y = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                return y && V.bind ? y.bind(l) : Date.now || function() {
                    return +new Date
                }
            }()
              , f = p(function(l) {
                function y(Z, ue) {
                    var _e = h(("" + Z).split(J))
                      , fe = _e[0];
                    ue = ue || {};
                    var Le = it[fe];
                    if (!Le)
                        return d("Unsupported property: " + fe);
                    if (!ue.weak || !this.props[fe]) {
                        var Ke = Le[0]
                          , Ge = this.props[fe];
                        return Ge || (Ge = this.props[fe] = new Ke.Bare),
                        Ge.init(this.$el, _e, Le, ue),
                        Ge
                    }
                }
                function T(Z, ue, _e) {
                    if (Z) {
                        var fe = typeof Z;
                        if (ue || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        fe == "number" && ue)
                            return this.timer = new ce({
                                duration: Z,
                                context: this,
                                complete: R
                            }),
                            void (this.active = !0);
                        if (fe == "string" && ue) {
                            switch (Z) {
                            case "hide":
                                W.call(this);
                                break;
                            case "stop":
                                K.call(this);
                                break;
                            case "redraw":
                                ae.call(this);
                                break;
                            default:
                                y.call(this, Z, _e && _e[1])
                            }
                            return R.call(this)
                        }
                        if (fe == "function")
                            return void Z.call(this, this);
                        if (fe == "object") {
                            var Le = 0;
                            ot.call(this, Z, function(Te, _m) {
                                Te.span > Le && (Le = Te.span),
                                Te.stop(),
                                Te.animate(_m)
                            }, function(Te) {
                                "wait"in Te && (Le = c(Te.wait, 0))
                            }),
                            Ie.call(this),
                            Le > 0 && (this.timer = new ce({
                                duration: Le,
                                context: this
                            }),
                            this.active = !0,
                            ue && (this.timer.complete = R));
                            var Ke = this
                              , Ge = !1
                              , sn = {};
                            F(function() {
                                ot.call(Ke, Z, function(Te) {
                                    Te.active && (Ge = !0,
                                    sn[Te.name] = Te.nextStyle)
                                }),
                                Ge && Ke.$el.css(sn)
                            })
                        }
                    }
                }
                function A(Z) {
                    Z = c(Z, 0),
                    this.active ? this.queue.push({
                        options: Z
                    }) : (this.timer = new ce({
                        duration: Z,
                        context: this,
                        complete: R
                    }),
                    this.active = !0)
                }
                function m(Z) {
                    return this.active ? (this.queue.push({
                        options: Z,
                        args: arguments
                    }),
                    void (this.timer.complete = R)) : d("No active transition timer. Use start() or wait() before then().")
                }
                function R() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var Z = this.queue.shift();
                        T.call(this, Z.options, !0, Z.args)
                    }
                }
                function K(Z) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var ue;
                    typeof Z == "string" ? (ue = {},
                    ue[Z] = 1) : ue = typeof Z == "object" && Z != null ? Z : this.props,
                    ot.call(this, ue, Pe),
                    Ie.call(this)
                }
                function te(Z) {
                    K.call(this, Z),
                    ot.call(this, Z, br, Em)
                }
                function ve(Z) {
                    typeof Z != "string" && (Z = "block"),
                    this.el.style.display = Z
                }
                function W() {
                    K.call(this),
                    this.el.style.display = "none"
                }
                function ae() {
                    this.el.offsetHeight
                }
                function se() {
                    K.call(this),
                    e.removeData(this.el, L),
                    this.$el = this.el = null
                }
                function Ie() {
                    var Z, ue, _e = [];
                    this.upstream && _e.push(this.upstream);
                    for (Z in this.props)
                        ue = this.props[Z],
                        ue.active && _e.push(ue.string);
                    _e = _e.join(","),
                    this.style !== _e && (this.style = _e,
                    this.el.style[V.transition.dom] = _e)
                }
                function ot(Z, ue, _e) {
                    var fe, Le, Ke, Ge, sn = ue !== Pe, Te = {};
                    for (fe in Z)
                        Ke = Z[fe],
                        fe in qe ? (Te.transform || (Te.transform = {}),
                        Te.transform[fe] = Ke) : (N.test(fe) && (fe = r(fe)),
                        fe in it ? Te[fe] = Ke : (Ge || (Ge = {}),
                        Ge[fe] = Ke));
                    for (fe in Te) {
                        if (Ke = Te[fe],
                        Le = this.props[fe],
                        !Le) {
                            if (!sn)
                                continue;
                            Le = y.call(this, fe)
                        }
                        ue.call(this, Le, Ke)
                    }
                    _e && Ge && _e.call(this, Ge)
                }
                function Pe(Z) {
                    Z.stop()
                }
                function br(Z, ue) {
                    Z.set(ue)
                }
                function Em(Z) {
                    this.$el.css(Z)
                }
                function He(Z, ue) {
                    l[Z] = function() {
                        return this.children ? gm.call(this, ue, arguments) : (this.el && ue.apply(this, arguments),
                        this)
                    }
                }
                function gm(Z, ue) {
                    var _e, fe = this.children.length;
                    for (_e = 0; fe > _e; _e++)
                        Z.apply(this.children[_e], ue);
                    return this
                }
                l.init = function(Z) {
                    if (this.$el = e(Z),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    le.keepInherited && !le.fallback) {
                        var ue = We(this.el, "transition");
                        ue && !H.test(ue) && (this.upstream = ue)
                    }
                    V.backface && le.hideBackface && Ee(this.el, V.backface.css, "hidden")
                }
                ,
                He("add", y),
                He("start", T),
                He("wait", A),
                He("then", m),
                He("next", R),
                He("stop", K),
                He("set", te),
                He("show", ve),
                He("hide", W),
                He("redraw", ae),
                He("destroy", se)
            })
              , E = p(f, function(l) {
                function y(T, A) {
                    var m = e.data(T, L) || e.data(T, L, new f.Bare);
                    return m.el || m.init(T),
                    A ? m.start(A) : m
                }
                l.init = function(T, A) {
                    var m = e(T);
                    if (!m.length)
                        return this;
                    if (m.length === 1)
                        return y(m[0], A);
                    var R = [];
                    return m.each(function(K, te) {
                        R.push(y(te, A))
                    }),
                    this.children = R,
                    this
                }
            })
              , g = p(function(l) {
                function y() {
                    var R = this.get();
                    this.update("auto");
                    var K = this.get();
                    return this.update(R),
                    K
                }
                function T(R, K, te) {
                    return K !== void 0 && (te = K),
                    R in _ ? R : te
                }
                function A(R) {
                    var K = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(R);
                    return (K ? o(K[1], K[2], K[3]) : R).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var m = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                l.init = function(R, K, te, ve) {
                    this.$el = R,
                    this.el = R[0];
                    var W = K[0];
                    te[2] && (W = te[2]),
                    Be[W] && (W = Be[W]),
                    this.name = W,
                    this.type = te[1],
                    this.duration = c(K[1], this.duration, m.duration),
                    this.ease = T(K[2], this.ease, m.ease),
                    this.delay = c(K[3], this.delay, m.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = ne.test(this.name),
                    this.unit = ve.unit || this.unit || le.defaultUnit,
                    this.angle = ve.angle || this.angle || le.defaultAngle,
                    le.fallback || ve.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + J + this.duration + "ms" + (this.ease != "ease" ? J + _[this.ease][0] : "") + (this.delay ? J + this.delay + "ms" : ""))
                }
                ,
                l.set = function(R) {
                    R = this.convert(R, this.type),
                    this.update(R),
                    this.redraw()
                }
                ,
                l.transition = function(R) {
                    this.active = !0,
                    R = this.convert(R, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    R == "auto" && (R = y.call(this))),
                    this.nextStyle = R
                }
                ,
                l.fallback = function(R) {
                    var K = this.el.style[this.name] || this.convert(this.get(), this.type);
                    R = this.convert(R, this.type),
                    this.auto && (K == "auto" && (K = this.convert(this.get(), this.type)),
                    R == "auto" && (R = y.call(this))),
                    this.tween = new Y({
                        from: K,
                        to: R,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.get = function() {
                    return We(this.el, this.name)
                }
                ,
                l.update = function(R) {
                    Ee(this.el, this.name, R)
                }
                ,
                l.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    Ee(this.el, this.name, this.get()));
                    var R = this.tween;
                    R && R.context && R.destroy()
                }
                ,
                l.convert = function(R, K) {
                    if (R == "auto" && this.auto)
                        return R;
                    var te, ve = typeof R == "number", W = typeof R == "string";
                    switch (K) {
                    case b:
                        if (ve)
                            return R;
                        if (W && R.replace(C, "") === "")
                            return +R;
                        te = "number(unitless)";
                        break;
                    case M:
                        if (W) {
                            if (R === "" && this.original)
                                return this.original;
                            if (K.test(R))
                                return R.charAt(0) == "#" && R.length == 7 ? R : A(R)
                        }
                        te = "hex or rgb string";
                        break;
                    case q:
                        if (ve)
                            return R + this.unit;
                        if (W && K.test(R))
                            return R;
                        te = "number(px) or string(unit)";
                        break;
                    case P:
                        if (ve)
                            return R + this.unit;
                        if (W && K.test(R))
                            return R;
                        te = "number(px) or string(unit or %)";
                        break;
                    case U:
                        if (ve)
                            return R + this.angle;
                        if (W && K.test(R))
                            return R;
                        te = "number(deg) or string(angle)";
                        break;
                    case k:
                        if (ve || W && P.test(R))
                            return R;
                        te = "number(unitless) or string(unit or %)"
                    }
                    return a(te, R),
                    R
                }
                ,
                l.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , v = p(g, function(l, y) {
                l.init = function() {
                    y.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), M))
                }
            })
              , B = p(g, function(l, y) {
                l.init = function() {
                    y.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                l.get = function() {
                    return this.$el[this.name]()
                }
                ,
                l.update = function(T) {
                    this.$el[this.name](T)
                }
            })
              , z = p(g, function(l, y) {
                function T(A, m) {
                    var R, K, te, ve, W;
                    for (R in A)
                        ve = qe[R],
                        te = ve[0],
                        K = ve[1] || R,
                        W = this.convert(A[R], te),
                        m.call(this, K, W, te)
                }
                l.init = function() {
                    y.init.apply(this, arguments),
                    this.current || (this.current = {},
                    qe.perspective && le.perspective && (this.current.perspective = le.perspective,
                    Ee(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                l.set = function(A) {
                    T.call(this, A, function(m, R) {
                        this.current[m] = R
                    }),
                    Ee(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                l.transition = function(A) {
                    var m = this.values(A);
                    this.tween = new Ae({
                        current: this.current,
                        values: m,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var R, K = {};
                    for (R in this.current)
                        K[R] = R in m ? m[R] : this.current[R];
                    this.active = !0,
                    this.nextStyle = this.style(K)
                }
                ,
                l.fallback = function(A) {
                    var m = this.values(A);
                    this.tween = new Ae({
                        current: this.current,
                        values: m,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.update = function() {
                    Ee(this.el, this.name, this.style(this.current))
                }
                ,
                l.style = function(A) {
                    var m, R = "";
                    for (m in A)
                        R += m + "(" + A[m] + ") ";
                    return R
                }
                ,
                l.values = function(A) {
                    var m, R = {};
                    return T.call(this, A, function(K, te, ve) {
                        R[K] = te,
                        this.current[K] === void 0 && (m = 0,
                        ~K.indexOf("scale") && (m = 1),
                        this.current[K] = this.convert(m, ve))
                    }),
                    R
                }
            })
              , Y = p(function(l) {
                function y(W) {
                    te.push(W) === 1 && F(T)
                }
                function T() {
                    var W, ae, se, Ie = te.length;
                    if (Ie)
                        for (F(T),
                        ae = j(),
                        W = Ie; W--; )
                            se = te[W],
                            se && se.render(ae)
                }
                function A(W) {
                    var ae, se = e.inArray(W, te);
                    se >= 0 && (ae = te.slice(se + 1),
                    te.length = se,
                    ae.length && (te = te.concat(ae)))
                }
                function m(W) {
                    return Math.round(W * ve) / ve
                }
                function R(W, ae, se) {
                    return o(W[0] + se * (ae[0] - W[0]), W[1] + se * (ae[1] - W[1]), W[2] + se * (ae[2] - W[2]))
                }
                var K = {
                    ease: _.ease[1],
                    from: 0,
                    to: 1
                };
                l.init = function(W) {
                    this.duration = W.duration || 0,
                    this.delay = W.delay || 0;
                    var ae = W.ease || K.ease;
                    _[ae] && (ae = _[ae][1]),
                    typeof ae != "function" && (ae = K.ease),
                    this.ease = ae,
                    this.update = W.update || i,
                    this.complete = W.complete || i,
                    this.context = W.context || this,
                    this.name = W.name;
                    var se = W.from
                      , Ie = W.to;
                    se === void 0 && (se = K.from),
                    Ie === void 0 && (Ie = K.to),
                    this.unit = W.unit || "",
                    typeof se == "number" && typeof Ie == "number" ? (this.begin = se,
                    this.change = Ie - se) : this.format(Ie, se),
                    this.value = this.begin + this.unit,
                    this.start = j(),
                    W.autoplay !== !1 && this.play()
                }
                ,
                l.play = function() {
                    this.active || (this.start || (this.start = j()),
                    this.active = !0,
                    y(this))
                }
                ,
                l.stop = function() {
                    this.active && (this.active = !1,
                    A(this))
                }
                ,
                l.render = function(W) {
                    var ae, se = W - this.start;
                    if (this.delay) {
                        if (se <= this.delay)
                            return;
                        se -= this.delay
                    }
                    if (se < this.duration) {
                        var Ie = this.ease(se, 0, 1, this.duration);
                        return ae = this.startRGB ? R(this.startRGB, this.endRGB, Ie) : m(this.begin + Ie * this.change),
                        this.value = ae + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    ae = this.endHex || this.begin + this.change,
                    this.value = ae + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                l.format = function(W, ae) {
                    if (ae += "",
                    W += "",
                    W.charAt(0) == "#")
                        return this.startRGB = n(ae),
                        this.endRGB = n(W),
                        this.endHex = W,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var se = ae.replace(C, "")
                          , Ie = W.replace(C, "");
                        se !== Ie && s("tween", ae, W),
                        this.unit = se
                    }
                    ae = parseFloat(ae),
                    W = parseFloat(W),
                    this.begin = this.value = ae,
                    this.change = W - ae
                }
                ,
                l.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = i
                }
                ;
                var te = []
                  , ve = 1e3
            })
              , ce = p(Y, function(l) {
                l.init = function(y) {
                    this.duration = y.duration || 0,
                    this.complete = y.complete || i,
                    this.context = y.context,
                    this.play()
                }
                ,
                l.render = function(y) {
                    var T = y - this.start;
                    T < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , Ae = p(Y, function(l, y) {
                l.init = function(T) {
                    this.context = T.context,
                    this.update = T.update,
                    this.tweens = [],
                    this.current = T.current;
                    var A, m;
                    for (A in T.values)
                        m = T.values[A],
                        this.current[A] !== m && this.tweens.push(new Y({
                            name: A,
                            from: this.current[A],
                            to: m,
                            duration: T.duration,
                            delay: T.delay,
                            ease: T.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                l.render = function(T) {
                    var A, m, R = this.tweens.length, K = !1;
                    for (A = R; A--; )
                        m = this.tweens[A],
                        m.context && (m.render(T),
                        this.current[m.name] = m.value,
                        K = !0);
                    return K ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                l.destroy = function() {
                    if (y.destroy.call(this),
                    this.tweens) {
                        var T, A = this.tweens.length;
                        for (T = A; T--; )
                            this.tweens[T].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , le = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !V.transition,
                agentTests: []
            };
            t.fallback = function(l) {
                if (!V.transition)
                    return le.fallback = !0;
                le.agentTests.push("(" + l + ")");
                var y = new RegExp(le.agentTests.join("|"),"i");
                le.fallback = y.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(l) {
                return new Y(l)
            }
            ,
            t.delay = function(l, y, T) {
                return new ce({
                    complete: y,
                    duration: l,
                    context: T
                })
            }
            ,
            e.fn.tram = function(l) {
                return t.call(null, this, l)
            }
            ;
            var Ee = e.style
              , We = e.css
              , Be = {
                transform: V.transform && V.transform.css
            }
              , it = {
                color: [v, M],
                background: [v, M, "background-color"],
                "outline-color": [v, M],
                "border-color": [v, M],
                "border-top-color": [v, M],
                "border-right-color": [v, M],
                "border-bottom-color": [v, M],
                "border-left-color": [v, M],
                "border-width": [g, q],
                "border-top-width": [g, q],
                "border-right-width": [g, q],
                "border-bottom-width": [g, q],
                "border-left-width": [g, q],
                "border-spacing": [g, q],
                "letter-spacing": [g, q],
                margin: [g, q],
                "margin-top": [g, q],
                "margin-right": [g, q],
                "margin-bottom": [g, q],
                "margin-left": [g, q],
                padding: [g, q],
                "padding-top": [g, q],
                "padding-right": [g, q],
                "padding-bottom": [g, q],
                "padding-left": [g, q],
                "outline-width": [g, q],
                opacity: [g, b],
                top: [g, P],
                right: [g, P],
                bottom: [g, P],
                left: [g, P],
                "font-size": [g, P],
                "text-indent": [g, P],
                "word-spacing": [g, P],
                width: [g, P],
                "min-width": [g, P],
                "max-width": [g, P],
                height: [g, P],
                "min-height": [g, P],
                "max-height": [g, P],
                "line-height": [g, k],
                "scroll-top": [B, b, "scrollTop"],
                "scroll-left": [B, b, "scrollLeft"]
            }
              , qe = {};
            V.transform && (it.transform = [z],
            qe = {
                x: [P, "translateX"],
                y: [P, "translateY"],
                rotate: [U],
                rotateX: [U],
                rotateY: [U],
                scale: [b],
                scaleX: [b],
                scaleY: [b],
                skew: [U],
                skewX: [U],
                skewY: [U]
            }),
            V.transform && V.backface && (qe.z = [P, "translateZ"],
            qe.rotateZ = [U],
            qe.scaleZ = [b],
            qe.perspective = [q]);
            var Et = /ms/
              , Ht = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var Ss = u( (qW, bs) => {
        var ym = window.$
          , mm = Gi() && ym.tram;
        bs.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , o = Function.prototype
              , i = r.push
              , a = r.slice
              , s = r.concat
              , c = n.toString
              , d = n.hasOwnProperty
              , h = r.forEach
              , p = r.map
              , _ = r.reduce
              , O = r.reduceRight
              , S = r.filter
              , w = r.every
              , L = r.some
              , C = r.indexOf
              , N = r.lastIndexOf
              , b = Array.isArray
              , M = Object.keys
              , q = o.bind
              , P = e.each = e.forEach = function(I, D, G) {
                if (I == null)
                    return I;
                if (h && I.forEach === h)
                    I.forEach(D, G);
                else if (I.length === +I.length) {
                    for (var V = 0, Q = I.length; V < Q; V++)
                        if (D.call(G, I[V], V, I) === t)
                            return
                } else
                    for (var ee = e.keys(I), V = 0, Q = ee.length; V < Q; V++)
                        if (D.call(G, I[ee[V]], ee[V], I) === t)
                            return;
                return I
            }
            ;
            e.map = e.collect = function(I, D, G) {
                var V = [];
                return I == null ? V : p && I.map === p ? I.map(D, G) : (P(I, function(Q, ee, F) {
                    V.push(D.call(G, Q, ee, F))
                }),
                V)
            }
            ,
            e.find = e.detect = function(I, D, G) {
                var V;
                return U(I, function(Q, ee, F) {
                    if (D.call(G, Q, ee, F))
                        return V = Q,
                        !0
                }),
                V
            }
            ,
            e.filter = e.select = function(I, D, G) {
                var V = [];
                return I == null ? V : S && I.filter === S ? I.filter(D, G) : (P(I, function(Q, ee, F) {
                    D.call(G, Q, ee, F) && V.push(Q)
                }),
                V)
            }
            ;
            var U = e.some = e.any = function(I, D, G) {
                D || (D = e.identity);
                var V = !1;
                return I == null ? V : L && I.some === L ? I.some(D, G) : (P(I, function(Q, ee, F) {
                    if (V || (V = D.call(G, Q, ee, F)))
                        return t
                }),
                !!V)
            }
            ;
            e.contains = e.include = function(I, D) {
                return I == null ? !1 : C && I.indexOf === C ? I.indexOf(D) != -1 : U(I, function(G) {
                    return G === D
                })
            }
            ,
            e.delay = function(I, D) {
                var G = a.call(arguments, 2);
                return setTimeout(function() {
                    return I.apply(null, G)
                }, D)
            }
            ,
            e.defer = function(I) {
                return e.delay.apply(e, [I, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(I) {
                var D, G, V;
                return function() {
                    D || (D = !0,
                    G = arguments,
                    V = this,
                    mm.frame(function() {
                        D = !1,
                        I.apply(V, G)
                    }))
                }
            }
            ,
            e.debounce = function(I, D, G) {
                var V, Q, ee, F, j, f = function() {
                    var E = e.now() - F;
                    E < D ? V = setTimeout(f, D - E) : (V = null,
                    G || (j = I.apply(ee, Q),
                    ee = Q = null))
                };
                return function() {
                    ee = this,
                    Q = arguments,
                    F = e.now();
                    var E = G && !V;
                    return V || (V = setTimeout(f, D)),
                    E && (j = I.apply(ee, Q),
                    ee = Q = null),
                    j
                }
            }
            ,
            e.defaults = function(I) {
                if (!e.isObject(I))
                    return I;
                for (var D = 1, G = arguments.length; D < G; D++) {
                    var V = arguments[D];
                    for (var Q in V)
                        I[Q] === void 0 && (I[Q] = V[Q])
                }
                return I
            }
            ,
            e.keys = function(I) {
                if (!e.isObject(I))
                    return [];
                if (M)
                    return M(I);
                var D = [];
                for (var G in I)
                    e.has(I, G) && D.push(G);
                return D
            }
            ,
            e.has = function(I, D) {
                return d.call(I, D)
            }
            ,
            e.isObject = function(I) {
                return I === Object(I)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var k = /(.)^/
              , H = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , ne = /\\|'|\r|\n|\u2028|\u2029/g
              , J = function(I) {
                return "\\" + H[I]
            }
              , X = /^\s*(\w|\$)+\s*$/;
            return e.template = function(I, D, G) {
                !D && G && (D = G),
                D = e.defaults({}, D, e.templateSettings);
                var V = RegExp([(D.escape || k).source, (D.interpolate || k).source, (D.evaluate || k).source].join("|") + "|$", "g")
                  , Q = 0
                  , ee = "__p+='";
                I.replace(V, function(E, g, v, B, z) {
                    return ee += I.slice(Q, z).replace(ne, J),
                    Q = z + E.length,
                    g ? ee += `'+
((__t=(` + g + `))==null?'':_.escape(__t))+
'` : v ? ee += `'+
((__t=(` + v + `))==null?'':__t)+
'` : B && (ee += `';
` + B + `
__p+='`),
                    E
                }),
                ee += `';
`;
                var F = D.variable;
                if (F) {
                    if (!X.test(F))
                        throw new Error("variable is not a bare identifier: " + F)
                } else
                    ee = `with(obj||{}){
` + ee + `}
`,
                    F = "obj";
                ee = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ee + `return __p;
`;
                var j;
                try {
                    j = new Function(D.variable || "obj","_",ee)
                } catch (E) {
                    throw E.source = ee,
                    E
                }
                var f = function(E) {
                    return j.call(this, E, e)
                };
                return f.source = "function(" + F + `){
` + ee + "}",
                f
            }
            ,
            e
        }()
    }
    );
    var Qe = u( (PW, Ps) => {
        var de = {}
          , Kt = {}
          , zt = []
          , Ui = window.Webflow || []
          , Tt = window.jQuery
          , Ye = Tt(window)
          , Im = Tt(document)
          , at = Tt.isFunction
          , ze = de._ = Ss()
          , ws = de.tram = Gi() && Tt.tram
          , cn = !1
          , Vi = !1;
        ws.config.hideBackface = !1;
        ws.config.keepInherited = !0;
        de.define = function(e, t, r) {
            Kt[e] && Cs(Kt[e]);
            var n = Kt[e] = t(Tt, ze, r) || {};
            return Rs(n),
            n
        }
        ;
        de.require = function(e) {
            return Kt[e]
        }
        ;
        function Rs(e) {
            de.env() && (at(e.design) && Ye.on("__wf_design", e.design),
            at(e.preview) && Ye.on("__wf_preview", e.preview)),
            at(e.destroy) && Ye.on("__wf_destroy", e.destroy),
            e.ready && at(e.ready) && Tm(e)
        }
        function Tm(e) {
            if (cn) {
                e.ready();
                return
            }
            ze.contains(zt, e.ready) || zt.push(e.ready)
        }
        function Cs(e) {
            at(e.design) && Ye.off("__wf_design", e.design),
            at(e.preview) && Ye.off("__wf_preview", e.preview),
            at(e.destroy) && Ye.off("__wf_destroy", e.destroy),
            e.ready && at(e.ready) && Om(e)
        }
        function Om(e) {
            zt = ze.filter(zt, function(t) {
                return t !== e.ready
            })
        }
        de.push = function(e) {
            if (cn) {
                at(e) && e();
                return
            }
            Ui.push(e)
        }
        ;
        de.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var un = navigator.userAgent.toLowerCase()
          , Ns = de.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , bm = de.env.chrome = /chrome/.test(un) && /Google/.test(navigator.vendor) && parseInt(un.match(/chrome\/(\d+)\./)[1], 10)
          , Sm = de.env.ios = /(ipod|iphone|ipad)/.test(un);
        de.env.safari = /safari/.test(un) && !bm && !Sm;
        var Xi;
        Ns && Im.on("touchstart mousedown", function(e) {
            Xi = e.target
        });
        de.validClick = Ns ? function(e) {
            return e === Xi || Tt.contains(e, Xi)
        }
        : function() {
            return !0
        }
        ;
        var xs = "resize.webflow orientationchange.webflow load.webflow"
          , Am = "scroll.webflow " + xs;
        de.resize = Wi(Ye, xs);
        de.scroll = Wi(Ye, Am);
        de.redraw = Wi();
        function Wi(e, t) {
            var r = []
              , n = {};
            return n.up = ze.throttle(function(o) {
                ze.each(r, function(i) {
                    i(o)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(o) {
                typeof o == "function" && (ze.contains(r, o) || r.push(o))
            }
            ,
            n.off = function(o) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = ze.filter(r, function(i) {
                    return i !== o
                })
            }
            ,
            n
        }
        de.location = function(e) {
            window.location = e
        }
        ;
        de.env() && (de.location = function() {}
        );
        de.ready = function() {
            cn = !0,
            Vi ? wm() : ze.each(zt, As),
            ze.each(Ui, As),
            de.resize.up()
        }
        ;
        function As(e) {
            at(e) && e()
        }
        function wm() {
            Vi = !1,
            ze.each(Kt, Rs)
        }
        var Pt;
        de.load = function(e) {
            Pt.then(e)
        }
        ;
        function qs() {
            Pt && (Pt.reject(),
            Ye.off("load", Pt.resolve)),
            Pt = new Tt.Deferred,
            Ye.on("load", Pt.resolve)
        }
        de.destroy = function(e) {
            e = e || {},
            Vi = !0,
            Ye.triggerHandler("__wf_destroy"),
            e.domready != null && (cn = e.domready),
            ze.each(Kt, Cs),
            de.resize.off(),
            de.scroll.off(),
            de.redraw.off(),
            zt = [],
            Ui = [],
            Pt.state() === "pending" && qs()
        }
        ;
        Tt(de.ready);
        qs();
        Ps.exports = window.Webflow = de
    }
    );
    var Ds = u( (LW, Ms) => {
        var Ls = Qe();
        Ls.define("brand", Ms.exports = function(e) {
            var t = {}, r = document, n = e("html"), o = e("body"), i = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", d;
            t.ready = function() {
                var O = n.attr("data-wf-status")
                  , S = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(S) && a.hostname !== S && (O = !0),
                O && !s && (d = d || p(),
                _(),
                setTimeout(_, 500),
                e(r).off(c, h).on(c, h))
            }
            ;
            function h() {
                var O = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(d).attr("style", O ? "display: none !important;" : "")
            }
            function p() {
                var O = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , S = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                    marginRight: "8px",
                    width: "16px"
                })
                  , w = e("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow");
                return O.append(S, w),
                O[0]
            }
            function _() {
                var O = o.children(i)
                  , S = O.length && O.get(0) === d
                  , w = Ls.env("editor");
                if (S) {
                    w && O.remove();
                    return
                }
                O.length && O.remove(),
                w || o.append(d)
            }
            return t
        }
        )
    }
    );
    var Gs = u( (MW, Fs) => {
        var Bi = Qe();
        Bi.define("edit", Fs.exports = function(e, t, r) {
            if (r = r || {},
            (Bi.env("test") || Bi.env("frame")) && !r.fixture && !Rm())
                return {
                    exit: 1
                };
            var n = {}, o = e(window), i = e(document.documentElement), a = document.location, s = "hashchange", c, d = r.load || _, h = !1;
            try {
                h = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            h ? d() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && d() : o.on(s, p).triggerHandler(s);
            function p() {
                c || /\?edit/.test(a.hash) && d()
            }
            function _() {
                c = !0,
                window.WebflowEditor = !0,
                o.off(s, p),
                N(function(M) {
                    e.ajax({
                        url: C("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: i.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: O(M)
                    })
                })
            }
            function O(M) {
                return function(q) {
                    if (!q) {
                        console.error("Could not load editor data");
                        return
                    }
                    q.thirdPartyCookiesSupported = M,
                    S(L(q.bugReporterScriptPath), function() {
                        S(L(q.scriptPath), function() {
                            window.WebflowEditor(q)
                        })
                    })
                }
            }
            function S(M, q) {
                e.ajax({
                    type: "GET",
                    url: M,
                    dataType: "script",
                    cache: !0
                }).then(q, w)
            }
            function w(M, q, P) {
                throw console.error("Could not load editor script: " + q),
                P
            }
            function L(M) {
                return M.indexOf("//") >= 0 ? M : C("https://editor-api.webflow.com" + M)
            }
            function C(M) {
                return M.replace(/([^:])\/\//g, "$1/")
            }
            function N(M) {
                var q = window.document.createElement("iframe");
                q.src = "https://webflow.com/site/third-party-cookie-check.html",
                q.style.display = "none",
                q.sandbox = "allow-scripts allow-same-origin";
                var P = function(U) {
                    U.data === "WF_third_party_cookies_unsupported" ? (b(q, P),
                    M(!1)) : U.data === "WF_third_party_cookies_supported" && (b(q, P),
                    M(!0))
                };
                q.onerror = function() {
                    b(q, P),
                    M(!1)
                }
                ,
                window.addEventListener("message", P, !1),
                window.document.body.appendChild(q)
            }
            function b(M, q) {
                window.removeEventListener("message", q, !1),
                M.remove()
            }
            return n
        }
        );
        function Rm() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var Us = u( (DW, Xs) => {
        var Cm = Qe();
        Cm.define("focus-visible", Xs.exports = function() {
            function e(r) {
                var n = !0
                  , o = !1
                  , i = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(b) {
                    return !!(b && b !== document && b.nodeName !== "HTML" && b.nodeName !== "BODY" && "classList"in b && "contains"in b.classList)
                }
                function c(b) {
                    var M = b.type
                      , q = b.tagName;
                    return !!(q === "INPUT" && a[M] && !b.readOnly || q === "TEXTAREA" && !b.readOnly || b.isContentEditable)
                }
                function d(b) {
                    b.getAttribute("data-wf-focus-visible") || b.setAttribute("data-wf-focus-visible", "true")
                }
                function h(b) {
                    b.getAttribute("data-wf-focus-visible") && b.removeAttribute("data-wf-focus-visible")
                }
                function p(b) {
                    b.metaKey || b.altKey || b.ctrlKey || (s(r.activeElement) && d(r.activeElement),
                    n = !0)
                }
                function _() {
                    n = !1
                }
                function O(b) {
                    s(b.target) && (n || c(b.target)) && d(b.target)
                }
                function S(b) {
                    s(b.target) && b.target.hasAttribute("data-wf-focus-visible") && (o = !0,
                    window.clearTimeout(i),
                    i = window.setTimeout(function() {
                        o = !1
                    }, 100),
                    h(b.target))
                }
                function w() {
                    document.visibilityState === "hidden" && (o && (n = !0),
                    L())
                }
                function L() {
                    document.addEventListener("mousemove", N),
                    document.addEventListener("mousedown", N),
                    document.addEventListener("mouseup", N),
                    document.addEventListener("pointermove", N),
                    document.addEventListener("pointerdown", N),
                    document.addEventListener("pointerup", N),
                    document.addEventListener("touchmove", N),
                    document.addEventListener("touchstart", N),
                    document.addEventListener("touchend", N)
                }
                function C() {
                    document.removeEventListener("mousemove", N),
                    document.removeEventListener("mousedown", N),
                    document.removeEventListener("mouseup", N),
                    document.removeEventListener("pointermove", N),
                    document.removeEventListener("pointerdown", N),
                    document.removeEventListener("pointerup", N),
                    document.removeEventListener("touchmove", N),
                    document.removeEventListener("touchstart", N),
                    document.removeEventListener("touchend", N)
                }
                function N(b) {
                    b.target.nodeName && b.target.nodeName.toLowerCase() === "html" || (n = !1,
                    C())
                }
                document.addEventListener("keydown", p, !0),
                document.addEventListener("mousedown", _, !0),
                document.addEventListener("pointerdown", _, !0),
                document.addEventListener("touchstart", _, !0),
                document.addEventListener("visibilitychange", w, !0),
                L(),
                r.addEventListener("focus", O, !0),
                r.addEventListener("blur", S, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var Bs = u( (FW, Ws) => {
        var Vs = Qe();
        Vs.define("focus", Ws.exports = function() {
            var e = []
              , t = !1;
            function r(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function n(a) {
                var s = a.target
                  , c = s.tagName;
                return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
            }
            function o(a) {
                n(a) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function i() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Vs.env.safari && (document.addEventListener("mousedown", o, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: i
            }
        }
        )
    }
    );
    var Hs = u( (GW, ks) => {
        "use strict";
        var ji = window.jQuery
          , st = {}
          , ln = []
          , js = ".w-ix"
          , fn = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                ji(t).triggerHandler(st.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                ji(t).triggerHandler(st.types.OUTRO))
            }
        };
        st.triggers = {};
        st.types = {
            INTRO: "w-ix-intro" + js,
            OUTRO: "w-ix-outro" + js
        };
        st.init = function() {
            for (var e = ln.length, t = 0; t < e; t++) {
                var r = ln[t];
                r[0](0, r[1])
            }
            ln = [],
            ji.extend(st.triggers, fn)
        }
        ;
        st.async = function() {
            for (var e in fn) {
                var t = fn[e];
                fn.hasOwnProperty(e) && (st.triggers[e] = function(r, n) {
                    ln.push([t, n])
                }
                )
            }
        }
        ;
        st.async();
        ks.exports = st
    }
    );
    var Hi = u( (XW, Ys) => {
        "use strict";
        var ki = Hs();
        function Ks(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var Nm = window.jQuery
          , dn = {}
          , zs = ".w-ix"
          , xm = {
            reset: function(e, t) {
                ki.triggers.reset(e, t)
            },
            intro: function(e, t) {
                ki.triggers.intro(e, t),
                Ks(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                ki.triggers.outro(e, t),
                Ks(t, "COMPONENT_INACTIVE")
            }
        };
        dn.triggers = {};
        dn.types = {
            INTRO: "w-ix-intro" + zs,
            OUTRO: "w-ix-outro" + zs
        };
        Nm.extend(dn.triggers, xm);
        Ys.exports = dn
    }
    );
    var Qs = u( (UW, gt) => {
        function Ki(e) {
            return gt.exports = Ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            gt.exports.__esModule = !0,
            gt.exports.default = gt.exports,
            Ki(e)
        }
        gt.exports = Ki,
        gt.exports.__esModule = !0,
        gt.exports.default = gt.exports
    }
    );
    var Lt = u( (VW, Sr) => {
        var qm = Qs().default;
        function $s(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return ($s = function(o) {
                return o ? r : t
            }
            )(e)
        }
        function Pm(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || qm(e) !== "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = $s(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        Sr.exports = Pm,
        Sr.exports.__esModule = !0,
        Sr.exports.default = Sr.exports
    }
    );
    var $e = u( (WW, Ar) => {
        function Lm(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ar.exports = Lm,
        Ar.exports.__esModule = !0,
        Ar.exports.default = Ar.exports
    }
    );
    var ge = u( (BW, Zs) => {
        var pn = function(e) {
            return e && e.Math == Math && e
        };
        Zs.exports = pn(typeof globalThis == "object" && globalThis) || pn(typeof window == "object" && window) || pn(typeof self == "object" && self) || pn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    }
    );
    var Yt = u( (jW, Js) => {
        Js.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    }
    );
    var Mt = u( (kW, eu) => {
        var Mm = Yt();
        eu.exports = !Mm(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    }
    );
    var vn = u( (HW, tu) => {
        var wr = Function.prototype.call;
        tu.exports = wr.bind ? wr.bind(wr) : function() {
            return wr.apply(wr, arguments)
        }
    }
    );
    var ou = u(iu => {
        "use strict";
        var ru = {}.propertyIsEnumerable
          , nu = Object.getOwnPropertyDescriptor
          , Dm = nu && !ru.call({
            1: 2
        }, 1);
        iu.f = Dm ? function(t) {
            var r = nu(this, t);
            return !!r && r.enumerable
        }
        : ru
    }
    );
    var zi = u( (zW, au) => {
        au.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    }
    );
    var Ze = u( (YW, uu) => {
        var su = Function.prototype
          , Yi = su.bind
          , Qi = su.call
          , Fm = Yi && Yi.bind(Qi);
        uu.exports = Yi ? function(e) {
            return e && Fm(Qi, e)
        }
        : function(e) {
            return e && function() {
                return Qi.apply(e, arguments)
            }
        }
    }
    );
    var fu = u( (QW, lu) => {
        var cu = Ze()
          , Gm = cu({}.toString)
          , Xm = cu("".slice);
        lu.exports = function(e) {
            return Xm(Gm(e), 8, -1)
        }
    }
    );
    var pu = u( ($W, du) => {
        var Um = ge()
          , Vm = Ze()
          , Wm = Yt()
          , Bm = fu()
          , $i = Um.Object
          , jm = Vm("".split);
        du.exports = Wm(function() {
            return !$i("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return Bm(e) == "String" ? jm(e, "") : $i(e)
        }
        : $i
    }
    );
    var Zi = u( (ZW, vu) => {
        var km = ge()
          , Hm = km.TypeError;
        vu.exports = function(e) {
            if (e == null)
                throw Hm("Can't call method on " + e);
            return e
        }
    }
    );
    var Rr = u( (JW, hu) => {
        var Km = pu()
          , zm = Zi();
        hu.exports = function(e) {
            return Km(zm(e))
        }
    }
    );
    var ut = u( (eB, Eu) => {
        Eu.exports = function(e) {
            return typeof e == "function"
        }
    }
    );
    var Qt = u( (tB, gu) => {
        var Ym = ut();
        gu.exports = function(e) {
            return typeof e == "object" ? e !== null : Ym(e)
        }
    }
    );
    var Cr = u( (rB, _u) => {
        var Ji = ge()
          , Qm = ut()
          , $m = function(e) {
            return Qm(e) ? e : void 0
        };
        _u.exports = function(e, t) {
            return arguments.length < 2 ? $m(Ji[e]) : Ji[e] && Ji[e][t]
        }
    }
    );
    var mu = u( (nB, yu) => {
        var Zm = Ze();
        yu.exports = Zm({}.isPrototypeOf)
    }
    );
    var Tu = u( (iB, Iu) => {
        var Jm = Cr();
        Iu.exports = Jm("navigator", "userAgent") || ""
    }
    );
    var Cu = u( (oB, Ru) => {
        var wu = ge(), eo = Tu(), Ou = wu.process, bu = wu.Deno, Su = Ou && Ou.versions || bu && bu.version, Au = Su && Su.v8, Je, hn;
        Au && (Je = Au.split("."),
        hn = Je[0] > 0 && Je[0] < 4 ? 1 : +(Je[0] + Je[1]));
        !hn && eo && (Je = eo.match(/Edge\/(\d+)/),
        (!Je || Je[1] >= 74) && (Je = eo.match(/Chrome\/(\d+)/),
        Je && (hn = +Je[1])));
        Ru.exports = hn
    }
    );
    var to = u( (aB, xu) => {
        var Nu = Cu()
          , eI = Yt();
        xu.exports = !!Object.getOwnPropertySymbols && !eI(function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && Nu && Nu < 41
        })
    }
    );
    var ro = u( (sB, qu) => {
        var tI = to();
        qu.exports = tI && !Symbol.sham && typeof Symbol.iterator == "symbol"
    }
    );
    var no = u( (uB, Pu) => {
        var rI = ge()
          , nI = Cr()
          , iI = ut()
          , oI = mu()
          , aI = ro()
          , sI = rI.Object;
        Pu.exports = aI ? function(e) {
            return typeof e == "symbol"
        }
        : function(e) {
            var t = nI("Symbol");
            return iI(t) && oI(t.prototype, sI(e))
        }
    }
    );
    var Mu = u( (cB, Lu) => {
        var uI = ge()
          , cI = uI.String;
        Lu.exports = function(e) {
            try {
                return cI(e)
            } catch {
                return "Object"
            }
        }
    }
    );
    var Fu = u( (lB, Du) => {
        var lI = ge()
          , fI = ut()
          , dI = Mu()
          , pI = lI.TypeError;
        Du.exports = function(e) {
            if (fI(e))
                return e;
            throw pI(dI(e) + " is not a function")
        }
    }
    );
    var Xu = u( (fB, Gu) => {
        var vI = Fu();
        Gu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : vI(r)
        }
    }
    );
    var Vu = u( (dB, Uu) => {
        var hI = ge()
          , io = vn()
          , oo = ut()
          , ao = Qt()
          , EI = hI.TypeError;
        Uu.exports = function(e, t) {
            var r, n;
            if (t === "string" && oo(r = e.toString) && !ao(n = io(r, e)) || oo(r = e.valueOf) && !ao(n = io(r, e)) || t !== "string" && oo(r = e.toString) && !ao(n = io(r, e)))
                return n;
            throw EI("Can't convert object to primitive value")
        }
    }
    );
    var Bu = u( (pB, Wu) => {
        Wu.exports = !1
    }
    );
    var En = u( (vB, ku) => {
        var ju = ge()
          , gI = Object.defineProperty;
        ku.exports = function(e, t) {
            try {
                gI(ju, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                ju[e] = t
            }
            return t
        }
    }
    );
    var gn = u( (hB, Ku) => {
        var _I = ge()
          , yI = En()
          , Hu = "__core-js_shared__"
          , mI = _I[Hu] || yI(Hu, {});
        Ku.exports = mI
    }
    );
    var so = u( (EB, Yu) => {
        var II = Bu()
          , zu = gn();
        (Yu.exports = function(e, t) {
            return zu[e] || (zu[e] = t !== void 0 ? t : {})
        }
        )("versions", []).push({
            version: "3.19.0",
            mode: II ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    }
    );
    var $u = u( (gB, Qu) => {
        var TI = ge()
          , OI = Zi()
          , bI = TI.Object;
        Qu.exports = function(e) {
            return bI(OI(e))
        }
    }
    );
    var Ot = u( (_B, Zu) => {
        var SI = Ze()
          , AI = $u()
          , wI = SI({}.hasOwnProperty);
        Zu.exports = Object.hasOwn || function(t, r) {
            return wI(AI(t), r)
        }
    }
    );
    var co = u( (mB, ic) => {
        var qI = ge()
          , PI = so()
          , ec = Ot()
          , LI = uo()
          , tc = to()
          , nc = ro()
          , $t = PI("wks")
          , Dt = qI.Symbol
          , rc = Dt && Dt.for
          , MI = nc ? Dt : Dt && Dt.withoutSetter || LI;
        ic.exports = function(e) {
            if (!ec($t, e) || !(tc || typeof $t[e] == "string")) {
                var t = "Symbol." + e;
                tc && ec(Dt, e) ? $t[e] = Dt[e] : nc && rc ? $t[e] = rc(t) : $t[e] = MI(t)
            }
            return $t[e]
        }
    }
    );
    var uc = u( (IB, sc) => {
        var DI = ge()
          , FI = vn()
          , oc = Qt()
          , ac = no()
          , GI = Xu()
          , XI = Vu()
          , UI = co()
          , VI = DI.TypeError
          , WI = UI("toPrimitive");
        sc.exports = function(e, t) {
            if (!oc(e) || ac(e))
                return e;
            var r = GI(e, WI), n;
            if (r) {
                if (t === void 0 && (t = "default"),
                n = FI(r, e, t),
                !oc(n) || ac(n))
                    return n;
                throw VI("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"),
            XI(e, t)
        }
    }
    );
    var lo = u( (TB, cc) => {
        var BI = uc()
          , jI = no();
        cc.exports = function(e) {
            var t = BI(e, "string");
            return jI(t) ? t : t + ""
        }
    }
    );
    var po = u( (OB, fc) => {
        var kI = ge()
          , lc = Qt()
          , fo = kI.document
          , HI = lc(fo) && lc(fo.createElement);
        fc.exports = function(e) {
            return HI ? fo.createElement(e) : {}
        }
    }
    );
    var vo = u( (bB, dc) => {
        var KI = Mt()
          , zI = Yt()
          , YI = po();
        dc.exports = !KI && !zI(function() {
            return Object.defineProperty(YI("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    }
    );
    var ho = u(vc => {
        var QI = Mt()
          , $I = vn()
          , ZI = ou()
          , JI = zi()
          , eT = Rr()
          , tT = lo()
          , rT = Ot()
          , nT = vo()
          , pc = Object.getOwnPropertyDescriptor;
        vc.f = QI ? pc : function(t, r) {
            if (t = eT(t),
            r = tT(r),
            nT)
                try {
                    return pc(t, r)
                } catch {}
            if (rT(t, r))
                return JI(!$I(ZI.f, t, r), t[r])
        }
    }
    );
    var Nr = u( (AB, Ec) => {
        var hc = ge()
          , iT = Qt()
          , oT = hc.String
          , aT = hc.TypeError;
        Ec.exports = function(e) {
            if (iT(e))
                return e;
            throw aT(oT(e) + " is not an object")
        }
    }
    );
    var xr = u(yc => {
        var sT = ge()
          , uT = Mt()
          , cT = vo()
          , gc = Nr()
          , lT = lo()
          , fT = sT.TypeError
          , _c = Object.defineProperty;
        yc.f = uT ? _c : function(t, r, n) {
            if (gc(t),
            r = lT(r),
            gc(n),
            cT)
                try {
                    return _c(t, r, n)
                } catch {}
            if ("get"in n || "set"in n)
                throw fT("Accessors not supported");
            return "value"in n && (t[r] = n.value),
            t
        }
    }
    );
    var _n = u( (RB, mc) => {
        var dT = Mt()
          , pT = xr()
          , vT = zi();
        mc.exports = dT ? function(e, t, r) {
            return pT.f(e, t, vT(1, r))
        }
        : function(e, t, r) {
            return e[t] = r,
            e
        }
    }
    );
    var go = u( (CB, Ic) => {
        var hT = Ze()
          , ET = ut()
          , Eo = gn()
          , gT = hT(Function.toString);
        ET(Eo.inspectSource) || (Eo.inspectSource = function(e) {
            return gT(e)
        }
        );
        Ic.exports = Eo.inspectSource
    }
    );
    var bc = u( (NB, Oc) => {
        var _T = ge()
          , yT = ut()
          , mT = go()
          , Tc = _T.WeakMap;
        Oc.exports = yT(Tc) && /native code/.test(mT(Tc))
    }
    );
    var _o = u( (xB, Ac) => {
        var IT = so()
          , TT = uo()
          , Sc = IT("keys");
        Ac.exports = function(e) {
            return Sc[e] || (Sc[e] = TT(e))
        }
    }
    );
    var yn = u( (qB, wc) => {
        wc.exports = {}
    }
    );
    var Pc = u( (PB, qc) => {
        var OT = bc(), xc = ge(), yo = Ze(), bT = Qt(), ST = _n(), mo = Ot(), Io = gn(), AT = _o(), wT = yn(), Rc = "Object already initialized", Oo = xc.TypeError, RT = xc.WeakMap, mn, qr, In, CT = function(e) {
            return In(e) ? qr(e) : mn(e, {})
        }, NT = function(e) {
            return function(t) {
                var r;
                if (!bT(t) || (r = qr(t)).type !== e)
                    throw Oo("Incompatible receiver, " + e + " required");
                return r
            }
        };
        OT || Io.state ? (bt = Io.state || (Io.state = new RT),
        Cc = yo(bt.get),
        To = yo(bt.has),
        Nc = yo(bt.set),
        mn = function(e, t) {
            if (To(bt, e))
                throw new Oo(Rc);
            return t.facade = e,
            Nc(bt, e, t),
            t
        }
        ,
        qr = function(e) {
            return Cc(bt, e) || {}
        }
        ,
        In = function(e) {
            return To(bt, e)
        }
        ) : (Ft = AT("state"),
        wT[Ft] = !0,
        mn = function(e, t) {
            if (mo(e, Ft))
                throw new Oo(Rc);
            return t.facade = e,
            ST(e, Ft, t),
            t
        }
        ,
        qr = function(e) {
            return mo(e, Ft) ? e[Ft] : {}
        }
        ,
        In = function(e) {
            return mo(e, Ft)
        }
        );
        var bt, Cc, To, Nc, Ft;
        qc.exports = {
            set: mn,
            get: qr,
            has: In,
            enforce: CT,
            getterFor: NT
        }
    }
    );
    var Dc = u( (LB, Mc) => {
        var bo = Mt()
          , xT = Ot()
          , Lc = Function.prototype
          , qT = bo && Object.getOwnPropertyDescriptor
          , So = xT(Lc, "name")
          , PT = So && function() {}
        .name === "something"
          , LT = So && (!bo || bo && qT(Lc, "name").configurable);
        Mc.exports = {
            EXISTS: So,
            PROPER: PT,
            CONFIGURABLE: LT
        }
    }
    );
    var Vc = u( (MB, Uc) => {
        var MT = ge()
          , Fc = ut()
          , DT = Ot()
          , Gc = _n()
          , FT = En()
          , GT = go()
          , Xc = Pc()
          , XT = Dc().CONFIGURABLE
          , UT = Xc.get
          , VT = Xc.enforce
          , WT = String(String).split("String");
        (Uc.exports = function(e, t, r, n) {
            var o = n ? !!n.unsafe : !1, i = n ? !!n.enumerable : !1, a = n ? !!n.noTargetGet : !1, s = n && n.name !== void 0 ? n.name : t, c;
            if (Fc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!DT(r, "name") || XT && r.name !== s) && Gc(r, "name", s),
            c = VT(r),
            c.source || (c.source = WT.join(typeof s == "string" ? s : ""))),
            e === MT) {
                i ? e[t] = r : FT(t, r);
                return
            } else
                o ? !a && e[t] && (i = !0) : delete e[t];
            i ? e[t] = r : Gc(e, t, r)
        }
        )(Function.prototype, "toString", function() {
            return Fc(this) && UT(this).source || GT(this)
        })
    }
    );
    var Ao = u( (DB, Wc) => {
        var BT = Math.ceil
          , jT = Math.floor;
        Wc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? jT : BT)(t)
        }
    }
    );
    var jc = u( (FB, Bc) => {
        var kT = Ao()
          , HT = Math.max
          , KT = Math.min;
        Bc.exports = function(e, t) {
            var r = kT(e);
            return r < 0 ? HT(r + t, 0) : KT(r, t)
        }
    }
    );
    var Hc = u( (GB, kc) => {
        var zT = Ao()
          , YT = Math.min;
        kc.exports = function(e) {
            return e > 0 ? YT(zT(e), 9007199254740991) : 0
        }
    }
    );
    var zc = u( (XB, Kc) => {
        var QT = Hc();
        Kc.exports = function(e) {
            return QT(e.length)
        }
    }
    );
    var wo = u( (UB, Qc) => {
        var $T = Rr()
          , ZT = jc()
          , JT = zc()
          , Yc = function(e) {
            return function(t, r, n) {
                var o = $T(t), i = JT(o), a = ZT(n, i), s;
                if (e && r != r) {
                    for (; i > a; )
                        if (s = o[a++],
                        s != s)
                            return !0
                } else
                    for (; i > a; a++)
                        if ((e || a in o) && o[a] === r)
                            return e || a || 0;
                return !e && -1
            }
        };
        Qc.exports = {
            includes: Yc(!0),
            indexOf: Yc(!1)
        }
    }
    );
    var Co = u( (VB, Zc) => {
        var eO = Ze()
          , Ro = Ot()
          , tO = Rr()
          , rO = wo().indexOf
          , nO = yn()
          , $c = eO([].push);
        Zc.exports = function(e, t) {
            var r = tO(e), n = 0, o = [], i;
            for (i in r)
                !Ro(nO, i) && Ro(r, i) && $c(o, i);
            for (; t.length > n; )
                Ro(r, i = t[n++]) && (~rO(o, i) || $c(o, i));
            return o
        }
    }
    );
    var Tn = u( (WB, Jc) => {
        Jc.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    );
    var tl = u(el => {
        var iO = Co()
          , oO = Tn()
          , aO = oO.concat("length", "prototype");
        el.f = Object.getOwnPropertyNames || function(t) {
            return iO(t, aO)
        }
    }
    );
    var nl = u(rl => {
        rl.f = Object.getOwnPropertySymbols
    }
    );
    var ol = u( (kB, il) => {
        var sO = Cr()
          , uO = Ze()
          , cO = tl()
          , lO = nl()
          , fO = Nr()
          , dO = uO([].concat);
        il.exports = sO("Reflect", "ownKeys") || function(t) {
            var r = cO.f(fO(t))
              , n = lO.f;
            return n ? dO(r, n(t)) : r
        }
    }
    );
    var sl = u( (HB, al) => {
        var pO = Ot()
          , vO = ol()
          , hO = ho()
          , EO = xr();
        al.exports = function(e, t) {
            for (var r = vO(t), n = EO.f, o = hO.f, i = 0; i < r.length; i++) {
                var a = r[i];
                pO(e, a) || n(e, a, o(t, a))
            }
        }
    }
    );
    var cl = u( (KB, ul) => {
        var gO = Yt()
          , _O = ut()
          , yO = /#|\.prototype\./
          , Pr = function(e, t) {
            var r = IO[mO(e)];
            return r == OO ? !0 : r == TO ? !1 : _O(t) ? gO(t) : !!t
        }
          , mO = Pr.normalize = function(e) {
            return String(e).replace(yO, ".").toLowerCase()
        }
          , IO = Pr.data = {}
          , TO = Pr.NATIVE = "N"
          , OO = Pr.POLYFILL = "P";
        ul.exports = Pr
    }
    );
    var fl = u( (zB, ll) => {
        var No = ge()
          , bO = ho().f
          , SO = _n()
          , AO = Vc()
          , wO = En()
          , RO = sl()
          , CO = cl();
        ll.exports = function(e, t) {
            var r = e.target, n = e.global, o = e.stat, i, a, s, c, d, h;
            if (n ? a = No : o ? a = No[r] || wO(r, {}) : a = (No[r] || {}).prototype,
            a)
                for (s in t) {
                    if (d = t[s],
                    e.noTargetGet ? (h = bO(a, s),
                    c = h && h.value) : c = a[s],
                    i = CO(n ? s : r + (o ? "." : "#") + s, e.forced),
                    !i && c !== void 0) {
                        if (typeof d == typeof c)
                            continue;
                        RO(d, c)
                    }
                    (e.sham || c && c.sham) && SO(d, "sham", !0),
                    AO(a, s, d, e)
                }
        }
    }
    );
    var pl = u( (YB, dl) => {
        var NO = Co()
          , xO = Tn();
        dl.exports = Object.keys || function(t) {
            return NO(t, xO)
        }
    }
    );
    var hl = u( (QB, vl) => {
        var qO = Mt()
          , PO = xr()
          , LO = Nr()
          , MO = Rr()
          , DO = pl();
        vl.exports = qO ? Object.defineProperties : function(t, r) {
            LO(t);
            for (var n = MO(r), o = DO(r), i = o.length, a = 0, s; i > a; )
                PO.f(t, s = o[a++], n[s]);
            return t
        }
    }
    );
    var gl = u( ($B, El) => {
        var FO = Cr();
        El.exports = FO("document", "documentElement")
    }
    );
    var Sl = u( (ZB, bl) => {
        var GO = Nr(), XO = hl(), _l = Tn(), UO = yn(), VO = gl(), WO = po(), BO = _o(), yl = ">", ml = "<", qo = "prototype", Po = "script", Tl = BO("IE_PROTO"), xo = function() {}, Ol = function(e) {
            return ml + Po + yl + e + ml + "/" + Po + yl
        }, Il = function(e) {
            e.write(Ol("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }, jO = function() {
            var e = WO("iframe"), t = "java" + Po + ":", r;
            return e.style.display = "none",
            VO.appendChild(e),
            e.src = String(t),
            r = e.contentWindow.document,
            r.open(),
            r.write(Ol("document.F=Object")),
            r.close(),
            r.F
        }, On, bn = function() {
            try {
                On = new ActiveXObject("htmlfile")
            } catch {}
            bn = typeof document < "u" ? document.domain && On ? Il(On) : jO() : Il(On);
            for (var e = _l.length; e--; )
                delete bn[qo][_l[e]];
            return bn()
        };
        UO[Tl] = !0;
        bl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (xo[qo] = GO(t),
            n = new xo,
            xo[qo] = null,
            n[Tl] = t) : n = bn(),
            r === void 0 ? n : XO(n, r)
        }
    }
    );
    var wl = u( (JB, Al) => {
        var kO = co()
          , HO = Sl()
          , KO = xr()
          , Lo = kO("unscopables")
          , Mo = Array.prototype;
        Mo[Lo] == null && KO.f(Mo, Lo, {
            configurable: !0,
            value: HO(null)
        });
        Al.exports = function(e) {
            Mo[Lo][e] = !0
        }
    }
    );
    var Rl = u( () => {
        "use strict";
        var zO = fl()
          , YO = wo().includes
          , QO = wl();
        zO({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return YO(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        QO("includes")
    }
    );
    var Nl = u( (rj, Cl) => {
        var $O = ge()
          , ZO = Ze();
        Cl.exports = function(e, t) {
            return ZO($O[e].prototype[t])
        }
    }
    );
    var ql = u( (nj, xl) => {
        Rl();
        var JO = Nl();
        xl.exports = JO("Array", "includes")
    }
    );
    var Ll = u( (ij, Pl) => {
        var eb = ql();
        Pl.exports = eb
    }
    );
    var Dl = u( (oj, Ml) => {
        var tb = Ll();
        Ml.exports = tb
    }
    );
    var Do = u( (aj, Fl) => {
        var rb = typeof global == "object" && global && global.Object === Object && global;
        Fl.exports = rb
    }
    );
    var et = u( (sj, Gl) => {
        var nb = Do()
          , ib = typeof self == "object" && self && self.Object === Object && self
          , ob = nb || ib || Function("return this")();
        Gl.exports = ob
    }
    );
    var Zt = u( (uj, Xl) => {
        var ab = et()
          , sb = ab.Symbol;
        Xl.exports = sb
    }
    );
    var Bl = u( (cj, Wl) => {
        var Ul = Zt()
          , Vl = Object.prototype
          , ub = Vl.hasOwnProperty
          , cb = Vl.toString
          , Lr = Ul ? Ul.toStringTag : void 0;
        function lb(e) {
            var t = ub.call(e, Lr)
              , r = e[Lr];
            try {
                e[Lr] = void 0;
                var n = !0
            } catch {}
            var o = cb.call(e);
            return n && (t ? e[Lr] = r : delete e[Lr]),
            o
        }
        Wl.exports = lb
    }
    );
    var kl = u( (lj, jl) => {
        var fb = Object.prototype
          , db = fb.toString;
        function pb(e) {
            return db.call(e)
        }
        jl.exports = pb
    }
    );
    var St = u( (fj, zl) => {
        var Hl = Zt()
          , vb = Bl()
          , hb = kl()
          , Eb = "[object Null]"
          , gb = "[object Undefined]"
          , Kl = Hl ? Hl.toStringTag : void 0;
        function _b(e) {
            return e == null ? e === void 0 ? gb : Eb : Kl && Kl in Object(e) ? vb(e) : hb(e)
        }
        zl.exports = _b
    }
    );
    var Fo = u( (dj, Yl) => {
        function yb(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        Yl.exports = yb
    }
    );
    var Go = u( (pj, Ql) => {
        var mb = Fo()
          , Ib = mb(Object.getPrototypeOf, Object);
        Ql.exports = Ib
    }
    );
    var _t = u( (vj, $l) => {
        function Tb(e) {
            return e != null && typeof e == "object"
        }
        $l.exports = Tb
    }
    );
    var Xo = u( (hj, Jl) => {
        var Ob = St()
          , bb = Go()
          , Sb = _t()
          , Ab = "[object Object]"
          , wb = Function.prototype
          , Rb = Object.prototype
          , Zl = wb.toString
          , Cb = Rb.hasOwnProperty
          , Nb = Zl.call(Object);
        function xb(e) {
            if (!Sb(e) || Ob(e) != Ab)
                return !1;
            var t = bb(e);
            if (t === null)
                return !0;
            var r = Cb.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && Zl.call(r) == Nb
        }
        Jl.exports = xb
    }
    );
    var ef = u(Uo => {
        "use strict";
        Object.defineProperty(Uo, "__esModule", {
            value: !0
        });
        Uo.default = qb;
        function qb(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var tf = u( (Wo, Vo) => {
        "use strict";
        Object.defineProperty(Wo, "__esModule", {
            value: !0
        });
        var Pb = ef()
          , Lb = Mb(Pb);
        function Mb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Jt;
        typeof self < "u" ? Jt = self : typeof window < "u" ? Jt = window : typeof global < "u" ? Jt = global : typeof Vo < "u" ? Jt = Vo : Jt = Function("return this")();
        var Db = (0,
        Lb.default)(Jt);
        Wo.default = Db
    }
    );
    var Bo = u(Mr => {
        "use strict";
        Mr.__esModule = !0;
        Mr.ActionTypes = void 0;
        Mr.default = af;
        var Fb = Xo()
          , Gb = of(Fb)
          , Xb = tf()
          , rf = of(Xb);
        function of(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var nf = Mr.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function af(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(af)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var o = e
              , i = t
              , a = []
              , s = a
              , c = !1;
            function d() {
                s === a && (s = a.slice())
            }
            function h() {
                return i
            }
            function p(w) {
                if (typeof w != "function")
                    throw new Error("Expected listener to be a function.");
                var L = !0;
                return d(),
                s.push(w),
                function() {
                    if (L) {
                        L = !1,
                        d();
                        var N = s.indexOf(w);
                        s.splice(N, 1)
                    }
                }
            }
            function _(w) {
                if (!(0,
                Gb.default)(w))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof w.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (c)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    c = !0,
                    i = o(i, w)
                } finally {
                    c = !1
                }
                for (var L = a = s, C = 0; C < L.length; C++)
                    L[C]();
                return w
            }
            function O(w) {
                if (typeof w != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                o = w,
                _({
                    type: nf.INIT
                })
            }
            function S() {
                var w, L = p;
                return w = {
                    subscribe: function(N) {
                        if (typeof N != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function b() {
                            N.next && N.next(h())
                        }
                        b();
                        var M = L(b);
                        return {
                            unsubscribe: M
                        }
                    }
                },
                w[rf.default] = function() {
                    return this
                }
                ,
                w
            }
            return _({
                type: nf.INIT
            }),
            n = {
                dispatch: _,
                subscribe: p,
                getState: h,
                replaceReducer: O
            },
            n[rf.default] = S,
            n
        }
    }
    );
    var ko = u(jo => {
        "use strict";
        jo.__esModule = !0;
        jo.default = Ub;
        function Ub(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var cf = u(Ho => {
        "use strict";
        Ho.__esModule = !0;
        Ho.default = kb;
        var sf = Bo()
          , Vb = Xo()
          , yj = uf(Vb)
          , Wb = ko()
          , mj = uf(Wb);
        function uf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function Bb(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function jb(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: sf.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: o
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + sf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function kb(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                typeof e[o] == "function" && (r[o] = e[o])
            }
            var i = Object.keys(r);
            if (!1)
                var a;
            var s;
            try {
                jb(r)
            } catch (c) {
                s = c
            }
            return function() {
                var d = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , h = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var p;
                for (var _ = !1, O = {}, S = 0; S < i.length; S++) {
                    var w = i[S]
                      , L = r[w]
                      , C = d[w]
                      , N = L(C, h);
                    if (typeof N > "u") {
                        var b = Bb(w, h);
                        throw new Error(b)
                    }
                    O[w] = N,
                    _ = _ || N !== C
                }
                return _ ? O : d
            }
        }
    }
    );
    var ff = u(Ko => {
        "use strict";
        Ko.__esModule = !0;
        Ko.default = Hb;
        function lf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function Hb(e, t) {
            if (typeof e == "function")
                return lf(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
                var i = r[o]
                  , a = e[i];
                typeof a == "function" && (n[i] = lf(a, t))
            }
            return n
        }
    }
    );
    var Yo = u(zo => {
        "use strict";
        zo.__esModule = !0;
        zo.default = Kb;
        function Kb() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(i) {
                    return i
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , o = t.slice(0, -1);
            return function() {
                return o.reduceRight(function(i, a) {
                    return a(i)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var df = u(Qo => {
        "use strict";
        Qo.__esModule = !0;
        var zb = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        Qo.default = Zb;
        var Yb = Yo()
          , Qb = $b(Yb);
        function $b(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function Zb() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(o, i, a) {
                    var s = n(o, i, a)
                      , c = s.dispatch
                      , d = []
                      , h = {
                        getState: s.getState,
                        dispatch: function(_) {
                            return c(_)
                        }
                    };
                    return d = t.map(function(p) {
                        return p(h)
                    }),
                    c = Qb.default.apply(void 0, d)(s.dispatch),
                    zb({}, s, {
                        dispatch: c
                    })
                }
            }
        }
    }
    );
    var $o = u(je => {
        "use strict";
        je.__esModule = !0;
        je.compose = je.applyMiddleware = je.bindActionCreators = je.combineReducers = je.createStore = void 0;
        var Jb = Bo()
          , eS = er(Jb)
          , tS = cf()
          , rS = er(tS)
          , nS = ff()
          , iS = er(nS)
          , oS = df()
          , aS = er(oS)
          , sS = Yo()
          , uS = er(sS)
          , cS = ko()
          , Sj = er(cS);
        function er(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        je.createStore = eS.default;
        je.combineReducers = rS.default;
        je.bindActionCreators = iS.default;
        je.applyMiddleware = aS.default;
        je.compose = uS.default
    }
    );
    var pf = u(we => {
        "use strict";
        Object.defineProperty(we, "__esModule", {
            value: !0
        });
        we.QuickEffectIds = we.QuickEffectDirectionConsts = we.EventTypeConsts = we.EventLimitAffectedElements = we.EventContinuousMouseAxes = we.EventBasedOn = we.EventAppliesTo = void 0;
        var lS = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        };
        we.EventTypeConsts = lS;
        var fS = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        };
        we.EventAppliesTo = fS;
        var dS = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        };
        we.EventBasedOn = dS;
        var pS = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        };
        we.EventContinuousMouseAxes = pS;
        var vS = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        };
        we.EventLimitAffectedElements = vS;
        var hS = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        };
        we.QuickEffectIds = hS;
        var ES = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        };
        we.QuickEffectDirectionConsts = ES
    }
    );
    var Zo = u(tr => {
        "use strict";
        Object.defineProperty(tr, "__esModule", {
            value: !0
        });
        tr.ActionTypeConsts = tr.ActionAppliesTo = void 0;
        var gS = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        };
        tr.ActionTypeConsts = gS;
        var _S = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        };
        tr.ActionAppliesTo = _S
    }
    );
    var vf = u(Sn => {
        "use strict";
        Object.defineProperty(Sn, "__esModule", {
            value: !0
        });
        Sn.InteractionTypeConsts = void 0;
        var yS = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        };
        Sn.InteractionTypeConsts = yS
    }
    );
    var hf = u(An => {
        "use strict";
        Object.defineProperty(An, "__esModule", {
            value: !0
        });
        An.ReducedMotionTypes = void 0;
        var mS = Zo()
          , {TRANSFORM_MOVE: IS, TRANSFORM_SCALE: TS, TRANSFORM_ROTATE: OS, TRANSFORM_SKEW: bS, STYLE_SIZE: SS, STYLE_FILTER: AS, STYLE_FONT_VARIATION: wS} = mS.ActionTypeConsts
          , RS = {
            [IS]: !0,
            [TS]: !0,
            [OS]: !0,
            [bS]: !0,
            [SS]: !0,
            [AS]: !0,
            [wS]: !0
        };
        An.ReducedMotionTypes = RS
    }
    );
    var Ef = u(ie => {
        "use strict";
        Object.defineProperty(ie, "__esModule", {
            value: !0
        });
        ie.IX2_VIEWPORT_WIDTH_CHANGED = ie.IX2_TEST_FRAME_RENDERED = ie.IX2_STOP_REQUESTED = ie.IX2_SESSION_STOPPED = ie.IX2_SESSION_STARTED = ie.IX2_SESSION_INITIALIZED = ie.IX2_RAW_DATA_IMPORTED = ie.IX2_PREVIEW_REQUESTED = ie.IX2_PLAYBACK_REQUESTED = ie.IX2_PARAMETER_CHANGED = ie.IX2_MEDIA_QUERIES_DEFINED = ie.IX2_INSTANCE_STARTED = ie.IX2_INSTANCE_REMOVED = ie.IX2_INSTANCE_ADDED = ie.IX2_EVENT_STATE_CHANGED = ie.IX2_EVENT_LISTENER_ADDED = ie.IX2_ELEMENT_STATE_CHANGED = ie.IX2_CLEAR_REQUESTED = ie.IX2_ANIMATION_FRAME_CHANGED = ie.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
        var CS = "IX2_RAW_DATA_IMPORTED";
        ie.IX2_RAW_DATA_IMPORTED = CS;
        var NS = "IX2_SESSION_INITIALIZED";
        ie.IX2_SESSION_INITIALIZED = NS;
        var xS = "IX2_SESSION_STARTED";
        ie.IX2_SESSION_STARTED = xS;
        var qS = "IX2_SESSION_STOPPED";
        ie.IX2_SESSION_STOPPED = qS;
        var PS = "IX2_PREVIEW_REQUESTED";
        ie.IX2_PREVIEW_REQUESTED = PS;
        var LS = "IX2_PLAYBACK_REQUESTED";
        ie.IX2_PLAYBACK_REQUESTED = LS;
        var MS = "IX2_STOP_REQUESTED";
        ie.IX2_STOP_REQUESTED = MS;
        var DS = "IX2_CLEAR_REQUESTED";
        ie.IX2_CLEAR_REQUESTED = DS;
        var FS = "IX2_EVENT_LISTENER_ADDED";
        ie.IX2_EVENT_LISTENER_ADDED = FS;
        var GS = "IX2_EVENT_STATE_CHANGED";
        ie.IX2_EVENT_STATE_CHANGED = GS;
        var XS = "IX2_ANIMATION_FRAME_CHANGED";
        ie.IX2_ANIMATION_FRAME_CHANGED = XS;
        var US = "IX2_PARAMETER_CHANGED";
        ie.IX2_PARAMETER_CHANGED = US;
        var VS = "IX2_INSTANCE_ADDED";
        ie.IX2_INSTANCE_ADDED = VS;
        var WS = "IX2_INSTANCE_STARTED";
        ie.IX2_INSTANCE_STARTED = WS;
        var BS = "IX2_INSTANCE_REMOVED";
        ie.IX2_INSTANCE_REMOVED = BS;
        var jS = "IX2_ELEMENT_STATE_CHANGED";
        ie.IX2_ELEMENT_STATE_CHANGED = jS;
        var kS = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        ie.IX2_ACTION_LIST_PLAYBACK_CHANGED = kS;
        var HS = "IX2_VIEWPORT_WIDTH_CHANGED";
        ie.IX2_VIEWPORT_WIDTH_CHANGED = HS;
        var KS = "IX2_MEDIA_QUERIES_DEFINED";
        ie.IX2_MEDIA_QUERIES_DEFINED = KS;
        var zS = "IX2_TEST_FRAME_RENDERED";
        ie.IX2_TEST_FRAME_RENDERED = zS
    }
    );
    var gf = u(x => {
        "use strict";
        Object.defineProperty(x, "__esModule", {
            value: !0
        });
        x.W_MOD_JS = x.W_MOD_IX = x.WILL_CHANGE = x.WIDTH = x.WF_PAGE = x.TRANSLATE_Z = x.TRANSLATE_Y = x.TRANSLATE_X = x.TRANSLATE_3D = x.TRANSFORM = x.SKEW_Y = x.SKEW_X = x.SKEW = x.SIBLINGS = x.SCALE_Z = x.SCALE_Y = x.SCALE_X = x.SCALE_3D = x.ROTATE_Z = x.ROTATE_Y = x.ROTATE_X = x.RENDER_TRANSFORM = x.RENDER_STYLE = x.RENDER_PLUGIN = x.RENDER_GENERAL = x.PRESERVE_3D = x.PLAIN_OBJECT = x.PARENT = x.OPACITY = x.IX2_ID_DELIMITER = x.IMMEDIATE_CHILDREN = x.HTML_ELEMENT = x.HEIGHT = x.FONT_VARIATION_SETTINGS = x.FLEX = x.FILTER = x.DISPLAY = x.CONFIG_Z_VALUE = x.CONFIG_Z_UNIT = x.CONFIG_Y_VALUE = x.CONFIG_Y_UNIT = x.CONFIG_X_VALUE = x.CONFIG_X_UNIT = x.CONFIG_VALUE = x.CONFIG_UNIT = x.COMMA_DELIMITER = x.COLOR = x.COLON_DELIMITER = x.CHILDREN = x.BOUNDARY_SELECTOR = x.BORDER_COLOR = x.BAR_DELIMITER = x.BACKGROUND_COLOR = x.BACKGROUND = x.AUTO = x.ABSTRACT_NODE = void 0;
        var YS = "|";
        x.IX2_ID_DELIMITER = YS;
        var QS = "data-wf-page";
        x.WF_PAGE = QS;
        var $S = "w-mod-js";
        x.W_MOD_JS = $S;
        var ZS = "w-mod-ix";
        x.W_MOD_IX = ZS;
        var JS = ".w-dyn-item";
        x.BOUNDARY_SELECTOR = JS;
        var eA = "xValue";
        x.CONFIG_X_VALUE = eA;
        var tA = "yValue";
        x.CONFIG_Y_VALUE = tA;
        var rA = "zValue";
        x.CONFIG_Z_VALUE = rA;
        var nA = "value";
        x.CONFIG_VALUE = nA;
        var iA = "xUnit";
        x.CONFIG_X_UNIT = iA;
        var oA = "yUnit";
        x.CONFIG_Y_UNIT = oA;
        var aA = "zUnit";
        x.CONFIG_Z_UNIT = aA;
        var sA = "unit";
        x.CONFIG_UNIT = sA;
        var uA = "transform";
        x.TRANSFORM = uA;
        var cA = "translateX";
        x.TRANSLATE_X = cA;
        var lA = "translateY";
        x.TRANSLATE_Y = lA;
        var fA = "translateZ";
        x.TRANSLATE_Z = fA;
        var dA = "translate3d";
        x.TRANSLATE_3D = dA;
        var pA = "scaleX";
        x.SCALE_X = pA;
        var vA = "scaleY";
        x.SCALE_Y = vA;
        var hA = "scaleZ";
        x.SCALE_Z = hA;
        var EA = "scale3d";
        x.SCALE_3D = EA;
        var gA = "rotateX";
        x.ROTATE_X = gA;
        var _A = "rotateY";
        x.ROTATE_Y = _A;
        var yA = "rotateZ";
        x.ROTATE_Z = yA;
        var mA = "skew";
        x.SKEW = mA;
        var IA = "skewX";
        x.SKEW_X = IA;
        var TA = "skewY";
        x.SKEW_Y = TA;
        var OA = "opacity";
        x.OPACITY = OA;
        var bA = "filter";
        x.FILTER = bA;
        var SA = "font-variation-settings";
        x.FONT_VARIATION_SETTINGS = SA;
        var AA = "width";
        x.WIDTH = AA;
        var wA = "height";
        x.HEIGHT = wA;
        var RA = "backgroundColor";
        x.BACKGROUND_COLOR = RA;
        var CA = "background";
        x.BACKGROUND = CA;
        var NA = "borderColor";
        x.BORDER_COLOR = NA;
        var xA = "color";
        x.COLOR = xA;
        var qA = "display";
        x.DISPLAY = qA;
        var PA = "flex";
        x.FLEX = PA;
        var LA = "willChange";
        x.WILL_CHANGE = LA;
        var MA = "AUTO";
        x.AUTO = MA;
        var DA = ",";
        x.COMMA_DELIMITER = DA;
        var FA = ":";
        x.COLON_DELIMITER = FA;
        var GA = "|";
        x.BAR_DELIMITER = GA;
        var XA = "CHILDREN";
        x.CHILDREN = XA;
        var UA = "IMMEDIATE_CHILDREN";
        x.IMMEDIATE_CHILDREN = UA;
        var VA = "SIBLINGS";
        x.SIBLINGS = VA;
        var WA = "PARENT";
        x.PARENT = WA;
        var BA = "preserve-3d";
        x.PRESERVE_3D = BA;
        var jA = "HTML_ELEMENT";
        x.HTML_ELEMENT = jA;
        var kA = "PLAIN_OBJECT";
        x.PLAIN_OBJECT = kA;
        var HA = "ABSTRACT_NODE";
        x.ABSTRACT_NODE = HA;
        var KA = "RENDER_TRANSFORM";
        x.RENDER_TRANSFORM = KA;
        var zA = "RENDER_GENERAL";
        x.RENDER_GENERAL = zA;
        var YA = "RENDER_STYLE";
        x.RENDER_STYLE = YA;
        var QA = "RENDER_PLUGIN";
        x.RENDER_PLUGIN = QA
    }
    );
    var Xe = u(Oe => {
        "use strict";
        var _f = Lt().default;
        Object.defineProperty(Oe, "__esModule", {
            value: !0
        });
        var wn = {
            IX2EngineActionTypes: !0,
            IX2EngineConstants: !0
        };
        Oe.IX2EngineConstants = Oe.IX2EngineActionTypes = void 0;
        var Jo = pf();
        Object.keys(Jo).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(wn, e) || e in Oe && Oe[e] === Jo[e] || Object.defineProperty(Oe, e, {
                enumerable: !0,
                get: function() {
                    return Jo[e]
                }
            })
        });
        var ea = Zo();
        Object.keys(ea).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(wn, e) || e in Oe && Oe[e] === ea[e] || Object.defineProperty(Oe, e, {
                enumerable: !0,
                get: function() {
                    return ea[e]
                }
            })
        });
        var ta = vf();
        Object.keys(ta).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(wn, e) || e in Oe && Oe[e] === ta[e] || Object.defineProperty(Oe, e, {
                enumerable: !0,
                get: function() {
                    return ta[e]
                }
            })
        });
        var ra = hf();
        Object.keys(ra).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(wn, e) || e in Oe && Oe[e] === ra[e] || Object.defineProperty(Oe, e, {
                enumerable: !0,
                get: function() {
                    return ra[e]
                }
            })
        });
        var $A = _f(Ef());
        Oe.IX2EngineActionTypes = $A;
        var ZA = _f(gf());
        Oe.IX2EngineConstants = ZA
    }
    );
    var yf = u(Rn => {
        "use strict";
        Object.defineProperty(Rn, "__esModule", {
            value: !0
        });
        Rn.ixData = void 0;
        var JA = Xe()
          , {IX2_RAW_DATA_IMPORTED: e0} = JA.IX2EngineActionTypes
          , t0 = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case e0:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
        ;
        Rn.ixData = t0
    }
    );
    var rr = u( (Mj, yt) => {
        function na() {
            return yt.exports = na = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            yt.exports.__esModule = !0,
            yt.exports.default = yt.exports,
            na.apply(this, arguments)
        }
        yt.exports = na,
        yt.exports.__esModule = !0,
        yt.exports.default = yt.exports
    }
    );
    var nr = u(ye => {
        "use strict";
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        var r0 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        ye.clone = Nn;
        ye.addLast = Tf;
        ye.addFirst = Of;
        ye.removeLast = bf;
        ye.removeFirst = Sf;
        ye.insert = Af;
        ye.removeAt = wf;
        ye.replaceAt = Rf;
        ye.getIn = xn;
        ye.set = qn;
        ye.setIn = Pn;
        ye.update = Nf;
        ye.updateIn = xf;
        ye.merge = qf;
        ye.mergeDeep = Pf;
        ye.mergeIn = Lf;
        ye.omit = Mf;
        ye.addDefaults = Df;
        var mf = "INVALID_ARGS";
        function If(e) {
            throw new Error(e)
        }
        function ia(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var n0 = {}.hasOwnProperty;
        function Nn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = ia(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                r[o] = e[o]
            }
            return r
        }
        function Ue(e, t, r) {
            var n = r;
            n == null && If(mf);
            for (var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++)
                a[s - 3] = arguments[s];
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                if (d != null) {
                    var h = ia(d);
                    if (h.length)
                        for (var p = 0; p <= h.length; p++) {
                            var _ = h[p];
                            if (!(e && n[_] !== void 0)) {
                                var O = d[_];
                                t && Cn(n[_]) && Cn(O) && (O = Ue(e, t, n[_], O)),
                                !(O === void 0 || O === n[_]) && (o || (o = !0,
                                n = Nn(n)),
                                n[_] = O)
                            }
                        }
                }
            }
            return n
        }
        function Cn(e) {
            var t = typeof e > "u" ? "undefined" : r0(e);
            return e != null && (t === "object" || t === "function")
        }
        function Tf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function Of(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function bf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Sf(e) {
            return e.length ? e.slice(1) : e
        }
        function Af(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function wf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function Rf(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, o = Array(n), i = 0; i < n; i++)
                o[i] = e[i];
            return o[t] = r,
            o
        }
        function xn(e, t) {
            if (!Array.isArray(t) && If(mf),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (r = r?.[o],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function qn(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , o = e ?? n;
            if (o[t] === r)
                return o;
            var i = Nn(o);
            return i[t] = r,
            i
        }
        function Cf(e, t, r, n) {
            var o = void 0
              , i = t[n];
            if (n === t.length - 1)
                o = r;
            else {
                var a = Cn(e) && Cn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
                o = Cf(a, t, r, n + 1)
            }
            return qn(e, i, o)
        }
        function Pn(e, t, r) {
            return t.length ? Cf(e, t, r, 0) : r
        }
        function Nf(e, t, r) {
            var n = e?.[t]
              , o = r(n);
            return qn(e, t, o)
        }
        function xf(e, t, r) {
            var n = xn(e, t)
              , o = r(n);
            return Pn(e, t, o)
        }
        function qf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Ue.call.apply(Ue, [null, !1, !1, e, t, r, n, o, i].concat(s)) : Ue(!1, !1, e, t, r, n, o, i)
        }
        function Pf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Ue.call.apply(Ue, [null, !1, !0, e, t, r, n, o, i].concat(s)) : Ue(!1, !0, e, t, r, n, o, i)
        }
        function Lf(e, t, r, n, o, i, a) {
            var s = xn(e, t);
            s == null && (s = {});
            for (var c = void 0, d = arguments.length, h = Array(d > 7 ? d - 7 : 0), p = 7; p < d; p++)
                h[p - 7] = arguments[p];
            return h.length ? c = Ue.call.apply(Ue, [null, !1, !1, s, r, n, o, i, a].concat(h)) : c = Ue(!1, !1, s, r, n, o, i, a),
            Pn(e, t, c)
        }
        function Mf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
                if (n0.call(e, r[o])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var i = {}, a = ia(e), s = 0; s < a.length; s++) {
                var c = a[s];
                r.indexOf(c) >= 0 || (i[c] = e[c])
            }
            return i
        }
        function Df(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++)
                s[c - 6] = arguments[c];
            return s.length ? Ue.call.apply(Ue, [null, !0, !1, e, t, r, n, o, i].concat(s)) : Ue(!0, !1, e, t, r, n, o, i)
        }
        var i0 = {
            clone: Nn,
            addLast: Tf,
            addFirst: Of,
            removeLast: bf,
            removeFirst: Sf,
            insert: Af,
            removeAt: wf,
            replaceAt: Rf,
            getIn: xn,
            set: qn,
            setIn: Pn,
            update: Nf,
            updateIn: xf,
            merge: qf,
            mergeDeep: Pf,
            mergeIn: Lf,
            omit: Mf,
            addDefaults: Df
        };
        ye.default = i0
    }
    );
    var Gf = u(Ln => {
        "use strict";
        var o0 = $e().default;
        Object.defineProperty(Ln, "__esModule", {
            value: !0
        });
        Ln.ixRequest = void 0;
        var a0 = o0(rr())
          , s0 = Xe()
          , u0 = nr()
          , {IX2_PREVIEW_REQUESTED: c0, IX2_PLAYBACK_REQUESTED: l0, IX2_STOP_REQUESTED: f0, IX2_CLEAR_REQUESTED: d0} = s0.IX2EngineActionTypes
          , p0 = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }
          , Ff = Object.create(null, {
            [c0]: {
                value: "preview"
            },
            [l0]: {
                value: "playback"
            },
            [f0]: {
                value: "stop"
            },
            [d0]: {
                value: "clear"
            }
        })
          , v0 = (e=p0, t) => {
            if (t.type in Ff) {
                let r = [Ff[t.type]];
                return (0,
                u0.setIn)(e, [r], (0,
                a0.default)({}, t.payload))
            }
            return e
        }
        ;
        Ln.ixRequest = v0
    }
    );
    var Uf = u(Mn => {
        "use strict";
        Object.defineProperty(Mn, "__esModule", {
            value: !0
        });
        Mn.ixSession = void 0;
        var h0 = Xe()
          , ct = nr()
          , {IX2_SESSION_INITIALIZED: E0, IX2_SESSION_STARTED: g0, IX2_TEST_FRAME_RENDERED: _0, IX2_SESSION_STOPPED: y0, IX2_EVENT_LISTENER_ADDED: m0, IX2_EVENT_STATE_CHANGED: I0, IX2_ANIMATION_FRAME_CHANGED: T0, IX2_ACTION_LIST_PLAYBACK_CHANGED: O0, IX2_VIEWPORT_WIDTH_CHANGED: b0, IX2_MEDIA_QUERIES_DEFINED: S0} = h0.IX2EngineActionTypes
          , Xf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }
          , A0 = 20
          , w0 = (e=Xf, t) => {
            switch (t.type) {
            case E0:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    ct.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case g0:
                return (0,
                ct.set)(e, "active", !0);
            case _0:
                {
                    let {payload: {step: r=A0}} = t;
                    return (0,
                    ct.set)(e, "tick", e.tick + r)
                }
            case y0:
                return Xf;
            case T0:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    ct.set)(e, "tick", r)
                }
            case m0:
                {
                    let r = (0,
                    ct.addLast)(e.eventListeners, t.payload);
                    return (0,
                    ct.set)(e, "eventListeners", r)
                }
            case I0:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    ct.setIn)(e, ["eventState", r], n)
                }
            case O0:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    ct.setIn)(e, ["playbackState", r], n)
                }
            case b0:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , o = n.length
                      , i = null;
                    for (let a = 0; a < o; a++) {
                        let {key: s, min: c, max: d} = n[a];
                        if (r >= c && r <= d) {
                            i = s;
                            break
                        }
                    }
                    return (0,
                    ct.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: i
                    })
                }
            case S0:
                return (0,
                ct.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
        ;
        Mn.ixSession = w0
    }
    );
    var Wf = u( (Xj, Vf) => {
        function R0() {
            this.__data__ = [],
            this.size = 0
        }
        Vf.exports = R0
    }
    );
    var Dn = u( (Uj, Bf) => {
        function C0(e, t) {
            return e === t || e !== e && t !== t
        }
        Bf.exports = C0
    }
    );
    var Dr = u( (Vj, jf) => {
        var N0 = Dn();
        function x0(e, t) {
            for (var r = e.length; r--; )
                if (N0(e[r][0], t))
                    return r;
            return -1
        }
        jf.exports = x0
    }
    );
    var Hf = u( (Wj, kf) => {
        var q0 = Dr()
          , P0 = Array.prototype
          , L0 = P0.splice;
        function M0(e) {
            var t = this.__data__
              , r = q0(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : L0.call(t, r, 1),
            --this.size,
            !0
        }
        kf.exports = M0
    }
    );
    var zf = u( (Bj, Kf) => {
        var D0 = Dr();
        function F0(e) {
            var t = this.__data__
              , r = D0(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        Kf.exports = F0
    }
    );
    var Qf = u( (jj, Yf) => {
        var G0 = Dr();
        function X0(e) {
            return G0(this.__data__, e) > -1
        }
        Yf.exports = X0
    }
    );
    var Zf = u( (kj, $f) => {
        var U0 = Dr();
        function V0(e, t) {
            var r = this.__data__
              , n = U0(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        $f.exports = V0
    }
    );
    var Fr = u( (Hj, Jf) => {
        var W0 = Wf()
          , B0 = Hf()
          , j0 = zf()
          , k0 = Qf()
          , H0 = Zf();
        function ir(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        ir.prototype.clear = W0;
        ir.prototype.delete = B0;
        ir.prototype.get = j0;
        ir.prototype.has = k0;
        ir.prototype.set = H0;
        Jf.exports = ir
    }
    );
    var td = u( (Kj, ed) => {
        var K0 = Fr();
        function z0() {
            this.__data__ = new K0,
            this.size = 0
        }
        ed.exports = z0
    }
    );
    var nd = u( (zj, rd) => {
        function Y0(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        rd.exports = Y0
    }
    );
    var od = u( (Yj, id) => {
        function Q0(e) {
            return this.__data__.get(e)
        }
        id.exports = Q0
    }
    );
    var sd = u( (Qj, ad) => {
        function $0(e) {
            return this.__data__.has(e)
        }
        ad.exports = $0
    }
    );
    var lt = u( ($j, ud) => {
        function Z0(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        ud.exports = Z0
    }
    );
    var oa = u( (Zj, cd) => {
        var J0 = St()
          , ew = lt()
          , tw = "[object AsyncFunction]"
          , rw = "[object Function]"
          , nw = "[object GeneratorFunction]"
          , iw = "[object Proxy]";
        function ow(e) {
            if (!ew(e))
                return !1;
            var t = J0(e);
            return t == rw || t == nw || t == tw || t == iw
        }
        cd.exports = ow
    }
    );
    var fd = u( (Jj, ld) => {
        var aw = et()
          , sw = aw["__core-js_shared__"];
        ld.exports = sw
    }
    );
    var vd = u( (ek, pd) => {
        var aa = fd()
          , dd = function() {
            var e = /[^.]+$/.exec(aa && aa.keys && aa.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function uw(e) {
            return !!dd && dd in e
        }
        pd.exports = uw
    }
    );
    var sa = u( (tk, hd) => {
        var cw = Function.prototype
          , lw = cw.toString;
        function fw(e) {
            if (e != null) {
                try {
                    return lw.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        hd.exports = fw
    }
    );
    var gd = u( (rk, Ed) => {
        var dw = oa()
          , pw = vd()
          , vw = lt()
          , hw = sa()
          , Ew = /[\\^$.*+?()[\]{}|]/g
          , gw = /^\[object .+?Constructor\]$/
          , _w = Function.prototype
          , yw = Object.prototype
          , mw = _w.toString
          , Iw = yw.hasOwnProperty
          , Tw = RegExp("^" + mw.call(Iw).replace(Ew, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function Ow(e) {
            if (!vw(e) || pw(e))
                return !1;
            var t = dw(e) ? Tw : gw;
            return t.test(hw(e))
        }
        Ed.exports = Ow
    }
    );
    var yd = u( (nk, _d) => {
        function bw(e, t) {
            return e?.[t]
        }
        _d.exports = bw
    }
    );
    var At = u( (ik, md) => {
        var Sw = gd()
          , Aw = yd();
        function ww(e, t) {
            var r = Aw(e, t);
            return Sw(r) ? r : void 0
        }
        md.exports = ww
    }
    );
    var Fn = u( (ok, Id) => {
        var Rw = At()
          , Cw = et()
          , Nw = Rw(Cw, "Map");
        Id.exports = Nw
    }
    );
    var Gr = u( (ak, Td) => {
        var xw = At()
          , qw = xw(Object, "create");
        Td.exports = qw
    }
    );
    var Sd = u( (sk, bd) => {
        var Od = Gr();
        function Pw() {
            this.__data__ = Od ? Od(null) : {},
            this.size = 0
        }
        bd.exports = Pw
    }
    );
    var wd = u( (uk, Ad) => {
        function Lw(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        Ad.exports = Lw
    }
    );
    var Cd = u( (ck, Rd) => {
        var Mw = Gr()
          , Dw = "__lodash_hash_undefined__"
          , Fw = Object.prototype
          , Gw = Fw.hasOwnProperty;
        function Xw(e) {
            var t = this.__data__;
            if (Mw) {
                var r = t[e];
                return r === Dw ? void 0 : r
            }
            return Gw.call(t, e) ? t[e] : void 0
        }
        Rd.exports = Xw
    }
    );
    var xd = u( (lk, Nd) => {
        var Uw = Gr()
          , Vw = Object.prototype
          , Ww = Vw.hasOwnProperty;
        function Bw(e) {
            var t = this.__data__;
            return Uw ? t[e] !== void 0 : Ww.call(t, e)
        }
        Nd.exports = Bw
    }
    );
    var Pd = u( (fk, qd) => {
        var jw = Gr()
          , kw = "__lodash_hash_undefined__";
        function Hw(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = jw && t === void 0 ? kw : t,
            this
        }
        qd.exports = Hw
    }
    );
    var Md = u( (dk, Ld) => {
        var Kw = Sd()
          , zw = wd()
          , Yw = Cd()
          , Qw = xd()
          , $w = Pd();
        function or(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        or.prototype.clear = Kw;
        or.prototype.delete = zw;
        or.prototype.get = Yw;
        or.prototype.has = Qw;
        or.prototype.set = $w;
        Ld.exports = or
    }
    );
    var Gd = u( (pk, Fd) => {
        var Dd = Md()
          , Zw = Fr()
          , Jw = Fn();
        function eR() {
            this.size = 0,
            this.__data__ = {
                hash: new Dd,
                map: new (Jw || Zw),
                string: new Dd
            }
        }
        Fd.exports = eR
    }
    );
    var Ud = u( (vk, Xd) => {
        function tR(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Xd.exports = tR
    }
    );
    var Xr = u( (hk, Vd) => {
        var rR = Ud();
        function nR(e, t) {
            var r = e.__data__;
            return rR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Vd.exports = nR
    }
    );
    var Bd = u( (Ek, Wd) => {
        var iR = Xr();
        function oR(e) {
            var t = iR(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        Wd.exports = oR
    }
    );
    var kd = u( (gk, jd) => {
        var aR = Xr();
        function sR(e) {
            return aR(this, e).get(e)
        }
        jd.exports = sR
    }
    );
    var Kd = u( (_k, Hd) => {
        var uR = Xr();
        function cR(e) {
            return uR(this, e).has(e)
        }
        Hd.exports = cR
    }
    );
    var Yd = u( (yk, zd) => {
        var lR = Xr();
        function fR(e, t) {
            var r = lR(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        zd.exports = fR
    }
    );
    var Gn = u( (mk, Qd) => {
        var dR = Gd()
          , pR = Bd()
          , vR = kd()
          , hR = Kd()
          , ER = Yd();
        function ar(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        ar.prototype.clear = dR;
        ar.prototype.delete = pR;
        ar.prototype.get = vR;
        ar.prototype.has = hR;
        ar.prototype.set = ER;
        Qd.exports = ar
    }
    );
    var Zd = u( (Ik, $d) => {
        var gR = Fr()
          , _R = Fn()
          , yR = Gn()
          , mR = 200;
        function IR(e, t) {
            var r = this.__data__;
            if (r instanceof gR) {
                var n = r.__data__;
                if (!_R || n.length < mR - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new yR(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        $d.exports = IR
    }
    );
    var ua = u( (Tk, Jd) => {
        var TR = Fr()
          , OR = td()
          , bR = nd()
          , SR = od()
          , AR = sd()
          , wR = Zd();
        function sr(e) {
            var t = this.__data__ = new TR(e);
            this.size = t.size
        }
        sr.prototype.clear = OR;
        sr.prototype.delete = bR;
        sr.prototype.get = SR;
        sr.prototype.has = AR;
        sr.prototype.set = wR;
        Jd.exports = sr
    }
    );
    var tp = u( (Ok, ep) => {
        var RR = "__lodash_hash_undefined__";
        function CR(e) {
            return this.__data__.set(e, RR),
            this
        }
        ep.exports = CR
    }
    );
    var np = u( (bk, rp) => {
        function NR(e) {
            return this.__data__.has(e)
        }
        rp.exports = NR
    }
    );
    var op = u( (Sk, ip) => {
        var xR = Gn()
          , qR = tp()
          , PR = np();
        function Xn(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new xR; ++t < r; )
                this.add(e[t])
        }
        Xn.prototype.add = Xn.prototype.push = qR;
        Xn.prototype.has = PR;
        ip.exports = Xn
    }
    );
    var sp = u( (Ak, ap) => {
        function LR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        ap.exports = LR
    }
    );
    var cp = u( (wk, up) => {
        function MR(e, t) {
            return e.has(t)
        }
        up.exports = MR
    }
    );
    var ca = u( (Rk, lp) => {
        var DR = op()
          , FR = sp()
          , GR = cp()
          , XR = 1
          , UR = 2;
        function VR(e, t, r, n, o, i) {
            var a = r & XR
              , s = e.length
              , c = t.length;
            if (s != c && !(a && c > s))
                return !1;
            var d = i.get(e)
              , h = i.get(t);
            if (d && h)
                return d == t && h == e;
            var p = -1
              , _ = !0
              , O = r & UR ? new DR : void 0;
            for (i.set(e, t),
            i.set(t, e); ++p < s; ) {
                var S = e[p]
                  , w = t[p];
                if (n)
                    var L = a ? n(w, S, p, t, e, i) : n(S, w, p, e, t, i);
                if (L !== void 0) {
                    if (L)
                        continue;
                    _ = !1;
                    break
                }
                if (O) {
                    if (!FR(t, function(C, N) {
                        if (!GR(O, N) && (S === C || o(S, C, r, n, i)))
                            return O.push(N)
                    })) {
                        _ = !1;
                        break
                    }
                } else if (!(S === w || o(S, w, r, n, i))) {
                    _ = !1;
                    break
                }
            }
            return i.delete(e),
            i.delete(t),
            _
        }
        lp.exports = VR
    }
    );
    var dp = u( (Ck, fp) => {
        var WR = et()
          , BR = WR.Uint8Array;
        fp.exports = BR
    }
    );
    var vp = u( (Nk, pp) => {
        function jR(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, o) {
                r[++t] = [o, n]
            }),
            r
        }
        pp.exports = jR
    }
    );
    var Ep = u( (xk, hp) => {
        function kR(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        hp.exports = kR
    }
    );
    var Ip = u( (qk, mp) => {
        var gp = Zt()
          , _p = dp()
          , HR = Dn()
          , KR = ca()
          , zR = vp()
          , YR = Ep()
          , QR = 1
          , $R = 2
          , ZR = "[object Boolean]"
          , JR = "[object Date]"
          , eC = "[object Error]"
          , tC = "[object Map]"
          , rC = "[object Number]"
          , nC = "[object RegExp]"
          , iC = "[object Set]"
          , oC = "[object String]"
          , aC = "[object Symbol]"
          , sC = "[object ArrayBuffer]"
          , uC = "[object DataView]"
          , yp = gp ? gp.prototype : void 0
          , la = yp ? yp.valueOf : void 0;
        function cC(e, t, r, n, o, i, a) {
            switch (r) {
            case uC:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case sC:
                return !(e.byteLength != t.byteLength || !i(new _p(e), new _p(t)));
            case ZR:
            case JR:
            case rC:
                return HR(+e, +t);
            case eC:
                return e.name == t.name && e.message == t.message;
            case nC:
            case oC:
                return e == t + "";
            case tC:
                var s = zR;
            case iC:
                var c = n & QR;
                if (s || (s = YR),
                e.size != t.size && !c)
                    return !1;
                var d = a.get(e);
                if (d)
                    return d == t;
                n |= $R,
                a.set(e, t);
                var h = KR(s(e), s(t), n, o, i, a);
                return a.delete(e),
                h;
            case aC:
                if (la)
                    return la.call(e) == la.call(t)
            }
            return !1
        }
        mp.exports = cC
    }
    );
    var Un = u( (Pk, Tp) => {
        function lC(e, t) {
            for (var r = -1, n = t.length, o = e.length; ++r < n; )
                e[o + r] = t[r];
            return e
        }
        Tp.exports = lC
    }
    );
    var Re = u( (Lk, Op) => {
        var fC = Array.isArray;
        Op.exports = fC
    }
    );
    var fa = u( (Mk, bp) => {
        var dC = Un()
          , pC = Re();
        function vC(e, t, r) {
            var n = t(e);
            return pC(e) ? n : dC(n, r(e))
        }
        bp.exports = vC
    }
    );
    var Ap = u( (Dk, Sp) => {
        function hC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (i[o++] = a)
            }
            return i
        }
        Sp.exports = hC
    }
    );
    var da = u( (Fk, wp) => {
        function EC() {
            return []
        }
        wp.exports = EC
    }
    );
    var pa = u( (Gk, Cp) => {
        var gC = Ap()
          , _C = da()
          , yC = Object.prototype
          , mC = yC.propertyIsEnumerable
          , Rp = Object.getOwnPropertySymbols
          , IC = Rp ? function(e) {
            return e == null ? [] : (e = Object(e),
            gC(Rp(e), function(t) {
                return mC.call(e, t)
            }))
        }
        : _C;
        Cp.exports = IC
    }
    );
    var xp = u( (Xk, Np) => {
        function TC(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        Np.exports = TC
    }
    );
    var Pp = u( (Uk, qp) => {
        var OC = St()
          , bC = _t()
          , SC = "[object Arguments]";
        function AC(e) {
            return bC(e) && OC(e) == SC
        }
        qp.exports = AC
    }
    );
    var Ur = u( (Vk, Dp) => {
        var Lp = Pp()
          , wC = _t()
          , Mp = Object.prototype
          , RC = Mp.hasOwnProperty
          , CC = Mp.propertyIsEnumerable
          , NC = Lp(function() {
            return arguments
        }()) ? Lp : function(e) {
            return wC(e) && RC.call(e, "callee") && !CC.call(e, "callee")
        }
        ;
        Dp.exports = NC
    }
    );
    var Gp = u( (Wk, Fp) => {
        function xC() {
            return !1
        }
        Fp.exports = xC
    }
    );
    var Vn = u( (Vr, ur) => {
        var qC = et()
          , PC = Gp()
          , Vp = typeof Vr == "object" && Vr && !Vr.nodeType && Vr
          , Xp = Vp && typeof ur == "object" && ur && !ur.nodeType && ur
          , LC = Xp && Xp.exports === Vp
          , Up = LC ? qC.Buffer : void 0
          , MC = Up ? Up.isBuffer : void 0
          , DC = MC || PC;
        ur.exports = DC
    }
    );
    var Wn = u( (Bk, Wp) => {
        var FC = 9007199254740991
          , GC = /^(?:0|[1-9]\d*)$/;
        function XC(e, t) {
            var r = typeof e;
            return t = t ?? FC,
            !!t && (r == "number" || r != "symbol" && GC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Wp.exports = XC
    }
    );
    var Bn = u( (jk, Bp) => {
        var UC = 9007199254740991;
        function VC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= UC
        }
        Bp.exports = VC
    }
    );
    var kp = u( (kk, jp) => {
        var WC = St()
          , BC = Bn()
          , jC = _t()
          , kC = "[object Arguments]"
          , HC = "[object Array]"
          , KC = "[object Boolean]"
          , zC = "[object Date]"
          , YC = "[object Error]"
          , QC = "[object Function]"
          , $C = "[object Map]"
          , ZC = "[object Number]"
          , JC = "[object Object]"
          , eN = "[object RegExp]"
          , tN = "[object Set]"
          , rN = "[object String]"
          , nN = "[object WeakMap]"
          , iN = "[object ArrayBuffer]"
          , oN = "[object DataView]"
          , aN = "[object Float32Array]"
          , sN = "[object Float64Array]"
          , uN = "[object Int8Array]"
          , cN = "[object Int16Array]"
          , lN = "[object Int32Array]"
          , fN = "[object Uint8Array]"
          , dN = "[object Uint8ClampedArray]"
          , pN = "[object Uint16Array]"
          , vN = "[object Uint32Array]"
          , he = {};
        he[aN] = he[sN] = he[uN] = he[cN] = he[lN] = he[fN] = he[dN] = he[pN] = he[vN] = !0;
        he[kC] = he[HC] = he[iN] = he[KC] = he[oN] = he[zC] = he[YC] = he[QC] = he[$C] = he[ZC] = he[JC] = he[eN] = he[tN] = he[rN] = he[nN] = !1;
        function hN(e) {
            return jC(e) && BC(e.length) && !!he[WC(e)]
        }
        jp.exports = hN
    }
    );
    var Kp = u( (Hk, Hp) => {
        function EN(e) {
            return function(t) {
                return e(t)
            }
        }
        Hp.exports = EN
    }
    );
    var Yp = u( (Wr, cr) => {
        var gN = Do()
          , zp = typeof Wr == "object" && Wr && !Wr.nodeType && Wr
          , Br = zp && typeof cr == "object" && cr && !cr.nodeType && cr
          , _N = Br && Br.exports === zp
          , va = _N && gN.process
          , yN = function() {
            try {
                var e = Br && Br.require && Br.require("util").types;
                return e || va && va.binding && va.binding("util")
            } catch {}
        }();
        cr.exports = yN
    }
    );
    var jn = u( (Kk, Zp) => {
        var mN = kp()
          , IN = Kp()
          , Qp = Yp()
          , $p = Qp && Qp.isTypedArray
          , TN = $p ? IN($p) : mN;
        Zp.exports = TN
    }
    );
    var ha = u( (zk, Jp) => {
        var ON = xp()
          , bN = Ur()
          , SN = Re()
          , AN = Vn()
          , wN = Wn()
          , RN = jn()
          , CN = Object.prototype
          , NN = CN.hasOwnProperty;
        function xN(e, t) {
            var r = SN(e)
              , n = !r && bN(e)
              , o = !r && !n && AN(e)
              , i = !r && !n && !o && RN(e)
              , a = r || n || o || i
              , s = a ? ON(e.length, String) : []
              , c = s.length;
            for (var d in e)
                (t || NN.call(e, d)) && !(a && (d == "length" || o && (d == "offset" || d == "parent") || i && (d == "buffer" || d == "byteLength" || d == "byteOffset") || wN(d, c))) && s.push(d);
            return s
        }
        Jp.exports = xN
    }
    );
    var kn = u( (Yk, ev) => {
        var qN = Object.prototype;
        function PN(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || qN;
            return e === r
        }
        ev.exports = PN
    }
    );
    var rv = u( (Qk, tv) => {
        var LN = Fo()
          , MN = LN(Object.keys, Object);
        tv.exports = MN
    }
    );
    var Hn = u( ($k, nv) => {
        var DN = kn()
          , FN = rv()
          , GN = Object.prototype
          , XN = GN.hasOwnProperty;
        function UN(e) {
            if (!DN(e))
                return FN(e);
            var t = [];
            for (var r in Object(e))
                XN.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        nv.exports = UN
    }
    );
    var Gt = u( (Zk, iv) => {
        var VN = oa()
          , WN = Bn();
        function BN(e) {
            return e != null && WN(e.length) && !VN(e)
        }
        iv.exports = BN
    }
    );
    var jr = u( (Jk, ov) => {
        var jN = ha()
          , kN = Hn()
          , HN = Gt();
        function KN(e) {
            return HN(e) ? jN(e) : kN(e)
        }
        ov.exports = KN
    }
    );
    var sv = u( (eH, av) => {
        var zN = fa()
          , YN = pa()
          , QN = jr();
        function $N(e) {
            return zN(e, QN, YN)
        }
        av.exports = $N
    }
    );
    var lv = u( (tH, cv) => {
        var uv = sv()
          , ZN = 1
          , JN = Object.prototype
          , ex = JN.hasOwnProperty;
        function tx(e, t, r, n, o, i) {
            var a = r & ZN
              , s = uv(e)
              , c = s.length
              , d = uv(t)
              , h = d.length;
            if (c != h && !a)
                return !1;
            for (var p = c; p--; ) {
                var _ = s[p];
                if (!(a ? _ in t : ex.call(t, _)))
                    return !1
            }
            var O = i.get(e)
              , S = i.get(t);
            if (O && S)
                return O == t && S == e;
            var w = !0;
            i.set(e, t),
            i.set(t, e);
            for (var L = a; ++p < c; ) {
                _ = s[p];
                var C = e[_]
                  , N = t[_];
                if (n)
                    var b = a ? n(N, C, _, t, e, i) : n(C, N, _, e, t, i);
                if (!(b === void 0 ? C === N || o(C, N, r, n, i) : b)) {
                    w = !1;
                    break
                }
                L || (L = _ == "constructor")
            }
            if (w && !L) {
                var M = e.constructor
                  , q = t.constructor;
                M != q && "constructor"in e && "constructor"in t && !(typeof M == "function" && M instanceof M && typeof q == "function" && q instanceof q) && (w = !1)
            }
            return i.delete(e),
            i.delete(t),
            w
        }
        cv.exports = tx
    }
    );
    var dv = u( (rH, fv) => {
        var rx = At()
          , nx = et()
          , ix = rx(nx, "DataView");
        fv.exports = ix
    }
    );
    var vv = u( (nH, pv) => {
        var ox = At()
          , ax = et()
          , sx = ox(ax, "Promise");
        pv.exports = sx
    }
    );
    var Ev = u( (iH, hv) => {
        var ux = At()
          , cx = et()
          , lx = ux(cx, "Set");
        hv.exports = lx
    }
    );
    var Ea = u( (oH, gv) => {
        var fx = At()
          , dx = et()
          , px = fx(dx, "WeakMap");
        gv.exports = px
    }
    );
    var Kn = u( (aH, bv) => {
        var ga = dv()
          , _a = Fn()
          , ya = vv()
          , ma = Ev()
          , Ia = Ea()
          , Ov = St()
          , lr = sa()
          , _v = "[object Map]"
          , vx = "[object Object]"
          , yv = "[object Promise]"
          , mv = "[object Set]"
          , Iv = "[object WeakMap]"
          , Tv = "[object DataView]"
          , hx = lr(ga)
          , Ex = lr(_a)
          , gx = lr(ya)
          , _x = lr(ma)
          , yx = lr(Ia)
          , Xt = Ov;
        (ga && Xt(new ga(new ArrayBuffer(1))) != Tv || _a && Xt(new _a) != _v || ya && Xt(ya.resolve()) != yv || ma && Xt(new ma) != mv || Ia && Xt(new Ia) != Iv) && (Xt = function(e) {
            var t = Ov(e)
              , r = t == vx ? e.constructor : void 0
              , n = r ? lr(r) : "";
            if (n)
                switch (n) {
                case hx:
                    return Tv;
                case Ex:
                    return _v;
                case gx:
                    return yv;
                case _x:
                    return mv;
                case yx:
                    return Iv
                }
            return t
        }
        );
        bv.exports = Xt
    }
    );
    var qv = u( (sH, xv) => {
        var Ta = ua()
          , mx = ca()
          , Ix = Ip()
          , Tx = lv()
          , Sv = Kn()
          , Av = Re()
          , wv = Vn()
          , Ox = jn()
          , bx = 1
          , Rv = "[object Arguments]"
          , Cv = "[object Array]"
          , zn = "[object Object]"
          , Sx = Object.prototype
          , Nv = Sx.hasOwnProperty;
        function Ax(e, t, r, n, o, i) {
            var a = Av(e)
              , s = Av(t)
              , c = a ? Cv : Sv(e)
              , d = s ? Cv : Sv(t);
            c = c == Rv ? zn : c,
            d = d == Rv ? zn : d;
            var h = c == zn
              , p = d == zn
              , _ = c == d;
            if (_ && wv(e)) {
                if (!wv(t))
                    return !1;
                a = !0,
                h = !1
            }
            if (_ && !h)
                return i || (i = new Ta),
                a || Ox(e) ? mx(e, t, r, n, o, i) : Ix(e, t, c, r, n, o, i);
            if (!(r & bx)) {
                var O = h && Nv.call(e, "__wrapped__")
                  , S = p && Nv.call(t, "__wrapped__");
                if (O || S) {
                    var w = O ? e.value() : e
                      , L = S ? t.value() : t;
                    return i || (i = new Ta),
                    o(w, L, r, n, i)
                }
            }
            return _ ? (i || (i = new Ta),
            Tx(e, t, r, n, o, i)) : !1
        }
        xv.exports = Ax
    }
    );
    var Oa = u( (uH, Mv) => {
        var wx = qv()
          , Pv = _t();
        function Lv(e, t, r, n, o) {
            return e === t ? !0 : e == null || t == null || !Pv(e) && !Pv(t) ? e !== e && t !== t : wx(e, t, r, n, Lv, o)
        }
        Mv.exports = Lv
    }
    );
    var Fv = u( (cH, Dv) => {
        var Rx = ua()
          , Cx = Oa()
          , Nx = 1
          , xx = 2;
        function qx(e, t, r, n) {
            var o = r.length
              , i = o
              , a = !n;
            if (e == null)
                return !i;
            for (e = Object(e); o--; ) {
                var s = r[o];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++o < i; ) {
                s = r[o];
                var c = s[0]
                  , d = e[c]
                  , h = s[1];
                if (a && s[2]) {
                    if (d === void 0 && !(c in e))
                        return !1
                } else {
                    var p = new Rx;
                    if (n)
                        var _ = n(d, h, c, e, t, p);
                    if (!(_ === void 0 ? Cx(h, d, Nx | xx, n, p) : _))
                        return !1
                }
            }
            return !0
        }
        Dv.exports = qx
    }
    );
    var ba = u( (lH, Gv) => {
        var Px = lt();
        function Lx(e) {
            return e === e && !Px(e)
        }
        Gv.exports = Lx
    }
    );
    var Uv = u( (fH, Xv) => {
        var Mx = ba()
          , Dx = jr();
        function Fx(e) {
            for (var t = Dx(e), r = t.length; r--; ) {
                var n = t[r]
                  , o = e[n];
                t[r] = [n, o, Mx(o)]
            }
            return t
        }
        Xv.exports = Fx
    }
    );
    var Sa = u( (dH, Vv) => {
        function Gx(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Vv.exports = Gx
    }
    );
    var Bv = u( (pH, Wv) => {
        var Xx = Fv()
          , Ux = Uv()
          , Vx = Sa();
        function Wx(e) {
            var t = Ux(e);
            return t.length == 1 && t[0][2] ? Vx(t[0][0], t[0][1]) : function(r) {
                return r === e || Xx(r, e, t)
            }
        }
        Wv.exports = Wx
    }
    );
    var kr = u( (vH, jv) => {
        var Bx = St()
          , jx = _t()
          , kx = "[object Symbol]";
        function Hx(e) {
            return typeof e == "symbol" || jx(e) && Bx(e) == kx
        }
        jv.exports = Hx
    }
    );
    var Yn = u( (hH, kv) => {
        var Kx = Re()
          , zx = kr()
          , Yx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , Qx = /^\w*$/;
        function $x(e, t) {
            if (Kx(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || zx(e) ? !0 : Qx.test(e) || !Yx.test(e) || t != null && e in Object(t)
        }
        kv.exports = $x
    }
    );
    var zv = u( (EH, Kv) => {
        var Hv = Gn()
          , Zx = "Expected a function";
        function Aa(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(Zx);
            var r = function() {
                var n = arguments
                  , o = t ? t.apply(this, n) : n[0]
                  , i = r.cache;
                if (i.has(o))
                    return i.get(o);
                var a = e.apply(this, n);
                return r.cache = i.set(o, a) || i,
                a
            };
            return r.cache = new (Aa.Cache || Hv),
            r
        }
        Aa.Cache = Hv;
        Kv.exports = Aa
    }
    );
    var Qv = u( (gH, Yv) => {
        var Jx = zv()
          , eq = 500;
        function tq(e) {
            var t = Jx(e, function(n) {
                return r.size === eq && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        Yv.exports = tq
    }
    );
    var Zv = u( (_H, $v) => {
        var rq = Qv()
          , nq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , iq = /\\(\\)?/g
          , oq = rq(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(nq, function(r, n, o, i) {
                t.push(o ? i.replace(iq, "$1") : n || r)
            }),
            t
        });
        $v.exports = oq
    }
    );
    var wa = u( (yH, Jv) => {
        function aq(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
                o[r] = t(e[r], r, e);
            return o
        }
        Jv.exports = aq
    }
    );
    var oh = u( (mH, ih) => {
        var eh = Zt()
          , sq = wa()
          , uq = Re()
          , cq = kr()
          , lq = 1 / 0
          , th = eh ? eh.prototype : void 0
          , rh = th ? th.toString : void 0;
        function nh(e) {
            if (typeof e == "string")
                return e;
            if (uq(e))
                return sq(e, nh) + "";
            if (cq(e))
                return rh ? rh.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -lq ? "-0" : t
        }
        ih.exports = nh
    }
    );
    var sh = u( (IH, ah) => {
        var fq = oh();
        function dq(e) {
            return e == null ? "" : fq(e)
        }
        ah.exports = dq
    }
    );
    var Hr = u( (TH, uh) => {
        var pq = Re()
          , vq = Yn()
          , hq = Zv()
          , Eq = sh();
        function gq(e, t) {
            return pq(e) ? e : vq(e, t) ? [e] : hq(Eq(e))
        }
        uh.exports = gq
    }
    );
    var fr = u( (OH, ch) => {
        var _q = kr()
          , yq = 1 / 0;
        function mq(e) {
            if (typeof e == "string" || _q(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -yq ? "-0" : t
        }
        ch.exports = mq
    }
    );
    var Qn = u( (bH, lh) => {
        var Iq = Hr()
          , Tq = fr();
        function Oq(e, t) {
            t = Iq(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[Tq(t[r++])];
            return r && r == n ? e : void 0
        }
        lh.exports = Oq
    }
    );
    var $n = u( (SH, fh) => {
        var bq = Qn();
        function Sq(e, t, r) {
            var n = e == null ? void 0 : bq(e, t);
            return n === void 0 ? r : n
        }
        fh.exports = Sq
    }
    );
    var ph = u( (AH, dh) => {
        function Aq(e, t) {
            return e != null && t in Object(e)
        }
        dh.exports = Aq
    }
    );
    var hh = u( (wH, vh) => {
        var wq = Hr()
          , Rq = Ur()
          , Cq = Re()
          , Nq = Wn()
          , xq = Bn()
          , qq = fr();
        function Pq(e, t, r) {
            t = wq(t, e);
            for (var n = -1, o = t.length, i = !1; ++n < o; ) {
                var a = qq(t[n]);
                if (!(i = e != null && r(e, a)))
                    break;
                e = e[a]
            }
            return i || ++n != o ? i : (o = e == null ? 0 : e.length,
            !!o && xq(o) && Nq(a, o) && (Cq(e) || Rq(e)))
        }
        vh.exports = Pq
    }
    );
    var gh = u( (RH, Eh) => {
        var Lq = ph()
          , Mq = hh();
        function Dq(e, t) {
            return e != null && Mq(e, t, Lq)
        }
        Eh.exports = Dq
    }
    );
    var yh = u( (CH, _h) => {
        var Fq = Oa()
          , Gq = $n()
          , Xq = gh()
          , Uq = Yn()
          , Vq = ba()
          , Wq = Sa()
          , Bq = fr()
          , jq = 1
          , kq = 2;
        function Hq(e, t) {
            return Uq(e) && Vq(t) ? Wq(Bq(e), t) : function(r) {
                var n = Gq(r, e);
                return n === void 0 && n === t ? Xq(r, e) : Fq(t, n, jq | kq)
            }
        }
        _h.exports = Hq
    }
    );
    var Zn = u( (NH, mh) => {
        function Kq(e) {
            return e
        }
        mh.exports = Kq
    }
    );
    var Ra = u( (xH, Ih) => {
        function zq(e) {
            return function(t) {
                return t?.[e]
            }
        }
        Ih.exports = zq
    }
    );
    var Oh = u( (qH, Th) => {
        var Yq = Qn();
        function Qq(e) {
            return function(t) {
                return Yq(t, e)
            }
        }
        Th.exports = Qq
    }
    );
    var Sh = u( (PH, bh) => {
        var $q = Ra()
          , Zq = Oh()
          , Jq = Yn()
          , eP = fr();
        function tP(e) {
            return Jq(e) ? $q(eP(e)) : Zq(e)
        }
        bh.exports = tP
    }
    );
    var wt = u( (LH, Ah) => {
        var rP = Bv()
          , nP = yh()
          , iP = Zn()
          , oP = Re()
          , aP = Sh();
        function sP(e) {
            return typeof e == "function" ? e : e == null ? iP : typeof e == "object" ? oP(e) ? nP(e[0], e[1]) : rP(e) : aP(e)
        }
        Ah.exports = sP
    }
    );
    var Ca = u( (MH, wh) => {
        var uP = wt()
          , cP = Gt()
          , lP = jr();
        function fP(e) {
            return function(t, r, n) {
                var o = Object(t);
                if (!cP(t)) {
                    var i = uP(r, 3);
                    t = lP(t),
                    r = function(s) {
                        return i(o[s], s, o)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? o[i ? t[a] : a] : void 0
            }
        }
        wh.exports = fP
    }
    );
    var Na = u( (DH, Rh) => {
        function dP(e, t, r, n) {
            for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
                if (t(e[i], i, e))
                    return i;
            return -1
        }
        Rh.exports = dP
    }
    );
    var Nh = u( (FH, Ch) => {
        var pP = /\s/;
        function vP(e) {
            for (var t = e.length; t-- && pP.test(e.charAt(t)); )
                ;
            return t
        }
        Ch.exports = vP
    }
    );
    var qh = u( (GH, xh) => {
        var hP = Nh()
          , EP = /^\s+/;
        function gP(e) {
            return e && e.slice(0, hP(e) + 1).replace(EP, "")
        }
        xh.exports = gP
    }
    );
    var Jn = u( (XH, Mh) => {
        var _P = qh()
          , Ph = lt()
          , yP = kr()
          , Lh = 0 / 0
          , mP = /^[-+]0x[0-9a-f]+$/i
          , IP = /^0b[01]+$/i
          , TP = /^0o[0-7]+$/i
          , OP = parseInt;
        function bP(e) {
            if (typeof e == "number")
                return e;
            if (yP(e))
                return Lh;
            if (Ph(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Ph(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = _P(e);
            var r = IP.test(e);
            return r || TP.test(e) ? OP(e.slice(2), r ? 2 : 8) : mP.test(e) ? Lh : +e
        }
        Mh.exports = bP
    }
    );
    var Gh = u( (UH, Fh) => {
        var SP = Jn()
          , Dh = 1 / 0
          , AP = 17976931348623157e292;
        function wP(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = SP(e),
            e === Dh || e === -Dh) {
                var t = e < 0 ? -1 : 1;
                return t * AP
            }
            return e === e ? e : 0
        }
        Fh.exports = wP
    }
    );
    var xa = u( (VH, Xh) => {
        var RP = Gh();
        function CP(e) {
            var t = RP(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Xh.exports = CP
    }
    );
    var Vh = u( (WH, Uh) => {
        var NP = Na()
          , xP = wt()
          , qP = xa()
          , PP = Math.max;
        function LP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var o = r == null ? 0 : qP(r);
            return o < 0 && (o = PP(n + o, 0)),
            NP(e, xP(t, 3), o)
        }
        Uh.exports = LP
    }
    );
    var qa = u( (BH, Wh) => {
        var MP = Ca()
          , DP = Vh()
          , FP = MP(DP);
        Wh.exports = FP
    }
    );
    var ti = u(Me => {
        "use strict";
        var GP = $e().default;
        Object.defineProperty(Me, "__esModule", {
            value: !0
        });
        Me.withBrowser = Me.TRANSFORM_STYLE_PREFIXED = Me.TRANSFORM_PREFIXED = Me.IS_BROWSER_ENV = Me.FLEX_PREFIXED = Me.ELEMENT_MATCHES = void 0;
        var XP = GP(qa())
          , jh = typeof window < "u";
        Me.IS_BROWSER_ENV = jh;
        var ei = (e, t) => jh ? e() : t;
        Me.withBrowser = ei;
        var UP = ei( () => (0,
        XP.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype));
        Me.ELEMENT_MATCHES = UP;
        var VP = ei( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o];
                    if (e.style.display = i,
                    e.style.display === i)
                        return i
                }
                return r
            } catch {
                return r
            }
        }
        , "flex");
        Me.FLEX_PREFIXED = VP;
        var kh = ei( () => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o] + r;
                    if (e.style[i] !== void 0)
                        return i
                }
            }
            return "transform"
        }
        , "transform");
        Me.TRANSFORM_PREFIXED = kh;
        var Bh = kh.split("transform")[0]
          , WP = Bh ? Bh + "TransformStyle" : "transformStyle";
        Me.TRANSFORM_STYLE_PREFIXED = WP
    }
    );
    var Pa = u( (kH, Qh) => {
        var BP = 4
          , jP = .001
          , kP = 1e-7
          , HP = 10
          , Kr = 11
          , ri = 1 / (Kr - 1)
          , KP = typeof Float32Array == "function";
        function Hh(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function Kh(e, t) {
            return 3 * t - 6 * e
        }
        function zh(e) {
            return 3 * e
        }
        function ni(e, t, r) {
            return ((Hh(t, r) * e + Kh(t, r)) * e + zh(t)) * e
        }
        function Yh(e, t, r) {
            return 3 * Hh(t, r) * e * e + 2 * Kh(t, r) * e + zh(t)
        }
        function zP(e, t, r, n, o) {
            var i, a, s = 0;
            do
                a = t + (r - t) / 2,
                i = ni(a, n, o) - e,
                i > 0 ? r = a : t = a;
            while (Math.abs(i) > kP && ++s < HP);
            return a
        }
        function YP(e, t, r, n) {
            for (var o = 0; o < BP; ++o) {
                var i = Yh(t, r, n);
                if (i === 0)
                    return t;
                var a = ni(t, r, n) - e;
                t -= a / i
            }
            return t
        }
        Qh.exports = function(t, r, n, o) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var i = KP ? new Float32Array(Kr) : new Array(Kr);
            if (t !== r || n !== o)
                for (var a = 0; a < Kr; ++a)
                    i[a] = ni(a * ri, t, n);
            function s(c) {
                for (var d = 0, h = 1, p = Kr - 1; h !== p && i[h] <= c; ++h)
                    d += ri;
                --h;
                var _ = (c - i[h]) / (i[h + 1] - i[h])
                  , O = d + _ * ri
                  , S = Yh(O, t, n);
                return S >= jP ? YP(c, O, t, n) : S === 0 ? O : zP(c, d, d + ri, t, n)
            }
            return function(d) {
                return t === r && n === o ? d : d === 0 ? 0 : d === 1 ? 1 : ni(s(d), r, o)
            }
        }
    }
    );
    var La = u(re => {
        "use strict";
        var QP = $e().default;
        Object.defineProperty(re, "__esModule", {
            value: !0
        });
        re.bounce = qL;
        re.bouncePast = PL;
        re.easeOut = re.easeInOut = re.easeIn = re.ease = void 0;
        re.inBack = OL;
        re.inCirc = yL;
        re.inCubic = iL;
        re.inElastic = AL;
        re.inExpo = EL;
        re.inOutBack = SL;
        re.inOutCirc = IL;
        re.inOutCubic = aL;
        re.inOutElastic = RL;
        re.inOutExpo = _L;
        re.inOutQuad = nL;
        re.inOutQuart = cL;
        re.inOutQuint = dL;
        re.inOutSine = hL;
        re.inQuad = tL;
        re.inQuart = sL;
        re.inQuint = lL;
        re.inSine = pL;
        re.outBack = bL;
        re.outBounce = TL;
        re.outCirc = mL;
        re.outCubic = oL;
        re.outElastic = wL;
        re.outExpo = gL;
        re.outQuad = rL;
        re.outQuart = uL;
        re.outQuint = fL;
        re.outSine = vL;
        re.swingFrom = NL;
        re.swingFromTo = CL;
        re.swingTo = xL;
        var ii = QP(Pa())
          , mt = 1.70158
          , $P = (0,
        ii.default)(.25, .1, .25, 1);
        re.ease = $P;
        var ZP = (0,
        ii.default)(.42, 0, 1, 1);
        re.easeIn = ZP;
        var JP = (0,
        ii.default)(0, 0, .58, 1);
        re.easeOut = JP;
        var eL = (0,
        ii.default)(.42, 0, .58, 1);
        re.easeInOut = eL;
        function tL(e) {
            return Math.pow(e, 2)
        }
        function rL(e) {
            return -(Math.pow(e - 1, 2) - 1)
        }
        function nL(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
        }
        function iL(e) {
            return Math.pow(e, 3)
        }
        function oL(e) {
            return Math.pow(e - 1, 3) + 1
        }
        function aL(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        }
        function sL(e) {
            return Math.pow(e, 4)
        }
        function uL(e) {
            return -(Math.pow(e - 1, 4) - 1)
        }
        function cL(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
        }
        function lL(e) {
            return Math.pow(e, 5)
        }
        function fL(e) {
            return Math.pow(e - 1, 5) + 1
        }
        function dL(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
        }
        function pL(e) {
            return -Math.cos(e * (Math.PI / 2)) + 1
        }
        function vL(e) {
            return Math.sin(e * (Math.PI / 2))
        }
        function hL(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }
        function EL(e) {
            return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
        }
        function gL(e) {
            return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
        }
        function _L(e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
        }
        function yL(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }
        function mL(e) {
            return Math.sqrt(1 - Math.pow(e - 1, 2))
        }
        function IL(e) {
            return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }
        function TL(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function OL(e) {
            let t = mt;
            return e * e * ((t + 1) * e - t)
        }
        function bL(e) {
            let t = mt;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }
        function SL(e) {
            let t = mt;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function AL(e) {
            let t = mt
              , r = 0
              , n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
        }
        function wL(e) {
            let t = mt
              , r = 0
              , n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
        }
        function RL(e) {
            let t = mt
              , r = 0
              , n = 1;
            return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
        }
        function CL(e) {
            let t = mt;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function NL(e) {
            let t = mt;
            return e * e * ((t + 1) * e - t)
        }
        function xL(e) {
            let t = mt;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }
        function qL(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function PL(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }
    }
    );
    var Da = u(zr => {
        "use strict";
        var LL = $e().default
          , ML = Lt().default;
        Object.defineProperty(zr, "__esModule", {
            value: !0
        });
        zr.applyEasing = GL;
        zr.createBezierEasing = FL;
        zr.optimizeFloat = Ma;
        var $h = ML(La())
          , DL = LL(Pa());
        function Ma(e, t=5, r=10) {
            let n = Math.pow(r, t)
              , o = Number(Math.round(e * n) / n);
            return Math.abs(o) > 1e-4 ? o : 0
        }
        function FL(e) {
            return (0,
            DL.default)(...e)
        }
        function GL(e, t, r) {
            return t === 0 ? 0 : t === 1 ? 1 : Ma(r ? t > 0 ? r(t) : t : t > 0 && e && $h[e] ? $h[e](t) : t)
        }
    }
    );
    var tE = u(dr => {
        "use strict";
        Object.defineProperty(dr, "__esModule", {
            value: !0
        });
        dr.createElementState = eE;
        dr.ixElements = void 0;
        dr.mergeActionState = Fa;
        var oi = nr()
          , Jh = Xe()
          , {HTML_ELEMENT: zH, PLAIN_OBJECT: XL, ABSTRACT_NODE: YH, CONFIG_X_VALUE: UL, CONFIG_Y_VALUE: VL, CONFIG_Z_VALUE: WL, CONFIG_VALUE: BL, CONFIG_X_UNIT: jL, CONFIG_Y_UNIT: kL, CONFIG_Z_UNIT: HL, CONFIG_UNIT: KL} = Jh.IX2EngineConstants
          , {IX2_SESSION_STOPPED: zL, IX2_INSTANCE_ADDED: YL, IX2_ELEMENT_STATE_CHANGED: QL} = Jh.IX2EngineActionTypes
          , Zh = {}
          , $L = "refState"
          , ZL = (e=Zh, t={}) => {
            switch (t.type) {
            case zL:
                return Zh;
            case YL:
                {
                    let {elementId: r, element: n, origin: o, actionItem: i, refType: a} = t.payload
                      , {actionTypeId: s} = i
                      , c = e;
                    return (0,
                    oi.getIn)(c, [r, n]) !== n && (c = eE(c, n, a, r, i)),
                    Fa(c, r, s, o, i)
                }
            case QL:
                {
                    let {elementId: r, actionTypeId: n, current: o, actionItem: i} = t.payload;
                    return Fa(e, r, n, o, i)
                }
            default:
                return e
            }
        }
        ;
        dr.ixElements = ZL;
        function eE(e, t, r, n, o) {
            let i = r === XL ? (0,
            oi.getIn)(o, ["config", "target", "objectId"]) : null;
            return (0,
            oi.mergeIn)(e, [n], {
                id: n,
                ref: t,
                refId: i,
                refType: r
            })
        }
        function Fa(e, t, r, n, o) {
            let i = eM(o)
              , a = [t, $L, r];
            return (0,
            oi.mergeIn)(e, a, n, i)
        }
        var JL = [[UL, jL], [VL, kL], [WL, HL], [BL, KL]];
        function eM(e) {
            let {config: t} = e;
            return JL.reduce( (r, n) => {
                let o = n[0]
                  , i = n[1]
                  , a = t[o]
                  , s = t[i];
                return a != null && s != null && (r[i] = s),
                r
            }
            , {})
        }
    }
    );
    var rE = u(Ce => {
        "use strict";
        Object.defineProperty(Ce, "__esModule", {
            value: !0
        });
        Ce.renderPlugin = Ce.getPluginOrigin = Ce.getPluginDuration = Ce.getPluginDestination = Ce.getPluginConfig = Ce.createPluginInstance = Ce.clearPlugin = void 0;
        var tM = e => e.value;
        Ce.getPluginConfig = tM;
        var rM = (e, t) => {
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
        ;
        Ce.getPluginDuration = rM;
        var nM = e => e || {
            value: 0
        };
        Ce.getPluginOrigin = nM;
        var iM = e => ({
            value: e.value
        });
        Ce.getPluginDestination = iM;
        var oM = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
        ;
        Ce.createPluginInstance = oM;
        var aM = (e, t, r) => {
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
        ;
        Ce.renderPlugin = aM;
        var sM = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
        ;
        Ce.clearPlugin = sM
    }
    );
    var iE = u(Ne => {
        "use strict";
        Object.defineProperty(Ne, "__esModule", {
            value: !0
        });
        Ne.renderPlugin = Ne.getPluginOrigin = Ne.getPluginDuration = Ne.getPluginDestination = Ne.getPluginConfig = Ne.createPluginInstance = Ne.clearPlugin = void 0;
        var uM = e => document.querySelector(`[data-w-id="${e}"]`)
          , cM = () => window.Webflow.require("spline")
          , lM = (e, t) => e.filter(r => !t.includes(r))
          , fM = (e, t) => e.value[t];
        Ne.getPluginConfig = fM;
        var dM = () => null;
        Ne.getPluginDuration = dM;
        var nE = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , pM = (e, t) => {
            let r = t.config.value
              , n = Object.keys(r);
            if (e) {
                let i = Object.keys(e)
                  , a = lM(n, i);
                return a.length ? a.reduce( (c, d) => (c[d] = nE[d],
                c), e) : e
            }
            return n.reduce( (i, a) => (i[a] = nE[a],
            i), {})
        }
        ;
        Ne.getPluginOrigin = pM;
        var vM = e => e.value;
        Ne.getPluginDestination = vM;
        var hM = (e, t) => {
            var r, n;
            let o = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return o ? uM(o) : null
        }
        ;
        Ne.createPluginInstance = hM;
        var EM = (e, t, r) => {
            let n = cM().getInstance(e)
              , o = r.config.target.objectId;
            if (!n || !o)
                return;
            let i = n.spline.findObjectById(o);
            if (!i)
                return;
            let {PLUGIN_SPLINE: a} = t;
            a.positionX != null && (i.position.x = a.positionX),
            a.positionY != null && (i.position.y = a.positionY),
            a.positionZ != null && (i.position.z = a.positionZ),
            a.rotationX != null && (i.rotation.x = a.rotationX),
            a.rotationY != null && (i.rotation.y = a.rotationY),
            a.rotationZ != null && (i.rotation.z = a.rotationZ),
            a.scaleX != null && (i.scale.x = a.scaleX),
            a.scaleY != null && (i.scale.y = a.scaleY),
            a.scaleZ != null && (i.scale.z = a.scaleZ)
        }
        ;
        Ne.renderPlugin = EM;
        var gM = () => null;
        Ne.clearPlugin = gM
    }
    );
    var uE = u(ai => {
        "use strict";
        var sE = Lt().default
          , _M = $e().default;
        Object.defineProperty(ai, "__esModule", {
            value: !0
        });
        ai.pluginMethodMap = void 0;
        var oE = _M(rr())
          , aE = Xe()
          , yM = sE(rE())
          , mM = sE(iE())
          , IM = new Map([[aE.ActionTypeConsts.PLUGIN_LOTTIE, (0,
        oE.default)({}, yM)], [aE.ActionTypeConsts.PLUGIN_SPLINE, (0,
        oE.default)({}, mM)]]);
        ai.pluginMethodMap = IM
    }
    );
    var Ga = u(Se => {
        "use strict";
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
        Se.isPluginType = OM;
        Se.renderPlugin = void 0;
        var TM = ti()
          , cE = uE();
        function OM(e) {
            return cE.pluginMethodMap.has(e)
        }
        var Ut = e => t => {
            if (!TM.IS_BROWSER_ENV)
                return () => null;
            let r = cE.pluginMethodMap.get(t);
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
          , bM = Ut("getPluginConfig");
        Se.getPluginConfig = bM;
        var SM = Ut("getPluginOrigin");
        Se.getPluginOrigin = SM;
        var AM = Ut("getPluginDuration");
        Se.getPluginDuration = AM;
        var wM = Ut("getPluginDestination");
        Se.getPluginDestination = wM;
        var RM = Ut("createPluginInstance");
        Se.createPluginInstance = RM;
        var CM = Ut("renderPlugin");
        Se.renderPlugin = CM;
        var NM = Ut("clearPlugin");
        Se.clearPlugin = NM
    }
    );
    var fE = u( (t5, lE) => {
        function xM(e, t) {
            return e == null || e !== e ? t : e
        }
        lE.exports = xM
    }
    );
    var pE = u( (r5, dE) => {
        function qM(e, t, r, n) {
            var o = -1
              , i = e == null ? 0 : e.length;
            for (n && i && (r = e[++o]); ++o < i; )
                r = t(r, e[o], o, e);
            return r
        }
        dE.exports = qM
    }
    );
    var hE = u( (n5, vE) => {
        function PM(e) {
            return function(t, r, n) {
                for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
                    var c = a[e ? s : ++o];
                    if (r(i[c], c, i) === !1)
                        break
                }
                return t
            }
        }
        vE.exports = PM
    }
    );
    var gE = u( (i5, EE) => {
        var LM = hE()
          , MM = LM();
        EE.exports = MM
    }
    );
    var Xa = u( (o5, _E) => {
        var DM = gE()
          , FM = jr();
        function GM(e, t) {
            return e && DM(e, t, FM)
        }
        _E.exports = GM
    }
    );
    var mE = u( (a5, yE) => {
        var XM = Gt();
        function UM(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!XM(r))
                    return e(r, n);
                for (var o = r.length, i = t ? o : -1, a = Object(r); (t ? i-- : ++i < o) && n(a[i], i, a) !== !1; )
                    ;
                return r
            }
        }
        yE.exports = UM
    }
    );
    var Ua = u( (s5, IE) => {
        var VM = Xa()
          , WM = mE()
          , BM = WM(VM);
        IE.exports = BM
    }
    );
    var OE = u( (u5, TE) => {
        function jM(e, t, r, n, o) {
            return o(e, function(i, a, s) {
                r = n ? (n = !1,
                i) : t(r, i, a, s)
            }),
            r
        }
        TE.exports = jM
    }
    );
    var SE = u( (c5, bE) => {
        var kM = pE()
          , HM = Ua()
          , KM = wt()
          , zM = OE()
          , YM = Re();
        function QM(e, t, r) {
            var n = YM(e) ? kM : zM
              , o = arguments.length < 3;
            return n(e, KM(t, 4), r, o, HM)
        }
        bE.exports = QM
    }
    );
    var wE = u( (l5, AE) => {
        var $M = Na()
          , ZM = wt()
          , JM = xa()
          , eD = Math.max
          , tD = Math.min;
        function rD(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var o = n - 1;
            return r !== void 0 && (o = JM(r),
            o = r < 0 ? eD(n + o, 0) : tD(o, n - 1)),
            $M(e, ZM(t, 3), o, !0)
        }
        AE.exports = rD
    }
    );
    var CE = u( (f5, RE) => {
        var nD = Ca()
          , iD = wE()
          , oD = nD(iD);
        RE.exports = oD
    }
    );
    var xE = u(si => {
        "use strict";
        Object.defineProperty(si, "__esModule", {
            value: !0
        });
        si.default = void 0;
        var aD = Object.prototype.hasOwnProperty;
        function NE(e, t) {
            return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
        }
        function sD(e, t) {
            if (NE(e, t))
                return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null)
                return !1;
            let r = Object.keys(e)
              , n = Object.keys(t);
            if (r.length !== n.length)
                return !1;
            for (let o = 0; o < r.length; o++)
                if (!aD.call(t, r[o]) || !NE(e[r[o]], t[r[o]]))
                    return !1;
            return !0
        }
        var uD = sD;
        si.default = uD
    }
    );
    var QE = u(pe => {
        "use strict";
        var fi = $e().default;
        Object.defineProperty(pe, "__esModule", {
            value: !0
        });
        pe.cleanupHTMLElement = a1;
        pe.clearAllStyles = o1;
        pe.clearObjectCache = AD;
        pe.getActionListProgress = u1;
        pe.getAffectedElements = Ka;
        pe.getComputedStyle = LD;
        pe.getDestinationValues = VD;
        pe.getElementId = ND;
        pe.getInstanceId = RD;
        pe.getInstanceOrigin = FD;
        pe.getItemConfigByKey = void 0;
        pe.getMaxDurationItemIndex = YE;
        pe.getNamespacedParameterId = f1;
        pe.getRenderType = HE;
        pe.getStyleProp = WD;
        pe.mediaQueriesEqual = p1;
        pe.observeStore = PD;
        pe.reduceListToGroup = c1;
        pe.reifyState = xD;
        pe.renderHTMLElement = BD;
        Object.defineProperty(pe, "shallowEqual", {
            enumerable: !0,
            get: function() {
                return XE.default
            }
        });
        pe.shouldAllowMediaQuery = d1;
        pe.shouldNamespaceEventParameter = l1;
        pe.stringifyTarget = v1;
        var Rt = fi(fE())
          , Ba = fi(SE())
          , Wa = fi(CE())
          , qE = nr()
          , Vt = Xe()
          , XE = fi(xE())
          , cD = Da()
          , pt = Ga()
          , De = ti()
          , {BACKGROUND: lD, TRANSFORM: fD, TRANSLATE_3D: dD, SCALE_3D: pD, ROTATE_X: vD, ROTATE_Y: hD, ROTATE_Z: ED, SKEW: gD, PRESERVE_3D: _D, FLEX: yD, OPACITY: ci, FILTER: Yr, FONT_VARIATION_SETTINGS: Qr, WIDTH: ft, HEIGHT: dt, BACKGROUND_COLOR: UE, BORDER_COLOR: mD, COLOR: ID, CHILDREN: PE, IMMEDIATE_CHILDREN: TD, SIBLINGS: LE, PARENT: OD, DISPLAY: li, WILL_CHANGE: pr, AUTO: Ct, COMMA_DELIMITER: $r, COLON_DELIMITER: bD, BAR_DELIMITER: Va, RENDER_TRANSFORM: VE, RENDER_GENERAL: ja, RENDER_STYLE: ka, RENDER_PLUGIN: WE} = Vt.IX2EngineConstants
          , {TRANSFORM_MOVE: vr, TRANSFORM_SCALE: hr, TRANSFORM_ROTATE: Er, TRANSFORM_SKEW: Zr, STYLE_OPACITY: BE, STYLE_FILTER: Jr, STYLE_FONT_VARIATION: en, STYLE_SIZE: gr, STYLE_BACKGROUND_COLOR: _r, STYLE_BORDER: yr, STYLE_TEXT_COLOR: mr, GENERAL_DISPLAY: di, OBJECT_VALUE: SD} = Vt.ActionTypeConsts
          , jE = e => e.trim()
          , Ha = Object.freeze({
            [_r]: UE,
            [yr]: mD,
            [mr]: ID
        })
          , kE = Object.freeze({
            [De.TRANSFORM_PREFIXED]: fD,
            [UE]: lD,
            [ci]: ci,
            [Yr]: Yr,
            [ft]: ft,
            [dt]: dt,
            [Qr]: Qr
        })
          , ui = new Map;
        function AD() {
            ui.clear()
        }
        var wD = 1;
        function RD() {
            return "i" + wD++
        }
        var CD = 1;
        function ND(e, t) {
            for (let r in e) {
                let n = e[r];
                if (n && n.ref === t)
                    return n.id
            }
            return "e" + CD++
        }
        function xD({events: e, actionLists: t, site: r}={}) {
            let n = (0,
            Ba.default)(e, (a, s) => {
                let {eventTypeId: c} = s;
                return a[c] || (a[c] = {}),
                a[c][s.id] = s,
                a
            }
            , {})
              , o = r && r.mediaQueries
              , i = [];
            return o ? i = o.map(a => a.key) : (o = [],
            console.warn("IX2 missing mediaQueries in site data")),
            {
                ixData: {
                    events: e,
                    actionLists: t,
                    eventTypeMap: n,
                    mediaQueries: o,
                    mediaQueryKeys: i
                }
            }
        }
        var qD = (e, t) => e === t;
        function PD({store: e, select: t, onChange: r, comparator: n=qD}) {
            let {getState: o, subscribe: i} = e
              , a = i(c)
              , s = t(o());
            function c() {
                let d = t(o());
                if (d == null) {
                    a();
                    return
                }
                n(d, s) || (s = d,
                r(s, e))
            }
            return a
        }
        function ME(e) {
            let t = typeof e;
            if (t === "string")
                return {
                    id: e
                };
            if (e != null && t === "object") {
                let {id: r, objectId: n, selector: o, selectorGuids: i, appliesTo: a, useEventTarget: s} = e;
                return {
                    id: r,
                    objectId: n,
                    selector: o,
                    selectorGuids: i,
                    appliesTo: a,
                    useEventTarget: s
                }
            }
            return {}
        }
        function Ka({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: o}) {
            var i, a, s;
            if (!o)
                throw new Error("IX2 missing elementApi");
            let {targets: c} = e;
            if (Array.isArray(c) && c.length > 0)
                return c.reduce( (G, V) => G.concat(Ka({
                    config: {
                        target: V
                    },
                    event: t,
                    eventTarget: r,
                    elementRoot: n,
                    elementApi: o
                })), []);
            let {getValidDocument: d, getQuerySelector: h, queryDocument: p, getChildElements: _, getSiblingElements: O, matchSelector: S, elementContains: w, isSiblingNode: L} = o
              , {target: C} = e;
            if (!C)
                return [];
            let {id: N, objectId: b, selector: M, selectorGuids: q, appliesTo: P, useEventTarget: U} = ME(C);
            if (b)
                return [ui.has(b) ? ui.get(b) : ui.set(b, {}).get(b)];
            if (P === Vt.EventAppliesTo.PAGE) {
                let G = d(N);
                return G ? [G] : []
            }
            let H = ((i = t == null || (a = t.action) === null || a === void 0 || (s = a.config) === null || s === void 0 ? void 0 : s.affectedElements) !== null && i !== void 0 ? i : {})[N || M] || {}, ne = !!(H.id || H.selector), J, X, I, D = t && h(ME(t.target));
            if (ne ? (J = H.limitAffectedElements,
            X = D,
            I = h(H)) : X = I = h({
                id: N,
                selector: M,
                selectorGuids: q
            }),
            t && U) {
                let G = r && (I || U === !0) ? [r] : p(D);
                if (I) {
                    if (U === OD)
                        return p(I).filter(V => G.some(Q => w(V, Q)));
                    if (U === PE)
                        return p(I).filter(V => G.some(Q => w(Q, V)));
                    if (U === LE)
                        return p(I).filter(V => G.some(Q => L(Q, V)))
                }
                return G
            }
            return X == null || I == null ? [] : De.IS_BROWSER_ENV && n ? p(I).filter(G => n.contains(G)) : J === PE ? p(X, I) : J === TD ? _(p(X)).filter(S(I)) : J === LE ? O(p(X)).filter(S(I)) : p(I)
        }
        function LD({element: e, actionItem: t}) {
            if (!De.IS_BROWSER_ENV)
                return {};
            let {actionTypeId: r} = t;
            switch (r) {
            case gr:
            case _r:
            case yr:
            case mr:
            case di:
                return window.getComputedStyle(e);
            default:
                return {}
            }
        }
        var DE = /px/
          , MD = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = jD[n.type]),
        r), e || {})
          , DD = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = kD[n.type] || n.defaultValue || 0),
        r), e || {});
        function FD(e, t={}, r={}, n, o) {
            let {getStyle: i} = o
              , {actionTypeId: a} = n;
            if ((0,
            pt.isPluginType)(a))
                return (0,
                pt.getPluginOrigin)(a)(t[a], n);
            switch (n.actionTypeId) {
            case vr:
            case hr:
            case Er:
            case Zr:
                return t[n.actionTypeId] || za[n.actionTypeId];
            case Jr:
                return MD(t[n.actionTypeId], n.config.filters);
            case en:
                return DD(t[n.actionTypeId], n.config.fontVariations);
            case BE:
                return {
                    value: (0,
                    Rt.default)(parseFloat(i(e, ci)), 1)
                };
            case gr:
                {
                    let s = i(e, ft), c = i(e, dt), d, h;
                    return n.config.widthUnit === Ct ? d = DE.test(s) ? parseFloat(s) : parseFloat(r.width) : d = (0,
                    Rt.default)(parseFloat(s), parseFloat(r.width)),
                    n.config.heightUnit === Ct ? h = DE.test(c) ? parseFloat(c) : parseFloat(r.height) : h = (0,
                    Rt.default)(parseFloat(c), parseFloat(r.height)),
                    {
                        widthValue: d,
                        heightValue: h
                    }
                }
            case _r:
            case yr:
            case mr:
                return r1({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: i
                });
            case di:
                return {
                    value: (0,
                    Rt.default)(i(e, li), r.display)
                };
            case SD:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
            }
        }
        var GD = (e, t) => (t && (e[t.type] = t.value || 0),
        e)
          , XD = (e, t) => (t && (e[t.type] = t.value || 0),
        e)
          , UD = (e, t, r) => {
            if ((0,
            pt.isPluginType)(e))
                return (0,
                pt.getPluginConfig)(e)(r, t);
            switch (e) {
            case Jr:
                {
                    let n = (0,
                    Wa.default)(r.filters, ({type: o}) => o === t);
                    return n ? n.value : 0
                }
            case en:
                {
                    let n = (0,
                    Wa.default)(r.fontVariations, ({type: o}) => o === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        pe.getItemConfigByKey = UD;
        function VD({element: e, actionItem: t, elementApi: r}) {
            if ((0,
            pt.isPluginType)(t.actionTypeId))
                return (0,
                pt.getPluginDestination)(t.actionTypeId)(t.config);
            switch (t.actionTypeId) {
            case vr:
            case hr:
            case Er:
            case Zr:
                {
                    let {xValue: n, yValue: o, zValue: i} = t.config;
                    return {
                        xValue: n,
                        yValue: o,
                        zValue: i
                    }
                }
            case gr:
                {
                    let {getStyle: n, setStyle: o, getProperty: i} = r
                      , {widthUnit: a, heightUnit: s} = t.config
                      , {widthValue: c, heightValue: d} = t.config;
                    if (!De.IS_BROWSER_ENV)
                        return {
                            widthValue: c,
                            heightValue: d
                        };
                    if (a === Ct) {
                        let h = n(e, ft);
                        o(e, ft, ""),
                        c = i(e, "offsetWidth"),
                        o(e, ft, h)
                    }
                    if (s === Ct) {
                        let h = n(e, dt);
                        o(e, dt, ""),
                        d = i(e, "offsetHeight"),
                        o(e, dt, h)
                    }
                    return {
                        widthValue: c,
                        heightValue: d
                    }
                }
            case _r:
            case yr:
            case mr:
                {
                    let {rValue: n, gValue: o, bValue: i, aValue: a} = t.config;
                    return {
                        rValue: n,
                        gValue: o,
                        bValue: i,
                        aValue: a
                    }
                }
            case Jr:
                return t.config.filters.reduce(GD, {});
            case en:
                return t.config.fontVariations.reduce(XD, {});
            default:
                {
                    let {value: n} = t.config;
                    return {
                        value: n
                    }
                }
            }
        }
        function HE(e) {
            if (/^TRANSFORM_/.test(e))
                return VE;
            if (/^STYLE_/.test(e))
                return ka;
            if (/^GENERAL_/.test(e))
                return ja;
            if (/^PLUGIN_/.test(e))
                return WE
        }
        function WD(e, t) {
            return e === ka ? t.replace("STYLE_", "").toLowerCase() : null
        }
        function BD(e, t, r, n, o, i, a, s, c) {
            switch (s) {
            case VE:
                return zD(e, t, r, o, a);
            case ka:
                return n1(e, t, r, o, i, a);
            case ja:
                return i1(e, o, a);
            case WE:
                {
                    let {actionTypeId: d} = o;
                    if ((0,
                    pt.isPluginType)(d))
                        return (0,
                        pt.renderPlugin)(d)(c, t, o)
                }
            }
        }
        var za = {
            [vr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [hr]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Er]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Zr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }
          , jD = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        })
          , kD = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        })
          , HD = (e, t) => {
            let r = (0,
            Wa.default)(t.filters, ({type: n}) => n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
          , KD = Object.keys(za);
        function zD(e, t, r, n, o) {
            let i = KD.map(s => {
                let c = za[s]
                  , {xValue: d=c.xValue, yValue: h=c.yValue, zValue: p=c.zValue, xUnit: _="", yUnit: O="", zUnit: S=""} = t[s] || {};
                switch (s) {
                case vr:
                    return `${dD}(${d}${_}, ${h}${O}, ${p}${S})`;
                case hr:
                    return `${pD}(${d}${_}, ${h}${O}, ${p}${S})`;
                case Er:
                    return `${vD}(${d}${_}) ${hD}(${h}${O}) ${ED}(${p}${S})`;
                case Zr:
                    return `${gD}(${d}${_}, ${h}${O})`;
                default:
                    return ""
                }
            }
            ).join(" ")
              , {setStyle: a} = o;
            Wt(e, De.TRANSFORM_PREFIXED, o),
            a(e, De.TRANSFORM_PREFIXED, i),
            $D(n, r) && a(e, De.TRANSFORM_STYLE_PREFIXED, _D)
        }
        function YD(e, t, r, n) {
            let o = (0,
            Ba.default)(t, (a, s, c) => `${a} ${c}(${s}${HD(c, r)})`, "")
              , {setStyle: i} = n;
            Wt(e, Yr, n),
            i(e, Yr, o)
        }
        function QD(e, t, r, n) {
            let o = (0,
            Ba.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`),
            a), []).join(", ")
              , {setStyle: i} = n;
            Wt(e, Qr, n),
            i(e, Qr, o)
        }
        function $D({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
            return e === vr && n !== void 0 || e === hr && n !== void 0 || e === Er && (t !== void 0 || r !== void 0)
        }
        var ZD = "\\(([^)]+)\\)"
          , JD = /^rgb/
          , e1 = RegExp(`rgba?${ZD}`);
        function t1(e, t) {
            let r = e.exec(t);
            return r ? r[1] : ""
        }
        function r1({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
            let o = Ha[t]
              , i = n(e, o)
              , a = JD.test(i) ? i : r[o]
              , s = t1(e1, a).split($r);
            return {
                rValue: (0,
                Rt.default)(parseInt(s[0], 10), 255),
                gValue: (0,
                Rt.default)(parseInt(s[1], 10), 255),
                bValue: (0,
                Rt.default)(parseInt(s[2], 10), 255),
                aValue: (0,
                Rt.default)(parseFloat(s[3]), 1)
            }
        }
        function n1(e, t, r, n, o, i) {
            let {setStyle: a} = i;
            switch (n.actionTypeId) {
            case gr:
                {
                    let {widthUnit: s="", heightUnit: c=""} = n.config
                      , {widthValue: d, heightValue: h} = r;
                    d !== void 0 && (s === Ct && (s = "px"),
                    Wt(e, ft, i),
                    a(e, ft, d + s)),
                    h !== void 0 && (c === Ct && (c = "px"),
                    Wt(e, dt, i),
                    a(e, dt, h + c));
                    break
                }
            case Jr:
                {
                    YD(e, r, n.config, i);
                    break
                }
            case en:
                {
                    QD(e, r, n.config, i);
                    break
                }
            case _r:
            case yr:
            case mr:
                {
                    let s = Ha[n.actionTypeId]
                      , c = Math.round(r.rValue)
                      , d = Math.round(r.gValue)
                      , h = Math.round(r.bValue)
                      , p = r.aValue;
                    Wt(e, s, i),
                    a(e, s, p >= 1 ? `rgb(${c},${d},${h})` : `rgba(${c},${d},${h},${p})`);
                    break
                }
            default:
                {
                    let {unit: s=""} = n.config;
                    Wt(e, o, i),
                    a(e, o, r.value + s);
                    break
                }
            }
        }
        function i1(e, t, r) {
            let {setStyle: n} = r;
            switch (t.actionTypeId) {
            case di:
                {
                    let {value: o} = t.config;
                    o === yD && De.IS_BROWSER_ENV ? n(e, li, De.FLEX_PREFIXED) : n(e, li, o);
                    return
                }
            }
        }
        function Wt(e, t, r) {
            if (!De.IS_BROWSER_ENV)
                return;
            let n = kE[t];
            if (!n)
                return;
            let {getStyle: o, setStyle: i} = r
              , a = o(e, pr);
            if (!a) {
                i(e, pr, n);
                return
            }
            let s = a.split($r).map(jE);
            s.indexOf(n) === -1 && i(e, pr, s.concat(n).join($r))
        }
        function KE(e, t, r) {
            if (!De.IS_BROWSER_ENV)
                return;
            let n = kE[t];
            if (!n)
                return;
            let {getStyle: o, setStyle: i} = r
              , a = o(e, pr);
            !a || a.indexOf(n) === -1 || i(e, pr, a.split($r).map(jE).filter(s => s !== n).join($r))
        }
        function o1({store: e, elementApi: t}) {
            let {ixData: r} = e.getState()
              , {events: n={}, actionLists: o={}} = r;
            Object.keys(n).forEach(i => {
                let a = n[i]
                  , {config: s} = a.action
                  , {actionListId: c} = s
                  , d = o[c];
                d && FE({
                    actionList: d,
                    event: a,
                    elementApi: t
                })
            }
            ),
            Object.keys(o).forEach(i => {
                FE({
                    actionList: o[i],
                    elementApi: t
                })
            }
            )
        }
        function FE({actionList: e={}, event: t, elementApi: r}) {
            let {actionItemGroups: n, continuousParameterGroups: o} = e;
            n && n.forEach(i => {
                GE({
                    actionGroup: i,
                    event: t,
                    elementApi: r
                })
            }
            ),
            o && o.forEach(i => {
                let {continuousActionGroups: a} = i;
                a.forEach(s => {
                    GE({
                        actionGroup: s,
                        event: t,
                        elementApi: r
                    })
                }
                )
            }
            )
        }
        function GE({actionGroup: e, event: t, elementApi: r}) {
            let {actionItems: n} = e;
            n.forEach( ({actionTypeId: o, config: i}) => {
                let a;
                (0,
                pt.isPluginType)(o) ? a = (0,
                pt.clearPlugin)(o) : a = zE({
                    effect: s1,
                    actionTypeId: o,
                    elementApi: r
                }),
                Ka({
                    config: i,
                    event: t,
                    elementApi: r
                }).forEach(a)
            }
            )
        }
        function a1(e, t, r) {
            let {setStyle: n, getStyle: o} = r
              , {actionTypeId: i} = t;
            if (i === gr) {
                let {config: a} = t;
                a.widthUnit === Ct && n(e, ft, ""),
                a.heightUnit === Ct && n(e, dt, "")
            }
            o(e, pr) && zE({
                effect: KE,
                actionTypeId: i,
                elementApi: r
            })(e)
        }
        var zE = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
            switch (t) {
            case vr:
            case hr:
            case Er:
            case Zr:
                e(n, De.TRANSFORM_PREFIXED, r);
                break;
            case Jr:
                e(n, Yr, r);
                break;
            case en:
                e(n, Qr, r);
                break;
            case BE:
                e(n, ci, r);
                break;
            case gr:
                e(n, ft, r),
                e(n, dt, r);
                break;
            case _r:
            case yr:
            case mr:
                e(n, Ha[t], r);
                break;
            case di:
                e(n, li, r);
                break
            }
        }
        ;
        function s1(e, t, r) {
            let {setStyle: n} = r;
            KE(e, t, r),
            n(e, t, ""),
            t === De.TRANSFORM_PREFIXED && n(e, De.TRANSFORM_STYLE_PREFIXED, "")
        }
        function YE(e) {
            let t = 0
              , r = 0;
            return e.forEach( (n, o) => {
                let {config: i} = n
                  , a = i.delay + i.duration;
                a >= t && (t = a,
                r = o)
            }
            ),
            r
        }
        function u1(e, t) {
            let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
              , {actionItem: o, verboseTimeElapsed: i=0} = t
              , a = 0
              , s = 0;
            return r.forEach( (c, d) => {
                if (n && d === 0)
                    return;
                let {actionItems: h} = c
                  , p = h[YE(h)]
                  , {config: _, actionTypeId: O} = p;
                o.id === p.id && (s = a + i);
                let S = HE(O) === ja ? 0 : _.duration;
                a += _.delay + S
            }
            ),
            a > 0 ? (0,
            cD.optimizeFloat)(s / a) : 0
        }
        function c1({actionList: e, actionItemId: t, rawData: r}) {
            let {actionItemGroups: n, continuousParameterGroups: o} = e
              , i = []
              , a = s => (i.push((0,
            qE.mergeIn)(s, ["config"], {
                delay: 0,
                duration: 0
            })),
            s.id === t);
            return n && n.some( ({actionItems: s}) => s.some(a)),
            o && o.some(s => {
                let {continuousActionGroups: c} = s;
                return c.some( ({actionItems: d}) => d.some(a))
            }
            ),
            (0,
            qE.setIn)(r, ["actionLists"], {
                [e.id]: {
                    id: e.id,
                    actionItemGroups: [{
                        actionItems: i
                    }]
                }
            })
        }
        function l1(e, {basedOn: t}) {
            return e === Vt.EventTypeConsts.SCROLLING_IN_VIEW && (t === Vt.EventBasedOn.ELEMENT || t == null) || e === Vt.EventTypeConsts.MOUSE_MOVE && t === Vt.EventBasedOn.ELEMENT
        }
        function f1(e, t) {
            return e + bD + t
        }
        function d1(e, t) {
            return t == null ? !0 : e.indexOf(t) !== -1
        }
        function p1(e, t) {
            return (0,
            XE.default)(e && e.sort(), t && t.sort())
        }
        function v1(e) {
            if (typeof e == "string")
                return e;
            if (e.pluginElement && e.objectId)
                return e.pluginElement + Va + e.objectId;
            let {id: t="", selector: r="", useEventTarget: n=""} = e;
            return t + Va + r + Va + n
        }
    }
    );
    var Bt = u(Fe => {
        "use strict";
        var Ir = Lt().default;
        Object.defineProperty(Fe, "__esModule", {
            value: !0
        });
        Fe.IX2VanillaUtils = Fe.IX2VanillaPlugins = Fe.IX2ElementsReducer = Fe.IX2Easings = Fe.IX2EasingUtils = Fe.IX2BrowserSupport = void 0;
        var h1 = Ir(ti());
        Fe.IX2BrowserSupport = h1;
        var E1 = Ir(La());
        Fe.IX2Easings = E1;
        var g1 = Ir(Da());
        Fe.IX2EasingUtils = g1;
        var _1 = Ir(tE());
        Fe.IX2ElementsReducer = _1;
        var y1 = Ir(Ga());
        Fe.IX2VanillaPlugins = y1;
        var m1 = Ir(QE());
        Fe.IX2VanillaUtils = m1
    }
    );
    var eg = u(vi => {
        "use strict";
        Object.defineProperty(vi, "__esModule", {
            value: !0
        });
        vi.ixInstances = void 0;
        var $E = Xe()
          , ZE = Bt()
          , Tr = nr()
          , {IX2_RAW_DATA_IMPORTED: I1, IX2_SESSION_STOPPED: T1, IX2_INSTANCE_ADDED: O1, IX2_INSTANCE_STARTED: b1, IX2_INSTANCE_REMOVED: S1, IX2_ANIMATION_FRAME_CHANGED: A1} = $E.IX2EngineActionTypes
          , {optimizeFloat: pi, applyEasing: JE, createBezierEasing: w1} = ZE.IX2EasingUtils
          , {RENDER_GENERAL: R1} = $E.IX2EngineConstants
          , {getItemConfigByKey: Ya, getRenderType: C1, getStyleProp: N1} = ZE.IX2VanillaUtils
          , x1 = (e, t) => {
            let {position: r, parameterId: n, actionGroups: o, destinationKeys: i, smoothing: a, restingValue: s, actionTypeId: c, customEasingFn: d, skipMotion: h, skipToValue: p} = e
              , {parameters: _} = t.payload
              , O = Math.max(1 - a, .01)
              , S = _[n];
            S == null && (O = 1,
            S = s);
            let w = Math.max(S, 0) || 0
              , L = pi(w - r)
              , C = h ? p : pi(r + L * O)
              , N = C * 100;
            if (C === r && e.current)
                return e;
            let b, M, q, P;
            for (let k = 0, {length: H} = o; k < H; k++) {
                let {keyframe: ne, actionItems: J} = o[k];
                if (k === 0 && (b = J[0]),
                N >= ne) {
                    b = J[0];
                    let X = o[k + 1]
                      , I = X && N !== ne;
                    M = I ? X.actionItems[0] : null,
                    I && (q = ne / 100,
                    P = (X.keyframe - ne) / 100)
                }
            }
            let U = {};
            if (b && !M)
                for (let k = 0, {length: H} = i; k < H; k++) {
                    let ne = i[k];
                    U[ne] = Ya(c, ne, b.config)
                }
            else if (b && M && q !== void 0 && P !== void 0) {
                let k = (C - q) / P
                  , H = b.config.easing
                  , ne = JE(H, k, d);
                for (let J = 0, {length: X} = i; J < X; J++) {
                    let I = i[J]
                      , D = Ya(c, I, b.config)
                      , Q = (Ya(c, I, M.config) - D) * ne + D;
                    U[I] = Q
                }
            }
            return (0,
            Tr.merge)(e, {
                position: C,
                current: U
            })
        }
          , q1 = (e, t) => {
            let {active: r, origin: n, start: o, immediate: i, renderType: a, verbose: s, actionItem: c, destination: d, destinationKeys: h, pluginDuration: p, instanceDelay: _, customEasingFn: O, skipMotion: S} = e
              , w = c.config.easing
              , {duration: L, delay: C} = c.config;
            p != null && (L = p),
            C = _ ?? C,
            a === R1 ? L = 0 : (i || S) && (L = C = 0);
            let {now: N} = t.payload;
            if (r && n) {
                let b = N - (o + C);
                if (s) {
                    let k = N - o
                      , H = L + C
                      , ne = pi(Math.min(Math.max(0, k / H), 1));
                    e = (0,
                    Tr.set)(e, "verboseTimeElapsed", H * ne)
                }
                if (b < 0)
                    return e;
                let M = pi(Math.min(Math.max(0, b / L), 1))
                  , q = JE(w, M, O)
                  , P = {}
                  , U = null;
                return h.length && (U = h.reduce( (k, H) => {
                    let ne = d[H]
                      , J = parseFloat(n[H]) || 0
                      , I = (parseFloat(ne) - J) * q + J;
                    return k[H] = I,
                    k
                }
                , {})),
                P.current = U,
                P.position = M,
                M === 1 && (P.active = !1,
                P.complete = !0),
                (0,
                Tr.merge)(e, P)
            }
            return e
        }
          , P1 = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case I1:
                return t.payload.ixInstances || Object.freeze({});
            case T1:
                return Object.freeze({});
            case O1:
                {
                    let {instanceId: r, elementId: n, actionItem: o, eventId: i, eventTarget: a, eventStateKey: s, actionListId: c, groupIndex: d, isCarrier: h, origin: p, destination: _, immediate: O, verbose: S, continuous: w, parameterId: L, actionGroups: C, smoothing: N, restingValue: b, pluginInstance: M, pluginDuration: q, instanceDelay: P, skipMotion: U, skipToValue: k} = t.payload
                      , {actionTypeId: H} = o
                      , ne = C1(H)
                      , J = N1(ne, H)
                      , X = Object.keys(_).filter(D => _[D] != null)
                      , {easing: I} = o.config;
                    return (0,
                    Tr.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: p,
                        destination: _,
                        destinationKeys: X,
                        immediate: O,
                        verbose: S,
                        current: null,
                        actionItem: o,
                        actionTypeId: H,
                        eventId: i,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: c,
                        groupIndex: d,
                        renderType: ne,
                        isCarrier: h,
                        styleProp: J,
                        continuous: w,
                        parameterId: L,
                        actionGroups: C,
                        smoothing: N,
                        restingValue: b,
                        pluginInstance: M,
                        pluginDuration: q,
                        instanceDelay: P,
                        skipMotion: U,
                        skipToValue: k,
                        customEasingFn: Array.isArray(I) && I.length === 4 ? w1(I) : void 0
                    })
                }
            case b1:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    Tr.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case S1:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , o = Object.keys(e)
                      , {length: i} = o;
                    for (let a = 0; a < i; a++) {
                        let s = o[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
            case A1:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: o} = n;
                    for (let i = 0; i < o; i++) {
                        let a = n[i]
                          , s = e[a]
                          , c = s.continuous ? x1 : q1;
                        r = (0,
                        Tr.set)(r, a, c(s, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
        ;
        vi.ixInstances = P1
    }
    );
    var tg = u(hi => {
        "use strict";
        Object.defineProperty(hi, "__esModule", {
            value: !0
        });
        hi.ixParameters = void 0;
        var L1 = Xe()
          , {IX2_RAW_DATA_IMPORTED: M1, IX2_SESSION_STOPPED: D1, IX2_PARAMETER_CHANGED: F1} = L1.IX2EngineActionTypes
          , G1 = (e={}, t) => {
            switch (t.type) {
            case M1:
                return t.payload.ixParameters || {};
            case D1:
                return {};
            case F1:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
        ;
        hi.ixParameters = G1
    }
    );
    var rg = u(Ei => {
        "use strict";
        Object.defineProperty(Ei, "__esModule", {
            value: !0
        });
        Ei.default = void 0;
        var X1 = $o()
          , U1 = yf()
          , V1 = Gf()
          , W1 = Uf()
          , B1 = Bt()
          , j1 = eg()
          , k1 = tg()
          , {ixElements: H1} = B1.IX2ElementsReducer
          , K1 = (0,
        X1.combineReducers)({
            ixData: U1.ixData,
            ixRequest: V1.ixRequest,
            ixSession: W1.ixSession,
            ixElements: H1,
            ixInstances: j1.ixInstances,
            ixParameters: k1.ixParameters
        });
        Ei.default = K1
    }
    );
    var ng = u( (_5, tn) => {
        function z1(e, t) {
            if (e == null)
                return {};
            var r = {}, n = Object.keys(e), o, i;
            for (i = 0; i < n.length; i++)
                o = n[i],
                !(t.indexOf(o) >= 0) && (r[o] = e[o]);
            return r
        }
        tn.exports = z1,
        tn.exports.__esModule = !0,
        tn.exports.default = tn.exports
    }
    );
    var og = u( (y5, ig) => {
        var Y1 = St()
          , Q1 = Re()
          , $1 = _t()
          , Z1 = "[object String]";
        function J1(e) {
            return typeof e == "string" || !Q1(e) && $1(e) && Y1(e) == Z1
        }
        ig.exports = J1
    }
    );
    var sg = u( (m5, ag) => {
        var eF = Ra()
          , tF = eF("length");
        ag.exports = tF
    }
    );
    var cg = u( (I5, ug) => {
        var rF = "\\ud800-\\udfff"
          , nF = "\\u0300-\\u036f"
          , iF = "\\ufe20-\\ufe2f"
          , oF = "\\u20d0-\\u20ff"
          , aF = nF + iF + oF
          , sF = "\\ufe0e\\ufe0f"
          , uF = "\\u200d"
          , cF = RegExp("[" + uF + rF + aF + sF + "]");
        function lF(e) {
            return cF.test(e)
        }
        ug.exports = lF
    }
    );
    var _g = u( (T5, gg) => {
        var fg = "\\ud800-\\udfff"
          , fF = "\\u0300-\\u036f"
          , dF = "\\ufe20-\\ufe2f"
          , pF = "\\u20d0-\\u20ff"
          , vF = fF + dF + pF
          , hF = "\\ufe0e\\ufe0f"
          , EF = "[" + fg + "]"
          , Qa = "[" + vF + "]"
          , $a = "\\ud83c[\\udffb-\\udfff]"
          , gF = "(?:" + Qa + "|" + $a + ")"
          , dg = "[^" + fg + "]"
          , pg = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , vg = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , _F = "\\u200d"
          , hg = gF + "?"
          , Eg = "[" + hF + "]?"
          , yF = "(?:" + _F + "(?:" + [dg, pg, vg].join("|") + ")" + Eg + hg + ")*"
          , mF = Eg + hg + yF
          , IF = "(?:" + [dg + Qa + "?", Qa, pg, vg, EF].join("|") + ")"
          , lg = RegExp($a + "(?=" + $a + ")|" + IF + mF, "g");
        function TF(e) {
            for (var t = lg.lastIndex = 0; lg.test(e); )
                ++t;
            return t
        }
        gg.exports = TF
    }
    );
    var mg = u( (O5, yg) => {
        var OF = sg()
          , bF = cg()
          , SF = _g();
        function AF(e) {
            return bF(e) ? SF(e) : OF(e)
        }
        yg.exports = AF
    }
    );
    var Tg = u( (b5, Ig) => {
        var wF = Hn()
          , RF = Kn()
          , CF = Gt()
          , NF = og()
          , xF = mg()
          , qF = "[object Map]"
          , PF = "[object Set]";
        function LF(e) {
            if (e == null)
                return 0;
            if (CF(e))
                return NF(e) ? xF(e) : e.length;
            var t = RF(e);
            return t == qF || t == PF ? e.size : wF(e).length
        }
        Ig.exports = LF
    }
    );
    var bg = u( (S5, Og) => {
        var MF = "Expected a function";
        function DF(e) {
            if (typeof e != "function")
                throw new TypeError(MF);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Og.exports = DF
    }
    );
    var Za = u( (A5, Sg) => {
        var FF = At()
          , GF = function() {
            try {
                var e = FF(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        Sg.exports = GF
    }
    );
    var Ja = u( (w5, wg) => {
        var Ag = Za();
        function XF(e, t, r) {
            t == "__proto__" && Ag ? Ag(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        wg.exports = XF
    }
    );
    var Cg = u( (R5, Rg) => {
        var UF = Ja()
          , VF = Dn()
          , WF = Object.prototype
          , BF = WF.hasOwnProperty;
        function jF(e, t, r) {
            var n = e[t];
            (!(BF.call(e, t) && VF(n, r)) || r === void 0 && !(t in e)) && UF(e, t, r)
        }
        Rg.exports = jF
    }
    );
    var qg = u( (C5, xg) => {
        var kF = Cg()
          , HF = Hr()
          , KF = Wn()
          , Ng = lt()
          , zF = fr();
        function YF(e, t, r, n) {
            if (!Ng(e))
                return e;
            t = HF(t, e);
            for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
                var c = zF(t[o])
                  , d = r;
                if (c === "__proto__" || c === "constructor" || c === "prototype")
                    return e;
                if (o != a) {
                    var h = s[c];
                    d = n ? n(h, c, s) : void 0,
                    d === void 0 && (d = Ng(h) ? h : KF(t[o + 1]) ? [] : {})
                }
                kF(s, c, d),
                s = s[c]
            }
            return e
        }
        xg.exports = YF
    }
    );
    var Lg = u( (N5, Pg) => {
        var QF = Qn()
          , $F = qg()
          , ZF = Hr();
        function JF(e, t, r) {
            for (var n = -1, o = t.length, i = {}; ++n < o; ) {
                var a = t[n]
                  , s = QF(e, a);
                r(s, a) && $F(i, ZF(a, e), s)
            }
            return i
        }
        Pg.exports = JF
    }
    );
    var Dg = u( (x5, Mg) => {
        var e2 = Un()
          , t2 = Go()
          , r2 = pa()
          , n2 = da()
          , i2 = Object.getOwnPropertySymbols
          , o2 = i2 ? function(e) {
            for (var t = []; e; )
                e2(t, r2(e)),
                e = t2(e);
            return t
        }
        : n2;
        Mg.exports = o2
    }
    );
    var Gg = u( (q5, Fg) => {
        function a2(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        Fg.exports = a2
    }
    );
    var Ug = u( (P5, Xg) => {
        var s2 = lt()
          , u2 = kn()
          , c2 = Gg()
          , l2 = Object.prototype
          , f2 = l2.hasOwnProperty;
        function d2(e) {
            if (!s2(e))
                return c2(e);
            var t = u2(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !f2.call(e, n)) || r.push(n);
            return r
        }
        Xg.exports = d2
    }
    );
    var Wg = u( (L5, Vg) => {
        var p2 = ha()
          , v2 = Ug()
          , h2 = Gt();
        function E2(e) {
            return h2(e) ? p2(e, !0) : v2(e)
        }
        Vg.exports = E2
    }
    );
    var jg = u( (M5, Bg) => {
        var g2 = fa()
          , _2 = Dg()
          , y2 = Wg();
        function m2(e) {
            return g2(e, y2, _2)
        }
        Bg.exports = m2
    }
    );
    var Hg = u( (D5, kg) => {
        var I2 = wa()
          , T2 = wt()
          , O2 = Lg()
          , b2 = jg();
        function S2(e, t) {
            if (e == null)
                return {};
            var r = I2(b2(e), function(n) {
                return [n]
            });
            return t = T2(t),
            O2(e, r, function(n, o) {
                return t(n, o[0])
            })
        }
        kg.exports = S2
    }
    );
    var zg = u( (F5, Kg) => {
        var A2 = wt()
          , w2 = bg()
          , R2 = Hg();
        function C2(e, t) {
            return R2(e, w2(A2(t)))
        }
        Kg.exports = C2
    }
    );
    var Qg = u( (G5, Yg) => {
        var N2 = Hn()
          , x2 = Kn()
          , q2 = Ur()
          , P2 = Re()
          , L2 = Gt()
          , M2 = Vn()
          , D2 = kn()
          , F2 = jn()
          , G2 = "[object Map]"
          , X2 = "[object Set]"
          , U2 = Object.prototype
          , V2 = U2.hasOwnProperty;
        function W2(e) {
            if (e == null)
                return !0;
            if (L2(e) && (P2(e) || typeof e == "string" || typeof e.splice == "function" || M2(e) || F2(e) || q2(e)))
                return !e.length;
            var t = x2(e);
            if (t == G2 || t == X2)
                return !e.size;
            if (D2(e))
                return !N2(e).length;
            for (var r in e)
                if (V2.call(e, r))
                    return !1;
            return !0
        }
        Yg.exports = W2
    }
    );
    var Zg = u( (X5, $g) => {
        var B2 = Ja()
          , j2 = Xa()
          , k2 = wt();
        function H2(e, t) {
            var r = {};
            return t = k2(t, 3),
            j2(e, function(n, o, i) {
                B2(r, o, t(n, o, i))
            }),
            r
        }
        $g.exports = H2
    }
    );
    var e_ = u( (U5, Jg) => {
        function K2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        Jg.exports = K2
    }
    );
    var r_ = u( (V5, t_) => {
        var z2 = Zn();
        function Y2(e) {
            return typeof e == "function" ? e : z2
        }
        t_.exports = Y2
    }
    );
    var i_ = u( (W5, n_) => {
        var Q2 = e_()
          , $2 = Ua()
          , Z2 = r_()
          , J2 = Re();
        function eG(e, t) {
            var r = J2(e) ? Q2 : $2;
            return r(e, Z2(t))
        }
        n_.exports = eG
    }
    );
    var a_ = u( (B5, o_) => {
        var tG = et()
          , rG = function() {
            return tG.Date.now()
        };
        o_.exports = rG
    }
    );
    var c_ = u( (j5, u_) => {
        var nG = lt()
          , es = a_()
          , s_ = Jn()
          , iG = "Expected a function"
          , oG = Math.max
          , aG = Math.min;
        function sG(e, t, r) {
            var n, o, i, a, s, c, d = 0, h = !1, p = !1, _ = !0;
            if (typeof e != "function")
                throw new TypeError(iG);
            t = s_(t) || 0,
            nG(r) && (h = !!r.leading,
            p = "maxWait"in r,
            i = p ? oG(s_(r.maxWait) || 0, t) : i,
            _ = "trailing"in r ? !!r.trailing : _);
            function O(P) {
                var U = n
                  , k = o;
                return n = o = void 0,
                d = P,
                a = e.apply(k, U),
                a
            }
            function S(P) {
                return d = P,
                s = setTimeout(C, t),
                h ? O(P) : a
            }
            function w(P) {
                var U = P - c
                  , k = P - d
                  , H = t - U;
                return p ? aG(H, i - k) : H
            }
            function L(P) {
                var U = P - c
                  , k = P - d;
                return c === void 0 || U >= t || U < 0 || p && k >= i
            }
            function C() {
                var P = es();
                if (L(P))
                    return N(P);
                s = setTimeout(C, w(P))
            }
            function N(P) {
                return s = void 0,
                _ && n ? O(P) : (n = o = void 0,
                a)
            }
            function b() {
                s !== void 0 && clearTimeout(s),
                d = 0,
                n = c = o = s = void 0
            }
            function M() {
                return s === void 0 ? a : N(es())
            }
            function q() {
                var P = es()
                  , U = L(P);
                if (n = arguments,
                o = this,
                c = P,
                U) {
                    if (s === void 0)
                        return S(c);
                    if (p)
                        return clearTimeout(s),
                        s = setTimeout(C, t),
                        O(c)
                }
                return s === void 0 && (s = setTimeout(C, t)),
                a
            }
            return q.cancel = b,
            q.flush = M,
            q
        }
        u_.exports = sG
    }
    );
    var f_ = u( (k5, l_) => {
        var uG = c_()
          , cG = lt()
          , lG = "Expected a function";
        function fG(e, t, r) {
            var n = !0
              , o = !0;
            if (typeof e != "function")
                throw new TypeError(lG);
            return cG(r) && (n = "leading"in r ? !!r.leading : n,
            o = "trailing"in r ? !!r.trailing : o),
            uG(e, t, {
                leading: n,
                maxWait: t,
                trailing: o
            })
        }
        l_.exports = fG
    }
    );
    var gi = u(oe => {
        "use strict";
        var dG = $e().default;
        Object.defineProperty(oe, "__esModule", {
            value: !0
        });
        oe.viewportWidthChanged = oe.testFrameRendered = oe.stopRequested = oe.sessionStopped = oe.sessionStarted = oe.sessionInitialized = oe.rawDataImported = oe.previewRequested = oe.playbackRequested = oe.parameterChanged = oe.mediaQueriesDefined = oe.instanceStarted = oe.instanceRemoved = oe.instanceAdded = oe.eventStateChanged = oe.eventListenerAdded = oe.elementStateChanged = oe.clearRequested = oe.animationFrameChanged = oe.actionListPlaybackChanged = void 0;
        var d_ = dG(rr())
          , p_ = Xe()
          , pG = Bt()
          , {IX2_RAW_DATA_IMPORTED: vG, IX2_SESSION_INITIALIZED: hG, IX2_SESSION_STARTED: EG, IX2_SESSION_STOPPED: gG, IX2_PREVIEW_REQUESTED: _G, IX2_PLAYBACK_REQUESTED: yG, IX2_STOP_REQUESTED: mG, IX2_CLEAR_REQUESTED: IG, IX2_EVENT_LISTENER_ADDED: TG, IX2_TEST_FRAME_RENDERED: OG, IX2_EVENT_STATE_CHANGED: bG, IX2_ANIMATION_FRAME_CHANGED: SG, IX2_PARAMETER_CHANGED: AG, IX2_INSTANCE_ADDED: wG, IX2_INSTANCE_STARTED: RG, IX2_INSTANCE_REMOVED: CG, IX2_ELEMENT_STATE_CHANGED: NG, IX2_ACTION_LIST_PLAYBACK_CHANGED: xG, IX2_VIEWPORT_WIDTH_CHANGED: qG, IX2_MEDIA_QUERIES_DEFINED: PG} = p_.IX2EngineActionTypes
          , {reifyState: LG} = pG.IX2VanillaUtils
          , MG = e => ({
            type: vG,
            payload: (0,
            d_.default)({}, LG(e))
        });
        oe.rawDataImported = MG;
        var DG = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: hG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        });
        oe.sessionInitialized = DG;
        var FG = () => ({
            type: EG
        });
        oe.sessionStarted = FG;
        var GG = () => ({
            type: gG
        });
        oe.sessionStopped = GG;
        var XG = ({rawData: e, defer: t}) => ({
            type: _G,
            payload: {
                defer: t,
                rawData: e
            }
        });
        oe.previewRequested = XG;
        var UG = ({actionTypeId: e=p_.ActionTypeConsts.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: o, immediate: i, testManual: a, verbose: s, rawData: c}) => ({
            type: yG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: o,
                immediate: i,
                verbose: s,
                rawData: c
            }
        });
        oe.playbackRequested = UG;
        var VG = e => ({
            type: mG,
            payload: {
                actionListId: e
            }
        });
        oe.stopRequested = VG;
        var WG = () => ({
            type: IG
        });
        oe.clearRequested = WG;
        var BG = (e, t) => ({
            type: TG,
            payload: {
                target: e,
                listenerParams: t
            }
        });
        oe.eventListenerAdded = BG;
        var jG = (e=1) => ({
            type: OG,
            payload: {
                step: e
            }
        });
        oe.testFrameRendered = jG;
        var kG = (e, t) => ({
            type: bG,
            payload: {
                stateKey: e,
                newState: t
            }
        });
        oe.eventStateChanged = kG;
        var HG = (e, t) => ({
            type: SG,
            payload: {
                now: e,
                parameters: t
            }
        });
        oe.animationFrameChanged = HG;
        var KG = (e, t) => ({
            type: AG,
            payload: {
                key: e,
                value: t
            }
        });
        oe.parameterChanged = KG;
        var zG = e => ({
            type: wG,
            payload: (0,
            d_.default)({}, e)
        });
        oe.instanceAdded = zG;
        var YG = (e, t) => ({
            type: RG,
            payload: {
                instanceId: e,
                time: t
            }
        });
        oe.instanceStarted = YG;
        var QG = e => ({
            type: CG,
            payload: {
                instanceId: e
            }
        });
        oe.instanceRemoved = QG;
        var $G = (e, t, r, n) => ({
            type: NG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        });
        oe.elementStateChanged = $G;
        var ZG = ({actionListId: e, isPlaying: t}) => ({
            type: xG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        });
        oe.actionListPlaybackChanged = ZG;
        var JG = ({width: e, mediaQueries: t}) => ({
            type: qG,
            payload: {
                width: e,
                mediaQueries: t
            }
        });
        oe.viewportWidthChanged = JG;
        var eX = () => ({
            type: PG
        });
        oe.mediaQueriesDefined = eX
    }
    );
    var E_ = u(xe => {
        "use strict";
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        xe.elementContains = dX;
        xe.getChildElements = vX;
        xe.getClosestElement = void 0;
        xe.getProperty = sX;
        xe.getQuerySelector = cX;
        xe.getRefType = gX;
        xe.getSiblingElements = hX;
        xe.getStyle = aX;
        xe.getValidDocument = lX;
        xe.isSiblingNode = pX;
        xe.matchSelector = uX;
        xe.queryDocument = fX;
        xe.setStyle = oX;
        var tX = Bt()
          , rX = Xe()
          , {ELEMENT_MATCHES: ts} = tX.IX2BrowserSupport
          , {IX2_ID_DELIMITER: v_, HTML_ELEMENT: nX, PLAIN_OBJECT: iX, WF_PAGE: h_} = rX.IX2EngineConstants;
        function oX(e, t, r) {
            e.style[t] = r
        }
        function aX(e, t) {
            return e.style[t]
        }
        function sX(e, t) {
            return e[t]
        }
        function uX(e) {
            return t => t[ts](e)
        }
        function cX({id: e, selector: t}) {
            if (e) {
                let r = e;
                if (e.indexOf(v_) !== -1) {
                    let n = e.split(v_)
                      , o = n[0];
                    if (r = n[1],
                    o !== document.documentElement.getAttribute(h_))
                        return null
                }
                return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
            }
            return t
        }
        function lX(e) {
            return e == null || e === document.documentElement.getAttribute(h_) ? document : null
        }
        function fX(e, t) {
            return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
        }
        function dX(e, t) {
            return e.contains(t)
        }
        function pX(e, t) {
            return e !== t && e.parentNode === t.parentNode
        }
        function vX(e) {
            let t = [];
            for (let r = 0, {length: n} = e || []; r < n; r++) {
                let {children: o} = e[r]
                  , {length: i} = o;
                if (i)
                    for (let a = 0; a < i; a++)
                        t.push(o[a])
            }
            return t
        }
        function hX(e=[]) {
            let t = []
              , r = [];
            for (let n = 0, {length: o} = e; n < o; n++) {
                let {parentNode: i} = e[n];
                if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
                    continue;
                r.push(i);
                let a = i.firstElementChild;
                for (; a != null; )
                    e.indexOf(a) === -1 && t.push(a),
                    a = a.nextElementSibling
            }
            return t
        }
        var EX = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[ts] && r[ts](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
        ;
        xe.getClosestElement = EX;
        function gX(e) {
            return e != null && typeof e == "object" ? e instanceof Element ? nX : iX : null
        }
    }
    );
    var rs = u( (z5, __) => {
        var _X = lt()
          , g_ = Object.create
          , yX = function() {
            function e() {}
            return function(t) {
                if (!_X(t))
                    return {};
                if (g_)
                    return g_(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        __.exports = yX
    }
    );
    var _i = u( (Y5, y_) => {
        function mX() {}
        y_.exports = mX
    }
    );
    var mi = u( (Q5, m_) => {
        var IX = rs()
          , TX = _i();
        function yi(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        yi.prototype = IX(TX.prototype);
        yi.prototype.constructor = yi;
        m_.exports = yi
    }
    );
    var b_ = u( ($5, O_) => {
        var I_ = Zt()
          , OX = Ur()
          , bX = Re()
          , T_ = I_ ? I_.isConcatSpreadable : void 0;
        function SX(e) {
            return bX(e) || OX(e) || !!(T_ && e && e[T_])
        }
        O_.exports = SX
    }
    );
    var w_ = u( (Z5, A_) => {
        var AX = Un()
          , wX = b_();
        function S_(e, t, r, n, o) {
            var i = -1
              , a = e.length;
            for (r || (r = wX),
            o || (o = []); ++i < a; ) {
                var s = e[i];
                t > 0 && r(s) ? t > 1 ? S_(s, t - 1, r, n, o) : AX(o, s) : n || (o[o.length] = s)
            }
            return o
        }
        A_.exports = S_
    }
    );
    var C_ = u( (J5, R_) => {
        var RX = w_();
        function CX(e) {
            var t = e == null ? 0 : e.length;
            return t ? RX(e, 1) : []
        }
        R_.exports = CX
    }
    );
    var x_ = u( (eK, N_) => {
        function NX(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        N_.exports = NX
    }
    );
    var L_ = u( (tK, P_) => {
        var xX = x_()
          , q_ = Math.max;
        function qX(e, t, r) {
            return t = q_(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, o = -1, i = q_(n.length - t, 0), a = Array(i); ++o < i; )
                    a[o] = n[t + o];
                o = -1;
                for (var s = Array(t + 1); ++o < t; )
                    s[o] = n[o];
                return s[t] = r(a),
                xX(e, this, s)
            }
        }
        P_.exports = qX
    }
    );
    var D_ = u( (rK, M_) => {
        function PX(e) {
            return function() {
                return e
            }
        }
        M_.exports = PX
    }
    );
    var X_ = u( (nK, G_) => {
        var LX = D_()
          , F_ = Za()
          , MX = Zn()
          , DX = F_ ? function(e, t) {
            return F_(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: LX(t),
                writable: !0
            })
        }
        : MX;
        G_.exports = DX
    }
    );
    var V_ = u( (iK, U_) => {
        var FX = 800
          , GX = 16
          , XX = Date.now;
        function UX(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = XX()
                  , o = GX - (n - r);
                if (r = n,
                o > 0) {
                    if (++t >= FX)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        U_.exports = UX
    }
    );
    var B_ = u( (oK, W_) => {
        var VX = X_()
          , WX = V_()
          , BX = WX(VX);
        W_.exports = BX
    }
    );
    var k_ = u( (aK, j_) => {
        var jX = C_()
          , kX = L_()
          , HX = B_();
        function KX(e) {
            return HX(kX(e, void 0, jX), e + "")
        }
        j_.exports = KX
    }
    );
    var z_ = u( (sK, K_) => {
        var H_ = Ea()
          , zX = H_ && new H_;
        K_.exports = zX
    }
    );
    var Q_ = u( (uK, Y_) => {
        function YX() {}
        Y_.exports = YX
    }
    );
    var ns = u( (cK, Z_) => {
        var $_ = z_()
          , QX = Q_()
          , $X = $_ ? function(e) {
            return $_.get(e)
        }
        : QX;
        Z_.exports = $X
    }
    );
    var ey = u( (lK, J_) => {
        var ZX = {};
        J_.exports = ZX
    }
    );
    var is = u( (fK, ry) => {
        var ty = ey()
          , JX = Object.prototype
          , eU = JX.hasOwnProperty;
        function tU(e) {
            for (var t = e.name + "", r = ty[t], n = eU.call(ty, t) ? r.length : 0; n--; ) {
                var o = r[n]
                  , i = o.func;
                if (i == null || i == e)
                    return o.name
            }
            return t
        }
        ry.exports = tU
    }
    );
    var Ti = u( (dK, ny) => {
        var rU = rs()
          , nU = _i()
          , iU = 4294967295;
        function Ii(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = iU,
            this.__views__ = []
        }
        Ii.prototype = rU(nU.prototype);
        Ii.prototype.constructor = Ii;
        ny.exports = Ii
    }
    );
    var oy = u( (pK, iy) => {
        function oU(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        iy.exports = oU
    }
    );
    var sy = u( (vK, ay) => {
        var aU = Ti()
          , sU = mi()
          , uU = oy();
        function cU(e) {
            if (e instanceof aU)
                return e.clone();
            var t = new sU(e.__wrapped__,e.__chain__);
            return t.__actions__ = uU(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        ay.exports = cU
    }
    );
    var ly = u( (hK, cy) => {
        var lU = Ti()
          , uy = mi()
          , fU = _i()
          , dU = Re()
          , pU = _t()
          , vU = sy()
          , hU = Object.prototype
          , EU = hU.hasOwnProperty;
        function Oi(e) {
            if (pU(e) && !dU(e) && !(e instanceof lU)) {
                if (e instanceof uy)
                    return e;
                if (EU.call(e, "__wrapped__"))
                    return vU(e)
            }
            return new uy(e)
        }
        Oi.prototype = fU.prototype;
        Oi.prototype.constructor = Oi;
        cy.exports = Oi
    }
    );
    var dy = u( (EK, fy) => {
        var gU = Ti()
          , _U = ns()
          , yU = is()
          , mU = ly();
        function IU(e) {
            var t = yU(e)
              , r = mU[t];
            if (typeof r != "function" || !(t in gU.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = _U(r);
            return !!n && e === n[0]
        }
        fy.exports = IU
    }
    );
    var Ey = u( (gK, hy) => {
        var py = mi()
          , TU = k_()
          , OU = ns()
          , os = is()
          , bU = Re()
          , vy = dy()
          , SU = "Expected a function"
          , AU = 8
          , wU = 32
          , RU = 128
          , CU = 256;
        function NU(e) {
            return TU(function(t) {
                var r = t.length
                  , n = r
                  , o = py.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var i = t[n];
                    if (typeof i != "function")
                        throw new TypeError(SU);
                    if (o && !a && os(i) == "wrapper")
                        var a = new py([],!0)
                }
                for (n = a ? n : r; ++n < r; ) {
                    i = t[n];
                    var s = os(i)
                      , c = s == "wrapper" ? OU(i) : void 0;
                    c && vy(c[0]) && c[1] == (RU | AU | wU | CU) && !c[4].length && c[9] == 1 ? a = a[os(c[0])].apply(a, c[3]) : a = i.length == 1 && vy(i) ? a[s]() : a.thru(i)
                }
                return function() {
                    var d = arguments
                      , h = d[0];
                    if (a && d.length == 1 && bU(h))
                        return a.plant(h).value();
                    for (var p = 0, _ = r ? t[p].apply(this, d) : h; ++p < r; )
                        _ = t[p].call(this, _);
                    return _
                }
            })
        }
        hy.exports = NU
    }
    );
    var _y = u( (_K, gy) => {
        var xU = Ey()
          , qU = xU();
        gy.exports = qU
    }
    );
    var my = u( (yK, yy) => {
        function PU(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        yy.exports = PU
    }
    );
    var Ty = u( (mK, Iy) => {
        var LU = my()
          , as = Jn();
        function MU(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = as(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = as(t),
            t = t === t ? t : 0),
            LU(as(e), t, r)
        }
        Iy.exports = MU
    }
    );
    var Uy = u(Ri => {
        "use strict";
        var wi = $e().default;
        Object.defineProperty(Ri, "__esModule", {
            value: !0
        });
        Ri.default = void 0;
        var ke = wi(rr())
          , DU = wi(_y())
          , FU = wi($n())
          , GU = wi(Ty())
          , jt = Xe()
          , ss = fs()
          , bi = gi()
          , XU = Bt()
          , {MOUSE_CLICK: UU, MOUSE_SECOND_CLICK: VU, MOUSE_DOWN: WU, MOUSE_UP: BU, MOUSE_OVER: jU, MOUSE_OUT: kU, DROPDOWN_CLOSE: HU, DROPDOWN_OPEN: KU, SLIDER_ACTIVE: zU, SLIDER_INACTIVE: YU, TAB_ACTIVE: QU, TAB_INACTIVE: $U, NAVBAR_CLOSE: ZU, NAVBAR_OPEN: JU, MOUSE_MOVE: eV, PAGE_SCROLL_DOWN: xy, SCROLL_INTO_VIEW: qy, SCROLL_OUT_OF_VIEW: tV, PAGE_SCROLL_UP: rV, SCROLLING_IN_VIEW: nV, PAGE_FINISH: Py, ECOMMERCE_CART_CLOSE: iV, ECOMMERCE_CART_OPEN: oV, PAGE_START: Ly, PAGE_SCROLL: aV} = jt.EventTypeConsts
          , us = "COMPONENT_ACTIVE"
          , My = "COMPONENT_INACTIVE"
          , {COLON_DELIMITER: Oy} = jt.IX2EngineConstants
          , {getNamespacedParameterId: by} = XU.IX2VanillaUtils
          , Dy = e => t => typeof t == "object" && e(t) ? !0 : t
          , nn = Dy( ({element: e, nativeEvent: t}) => e === t.target)
          , sV = Dy( ({element: e, nativeEvent: t}) => e.contains(t.target))
          , vt = (0,
        DU.default)([nn, sV])
          , Fy = (e, t) => {
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , o = n[t];
                if (o && !cV[o.eventTypeId])
                    return o
            }
            return null
        }
          , uV = ({store: e, event: t}) => {
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!Fy(e, n)
        }
          , Ve = ({store: e, event: t, element: r, eventStateKey: n}, o) => {
            let {action: i, id: a} = t
              , {actionListId: s, autoStopEventId: c} = i.config
              , d = Fy(e, c);
            return d && (0,
            ss.stopActionGroup)({
                store: e,
                eventId: c,
                eventTarget: r,
                eventStateKey: c + Oy + n.split(Oy)[1],
                actionListId: (0,
                FU.default)(d, "action.config.actionListId")
            }),
            (0,
            ss.stopActionGroup)({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            (0,
            ss.startActionGroup)({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            o
        }
          , tt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n
          , on = {
            handler: tt(vt, Ve)
        }
          , Gy = (0,
        ke.default)({}, on, {
            types: [us, My].join(" ")
        })
          , cs = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }]
          , Sy = "mouseover mouseout"
          , ls = {
            types: cs
        }
          , cV = {
            PAGE_START: Ly,
            PAGE_FINISH: Py
        }
          , rn = ( () => {
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                GU.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )()
          , lV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top)
          , fV = ({element: e, nativeEvent: t}) => {
            let {type: r, target: n, relatedTarget: o} = t
              , i = e.contains(n);
            if (r === "mouseover" && i)
                return !0;
            let a = e.contains(o);
            return !!(r === "mouseout" && i && a)
        }
          , dV = e => {
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: o} = rn()
              , i = r.scrollOffsetValue
              , c = r.scrollOffsetUnit === "PX" ? i : o * (i || 0) / 100;
            return lV(t.getBoundingClientRect(), {
                left: 0,
                top: c,
                right: n,
                bottom: o - c
            })
        }
          , Xy = e => (t, r) => {
            let {type: n} = t.nativeEvent
              , o = [us, My].indexOf(n) !== -1 ? n === us : r.isActive
              , i = (0,
            ke.default)({}, r, {
                isActive: o
            });
            return (!r || i.isActive !== r.isActive) && e(t, i) || i
        }
          , Ay = e => (t, r) => {
            let n = {
                elementHovered: fV(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
          , pV = e => (t, r) => {
            let n = (0,
            ke.default)({}, r, {
                elementVisible: dV(t)
            });
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
          , wy = e => (t, r={}) => {
            let {stiffScrollTop: n, scrollHeight: o, innerHeight: i} = rn()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: c, scrollOffsetUnit: d} = a
              , h = d === "PX"
              , p = o - i
              , _ = Number((n / p).toFixed(2));
            if (r && r.percentTop === _)
                return r;
            let O = (h ? c : i * (c || 0) / 100) / p, S, w, L = 0;
            r && (S = _ > r.percentTop,
            w = r.scrollingDown !== S,
            L = w ? _ : r.anchorTop);
            let C = s === xy ? _ >= L + O : _ <= L - O
              , N = (0,
            ke.default)({}, r, {
                percentTop: _,
                inBounds: C,
                anchorTop: L,
                scrollingDown: S
            });
            return r && C && (w || N.inBounds !== r.inBounds) && e(t, N) || N
        }
          , vV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom
          , hV = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
          , EV = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
          , Ry = e => (t, r={
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
          , Si = (e=!0) => (0,
        ke.default)({}, Gy, {
            handler: tt(e ? vt : nn, Xy( (t, r) => r.isActive ? on.handler(t, r) : r))
        })
          , Ai = (e=!0) => (0,
        ke.default)({}, Gy, {
            handler: tt(e ? vt : nn, Xy( (t, r) => r.isActive ? r : on.handler(t, r)))
        })
          , Cy = (0,
        ke.default)({}, ls, {
            handler: pV( (e, t) => {
                let {elementVisible: r} = t
                  , {event: n, store: o} = e
                  , {ixData: i} = o.getState()
                  , {events: a} = i;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === qy === r ? (Ve(e),
                (0,
                ke.default)({}, t, {
                    triggered: !0
                })) : t
            }
            )
        })
          , Ny = .05
          , gV = {
            [zU]: Si(),
            [YU]: Ai(),
            [KU]: Si(),
            [HU]: Ai(),
            [JU]: Si(!1),
            [ZU]: Ai(!1),
            [QU]: Si(),
            [$U]: Ai(),
            [oV]: {
                types: "ecommerce-cart-open",
                handler: tt(vt, Ve)
            },
            [iV]: {
                types: "ecommerce-cart-close",
                handler: tt(vt, Ve)
            },
            [UU]: {
                types: "click",
                handler: tt(vt, Ry( (e, {clickCount: t}) => {
                    uV(e) ? t === 1 && Ve(e) : Ve(e)
                }
                ))
            },
            [VU]: {
                types: "click",
                handler: tt(vt, Ry( (e, {clickCount: t}) => {
                    t === 2 && Ve(e)
                }
                ))
            },
            [WU]: (0,
            ke.default)({}, on, {
                types: "mousedown"
            }),
            [BU]: (0,
            ke.default)({}, on, {
                types: "mouseup"
            }),
            [jU]: {
                types: Sy,
                handler: tt(vt, Ay( (e, t) => {
                    t.elementHovered && Ve(e)
                }
                ))
            },
            [kU]: {
                types: Sy,
                handler: tt(vt, Ay( (e, t) => {
                    t.elementHovered || Ve(e)
                }
                ))
            },
            [eV]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: o}, i={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: c, reverse: d, restingState: h=0} = r
                      , {clientX: p=i.clientX, clientY: _=i.clientY, pageX: O=i.pageX, pageY: S=i.pageY} = n
                      , w = s === "X_AXIS"
                      , L = n.type === "mouseout"
                      , C = h / 100
                      , N = c
                      , b = !1;
                    switch (a) {
                    case jt.EventBasedOn.VIEWPORT:
                        {
                            C = w ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case jt.EventBasedOn.PAGE:
                        {
                            let {scrollLeft: M, scrollTop: q, scrollWidth: P, scrollHeight: U} = rn();
                            C = w ? Math.min(M + O, P) / P : Math.min(q + S, U) / U;
                            break
                        }
                    case jt.EventBasedOn.ELEMENT:
                    default:
                        {
                            N = by(o, c);
                            let M = n.type.indexOf("mouse") === 0;
                            if (M && vt({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let q = t.getBoundingClientRect()
                              , {left: P, top: U, width: k, height: H} = q;
                            if (!M && !vV({
                                left: p,
                                top: _
                            }, q))
                                break;
                            b = !0,
                            C = w ? (p - P) / k : (_ - U) / H;
                            break
                        }
                    }
                    return L && (C > 1 - Ny || C < Ny) && (C = Math.round(C)),
                    (a !== jt.EventBasedOn.ELEMENT || b || b !== i.elementHovered) && (C = d ? 1 - C : C,
                    e.dispatch((0,
                    bi.parameterChanged)(N, C))),
                    {
                        elementHovered: b,
                        clientX: p,
                        clientY: _,
                        pageX: O,
                        pageY: S
                    }
                }
            },
            [aV]: {
                types: cs,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: o, scrollHeight: i, clientHeight: a} = rn()
                      , s = o / (i - a);
                    s = n ? 1 - s : s,
                    e.dispatch((0,
                    bi.parameterChanged)(r, s))
                }
            },
            [nV]: {
                types: cs,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, o={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: i, scrollTop: a, scrollWidth: s, scrollHeight: c, clientHeight: d} = rn()
                      , {basedOn: h, selectedAxis: p, continuousParameterGroupId: _, startsEntering: O, startsExiting: S, addEndOffset: w, addStartOffset: L, addOffsetValue: C=0, endOffsetValue: N=0} = r
                      , b = p === "X_AXIS";
                    if (h === jt.EventBasedOn.VIEWPORT) {
                        let M = b ? i / s : a / c;
                        return M !== o.scrollPercent && t.dispatch((0,
                        bi.parameterChanged)(_, M)),
                        {
                            scrollPercent: M
                        }
                    } else {
                        let M = by(n, _)
                          , q = e.getBoundingClientRect()
                          , P = (L ? C : 0) / 100
                          , U = (w ? N : 0) / 100;
                        P = O ? P : 1 - P,
                        U = S ? U : 1 - U;
                        let k = q.top + Math.min(q.height * P, d)
                          , ne = q.top + q.height * U - k
                          , J = Math.min(d + ne, c)
                          , I = Math.min(Math.max(0, d - k), J) / J;
                        return I !== o.scrollPercent && t.dispatch((0,
                        bi.parameterChanged)(M, I)),
                        {
                            scrollPercent: I
                        }
                    }
                }
            },
            [qy]: Cy,
            [tV]: Cy,
            [xy]: (0,
            ke.default)({}, ls, {
                handler: wy( (e, t) => {
                    t.scrollingDown && Ve(e)
                }
                )
            }),
            [rV]: (0,
            ke.default)({}, ls, {
                handler: wy( (e, t) => {
                    t.scrollingDown || Ve(e)
                }
                )
            }),
            [Py]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: tt(nn, hV(Ve))
            },
            [Ly]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: tt(nn, EV(Ve))
            }
        };
        Ri.default = gV
    }
    );
    var fs = u(xt => {
        "use strict";
        var nt = $e().default
          , _V = Lt().default;
        Object.defineProperty(xt, "__esModule", {
            value: !0
        });
        xt.observeRequests = zV;
        xt.startActionGroup = gs;
        xt.startEngine = Pi;
        xt.stopActionGroup = Es;
        xt.stopAllActionGroups = Yy;
        xt.stopEngine = Li;
        var yV = nt(rr())
          , mV = nt(ng())
          , IV = nt(qa())
          , Nt = nt($n())
          , TV = nt(Tg())
          , OV = nt(zg())
          , bV = nt(Qg())
          , SV = nt(Zg())
          , an = nt(i_())
          , AV = nt(f_())
          , rt = Xe()
          , By = Bt()
          , me = gi()
          , be = _V(E_())
          , wV = nt(Uy())
          , RV = ["store", "computedStyle"]
          , CV = Object.keys(rt.QuickEffectIds)
          , ds = e => CV.includes(e)
          , {COLON_DELIMITER: ps, BOUNDARY_SELECTOR: Ci, HTML_ELEMENT: jy, RENDER_GENERAL: NV, W_MOD_IX: Vy} = rt.IX2EngineConstants
          , {getAffectedElements: Ni, getElementId: xV, getDestinationValues: vs, observeStore: kt, getInstanceId: qV, renderHTMLElement: PV, clearAllStyles: ky, getMaxDurationItemIndex: LV, getComputedStyle: MV, getInstanceOrigin: DV, reduceListToGroup: FV, shouldNamespaceEventParameter: GV, getNamespacedParameterId: XV, shouldAllowMediaQuery: xi, cleanupHTMLElement: UV, clearObjectCache: VV, stringifyTarget: WV, mediaQueriesEqual: BV, shallowEqual: jV} = By.IX2VanillaUtils
          , {isPluginType: qi, createPluginInstance: hs, getPluginDuration: kV} = By.IX2VanillaPlugins
          , Wy = navigator.userAgent
          , HV = Wy.match(/iPad/i) || Wy.match(/iPhone/)
          , KV = 12;
        function zV(e) {
            kt({
                store: e,
                select: ({ixRequest: t}) => t.preview,
                onChange: $V
            }),
            kt({
                store: e,
                select: ({ixRequest: t}) => t.playback,
                onChange: ZV
            }),
            kt({
                store: e,
                select: ({ixRequest: t}) => t.stop,
                onChange: JV
            }),
            kt({
                store: e,
                select: ({ixRequest: t}) => t.clear,
                onChange: eW
            })
        }
        function YV(e) {
            kt({
                store: e,
                select: ({ixSession: t}) => t.mediaQueryKey,
                onChange: () => {
                    Li(e),
                    ky({
                        store: e,
                        elementApi: be
                    }),
                    Pi({
                        store: e,
                        allowEvents: !0
                    }),
                    Hy()
                }
            })
        }
        function QV(e, t) {
            let r = kt({
                store: e,
                select: ({ixSession: n}) => n.tick,
                onChange: n => {
                    t(n),
                    r()
                }
            })
        }
        function $V({rawData: e, defer: t}, r) {
            let n = () => {
                Pi({
                    store: r,
                    rawData: e,
                    allowEvents: !0
                }),
                Hy()
            }
            ;
            t ? setTimeout(n, 0) : n()
        }
        function Hy() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
        }
        function ZV(e, t) {
            let {actionTypeId: r, actionListId: n, actionItemId: o, eventId: i, allowEvents: a, immediate: s, testManual: c, verbose: d=!0} = e
              , {rawData: h} = e;
            if (n && o && h && s) {
                let p = h.actionLists[n];
                p && (h = FV({
                    actionList: p,
                    actionItemId: o,
                    rawData: h
                }))
            }
            if (Pi({
                store: t,
                rawData: h,
                allowEvents: a,
                testManual: c
            }),
            n && r === rt.ActionTypeConsts.GENERAL_START_ACTION || ds(r)) {
                Es({
                    store: t,
                    actionListId: n
                }),
                zy({
                    store: t,
                    actionListId: n,
                    eventId: i
                });
                let p = gs({
                    store: t,
                    eventId: i,
                    actionListId: n,
                    immediate: s,
                    verbose: d
                });
                d && p && t.dispatch((0,
                me.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !s
                }))
            }
        }
        function JV({actionListId: e}, t) {
            e ? Es({
                store: t,
                actionListId: e
            }) : Yy({
                store: t
            }),
            Li(t)
        }
        function eW(e, t) {
            Li(t),
            ky({
                store: t,
                elementApi: be
            })
        }
        function Pi({store: e, rawData: t, allowEvents: r, testManual: n}) {
            let {ixSession: o} = e.getState();
            t && e.dispatch((0,
            me.rawDataImported)(t)),
            o.active || (e.dispatch((0,
            me.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(Ci),
                reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
            })),
            r && (aW(e),
            tW(),
            e.getState().ixSession.hasDefinedMediaQueries && YV(e)),
            e.dispatch((0,
            me.sessionStarted)()),
            rW(e, n))
        }
        function tW() {
            let {documentElement: e} = document;
            e.className.indexOf(Vy) === -1 && (e.className += ` ${Vy}`)
        }
        function rW(e, t) {
            let r = n => {
                let {ixSession: o, ixParameters: i} = e.getState();
                o.active && (e.dispatch((0,
                me.animationFrameChanged)(n, i)),
                t ? QV(e, r) : requestAnimationFrame(r))
            }
            ;
            r(window.performance.now())
        }
        function Li(e) {
            let {ixSession: t} = e.getState();
            if (t.active) {
                let {eventListeners: r} = t;
                r.forEach(nW),
                VV(),
                e.dispatch((0,
                me.sessionStopped)())
            }
        }
        function nW({target: e, listenerParams: t}) {
            e.removeEventListener.apply(e, t)
        }
        function iW({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: o, actionListId: i, parameterGroup: a, smoothing: s, restingValue: c}) {
            let {ixData: d, ixSession: h} = e.getState()
              , {events: p} = d
              , _ = p[n]
              , {eventTypeId: O} = _
              , S = {}
              , w = {}
              , L = []
              , {continuousActionGroups: C} = a
              , {id: N} = a;
            GV(O, o) && (N = XV(t, N));
            let b = h.hasBoundaryNodes && r ? be.getClosestElement(r, Ci) : null;
            C.forEach(M => {
                let {keyframe: q, actionItems: P} = M;
                P.forEach(U => {
                    let {actionTypeId: k} = U
                      , {target: H} = U.config;
                    if (!H)
                        return;
                    let ne = H.boundaryMode ? b : null
                      , J = WV(H) + ps + k;
                    if (w[J] = oW(w[J], q, U),
                    !S[J]) {
                        S[J] = !0;
                        let {config: X} = U;
                        Ni({
                            config: X,
                            event: _,
                            eventTarget: r,
                            elementRoot: ne,
                            elementApi: be
                        }).forEach(I => {
                            L.push({
                                element: I,
                                key: J
                            })
                        }
                        )
                    }
                }
                )
            }
            ),
            L.forEach( ({element: M, key: q}) => {
                let P = w[q]
                  , U = (0,
                Nt.default)(P, "[0].actionItems[0]", {})
                  , {actionTypeId: k} = U
                  , H = qi(k) ? hs(k)(M, U) : null
                  , ne = vs({
                    element: M,
                    actionItem: U,
                    elementApi: be
                }, H);
                _s({
                    store: e,
                    element: M,
                    eventId: n,
                    actionListId: i,
                    actionItem: U,
                    destination: ne,
                    continuous: !0,
                    parameterId: N,
                    actionGroups: P,
                    smoothing: s,
                    restingValue: c,
                    pluginInstance: H
                })
            }
            )
        }
        function oW(e=[], t, r) {
            let n = [...e], o;
            return n.some( (i, a) => i.keyframe === t ? (o = a,
            !0) : !1),
            o == null && (o = n.length,
            n.push({
                keyframe: t,
                actionItems: []
            })),
            n[o].actionItems.push(r),
            n
        }
        function aW(e) {
            let {ixData: t} = e.getState()
              , {eventTypeMap: r} = t;
            Ky(e),
            (0,
            an.default)(r, (o, i) => {
                let a = wV.default[i];
                if (!a) {
                    console.warn(`IX2 event type not configured: ${i}`);
                    return
                }
                dW({
                    logic: a,
                    store: e,
                    events: o
                })
            }
            );
            let {ixSession: n} = e.getState();
            n.eventListeners.length && uW(e)
        }
        var sW = ["resize", "orientationchange"];
        function uW(e) {
            let t = () => {
                Ky(e)
            }
            ;
            sW.forEach(r => {
                window.addEventListener(r, t),
                e.dispatch((0,
                me.eventListenerAdded)(window, [r, t]))
            }
            ),
            t()
        }
        function Ky(e) {
            let {ixSession: t, ixData: r} = e.getState()
              , n = window.innerWidth;
            if (n !== t.viewportWidth) {
                let {mediaQueries: o} = r;
                e.dispatch((0,
                me.viewportWidthChanged)({
                    width: n,
                    mediaQueries: o
                }))
            }
        }
        var cW = (e, t) => (0,
        OV.default)((0,
        SV.default)(e, t), bV.default)
          , lW = (e, t) => {
            (0,
            an.default)(e, (r, n) => {
                r.forEach( (o, i) => {
                    let a = n + ps + i;
                    t(o, n, a)
                }
                )
            }
            )
        }
          , fW = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Ni({
                config: t,
                elementApi: be
            })
        }
        ;
        function dW({logic: e, store: t, events: r}) {
            pW(r);
            let {types: n, handler: o} = e
              , {ixData: i} = t.getState()
              , {actionLists: a} = i
              , s = cW(r, fW);
            if (!(0,
            TV.default)(s))
                return;
            (0,
            an.default)(s, (p, _) => {
                let O = r[_]
                  , {action: S, id: w, mediaQueries: L=i.mediaQueryKeys} = O
                  , {actionListId: C} = S.config;
                BV(L, i.mediaQueryKeys) || t.dispatch((0,
                me.mediaQueriesDefined)()),
                S.actionTypeId === rt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(O.config) ? O.config : [O.config]).forEach(b => {
                    let {continuousParameterGroupId: M} = b
                      , q = (0,
                    Nt.default)(a, `${C}.continuousParameterGroups`, [])
                      , P = (0,
                    IV.default)(q, ({id: H}) => H === M)
                      , U = (b.smoothing || 0) / 100
                      , k = (b.restingState || 0) / 100;
                    P && p.forEach( (H, ne) => {
                        let J = w + ps + ne;
                        iW({
                            store: t,
                            eventStateKey: J,
                            eventTarget: H,
                            eventId: w,
                            eventConfig: b,
                            actionListId: C,
                            parameterGroup: P,
                            smoothing: U,
                            restingValue: k
                        })
                    }
                    )
                }
                ),
                (S.actionTypeId === rt.ActionTypeConsts.GENERAL_START_ACTION || ds(S.actionTypeId)) && zy({
                    store: t,
                    actionListId: C,
                    eventId: w
                })
            }
            );
            let c = p => {
                let {ixSession: _} = t.getState();
                lW(s, (O, S, w) => {
                    let L = r[S]
                      , C = _.eventState[w]
                      , {action: N, mediaQueries: b=i.mediaQueryKeys} = L;
                    if (!xi(b, _.mediaQueryKey))
                        return;
                    let M = (q={}) => {
                        let P = o({
                            store: t,
                            element: O,
                            event: L,
                            eventConfig: q,
                            nativeEvent: p,
                            eventStateKey: w
                        }, C);
                        jV(P, C) || t.dispatch((0,
                        me.eventStateChanged)(w, P))
                    }
                    ;
                    N.actionTypeId === rt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(L.config) ? L.config : [L.config]).forEach(M) : M()
                }
                )
            }
              , d = (0,
            AV.default)(c, KV)
              , h = ({target: p=document, types: _, throttle: O}) => {
                _.split(" ").filter(Boolean).forEach(S => {
                    let w = O ? d : c;
                    p.addEventListener(S, w),
                    t.dispatch((0,
                    me.eventListenerAdded)(p, [S, w]))
                }
                )
            }
            ;
            Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e)
        }
        function pW(e) {
            if (!HV)
                return;
            let t = {}
              , r = "";
            for (let n in e) {
                let {eventTypeId: o, target: i} = e[n]
                  , a = be.getQuerySelector(i);
                t[a] || (o === rt.EventTypeConsts.MOUSE_CLICK || o === rt.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[a] = !0,
                r += a + "{cursor: pointer;touch-action: manipulation;}")
            }
            if (r) {
                let n = document.createElement("style");
                n.textContent = r,
                document.body.appendChild(n)
            }
        }
        function zy({store: e, actionListId: t, eventId: r}) {
            let {ixData: n, ixSession: o} = e.getState()
              , {actionLists: i, events: a} = n
              , s = a[r]
              , c = i[t];
            if (c && c.useFirstGroupAsInitialState) {
                let d = (0,
                Nt.default)(c, "actionItemGroups[0].actionItems", [])
                  , h = (0,
                Nt.default)(s, "mediaQueries", n.mediaQueryKeys);
                if (!xi(h, o.mediaQueryKey))
                    return;
                d.forEach(p => {
                    var _;
                    let {config: O, actionTypeId: S} = p
                      , w = (O == null || (_ = O.target) === null || _ === void 0 ? void 0 : _.useEventTarget) === !0 ? {
                        target: s.target,
                        targets: s.targets
                    } : O
                      , L = Ni({
                        config: w,
                        event: s,
                        elementApi: be
                    })
                      , C = qi(S);
                    L.forEach(N => {
                        let b = C ? hs(S)(N, p) : null;
                        _s({
                            destination: vs({
                                element: N,
                                actionItem: p,
                                elementApi: be
                            }, b),
                            immediate: !0,
                            store: e,
                            element: N,
                            eventId: r,
                            actionItem: p,
                            actionListId: t,
                            pluginInstance: b
                        })
                    }
                    )
                }
                )
            }
        }
        function Yy({store: e}) {
            let {ixInstances: t} = e.getState();
            (0,
            an.default)(t, r => {
                if (!r.continuous) {
                    let {actionListId: n, verbose: o} = r;
                    ys(r, e),
                    o && e.dispatch((0,
                    me.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function Es({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o}) {
            let {ixInstances: i, ixSession: a} = e.getState()
              , s = a.hasBoundaryNodes && r ? be.getClosestElement(r, Ci) : null;
            (0,
            an.default)(i, c => {
                let d = (0,
                Nt.default)(c, "actionItem.config.target.boundaryMode")
                  , h = n ? c.eventStateKey === n : !0;
                if (c.actionListId === o && c.eventId === t && h) {
                    if (s && d && !be.elementContains(s, c.element))
                        return;
                    ys(c, e),
                    c.verbose && e.dispatch((0,
                    me.actionListPlaybackChanged)({
                        actionListId: o,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function gs({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o, groupIndex: i=0, immediate: a, verbose: s}) {
            var c;
            let {ixData: d, ixSession: h} = e.getState()
              , {events: p} = d
              , _ = p[t] || {}
              , {mediaQueries: O=d.mediaQueryKeys} = _
              , S = (0,
            Nt.default)(d, `actionLists.${o}`, {})
              , {actionItemGroups: w, useFirstGroupAsInitialState: L} = S;
            if (!w || !w.length)
                return !1;
            i >= w.length && (0,
            Nt.default)(_, "config.loop") && (i = 0),
            i === 0 && L && i++;
            let N = (i === 0 || i === 1 && L) && ds((c = _.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? _.config.delay : void 0
              , b = (0,
            Nt.default)(w, [i, "actionItems"], []);
            if (!b.length || !xi(O, h.mediaQueryKey))
                return !1;
            let M = h.hasBoundaryNodes && r ? be.getClosestElement(r, Ci) : null
              , q = LV(b)
              , P = !1;
            return b.forEach( (U, k) => {
                let {config: H, actionTypeId: ne} = U
                  , J = qi(ne)
                  , {target: X} = H;
                if (!X)
                    return;
                let I = X.boundaryMode ? M : null;
                Ni({
                    config: H,
                    event: _,
                    eventTarget: r,
                    elementRoot: I,
                    elementApi: be
                }).forEach( (G, V) => {
                    let Q = J ? hs(ne)(G, U) : null
                      , ee = J ? kV(ne)(G, U) : null;
                    P = !0;
                    let F = q === k && V === 0
                      , j = MV({
                        element: G,
                        actionItem: U
                    })
                      , f = vs({
                        element: G,
                        actionItem: U,
                        elementApi: be
                    }, Q);
                    _s({
                        store: e,
                        element: G,
                        actionItem: U,
                        eventId: t,
                        eventTarget: r,
                        eventStateKey: n,
                        actionListId: o,
                        groupIndex: i,
                        isCarrier: F,
                        computedStyle: j,
                        destination: f,
                        immediate: a,
                        verbose: s,
                        pluginInstance: Q,
                        pluginDuration: ee,
                        instanceDelay: N
                    })
                }
                )
            }
            ),
            P
        }
        function _s(e) {
            var t;
            let {store: r, computedStyle: n} = e, o = (0,
            mV.default)(e, RV), {element: i, actionItem: a, immediate: s, pluginInstance: c, continuous: d, restingValue: h, eventId: p} = o, _ = !d, O = qV(), {ixElements: S, ixSession: w, ixData: L} = r.getState(), C = xV(S, i), {refState: N} = S[C] || {}, b = be.getRefType(i), M = w.reducedMotion && rt.ReducedMotionTypes[a.actionTypeId], q;
            if (M && d)
                switch ((t = L.events[p]) === null || t === void 0 ? void 0 : t.eventTypeId) {
                case rt.EventTypeConsts.MOUSE_MOVE:
                case rt.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                    q = h;
                    break;
                default:
                    q = .5;
                    break
                }
            let P = DV(i, N, n, a, be, c);
            if (r.dispatch((0,
            me.instanceAdded)((0,
            yV.default)({
                instanceId: O,
                elementId: C,
                origin: P,
                refType: b,
                skipMotion: M,
                skipToValue: q
            }, o))),
            Qy(document.body, "ix2-animation-started", O),
            s) {
                vW(r, O);
                return
            }
            kt({
                store: r,
                select: ({ixInstances: U}) => U[O],
                onChange: $y
            }),
            _ && r.dispatch((0,
            me.instanceStarted)(O, w.tick))
        }
        function ys(e, t) {
            Qy(document.body, "ix2-animation-stopping", {
                instanceId: e.id,
                state: t.getState()
            });
            let {elementId: r, actionItem: n} = e
              , {ixElements: o} = t.getState()
              , {ref: i, refType: a} = o[r] || {};
            a === jy && UV(i, n, be),
            t.dispatch((0,
            me.instanceRemoved)(e.id))
        }
        function Qy(e, t, r) {
            let n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, r),
            e.dispatchEvent(n)
        }
        function vW(e, t) {
            let {ixParameters: r} = e.getState();
            e.dispatch((0,
            me.instanceStarted)(t, 0)),
            e.dispatch((0,
            me.animationFrameChanged)(performance.now(), r));
            let {ixInstances: n} = e.getState();
            $y(n[t], e)
        }
        function $y(e, t) {
            let {active: r, continuous: n, complete: o, elementId: i, actionItem: a, actionTypeId: s, renderType: c, current: d, groupIndex: h, eventId: p, eventTarget: _, eventStateKey: O, actionListId: S, isCarrier: w, styleProp: L, verbose: C, pluginInstance: N} = e
              , {ixData: b, ixSession: M} = t.getState()
              , {events: q} = b
              , P = q[p] || {}
              , {mediaQueries: U=b.mediaQueryKeys} = P;
            if (xi(U, M.mediaQueryKey) && (n || r || o)) {
                if (d || c === NV && o) {
                    t.dispatch((0,
                    me.elementStateChanged)(i, s, d, a));
                    let {ixElements: k} = t.getState()
                      , {ref: H, refType: ne, refState: J} = k[i] || {}
                      , X = J && J[s];
                    (ne === jy || qi(s)) && PV(H, J, X, p, a, L, be, c, N)
                }
                if (o) {
                    if (w) {
                        let k = gs({
                            store: t,
                            eventId: p,
                            eventTarget: _,
                            eventStateKey: O,
                            actionListId: S,
                            groupIndex: h + 1,
                            verbose: C
                        });
                        C && !k && t.dispatch((0,
                        me.actionListPlaybackChanged)({
                            actionListId: S,
                            isPlaying: !1
                        }))
                    }
                    ys(e, t)
                }
            }
        }
    }
    );
    var Jy = u(It => {
        "use strict";
        var hW = Lt().default
          , EW = $e().default;
        Object.defineProperty(It, "__esModule", {
            value: !0
        });
        It.actions = void 0;
        It.destroy = Zy;
        It.init = IW;
        It.setEnv = mW;
        It.store = void 0;
        Dl();
        var gW = $o()
          , _W = EW(rg())
          , ms = fs()
          , yW = hW(gi());
        It.actions = yW;
        var Mi = (0,
        gW.createStore)(_W.default);
        It.store = Mi;
        function mW(e) {
            e() && (0,
            ms.observeRequests)(Mi)
        }
        function IW(e) {
            Zy(),
            (0,
            ms.startEngine)({
                store: Mi,
                rawData: e,
                allowEvents: !0
            })
        }
        function Zy() {
            (0,
            ms.stopEngine)(Mi)
        }
    }
    );
    var nm = u( (bK, rm) => {
        var em = Qe()
          , tm = Jy();
        tm.setEnv(em.env);
        em.define("ix2", rm.exports = function() {
            return tm
        }
        )
    }
    );
    var om = u( (SK, im) => {
        var Or = Qe();
        Or.define("links", im.exports = function(e, t) {
            var r = {}, n = e(window), o, i = Or.env(), a = window.location, s = document.createElement("a"), c = "w--current", d = /index\.(html|php)$/, h = /\/$/, p, _;
            r.ready = r.design = r.preview = O;
            function O() {
                o = i && Or.env("design"),
                _ = Or.env("slug") || a.pathname || "",
                Or.scroll.off(w),
                p = [];
                for (var C = document.links, N = 0; N < C.length; ++N)
                    S(C[N]);
                p.length && (Or.scroll.on(w),
                w())
            }
            function S(C) {
                var N = o && C.getAttribute("href-disabled") || C.getAttribute("href");
                if (s.href = N,
                !(N.indexOf(":") >= 0)) {
                    var b = e(C);
                    if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                            return;
                        var M = e(s.hash);
                        M.length && p.push({
                            link: b,
                            sec: M,
                            active: !1
                        });
                        return
                    }
                    if (!(N === "#" || N === "")) {
                        var q = s.href === a.href || N === _ || d.test(N) && h.test(_);
                        L(b, c, q)
                    }
                }
            }
            function w() {
                var C = n.scrollTop()
                  , N = n.height();
                t.each(p, function(b) {
                    var M = b.link
                      , q = b.sec
                      , P = q.offset().top
                      , U = q.outerHeight()
                      , k = N * .5
                      , H = q.is(":visible") && P + U - k >= C && P + k <= C + N;
                    b.active !== H && (b.active = H,
                    L(M, c, H))
                })
            }
            function L(C, N, b) {
                var M = C.hasClass(N);
                b && M || !b && !M || (b ? C.addClass(N) : C.removeClass(N))
            }
            return r
        }
        )
    }
    );
    var sm = u( (AK, am) => {
        var Di = Qe();
        Di.define("scroll", am.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = S() ? null : window.history
              , o = e(window)
              , i = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(X) {
                window.setTimeout(X, 15)
            }
              , c = Di.env("editor") ? ".w-editor-body" : "body"
              , d = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])"
              , h = 'a[href="#"]'
              , p = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")"
              , _ = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , O = document.createElement("style");
            O.appendChild(document.createTextNode(_));
            function S() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var w = /^#[a-zA-Z0-9][\w:.-]*$/;
            function L(X) {
                return w.test(X.hash) && X.host + X.pathname === r.host + r.pathname
            }
            let C = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function N() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || C.matches
            }
            function b(X, I) {
                var D;
                switch (I) {
                case "add":
                    D = X.attr("tabindex"),
                    D ? X.attr("data-wf-tabindex-swap", D) : X.attr("tabindex", "-1");
                    break;
                case "remove":
                    D = X.attr("data-wf-tabindex-swap"),
                    D ? (X.attr("tabindex", D),
                    X.removeAttr("data-wf-tabindex-swap")) : X.removeAttr("tabindex");
                    break
                }
                X.toggleClass("wf-force-outline-none", I === "add")
            }
            function M(X) {
                var I = X.currentTarget;
                if (!(Di.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(I.className))) {
                    var D = L(I) ? I.hash : "";
                    if (D !== "") {
                        var G = e(D);
                        G.length && (X && (X.preventDefault(),
                        X.stopPropagation()),
                        q(D, X),
                        window.setTimeout(function() {
                            P(G, function() {
                                b(G, "add"),
                                G.get(0).focus({
                                    preventScroll: !0
                                }),
                                b(G, "remove")
                            })
                        }, X ? 0 : 300))
                    }
                }
            }
            function q(X) {
                if (r.hash !== X && n && n.pushState && !(Di.env.chrome && r.protocol === "file:")) {
                    var I = n.state && n.state.hash;
                    I !== X && n.pushState({
                        hash: X
                    }, "", X)
                }
            }
            function P(X, I) {
                var D = o.scrollTop()
                  , G = U(X);
                if (D !== G) {
                    var V = k(X, D, G)
                      , Q = Date.now()
                      , ee = function() {
                        var F = Date.now() - Q;
                        window.scroll(0, H(D, G, F, V)),
                        F <= V ? s(ee) : typeof I == "function" && I()
                    };
                    s(ee)
                }
            }
            function U(X) {
                var I = e(d)
                  , D = I.css("position") === "fixed" ? I.outerHeight() : 0
                  , G = X.offset().top - D;
                if (X.data("scroll") === "mid") {
                    var V = o.height() - D
                      , Q = X.outerHeight();
                    Q < V && (G -= Math.round((V - Q) / 2))
                }
                return G
            }
            function k(X, I, D) {
                if (N())
                    return 0;
                var G = 1;
                return a.add(X).each(function(V, Q) {
                    var ee = parseFloat(Q.getAttribute("data-scroll-time"));
                    !isNaN(ee) && ee >= 0 && (G = ee)
                }),
                (472.143 * Math.log(Math.abs(I - D) + 125) - 2e3) * G
            }
            function H(X, I, D, G) {
                return D > G ? I : X + (I - X) * ne(D / G)
            }
            function ne(X) {
                return X < .5 ? 4 * X * X * X : (X - 1) * (2 * X - 2) * (2 * X - 2) + 1
            }
            function J() {
                var {WF_CLICK_EMPTY: X, WF_CLICK_SCROLL: I} = t;
                i.on(I, p, M),
                i.on(X, h, function(D) {
                    D.preventDefault()
                }),
                document.head.insertBefore(O, document.head.firstChild)
            }
            return {
                ready: J
            }
        }
        )
    }
    );
    var cm = u( (wK, um) => {
        var TW = Qe();
        TW.define("touch", um.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(i) {
                return i = typeof i == "string" ? e(i).get(0) : i,
                i ? new n(i) : null
            }
            ;
            function n(i) {
                var a = !1, s = !1, c = Math.min(Math.round(window.innerWidth * .04), 40), d, h;
                i.addEventListener("touchstart", p, !1),
                i.addEventListener("touchmove", _, !1),
                i.addEventListener("touchend", O, !1),
                i.addEventListener("touchcancel", S, !1),
                i.addEventListener("mousedown", p, !1),
                i.addEventListener("mousemove", _, !1),
                i.addEventListener("mouseup", O, !1),
                i.addEventListener("mouseout", S, !1);
                function p(L) {
                    var C = L.touches;
                    C && C.length > 1 || (a = !0,
                    C ? (s = !0,
                    d = C[0].clientX) : d = L.clientX,
                    h = d)
                }
                function _(L) {
                    if (a) {
                        if (s && L.type === "mousemove") {
                            L.preventDefault(),
                            L.stopPropagation();
                            return
                        }
                        var C = L.touches
                          , N = C ? C[0].clientX : L.clientX
                          , b = N - h;
                        h = N,
                        Math.abs(b) > c && r && String(r()) === "" && (o("swipe", L, {
                            direction: b > 0 ? "right" : "left"
                        }),
                        S())
                    }
                }
                function O(L) {
                    if (a && (a = !1,
                    s && L.type === "mouseup")) {
                        L.preventDefault(),
                        L.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function S() {
                    a = !1
                }
                function w() {
                    i.removeEventListener("touchstart", p, !1),
                    i.removeEventListener("touchmove", _, !1),
                    i.removeEventListener("touchend", O, !1),
                    i.removeEventListener("touchcancel", S, !1),
                    i.removeEventListener("mousedown", p, !1),
                    i.removeEventListener("mousemove", _, !1),
                    i.removeEventListener("mouseup", O, !1),
                    i.removeEventListener("mouseout", S, !1),
                    i = null
                }
                this.destroy = w
            }
            function o(i, a, s) {
                var c = e.Event(i, {
                    originalEvent: a
                });
                e(a.target).trigger(c, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var lm = u(Is => {
        "use strict";
        Object.defineProperty(Is, "__esModule", {
            value: !0
        });
        Is.default = OW;
        function OW(e, t, r, n, o, i, a, s, c, d, h, p, _) {
            return function(O) {
                e(O);
                var S = O.form
                  , w = {
                    name: S.attr("data-name") || S.attr("name") || "Untitled Form",
                    pageId: S.attr("data-wf-page-id") || "",
                    elementId: S.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(S.html()),
                    trackingCookies: n()
                };
                let L = S.attr("data-wf-flow");
                L && (w.wfFlow = L),
                o(O);
                var C = i(S, w.fields);
                if (C)
                    return a(C);
                if (w.fileUploads = s(S),
                c(O),
                !d) {
                    h(O);
                    return
                }
                p.ajax({
                    url: _,
                    type: "POST",
                    data: w,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(N) {
                    N && N.code === 200 && (O.success = !0),
                    h(O)
                }).fail(function() {
                    h(O)
                })
            }
        }
    }
    );
    var dm = u( (CK, fm) => {
        var Fi = Qe();
        Fi.define("forms", fm.exports = function(e, t) {
            var r = {}, n = e(document), o, i = window.location, a = window.XDomainRequest && !window.atob, s = ".w-form", c, d = /e(-)?mail/i, h = /^\S+@\S+$/, p = window.alert, _ = Fi.env(), O, S, w, L = /list-manage[1-9]?.com/i, C = t.debounce(function() {
                p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                N(),
                !_ && !O && M()
            }
            ;
            function N() {
                c = e("html").attr("data-wf-site"),
                S = "https://webflow.com/api/v1/form/" + c,
                a && S.indexOf("https://webflow.com") >= 0 && (S = S.replace("https://webflow.com", "https://formdata.webflow.com")),
                w = `${S}/signFile`,
                o = e(s + " form"),
                o.length && o.each(b)
            }
            function b(F, j) {
                var f = e(j)
                  , E = e.data(j, s);
                E || (E = e.data(j, s, {
                    form: f
                })),
                q(E);
                var g = f.closest("div.w-form");
                E.done = g.find("> .w-form-done"),
                E.fail = g.find("> .w-form-fail"),
                E.fileUploads = g.find(".w-file-upload"),
                E.fileUploads.each(function(z) {
                    V(z, E)
                });
                var v = E.form.attr("aria-label") || E.form.attr("data-name") || "Form";
                E.done.attr("aria-label") || E.form.attr("aria-label", v),
                E.done.attr("tabindex", "-1"),
                E.done.attr("role", "region"),
                E.done.attr("aria-label") || E.done.attr("aria-label", v + " success"),
                E.fail.attr("tabindex", "-1"),
                E.fail.attr("role", "region"),
                E.fail.attr("aria-label") || E.fail.attr("aria-label", v + " failure");
                var B = E.action = f.attr("action");
                if (E.handler = null,
                E.redirect = f.attr("data-redirect"),
                L.test(B)) {
                    E.handler = I;
                    return
                }
                if (!B) {
                    if (c) {
                        E.handler = ( () => {
                            let z = lm().default;
                            return z(q, i, Fi, ne, G, U, p, k, P, c, D, e, S)
                        }
                        )();
                        return
                    }
                    C()
                }
            }
            function M() {
                O = !0,
                n.on("submit", s + " form", function(z) {
                    var Y = e.data(this, s);
                    Y.handler && (Y.evt = z,
                    Y.handler(Y))
                });
                let F = ".w-checkbox-input"
                  , j = ".w-radio-input"
                  , f = "w--redirected-checked"
                  , E = "w--redirected-focus"
                  , g = "w--redirected-focus-visible"
                  , v = ":focus-visible, [data-wf-focus-visible]"
                  , B = [["checkbox", F], ["radio", j]];
                n.on("change", s + ' form input[type="checkbox"]:not(' + F + ")", z => {
                    e(z.target).siblings(F).toggleClass(f)
                }
                ),
                n.on("change", s + ' form input[type="radio"]', z => {
                    e(`input[name="${z.target.name}"]:not(${F})`).map( (ce, Ae) => e(Ae).siblings(j).removeClass(f));
                    let Y = e(z.target);
                    Y.hasClass("w-radio-input") || Y.siblings(j).addClass(f)
                }
                ),
                B.forEach( ([z,Y]) => {
                    n.on("focus", s + ` form input[type="${z}"]:not(` + Y + ")", ce => {
                        e(ce.target).siblings(Y).addClass(E),
                        e(ce.target).filter(v).siblings(Y).addClass(g)
                    }
                    ),
                    n.on("blur", s + ` form input[type="${z}"]:not(` + Y + ")", ce => {
                        e(ce.target).siblings(Y).removeClass(`${E} ${g}`)
                    }
                    )
                }
                )
            }
            function q(F) {
                var j = F.btn = F.form.find(':input[type="submit"]');
                F.wait = F.btn.attr("data-wait") || null,
                F.success = !1,
                j.prop("disabled", !1),
                F.label && j.val(F.label)
            }
            function P(F) {
                var j = F.btn
                  , f = F.wait;
                j.prop("disabled", !0),
                f && (F.label = j.val(),
                j.val(f))
            }
            function U(F, j) {
                var f = null;
                return j = j || {},
                F.find(':input:not([type="submit"]):not([type="file"])').each(function(E, g) {
                    var v = e(g)
                      , B = v.attr("type")
                      , z = v.attr("data-name") || v.attr("name") || "Field " + (E + 1)
                      , Y = v.val();
                    if (B === "checkbox")
                        Y = v.is(":checked");
                    else if (B === "radio") {
                        if (j[z] === null || typeof j[z] == "string")
                            return;
                        Y = F.find('input[name="' + v.attr("name") + '"]:checked').val() || null
                    }
                    typeof Y == "string" && (Y = e.trim(Y)),
                    j[z] = Y,
                    f = f || J(v, B, z, Y)
                }),
                f
            }
            function k(F) {
                var j = {};
                return F.find(':input[type="file"]').each(function(f, E) {
                    var g = e(E)
                      , v = g.attr("data-name") || g.attr("name") || "File " + (f + 1)
                      , B = g.attr("data-value");
                    typeof B == "string" && (B = e.trim(B)),
                    j[v] = B
                }),
                j
            }
            let H = {
                _mkto_trk: "marketo"
            };
            function ne() {
                return document.cookie.split("; ").reduce(function(j, f) {
                    let E = f.split("=")
                      , g = E[0];
                    if (g in H) {
                        let v = H[g]
                          , B = E.slice(1).join("=");
                        j[v] = B
                    }
                    return j
                }, {})
            }
            function J(F, j, f, E) {
                var g = null;
                return j === "password" ? g = "Passwords cannot be submitted." : F.attr("required") ? E ? d.test(F.attr("type")) && (h.test(E) || (g = "Please enter a valid email address for: " + f)) : g = "Please fill out the required field: " + f : f === "g-recaptcha-response" && !E && (g = "Please confirm you\u2019re not a robot."),
                g
            }
            function X(F) {
                G(F),
                D(F)
            }
            function I(F) {
                q(F);
                var j = F.form
                  , f = {};
                if (/^https/.test(i.href) && !/^https/.test(F.action)) {
                    j.attr("method", "post");
                    return
                }
                G(F);
                var E = U(j, f);
                if (E)
                    return p(E);
                P(F);
                var g;
                t.each(f, function(Y, ce) {
                    d.test(ce) && (f.EMAIL = Y),
                    /^((full[ _-]?)?name)$/i.test(ce) && (g = Y),
                    /^(first[ _-]?name)$/i.test(ce) && (f.FNAME = Y),
                    /^(last[ _-]?name)$/i.test(ce) && (f.LNAME = Y)
                }),
                g && !f.FNAME && (g = g.split(" "),
                f.FNAME = g[0],
                f.LNAME = f.LNAME || g[1]);
                var v = F.action.replace("/post?", "/post-json?") + "&c=?"
                  , B = v.indexOf("u=") + 2;
                B = v.substring(B, v.indexOf("&", B));
                var z = v.indexOf("id=") + 3;
                z = v.substring(z, v.indexOf("&", z)),
                f["b_" + B + "_" + z] = "",
                e.ajax({
                    url: v,
                    data: f,
                    dataType: "jsonp"
                }).done(function(Y) {
                    F.success = Y.result === "success" || /already/.test(Y.msg),
                    F.success || console.info("MailChimp error: " + Y.msg),
                    D(F)
                }).fail(function() {
                    D(F)
                })
            }
            function D(F) {
                var j = F.form
                  , f = F.redirect
                  , E = F.success;
                if (E && f) {
                    Fi.location(f);
                    return
                }
                F.done.toggle(E),
                F.fail.toggle(!E),
                E ? F.done.focus() : F.fail.focus(),
                j.toggle(!E),
                q(F)
            }
            function G(F) {
                F.evt && F.evt.preventDefault(),
                F.evt = null
            }
            function V(F, j) {
                if (!j.fileUploads || !j.fileUploads[F])
                    return;
                var f, E = e(j.fileUploads[F]), g = E.find("> .w-file-upload-default"), v = E.find("> .w-file-upload-uploading"), B = E.find("> .w-file-upload-success"), z = E.find("> .w-file-upload-error"), Y = g.find(".w-file-upload-input"), ce = g.find(".w-file-upload-label"), Ae = ce.children(), le = z.find(".w-file-upload-error-msg"), Ee = B.find(".w-file-upload-file"), We = B.find(".w-file-remove-link"), Be = Ee.find(".w-file-upload-file-name"), it = le.attr("data-w-size-error"), qe = le.attr("data-w-type-error"), Et = le.attr("data-w-generic-error");
                if (_ || ce.on("click keydown", function(m) {
                    m.type === "keydown" && m.which !== 13 && m.which !== 32 || (m.preventDefault(),
                    Y.click())
                }),
                ce.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                We.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                _)
                    Y.on("click", function(m) {
                        m.preventDefault()
                    }),
                    ce.on("click", function(m) {
                        m.preventDefault()
                    }),
                    Ae.on("click", function(m) {
                        m.preventDefault()
                    });
                else {
                    We.on("click keydown", function(m) {
                        if (m.type === "keydown") {
                            if (m.which !== 13 && m.which !== 32)
                                return;
                            m.preventDefault()
                        }
                        Y.removeAttr("data-value"),
                        Y.val(""),
                        Be.html(""),
                        g.toggle(!0),
                        B.toggle(!1),
                        ce.focus()
                    }),
                    Y.on("change", function(m) {
                        f = m.target && m.target.files && m.target.files[0],
                        f && (g.toggle(!1),
                        z.toggle(!1),
                        v.toggle(!0),
                        v.focus(),
                        Be.text(f.name),
                        A() || P(j),
                        j.fileUploads[F].uploading = !0,
                        Q(f, y))
                    });
                    var Ht = ce.outerHeight();
                    Y.height(Ht),
                    Y.width(1)
                }
                function l(m) {
                    var R = m.responseJSON && m.responseJSON.msg
                      , K = Et;
                    typeof R == "string" && R.indexOf("InvalidFileTypeError") === 0 ? K = qe : typeof R == "string" && R.indexOf("MaxFileSizeError") === 0 && (K = it),
                    le.text(K),
                    Y.removeAttr("data-value"),
                    Y.val(""),
                    v.toggle(!1),
                    g.toggle(!0),
                    z.toggle(!0),
                    z.focus(),
                    j.fileUploads[F].uploading = !1,
                    A() || q(j)
                }
                function y(m, R) {
                    if (m)
                        return l(m);
                    var K = R.fileName
                      , te = R.postData
                      , ve = R.fileId
                      , W = R.s3Url;
                    Y.attr("data-value", ve),
                    ee(W, te, f, K, T)
                }
                function T(m) {
                    if (m)
                        return l(m);
                    v.toggle(!1),
                    B.css("display", "inline-block"),
                    B.focus(),
                    j.fileUploads[F].uploading = !1,
                    A() || q(j)
                }
                function A() {
                    var m = j.fileUploads && j.fileUploads.toArray() || [];
                    return m.some(function(R) {
                        return R.uploading
                    })
                }
            }
            function Q(F, j) {
                var f = new URLSearchParams({
                    name: F.name,
                    size: F.size
                });
                e.ajax({
                    type: "GET",
                    url: `${w}?${f}`,
                    crossDomain: !0
                }).done(function(E) {
                    j(null, E)
                }).fail(function(E) {
                    j(E)
                })
            }
            function ee(F, j, f, E, g) {
                var v = new FormData;
                for (var B in j)
                    v.append(B, j[B]);
                v.append("file", f, E),
                e.ajax({
                    type: "POST",
                    url: F,
                    data: v,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    g(null)
                }).fail(function(z) {
                    g(z)
                })
            }
            return r
        }
        )
    }
    );
    var hm = u( (NK, vm) => {
        var qt = Qe()
          , bW = Hi()
          , ht = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , pm = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        qt.define("slider", vm.exports = function(e, t) {
            var r = {}, n = e.tram, o = e(document), i, a, s = qt.env(), c = ".w-slider", d = '<div class="w-slider-dot" data-wf-ignore />', h = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', p = "w-slider-force-show", _ = bW.triggers, O, S = !1;
            r.ready = function() {
                a = qt.env("design"),
                w()
            }
            ,
            r.design = function() {
                a = !0,
                setTimeout(w, 1e3)
            }
            ,
            r.preview = function() {
                a = !1,
                w()
            }
            ,
            r.redraw = function() {
                S = !0,
                w(),
                S = !1
            }
            ,
            r.destroy = L;
            function w() {
                i = o.find(c),
                i.length && (i.each(b),
                !O && (L(),
                C()))
            }
            function L() {
                qt.resize.off(N),
                qt.redraw.off(r.redraw)
            }
            function C() {
                qt.resize.on(N),
                qt.redraw.on(r.redraw)
            }
            function N() {
                i.filter(":visible").each(V)
            }
            function b(f, E) {
                var g = e(E)
                  , v = e.data(E, c);
                v || (v = e.data(E, c, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: g,
                    config: {}
                })),
                v.mask = g.children(".w-slider-mask"),
                v.left = g.children(".w-slider-arrow-left"),
                v.right = g.children(".w-slider-arrow-right"),
                v.nav = g.children(".w-slider-nav"),
                v.slides = v.mask.children(".w-slide"),
                v.slides.each(_.reset),
                S && (v.maskWidth = 0),
                g.attr("role") === void 0 && g.attr("role", "region"),
                g.attr("aria-label") === void 0 && g.attr("aria-label", "carousel");
                var B = v.mask.attr("id");
                if (B || (B = "w-slider-mask-" + f,
                v.mask.attr("id", B)),
                !a && !v.ariaLiveLabel && (v.ariaLiveLabel = e(h).appendTo(v.mask)),
                v.left.attr("role", "button"),
                v.left.attr("tabindex", "0"),
                v.left.attr("aria-controls", B),
                v.left.attr("aria-label") === void 0 && v.left.attr("aria-label", "previous slide"),
                v.right.attr("role", "button"),
                v.right.attr("tabindex", "0"),
                v.right.attr("aria-controls", B),
                v.right.attr("aria-label") === void 0 && v.right.attr("aria-label", "next slide"),
                !n.support.transform) {
                    v.left.hide(),
                    v.right.hide(),
                    v.nav.hide(),
                    O = !0;
                    return
                }
                v.el.off(c),
                v.left.off(c),
                v.right.off(c),
                v.nav.off(c),
                M(v),
                a ? (v.el.on("setting" + c, I(v)),
                X(v),
                v.hasTimer = !1) : (v.el.on("swipe" + c, I(v)),
                v.left.on("click" + c, k(v)),
                v.right.on("click" + c, H(v)),
                v.left.on("keydown" + c, U(v, k)),
                v.right.on("keydown" + c, U(v, H)),
                v.nav.on("keydown" + c, "> div", I(v)),
                v.config.autoplay && !v.hasTimer && (v.hasTimer = !0,
                v.timerCount = 1,
                J(v)),
                v.el.on("mouseenter" + c, P(v, !0, "mouse")),
                v.el.on("focusin" + c, P(v, !0, "keyboard")),
                v.el.on("mouseleave" + c, P(v, !1, "mouse")),
                v.el.on("focusout" + c, P(v, !1, "keyboard"))),
                v.nav.on("click" + c, "> div", I(v)),
                s || v.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var z = g.filter(":hidden");
                z.addClass(p);
                var Y = g.parents(":hidden");
                Y.addClass(p),
                S || V(f, E),
                z.removeClass(p),
                Y.removeClass(p)
            }
            function M(f) {
                var E = {};
                E.crossOver = 0,
                E.animation = f.el.attr("data-animation") || "slide",
                E.animation === "outin" && (E.animation = "cross",
                E.crossOver = .5),
                E.easing = f.el.attr("data-easing") || "ease";
                var g = f.el.attr("data-duration");
                if (E.duration = g != null ? parseInt(g, 10) : 500,
                q(f.el.attr("data-infinite")) && (E.infinite = !0),
                q(f.el.attr("data-disable-swipe")) && (E.disableSwipe = !0),
                q(f.el.attr("data-hide-arrows")) ? E.hideArrows = !0 : f.config.hideArrows && (f.left.show(),
                f.right.show()),
                q(f.el.attr("data-autoplay"))) {
                    E.autoplay = !0,
                    E.delay = parseInt(f.el.attr("data-delay"), 10) || 2e3,
                    E.timerMax = parseInt(f.el.attr("data-autoplay-limit"), 10);
                    var v = "mousedown" + c + " touchstart" + c;
                    a || f.el.off(v).one(v, function() {
                        X(f)
                    })
                }
                var B = f.right.width();
                E.edge = B ? B + 40 : 100,
                f.config = E
            }
            function q(f) {
                return f === "1" || f === "true"
            }
            function P(f, E, g) {
                return function(v) {
                    if (E)
                        f.hasFocus[g] = E;
                    else if (e.contains(f.el.get(0), v.relatedTarget) || (f.hasFocus[g] = E,
                    f.hasFocus.mouse && g === "keyboard" || f.hasFocus.keyboard && g === "mouse"))
                        return;
                    E ? (f.ariaLiveLabel.attr("aria-live", "polite"),
                    f.hasTimer && X(f)) : (f.ariaLiveLabel.attr("aria-live", "off"),
                    f.hasTimer && J(f))
                }
            }
            function U(f, E) {
                return function(g) {
                    switch (g.keyCode) {
                    case ht.SPACE:
                    case ht.ENTER:
                        return E(f)(),
                        g.preventDefault(),
                        g.stopPropagation()
                    }
                }
            }
            function k(f) {
                return function() {
                    G(f, {
                        index: f.index - 1,
                        vector: -1
                    })
                }
            }
            function H(f) {
                return function() {
                    G(f, {
                        index: f.index + 1,
                        vector: 1
                    })
                }
            }
            function ne(f, E) {
                var g = null;
                E === f.slides.length && (w(),
                Q(f)),
                t.each(f.anchors, function(v, B) {
                    e(v.els).each(function(z, Y) {
                        e(Y).index() === E && (g = B)
                    })
                }),
                g != null && G(f, {
                    index: g,
                    immediate: !0
                })
            }
            function J(f) {
                X(f);
                var E = f.config
                  , g = E.timerMax;
                g && f.timerCount++ > g || (f.timerId = window.setTimeout(function() {
                    f.timerId == null || a || (H(f)(),
                    J(f))
                }, E.delay))
            }
            function X(f) {
                window.clearTimeout(f.timerId),
                f.timerId = null
            }
            function I(f) {
                return function(E, g) {
                    g = g || {};
                    var v = f.config;
                    if (a && E.type === "setting") {
                        if (g.select === "prev")
                            return k(f)();
                        if (g.select === "next")
                            return H(f)();
                        if (M(f),
                        Q(f),
                        g.select == null)
                            return;
                        ne(f, g.select);
                        return
                    }
                    if (E.type === "swipe")
                        return v.disableSwipe || qt.env("editor") ? void 0 : g.direction === "left" ? H(f)() : g.direction === "right" ? k(f)() : void 0;
                    if (f.nav.has(E.target).length) {
                        var B = e(E.target).index();
                        if (E.type === "click" && G(f, {
                            index: B
                        }),
                        E.type === "keydown")
                            switch (E.keyCode) {
                            case ht.ENTER:
                            case ht.SPACE:
                                {
                                    G(f, {
                                        index: B
                                    }),
                                    E.preventDefault();
                                    break
                                }
                            case ht.ARROW_LEFT:
                            case ht.ARROW_UP:
                                {
                                    D(f.nav, Math.max(B - 1, 0)),
                                    E.preventDefault();
                                    break
                                }
                            case ht.ARROW_RIGHT:
                            case ht.ARROW_DOWN:
                                {
                                    D(f.nav, Math.min(B + 1, f.pages)),
                                    E.preventDefault();
                                    break
                                }
                            case ht.HOME:
                                {
                                    D(f.nav, 0),
                                    E.preventDefault();
                                    break
                                }
                            case ht.END:
                                {
                                    D(f.nav, f.pages),
                                    E.preventDefault();
                                    break
                                }
                            default:
                                return
                            }
                    }
                }
            }
            function D(f, E) {
                var g = f.children().eq(E).focus();
                f.children().not(g)
            }
            function G(f, E) {
                E = E || {};
                var g = f.config
                  , v = f.anchors;
                f.previous = f.index;
                var B = E.index
                  , z = {};
                B < 0 ? (B = v.length - 1,
                g.infinite && (z.x = -f.endX,
                z.from = 0,
                z.to = v[0].width)) : B >= v.length && (B = 0,
                g.infinite && (z.x = v[v.length - 1].width,
                z.from = -v[v.length - 1].x,
                z.to = z.from - z.x)),
                f.index = B;
                var Y = f.nav.children().eq(B).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                f.nav.children().not(Y).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
                g.hideArrows && (f.index === v.length - 1 ? f.right.hide() : f.right.show(),
                f.index === 0 ? f.left.hide() : f.left.show());
                var ce = f.offsetX || 0
                  , Ae = f.offsetX = -v[f.index].x
                  , le = {
                    x: Ae,
                    opacity: 1,
                    visibility: ""
                }
                  , Ee = e(v[f.index].els)
                  , We = e(v[f.previous] && v[f.previous].els)
                  , Be = f.slides.not(Ee)
                  , it = g.animation
                  , qe = g.easing
                  , Et = Math.round(g.duration)
                  , Ht = E.vector || (f.index > f.previous ? 1 : -1)
                  , l = "opacity " + Et + "ms " + qe
                  , y = "transform " + Et + "ms " + qe;
                if (Ee.find(pm).removeAttr("tabindex"),
                Ee.removeAttr("aria-hidden"),
                Ee.find("*").removeAttr("aria-hidden"),
                Be.find(pm).attr("tabindex", "-1"),
                Be.attr("aria-hidden", "true"),
                Be.find("*").attr("aria-hidden", "true"),
                a || (Ee.each(_.intro),
                Be.each(_.outro)),
                E.immediate && !S) {
                    n(Ee).set(le),
                    m();
                    return
                }
                if (f.index === f.previous)
                    return;
                if (a || f.ariaLiveLabel.text(`Slide ${B + 1} of ${v.length}.`),
                it === "cross") {
                    var T = Math.round(Et - Et * g.crossOver)
                      , A = Math.round(Et - T);
                    l = "opacity " + T + "ms " + qe,
                    n(We).set({
                        visibility: ""
                    }).add(l).start({
                        opacity: 0
                    }),
                    n(Ee).set({
                        visibility: "",
                        x: Ae,
                        opacity: 0,
                        zIndex: f.depth++
                    }).add(l).wait(A).then({
                        opacity: 1
                    }).then(m);
                    return
                }
                if (it === "fade") {
                    n(We).set({
                        visibility: ""
                    }).stop(),
                    n(Ee).set({
                        visibility: "",
                        x: Ae,
                        opacity: 0,
                        zIndex: f.depth++
                    }).add(l).start({
                        opacity: 1
                    }).then(m);
                    return
                }
                if (it === "over") {
                    le = {
                        x: f.endX
                    },
                    n(We).set({
                        visibility: ""
                    }).stop(),
                    n(Ee).set({
                        visibility: "",
                        zIndex: f.depth++,
                        x: Ae + v[f.index].width * Ht
                    }).add(y).start({
                        x: Ae
                    }).then(m);
                    return
                }
                g.infinite && z.x ? (n(f.slides.not(We)).set({
                    visibility: "",
                    x: z.x
                }).add(y).start({
                    x: Ae
                }),
                n(We).set({
                    visibility: "",
                    x: z.from
                }).add(y).start({
                    x: z.to
                }),
                f.shifted = We) : (g.infinite && f.shifted && (n(f.shifted).set({
                    visibility: "",
                    x: ce
                }),
                f.shifted = null),
                n(f.slides).set({
                    visibility: ""
                }).add(y).start({
                    x: Ae
                }));
                function m() {
                    Ee = e(v[f.index].els),
                    Be = f.slides.not(Ee),
                    it !== "slide" && (le.visibility = "hidden"),
                    n(Be).set(le)
                }
            }
            function V(f, E) {
                var g = e.data(E, c);
                if (g) {
                    if (F(g))
                        return Q(g);
                    a && j(g) && Q(g)
                }
            }
            function Q(f) {
                var E = 1
                  , g = 0
                  , v = 0
                  , B = 0
                  , z = f.maskWidth
                  , Y = z - f.config.edge;
                Y < 0 && (Y = 0),
                f.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }],
                f.slides.each(function(Ae, le) {
                    v - g > Y && (E++,
                    g += z,
                    f.anchors[E - 1] = {
                        els: [],
                        x: v,
                        width: 0
                    }),
                    B = e(le).outerWidth(!0),
                    v += B,
                    f.anchors[E - 1].width += B,
                    f.anchors[E - 1].els.push(le);
                    var Ee = Ae + 1 + " of " + f.slides.length;
                    e(le).attr("aria-label", Ee),
                    e(le).attr("role", "group")
                }),
                f.endX = v,
                a && (f.pages = null),
                f.nav.length && f.pages !== E && (f.pages = E,
                ee(f));
                var ce = f.index;
                ce >= E && (ce = E - 1),
                G(f, {
                    immediate: !0,
                    index: ce
                })
            }
            function ee(f) {
                var E = [], g, v = f.el.attr("data-nav-spacing");
                v && (v = parseFloat(v) + "px");
                for (var B = 0, z = f.pages; B < z; B++)
                    g = e(d),
                    g.attr("aria-label", "Show slide " + (B + 1) + " of " + z).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"),
                    f.nav.hasClass("w-num") && g.text(B + 1),
                    v != null && g.css({
                        "margin-left": v,
                        "margin-right": v
                    }),
                    E.push(g);
                f.nav.empty().append(E)
            }
            function F(f) {
                var E = f.mask.width();
                return f.maskWidth !== E ? (f.maskWidth = E,
                !0) : !1
            }
            function j(f) {
                var E = 0;
                return f.slides.each(function(g, v) {
                    E += e(v).outerWidth(!0)
                }),
                f.slidesWidth !== E ? (f.slidesWidth = E,
                !0) : !1
            }
            return r
        }
        )
    }
    );
    Ts();
    Os();
    Ds();
    Gs();
    Us();
    Bs();
    Hi();
    nm();
    om();
    sm();
    cm();
    dm();
    hm();
}
)();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64e45e949983886b710aa1a0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 75,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 75,
                "restingState": 50
            }],
            "createdOn": 1692713106106
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button",
                "originalId": "64d9f62109ba325399666dc5|126069ec-e7bc-8252-3c8b-5d0e7e61c1e1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button",
                "originalId": "64d9f62109ba325399666dc5|126069ec-e7bc-8252-3c8b-5d0e7e61c1e1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692194960672
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button",
                "originalId": "64d9f62109ba325399666dc5|126069ec-e7bc-8252-3c8b-5d0e7e61c1e1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button",
                "originalId": "64d9f62109ba325399666dc5|126069ec-e7bc-8252-3c8b-5d0e7e61c1e1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692194960672
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-7"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".game_card",
                "originalId": "64e45e949983886b710aa1a0|07432b4e-ca75-f5a6-7c06-81abc42c613e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".game_card",
                "originalId": "64e45e949983886b710aa1a0|07432b4e-ca75-f5a6-7c06-81abc42c613e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692777526044
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".game_card",
                "originalId": "64e45e949983886b710aa1a0|07432b4e-ca75-f5a6-7c06-81abc42c613e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".game_card",
                "originalId": "64e45e949983886b710aa1a0|07432b4e-ca75-f5a6-7c06-81abc42c613e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692777526044
        },
        "e-8": {
            "id": "e-8",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-9"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".tv_card",
                "originalId": "64e45e949983886b710aa1a0|141fa0f7-cb10-5a9e-b65b-fa314fef4d0a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".tv_card",
                "originalId": "64e45e949983886b710aa1a0|141fa0f7-cb10-5a9e-b65b-fa314fef4d0a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692782441873
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".tv_card",
                "originalId": "64e45e949983886b710aa1a0|141fa0f7-cb10-5a9e-b65b-fa314fef4d0a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".tv_card",
                "originalId": "64e45e949983886b710aa1a0|141fa0f7-cb10-5a9e-b65b-fa314fef4d0a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692782441873
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|41277720-8998-04f9-1fbd-83bae7405621",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|41277720-8998-04f9-1fbd-83bae7405621",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692787540424
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-17"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|2b9bf5f9-d96c-4e3f-a253-1278022996e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|2b9bf5f9-d96c-4e3f-a253-1278022996e6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692788813338
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|c3de4b06-1e29-f70b-7d42-a779135aa191",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|c3de4b06-1e29-f70b-7d42-a779135aa191",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692788842066
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-21"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|b5429bf0-434d-6b30-8143-554b89ecc2f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|b5429bf0-434d-6b30-8143-554b89ecc2f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692788855087
        },
        "e-22": {
            "id": "e-22",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-23"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|b9daae0b-a47b-c52f-aa57-98755408f0c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|b9daae0b-a47b-c52f-aa57-98755408f0c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692788863981
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-27"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|53773556-6e23-c16d-74ea-91c2dd1934c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|53773556-6e23-c16d-74ea-91c2dd1934c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692788881325
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|d3419a85-630a-1b6e-4cbe-121d60e3df4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|d3419a85-630a-1b6e-4cbe-121d60e3df4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692788895626
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".icon_20x20",
                "originalId": "64e45e949983886b710aa1a0|80fb103f-2b9a-d463-e887-43efc27e3524",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".icon_20x20",
                "originalId": "64e45e949983886b710aa1a0|80fb103f-2b9a-d463-e887-43efc27e3524",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692788908279
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button_os",
                "originalId": "64e45e949983886b710aa1a0|0df5851e-dc1e-33e4-e0c3-678a799129c6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button_os",
                "originalId": "64e45e949983886b710aa1a0|0df5851e-dc1e-33e4-e0c3-678a799129c6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692788964441
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".icon_24x24.margin_left-small.text-color-black60",
                "originalId": "64e45e949983886b710aa1a0|40579473-7f0e-513e-e96f-c0e3ddc90e8b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".icon_24x24.margin_left-small.text-color-black60",
                "originalId": "64e45e949983886b710aa1a0|40579473-7f0e-513e-e96f-c0e3ddc90e8b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692788991278
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".button_txt-small",
                "originalId": "64e45e949983886b710aa1a0|dd9c971b-8496-6a09-1907-e93522b08dc9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button_txt-small",
                "originalId": "64e45e949983886b710aa1a0|dd9c971b-8496-6a09-1907-e93522b08dc9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692789007998
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".nav_widget-button",
                "originalId": "64e45e949983886b710aa1a0|ac8d44a9-abbd-a5d8-1e8f-f67cc8e12fcd",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav_widget-button",
                "originalId": "64e45e949983886b710aa1a0|ac8d44a9-abbd-a5d8-1e8f-f67cc8e12fcd",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692789028178
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|7660298c-4e32-bb36-a36c-885573e6b922",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|7660298c-4e32-bb36-a36c-885573e6b922",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692789040562
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".game_card",
                "originalId": "64e45e949983886b710aa1a0|07432b4e-ca75-f5a6-7c06-81abc42c613e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".game_card",
                "originalId": "64e45e949983886b710aa1a0|07432b4e-ca75-f5a6-7c06-81abc42c613e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692789051340
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".tv_card",
                "originalId": "64e45e949983886b710aa1a0|141fa0f7-cb10-5a9e-b65b-fa314fef4d0a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".tv_card",
                "originalId": "64e45e949983886b710aa1a0|141fa0f7-cb10-5a9e-b65b-fa314fef4d0a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692789060211
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".date-picker_wrapper",
                "originalId": "64e45e949983886b710aa1a0|5bf39ded-2130-cd12-3203-3e20794a7170",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".date-picker_wrapper",
                "originalId": "64e45e949983886b710aa1a0|5bf39ded-2130-cd12-3203-3e20794a7170",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692789095281
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".icon_24x24.arrow",
                "originalId": "64e45e949983886b710aa1a0|0c7d3cb5-f0ce-23b2-77e9-ab5c8258fba7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".icon_24x24.arrow",
                "originalId": "64e45e949983886b710aa1a0|0c7d3cb5-f0ce-23b2-77e9-ab5c8258fba7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692789113432
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".grid_news",
                "originalId": "64e45e949983886b710aa1a0|8f168a69-10c2-7131-bc9e-53b5c0ab420c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".grid_news",
                "originalId": "64e45e949983886b710aa1a0|8f168a69-10c2-7131-bc9e-53b5c0ab420c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692792376637
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-53"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|cc0b1536-fae1-0898-d964-fa81f655905e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|cc0b1536-fae1-0898-d964-fa81f655905e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692796835805
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-57"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|128ca919-1c29-93d1-4614-7dbbe62ff255",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|128ca919-1c29-93d1-4614-7dbbe62ff255",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692798675122
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|e3c97b01-20ee-3fab-eaee-0c8d5256e5e8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|e3c97b01-20ee-3fab-eaee-0c8d5256e5e8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692799370447
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692802042798
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|4c782c6d-7b25-327a-bf1f-592afee42d68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|4c782c6d-7b25-327a-bf1f-592afee42d68",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692802486187
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|483914c7-e49e-432f-1bae-c023b5c8ae40",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|483914c7-e49e-432f-1bae-c023b5c8ae40",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692805764183
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64e45e949983886b710aa1a0|f3dd5b8e-67ee-3a45-3b2b-f0bcca185082",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64e45e949983886b710aa1a0|f3dd5b8e-67ee-3a45-3b2b-f0bcca185082",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1692807483414
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Background",
            "continuousParameterGroups": [{
                "id": "a-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64e45e949983886b710aa1a0|9eb3e1c0-368a-8d9a-4775-a0328ab9e42d"
                            },
                            "xValue": -0.5,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64e45e949983886b710aa1a0|9eb3e1c0-368a-8d9a-4775-a0328ab9e42d"
                            },
                            "xValue": 0.5,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64e45e949983886b710aa1a0|9eb3e1c0-368a-8d9a-4775-a0328ab9e42d"
                            },
                            "yValue": -1,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64e45e949983886b710aa1a0|9eb3e1c0-368a-8d9a-4775-a0328ab9e42d"
                            },
                            "yValue": 1,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1692713119228
        },
        "a-3": {
            "id": "a-3",
            "title": "(BUTTON) Mouse In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCirc",
                        "duration": 250,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1692194964747
        },
        "a-4": {
            "id": "a-4",
            "title": "(BUTTON) Mouse Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 500,
                        "target": {},
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1692194964747
        },
        "a-6": {
            "id": "a-6",
            "title": "(GAMES) Mouse In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".game_cover",
                            "selectorGuids": ["cc40b752-6829-55b0-4bfa-bf7128de4166"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 250,
                        "target": {
                            "useEventTarget": true,
                            "id": "64e45e949983886b710aa1a0|07432b4e-ca75-f5a6-7c06-81abc42c613e"
                        },
                        "xValue": 1.05,
                        "yValue": 1.05,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1692777533034
        },
        "a-7": {
            "id": "a-7",
            "title": "(GAMES) Mouse Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outBounce",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".game_cover",
                            "selectorGuids": ["cc40b752-6829-55b0-4bfa-bf7128de4166"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outBack",
                        "duration": 250,
                        "target": {
                            "useEventTarget": true,
                            "id": "64e45e949983886b710aa1a0|07432b4e-ca75-f5a6-7c06-81abc42c613e"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1692777533034
        },
        "a-8": {
            "id": "a-8",
            "title": "(SLIDER) Mouse In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 250,
                        "target": {
                            "useEventTarget": true,
                            "id": "64e45e949983886b710aa1a0|141fa0f7-cb10-5a9e-b65b-fa314fef4d0a"
                        },
                        "xValue": 1.05,
                        "yValue": 1.05,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tv_card-content-wrapper",
                            "selectorGuids": ["120d7e6d-cae2-4746-26e5-7b4c8aa60174"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tv_cover",
                            "selectorGuids": ["188600f5-4a40-77e2-b370-6c0e01908db7"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1692782446355
        },
        "a-9": {
            "id": "a-9",
            "title": "(SLIDER) Mouse Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outBack",
                        "duration": 250,
                        "target": {
                            "useEventTarget": true,
                            "id": "64e45e949983886b710aa1a0|141fa0f7-cb10-5a9e-b65b-fa314fef4d0a"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tv_card-content-wrapper",
                            "selectorGuids": ["120d7e6d-cae2-4746-26e5-7b4c8aa60174"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outBounce",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tv_cover",
                            "selectorGuids": ["188600f5-4a40-77e2-b370-6c0e01908db7"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1692782446355
        },
        "a-10": {
            "id": "a-10",
            "title": "(MODAL) Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".modal",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e95071310"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-10-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".modal_content-wrapper",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e95071309"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".modal_content-wrapper",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e95071309"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".modal_bg",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e95071303"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".modal_content-bg",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e9507130f"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".modal",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e95071310"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-10-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outBack",
                        "duration": 800,
                        "target": {
                            "selector": ".modal_content-wrapper",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e95071309"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outBack",
                        "duration": 800,
                        "target": {
                            "selector": ".modal_content-wrapper",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e95071309"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 500,
                        "target": {
                            "selector": ".modal_bg",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e95071303"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-10",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outBounce",
                        "duration": 1000,
                        "target": {
                            "selector": ".modal_content-bg",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e9507130f"]
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1692787567381
        },
        "a-12": {
            "id": "a-12",
            "title": "Loading page",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n-3",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e45e949983886b710aa1a0|9eb3e1c0-368a-8d9a-4775-a0328ab9e42d"
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "aa73",
                            "value": 16,
                            "unit": "px"
                        }]
                    }
                }, {
                    "id": "a-12-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e45e949983886b710aa1a0|e58d9afb-b075-6838-c823-fe83f25dbc35"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64e45e949983886b710aa1a0|9eb3e1c0-368a-8d9a-4775-a0328ab9e42d"
                        },
                        "xValue": 2,
                        "yValue": 2,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 1500,
                        "target": {
                            "id": "64e45e949983886b710aa1a0|9eb3e1c0-368a-8d9a-4775-a0328ab9e42d"
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "aa73",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }, {
                    "id": "a-12-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 1500,
                        "target": {
                            "id": "64e45e949983886b710aa1a0|9eb3e1c0-368a-8d9a-4775-a0328ab9e42d"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 2000,
                        "target": {
                            "id": "64e45e949983886b710aa1a0|e58d9afb-b075-6838-c823-fe83f25dbc35"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1692802046579
        },
        "a-11": {
            "id": "a-11",
            "title": "(MODAL) Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".modal_content-wrapper",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e95071309"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-11-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 500,
                        "target": {
                            "selector": ".modal_content-bg",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e9507130f"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-11-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".modal_content-wrapper",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e95071309"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeOut",
                        "duration": 500,
                        "target": {
                            "selector": ".modal_bg",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e95071303"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".modal_content-wrapper",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e95071309"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "vh",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".modal",
                            "selectorGuids": ["7ddda902-2196-bf1e-94d6-293e95071310"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1692787567381
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
