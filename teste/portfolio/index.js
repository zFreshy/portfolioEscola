/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                n.d(i, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return i
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 5)
}([function(t, e, n) {
    "use strict";
    var i = {}
      , r = {}
      , o = []
      , a = window.Webflow || []
      , s = window.jQuery
      , u = s(window)
      , c = s(document)
      , l = s.isFunction
      , f = i._ = n(7)
      , d = i.tram = n(2) && s.tram
      , h = !1
      , p = !1;
    function v(t) {
        i.env() && (l(t.design) && u.on("__wf_design", t.design),
        l(t.preview) && u.on("__wf_preview", t.preview)),
        l(t.destroy) && u.on("__wf_destroy", t.destroy),
        t.ready && l(t.ready) && function(t) {
            if (h)
                return void t.ready();
            if (f.contains(o, t.ready))
                return;
            o.push(t.ready)
        }(t)
    }
    function m(t) {
        l(t.design) && u.off("__wf_design", t.design),
        l(t.preview) && u.off("__wf_preview", t.preview),
        l(t.destroy) && u.off("__wf_destroy", t.destroy),
        t.ready && l(t.ready) && function(t) {
            o = f.filter(o, function(e) {
                return e !== t.ready
            })
        }(t)
    }
    d.config.hideBackface = !1,
    d.config.keepInherited = !0,
    i.define = function(t, e, n) {
        r[t] && m(r[t]);
        var i = r[t] = e(s, f, n) || {};
        return v(i),
        i
    }
    ,
    i.require = function(t) {
        return r[t]
    }
    ,
    i.push = function(t) {
        h ? l(t) && t() : a.push(t)
    }
    ,
    i.env = function(t) {
        var e = window.__wf_design
          , n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    }
    ;
    var g, w = navigator.userAgent.toLowerCase(), b = i.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch, y = i.env.chrome = /chrome/.test(w) && /Google/.test(navigator.vendor) && parseInt(w.match(/chrome\/(\d+)\./)[1], 10), x = i.env.ios = /(ipod|iphone|ipad)/.test(w);
    i.env.safari = /safari/.test(w) && !y && !x,
    b && c.on("touchstart mousedown", function(t) {
        g = t.target
    }),
    i.validClick = b ? function(t) {
        return t === g || s.contains(t, g)
    }
    : function() {
        return !0
    }
    ;
    var k, _ = "resize.webflow orientationchange.webflow load.webflow";
    function E(t, e) {
        var n = []
          , i = {};
        return i.up = f.throttle(function(t) {
            f.each(n, function(e) {
                e(t)
            })
        }),
        t && e && t.on(e, i.up),
        i.on = function(t) {
            "function" == typeof t && (f.contains(n, t) || n.push(t))
        }
        ,
        i.off = function(t) {
            n = arguments.length ? f.filter(n, function(e) {
                return e !== t
            }) : []
        }
        ,
        i
    }
    function O(t) {
        l(t) && t()
    }
    function T() {
        k && (k.reject(),
        u.off("load", k.resolve)),
        k = new s.Deferred,
        u.on("load", k.resolve)
    }
    i.resize = E(u, _),
    i.scroll = E(u, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"),
    i.redraw = E(),
    i.location = function(t) {
        window.location = t
    }
    ,
    i.env() && (i.location = function() {}
    ),
    i.ready = function() {
        h = !0,
        p ? (p = !1,
        f.each(r, v)) : f.each(o, O),
        f.each(a, O),
        i.resize.up()
    }
    ,
    i.load = function(t) {
        k.then(t)
    }
    ,
    i.destroy = function(t) {
        t = t || {},
        p = !0,
        u.triggerHandler("__wf_destroy"),
        null != t.domready && (h = t.domready),
        f.each(r, m),
        i.resize.off(),
        i.scroll.off(),
        i.redraw.off(),
        o = [],
        a = [],
        "pending" === k.state() && T()
    }
    ,
    s(i.ready),
    T(),
    t.exports = window.Webflow = i
}
, function(t, e, n) {
    "use strict";
    var i = window.jQuery
      , r = {}
      , o = []
      , a = {
        reset: function(t, e) {
            e.__wf_intro = null
        },
        intro: function(t, e) {
            e.__wf_intro || (e.__wf_intro = !0,
            i(e).triggerHandler(r.types.INTRO))
        },
        outro: function(t, e) {
            e.__wf_intro && (e.__wf_intro = null,
            i(e).triggerHandler(r.types.OUTRO))
        }
    };
    r.triggers = {},
    r.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    },
    r.init = function() {
        for (var t = o.length, e = 0; e < t; e++) {
            var n = o[e];
            n[0](0, n[1])
        }
        o = [],
        i.extend(r.triggers, a)
    }
    ,
    r.async = function() {
        for (var t in a) {
            var e = a[t];
            a.hasOwnProperty(t) && (r.triggers[t] = function(t, n) {
                o.push([e, n])
            }
            )
        }
    }
    ,
    r.async(),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    var i = n(3)(n(8));
    window.tram = function(t) {
        function e(t, e) {
            return (new j.Bare).init(t, e)
        }
        function n(t) {
            return t.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        function r(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }
        function o(t, e, n) {
            return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
        }
        function a() {}
        function s(t, e, n) {
            c("Units do not match [" + t + "]: " + e + ", " + n)
        }
        function u(t, e, n) {
            if (void 0 !== e && (n = e),
            void 0 === t)
                return n;
            var i = n;
            return Q.test(t) || !J.test(t) ? i = parseInt(t, 10) : J.test(t) && (i = 1e3 * parseFloat(t)),
            0 > i && (i = 0),
            i == i ? i : n
        }
        function c(t) {
            B.debug && window && window.console.warn(t)
        }
        var l = function(t, e, n) {
            function r(t) {
                return "object" == (0,
                i.default)(t)
            }
            function o(t) {
                return "function" == typeof t
            }
            function a() {}
            return function i(s, u) {
                function c() {
                    var t = new l;
                    return o(t.init) && t.init.apply(t, arguments),
                    t
                }
                function l() {}
                u === n && (u = s,
                s = Object),
                c.Bare = l;
                var f, d = a[t] = s[t], h = l[t] = c[t] = new a;
                return h.constructor = c,
                c.mixin = function(e) {
                    return l[t] = c[t] = i(c, e)[t],
                    c
                }
                ,
                c.open = function(t) {
                    if (f = {},
                    o(t) ? f = t.call(c, h, d, c, s) : r(t) && (f = t),
                    r(f))
                        for (var n in f)
                            e.call(f, n) && (h[n] = f[n]);
                    return o(h.init) || (h.init = s),
                    c
                }
                ,
                c.open(u)
            }
        }("prototype", {}.hasOwnProperty)
          , f = {
            ease: ["ease", function(t, e, n, i) {
                var r = (t /= i) * t
                  , o = r * t;
                return e + n * (-2.75 * o * r + 11 * r * r + -15.5 * o + 8 * r + .25 * t)
            }
            ],
            "ease-in": ["ease-in", function(t, e, n, i) {
                var r = (t /= i) * t
                  , o = r * t;
                return e + n * (-1 * o * r + 3 * r * r + -3 * o + 2 * r)
            }
            ],
            "ease-out": ["ease-out", function(t, e, n, i) {
                var r = (t /= i) * t
                  , o = r * t;
                return e + n * (.3 * o * r + -1.6 * r * r + 2.2 * o + -1.8 * r + 1.9 * t)
            }
            ],
            "ease-in-out": ["ease-in-out", function(t, e, n, i) {
                var r = (t /= i) * t
                  , o = r * t;
                return e + n * (2 * o * r + -5 * r * r + 2 * o + 2 * r)
            }
            ],
            linear: ["linear", function(t, e, n, i) {
                return n * t / i + e
            }
            ],
            "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, i) {
                return n * (t /= i) * t + e
            }
            ],
            "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, i) {
                return -n * (t /= i) * (t - 2) + e
            }
            ],
            "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, i) {
                return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
            }
            ],
            "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, i) {
                return n * (t /= i) * t * t + e
            }
            ],
            "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, i) {
                return n * ((t = t / i - 1) * t * t + 1) + e
            }
            ],
            "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, i) {
                return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
            }
            ],
            "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, i) {
                return n * (t /= i) * t * t * t + e
            }
            ],
            "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, i) {
                return -n * ((t = t / i - 1) * t * t * t - 1) + e
            }
            ],
            "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, i) {
                return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
            }
            ],
            "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, i) {
                return n * (t /= i) * t * t * t * t + e
            }
            ],
            "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, i) {
                return n * ((t = t / i - 1) * t * t * t * t + 1) + e
            }
            ],
            "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, i) {
                return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
            }
            ],
            "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, i) {
                return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
            }
            ],
            "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, i) {
                return n * Math.sin(t / i * (Math.PI / 2)) + e
            }
            ],
            "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, i) {
                return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e
            }
            ],
            "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, i) {
                return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e
            }
            ],
            "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, i) {
                return t === i ? e + n : n * (1 - Math.pow(2, -10 * t / i)) + e
            }
            ],
            "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, i) {
                return 0 === t ? e : t === i ? e + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
            }
            ],
            "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, i) {
                return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e
            }
            ],
            "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, i) {
                return n * Math.sqrt(1 - (t = t / i - 1) * t) + e
            }
            ],
            "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, i) {
                return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
            }
            ],
            "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, i, r) {
                return void 0 === r && (r = 1.70158),
                n * (t /= i) * t * ((r + 1) * t - r) + e
            }
            ],
            "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, i, r) {
                return void 0 === r && (r = 1.70158),
                n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
            }
            ],
            "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, i, r) {
                return void 0 === r && (r = 1.70158),
                (t /= i / 2) < 1 ? n / 2 * t * t * ((1 + (r *= 1.525)) * t - r) + e : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e
            }
            ]
        }
          , d = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        }
          , h = document
          , p = window
          , v = "bkwld-tram"
          , m = /[\-\.0-9]/g
          , g = /[A-Z]/
          , w = "number"
          , b = /^(rgb|#)/
          , y = /(em|cm|mm|in|pt|pc|px)$/
          , x = /(em|cm|mm|in|pt|pc|px|%)$/
          , k = /(deg|rad|turn)$/
          , _ = "unitless"
          , E = /(all|none) 0s ease 0s/
          , O = /^(width|height)$/
          , T = " "
          , A = h.createElement("a")
          , C = ["Webkit", "Moz", "O", "ms"]
          , R = ["-webkit-", "-moz-", "-o-", "-ms-"]
          , I = function(t) {
            if (t in A.style)
                return {
                    dom: t,
                    css: t
                };
            var e, n, i = "", r = t.split("-");
            for (e = 0; e < r.length; e++)
                i += r[e].charAt(0).toUpperCase() + r[e].slice(1);
            for (e = 0; e < C.length; e++)
                if ((n = C[e] + i)in A.style)
                    return {
                        dom: n,
                        css: R[e] + t
                    }
        }
          , S = e.support = {
            bind: Function.prototype.bind,
            transform: I("transform"),
            transition: I("transition"),
            backface: I("backface-visibility"),
            timing: I("transition-timing-function")
        };
        if (S.transition) {
            var D = S.timing.dom;
            if (A.style[D] = f["ease-in-back"][0],
            !A.style[D])
                for (var P in d)
                    f[P][0] = d[P]
        }
        var M = e.frame = function() {
            var t = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
            return t && S.bind ? t.bind(p) : function(t) {
                p.setTimeout(t, 16)
            }
        }()
          , z = e.now = function() {
            var t = p.performance
              , e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
            return e && S.bind ? e.bind(t) : Date.now || function() {
                return +new Date
            }
        }()
          , N = l(function(e) {
            function r(t, e) {
                var n = function(t) {
                    for (var e = -1, n = t ? t.length : 0, i = []; ++e < n; ) {
                        var r = t[e];
                        r && i.push(r)
                    }
                    return i
                }(("" + t).split(T))
                  , i = n[0];
                e = e || {};
                var r = Y[i];
                if (!r)
                    return c("Unsupported property: " + i);
                if (!e.weak || !this.props[i]) {
                    var o = r[0]
                      , a = this.props[i];
                    return a || (a = this.props[i] = new o.Bare),
                    a.init(this.$el, n, r, e),
                    a
                }
            }
            function o(t, e, n) {
                if (t) {
                    var o = (0,
                    i.default)(t);
                    if (e || (this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1),
                    "number" == o && e)
                        return this.timer = new U({
                            duration: t,
                            context: this,
                            complete: a
                        }),
                        void (this.active = !0);
                    if ("string" == o && e) {
                        switch (t) {
                        case "hide":
                            l.call(this);
                            break;
                        case "stop":
                            s.call(this);
                            break;
                        case "redraw":
                            f.call(this);
                            break;
                        default:
                            r.call(this, t, n && n[1])
                        }
                        return a.call(this)
                    }
                    if ("function" == o)
                        return void t.call(this, this);
                    if ("object" == o) {
                        var c = 0;
                        h.call(this, t, function(t, e) {
                            t.span > c && (c = t.span),
                            t.stop(),
                            t.animate(e)
                        }, function(t) {
                            "wait"in t && (c = u(t.wait, 0))
                        }),
                        d.call(this),
                        c > 0 && (this.timer = new U({
                            duration: c,
                            context: this
                        }),
                        this.active = !0,
                        e && (this.timer.complete = a));
                        var p = this
                          , v = !1
                          , m = {};
                        M(function() {
                            h.call(p, t, function(t) {
                                t.active && (v = !0,
                                m[t.name] = t.nextStyle)
                            }),
                            v && p.$el.css(m)
                        })
                    }
                }
            }
            function a() {
                if (this.timer && this.timer.destroy(),
                this.active = !1,
                this.queue.length) {
                    var t = this.queue.shift();
                    o.call(this, t.options, !0, t.args)
                }
            }
            function s(t) {
                var e;
                this.timer && this.timer.destroy(),
                this.queue = [],
                this.active = !1,
                "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0,
                i.default)(t) && null != t ? t : this.props,
                h.call(this, e, p),
                d.call(this)
            }
            function l() {
                s.call(this),
                this.el.style.display = "none"
            }
            function f() {
                this.el.offsetHeight
            }
            function d() {
                var t, e, n = [];
                for (t in this.upstream && n.push(this.upstream),
                this.props)
                    (e = this.props[t]).active && n.push(e.string);
                n = n.join(","),
                this.style !== n && (this.style = n,
                this.el.style[S.transition.dom] = n)
            }
            function h(t, e, i) {
                var o, a, s, u, c = e !== p, l = {};
                for (o in t)
                    s = t[o],
                    o in K ? (l.transform || (l.transform = {}),
                    l.transform[o] = s) : (g.test(o) && (o = n(o)),
                    o in Y ? l[o] = s : (u || (u = {}),
                    u[o] = s));
                for (o in l) {
                    if (s = l[o],
                    !(a = this.props[o])) {
                        if (!c)
                            continue;
                        a = r.call(this, o)
                    }
                    e.call(this, a, s)
                }
                i && u && i.call(this, u)
            }
            function p(t) {
                t.stop()
            }
            function m(t, e) {
                t.set(e)
            }
            function w(t) {
                this.$el.css(t)
            }
            function b(t, n) {
                e[t] = function() {
                    return this.children ? function(t, e) {
                        var n, i = this.children.length;
                        for (n = 0; i > n; n++)
                            t.apply(this.children[n], e);
                        return this
                    }
                    .call(this, n, arguments) : (this.el && n.apply(this, arguments),
                    this)
                }
            }
            e.init = function(e) {
                if (this.$el = t(e),
                this.el = this.$el[0],
                this.props = {},
                this.queue = [],
                this.style = "",
                this.active = !1,
                B.keepInherited && !B.fallback) {
                    var n = Z(this.el, "transition");
                    n && !E.test(n) && (this.upstream = n)
                }
                S.backface && B.hideBackface && G(this.el, S.backface.css, "hidden")
            }
            ,
            b("add", r),
            b("start", o),
            b("wait", function(t) {
                t = u(t, 0),
                this.active ? this.queue.push({
                    options: t
                }) : (this.timer = new U({
                    duration: t,
                    context: this,
                    complete: a
                }),
                this.active = !0)
            }),
            b("then", function(t) {
                return this.active ? (this.queue.push({
                    options: t,
                    args: arguments
                }),
                void (this.timer.complete = a)) : c("No active transition timer. Use start() or wait() before then().")
            }),
            b("next", a),
            b("stop", s),
            b("set", function(t) {
                s.call(this, t),
                h.call(this, t, m, w)
            }),
            b("show", function(t) {
                "string" != typeof t && (t = "block"),
                this.el.style.display = t
            }),
            b("hide", l),
            b("redraw", f),
            b("destroy", function() {
                s.call(this),
                t.removeData(this.el, v),
                this.$el = this.el = null
            })
        })
          , j = l(N, function(e) {
            function n(e, n) {
                var i = t.data(e, v) || t.data(e, v, new N.Bare);
                return i.el || i.init(e),
                n ? i.start(n) : i
            }
            e.init = function(e, i) {
                var r = t(e);
                if (!r.length)
                    return this;
                if (1 === r.length)
                    return n(r[0], i);
                var o = [];
                return r.each(function(t, e) {
                    o.push(n(e, i))
                }),
                this.children = o,
                this
            }
        })
          , L = l(function(t) {
            function e() {
                var t = this.get();
                this.update("auto");
                var e = this.get();
                return this.update(t),
                e
            }
            function n(t) {
                var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
            }
            var r = 500
              , a = "ease"
              , s = 0;
            t.init = function(t, e, n, i) {
                this.$el = t,
                this.el = t[0];
                var o = e[0];
                n[2] && (o = n[2]),
                X[o] && (o = X[o]),
                this.name = o,
                this.type = n[1],
                this.duration = u(e[1], this.duration, r),
                this.ease = function(t, e, n) {
                    return void 0 !== e && (n = e),
                    t in f ? t : n
                }(e[2], this.ease, a),
                this.delay = u(e[3], this.delay, s),
                this.span = this.duration + this.delay,
                this.active = !1,
                this.nextStyle = null,
                this.auto = O.test(this.name),
                this.unit = i.unit || this.unit || B.defaultUnit,
                this.angle = i.angle || this.angle || B.defaultAngle,
                B.fallback || i.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                this.string = this.name + T + this.duration + "ms" + ("ease" != this.ease ? T + f[this.ease][0] : "") + (this.delay ? T + this.delay + "ms" : ""))
            }
            ,
            t.set = function(t) {
                t = this.convert(t, this.type),
                this.update(t),
                this.redraw()
            }
            ,
            t.transition = function(t) {
                this.active = !0,
                t = this.convert(t, this.type),
                this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()),
                this.redraw()),
                "auto" == t && (t = e.call(this))),
                this.nextStyle = t
            }
            ,
            t.fallback = function(t) {
                var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                t = this.convert(t, this.type),
                this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)),
                "auto" == t && (t = e.call(this))),
                this.tween = new q({
                    from: n,
                    to: t,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this
                })
            }
            ,
            t.get = function() {
                return Z(this.el, this.name)
            }
            ,
            t.update = function(t) {
                G(this.el, this.name, t)
            }
            ,
            t.stop = function() {
                (this.active || this.nextStyle) && (this.active = !1,
                this.nextStyle = null,
                G(this.el, this.name, this.get()));
                var t = this.tween;
                t && t.context && t.destroy()
            }
            ,
            t.convert = function(t, e) {
                if ("auto" == t && this.auto)
                    return t;
                var r, o = "number" == typeof t, a = "string" == typeof t;
                switch (e) {
                case w:
                    if (o)
                        return t;
                    if (a && "" === t.replace(m, ""))
                        return +t;
                    r = "number(unitless)";
                    break;
                case b:
                    if (a) {
                        if ("" === t && this.original)
                            return this.original;
                        if (e.test(t))
                            return "#" == t.charAt(0) && 7 == t.length ? t : n(t)
                    }
                    r = "hex or rgb string";
                    break;
                case y:
                    if (o)
                        return t + this.unit;
                    if (a && e.test(t))
                        return t;
                    r = "number(px) or string(unit)";
                    break;
                case x:
                    if (o)
                        return t + this.unit;
                    if (a && e.test(t))
                        return t;
                    r = "number(px) or string(unit or %)";
                    break;
                case k:
                    if (o)
                        return t + this.angle;
                    if (a && e.test(t))
                        return t;
                    r = "number(deg) or string(angle)";
                    break;
                case _:
                    if (o)
                        return t;
                    if (a && x.test(t))
                        return t;
                    r = "number(unitless) or string(unit or %)"
                }
                return function(t, e) {
                    c("Type warning: Expected: [" + t + "] Got: [" + (0,
                    i.default)(e) + "] " + e)
                }(r, t),
                t
            }
            ,
            t.redraw = function() {
                this.el.offsetHeight
            }
        })
          , W = l(L, function(t, e) {
            t.init = function() {
                e.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), b))
            }
        })
          , F = l(L, function(t, e) {
            t.init = function() {
                e.init.apply(this, arguments),
                this.animate = this.fallback
            }
            ,
            t.get = function() {
                return this.$el[this.name]()
            }
            ,
            t.update = function(t) {
                this.$el[this.name](t)
            }
        })
          , $ = l(L, function(t, e) {
            function n(t, e) {
                var n, i, r, o, a;
                for (n in t)
                    r = (o = K[n])[0],
                    i = o[1] || n,
                    a = this.convert(t[n], r),
                    e.call(this, i, a, r)
            }
            t.init = function() {
                e.init.apply(this, arguments),
                this.current || (this.current = {},
                K.perspective && B.perspective && (this.current.perspective = B.perspective,
                G(this.el, this.name, this.style(this.current)),
                this.redraw()))
            }
            ,
            t.set = function(t) {
                n.call(this, t, function(t, e) {
                    this.current[t] = e
                }),
                G(this.el, this.name, this.style(this.current)),
                this.redraw()
            }
            ,
            t.transition = function(t) {
                var e = this.values(t);
                this.tween = new H({
                    current: this.current,
                    values: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease
                });
                var n, i = {};
                for (n in this.current)
                    i[n] = n in e ? e[n] : this.current[n];
                this.active = !0,
                this.nextStyle = this.style(i)
            }
            ,
            t.fallback = function(t) {
                var e = this.values(t);
                this.tween = new H({
                    current: this.current,
                    values: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this
                })
            }
            ,
            t.update = function() {
                G(this.el, this.name, this.style(this.current))
            }
            ,
            t.style = function(t) {
                var e, n = "";
                for (e in t)
                    n += e + "(" + t[e] + ") ";
                return n
            }
            ,
            t.values = function(t) {
                var e, i = {};
                return n.call(this, t, function(t, n, r) {
                    i[t] = n,
                    void 0 === this.current[t] && (e = 0,
                    ~t.indexOf("scale") && (e = 1),
                    this.current[t] = this.convert(e, r))
                }),
                i
            }
        })
          , q = l(function(e) {
            function n() {
                var t, e, i, r = u.length;
                if (r)
                    for (M(n),
                    e = z(),
                    t = r; t--; )
                        (i = u[t]) && i.render(e)
            }
            var i = {
                ease: f.ease[1],
                from: 0,
                to: 1
            };
            e.init = function(t) {
                this.duration = t.duration || 0,
                this.delay = t.delay || 0;
                var e = t.ease || i.ease;
                f[e] && (e = f[e][1]),
                "function" != typeof e && (e = i.ease),
                this.ease = e,
                this.update = t.update || a,
                this.complete = t.complete || a,
                this.context = t.context || this,
                this.name = t.name;
                var n = t.from
                  , r = t.to;
                void 0 === n && (n = i.from),
                void 0 === r && (r = i.to),
                this.unit = t.unit || "",
                "number" == typeof n && "number" == typeof r ? (this.begin = n,
                this.change = r - n) : this.format(r, n),
                this.value = this.begin + this.unit,
                this.start = z(),
                !1 !== t.autoplay && this.play()
            }
            ,
            e.play = function() {
                var t;
                this.active || (this.start || (this.start = z()),
                this.active = !0,
                t = this,
                1 === u.push(t) && M(n))
            }
            ,
            e.stop = function() {
                var e, n, i;
                this.active && (this.active = !1,
                e = this,
                (i = t.inArray(e, u)) >= 0 && (n = u.slice(i + 1),
                u.length = i,
                n.length && (u = u.concat(n))))
            }
            ,
            e.render = function(t) {
                var e, n = t - this.start;
                if (this.delay) {
                    if (n <= this.delay)
                        return;
                    n -= this.delay
                }
                if (n < this.duration) {
                    var i = this.ease(n, 0, 1, this.duration);
                    return e = this.startRGB ? function(t, e, n) {
                        return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                    }(this.startRGB, this.endRGB, i) : function(t) {
                        return Math.round(t * c) / c
                    }(this.begin + i * this.change),
                    this.value = e + this.unit,
                    void this.update.call(this.context, this.value)
                }
                e = this.endHex || this.begin + this.change,
                this.value = e + this.unit,
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy()
            }
            ,
            e.format = function(t, e) {
                if (e += "",
                "#" == (t += "").charAt(0))
                    return this.startRGB = r(e),
                    this.endRGB = r(t),
                    this.endHex = t,
                    this.begin = 0,
                    void (this.change = 1);
                if (!this.unit) {
                    var n = e.replace(m, "");
                    n !== t.replace(m, "") && s("tween", e, t),
                    this.unit = n
                }
                e = parseFloat(e),
                t = parseFloat(t),
                this.begin = this.value = e,
                this.change = t - e
            }
            ,
            e.destroy = function() {
                this.stop(),
                this.context = null,
                this.ease = this.update = this.complete = a
            }
            ;
            var u = []
              , c = 1e3
        })
          , U = l(q, function(t) {
            t.init = function(t) {
                this.duration = t.duration || 0,
                this.complete = t.complete || a,
                this.context = t.context,
                this.play()
            }
            ,
            t.render = function(t) {
                t - this.start < this.duration || (this.complete.call(this.context),
                this.destroy())
            }
        })
          , H = l(q, function(t, e) {
            t.init = function(t) {
                var e, n;
                for (e in this.context = t.context,
                this.update = t.update,
                this.tweens = [],
                this.current = t.current,
                t.values)
                    n = t.values[e],
                    this.current[e] !== n && this.tweens.push(new q({
                        name: e,
                        from: this.current[e],
                        to: n,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                this.play()
            }
            ,
            t.render = function(t) {
                var e, n, i = !1;
                for (e = this.tweens.length; e--; )
                    (n = this.tweens[e]).context && (n.render(t),
                    this.current[n.name] = n.value,
                    i = !0);
                return i ? void (this.update && this.update.call(this.context)) : this.destroy()
            }
            ,
            t.destroy = function() {
                if (e.destroy.call(this),
                this.tweens) {
                    var t;
                    for (t = this.tweens.length; t--; )
                        this.tweens[t].destroy();
                    this.tweens = null,
                    this.current = null
                }
            }
        })
          , B = e.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !S.transition,
            agentTests: []
        };
        e.fallback = function(t) {
            if (!S.transition)
                return B.fallback = !0;
            B.agentTests.push("(" + t + ")");
            var e = new RegExp(B.agentTests.join("|"),"i");
            B.fallback = e.test(navigator.userAgent)
        }
        ,
        e.fallback("6.0.[2-5] Safari"),
        e.tween = function(t) {
            return new q(t)
        }
        ,
        e.delay = function(t, e, n) {
            return new U({
                complete: e,
                duration: t,
                context: n
            })
        }
        ,
        t.fn.tram = function(t) {
            return e.call(null, this, t)
        }
        ;
        var G = t.style
          , Z = t.css
          , X = {
            transform: S.transform && S.transform.css
        }
          , Y = {
            color: [W, b],
            background: [W, b, "background-color"],
            "outline-color": [W, b],
            "border-color": [W, b],
            "border-top-color": [W, b],
            "border-right-color": [W, b],
            "border-bottom-color": [W, b],
            "border-left-color": [W, b],
            "border-width": [L, y],
            "border-top-width": [L, y],
            "border-right-width": [L, y],
            "border-bottom-width": [L, y],
            "border-left-width": [L, y],
            "border-spacing": [L, y],
            "letter-spacing": [L, y],
            margin: [L, y],
            "margin-top": [L, y],
            "margin-right": [L, y],
            "margin-bottom": [L, y],
            "margin-left": [L, y],
            padding: [L, y],
            "padding-top": [L, y],
            "padding-right": [L, y],
            "padding-bottom": [L, y],
            "padding-left": [L, y],
            "outline-width": [L, y],
            opacity: [L, w],
            top: [L, x],
            right: [L, x],
            bottom: [L, x],
            left: [L, x],
            "font-size": [L, x],
            "text-indent": [L, x],
            "word-spacing": [L, x],
            width: [L, x],
            "min-width": [L, x],
            "max-width": [L, x],
            height: [L, x],
            "min-height": [L, x],
            "max-height": [L, x],
            "line-height": [L, _],
            "scroll-top": [F, w, "scrollTop"],
            "scroll-left": [F, w, "scrollLeft"]
        }
          , K = {};
        S.transform && (Y.transform = [$],
        K = {
            x: [x, "translateX"],
            y: [x, "translateY"],
            rotate: [k],
            rotateX: [k],
            rotateY: [k],
            scale: [w],
            scaleX: [w],
            scaleY: [w],
            skew: [k],
            skewX: [k],
            skewY: [k]
        }),
        S.transform && S.backface && (K.z = [x, "translateZ"],
        K.rotateZ = [k],
        K.scaleZ = [w],
        K.perspective = [y]);
        var Q = /ms/
          , J = /s|\./;
        return t.tram = e
    }(window.jQuery)
}
, function(t, e) {
    t.exports = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(1);
    function r(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null),
        t.dispatchEvent(n)
    }
    var o = window.jQuery
      , a = {}
      , s = {
        reset: function(t, e) {
            i.triggers.reset(t, e)
        },
        intro: function(t, e) {
            i.triggers.intro(t, e),
            r(e, "COMPONENT_ACTIVE")
        },
        outro: function(t, e) {
            i.triggers.outro(t, e),
            r(e, "COMPONENT_INACTIVE")
        }
    };
    a.triggers = {},
    a.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    },
    o.extend(a.triggers, s),
    t.exports = a
}
, function(t, e, n) {
    n(6),
    n(9),
    n(1),
    n(10),
    n(11),
    n(12),
    n(13),
    n(14),
    n(15),
    t.exports = n(20)
}
, function(t, e, n) {
    "use strict";
    var i = n(0);
    i.define("brand", t.exports = function(t) {
        var e, n = {}, r = document, o = t("html"), a = t("body"), s = ".w-webflow-badge", u = window.location, c = /PhantomJS/i.test(navigator.userAgent), l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        function f() {
            var n = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || Boolean(r.webkitFullscreenElement);
            t(e).attr("style", n ? "display: none !important;" : "")
        }
        function d() {
            var t = a.children(s)
              , n = t.length && t.get(0) === e
              , r = i.env("editor");
            n ? r && t.remove() : (t.length && t.remove(),
            r || a.append(e))
        }

        n
    }
    )
}
, function(t, e, n) {
    "use strict";
    var i = window.$
      , r = n(2) && i.tram;
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
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
    t.exports = function() {
        var t = {
            VERSION: "1.6.0-Webflow"
        }
          , e = {}
          , n = Array.prototype
          , i = Object.prototype
          , o = Function.prototype
          , a = (n.push,
        n.slice)
          , s = (n.concat,
        i.toString,
        i.hasOwnProperty)
          , u = n.forEach
          , c = n.map
          , l = (n.reduce,
        n.reduceRight,
        n.filter)
          , f = (n.every,
        n.some)
          , d = n.indexOf
          , h = (n.lastIndexOf,
        Array.isArray,
        Object.keys)
          , p = (o.bind,
        t.each = t.forEach = function(n, i, r) {
            if (null == n)
                return n;
            if (u && n.forEach === u)
                n.forEach(i, r);
            else if (n.length === +n.length) {
                for (var o = 0, a = n.length; o < a; o++)
                    if (i.call(r, n[o], o, n) === e)
                        return
            } else {
                var s = t.keys(n);
                for (o = 0,
                a = s.length; o < a; o++)
                    if (i.call(r, n[s[o]], s[o], n) === e)
                        return
            }
            return n
        }
        );
        t.map = t.collect = function(t, e, n) {
            var i = [];
            return null == t ? i : c && t.map === c ? t.map(e, n) : (p(t, function(t, r, o) {
                i.push(e.call(n, t, r, o))
            }),
            i)
        }
        ,
        t.find = t.detect = function(t, e, n) {
            var i;
            return v(t, function(t, r, o) {
                if (e.call(n, t, r, o))
                    return i = t,
                    !0
            }),
            i
        }
        ,
        t.filter = t.select = function(t, e, n) {
            var i = [];
            return null == t ? i : l && t.filter === l ? t.filter(e, n) : (p(t, function(t, r, o) {
                e.call(n, t, r, o) && i.push(t)
            }),
            i)
        }
        ;
        var v = t.some = t.any = function(n, i, r) {
            i || (i = t.identity);
            var o = !1;
            return null == n ? o : f && n.some === f ? n.some(i, r) : (p(n, function(t, n, a) {
                if (o || (o = i.call(r, t, n, a)))
                    return e
            }),
            !!o)
        }
        ;
        t.contains = t.include = function(t, e) {
            return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : v(t, function(t) {
                return t === e
            }))
        }
        ,
        t.delay = function(t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }
        ,
        t.defer = function(e) {
            return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
        }
        ,
        t.throttle = function(t) {
            var e, n, i;
            return function() {
                e || (e = !0,
                n = arguments,
                i = this,
                r.frame(function() {
                    e = !1,
                    t.apply(i, n)
                }))
            }
        }
        ,
        t.debounce = function(e, n, i) {
            var r, o, a, s, u, c = function c() {
                var l = t.now() - s;
                l < n ? r = setTimeout(c, n - l) : (r = null,
                i || (u = e.apply(a, o),
                a = o = null))
            };
            return function() {
                a = this,
                o = arguments,
                s = t.now();
                var l = i && !r;
                return r || (r = setTimeout(c, n)),
                l && (u = e.apply(a, o),
                a = o = null),
                u
            }
        }
        ,
        t.defaults = function(e) {
            if (!t.isObject(e))
                return e;
            for (var n = 1, i = arguments.length; n < i; n++) {
                var r = arguments[n];
                for (var o in r)
                    void 0 === e[o] && (e[o] = r[o])
            }
            return e
        }
        ,
        t.keys = function(e) {
            if (!t.isObject(e))
                return [];
            if (h)
                return h(e);
            var n = [];
            for (var i in e)
                t.has(e, i) && n.push(i);
            return n
        }
        ,
        t.has = function(t, e) {
            return s.call(t, e)
        }
        ,
        t.isObject = function(t) {
            return t === Object(t)
        }
        ,
        t.now = Date.now || function() {
            return (new Date).getTime()
        }
        ,
        t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var m = /(.)^/
          , g = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , w = /\\|'|\r|\n|\u2028|\u2029/g
          , b = function(t) {
            return "\\" + g[t]
        };
        return t.template = function(e, n, i) {
            !n && i && (n = i),
            n = t.defaults({}, n, t.templateSettings);
            var r = RegExp([(n.escape || m).source, (n.interpolate || m).source, (n.evaluate || m).source].join("|") + "|$", "g")
              , o = 0
              , a = "__p+='";
            e.replace(r, function(t, n, i, r, s) {
                return a += e.slice(o, s).replace(w, b),
                o = s + t.length,
                n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"),
                t
            }),
            a += "';\n",
            n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
            a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var s = new Function(n.variable || "obj","_",a)
            } catch (t) {
                throw t.source = a,
                t
            }
            var u = function(e) {
                return s.call(this, e, t)
            }
              , c = n.variable || "obj";
            return u.source = "function(" + c + "){\n" + a + "}",
            u
        }
        ,
        t
    }()
}
, function(t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function i(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = i = function(t) {
            return n(t)
        }
        : t.exports = i = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }
        ,
        i(e)
    }
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    var i = n(0);
    i.define("edit", t.exports = function(t, e, n) {
        if (n = n || {},
        (i.env("test") || i.env("frame")) && !n.fixture && !function() {
            try {
                return window.top.__Cypress__
            } catch (t) {
                return !1
            }
        }())
            return {
                exit: 1
            };
        var r, o = t(window), a = t(document.documentElement), s = document.location, u = "hashchange", c = n.load || function() {
            r = !0,
            window.WebflowEditor = !0,
            o.off(u, f),
            function(t) {
                var e = window.document.createElement("iframe");
                e.src = "https://webflow.com/site/third-party-cookie-check.html",
                e.style.display = "none",
                e.sandbox = "allow-scripts allow-same-origin";
                var n = function n(i) {
                    "WF_third_party_cookies_unsupported" === i.data ? (g(e, n),
                    t(!1)) : "WF_third_party_cookies_supported" === i.data && (g(e, n),
                    t(!0))
                };
                e.onerror = function() {
                    g(e, n),
                    t(!1)
                }
                ,
                window.addEventListener("message", n, !1),
                window.document.body.appendChild(e)
            }(function(e) {
                t.ajax({
                    url: m("https://editor-api.webflow.com/api/editor/view"),
                    data: {
                        siteId: a.attr("data-wf-site")
                    },
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "json",
                    crossDomain: !0,
                    success: d(e)
                })
            })
        }
        , l = !1;
        try {
            l = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
        } catch (t) {}
        function f() {
            r || /\?edit/.test(s.hash) && c()
        }
        function d(t) {
            return function(e) {
                e ? (e.thirdPartyCookiesSupported = t,
                h(v(e.bugReporterScriptPath), function() {
                    h(v(e.scriptPath), function() {
                        window.WebflowEditor(e)
                    })
                })) : console.error("Could not load editor data")
            }
        }
        function h(e, n) {
            t.ajax({
                type: "GET",
                url: e,
                dataType: "script",
                cache: !0
            }).then(n, p)
        }
        function p(t, e, n) {
            throw console.error("Could not load editor script: " + e),
            n
        }
        function v(t) {
            return t.indexOf("//") >= 0 ? t : m("https://editor-api.webflow.com" + t)
        }
        function m(t) {
            return t.replace(/([^:])\/\//g, "$1/")
        }
        function g(t, e) {
            window.removeEventListener("message", e, !1),
            t.remove()
        }
        return l ? c() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && c() : o.on(u, f).triggerHandler(u),
        {}
    }
    )
}
, function(t, e, n) {
    "use strict";
    var i = n(0)
      , r = n(1);
    i.define("ix", t.exports = function(t, e) {
        var n, o, a = {}, s = t(window), u = ".w-ix", c = t.tram, l = i.env, f = l(), d = l.chrome && l.chrome < 35, h = "none 0s ease 0s", p = t(), v = {}, m = [], g = [], w = [], b = 1, y = {
            tabs: ".w-tab-link, .w-tab-pane",
            dropdown: ".w-dropdown",
            slider: ".w-slide",
            navbar: ".w-nav"
        };
        function x(t) {
            t && (v = {},
            e.each(t, function(t) {
                v[t.slug] = t.value
            }),
            k())
        }
        function k() {
            !function() {
                var e = t("[data-ix]");
                if (!e.length)
                    return;
                e.each(O),
                e.each(_),
                m.length && (i.scroll.on(T),
                setTimeout(T, 1));
                g.length && i.load(A);
                w.length && setTimeout(C, b)
            }(),
            r.init(),
            i.redraw.up()
        }
        function _(n, o) {
            var s = t(o)
              , c = s.attr("data-ix")
              , l = v[c];
            if (l) {
                var d = l.triggers;
                d && (a.style(s, l.style),
                e.each(d, function(t) {
                    var e = {}
                      , n = t.type
                      , o = t.stepsB && t.stepsB.length;
                    function a() {
                        R(t, s, {
                            group: "A"
                        })
                    }
                    function c() {
                        R(t, s, {
                            group: "B"
                        })
                    }
                    if ("load" !== n) {
                        if ("click" === n)
                            return s.on("click" + u, function(n) {
                                i.validClick(n.currentTarget) && ("#" === s.attr("href") && n.preventDefault(),
                                R(t, s, {
                                    group: e.clicked ? "B" : "A"
                                }),
                                o && (e.clicked = !e.clicked))
                            }),
                            void (p = p.add(s));
                        if ("hover" === n)
                            return s.on("mouseenter" + u, a),
                            s.on("mouseleave" + u, c),
                            void (p = p.add(s));
                        if ("scroll" !== n) {
                            var l = y[n];
                            if (l) {
                                var d = s.closest(l);
                                return d.on(r.types.INTRO, a).on(r.types.OUTRO, c),
                                void (p = p.add(d))
                            }
                        } else
                            m.push({
                                el: s,
                                trigger: t,
                                state: {
                                    active: !1
                                },
                                offsetTop: E(t.offsetTop),
                                offsetBot: E(t.offsetBot)
                            })
                    } else
                        t.preload && !f ? g.push(a) : w.push(a)
                }))
            }
        }
        function E(t) {
            if (!t)
                return 0;
            t = String(t);
            var e = parseInt(t, 10);
            return e != e ? 0 : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = .999),
            e)
        }
        function O(e, n) {
            t(n).off(u)
        }
        function T() {
            for (var t = s.scrollTop(), e = s.height(), n = m.length, i = 0; i < n; i++) {
                var r = m[i]
                  , o = r.el
                  , a = r.trigger
                  , u = a.stepsB && a.stepsB.length
                  , c = r.state
                  , l = o.offset().top
                  , f = o.outerHeight()
                  , d = r.offsetTop
                  , h = r.offsetBot;
                d < 1 && d > 0 && (d *= e),
                h < 1 && h > 0 && (h *= e);
                var p = l + f - d >= t && l + h <= t + e;
                p !== c.active && ((!1 !== p || u) && (c.active = p,
                R(a, o, {
                    group: p ? "A" : "B"
                })))
            }
        }
        function A() {
            for (var t = g.length, e = 0; e < t; e++)
                g[e]()
        }
        function C() {
            for (var t = w.length, e = 0; e < t; e++)
                w[e]()
        }
        function R(e, i, r, o) {
            var a = (r = r || {}).done
              , s = e.preserve3d;
            if (!n || r.force) {
                var u = r.group || "A"
                  , l = e["loop" + u]
                  , h = e["steps" + u];
                if (h && h.length) {
                    if (h.length < 2 && (l = !1),
                    !o) {
                        var p = e.selector;
                        p && (i = e.descend ? i.find(p) : e.siblings ? i.siblings(p) : t(p),
                        f && i.attr("data-ix-affect", 1)),
                        d && i.addClass("w-ix-emptyfix"),
                        s && i.css("transform-style", "preserve-3d")
                    }
                    for (var v = c(i), m = {
                        omit3d: !s
                    }, g = 0; g < h.length; g++)
                        I(v, h[g], m);
                    m.start ? v.then(w) : w()
                }
            }
            function w() {
                if (l)
                    return R(e, i, r, !0);
                "auto" === m.width && v.set({
                    width: "auto"
                }),
                "auto" === m.height && v.set({
                    height: "auto"
                }),
                a && a()
            }
        }
        function I(t, e, n) {
            var r = "add"
              , o = "start";
            n.start && (r = o = "then");
            var a = e.transition;
            if (a) {
                a = a.split(",");
                for (var s = 0; s < a.length; s++) {
                    var u = a[s];
                    t[r](u)
                }
            }
            var c = S(e, n) || {};
            if (null != c.width && (n.width = c.width),
            null != c.height && (n.height = c.height),
            null == a) {
                n.start ? t.then(function() {
                    var e = this.queue;
                    this.set(c),
                    c.display && (t.redraw(),
                    i.redraw.up()),
                    this.queue = e,
                    this.next()
                }) : (t.set(c),
                c.display && (t.redraw(),
                i.redraw.up()));
                var l = c.wait;
                null != l && (t.wait(l),
                n.start = !0)
            } else {
                if (c.display) {
                    var f = c.display;
                    delete c.display,
                    n.start ? t.then(function() {
                        var t = this.queue;
                        this.set({
                            display: f
                        }).redraw(),
                        i.redraw.up(),
                        this.queue = t,
                        this.next()
                    }) : (t.set({
                        display: f
                    }).redraw(),
                    i.redraw.up())
                }
                t[o](c),
                n.start = !0
            }
        }
        function S(t, e) {
            var n = e && e.omit3d
              , i = {}
              , r = !1;
            for (var o in t)
                "transition" !== o && "keysort" !== o && (!n || "z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o) && (i[o] = t[o],
                r = !0);
            return r ? i : null
        }
        return a.init = function(t) {
            setTimeout(function() {
                x(t)
            }, 1)
        }
        ,
        a.preview = function() {
            n = !1,
            b = 100,
            setTimeout(function() {
                x(window.__wf_ix)
            }, 1)
        }
        ,
        a.design = function() {
            n = !0,
            a.destroy()
        }
        ,
        a.destroy = function() {
            o = !0,
            p.each(O),
            i.scroll.off(T),
            r.async(),
            m = [],
            g = [],
            w = []
        }
        ,
        a.ready = function() {
            if (f)
                return l("design") ? a.design() : a.preview();
            v && o && (o = !1,
            k())
        }
        ,
        a.run = R,
        a.style = f ? function(e, n) {
            var i = c(e);
            if (t.isEmptyObject(n))
                return;
            e.css("transition", "");
            var r = e.css("transition");
            r === h && (r = i.upstream = null);
            i.upstream = h,
            i.set(S(n)),
            i.upstream = r
        }
        : function(t, e) {
            c(t).set(S(e))
        }
        ,
        a
    }
    )
}
, function(t, e, n) {
    "use strict";
    var i = n(0);
    i.define("links", t.exports = function(t, e) {
        var n, r, o, a = {}, s = t(window), u = i.env(), c = window.location, l = document.createElement("a"), f = "w--current", d = /index\.(html|php)$/, h = /\/$/;
        function p(e) {
            var i = n && e.getAttribute("href-disabled") || e.getAttribute("href");
            if (l.href = i,
            !(i.indexOf(":") >= 0)) {
                var a = t(e);
                if (l.hash.length > 1 && l.host + l.pathname === c.host + c.pathname) {
                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash))
                        return;
                    var s = t(l.hash);
                    s.length && r.push({
                        link: a,
                        sec: s,
                        active: !1
                    })
                } else if ("#" !== i && "" !== i) {
                    var u = l.href === c.href || i === o || d.test(i) && h.test(o);
                    m(a, f, u)
                }
            }
        }
        function v() {
            var t = s.scrollTop()
              , n = s.height();
            e.each(r, function(e) {
                var i = e.link
                  , r = e.sec
                  , o = r.offset().top
                  , a = r.outerHeight()
                  , s = .5 * n
                  , u = r.is(":visible") && o + a - s >= t && o + s <= t + n;
                e.active !== u && (e.active = u,
                m(i, f, u))
            })
        }
        function m(t, e, n) {
            var i = t.hasClass(e);
            n && i || (n || i) && (n ? t.addClass(e) : t.removeClass(e))
        }
        return a.ready = a.design = a.preview = function() {
            n = u && i.env("design"),
            o = i.env("slug") || c.pathname || "",
            i.scroll.off(v),
            r = [];
            for (var t = document.links, e = 0; e < t.length; ++e)
                p(t[e]);
            r.length && (i.scroll.on(v),
            v())
        }
        ,
        a
    }
    )
}
, function(t, e, n) {
    "use strict";
    var i = n(0);
    i.define("scroll", t.exports = function(t) {
        var e = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll"
        }
          , n = window.location
          , r = function() {
            try {
                return Boolean(window.frameElement)
            } catch (t) {
                return !0
            }
        }() ? null : window.history
          , o = t(window)
          , a = t(document)
          , s = t(document.body)
          , u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
            window.setTimeout(t, 15)
        }
          , c = i.env("editor") ? ".w-editor-body" : "body"
          , l = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])"
          , f = 'a[href="#"]'
          , d = 'a[href*="#"]:not(.w-tab-link):not(' + f + ")"
          , h = document.createElement("style");
        h.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
        var p = /^#[a-zA-Z0-9][\w:.-]*$/;
        var v = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
        function m(t, e) {
            var n;
            switch (e) {
            case "add":
                (n = t.attr("tabindex")) ? t.attr("data-wf-tabindex-swap", n) : t.attr("tabindex", "-1");
                break;
            case "remove":
                (n = t.attr("data-wf-tabindex-swap")) ? (t.attr("tabindex", n),
                t.removeAttr("data-wf-tabindex-swap")) : t.removeAttr("tabindex")
            }
            t.toggleClass("wf-force-outline-none", "add" === e)
        }
        function g(e) {
            var a = e.currentTarget;
            if (!(i.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))) {
                var c, f = (c = a,
                p.test(c.hash) && c.host + c.pathname === n.host + n.pathname ? a.hash : "");
                if ("" !== f) {
                    var d = t(f);
                    d.length && (e && (e.preventDefault(),
                    e.stopPropagation()),
                    function(t) {
                        if (n.hash !== t && r && r.pushState && (!i.env.chrome || "file:" !== n.protocol)) {
                            var e = r.state && r.state.hash;
                            e !== t && r.pushState({
                                hash: t
                            }, "", t)
                        }
                    }(f),
                    window.setTimeout(function() {
                        !function(e, n) {
                            var i = o.scrollTop()
                              , r = function(e) {
                                var n = t(l)
                                  , i = "fixed" === n.css("position") ? n.outerHeight() : 0
                                  , r = e.offset().top - i;
                                if ("mid" === e.data("scroll")) {
                                    var a = o.height() - i
                                      , s = e.outerHeight();
                                    s < a && (r -= Math.round((a - s) / 2))
                                }
                                return r
                            }(e);
                            if (i === r)
                                return;
                            var a = function(t, e, n) {
                                if ("none" === document.body.getAttribute("data-wf-scroll-motion") || v.matches)
                                    return 0;
                                var i = 1;
                                return s.add(t).each(function(t, e) {
                                    var n = parseFloat(e.getAttribute("data-scroll-time"));
                                    !isNaN(n) && n >= 0 && (i = n)
                                }),
                                (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) * i
                            }(e, i, r)
                              , c = Date.now();
                            u(function t() {
                                var e = Date.now() - c;
                                window.scroll(0, function(t, e, n, i) {
                                    return n > i ? e : t + (e - t) * ((r = n / i) < .5 ? 4 * r * r * r : (r - 1) * (2 * r - 2) * (2 * r - 2) + 1);
                                    var r
                                }(i, r, e, a)),
                                e <= a ? u(t) : "function" == typeof n && n()
                            })
                        }(d, function() {
                            m(d, "add"),
                            d.focus(),
                            m(d, "remove")
                        })
                    }, e ? 0 : 300))
                }
            }
        }
        return {
            ready: function() {
                var t = e.WF_CLICK_EMPTY
                  , n = e.WF_CLICK_SCROLL;
                a.on(n, d, g),
                a.on(t, f, function(t) {
                    t.preventDefault()
                }),
                document.head.insertBefore(h, document.head.firstChild)
            }
        }
    }
    )
}
, function(t, e, n) {
    "use strict";
    n(0).define("touch", t.exports = function(t) {
        var e = {}
          , n = window.getSelection;
        function i(e) {
            var i, r, o = !1, a = !1, s = Math.min(Math.round(.04 * window.innerWidth), 40);
            function u(t) {
                var e = t.touches;
                e && e.length > 1 || (o = !0,
                e ? (a = !0,
                i = e[0].clientX) : i = t.clientX,
                r = i)
            }
            function c(e) {
                if (o) {
                    if (a && "mousemove" === e.type)
                        return e.preventDefault(),
                        void e.stopPropagation();
                    var i = e.touches
                      , u = i ? i[0].clientX : e.clientX
                      , c = u - r;
                    r = u,
                    Math.abs(c) > s && n && "" === String(n()) && (!function(e, n, i) {
                        var r = t.Event(e, {
                            originalEvent: n
                        });
                        t(n.target).trigger(r, i)
                    }("swipe", e, {
                        direction: c > 0 ? "right" : "left"
                    }),
                    f())
                }
            }
            function l(t) {
                if (o)
                    return o = !1,
                    a && "mouseup" === t.type ? (t.preventDefault(),
                    t.stopPropagation(),
                    void (a = !1)) : void 0
            }
            function f() {
                o = !1
            }
            e.addEventListener("touchstart", u, !1),
            e.addEventListener("touchmove", c, !1),
            e.addEventListener("touchend", l, !1),
            e.addEventListener("touchcancel", f, !1),
            e.addEventListener("mousedown", u, !1),
            e.addEventListener("mousemove", c, !1),
            e.addEventListener("mouseup", l, !1),
            e.addEventListener("mouseout", f, !1),
            this.destroy = function() {
                e.removeEventListener("touchstart", u, !1),
                e.removeEventListener("touchmove", c, !1),
                e.removeEventListener("touchend", l, !1),
                e.removeEventListener("touchcancel", f, !1),
                e.removeEventListener("mousedown", u, !1),
                e.removeEventListener("mousemove", c, !1),
                e.removeEventListener("mouseup", l, !1),
                e.removeEventListener("mouseout", f, !1),
                e = null
            }
        }
        return t.event.special.tap = {
            bindType: "click",
            delegateType: "click"
        },
        e.init = function(e) {
            return (e = "string" == typeof e ? t(e).get(0) : e) ? new i(e) : null
        }
        ,
        e.instance = e.init(document),
        e
    }
    )
}
, function(t, e, n) {
    "use strict";
    var i = n(0)
      , r = n(4)
      , o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
    }
      , a = !0
      , s = /^#[a-zA-Z0-9\-_]+$/;
    i.define("dropdown", t.exports = function(t, e) {
        var n, u, c = e.debounce, l = {}, f = i.env(), d = !1, h = i.env.touch, p = ".w-dropdown", v = "w--open", m = r.triggers, g = 900, w = "focusout" + p, b = "keydown" + p, y = "mouseenter" + p, x = "mousemove" + p, k = "mouseleave" + p, _ = (h ? "click" : "mouseup") + p, E = "w-close" + p, O = "setting" + p, T = t(document);
        function A() {
            n = f && i.env("design"),
            (u = T.find(p)).each(C)
        }
        function C(e, r) {
            var u = t(r)
              , l = t.data(r, p);
            l || (l = t.data(r, p, {
                open: !1,
                el: u,
                config: {},
                selectedIdx: -1
            })),
            l.toggle = l.el.children(".w-dropdown-toggle"),
            l.list = l.el.children(".w-dropdown-list"),
            l.links = l.list.find("a:not(.w-dropdown .w-dropdown a)"),
            l.complete = function(t) {
                return function() {
                    t.list.removeClass(v),
                    t.toggle.removeClass(v),
                    t.manageZ && t.el.css("z-index", "")
                }
            }(l),
            l.mouseLeave = function(t) {
                return function() {
                    t.hovering = !1,
                    t.links.is(":focus") || D(t)
                }
            }(l),
            l.mouseUpOutside = function(e) {
                e.mouseUpOutside && T.off(_, e.mouseUpOutside);
                return c(function(n) {
                    if (e.open) {
                        var r = t(n.target);
                        if (!r.closest(".w-dropdown-toggle").length) {
                            var o = -1 === t.inArray(e.el[0], r.parents(p))
                              , a = i.env("editor");
                            if (o) {
                                if (a) {
                                    var s = 1 === r.parents().length && 1 === r.parents("svg").length
                                      , u = r.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (s || u)
                                        return
                                }
                                D(e)
                            }
                        }
                    }
                })
            }(l),
            l.mouseMoveOutside = function(e) {
                return c(function(n) {
                    if (e.open) {
                        var i = t(n.target)
                          , r = -1 === t.inArray(e.el[0], i.parents(p));
                        if (r) {
                            var o = i.parents(".w-editor-bem-EditorHoverControls").length
                              , a = i.parents(".w-editor-bem-RTToolbar").length
                              , s = t(".w-editor-bem-EditorOverlay")
                              , u = s.find(".w-editor-edit-outline").length || s.find(".w-editor-bem-RTToolbar").length;
                            if (o || a || u)
                                return;
                            e.hovering = !1,
                            D(e)
                        }
                    }
                })
            }(l),
            R(l);
            var h = l.toggle.attr("id")
              , m = l.list.attr("id");
            h || (h = "w-dropdown-toggle-" + e),
            m || (m = "w-dropdown-list-" + e),
            l.toggle.attr("id", h),
            l.toggle.attr("aria-controls", m),
            l.toggle.attr("aria-haspopup", "menu"),
            l.toggle.attr("aria-expanded", "false"),
            l.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"),
            "BUTTON" !== l.toggle.prop("tagName") && (l.toggle.attr("role", "button"),
            l.toggle.attr("tabindex") || l.toggle.attr("tabindex", "0")),
            l.list.attr("id", m),
            l.list.attr("aria-labelledby", h),
            l.links.each(function(t, e) {
                e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"),
                s.test(e.hash) && e.addEventListener("click", D.bind(null, l))
            }),
            l.el.off(p),
            l.toggle.off(p),
            l.nav && l.nav.off(p);
            var g = I(l, a);
            n && l.el.on(O, function(t) {
                return function(e, n) {
                    n = n || {},
                    R(t),
                    !0 === n.open && S(t),
                    !1 === n.open && D(t, {
                        immediate: !0
                    })
                }
            }(l)),
            n || (f && (l.hovering = !1,
            D(l)),
            l.config.hover && l.toggle.on(y, function(t) {
                return function() {
                    t.hovering = !0,
                    S(t)
                }
            }(l)),
            l.el.on(E, g),
            l.el.on(b, function(t) {
                return function(e) {
                    if (!n && !d && t.open)
                        switch (t.selectedIdx = t.links.index(document.activeElement),
                        e.keyCode) {
                        case o.HOME:
                            if (!t.open)
                                return;
                            return t.selectedIdx = 0,
                            P(t),
                            e.preventDefault();
                        case o.END:
                            if (!t.open)
                                return;
                            return t.selectedIdx = t.links.length - 1,
                            P(t),
                            e.preventDefault();
                        case o.ESCAPE:
                            return D(t),
                            t.toggle.focus(),
                            e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1),
                            P(t),
                            e.preventDefault();
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1),
                            P(t),
                            e.preventDefault()
                        }
                }
            }(l)),
            l.el.on(w, function(t) {
                return c(function(e) {
                    var n = e.relatedTarget
                      , i = e.target
                      , r = t.el[0]
                      , o = r.contains(n) || r.contains(i);
                    return o || D(t),
                    e.stopPropagation()
                })
            }(l)),
            l.toggle.on(_, g),
            l.toggle.on(b, function(t) {
                var e = I(t, a);
                return function(i) {
                    if (!n && !d) {
                        if (!t.open)
                            switch (i.keyCode) {
                            case o.ARROW_UP:
                            case o.ARROW_DOWN:
                                return i.stopPropagation()
                            }
                        switch (i.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                            return e(),
                            i.stopPropagation(),
                            i.preventDefault()
                        }
                    }
                }
            }(l)),
            l.nav = l.el.closest(".w-nav"),
            l.nav.on(E, g))
        }
        function R(t) {
            var e = Number(t.el.css("z-index"));
            t.manageZ = e === g || e === g + 1,
            t.config = {
                hover: "true" === t.el.attr("data-hover") && !h,
                delay: t.el.attr("data-delay")
            }
        }
        function I(t, e) {
            return c(function(n) {
                if (t.open || n && "w-close" === n.type)
                    return D(t, {
                        forceClose: e
                    });
                S(t)
            })
        }
        function S(e) {
            if (!e.open) {
                !function(e) {
                    var n = e.el[0];
                    u.each(function(e, i) {
                        var r = t(i);
                        r.is(n) || r.has(n).length || r.triggerHandler(E)
                    })
                }(e),
                e.open = !0,
                e.list.addClass(v),
                e.toggle.addClass(v),
                e.toggle.attr("aria-expanded", "true"),
                m.intro(0, e.el[0]),
                i.redraw.up(),
                e.manageZ && e.el.css("z-index", g + 1);
                var r = i.env("editor");
                n || T.on(_, e.mouseUpOutside),
                e.hovering && !r && e.el.on(k, e.mouseLeave),
                e.hovering && r && T.on(x, e.mouseMoveOutside),
                window.clearTimeout(e.delayId)
            }
        }
        function D(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = e.immediate
              , i = e.forceClose;
            if (t.open && (!t.config.hover || !t.hovering || i)) {
                t.toggle.attr("aria-expanded", "false"),
                t.open = !1;
                var r = t.config;
                if (m.outro(0, t.el[0]),
                T.off(_, t.mouseUpOutside),
                T.off(x, t.mouseMoveOutside),
                t.el.off(k, t.mouseLeave),
                window.clearTimeout(t.delayId),
                !r.delay || n)
                    return t.complete();
                t.delayId = window.setTimeout(t.complete, r.delay)
            }
        }
        function P(t) {
            t.links[t.selectedIdx] && t.links[t.selectedIdx].focus()
        }
        return l.ready = A,
        l.design = function() {
            d && T.find(p).each(function(e, n) {
                t(n).triggerHandler(E)
            }),
            d = !1,
            A()
        }
        ,
        l.preview = function() {
            d = !0,
            A()
        }
        ,
        l
    }
    )
}
, function(t, e, n) {
    "use strict";
    var i = n(3)(n(16))
      , r = n(0);
    r.define("forms", t.exports = function(t, e) {
        var n, o, a, s, u, c = {}, l = t(document), f = window.location, d = window.XDomainRequest && !window.atob, h = ".w-form", p = /e(-)?mail/i, v = /^\S+@\S+$/, m = window.alert, g = r.env(), w = /list-manage[1-9]?.com/i, b = e.debounce(function() {
            m("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
        }, 100);
        function y(e, n) {
            var i = t(n)
              , r = t.data(n, h);
            r || (r = t.data(n, h, {
                form: i
            })),
            x(r);
            var a = i.closest("div.w-form");
            r.done = a.find("> .w-form-done"),
            r.fail = a.find("> .w-form-fail"),
            r.fileUploads = a.find(".w-file-upload"),
            r.fileUploads.each(function(e) {
                !function(e, n) {
                    if (!n.fileUploads || !n.fileUploads[e])
                        return;
                    var i, r = t(n.fileUploads[e]), o = r.find("> .w-file-upload-default"), a = r.find("> .w-file-upload-uploading"), s = r.find("> .w-file-upload-success"), c = r.find("> .w-file-upload-error"), l = o.find(".w-file-upload-input"), f = o.find(".w-file-upload-label"), d = f.children(), h = c.find(".w-file-upload-error-msg"), p = s.find(".w-file-upload-file"), v = s.find(".w-file-remove-link"), m = p.find(".w-file-upload-file-name"), w = h.attr("data-w-size-error"), b = h.attr("data-w-type-error"), y = h.attr("data-w-generic-error");
                    if (g)
                        l.on("click", function(t) {
                            t.preventDefault()
                        }),
                        f.on("click", function(t) {
                            t.preventDefault()
                        }),
                        d.on("click", function(t) {
                            t.preventDefault()
                        });
                    else {
                        v.on("click", function() {
                            l.removeAttr("data-value"),
                            l.val(""),
                            m.html(""),
                            o.toggle(!0),
                            s.toggle(!1)
                        }),
                        l.on("change", function(r) {
                            (i = r.target && r.target.files && r.target.files[0]) && (o.toggle(!1),
                            c.toggle(!1),
                            a.toggle(!0),
                            m.text(i.name),
                            A() || k(n),
                            n.fileUploads[e].uploading = !0,
                            function(e, n) {
                                var i = {
                                    name: e.name,
                                    size: e.size
                                };
                                t.ajax({
                                    type: "POST",
                                    url: u,
                                    data: i,
                                    dataType: "json",
                                    crossDomain: !0
                                }).done(function(t) {
                                    n(null, t)
                                }).fail(function(t) {
                                    n(t)
                                })
                            }(i, O))
                        });
                        var _ = f.outerHeight();
                        l.height(_),
                        l.width(1)
                    }
                    function E(t) {
                        var i = t.responseJSON && t.responseJSON.msg
                          , r = y;
                        "string" == typeof i && 0 === i.indexOf("InvalidFileTypeError") ? r = b : "string" == typeof i && 0 === i.indexOf("MaxFileSizeError") && (r = w),
                        h.text(r),
                        l.removeAttr("data-value"),
                        l.val(""),
                        a.toggle(!1),
                        o.toggle(!0),
                        c.toggle(!0),
                        n.fileUploads[e].uploading = !1,
                        A() || x(n)
                    }
                    function O(e, n) {
                        if (e)
                            return E(e);
                        var r = n.fileName
                          , o = n.postData
                          , a = n.fileId
                          , s = n.s3Url;
                        l.attr("data-value", a),
                        function(e, n, i, r, o) {
                            var a = new FormData;
                            for (var s in n)
                                a.append(s, n[s]);
                            a.append("file", i, r),
                            t.ajax({
                                type: "POST",
                                url: e,
                                data: a,
                                processData: !1,
                                contentType: !1
                            }).done(function() {
                                o(null)
                            }).fail(function(t) {
                                o(t)
                            })
                        }(s, o, i, r, T)
                    }
                    function T(t) {
                        if (t)
                            return E(t);
                        a.toggle(!1),
                        s.css("display", "inline-block"),
                        n.fileUploads[e].uploading = !1,
                        A() || x(n)
                    }
                    function A() {
                        var t = n.fileUploads && n.fileUploads.toArray() || [];
                        return t.some(function(t) {
                            return t.uploading
                        })
                    }
                }(e, r)
            });
            var s = r.action = i.attr("action");
            r.handler = null,
            r.redirect = i.attr("data-redirect"),
            w.test(s) ? r.handler = T : s || (o ? r.handler = O : b())
        }
        function x(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null,
            t.success = !1,
            e.prop("disabled", !1),
            t.label && e.val(t.label)
        }
        function k(t) {
            var e = t.btn
              , n = t.wait;
            e.prop("disabled", !0),
            n && (t.label = e.val(),
            e.val(n))
        }
        function _(e, n) {
            var i = null;
            return n = n || {},
            e.find(':input:not([type="submit"]):not([type="file"])').each(function(r, o) {
                var a = t(o)
                  , s = a.attr("type")
                  , u = a.attr("data-name") || a.attr("name") || "Field " + (r + 1)
                  , c = a.val();
                if ("checkbox" === s)
                    c = a.is(":checked");
                else if ("radio" === s) {
                    if (null === n[u] || "string" == typeof n[u])
                        return;
                    c = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof c && (c = t.trim(c)),
                n[u] = c,
                i = i || function(t, e, n, i) {
                    var r = null;
                    "password" === e ? r = "Passwords cannot be submitted." : t.attr("required") ? i ? p.test(t.attr("type")) && (v.test(i) || (r = "Please enter a valid email address for: " + n)) : r = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || i || (r = "Please confirm you’re not a robot.");
                    return r
                }(a, s, u, c)
            }),
            i
        }
        c.ready = c.design = c.preview = function() {
            !function() {
                o = t("html").attr("data-wf-site"),
                s = "https://webflow.com/api/v1/form/" + o,
                d && s.indexOf("https://webflow.com") >= 0 && (s = s.replace("https://webflow.com", "http://formdata.webflow.com"));
                if (u = "".concat(s, "/signFile"),
                !(n = t(h + " form")).length)
                    return;
                n.each(y)
            }(),
            g || a || function() {
                a = !0,
                l.on("submit", h + " form", function(e) {
                    var n = t.data(this, h);
                    n.handler && (n.evt = e,
                    n.handler(n))
                });
                var e = [["checkbox", ".w-checkbox-input"], ["radio", ".w-radio-input"]];
                l.on("change", h + ' form input[type="checkbox"]:not(.w-checkbox-input)', function(e) {
                    t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked")
                }),
                l.on("change", h + ' form input[type="radio"]', function(e) {
                    t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function(e, n) {
                        return t(n).siblings(".w-radio-input").removeClass("w--redirected-checked")
                    });
                    var n = t(e.target);
                    n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked")
                }),
                e.forEach(function(e) {
                    var n = (0,
                    i.default)(e, 2)
                      , r = n[0]
                      , o = n[1];
                    l.on("focus", h + ' form input[type="'.concat(r, '"]:not(') + o + ")", function(e) {
                        t(e.target).siblings(o).addClass("w--redirected-focus")
                    }),
                    l.on("blur", h + ' form input[type="'.concat(r, '"]:not(') + o + ")", function(e) {
                        t(e.target).siblings(o).removeClass("w--redirected-focus")
                    })
                })
            }()
        }
        ;
        var E = {
            _mkto_trk: "marketo"
        };
        function O(e) {
            x(e);
            var n = e.form
              , i = {
                name: n.attr("data-name") || n.attr("name") || "Untitled Form",
                source: f.href,
                test: r.env(),
                fields: {},
                fileUploads: {},
                dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html()),
                trackingCookies: document.cookie.split("; ").reduce(function(t, e) {
                    var n = e.split("=")
                      , i = n[0];
                    if (i in E) {
                        var r = E[i]
                          , o = n.slice(1).join("=");
                        t[r] = o
                    }
                    return t
                }, {})
            };
            C(e);
            var a = _(n, i.fields);
            if (a)
                return m(a);
            i.fileUploads = function(e) {
                var n = {};
                return e.find(':input[type="file"]').each(function(e, i) {
                    var r = t(i)
                      , o = r.attr("data-name") || r.attr("name") || "File " + (e + 1)
                      , a = r.attr("data-value");
                    "string" == typeof a && (a = t.trim(a)),
                    n[o] = a
                }),
                n
            }(n),
            k(e),
            o ? t.ajax({
                url: s,
                type: "POST",
                data: i,
                dataType: "json",
                crossDomain: !0
            }).done(function(t) {
                t && 200 === t.code && (e.success = !0),
                A(e)
            }).fail(function() {
                A(e)
            }) : A(e)
        }
        function T(n) {
            x(n);
            var i = n.form
              , r = {};
            if (!/^https/.test(f.href) || /^https/.test(n.action)) {
                C(n);
                var o, a = _(i, r);
                if (a)
                    return m(a);
                k(n),
                e.each(r, function(t, e) {
                    p.test(e) && (r.EMAIL = t),
                    /^((full[ _-]?)?name)$/i.test(e) && (o = t),
                    /^(first[ _-]?name)$/i.test(e) && (r.FNAME = t),
                    /^(last[ _-]?name)$/i.test(e) && (r.LNAME = t)
                }),
                o && !r.FNAME && (o = o.split(" "),
                r.FNAME = o[0],
                r.LNAME = r.LNAME || o[1]);
                var s = n.action.replace("/post?", "/post-json?") + "&c=?"
                  , u = s.indexOf("u=") + 2;
                u = s.substring(u, s.indexOf("&", u));
                var c = s.indexOf("id=") + 3;
                c = s.substring(c, s.indexOf("&", c)),
                r["b_" + u + "_" + c] = "",
                t.ajax({
                    url: s,
                    data: r,
                    dataType: "jsonp"
                }).done(function(t) {
                    n.success = "success" === t.result || /already/.test(t.msg),
                    n.success || console.info("MailChimp error: " + t.msg),
                    A(n)
                }).fail(function() {
                    A(n)
                })
            } else
                i.attr("method", "post")
        }
        function A(t) {
            var e = t.form
              , n = t.redirect
              , i = t.success;
            i && n ? r.location(n) : (t.done.toggle(i),
            t.fail.toggle(!i),
            e.toggle(!i),
            x(t))
        }
        function C(t) {
            t.evt && t.evt.preventDefault(),
            t.evt = null
        }
        return c
    }
    )
}
, function(t, e, n) {
    var i = n(17)
      , r = n(18)
      , o = n(19);
    t.exports = function(t, e) {
        return i(t) || r(t, e) || o()
    }
}
, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t))
            return t
    }
}
, function(t, e) {
    t.exports = function(t, e) {
        var n = []
          , i = !0
          , r = !1
          , o = void 0;
        try {
            for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value),
            !e || n.length !== e); i = !0)
                ;
        } catch (t) {
            r = !0,
            o = t
        } finally {
            try {
                i || null == s.return || s.return()
            } finally {
                if (r)
                    throw o
            }
        }
        return n
    }
}
, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}
, function(t, e, n) {
    "use strict";
    var i = n(0)
      , r = n(4)
      , o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
    };
    i.define("navbar", t.exports = function(t, e) {
        var n, a, s, u, c = {}, l = t.tram, f = t(window), d = t(document), h = e.debounce, p = i.env(), v = '<div class="w-nav-overlay" data-wf-ignore />', m = ".w-nav", g = "w--open", w = "w--nav-dropdown-open", b = "w--nav-dropdown-toggle-open", y = "w--nav-dropdown-list-open", x = "w--nav-link-open", k = r.triggers, _ = t();
        function E() {
            i.resize.off(O)
        }
        function O() {
            a.each(z)
        }
        function T(n, i) {
            var r = t(i)
              , a = t.data(i, m);
            a || (a = t.data(i, m, {
                open: !1,
                el: r,
                config: {},
                selectedIdx: -1
            })),
            a.menu = r.find(".w-nav-menu"),
            a.links = a.menu.find(".w-nav-link"),
            a.dropdowns = a.menu.find(".w-dropdown"),
            a.dropdownToggle = a.menu.find(".w-dropdown-toggle"),
            a.dropdownList = a.menu.find(".w-dropdown-list"),
            a.button = r.find(".w-nav-button"),
            a.container = r.find(".w-container"),
            a.overlayContainerId = "w-nav-overlay-" + n,
            a.outside = function(e) {
                e.outside && d.off("click" + m, e.outside);
                return function(n) {
                    var i = t(n.target);
                    u && i.closest(".w-editor-bem-EditorOverlay").length || M(e, i)
                }
            }(a);
            var c = r.find(".w-nav-brand");
            c && "/" === c.attr("href") && null == c.attr("aria-label") && c.attr("aria-label", "home"),
            a.button.attr("style", "-webkit-user-select: text;"),
            null == a.button.attr("aria-label") && a.button.attr("aria-label", "menu"),
            a.button.attr("role", "button"),
            a.button.attr("tabindex", "0"),
            a.button.attr("aria-controls", a.overlayContainerId),
            a.button.attr("aria-haspopup", "menu"),
            a.button.attr("aria-expanded", "false"),
            a.el.off(m),
            a.button.off(m),
            a.menu.off(m),
            R(a),
            s ? (C(a),
            a.el.on("setting" + m, function(t) {
                return function(n, i) {
                    i = i || {};
                    var r = f.width();
                    R(t),
                    !0 === i.open && W(t, !0),
                    !1 === i.open && $(t, !0),
                    t.open && e.defer(function() {
                        r !== f.width() && S(t)
                    })
                }
            }(a))) : (!function(e) {
                if (e.overlay)
                    return;
                e.overlay = t(v).appendTo(e.el),
                e.overlay.attr("id", e.overlayContainerId),
                e.parent = e.menu.parent(),
                $(e, !0)
            }(a),
            a.button.on("click" + m, D(a)),
            a.menu.on("click" + m, "a", P(a)),
            a.button.on("keydown" + m, function(t) {
                return function(e) {
                    switch (e.keyCode) {
                    case o.SPACE:
                    case o.ENTER:
                        return D(t)(),
                        e.preventDefault(),
                        e.stopPropagation();
                    case o.ESCAPE:
                        return $(t),
                        e.preventDefault(),
                        e.stopPropagation();
                    case o.ARROW_RIGHT:
                    case o.ARROW_DOWN:
                    case o.HOME:
                    case o.END:
                        return t.open ? (e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0,
                        I(t),
                        e.preventDefault(),
                        e.stopPropagation()) : (e.preventDefault(),
                        e.stopPropagation())
                    }
                }
            }(a)),
            a.el.on("keydown" + m, function(t) {
                return function(e) {
                    if (t.open)
                        switch (t.selectedIdx = t.links.index(document.activeElement),
                        e.keyCode) {
                        case o.HOME:
                        case o.END:
                            return e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0,
                            I(t),
                            e.preventDefault(),
                            e.stopPropagation();
                        case o.ESCAPE:
                            return $(t),
                            t.button.focus(),
                            e.preventDefault(),
                            e.stopPropagation();
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1),
                            I(t),
                            e.preventDefault(),
                            e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1),
                            I(t),
                            e.preventDefault(),
                            e.stopPropagation()
                        }
                }
            }(a))),
            z(n, i)
        }
        function A(e, n) {
            var i = t.data(n, m);
            i && (C(i),
            t.removeData(n, m))
        }
        function C(t) {
            t.overlay && ($(t, !0),
            t.overlay.remove(),
            t.overlay = null)
        }
        function R(t) {
            var n = {}
              , i = t.config || {}
              , r = n.animation = t.el.attr("data-animation") || "default";
            n.animOver = /^over/.test(r),
            n.animDirect = /left$/.test(r) ? -1 : 1,
            i.animation !== r && t.open && e.defer(S, t),
            n.easing = t.el.attr("data-easing") || "ease",
            n.easing2 = t.el.attr("data-easing2") || "ease";
            var o = t.el.attr("data-duration");
            n.duration = null != o ? Number(o) : 400,
            n.docHeight = t.el.attr("data-doc-height"),
            t.config = n
        }
        function I(t) {
            if (t.links[t.selectedIdx]) {
                var e = t.links[t.selectedIdx];
                e.focus(),
                P(e)
            }
        }
        function S(t) {
            t.open && ($(t, !0),
            W(t, !0))
        }
        function D(t) {
            return h(function() {
                t.open ? $(t) : W(t)
            })
        }
        function P(e) {
            return function(n) {
                var r = t(this).attr("href");
                i.validClick(n.currentTarget) ? r && 0 === r.indexOf("#") && e.open && $(e) : n.preventDefault()
            }
        }
        c.ready = c.design = c.preview = function() {
            if (s = p && i.env("design"),
            u = i.env("editor"),
            n = t(document.body),
            !(a = d.find(m)).length)
                return;
            a.each(T),
            E(),
            i.resize.on(O)
        }
        ,
        c.destroy = function() {
            _ = t(),
            E(),
            a && a.length && a.each(A)
        }
        ;
        var M = h(function(t, e) {
            if (t.open) {
                var n = e.closest(".w-nav-menu");
                t.menu.is(n) || $(t)
            }
        });
        function z(e, n) {
            var i = t.data(n, m)
              , r = i.collapsed = "none" !== i.button.css("display");
            if (!i.open || r || s || $(i, !0),
            i.container.length) {
                var o = function(e) {
                    var n = e.container.css(N);
                    "none" === n && (n = "");
                    return function(e, i) {
                        (i = t(i)).css(N, ""),
                        "none" === i.css(N) && i.css(N, n)
                    }
                }(i);
                i.links.each(o),
                i.dropdowns.each(o)
            }
            i.open && F(i)
        }
        var N = "max-width";
        function j(t, e) {
            e.setAttribute("data-nav-menu-open", "")
        }
        function L(t, e) {
            e.removeAttribute("data-nav-menu-open")
        }
        function W(t, e) {
            if (!t.open) {
                t.open = !0,
                t.menu.each(j),
                t.links.addClass(x),
                t.dropdowns.addClass(w),
                t.dropdownToggle.addClass(b),
                t.dropdownList.addClass(y),
                t.button.addClass(g);
                var n = t.config;
                ("none" === n.animation || !l.support.transform || n.duration <= 0) && (e = !0);
                var r = F(t)
                  , o = t.menu.outerHeight(!0)
                  , a = t.menu.outerWidth(!0)
                  , u = t.el.height()
                  , c = t.el[0];
                if (z(0, c),
                k.intro(0, c),
                i.redraw.up(),
                s || d.on("click" + m, t.outside),
                e)
                    p();
                else {
                    var f = "transform " + n.duration + "ms " + n.easing;
                    if (t.overlay && (_ = t.menu.prev(),
                    t.overlay.show().append(t.menu)),
                    n.animOver)
                        return l(t.menu).add(f).set({
                            x: n.animDirect * a,
                            height: r
                        }).start({
                            x: 0
                        }).then(p),
                        void (t.overlay && t.overlay.width(a));
                    var h = u + o;
                    l(t.menu).add(f).set({
                        y: -h
                    }).start({
                        y: 0
                    }).then(p)
                }
            }
            function p() {
                t.button.attr("aria-expanded", "true")
            }
        }
        function F(t) {
            var e = t.config
              , i = e.docHeight ? d.height() : n.height();
            return e.animOver ? t.menu.height(i) : "fixed" !== t.el.css("position") && (i -= t.el.outerHeight(!0)),
            t.overlay && t.overlay.height(i),
            i
        }
        function $(t, e) {
            if (t.open) {
                t.open = !1,
                t.button.removeClass(g);
                var n = t.config;
                if (("none" === n.animation || !l.support.transform || n.duration <= 0) && (e = !0),
                k.outro(0, t.el[0]),
                d.off("click" + m, t.outside),
                e)
                    return l(t.menu).stop(),
                    void u();
                var i = "transform " + n.duration + "ms " + n.easing2
                  , r = t.menu.outerHeight(!0)
                  , o = t.menu.outerWidth(!0)
                  , a = t.el.height();
                if (n.animOver)
                    l(t.menu).add(i).start({
                        x: o * n.animDirect
                    }).then(u);
                else {
                    var s = a + r;
                    l(t.menu).add(i).start({
                        y: -s
                    }).then(u)
                }
            }
            function u() {
                t.menu.height(""),
                l(t.menu).set({
                    x: 0,
                    y: 0
                }),
                t.menu.each(L),
                t.links.removeClass(x),
                t.dropdowns.removeClass(w),
                t.dropdownToggle.removeClass(b),
                t.dropdownList.removeClass(y),
                t.overlay && t.overlay.children().length && (_.length ? t.menu.insertAfter(_) : t.menu.prependTo(t.parent),
                t.overlay.attr("style", "").hide()),
                t.el.triggerHandler("w-close"),
                t.button.attr("aria-expanded", "false")
            }
        }
        return c
    }
    )
}
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
function carregarWeb1() {
    Webflow.require('ix').init([{
        "slug": "initilal-kategorija",
        "name": "initilal KATEGORIJA",
        "value": {
            "style": {
                "opacity": 0,
                "height": "0px"
            },
            "triggers": []
        }
    }
    , {
        "slug": "link-print-img-51",
        "name": "link_PRINT -IMG 51",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-51",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-52",
        "name": "link_PRINT -IMG 52",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-52",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-53",
        "name": "link_PRINT -IMG 53",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-53",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-54",
        "name": "link_PRINT -IMG 54",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-54",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-55",
        "name": "link_PRINT -IMG 55",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-55",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-56",
        "name": "link_PRINT -IMG 56",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-56",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-57",
        "name": "link_PRINT -IMG 57",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-57",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-58",
        "name": "link_PRINT -IMG 58",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-58",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-59",
        "name": "link_PRINT -IMG 59",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-59",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-60",
        "name": "link_PRINT -IMG 60",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-60",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-61",
        "name": "link_PRINT -IMG 61",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-61",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-62",
        "name": "link_PRINT -IMG 62",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-62",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-63",
        "name": "link_PRINT -IMG 63",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-63",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-64",
        "name": "link_PRINT -IMG 64",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-64",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-65",
        "name": "link_PRINT -IMG 65",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-65",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-66",
        "name": "link_PRINT -IMG 66",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-66",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-67",
        "name": "link_PRINT -IMG 67",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-67",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-68",
        "name": "link_PRINT -IMG 68",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-68",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-69",
        "name": "link_PRINT -IMG 69",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-69",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-70",
        "name": "link_PRINT -IMG 70",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-70",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-71",
        "name": "link_PRINT -IMG 71",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-71",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-72",
        "name": "link_PRINT -IMG 72",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-72",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-73",
        "name": "link_PRINT -IMG 73",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-73",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-74",
        "name": "link_PRINT -IMG 74",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-74",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-75",
        "name": "link_PRINT -IMG 75",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-75",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-print-img-76",
        "name": "link_PRINT -IMG 76",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-76",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }

    , {
        "slug": "link-print-img-29",
        "name": "link_PRINT -IMG 29",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-29",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-print-img-07",
        "name": "link_PRINT -IMG 07",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-07",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-print-img-27",
        "name": "link_PRINT -IMG 27",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-27",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-print-img-26",
        "name": "link_PRINT -IMG 26",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-26",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-web-img-24",
        "name": "link_WEB -IMG 24",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-24",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-product-img-21",
        "name": "link_PRODUCT -IMG 21",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-21",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-web-img-18",
        "name": "link_WEB -IMG 18",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-18",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-print-img-16",
        "name": "link_PRINT -IMG 16",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-16",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-web-img-15",
        "name": "link_WEB -IMG 15",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-15",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                 "stepsB": [{
                     "opacity": 0,
                     "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                     "scaleX": 1.1,
                     "scaleY": 1.1,
                     "scaleZ": 1
                 }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-print-img-13",
        "name": "link_PRINT -IMG 13",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-13",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-print-img-09",
        "name": "link_PRINT -IMG 09",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-09",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-print-img-08",
        "name": "link_PRINT -IMG 08",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-08",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-product-img-07",
        "name": "link_PRODUCT -IMG 07",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-07",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-print-img-02",
        "name": "link_PRINT -IMG 02",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-02",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }
    , {
        "slug": "link-xxx-img-01",
        "name": "link_XXX -IMG 01",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-01",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }
            // , {
            //     "type": "click",
            //     "selector": ".content",
            //     "stepsA": [{
            //         "opacity": 0,
            //         "transition": "opacity 200ms ease 0"
            //     }, {
            //         "display": "none"
            //     }],
            //     "stepsB": [{
            //         "display": "block"
            //     }, {
            //         "opacity": 1,
            //         "transition": "opacity 200ms ease 0"
            //     }]
            // }
            , {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link--kateg",
                "descend": true,
                "stepsA": [{
                    "opacity": 1,
                    "height": "auto",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "height": "0px",
                    "transition": "height 250ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".em----dash",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-about-01",
        "name": "link_ABOUT_01",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-about_01",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }, {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".fontawesome",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-about-02",
        "name": "link_ABOUT_02",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-about_02",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }, {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".fontawesome",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-about-03",
        "name": "link_ABOUT_03",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-about_03",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }, {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".fontawesome",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-about-04",
        "name": "link_ABOUT_04",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-about_04",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }, {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".fontawesome",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "link-about-05",
        "name": "link_ABOUT_05",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".img-about_05",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 500ms ease-out-quad 0ms, opacity 500ms ease-out-quad 0ms",
                    "scaleX": 1.1,
                    "scaleY": 1.1,
                    "scaleZ": 1
                }]
            }, {
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link",
                "siblings": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".link_pagina",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".navigation",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".dash-long",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".copyrights",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-senca",
                "stepsA": [{
                    "opacity": 0
                }],
                "stepsB": [{
                    "wait": "400ms"
                }, {
                    "opacity": 1,
                    "transition": "opacity 400ms ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".fontawesome",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "initial-none",
        "name": "initial NONE",
        "value": {
            "style": {
                "display": "none"
            },
            "triggers": []
        }
    }, {
        "slug": "span-iner",
        "name": "span-INER",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".span-out",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 250ms ease-out-quad 0ms"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 250ms ease-out-quad 0ms"
                }]
            }]
        }
    }, {
        "slug": "nav-work-trigg",
        "name": "nav__WORK--trigg",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".nav__work--scale",
                "stepsA": [{
                    "width": "1700px",
                    "height": "1700px",
                    "transition": "width 200 ease 0, height 200 ease 0"
                }],
                "stepsB": [{
                    "width": "90px",
                    "height": "90px",
                    "transition": "width 200 ease 0, height 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".content_wrapp",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "200px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "hover",
                "selector": ".scale_inside-work",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "x": "-200px",
                    "y": "0px",
                    "z": "0px"
                }, {
                    "wait": "100ms"
                }, {
                    "opacity": 1,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "-200px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-slika_white",
                "stepsA": [{
                    "display": "none"
                }],
                "stepsB": [{
                    "display": "block"
                }]
            }, {
                "type": "hover",
                "selector": ".r-logo--white",
                "stepsA": [{
                    "display": "none"
                }],
                "stepsB": [{
                    "display": "block"
                }]
            }]
        }
    }, {
        "slug": "nav-about-trigg",
        "name": "nav__ABOUT--trigg",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".nav__about--scale",
                "stepsA": [{
                    "width": "1500px",
                    "height": "1500px",
                    "transition": "width 200 ease 0, height 200 ease 0"
                }],
                "stepsB": [{
                    "width": "90px",
                    "height": "90px",
                    "transition": "width 200 ease 0, height 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".scale_inside-about",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "x": "-200px",
                    "y": "0px",
                    "z": "0px"
                }, {
                    "wait": "100ms"
                }, {
                    "opacity": 1,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "-200px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "hover",
                "selector": ".content_wrapp",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "200px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "hover",
                "selector": ".r-logo--black",
                "stepsA": [{
                    "display": "none"
                }],
                "stepsB": [{
                    "display": "block"
                }]
            }, {
                "type": "hover",
                "selector": ".r-logo--white",
                "stepsA": [{
                    "display": "block"
                }],
                "stepsB": [{
                    "display": "none"
                }]
            }]
        }
    }, {
        "slug": "nav-other-trigg",
        "name": "nav__OTHER--trigg",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".nav__other--scale",
                "stepsA": [{
                    "width": "1500px",
                    "height": "1500px",
                    "transition": "width 200 ease 0, height 200 ease 0"
                }],
                "stepsB": [{
                    "width": "90px",
                    "height": "90px",
                    "transition": "width 200 ease 0, height 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".scale_inside-other",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "x": "-200px",
                    "y": "0px",
                    "z": "0px"
                }, {
                    "wait": "100ms"
                }, {
                    "opacity": 1,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "-200px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "hover",
                "selector": ".content_wrapp",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "200px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "hover",
                "selector": ".r-logo--black",
                "stepsA": [{
                    "display": "none"
                }],
                "stepsB": [{
                    "display": "block"
                }]
            }, {
                "type": "hover",
                "selector": ".r-logo--white",
                "stepsA": [{
                    "display": "block"
                }],
                "stepsB": [{
                    "display": "none"
                }]
            }]
        }
    }
    , {
        "slug": "nav-contact-trigg",
        "name": "nav__CONTACT--trigg",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".nav__contact--scale",
                "stepsA": [{
                    "width": "1500px",
                    "height": "1500px",
                    "transition": "width 200 ease 0, height 200 ease 0"
                }],
                "stepsB": [{
                    "width": "90px",
                    "height": "90px",
                    "transition": "width 200 ease 0, height 200 ease 0"
                }]
            }, {
                "type": "hover",
                "selector": ".scale_inside-contact",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "x": "-200px",
                    "y": "0px",
                    "z": "0px"
                }, {
                    "wait": "100ms"
                }, {
                    "opacity": 1,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "-200px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "hover",
                "selector": ".content_wrapp",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "200px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "transform 300ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "hover",
                "selector": ".nav-slika_green",
                "stepsA": [{
                    "display": "none"
                }],
                "stepsB": [{
                    "display": "block"
                }]
            }, {
                "type": "hover",
                "selector": ".r-logo--white",
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0"
                }]
            }]
        }
    }, {
        "slug": "accord-tmp",
        "name": "ACCORD tmp",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".link--kateg",
                "stepsA": [{
                    "display": "inline-block"
                }, {
                    "height": "25px",
                    "transition": "height 300ms ease-out-quad 0"
                }],
                "stepsB": [{
                    "height": "0px"
                }, {
                    "display": "none"
                }]
            }]
        }
    }, {
        "slug": "wait",
        "name": "WAIT",
        "value": {
            "style": {
                "x": "-100px",
                "y": "0px",
                "z": "0px"
            },
            "triggers": [{
                "type": "load",
                "stepsA": [{
                    "wait": "200ms"
                }, {
                    "transition": "transform 200 ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": []
            }]
        }
    }, {
        "slug": "nav-slika",
        "name": "nav_SLIKA",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".nav__contact--trigg",
                "stepsA": [{
                    "display": "block"
                }],
                "stepsB": []
            }, {
                "type": "hover",
                "selector": ".nav__contact--scale",
                "stepsA": [{
                    "display": "block"
                }],
                "stepsB": []
            }]
        }
    }, {
        "slug": "initial-nav",
        "name": "initial NAV",
        "value": {
            "style": {},
            "triggers": [{
                "type": "dropdown",
                "stepsA": [{
                    "opacity": 0,
                    "scaleX": 0.5,
                    "scaleY": 0.5,
                    "scaleZ": 1
                }, {
                    "opacity": 1,
                    "transition": "transform 200ms ease-out-back 0, opacity 200 ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "wait": "80ms"
                }, {
                    "transition": "transform 50ms ease 0",
                    "scaleX": 1.05,
                    "scaleY": 1.05,
                    "scaleZ": 1
                }, {
                    "opacity": 0,
                    "transition": "transform 100ms ease-in-back 0, opacity 150ms ease 0",
                    "scaleX": 0.5,
                    "scaleY": 0.5,
                    "scaleZ": 1
                }]
            }]
        }
    }, {
        "slug": "initial-nav-wait-70ms",
        "name": "initial NAV__WAIT 70ms",
        "value": {
            "style": {},
            "triggers": [{
                "type": "dropdown",
                "stepsA": [{
                    "opacity": 0,
                    "scaleX": 0.5,
                    "scaleY": 0.5,
                    "scaleZ": 1
                }, {
                    "wait": "70ms"
                }, {
                    "opacity": 1,
                    "transition": "transform 200ms ease-out-back 0, opacity 200 ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "transition": "transform 50ms ease 0",
                    "scaleX": 1.05,
                    "scaleY": 1.05,
                    "scaleZ": 1
                }, {
                    "opacity": 0,
                    "transition": "transform 100ms ease-in-back 0, opacity 150ms ease 0",
                    "scaleX": 0.5,
                    "scaleY": 0.5,
                    "scaleZ": 1
                }]
            }]
        }
    }, {
        "slug": "scale-full-size",
        "name": "SCALE_full size",
        "value": {
            "style": {},
            "triggers": [{
                "type": "load",
                "stepsA": [{
                    "width": "550vh",
                    "height": "550vh",
                    "transition": "width 400ms ease-in-back 0, height 400ms ease-in-back 0"
                }],
                "stepsB": []
            }]
        }
    }, {
        "slug": "scale-full-size-work-none",
        "name": "SCALE_full size -WORK -None",
        "value": {
            "style": {},
            "triggers": [{
                "type": "load",
                "stepsA": [{
                    "width": "550vh",
                    "height": "550vh",
                    "transition": "width 400ms ease-in-back 0, height 400ms ease-in-back 0"
                }, {
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }, {
                    "display": "none"
                }],
                "stepsB": []
            }]
        }
    }, {
        "slug": "hide-nav-contact",
        "name": "hide nav_CONTACT",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".nav__contact--trigg",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "transform 250ms ease-in-back 0, opacity 250ms ease-in-back 0",
                    "x": "0px",
                    "y": "-20px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "transform 250ms ease-out-back 0, opacity 250ms ease-out-back 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }]
        }
    }, {
        "slug": "hide-nav-work",
        "name": "hide nav_WORK",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".nav__work--trigg",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "transform 250ms ease-in-back 0, opacity 250ms ease-in-back 0",
                    "x": "0px",
                    "y": "20px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "transform 250ms ease-out-back 0, opacity 250ms ease-out-back 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }]
        }
    }, {
        "slug": "hide-nav-about",
        "name": "hide nav_ABOUT",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".nav__about--trigg",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "transform 250ms ease-in-back 0, opacity 250ms ease-in-back 0",
                    "x": "-20px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "transform 250ms ease-out-back 0, opacity 250ms ease-out-back 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }]
        }
    }, {
        "slug": "r-logo",
        "name": "R-LOGO",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "stepsA": [{
                    "transition": "transform 500ms ease-out-quart 0",
                    "x": "15px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "transition": "transform 200 ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "load",
                "stepsA": [{
                    "x": "-45px",
                    "y": "0px",
                    "z": "0px"
                }, {
                    "transition": "transform 1000ms ease-out-expo 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": []
            }]
        }
    }, {
        "slug": "pre-loader",
        "name": "Pre-Loader",
        "value": {
            "style": {
                "display": "flex"
            },
            "triggers": [{
                "type": "load",
                "selector": ".loader_box",
                "loopA": true,
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 1000ms ease-in-out 0",
                    "rotateX": "0deg",
                    "rotateY": "0deg",
                    "rotateZ": "360deg"
                }, {
                    "rotateX": "0deg",
                    "rotateY": "0deg",
                    "rotateZ": "-361deg"
                }],
                "stepsB": []
            }, {
                "type": "load",
                "preload": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }, {
                    "display": "none"
                }],
                "stepsB": []
            }]
        }
    }, {
        "slug": "scroll-images-in-out",
        "name": "SCROLL images IN-OUT",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "scroll",
                "offsetTop": "0%",
                "offsetBot": "15%",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 2s ease-out-quart 0, opacity 300ms ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 2000ms ease-out-quart 0, opacity 300ms ease 0",
                    "scaleX": 0.9500000000000006,
                    "scaleY": 0.9500000000000006,
                    "scaleZ": 1
                }]
            }]
        }
    }, {
        "slug": "scroll-images-in",
        "name": "SCROLL images IN",
        "value": {
            "style": {
                "opacity": 0
            },
            "triggers": [{
                "type": "scroll",
                "offsetTop": "0%",
                "offsetBot": "15%",
                "stepsA": [{
                    "opacity": 1,
                    "transition": "transform 2s ease-out-quart 0, opacity 300ms ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": []
            }]
        }
    }, {
        "slug": "1st-slide",
        "name": "1st slide",
        "value": {
            "style": {},
            "triggers": [{
                "type": "scroll",
                "offsetTop": "0%",
                "stepsA": [{
                    "wait": "700ms"
                }, {
                    "transition": "transform 600ms ease-out-quart 0",
                    "x": "0px",
                    "y": "-50px",
                    "z": "0px"
                }],
                "stepsB": []
            }]
        }
    }, {
        "slug": "arrow-on-load",
        "name": "arrow on LOAD",
        "value": {
            "style": {},
            "triggers": [{
                "type": "load",
                "stepsA": [{
                    "transition": "transform 1300ms ease-in-out-quint 0",
                    "rotateX": "0deg",
                    "rotateY": "0deg",
                    "rotateZ": "135deg"
                }],
                "stepsB": []
            }, {
                "type": "scroll",
                "offsetTop": "60%",
                "stepsA": [],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 800ms ease-out-quart 0"
                }]
            }]
        }
    }, {
        "slug": "scroll-down",
        "name": "Scroll Down",
        "value": {
            "style": {},
            "triggers": [{
                "type": "scroll",
                "offsetTop": "85%",
                "stepsA": [],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 800ms ease-out-quart 0"
                }]
            }]
        }
    }, {
        "slug": "mob-menu-work-",
        "name": "mob_MENU -work-",
        "value": {
            "style": {},
            "triggers": [{
                "type": "navbar",
                "selector": ".mob_work",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 300ms ease-in-back 0, transform 300ms ease-in-back 0",
                    "x": "-25%",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0, transform 200 ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "navbar",
                "selector": ".main",
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 500ms ease-out-quart 0",
                    "x": "70%",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "transition": "transform 250ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "navbar",
                "selector": ".mob_contact",
                "preserve3d": true,
                "stepsA": [{
                    "display": "none"
                }, {
                    "opacity": 0,
                    "transition": "transform 200 ease 0",
                    "x": "-100%",
                    "y": "0px",
                    "z": "0px"
                }, {
                    "wait": "100ms"
                }, {
                    "display": "block"
                }, {
                    "opacity": 1,
                    "transition": "transform 300ms ease-out-quart 0, opacity 200 ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 200 ease 0, opacity 200 ease 0",
                    "x": "-100%",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "navbar",
                "selector": ".mob_about",
                "preserve3d": true,
                "stepsA": [{
                    "display": "none"
                }, {
                    "opacity": 0,
                    "transition": "transform 200 ease 0",
                    "x": "-100%",
                    "y": "0px",
                    "z": "0px"
                }, {
                    "display": "block"
                }, {
                    "opacity": 1,
                    "transition": "transform 400ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 300ms ease 0, opacity 200 ease 0",
                    "x": "-100%",
                    "y": "0px",
                    "z": "0px"
                }]
            }]
        }
    }, {
        "slug": "mob-menu-contact-",
        "name": "mob_MENU -contact-",
        "value": {
            "style": {},
            "triggers": [{
                "type": "navbar",
                "selector": ".mob_contact",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 300ms ease-in-back 0, transform 300ms ease-in-back 0",
                    "x": "-20px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0, transform 200 ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "navbar",
                "selector": ".main",
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 500ms ease-out-quart 0",
                    "x": "70%",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "transition": "transform 250ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "navbar",
                "selector": ".mob_work",
                "preserve3d": true,
                "stepsA": [{
                    "display": "none"
                }, {
                    "opacity": 0,
                    "transition": "transform 200 ease 0",
                    "x": "-100%",
                    "y": "0px",
                    "z": "0px"
                }, {
                    "wait": "100ms"
                }, {
                    "display": "block"
                }, {
                    "opacity": 1,
                    "transition": "transform 300ms ease-out-quart 0, opacity 200 ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 200 ease 0, opacity 200 ease 0",
                    "x": "-100%",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "navbar",
                "selector": ".mob_about",
                "preserve3d": true,
                "stepsA": [{
                    "display": "none"
                }, {
                    "opacity": 0,
                    "transition": "transform 200 ease 0",
                    "x": "-100%",
                    "y": "0px",
                    "z": "0px"
                }, {
                    "display": "block"
                }, {
                    "opacity": 1,
                    "transition": "transform 400ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 300ms ease 0, opacity 200 ease 0",
                    "x": "-100%",
                    "y": "0px",
                    "z": "0px"
                }]
            }]
        }
    }, {
        "slug": "mob-menu-other-",
        "name": "mob_MENU -other-",
        "value": {
            "style": {},
            "triggers": [{
                "type": "navbar",
                "selector": ".mob_other",
                "preserve3d": true,
                "stepsA": [{
                    "opacity": 0,
                    "transition": "opacity 300ms ease-in-back 0, transform 300ms ease-in-back 0",
                    "x": "-20px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "transition": "opacity 200 ease 0, transform 200 ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }
            , {
                "type": "navbar",
                "selector": ".main",
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 500ms ease-out-quart 0",
                    "x": "70%",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "transition": "transform 250ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "navbar",
                "selector": ".mob_other",
                "preserve3d": true,
                "stepsA": [{
                    "display": "none"
                }, {
                    "opacity": 0,
                    "transition": "transform 200 ease 0",
                    "x": "-100%",
                    "y": "0px",
                    "z": "0px"
                }, {
                    "wait": "100ms"
                }, {
                    "display": "block"
                }, {
                    "opacity": 1,
                    "transition": "transform 300ms ease-out-quart 0, opacity 200 ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 200 ease 0, opacity 200 ease 0",
                    "x": "-100%",
                    "y": "0px",
                    "z": "0px"
                }]
            }, {
                "type": "navbar",
                "selector": ".mob_work",
                "preserve3d": true,
                "stepsA": [{
                    "display": "none"
                }, {
                    "opacity": 0,
                    "transition": "transform 200 ease 0",
                    "x": "-100%",
                    "y": "0px",
                    "z": "0px"
                }, {
                    "display": "block"
                }, {
                    "opacity": 1,
                    "transition": "transform 400ms ease-out-quart 0, opacity 300ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 300ms ease 0, opacity 200 ease 0",
                    "x": "-100%",
                    "y": "0px",
                    "z": "0px"
                }]
            }]
        }
    }
    , {
        "slug": "load-w150ms",
        "name": "LOAD [w150ms",
        "value": {
            "style": {
                "opacity": 0,
                "x": "-200px",
                "y": "0px",
                "z": "0px"
            },
            "triggers": [{
                "type": "load",
                "preload": true,
                "stepsA": [{
                    "wait": "150ms"
                }, {
                    "opacity": 1,
                    "transition": "transform 800ms ease-out-quart 0, opacity 800ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": []
            }]
        }
    }, {
        "slug": "load-w-300ms",
        "name": "LOAD [w 300ms",
        "value": {
            "style": {
                "opacity": 0,
                "x": "-200px",
                "y": "0px",
                "z": "0px"
            },
            "triggers": [{
                "type": "load",
                "preload": true,
                "stepsA": [{
                    "wait": "300ms"
                }, {
                    "opacity": 1,
                    "transition": "transform 800ms ease-out-quart 0, opacity 800ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": []
            }]
        }
    }, {
        "slug": "load-w-500ms",
        "name": "LOAD [w 500ms ",
        "value": {
            "style": {
                "opacity": 0,
                "x": "-200px",
                "y": "0px",
                "z": "0px"
            },
            "triggers": [{
                "type": "load",
                "preload": true,
                "stepsA": [{
                    "wait": "500ms"
                }, {
                    "opacity": 1,
                    "transition": "transform 800ms ease-out-quart 0, opacity 800ms ease-out-quart 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": []
            }]
        }
    }]);
}

carregarWeb1()

    

$(document).ready(function() {
let botaoSegundaUnidade = document.getElementById("botaoSegundaUnidade")
let reinicio = document.getElementById("reinicio")
let reinicioWork = document.getElementById("reinicioWork")

let primeiraUnidade = document.getElementById("primeiraUnidade")
let segundaUnidade = document.getElementById("segundaUnidade")
let terceiraUnidade = document.getElementById("terceiraUnidade")
let quartaUnidade = document.getElementById("quartaUnidade")

let contentWrapp = document.querySelectorAll(".content")

let unidadeUm = document.getElementsByClassName("unidadeUm")
let unidadeDois = document.getElementsByClassName("unidadeDois")
let unidadeTres = document.getElementsByClassName("unidadeTres")
let unidadeQuatro = document.getElementsByClassName("unidadeQuatro")

var contentList = [...contentWrapp]; // converts NodeList to Array

$(".botaoPrimeiraUnidade").click(function() {
    if (segundaUnidade.style.display != "none") {
        primeiraUnidade.style.backgroundColor = "#33333d"
        // reinicio.style.width = "90px"
        // reinicio.style.height = "90px"
        segundaUnidade.style.display = "none"
        contentList.forEach(contentWrapp => {
            contentWrapp.style.opacity = 0

        });
        primeiraUnidade.style.display = "block"
                carregarWeb1()
    } else if (terceiraUnidade.style.display != "none") {
        primeiraUnidade.style.backgroundColor = "#00f064"
        // reinicio.style.width = "90px"
        // reinicio.style.height = "90px"
        terceiraUnidade.style.display = "none"
        contentList.forEach(contentWrapp => {
            contentWrapp.style.opacity = 0

        });
        primeiraUnidade.style.display = "block"
                carregarWeb1()
    } else if (quartaUnidade.style.display != "none") {
        primeiraUnidade.style.backgroundColor = "#78b7cf"
        // reinicio.style.width = "90px"
        // reinicio.style.height = "90px"
        quartaUnidade.style.display = "none"
        contentList.forEach(contentWrapp => {
            contentWrapp.style.opacity = 0

        });
        primeiraUnidade.style.display = "block"
                carregarWeb1()
    }

});

$(".botaoSegundaUnidade").click(function() {
    if (primeiraUnidade.style.display != "none") {
        segundaUnidade.style.backgroundColor = "#fff"
        // reinicio.style.width = "90px"
        // reinicio.style.height = "90px"
        primeiraUnidade.style.display = "none"
        contentList.forEach(contentWrapp => {
            contentWrapp.style.opacity = 0

        });
        segundaUnidade.style.display = "block"

        
                carregarWeb1()
                
    } else if (terceiraUnidade.style.display != "none") {
        segundaUnidade.style.backgroundColor = "#00f064"
        // reinicio.style.width = "90px"
        // reinicio.style.height = "90px"
        terceiraUnidade.style.display = "none"
        contentList.forEach(contentWrapp => {
            contentWrapp.style.opacity = 0

        });
        segundaUnidade.style.display = "block"

                carregarWeb1()
    } else if (quartaUnidade.style.display != "none") {
        segundaUnidade.style.backgroundColor = "#78b7cf"
        // reinicio.style.width = "90px"
        // reinicio.style.height = "90px"
        quartaUnidade.style.display = "none"
        contentList.forEach(contentWrapp => {
            contentWrapp.style.opacity = 0

        });
        segundaUnidade.style.display = "block"

                carregarWeb1()
    }
});

$(".botaoTerceiraUnidade").click(function() {
    if (primeiraUnidade.style.display != "none") {
        terceiraUnidade.style.backgroundColor = "#fff"
        // reinicio.style.width = "90px"
        // reinicio.style.height = "90px"
        terceiraUnidade.style.display = "block"
        contentList.forEach(contentWrapp => {
            contentWrapp.style.opacity = 0

        });
        primeiraUnidade.style.display = "none"
                carregarWeb1()
    } else if (segundaUnidade.style.display != "none") {
        terceiraUnidade.style.backgroundColor = "#33333d"
        // reinicio.style.width = "90px"
        // reinicio.style.height = "90px"
        terceiraUnidade.style.display = "block"
        contentList.forEach(contentWrapp => {
            contentWrapp.style.opacity = 0

        });
        segundaUnidade.style.display = "none"
                carregarWeb1()
    } else if (quartaUnidade.style.display != "none") {
        terceiraUnidade.style.backgroundColor = "#78b7cf"
        // reinicio.style.width = "90px"
        // reinicio.style.height = "90px"
        terceiraUnidade.style.display = "block"
        contentList.forEach(contentWrapp => {
            contentWrapp.style.opacity = 0

        });
        quartaUnidade.style.display = "none"
                carregarWeb1()
    }
});

$(".botaoQuartaUnidade").click(function() {
    if (primeiraUnidade.style.display != "none") {
        quartaUnidade.style.backgroundColor = "#fff"
        // reinicio.style.width = "90px"
        // reinicio.style.height = "90px"
        quartaUnidade.style.display = "block"
        contentList.forEach(contentWrapp => {
            contentWrapp.style.opacity = 0

        });
        primeiraUnidade.style.display = "none"
        carregarWeb1()
    } else if (segundaUnidade.style.display != "none") {
        quartaUnidade.style.backgroundColor = "#33333d"
        // reinicio.style.width = "90px"
        // reinicio.style.height = "90px"
        quartaUnidade.style.display = "block"
        contentList.forEach(contentWrapp => {
            contentWrapp.style.opacity = 0

        });
        segundaUnidade.style.display = "none"
        carregarWeb1()
    } else if (terceiraUnidade.style.display != "none") {
        quartaUnidade.style.backgroundColor = "#00f064"
        // reinicio.style.width = "90px"
        // reinicio.style.height = "90px"
        quartaUnidade.style.display = "block"
        contentList.forEach(contentWrapp => {
            contentWrapp.style.opacity = 0

        });
        terceiraUnidade.style.display = "none"
        carregarWeb1()
    }
});


});


