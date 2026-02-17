(self.webpackChunk = self.webpackChunk || []).push([
    ["817"], {
        5487: function() {
            "use strict";
            window.tram = function(e) {
                function t(e, t) {
                    return (new F.Bare).init(e, t)
                }

                function n(e) {
                    var t = parseInt(e.slice(1), 16);
                    return [t >> 16 & 255, t >> 8 & 255, 255 & t]
                }

                function a(e, t, n) {
                    return "#" + (0x1000000 | e << 16 | t << 8 | n).toString(16).slice(1)
                }

                function i() {}

                function o(e, t, n) {
                    if (void 0 !== t && (n = t), void 0 === e) return n;
                    var a = n;
                    return $.test(e) || !K.test(e) ? a = parseInt(e, 10) : K.test(e) && (a = 1e3 * parseFloat(e)), 0 > a && (a = 0), a == a ? a : n
                }

                function r(e) {
                    j.debug && window && window.console.warn(e)
                }
                var l, d, c, s = function(e, t, n) {
                        function a(e) {
                            return "object" == typeof e
                        }

                        function i(e) {
                            return "function" == typeof e
                        }

                        function o() {}
                        return function r(l, d) {
                            function c() {
                                var e = new s;
                                return i(e.init) && e.init.apply(e, arguments), e
                            }

                            function s() {}
                            d === n && (d = l, l = Object), c.Bare = s;
                            var u, f = o[e] = l[e],
                                p = s[e] = c[e] = new o;
                            return p.constructor = c, c.mixin = function(t) {
                                return s[e] = c[e] = r(c, t)[e], c
                            }, c.open = function(e) {
                                if (u = {}, i(e) ? u = e.call(c, p, f, c, l) : a(e) && (u = e), a(u))
                                    for (var n in u) t.call(u, n) && (p[n] = u[n]);
                                return i(p.init) || (p.init = l), c
                            }, c.open(d)
                        }
                    }("prototype", {}.hasOwnProperty),
                    u = {
                        ease: ["ease", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * e)
                        }],
                        "ease-in": ["ease-in", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                        }],
                        "ease-out": ["ease-out", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                        }],
                        "ease-in-out": ["ease-in-out", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                        }],
                        linear: ["linear", function(e, t, n, a) {
                            return n * e / a + t
                        }],
                        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, t, n, a) {
                            return n * (e /= a) * e + t
                        }],
                        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, t, n, a) {
                            return -n * (e /= a) * (e - 2) + t
                        }],
                        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                        }],
                        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, t, n, a) {
                            return n * (e /= a) * e * e + t
                        }],
                        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, t, n, a) {
                            return n * ((e = e / a - 1) * e * e + 1) + t
                        }],
                        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                        }],
                        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, t, n, a) {
                            return n * (e /= a) * e * e * e + t
                        }],
                        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, t, n, a) {
                            return -n * ((e = e / a - 1) * e * e * e - 1) + t
                        }],
                        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
                        }],
                        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, t, n, a) {
                            return n * (e /= a) * e * e * e * e + t
                        }],
                        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, t, n, a) {
                            return n * ((e = e / a - 1) * e * e * e * e + 1) + t
                        }],
                        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
                        }],
                        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, t, n, a) {
                            return -n * Math.cos(e / a * (Math.PI / 2)) + n + t
                        }],
                        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, t, n, a) {
                            return n * Math.sin(e / a * (Math.PI / 2)) + t
                        }],
                        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, t, n, a) {
                            return -n / 2 * (Math.cos(Math.PI * e / a) - 1) + t
                        }],
                        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, t, n, a) {
                            return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t
                        }],
                        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, t, n, a) {
                            return e === a ? t + n : n * (-Math.pow(2, -10 * e / a) + 1) + t
                        }],
                        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, t, n, a) {
                            return 0 === e ? t : e === a ? t + n : (e /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                        }],
                        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, t, n, a) {
                            return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t
                        }],
                        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, t, n, a) {
                            return n * Math.sqrt(1 - (e = e / a - 1) * e) + t
                        }],
                        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                        }],
                        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, t, n, a, i) {
                            return void 0 === i && (i = 1.70158), n * (e /= a) * e * ((i + 1) * e - i) + t
                        }],
                        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, t, n, a, i) {
                            return void 0 === i && (i = 1.70158), n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                        }],
                        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, t, n, a, i) {
                            return void 0 === i && (i = 1.70158), (e /= a / 2) < 1 ? n / 2 * e * e * (((i *= 1.525) + 1) * e - i) + t : n / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
                        }]
                    },
                    f = {
                        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                    },
                    p = window,
                    g = "bkwld-tram",
                    E = /[\-\.0-9]/g,
                    y = /[A-Z]/,
                    m = "number",
                    I = /^(rgb|#)/,
                    T = /(em|cm|mm|in|pt|pc|px)$/,
                    b = /(em|cm|mm|in|pt|pc|px|%)$/,
                    O = /(deg|rad|turn)$/,
                    h = "unitless",
                    v = /(all|none) 0s ease 0s/,
                    _ = /^(width|height)$/,
                    R = document.createElement("a"),
                    A = ["Webkit", "Moz", "O", "ms"],
                    S = ["-webkit-", "-moz-", "-o-", "-ms-"],
                    w = function(e) {
                        if (e in R.style) return {
                            dom: e,
                            css: e
                        };
                        var t, n, a = "",
                            i = e.split("-");
                        for (t = 0; t < i.length; t++) a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
                        for (t = 0; t < A.length; t++)
                            if ((n = A[t] + a) in R.style) return {
                                dom: n,
                                css: S[t] + e
                            }
                    },
                    L = t.support = {
                        bind: Function.prototype.bind,
                        transform: w("transform"),
                        transition: w("transition"),
                        backface: w("backface-visibility"),
                        timing: w("transition-timing-function")
                    };
                if (L.transition) {
                    var N = L.timing.dom;
                    if (R.style[N] = u["ease-in-back"][0], !R.style[N])
                        for (var C in f) u[C][0] = f[C]
                }
                var V = t.frame = (l = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame) && L.bind ? l.bind(p) : function(e) {
                        p.setTimeout(e, 16)
                    },
                    M = t.now = (c = (d = p.performance) && (d.now || d.webkitNow || d.msNow || d.mozNow)) && L.bind ? c.bind(d) : Date.now || function() {
                        return +new Date
                    },
                    P = s(function(t) {
                        function n(e, t) {
                            var n = function(e) {
                                    for (var t = -1, n = e ? e.length : 0, a = []; ++t < n;) {
                                        var i = e[t];
                                        i && a.push(i)
                                    }
                                    return a
                                }(("" + e).split(" ")),
                                a = n[0];
                            t = t || {};
                            var i = z[a];
                            if (!i) return r("Unsupported property: " + a);
                            if (!t.weak || !this.props[a]) {
                                var o = i[0],
                                    l = this.props[a];
                                return l || (l = this.props[a] = new o.Bare), l.init(this.$el, n, i, t), l
                            }
                        }

                        function a(e, t, a) {
                            if (e) {
                                var r = typeof e;
                                if (t || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == r && t) return this.timer = new B({
                                    duration: e,
                                    context: this,
                                    complete: i
                                }), void(this.active = !0);
                                if ("string" == r && t) {
                                    switch (e) {
                                        case "hide":
                                            d.call(this);
                                            break;
                                        case "stop":
                                            l.call(this);
                                            break;
                                        case "redraw":
                                            c.call(this);
                                            break;
                                        default:
                                            n.call(this, e, a && a[1])
                                    }
                                    return i.call(this)
                                }
                                if ("function" == r) return void e.call(this, this);
                                if ("object" == r) {
                                    var f = 0;
                                    u.call(this, e, function(e, t) {
                                        e.span > f && (f = e.span), e.stop(), e.animate(t)
                                    }, function(e) {
                                        "wait" in e && (f = o(e.wait, 0))
                                    }), s.call(this), f > 0 && (this.timer = new B({
                                        duration: f,
                                        context: this
                                    }), this.active = !0, t && (this.timer.complete = i));
                                    var p = this,
                                        g = !1,
                                        E = {};
                                    V(function() {
                                        u.call(p, e, function(e) {
                                            e.active && (g = !0, E[e.name] = e.nextStyle)
                                        }), g && p.$el.css(E)
                                    })
                                }
                            }
                        }

                        function i() {
                            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                                var e = this.queue.shift();
                                a.call(this, e.options, !0, e.args)
                            }
                        }

                        function l(e) {
                            var t;
                            this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof e ? (t = {})[e] = 1 : t = "object" == typeof e && null != e ? e : this.props, u.call(this, t, f), s.call(this)
                        }

                        function d() {
                            l.call(this), this.el.style.display = "none"
                        }

                        function c() {
                            this.el.offsetHeight
                        }

                        function s() {
                            var e, t, n = [];
                            for (e in this.upstream && n.push(this.upstream), this.props)(t = this.props[e]).active && n.push(t.string);
                            n = n.join(","), this.style !== n && (this.style = n, this.el.style[L.transition.dom] = n)
                        }

                        function u(e, t, a) {
                            var i, o, r, l, d = t !== f,
                                c = {};
                            for (i in e) r = e[i], i in H ? (c.transform || (c.transform = {}), c.transform[i] = r) : (y.test(i) && (i = i.replace(/[A-Z]/g, function(e) {
                                return "-" + e.toLowerCase()
                            })), i in z ? c[i] = r : (l || (l = {}), l[i] = r));
                            for (i in c) {
                                if (r = c[i], !(o = this.props[i])) {
                                    if (!d) continue;
                                    o = n.call(this, i)
                                }
                                t.call(this, o, r)
                            }
                            a && l && a.call(this, l)
                        }

                        function f(e) {
                            e.stop()
                        }

                        function p(e, t) {
                            e.set(t)
                        }

                        function E(e) {
                            this.$el.css(e)
                        }

                        function m(e, n) {
                            t[e] = function() {
                                return this.children ? I.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                            }
                        }

                        function I(e, t) {
                            var n, a = this.children.length;
                            for (n = 0; a > n; n++) e.apply(this.children[n], t);
                            return this
                        }
                        t.init = function(t) {
                            if (this.$el = e(t), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, j.keepInherited && !j.fallback) {
                                var n = Y(this.el, "transition");
                                n && !v.test(n) && (this.upstream = n)
                            }
                            L.backface && j.hideBackface && W(this.el, L.backface.css, "hidden")
                        }, m("add", n), m("start", a), m("wait", function(e) {
                            e = o(e, 0), this.active ? this.queue.push({
                                options: e
                            }) : (this.timer = new B({
                                duration: e,
                                context: this,
                                complete: i
                            }), this.active = !0)
                        }), m("then", function(e) {
                            return this.active ? (this.queue.push({
                                options: e,
                                args: arguments
                            }), void(this.timer.complete = i)) : r("No active transition timer. Use start() or wait() before then().")
                        }), m("next", i), m("stop", l), m("set", function(e) {
                            l.call(this, e), u.call(this, e, p, E)
                        }), m("show", function(e) {
                            "string" != typeof e && (e = "block"), this.el.style.display = e
                        }), m("hide", d), m("redraw", c), m("destroy", function() {
                            l.call(this), e.removeData(this.el, g), this.$el = this.el = null
                        })
                    }),
                    F = s(P, function(t) {
                        function n(t, n) {
                            var a = e.data(t, g) || e.data(t, g, new P.Bare);
                            return a.el || a.init(t), n ? a.start(n) : a
                        }
                        t.init = function(t, a) {
                            var i = e(t);
                            if (!i.length) return this;
                            if (1 === i.length) return n(i[0], a);
                            var o = [];
                            return i.each(function(e, t) {
                                o.push(n(t, a))
                            }), this.children = o, this
                        }
                    }),
                    k = s(function(e) {
                        function t() {
                            var e = this.get();
                            this.update("auto");
                            var t = this.get();
                            return this.update(e), t
                        }
                        e.init = function(e, t, n, a) {
                            this.$el = e, this.el = e[0];
                            var i, r, l, d = t[0];
                            n[2] && (d = n[2]), Q[d] && (d = Q[d]), this.name = d, this.type = n[1], this.duration = o(t[1], this.duration, 500), this.ease = (i = t[2], r = this.ease, l = "ease", void 0 !== r && (l = r), i in u ? i : l), this.delay = o(t[3], this.delay, 0), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = _.test(this.name), this.unit = a.unit || this.unit || j.defaultUnit, this.angle = a.angle || this.angle || j.defaultAngle, j.fallback || a.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + u[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : ""))
                        }, e.set = function(e) {
                            e = this.convert(e, this.type), this.update(e), this.redraw()
                        }, e.transition = function(e) {
                            this.active = !0, e = this.convert(e, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == e && (e = t.call(this))), this.nextStyle = e
                        }, e.fallback = function(e) {
                            var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                            e = this.convert(e, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == e && (e = t.call(this))), this.tween = new D({
                                from: n,
                                to: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.get = function() {
                            return Y(this.el, this.name)
                        }, e.update = function(e) {
                            W(this.el, this.name, e)
                        }, e.stop = function() {
                            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, W(this.el, this.name, this.get()));
                            var e = this.tween;
                            e && e.context && e.destroy()
                        }, e.convert = function(e, t) {
                            if ("auto" == e && this.auto) return e;
                            var n, i, o = "number" == typeof e,
                                l = "string" == typeof e;
                            switch (t) {
                                case m:
                                    if (o) return e;
                                    if (l && "" === e.replace(E, "")) return +e;
                                    i = "number(unitless)";
                                    break;
                                case I:
                                    if (l) {
                                        if ("" === e && this.original) return this.original;
                                        if (t.test(e)) return "#" == e.charAt(0) && 7 == e.length ? e : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e)) ? a(n[1], n[2], n[3]) : e).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                                    }
                                    i = "hex or rgb string";
                                    break;
                                case T:
                                    if (o) return e + this.unit;
                                    if (l && t.test(e)) return e;
                                    i = "number(px) or string(unit)";
                                    break;
                                case b:
                                    if (o) return e + this.unit;
                                    if (l && t.test(e)) return e;
                                    i = "number(px) or string(unit or %)";
                                    break;
                                case O:
                                    if (o) return e + this.angle;
                                    if (l && t.test(e)) return e;
                                    i = "number(deg) or string(angle)";
                                    break;
                                case h:
                                    if (o || l && b.test(e)) return e;
                                    i = "number(unitless) or string(unit or %)"
                            }
                            return r("Type warning: Expected: [" + i + "] Got: [" + typeof e + "] " + e), e
                        }, e.redraw = function() {
                            this.el.offsetHeight
                        }
                    }),
                    x = s(k, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), I))
                        }
                    }),
                    G = s(k, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.animate = this.fallback
                        }, e.get = function() {
                            return this.$el[this.name]()
                        }, e.update = function(e) {
                            this.$el[this.name](e)
                        }
                    }),
                    U = s(k, function(e, t) {
                        function n(e, t) {
                            var n, a, i, o, r;
                            for (n in e) i = (o = H[n])[0], a = o[1] || n, r = this.convert(e[n], i), t.call(this, a, r, i)
                        }
                        e.init = function() {
                            t.init.apply(this, arguments), this.current || (this.current = {}, H.perspective && j.perspective && (this.current.perspective = j.perspective, W(this.el, this.name, this.style(this.current)), this.redraw()))
                        }, e.set = function(e) {
                            n.call(this, e, function(e, t) {
                                this.current[e] = t
                            }), W(this.el, this.name, this.style(this.current)), this.redraw()
                        }, e.transition = function(e) {
                            var t = this.values(e);
                            this.tween = new X({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease
                            });
                            var n, a = {};
                            for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                            this.active = !0, this.nextStyle = this.style(a)
                        }, e.fallback = function(e) {
                            var t = this.values(e);
                            this.tween = new X({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.update = function() {
                            W(this.el, this.name, this.style(this.current))
                        }, e.style = function(e) {
                            var t, n = "";
                            for (t in e) n += t + "(" + e[t] + ") ";
                            return n
                        }, e.values = function(e) {
                            var t, a = {};
                            return n.call(this, e, function(e, n, i) {
                                a[e] = n, void 0 === this.current[e] && (t = 0, ~e.indexOf("scale") && (t = 1), this.current[e] = this.convert(t, i))
                            }), a
                        }
                    }),
                    D = s(function(t) {
                        function o() {
                            var e, t, n, a = d.length;
                            if (a)
                                for (V(o), t = M(), e = a; e--;)(n = d[e]) && n.render(t)
                        }
                        var l = {
                            ease: u.ease[1],
                            from: 0,
                            to: 1
                        };
                        t.init = function(e) {
                            this.duration = e.duration || 0, this.delay = e.delay || 0;
                            var t = e.ease || l.ease;
                            u[t] && (t = u[t][1]), "function" != typeof t && (t = l.ease), this.ease = t, this.update = e.update || i, this.complete = e.complete || i, this.context = e.context || this, this.name = e.name;
                            var n = e.from,
                                a = e.to;
                            void 0 === n && (n = l.from), void 0 === a && (a = l.to), this.unit = e.unit || "", "number" == typeof n && "number" == typeof a ? (this.begin = n, this.change = a - n) : this.format(a, n), this.value = this.begin + this.unit, this.start = M(), !1 !== e.autoplay && this.play()
                        }, t.play = function() {
                            this.active || (this.start || (this.start = M()), this.active = !0, 1 === d.push(this) && V(o))
                        }, t.stop = function() {
                            var t, n;
                            this.active && (this.active = !1, (n = e.inArray(this, d)) >= 0 && (t = d.slice(n + 1), d.length = n, t.length && (d = d.concat(t))))
                        }, t.render = function(e) {
                            var t, n = e - this.start;
                            if (this.delay) {
                                if (n <= this.delay) return;
                                n -= this.delay
                            }
                            if (n < this.duration) {
                                var i, o, r = this.ease(n, 0, 1, this.duration);
                                return t = this.startRGB ? (i = this.startRGB, o = this.endRGB, a(i[0] + r * (o[0] - i[0]), i[1] + r * (o[1] - i[1]), i[2] + r * (o[2] - i[2]))) : Math.round((this.begin + r * this.change) * c) / c, this.value = t + this.unit, void this.update.call(this.context, this.value)
                            }
                            t = this.endHex || this.begin + this.change, this.value = t + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                        }, t.format = function(e, t) {
                            if (t += "", "#" == (e += "").charAt(0)) return this.startRGB = n(t), this.endRGB = n(e), this.endHex = e, this.begin = 0, void(this.change = 1);
                            if (!this.unit) {
                                var a = t.replace(E, "");
                                a !== e.replace(E, "") && r("Units do not match [tween]: " + t + ", " + e), this.unit = a
                            }
                            t = parseFloat(t), e = parseFloat(e), this.begin = this.value = t, this.change = e - t
                        }, t.destroy = function() {
                            this.stop(), this.context = null, this.ease = this.update = this.complete = i
                        };
                        var d = [],
                            c = 1e3
                    }),
                    B = s(D, function(e) {
                        e.init = function(e) {
                            this.duration = e.duration || 0, this.complete = e.complete || i, this.context = e.context, this.play()
                        }, e.render = function(e) {
                            e - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                        }
                    }),
                    X = s(D, function(e, t) {
                        e.init = function(e) {
                            var t, n;
                            for (t in this.context = e.context, this.update = e.update, this.tweens = [], this.current = e.current, e.values) n = e.values[t], this.current[t] !== n && this.tweens.push(new D({
                                name: t,
                                from: this.current[t],
                                to: n,
                                duration: e.duration,
                                delay: e.delay,
                                ease: e.ease,
                                autoplay: !1
                            }));
                            this.play()
                        }, e.render = function(e) {
                            var t, n, a = this.tweens.length,
                                i = !1;
                            for (t = a; t--;)(n = this.tweens[t]).context && (n.render(e), this.current[n.name] = n.value, i = !0);
                            return i ? void(this.update && this.update.call(this.context)) : this.destroy()
                        }, e.destroy = function() {
                            if (t.destroy.call(this), this.tweens) {
                                var e;
                                for (e = this.tweens.length; e--;) this.tweens[e].destroy();
                                this.tweens = null, this.current = null
                            }
                        }
                    }),
                    j = t.config = {
                        debug: !1,
                        defaultUnit: "px",
                        defaultAngle: "deg",
                        keepInherited: !1,
                        hideBackface: !1,
                        perspective: "",
                        fallback: !L.transition,
                        agentTests: []
                    };
                t.fallback = function(e) {
                    if (!L.transition) return j.fallback = !0;
                    j.agentTests.push("(" + e + ")");
                    var t = RegExp(j.agentTests.join("|"), "i");
                    j.fallback = t.test(navigator.userAgent)
                }, t.fallback("6.0.[2-5] Safari"), t.tween = function(e) {
                    return new D(e)
                }, t.delay = function(e, t, n) {
                    return new B({
                        complete: t,
                        duration: e,
                        context: n
                    })
                }, e.fn.tram = function(e) {
                    return t.call(null, this, e)
                };
                var W = e.style,
                    Y = e.css,
                    Q = {
                        transform: L.transform && L.transform.css
                    },
                    z = {
                        color: [x, I],
                        background: [x, I, "background-color"],
                        "outline-color": [x, I],
                        "border-color": [x, I],
                        "border-top-color": [x, I],
                        "border-right-color": [x, I],
                        "border-bottom-color": [x, I],
                        "border-left-color": [x, I],
                        "border-width": [k, T],
                        "border-top-width": [k, T],
                        "border-right-width": [k, T],
                        "border-bottom-width": [k, T],
                        "border-left-width": [k, T],
                        "border-spacing": [k, T],
                        "letter-spacing": [k, T],
                        margin: [k, T],
                        "margin-top": [k, T],
                        "margin-right": [k, T],
                        "margin-bottom": [k, T],
                        "margin-left": [k, T],
                        padding: [k, T],
                        "padding-top": [k, T],
                        "padding-right": [k, T],
                        "padding-bottom": [k, T],
                        "padding-left": [k, T],
                        "outline-width": [k, T],
                        opacity: [k, m],
                        top: [k, b],
                        right: [k, b],
                        bottom: [k, b],
                        left: [k, b],
                        "font-size": [k, b],
                        "text-indent": [k, b],
                        "word-spacing": [k, b],
                        width: [k, b],
                        "min-width": [k, b],
                        "max-width": [k, b],
                        height: [k, b],
                        "min-height": [k, b],
                        "max-height": [k, b],
                        "line-height": [k, h],
                        "scroll-top": [G, m, "scrollTop"],
                        "scroll-left": [G, m, "scrollLeft"]
                    },
                    H = {};
                L.transform && (z.transform = [U], H = {
                    x: [b, "translateX"],
                    y: [b, "translateY"],
                    rotate: [O],
                    rotateX: [O],
                    rotateY: [O],
                    scale: [m],
                    scaleX: [m],
                    scaleY: [m],
                    skew: [O],
                    skewX: [O],
                    skewY: [O]
                }), L.transform && L.backface && (H.z = [b, "translateZ"], H.rotateZ = [O], H.scaleZ = [m], H.perspective = [T]);
                var $ = /ms/,
                    K = /s|\./;
                return e.tram = t
            }(window.jQuery)
        },
        5756: function(e, t, n) {
            "use strict";
            var a, i, o, r, l, d, c, s, u, f, p, g, E, y, m, I, T, b, O, h, v = window.$,
                _ = n(5487) && v.tram;
            (a = {}).VERSION = "1.6.0-Webflow", i = {}, o = Array.prototype, r = Object.prototype, l = Function.prototype, o.push, d = o.slice, o.concat, r.toString, c = r.hasOwnProperty, s = o.forEach, u = o.map, o.reduce, o.reduceRight, f = o.filter, o.every, p = o.some, g = o.indexOf, o.lastIndexOf, E = Object.keys, l.bind, y = a.each = a.forEach = function(e, t, n) {
                if (null == e) return e;
                if (s && e.forEach === s) e.forEach(t, n);
                else if (e.length === +e.length) {
                    for (var o = 0, r = e.length; o < r; o++)
                        if (t.call(n, e[o], o, e) === i) return
                } else
                    for (var l = a.keys(e), o = 0, r = l.length; o < r; o++)
                        if (t.call(n, e[l[o]], l[o], e) === i) return;
                return e
            }, a.map = a.collect = function(e, t, n) {
                var a = [];
                return null == e ? a : u && e.map === u ? e.map(t, n) : (y(e, function(e, i, o) {
                    a.push(t.call(n, e, i, o))
                }), a)
            }, a.find = a.detect = function(e, t, n) {
                var a;
                return m(e, function(e, i, o) {
                    if (t.call(n, e, i, o)) return a = e, !0
                }), a
            }, a.filter = a.select = function(e, t, n) {
                var a = [];
                return null == e ? a : f && e.filter === f ? e.filter(t, n) : (y(e, function(e, i, o) {
                    t.call(n, e, i, o) && a.push(e)
                }), a)
            }, m = a.some = a.any = function(e, t, n) {
                t || (t = a.identity);
                var o = !1;
                return null == e ? o : p && e.some === p ? e.some(t, n) : (y(e, function(e, a, r) {
                    if (o || (o = t.call(n, e, a, r))) return i
                }), !!o)
            }, a.contains = a.include = function(e, t) {
                return null != e && (g && e.indexOf === g ? -1 != e.indexOf(t) : m(e, function(e) {
                    return e === t
                }))
            }, a.delay = function(e, t) {
                var n = d.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, n)
                }, t)
            }, a.defer = function(e) {
                return a.delay.apply(a, [e, 1].concat(d.call(arguments, 1)))
            }, a.throttle = function(e) {
                var t, n, a;
                return function() {
                    t || (t = !0, n = arguments, a = this, _.frame(function() {
                        t = !1, e.apply(a, n)
                    }))
                }
            }, a.debounce = function(e, t, n) {
                var i, o, r, l, d, c = function() {
                    var s = a.now() - l;
                    s < t ? i = setTimeout(c, t - s) : (i = null, n || (d = e.apply(r, o), r = o = null))
                };
                return function() {
                    r = this, o = arguments, l = a.now();
                    var s = n && !i;
                    return i || (i = setTimeout(c, t)), s && (d = e.apply(r, o), r = o = null), d
                }
            }, a.defaults = function(e) {
                if (!a.isObject(e)) return e;
                for (var t = 1, n = arguments.length; t < n; t++) {
                    var i = arguments[t];
                    for (var o in i) void 0 === e[o] && (e[o] = i[o])
                }
                return e
            }, a.keys = function(e) {
                if (!a.isObject(e)) return [];
                if (E) return E(e);
                var t = [];
                for (var n in e) a.has(e, n) && t.push(n);
                return t
            }, a.has = function(e, t) {
                return c.call(e, t)
            }, a.isObject = function(e) {
                return e === Object(e)
            }, a.now = Date.now || function() {
                return new Date().getTime()
            }, a.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            }, I = /(.)^/, T = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, b = /\\|'|\r|\n|\u2028|\u2029/g, O = function(e) {
                return "\\" + T[e]
            }, h = /^\s*(\w|\$)+\s*$/, a.template = function(e, t, n) {
                !t && n && (t = n);
                var i, o = RegExp([((t = a.defaults({}, t, a.templateSettings)).escape || I).source, (t.interpolate || I).source, (t.evaluate || I).source].join("|") + "|$", "g"),
                    r = 0,
                    l = "__p+='";
                e.replace(o, function(t, n, a, i, o) {
                    return l += e.slice(r, o).replace(b, O), r = o + t.length, n ? l += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : a ? l += "'+\n((__t=(" + a + "))==null?'':__t)+\n'" : i && (l += "';\n" + i + "\n__p+='"), t
                }), l += "';\n";
                var d = t.variable;
                if (d) {
                    if (!h.test(d)) throw Error("variable is not a bare identifier: " + d)
                } else l = "with(obj||{}){\n" + l + "}\n", d = "obj";
                l = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + l + "return __p;\n";
                try {
                    i = Function(t.variable || "obj", "_", l)
                } catch (e) {
                    throw e.source = l, e
                }
                var c = function(e) {
                    return i.call(this, e, a)
                };
                return c.source = "function(" + d + "){\n" + l + "}", c
            }, e.exports = a
        },
        9461: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("brand", e.exports = function(e) {
                var t, n = {},
                    i = document,
                    o = e("html"),
                    r = e("body"),
                    l = window.location,
                    d = /PhantomJS/i.test(navigator.userAgent),
                    c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

                function s() {
                    var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || !!i.webkitFullscreenElement;
                    e(t).attr("style", n ? "display: none !important;" : "")
                }

                function u() {
                    var e = r.children(".w-webflow-badge"),
                        n = e.length && e.get(0) === t,
                        i = a.env("editor");
                    if (n) {
                        i && e.remove();
                        return
                    }
                    e.length && e.remove(), i || r.append(t)
                }
                return n.ready = function() {
                    var n, a, r, f = o.attr("data-wf-status"),
                        p = o.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(p) && l.hostname !== p && (f = !0), f && !d && (t = t || (n = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), a = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }), r = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow"), n.append(a, r), n[0]), u(), setTimeout(u, 500), e(i).off(c, s).on(c, s))
                }, n
            })
        },
        322: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("edit", e.exports = function(e, t, n) {
                if (n = n || {}, (a.env("test") || a.env("frame")) && !n.fixture && ! function() {
                        try {
                            return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
                        } catch (e) {
                            return !1
                        }
                    }()) return {
                    exit: 1
                };
                var i, o = e(window),
                    r = e(document.documentElement),
                    l = document.location,
                    d = "hashchange",
                    c = n.load || function() {
                        var t, n, a;
                        i = !0, window.WebflowEditor = !0, o.off(d, u), t = function(t) {
                            var n;
                            e.ajax({
                                url: p("https://editor-api.webflow.com/api/editor/view"),
                                data: {
                                    siteId: r.attr("data-wf-site")
                                },
                                xhrFields: {
                                    withCredentials: !0
                                },
                                dataType: "json",
                                crossDomain: !0,
                                success: (n = t, function(t) {
                                    var a, i, o;
                                    if (!t) return void console.error("Could not load editor data");
                                    t.thirdPartyCookiesSupported = n, i = (a = t.scriptPath).indexOf("//") >= 0 ? a : p("https://editor-api.webflow.com" + a), o = function() {
                                        window.WebflowEditor(t)
                                    }, e.ajax({
                                        type: "GET",
                                        url: i,
                                        dataType: "script",
                                        cache: !0
                                    }).then(o, f)
                                })
                            })
                        }, (n = window.document.createElement("iframe")).src = "https://webflow.com/site/third-party-cookie-check.html", n.style.display = "none", n.sandbox = "allow-scripts allow-same-origin", a = function(e) {
                            "WF_third_party_cookies_unsupported" === e.data ? (g(n, a), t(!1)) : "WF_third_party_cookies_supported" === e.data && (g(n, a), t(!0))
                        }, n.onerror = function() {
                            g(n, a), t(!1)
                        }, window.addEventListener("message", a, !1), window.document.body.appendChild(n)
                    },
                    s = !1;
                try {
                    s = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
                } catch (e) {}

                function u() {
                    !i && /\?edit/.test(l.hash) && c()
                }

                function f(e, t, n) {
                    throw console.error("Could not load editor script: " + t), n
                }

                function p(e) {
                    return e.replace(/([^:])\/\//g, "$1/")
                }

                function g(e, t) {
                    window.removeEventListener("message", t, !1), e.remove()
                }
                return s ? c() : l.search ? (/[?&](edit)(?:[=&?]|$)/.test(l.search) || /\?edit$/.test(l.href)) && c() : o.on(d, u).triggerHandler(d), {}
            })
        },
        2338: function(e, t, n) {
            "use strict";
            n(3949).define("focus-visible", e.exports = function() {
                return {
                    ready: function() {
                        if ("undefined" != typeof document) try {
                            document.querySelector(":focus-visible")
                        } catch (e) {
                            ! function(e) {
                                var t = !0,
                                    n = !1,
                                    a = null,
                                    i = {
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

                                function o(e) {
                                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
                                }

                                function r(e) {
                                    e.getAttribute("data-wf-focus-visible") || e.setAttribute("data-wf-focus-visible", "true")
                                }

                                function l() {
                                    t = !1
                                }

                                function d() {
                                    document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c)
                                }

                                function c(e) {
                                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c))
                                }
                                document.addEventListener("keydown", function(n) {
                                    n.metaKey || n.altKey || n.ctrlKey || (o(e.activeElement) && r(e.activeElement), t = !0)
                                }, !0), document.addEventListener("mousedown", l, !0), document.addEventListener("pointerdown", l, !0), document.addEventListener("touchstart", l, !0), document.addEventListener("visibilitychange", function() {
                                    "hidden" === document.visibilityState && (n && (t = !0), d())
                                }, !0), d(), e.addEventListener("focus", function(e) {
                                    if (o(e.target)) {
                                        var n, a, l;
                                        (t || (a = (n = e.target).type, "INPUT" === (l = n.tagName) && i[a] && !n.readOnly || "TEXTAREA" === l && !n.readOnly || n.isContentEditable || 0)) && r(e.target)
                                    }
                                }, !0), e.addEventListener("blur", function(e) {
                                    if (o(e.target) && e.target.hasAttribute("data-wf-focus-visible")) {
                                        var t;
                                        n = !0, window.clearTimeout(a), a = window.setTimeout(function() {
                                            n = !1
                                        }, 100), (t = e.target).getAttribute("data-wf-focus-visible") && t.removeAttribute("data-wf-focus-visible")
                                    }
                                }, !0)
                            }(document)
                        }
                    }
                }
            })
        },
        8334: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("focus", e.exports = function() {
                var e = [],
                    t = !1;

                function n(n) {
                    t && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), e.unshift(n))
                }

                function i(n) {
                    var a, i;
                    i = (a = n.target).tagName, (/^a$/i.test(i) && null != a.href || /^(button|textarea)$/i.test(i) && !0 !== a.disabled || /^input$/i.test(i) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(i) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(i) || /^video$/i.test(i) && !0 === a.controls) && (t = !0, setTimeout(() => {
                        for (t = !1, n.target.focus(); e.length > 0;) {
                            var a = e.pop();
                            a.target.dispatchEvent(new MouseEvent(a.type, a))
                        }
                    }, 0))
                }
                return {
                    ready: function() {
                        "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && a.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
                    }
                }
            })
        },
        7199: function(e) {
            "use strict";
            var t = window.jQuery,
                n = {},
                a = [],
                i = ".w-ix",
                o = {
                    reset: function(e, t) {
                        t.__wf_intro = null
                    },
                    intro: function(e, a) {
                        a.__wf_intro || (a.__wf_intro = !0, t(a).triggerHandler(n.types.INTRO))
                    },
                    outro: function(e, a) {
                        a.__wf_intro && (a.__wf_intro = null, t(a).triggerHandler(n.types.OUTRO))
                    }
                };
            n.triggers = {}, n.types = {
                INTRO: "w-ix-intro" + i,
                OUTRO: "w-ix-outro" + i
            }, n.init = function() {
                for (var e = a.length, i = 0; i < e; i++) {
                    var r = a[i];
                    r[0](0, r[1])
                }
                a = [], t.extend(n.triggers, o)
            }, n.async = function() {
                for (var e in o) {
                    var t = o[e];
                    o.hasOwnProperty(e) && (n.triggers[e] = function(e, n) {
                        a.push([t, n])
                    })
                }
            }, n.async(), e.exports = n
        },
        2570: function(e, t, n) {
            "use strict";
            var a = n(3949),
                i = n(7199);
            a.define("ix", e.exports = function(e, t) {
                var n, o, r = {},
                    l = e(window),
                    d = ".w-ix",
                    c = e.tram,
                    s = a.env,
                    u = s(),
                    f = s.chrome && s.chrome < 35,
                    p = "none 0s ease 0s",
                    g = e(),
                    E = {},
                    y = [],
                    m = [],
                    I = [],
                    T = 1,
                    b = {
                        tabs: ".w-tab-link, .w-tab-pane",
                        dropdown: ".w-dropdown",
                        slider: ".w-slide",
                        navbar: ".w-nav"
                    };

                function O(e) {
                    e && (E = {}, t.each(e, function(e) {
                        E[e.slug] = e.value
                    }), h())
                }

                function h() {
                    var t;
                    (t = e("[data-ix]")).length && (t.each(R), t.each(v), y.length && (a.scroll.on(A), setTimeout(A, 1)), m.length && a.load(S), I.length && setTimeout(w, T)), i.init(), a.redraw.up()
                }

                function v(n, o) {
                    var l = e(o),
                        c = E[l.attr("data-ix")];
                    if (c) {
                        var s = c.triggers;
                        s && (r.style(l, c.style), t.each(s, function(e) {
                            var t = {},
                                n = e.type,
                                o = e.stepsB && e.stepsB.length;

                            function r() {
                                L(e, l, {
                                    group: "A"
                                })
                            }

                            function c() {
                                L(e, l, {
                                    group: "B"
                                })
                            }
                            if ("load" === n) return void(e.preload && !u ? m.push(r) : I.push(r));
                            if ("click" === n) {
                                l.on("click" + d, function(n) {
                                    a.validClick(n.currentTarget) && ("#" === l.attr("href") && n.preventDefault(), L(e, l, {
                                        group: t.clicked ? "B" : "A"
                                    }), o && (t.clicked = !t.clicked))
                                }), g = g.add(l);
                                return
                            }
                            if ("hover" === n) {
                                l.on("mouseenter" + d, r), l.on("mouseleave" + d, c), g = g.add(l);
                                return
                            }
                            if ("scroll" === n) return void y.push({
                                el: l,
                                trigger: e,
                                state: {
                                    active: !1
                                },
                                offsetTop: _(e.offsetTop),
                                offsetBot: _(e.offsetBot)
                            });
                            var s = b[n];
                            if (s) {
                                var f = l.closest(s);
                                f.on(i.types.INTRO, r).on(i.types.OUTRO, c), g = g.add(f);
                                return
                            }
                        }))
                    }
                }

                function _(e) {
                    if (!e) return 0;
                    var t = parseInt(e = String(e), 10);
                    return t != t ? 0 : (e.indexOf("%") > 0 && (t /= 100) >= 1 && (t = .999), t)
                }

                function R(t, n) {
                    e(n).off(d)
                }

                function A() {
                    for (var e = l.scrollTop(), t = l.height(), n = y.length, a = 0; a < n; a++) {
                        var i = y[a],
                            o = i.el,
                            r = i.trigger,
                            d = r.stepsB && r.stepsB.length,
                            c = i.state,
                            s = o.offset().top,
                            u = o.outerHeight(),
                            f = i.offsetTop,
                            p = i.offsetBot;
                        f < 1 && f > 0 && (f *= t), p < 1 && p > 0 && (p *= t);
                        var g = s + u - f >= e && s + p <= e + t;
                        g !== c.active && (!1 !== g || d) && (c.active = g, L(r, o, {
                            group: g ? "A" : "B"
                        }))
                    }
                }

                function S() {
                    for (var e = m.length, t = 0; t < e; t++) m[t]()
                }

                function w() {
                    for (var e = I.length, t = 0; t < e; t++) I[t]()
                }

                function L(t, i, o, r) {
                    var l = (o = o || {}).done,
                        d = t.preserve3d;
                    if (!n || o.force) {
                        var s = o.group || "A",
                            p = t["loop" + s],
                            g = t["steps" + s];
                        if (g && g.length) {
                            if (g.length < 2 && (p = !1), !r) {
                                var E = t.selector;
                                E && (i = t.descend ? i.find(E) : t.siblings ? i.siblings(E) : e(E), u && i.attr("data-ix-affect", 1)), f && i.addClass("w-ix-emptyfix"), d && i.css("transform-style", "preserve-3d")
                            }
                            for (var y = c(i), m = {
                                    omit3d: !d
                                }, I = 0; I < g.length; I++) ! function(e, t, n) {
                                var i = "add",
                                    o = "start";
                                n.start && (i = o = "then");
                                var r = t.transition;
                                if (r) {
                                    r = r.split(",");
                                    for (var l = 0; l < r.length; l++) {
                                        var d = r[l];
                                        e[i](d)
                                    }
                                }
                                var c = N(t, n) || {};
                                if (null != c.width && (n.width = c.width), null != c.height && (n.height = c.height), null == r) {
                                    n.start ? e.then(function() {
                                        var t = this.queue;
                                        this.set(c), c.display && (e.redraw(), a.redraw.up()), this.queue = t, this.next()
                                    }) : (e.set(c), c.display && (e.redraw(), a.redraw.up()));
                                    var s = c.wait;
                                    null != s && (e.wait(s), n.start = !0)
                                } else {
                                    if (c.display) {
                                        var u = c.display;
                                        delete c.display, n.start ? e.then(function() {
                                            var e = this.queue;
                                            this.set({
                                                display: u
                                            }).redraw(), a.redraw.up(), this.queue = e, this.next()
                                        }) : (e.set({
                                            display: u
                                        }).redraw(), a.redraw.up())
                                    }
                                    e[o](c), n.start = !0
                                }
                            }(y, g[I], m);
                            m.start ? y.then(T) : T()
                        }
                    }

                    function T() {
                        if (p) return L(t, i, o, !0);
                        "auto" === m.width && y.set({
                            width: "auto"
                        }), "auto" === m.height && y.set({
                            height: "auto"
                        }), l && l()
                    }
                }

                function N(e, t) {
                    var n = t && t.omit3d,
                        a = {},
                        i = !1;
                    for (var o in e) "transition" !== o && "keysort" !== o && (n && ("z" === o || "rotateX" === o || "rotateY" === o || "scaleZ" === o) || (a[o] = e[o], i = !0));
                    return i ? a : null
                }
                return r.init = function(e) {
                    setTimeout(function() {
                        O(e)
                    }, 1)
                }, r.preview = function() {
                    n = !1, T = 100, setTimeout(function() {
                        O(window.__wf_ix)
                    }, 1)
                }, r.design = function() {
                    n = !0, r.destroy()
                }, r.destroy = function() {
                    o = !0, g.each(R), a.scroll.off(A), i.async(), y = [], m = [], I = []
                }, r.ready = function() {
                    if (u) return s("design") ? r.design() : r.preview();
                    E && o && (o = !1, h())
                }, r.run = L, r.style = u ? function(t, n) {
                    var a = c(t);
                    if (!e.isEmptyObject(n)) {
                        t.css("transition", "");
                        var i = t.css("transition");
                        i === p && (i = a.upstream = null), a.upstream = p, a.set(N(n)), a.upstream = i
                    }
                } : function(e, t) {
                    c(e).set(N(t))
                }, r
            })
        },
        5134: function(e, t, n) {
            "use strict";
            var a = n(7199);

            function i(e, t) {
                var n = document.createEvent("CustomEvent");
                n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n)
            }
            var o = window.jQuery,
                r = {},
                l = ".w-ix";
            r.triggers = {}, r.types = {
                INTRO: "w-ix-intro" + l,
                OUTRO: "w-ix-outro" + l
            }, o.extend(r.triggers, {
                reset: function(e, t) {
                    a.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE")
                }
            }), e.exports = r
        },
        941: function(e, t, n) {
            "use strict";
            var a = n(3949),
                i = n(6011);
            i.setEnv(a.env), a.define("ix2", e.exports = function() {
                return i
            })
        },
        3949: function(e, t, n) {
            "use strict";
            var a, i, o = {},
                r = {},
                l = [],
                d = window.Webflow || [],
                c = window.jQuery,
                s = c(window),
                u = c(document),
                f = c.isFunction,
                p = o._ = n(5756),
                g = o.tram = n(5487) && c.tram,
                E = !1,
                y = !1;

            function m(e) {
                o.env() && (f(e.design) && s.on("__wf_design", e.design), f(e.preview) && s.on("__wf_preview", e.preview)), f(e.destroy) && s.on("__wf_destroy", e.destroy), e.ready && f(e.ready) && function(e) {
                    if (E) return e.ready();
                    p.contains(l, e.ready) || l.push(e.ready)
                }(e)
            }

            function I(e) {
                var t;
                f(e.design) && s.off("__wf_design", e.design), f(e.preview) && s.off("__wf_preview", e.preview), f(e.destroy) && s.off("__wf_destroy", e.destroy), e.ready && f(e.ready) && (t = e, l = p.filter(l, function(e) {
                    return e !== t.ready
                }))
            }
            g.config.hideBackface = !1, g.config.keepInherited = !0, o.define = function(e, t, n) {
                r[e] && I(r[e]);
                var a = r[e] = t(c, p, n) || {};
                return m(a), a
            }, o.require = function(e) {
                return r[e]
            }, o.push = function(e) {
                if (E) {
                    f(e) && e();
                    return
                }
                d.push(e)
            }, o.env = function(e) {
                var t = window.__wf_design,
                    n = void 0 !== t;
                return e ? "design" === e ? n && t : "preview" === e ? n && !t : "slug" === e ? n && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : n
            };
            var T = navigator.userAgent.toLowerCase(),
                b = o.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                O = o.env.chrome = /chrome/.test(T) && /Google/.test(navigator.vendor) && parseInt(T.match(/chrome\/(\d+)\./)[1], 10),
                h = o.env.ios = /(ipod|iphone|ipad)/.test(T);
            o.env.safari = /safari/.test(T) && !O && !h, b && u.on("touchstart mousedown", function(e) {
                a = e.target
            }), o.validClick = b ? function(e) {
                return e === a || c.contains(e, a)
            } : function() {
                return !0
            };
            var v = "resize.webflow orientationchange.webflow load.webflow",
                _ = "scroll.webflow " + v;

            function R(e, t) {
                var n = [],
                    a = {};
                return a.up = p.throttle(function(e) {
                    p.each(n, function(t) {
                        t(e)
                    })
                }), e && t && e.on(t, a.up), a.on = function(e) {
                    "function" == typeof e && (p.contains(n, e) || n.push(e))
                }, a.off = function(e) {
                    if (!arguments.length) {
                        n = [];
                        return
                    }
                    n = p.filter(n, function(t) {
                        return t !== e
                    })
                }, a
            }

            function A(e) {
                f(e) && e()
            }

            function S() {
                i && (i.reject(), s.off("load", i.resolve)), i = new c.Deferred, s.on("load", i.resolve)
            }
            o.resize = R(s, v), o.scroll = R(s, _), o.redraw = R(), o.location = function(e) {
                window.location = e
            }, o.env() && (o.location = function() {}), o.ready = function() {
                E = !0, y ? (y = !1, p.each(r, m)) : p.each(l, A), p.each(d, A), o.resize.up()
            }, o.load = function(e) {
                i.then(e)
            }, o.destroy = function(e) {
                e = e || {}, y = !0, s.triggerHandler("__wf_destroy"), null != e.domready && (E = e.domready), p.each(r, I), o.resize.off(), o.scroll.off(), o.redraw.off(), l = [], d = [], "pending" === i.state() && S()
            }, c(o.ready), S(), e.exports = window.Webflow = o
        },
        7624: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("links", e.exports = function(e, t) {
                var n, i, o, r = {},
                    l = e(window),
                    d = a.env(),
                    c = window.location,
                    s = document.createElement("a"),
                    u = "w--current",
                    f = /index\.(html|php)$/,
                    p = /\/$/;

                function g() {
                    var e = l.scrollTop(),
                        n = l.height();
                    t.each(i, function(t) {
                        if (!t.link.attr("hreflang")) {
                            var a = t.link,
                                i = t.sec,
                                o = i.offset().top,
                                r = i.outerHeight(),
                                l = .5 * n,
                                d = i.is(":visible") && o + r - l >= e && o + l <= e + n;
                            t.active !== d && (t.active = d, E(a, u, d))
                        }
                    })
                }

                function E(e, t, n) {
                    var a = e.hasClass(t);
                    (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t))
                }
                return r.ready = r.design = r.preview = function() {
                    n = d && a.env("design"), o = a.env("slug") || c.pathname || "", a.scroll.off(g), i = [];
                    for (var t = document.links, r = 0; r < t.length; ++r) ! function(t) {
                        if (!t.getAttribute("hreflang")) {
                            var a = n && t.getAttribute("href-disabled") || t.getAttribute("href");
                            if (s.href = a, !(a.indexOf(":") >= 0)) {
                                var r = e(t);
                                if (s.hash.length > 1 && s.host + s.pathname === c.host + c.pathname) {
                                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                                    var l = e(s.hash);
                                    l.length && i.push({
                                        link: r,
                                        sec: l,
                                        active: !1
                                    });
                                    return
                                }
                                "#" !== a && "" !== a && E(r, u, !d && s.href === c.href || a === o || f.test(a) && p.test(o))
                            }
                        }
                    }(t[r]);
                    i.length && (a.scroll.on(g), g())
                }, r
            })
        },
        286: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("scroll", e.exports = function(e) {
                var t = {
                        WF_CLICK_EMPTY: "click.wf-empty-link",
                        WF_CLICK_SCROLL: "click.wf-scroll"
                    },
                    n = window.location,
                    i = ! function() {
                        try {
                            return !!window.frameElement
                        } catch (e) {
                            return !0
                        }
                    }() ? window.history : null,
                    o = e(window),
                    r = e(document),
                    l = e(document.body),
                    d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 15)
                    },
                    c = a.env("editor") ? ".w-editor-body" : "body",
                    s = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
                    u = 'a[href="#"]',
                    f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
                    p = document.createElement("style");
                p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
                var g = /^#[a-zA-Z0-9][\w:.-]*$/;
                let E = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

                function y(e, t) {
                    var n;
                    switch (t) {
                        case "add":
                            (n = e.attr("tabindex")) ? e.attr("data-wf-tabindex-swap", n): e.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (n = e.attr("data-wf-tabindex-swap")) ? (e.attr("tabindex", n), e.removeAttr("data-wf-tabindex-swap")) : e.removeAttr("tabindex")
                    }
                    e.toggleClass("wf-force-outline-none", "add" === t)
                }

                function m(t) {
                    var r = t.currentTarget;
                    if (!(a.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(r.className))) {
                        var c = g.test(r.hash) && r.host + r.pathname === n.host + n.pathname ? r.hash : "";
                        if ("" !== c) {
                            var u, f = e(c);
                            f.length && (t && (t.preventDefault(), t.stopPropagation()), u = c, n.hash !== u && i && i.pushState && !(a.env.chrome && "file:" === n.protocol) && (i.state && i.state.hash) !== u && i.pushState({
                                hash: u
                            }, "", u), window.setTimeout(function() {
                                ! function(t, n) {
                                    var a = o.scrollTop(),
                                        i = function(t) {
                                            var n = e(s),
                                                a = "fixed" === n.css("position") ? n.outerHeight() : 0,
                                                i = t.offset().top - a;
                                            if ("mid" === t.data("scroll")) {
                                                var r = o.height() - a,
                                                    l = t.outerHeight();
                                                l < r && (i -= Math.round((r - l) / 2))
                                            }
                                            return i
                                        }(t);
                                    if (a !== i) {
                                        var r = function(e, t, n) {
                                                if ("none" === document.body.getAttribute("data-wf-scroll-motion") || E.matches) return 0;
                                                var a = 1;
                                                return l.add(e).each(function(e, t) {
                                                    var n = parseFloat(t.getAttribute("data-scroll-time"));
                                                    !isNaN(n) && n >= 0 && (a = n)
                                                }), (472.143 * Math.log(Math.abs(t - n) + 125) - 2e3) * a
                                            }(t, a, i),
                                            c = Date.now(),
                                            u = function() {
                                                var e, t, o, l, s, f = Date.now() - c;
                                                window.scroll(0, (e = a, t = i, (o = f) > (l = r) ? t : e + (t - e) * ((s = o / l) < .5 ? 4 * s * s * s : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1))), f <= r ? d(u) : "function" == typeof n && n()
                                            };
                                        d(u)
                                    }
                                }(f, function() {
                                    y(f, "add"), f.get(0).focus({
                                        preventScroll: !0
                                    }), y(f, "remove")
                                })
                            }, 300 * !t))
                        }
                    }
                }
                return {
                    ready: function() {
                        var {
                            WF_CLICK_EMPTY: e,
                            WF_CLICK_SCROLL: n
                        } = t;
                        r.on(n, f, m), r.on(e, u, function(e) {
                            e.preventDefault()
                        }), document.head.insertBefore(p, document.head.firstChild)
                    }
                }
            })
        },
        3695: function(e, t, n) {
            "use strict";
            n(3949).define("touch", e.exports = function(e) {
                var t = {},
                    n = window.getSelection;

                function a(t) {
                    var a, i, o = !1,
                        r = !1,
                        l = Math.min(Math.round(.04 * window.innerWidth), 40);

                    function d(e) {
                        var t = e.touches;
                        t && t.length > 1 || (o = !0, t ? (r = !0, a = t[0].clientX) : a = e.clientX, i = a)
                    }

                    function c(t) {
                        if (o) {
                            if (r && "mousemove" === t.type) {
                                t.preventDefault(), t.stopPropagation();
                                return
                            }
                            var a, d, c, s, f = t.touches,
                                p = f ? f[0].clientX : t.clientX,
                                g = p - i;
                            i = p, Math.abs(g) > l && n && "" === String(n()) && (a = "swipe", d = t, c = {
                                direction: g > 0 ? "right" : "left"
                            }, s = e.Event(a, {
                                originalEvent: d
                            }), e(d.target).trigger(s, c), u())
                        }
                    }

                    function s(e) {
                        if (o && (o = !1, r && "mouseup" === e.type)) {
                            e.preventDefault(), e.stopPropagation(), r = !1;
                            return
                        }
                    }

                    function u() {
                        o = !1
                    }
                    t.addEventListener("touchstart", d, !1), t.addEventListener("touchmove", c, !1), t.addEventListener("touchend", s, !1), t.addEventListener("touchcancel", u, !1), t.addEventListener("mousedown", d, !1), t.addEventListener("mousemove", c, !1), t.addEventListener("mouseup", s, !1), t.addEventListener("mouseout", u, !1), this.destroy = function() {
                        t.removeEventListener("touchstart", d, !1), t.removeEventListener("touchmove", c, !1), t.removeEventListener("touchend", s, !1), t.removeEventListener("touchcancel", u, !1), t.removeEventListener("mousedown", d, !1), t.removeEventListener("mousemove", c, !1), t.removeEventListener("mouseup", s, !1), t.removeEventListener("mouseout", u, !1), t = null
                    }
                }
                return e.event.special.tap = {
                    bindType: "click",
                    delegateType: "click"
                }, t.init = function(t) {
                    return (t = "string" == typeof t ? e(t).get(0) : t) ? new a(t) : null
                }, t.instance = t.init(document), t
            })
        },
        9858: function(e, t, n) {
            "use strict";
            var a = n(3949),
                i = n(5134);
            let o = {
                    ARROW_LEFT: 37,
                    ARROW_UP: 38,
                    ARROW_RIGHT: 39,
                    ARROW_DOWN: 40,
                    ESCAPE: 27,
                    SPACE: 32,
                    ENTER: 13,
                    HOME: 36,
                    END: 35
                },
                r = /^#[a-zA-Z0-9\-_]+$/;
            a.define("dropdown", e.exports = function(e, t) {
                var n, l, d = t.debounce,
                    c = {},
                    s = a.env(),
                    u = !1,
                    f = a.env.touch,
                    p = ".w-dropdown",
                    g = "w--open",
                    E = i.triggers,
                    y = "focusout" + p,
                    m = "keydown" + p,
                    I = "mouseenter" + p,
                    T = "mousemove" + p,
                    b = "mouseleave" + p,
                    O = (f ? "click" : "mouseup") + p,
                    h = "w-close" + p,
                    v = "setting" + p,
                    _ = e(document);

                function R() {
                    n = s && a.env("design"), (l = _.find(p)).each(A)
                }

                function A(t, i) {
                    var l, c, u, f, E, T, b, R, A, V, M = e(i),
                        P = e.data(i, p);
                    P || (P = e.data(i, p, {
                        open: !1,
                        el: M,
                        config: {},
                        selectedIdx: -1
                    })), P.toggle = P.el.children(".w-dropdown-toggle"), P.list = P.el.children(".w-dropdown-list"), P.links = P.list.find("a:not(.w-dropdown .w-dropdown a)"), P.complete = (l = P, function() {
                        l.list.removeClass(g), l.toggle.removeClass(g), l.manageZ && l.el.css("z-index", "")
                    }), P.mouseLeave = (c = P, function() {
                        c.hovering = !1, c.links.is(":focus") || N(c)
                    }), P.mouseUpOutside = ((u = P).mouseUpOutside && _.off(O, u.mouseUpOutside), d(function(t) {
                        if (u.open) {
                            var n = e(t.target);
                            if (!n.closest(".w-dropdown-toggle").length) {
                                var i = -1 === e.inArray(u.el[0], n.parents(p)),
                                    o = a.env("editor");
                                if (i) {
                                    if (o) {
                                        var r = 1 === n.parents().length && 1 === n.parents("svg").length,
                                            l = n.parents(".w-editor-bem-EditorHoverControls").length;
                                        if (r || l) return
                                    }
                                    N(u)
                                }
                            }
                        }
                    })), P.mouseMoveOutside = (f = P, d(function(t) {
                        if (f.open) {
                            var n = e(t.target);
                            if (-1 === e.inArray(f.el[0], n.parents(p))) {
                                var a = n.parents(".w-editor-bem-EditorHoverControls").length,
                                    i = n.parents(".w-editor-bem-RTToolbar").length,
                                    o = e(".w-editor-bem-EditorOverlay"),
                                    r = o.find(".w-editor-edit-outline").length || o.find(".w-editor-bem-RTToolbar").length;
                                if (a || i || r) return;
                                f.hovering = !1, N(f)
                            }
                        }
                    })), S(P);
                    var F = P.toggle.attr("id"),
                        k = P.list.attr("id");
                    F || (F = "w-dropdown-toggle-" + t), k || (k = "w-dropdown-list-" + t), P.toggle.attr("id", F), P.toggle.attr("aria-controls", k), P.toggle.attr("aria-haspopup", "menu"), P.toggle.attr("aria-expanded", "false"), P.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), "BUTTON" !== P.toggle.prop("tagName") && (P.toggle.attr("role", "button"), P.toggle.attr("tabindex") || P.toggle.attr("tabindex", "0")), P.list.attr("id", k), P.list.attr("aria-labelledby", F), P.links.each(function(e, t) {
                        t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"), r.test(t.hash) && t.addEventListener("click", N.bind(null, P))
                    }), P.el.off(p), P.toggle.off(p), P.nav && P.nav.off(p);
                    var x = w(P, !0);
                    n && P.el.on(v, (E = P, function(e, t) {
                        t = t || {}, S(E), !0 === t.open && L(E), !1 === t.open && N(E, {
                            immediate: !0
                        })
                    })), n || (s && (P.hovering = !1, N(P)), P.config.hover && P.toggle.on(I, (T = P, function() {
                        T.hovering = !0, L(T)
                    })), P.el.on(h, x), P.el.on(m, (b = P, function(e) {
                        if (!n && b.open) switch (b.selectedIdx = b.links.index(document.activeElement), e.keyCode) {
                            case o.HOME:
                                if (!b.open) return;
                                return b.selectedIdx = 0, C(b), e.preventDefault();
                            case o.END:
                                if (!b.open) return;
                                return b.selectedIdx = b.links.length - 1, C(b), e.preventDefault();
                            case o.ESCAPE:
                                return N(b), b.toggle.focus(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                return b.selectedIdx = Math.min(b.links.length - 1, b.selectedIdx + 1), C(b), e.preventDefault();
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                return b.selectedIdx = Math.max(-1, b.selectedIdx - 1), C(b), e.preventDefault()
                        }
                    })), P.el.on(y, (R = P, d(function(e) {
                        var {
                            relatedTarget: t,
                            target: n
                        } = e, a = R.el[0];
                        return a.contains(t) || a.contains(n) || N(R), e.stopPropagation()
                    }))), P.toggle.on(O, x), P.toggle.on(m, (V = w(A = P, !0), function(e) {
                        if (!n) {
                            if (!A.open) switch (e.keyCode) {
                                case o.ARROW_UP:
                                case o.ARROW_DOWN:
                                    return e.stopPropagation()
                            }
                            switch (e.keyCode) {
                                case o.SPACE:
                                case o.ENTER:
                                    return V(), e.stopPropagation(), e.preventDefault()
                            }
                        }
                    })), P.nav = P.el.closest(".w-nav"), P.nav.on(h, x))
                }

                function S(e) {
                    var t = Number(e.el.css("z-index"));
                    e.manageZ = 900 === t || 901 === t, e.config = {
                        hover: "true" === e.el.attr("data-hover") && !f,
                        delay: e.el.attr("data-delay")
                    }
                }

                function w(e, t) {
                    return d(function(n) {
                        if (e.open || n && "w-close" === n.type) return N(e, {
                            forceClose: t
                        });
                        L(e)
                    })
                }

                function L(t) {
                    if (!t.open) {
                        i = t.el[0], l.each(function(t, n) {
                            var a = e(n);
                            a.is(i) || a.has(i).length || a.triggerHandler(h)
                        }), t.open = !0, t.list.addClass(g), t.toggle.addClass(g), t.toggle.attr("aria-expanded", "true"), E.intro(0, t.el[0]), a.redraw.up(), t.manageZ && t.el.css("z-index", 901);
                        var i, o = a.env("editor");
                        n || _.on(O, t.mouseUpOutside), t.hovering && !o && t.el.on(b, t.mouseLeave), t.hovering && o && _.on(T, t.mouseMoveOutside), window.clearTimeout(t.delayId)
                    }
                }

                function N(e, {
                    immediate: t,
                    forceClose: n
                } = {}) {
                    if (e.open && (!e.config.hover || !e.hovering || n)) {
                        e.toggle.attr("aria-expanded", "false"), e.open = !1;
                        var a = e.config;
                        if (E.outro(0, e.el[0]), _.off(O, e.mouseUpOutside), _.off(T, e.mouseMoveOutside), e.el.off(b, e.mouseLeave), window.clearTimeout(e.delayId), !a.delay || t) return e.complete();
                        e.delayId = window.setTimeout(e.complete, a.delay)
                    }
                }

                function C(e) {
                    e.links[e.selectedIdx] && e.links[e.selectedIdx].focus()
                }
                return c.ready = R, c.design = function() {
                    u && _.find(p).each(function(t, n) {
                        e(n).triggerHandler(h)
                    }), u = !1, R()
                }, c.preview = function() {
                    u = !0, R()
                }, c
            })
        },
        6524: function(e, t) {
            "use strict";

            function n(e, t, n, a, i, o, r, l, d, c, s, u, f) {
                return function(p) {
                    e(p);
                    var g = p.form,
                        E = {
                            name: g.attr("data-name") || g.attr("name") || "Untitled Form",
                            pageId: g.attr("data-wf-page-id") || "",
                            elementId: g.attr("data-wf-element-id") || "",
                            domain: u("html").attr("data-wf-domain") || null,
                            source: t.href,
                            test: n.env(),
                            fields: {},
                            fileUploads: {},
                            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(g.html()),
                            trackingCookies: a()
                        };
                    let y = g.attr("data-wf-flow");
                    y && (E.wfFlow = y);
                    let m = g.attr("data-wf-locale-id");
                    m && (E.localeId = m), i(p);
                    var I = o(g, E.fields);
                    return I ? r(I) : (E.fileUploads = l(g), d(p), c) ? void u.ajax({
                        url: f,
                        type: "POST",
                        data: E,
                        dataType: "json",
                        crossDomain: !0
                    }).done(function(e) {
                        e && 200 === e.code && (p.success = !0), s(p)
                    }).fail(function() {
                        s(p)
                    }) : void s(p)
                }
            }
            Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        7527: function(e, t, n) {
            "use strict";
            var a = n(3949);
            let i = (e, t, n, a) => {
                let i = document.createElement("div");
                t.appendChild(i), turnstile.render(i, {
                    sitekey: e,
                    callback: function(e) {
                        n(e)
                    },
                    "error-callback": function() {
                        a()
                    }
                })
            };
            a.define("forms", e.exports = function(e, t) {
                let o, r = "TURNSTILE_LOADED";
                var l, d, c, s, u, f = {},
                    p = e(document),
                    g = window.location,
                    E = window.XDomainRequest && !window.atob,
                    y = ".w-form",
                    m = /e(-)?mail/i,
                    I = /^\S+@\S+$/,
                    T = window.alert,
                    b = a.env();
                let O = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
                var h = /list-manage[1-9]?.com/i,
                    v = t.debounce(function() {
                        console.warn("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                    }, 100);

                function _(t, o) {
                    var l = e(o),
                        c = e.data(o, y);
                    c || (c = e.data(o, y, {
                        form: l
                    })), R(c);
                    var f = l.closest("div.w-form");
                    c.done = f.find("> .w-form-done"), c.fail = f.find("> .w-form-fail"), c.fileUploads = f.find(".w-file-upload"), c.fileUploads.each(function(t) {
                        ! function(t, n) {
                            if (n.fileUploads && n.fileUploads[t]) {
                                var a, i = e(n.fileUploads[t]),
                                    o = i.find("> .w-file-upload-default"),
                                    r = i.find("> .w-file-upload-uploading"),
                                    l = i.find("> .w-file-upload-success"),
                                    d = i.find("> .w-file-upload-error"),
                                    c = o.find(".w-file-upload-input"),
                                    s = o.find(".w-file-upload-label"),
                                    f = s.children(),
                                    p = d.find(".w-file-upload-error-msg"),
                                    g = l.find(".w-file-upload-file"),
                                    E = l.find(".w-file-remove-link"),
                                    y = g.find(".w-file-upload-file-name"),
                                    m = p.attr("data-w-size-error"),
                                    I = p.attr("data-w-type-error"),
                                    T = p.attr("data-w-generic-error");
                                if (b || s.on("click keydown", function(e) {
                                        ("keydown" !== e.type || 13 === e.which || 32 === e.which) && (e.preventDefault(), c.click())
                                    }), s.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), E.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), b) c.on("click", function(e) {
                                    e.preventDefault()
                                }), s.on("click", function(e) {
                                    e.preventDefault()
                                }), f.on("click", function(e) {
                                    e.preventDefault()
                                });
                                else {
                                    E.on("click keydown", function(e) {
                                        if ("keydown" === e.type) {
                                            if (13 !== e.which && 32 !== e.which) return;
                                            e.preventDefault()
                                        }
                                        c.removeAttr("data-value"), c.val(""), y.html(""), o.toggle(!0), l.toggle(!1), s.focus()
                                    }), c.on("change", function(i) {
                                        var l, c, s;
                                        (a = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1), d.toggle(!1), r.toggle(!0), r.focus(), y.text(a.name), S() || A(n), n.fileUploads[t].uploading = !0, l = a, c = v, s = new URLSearchParams({
                                            name: l.name,
                                            size: l.size
                                        }), e.ajax({
                                            type: "GET",
                                            url: `${u}?${s}`,
                                            crossDomain: !0
                                        }).done(function(e) {
                                            c(null, e)
                                        }).fail(function(e) {
                                            c(e)
                                        }))
                                    });
                                    var O = s.outerHeight();
                                    c.height(O), c.width(1)
                                }
                            }

                            function h(e) {
                                var a = e.responseJSON && e.responseJSON.msg,
                                    i = T;
                                "string" == typeof a && 0 === a.indexOf("InvalidFileTypeError") ? i = I : "string" == typeof a && 0 === a.indexOf("MaxFileSizeError") && (i = m), p.text(i), c.removeAttr("data-value"), c.val(""), r.toggle(!1), o.toggle(!0), d.toggle(!0), d.focus(), n.fileUploads[t].uploading = !1, S() || R(n)
                            }

                            function v(t, n) {
                                if (t) return h(t);
                                var i = n.fileName,
                                    o = n.postData,
                                    r = n.fileId,
                                    l = n.s3Url;
                                c.attr("data-value", r),
                                    function(t, n, a, i, o) {
                                        var r = new FormData;
                                        for (var l in n) r.append(l, n[l]);
                                        r.append("file", a, i), e.ajax({
                                            type: "POST",
                                            url: t,
                                            data: r,
                                            processData: !1,
                                            contentType: !1
                                        }).done(function() {
                                            o(null)
                                        }).fail(function(e) {
                                            o(e)
                                        })
                                    }(l, o, a, i, _)
                            }

                            function _(e) {
                                if (e) return h(e);
                                r.toggle(!1), l.css("display", "inline-block"), l.focus(), n.fileUploads[t].uploading = !1, S() || R(n)
                            }

                            function S() {
                                return (n.fileUploads && n.fileUploads.toArray() || []).some(function(e) {
                                    return e.uploading
                                })
                            }
                        }(t, c)
                    }), O && (function(e) {
                        let t = e.btn || e.form.find(':input[type="submit"]');
                        e.btn || (e.btn = t), t.prop("disabled", !0), t.addClass("w-form-loading")
                    }(c), S(l, !0), p.on("undefined" != typeof turnstile ? "ready" : r, function() {
                        i(O, o, e => {
                            c.turnstileToken = e, R(c), S(l, !1)
                        }, () => {
                            R(c), c.btn && c.btn.prop("disabled", !0), S(l, !1)
                        })
                    }));
                    var E = c.form.attr("aria-label") || c.form.attr("data-name") || "Form";
                    c.done.attr("aria-label") || c.form.attr("aria-label", E), c.done.attr("tabindex", "-1"), c.done.attr("role", "region"), c.done.attr("aria-label") || c.done.attr("aria-label", E + " success"), c.fail.attr("tabindex", "-1"), c.fail.attr("role", "region"), c.fail.attr("aria-label") || c.fail.attr("aria-label", E + " failure");
                    var m = c.action = l.attr("action");
                    if (c.handler = null, c.redirect = l.attr("data-redirect"), h.test(m)) {
                        c.handler = V;
                        return
                    }
                    if (!m) {
                        if (d) {
                            c.handler = (0, n(6524).default)(R, g, a, C, P, w, T, L, A, d, M, e, s);
                            return
                        }
                        v()
                    }
                }

                function R(e) {
                    var t = e.btn = e.form.find(':input[type="submit"]');
                    e.wait = e.btn.attr("data-wait") || null, e.success = !1;
                    let n = !!(O && !e.turnstileToken);
                    t.prop("disabled", n), t.removeClass("w-form-loading"), e.label && t.val(e.label)
                }

                function A(e) {
                    var t = e.btn,
                        n = e.wait;
                    t.prop("disabled", !0), n && (e.label = t.val(), t.val(n))
                }

                function S(e, t) {
                    let n = e.closest(".w-form");
                    t ? n.addClass("w-form-loading") : n.removeClass("w-form-loading")
                }

                function w(t, n) {
                    var a = null;
                    return n = n || {}, t.find(':input:not([type="submit"]):not([type="file"]):not([type="button"])').each(function(i, o) {
                        var r, l, d, c, s, u = e(o),
                            f = u.attr("type"),
                            p = u.attr("data-name") || u.attr("name") || "Field " + (i + 1);
                        p = encodeURIComponent(p);
                        var g = u.val();
                        if ("checkbox" === f) g = u.is(":checked");
                        else if ("radio" === f) {
                            if (null === n[p] || "string" == typeof n[p]) return;
                            g = t.find('input[name="' + u.attr("name") + '"]:checked').val() || null
                        }
                        "string" == typeof g && (g = e.trim(g)), n[p] = g, a = a || (r = u, l = f, d = p, c = g, s = null, "password" === l ? s = "Passwords cannot be submitted." : r.attr("required") ? c ? m.test(r.attr("type")) && !I.test(c) && (s = "Please enter a valid email address for: " + d) : s = "Please fill out the required field: " + d : "g-recaptcha-response" !== d || c || (s = "Please confirm you're not a robot."), s)
                    }), a
                }

                function L(t) {
                    var n = {};
                    return t.find(':input[type="file"]').each(function(t, a) {
                        var i = e(a),
                            o = i.attr("data-name") || i.attr("name") || "File " + (t + 1),
                            r = i.attr("data-value");
                        "string" == typeof r && (r = e.trim(r)), n[o] = r
                    }), n
                }
                f.ready = f.design = f.preview = function() {
                    O && ((o = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js", document.head.appendChild(o), o.onload = () => {
                        p.trigger(r)
                    }), s = "https://webflow.com/api/v1/form/" + (d = e("html").attr("data-wf-site")), E && s.indexOf("https://webflow.com") >= 0 && (s = s.replace("https://webflow.com", "https://formdata.webflow.com")), u = `${s}/signFile`, (l = e(y + " form")).length && l.each(_), (!b || a.env("preview")) && !c && function() {
                        c = !0, p.on("submit", y + " form", function(t) {
                            var n = e.data(this, y);
                            n.handler && (n.evt = t, n.handler(n))
                        });
                        let t = ".w-checkbox-input",
                            n = ".w-radio-input",
                            a = "w--redirected-checked",
                            i = "w--redirected-focus",
                            o = "w--redirected-focus-visible",
                            r = [
                                ["checkbox", t],
                                ["radio", n]
                            ];
                        p.on("change", y + ' form input[type="checkbox"]:not(' + t + ")", n => {
                            e(n.target).siblings(t).toggleClass(a)
                        }), p.on("change", y + ' form input[type="radio"]', i => {
                            e(`input[name="${i.target.name}"]:not(${t})`).map((t, i) => e(i).siblings(n).removeClass(a));
                            let o = e(i.target);
                            o.hasClass("w-radio-input") || o.siblings(n).addClass(a)
                        }), r.forEach(([t, n]) => {
                            p.on("focus", y + ` form input[type="${t}"]:not(` + n + ")", t => {
                                e(t.target).siblings(n).addClass(i), e(t.target).filter(":focus-visible, [data-wf-focus-visible]").siblings(n).addClass(o)
                            }), p.on("blur", y + ` form input[type="${t}"]:not(` + n + ")", t => {
                                e(t.target).siblings(n).removeClass(`${i} ${o}`)
                            })
                        })
                    }()
                };
                let N = {
                    _mkto_trk: "marketo"
                };

                function C() {
                    return document.cookie.split("; ").reduce(function(e, t) {
                        let n = t.split("="),
                            a = n[0];
                        if (a in N) {
                            let t = N[a],
                                i = n.slice(1).join("=");
                            e[t] = i
                        }
                        return e
                    }, {})
                }

                function V(n) {
                    R(n);
                    var a, i = n.form,
                        o = {};
                    if (/^https/.test(g.href) && !/^https/.test(n.action)) return void i.attr("method", "post");
                    P(n);
                    var r = w(i, o);
                    if (r) return T(r);
                    A(n), t.each(o, function(e, t) {
                        m.test(t) && (o.EMAIL = e), /^((full[ _-]?)?name)$/i.test(t) && (a = e), /^(first[ _-]?name)$/i.test(t) && (o.FNAME = e), /^(last[ _-]?name)$/i.test(t) && (o.LNAME = e)
                    }), a && !o.FNAME && (o.FNAME = (a = a.split(" "))[0], o.LNAME = o.LNAME || a[1]);
                    var l = n.action.replace("/post?", "/post-json?") + "&c=?",
                        d = l.indexOf("u=") + 2;
                    d = l.substring(d, l.indexOf("&", d));
                    var c = l.indexOf("id=") + 3;
                    o["b_" + d + "_" + (c = l.substring(c, l.indexOf("&", c)))] = "", e.ajax({
                        url: l,
                        data: o,
                        dataType: "jsonp"
                    }).done(function(e) {
                        n.success = "success" === e.result || /already/.test(e.msg), n.success || console.info("MailChimp error: " + e.msg), M(n)
                    }).fail(function() {
                        M(n)
                    })
                }

                function M(e) {
                    var t = e.form,
                        n = e.redirect,
                        i = e.success;
                    if (i && n) return void a.location(n);
                    e.done.toggle(i), e.fail.toggle(!i), i ? e.done.focus() : e.fail.focus(), t.toggle(!i), R(e)
                }

                function P(e) {
                    e.evt && e.evt.preventDefault(), e.evt = null
                }
                return f
            })
        },
        1655: function(e, t, n) {
            "use strict";
            var a = n(3949),
                i = n(5134);
            let o = {
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
            a.define("navbar", e.exports = function(e, t) {
                var n, r, l, d, c = {},
                    s = e.tram,
                    u = e(window),
                    f = e(document),
                    p = t.debounce,
                    g = a.env(),
                    E = ".w-nav",
                    y = "w--open",
                    m = "w--nav-dropdown-open",
                    I = "w--nav-dropdown-toggle-open",
                    T = "w--nav-dropdown-list-open",
                    b = "w--nav-link-open",
                    O = i.triggers,
                    h = e();

                function v() {
                    a.resize.off(_)
                }

                function _() {
                    r.each(P)
                }

                function R(n, a) {
                    var i, r, c, s, p, g = e(a),
                        y = e.data(a, E);
                    y || (y = e.data(a, E, {
                        open: !1,
                        el: g,
                        config: {},
                        selectedIdx: -1
                    })), y.menu = g.find(".w-nav-menu"), y.links = y.menu.find(".w-nav-link"), y.dropdowns = y.menu.find(".w-dropdown"), y.dropdownToggle = y.menu.find(".w-dropdown-toggle"), y.dropdownList = y.menu.find(".w-dropdown-list"), y.button = g.find(".w-nav-button"), y.container = g.find(".w-container"), y.overlayContainerId = "w-nav-overlay-" + n, y.outside = ((i = y).outside && f.off("click" + E, i.outside), function(t) {
                        var n = e(t.target);
                        d && n.closest(".w-editor-bem-EditorOverlay").length || M(i, n)
                    });
                    var m = g.find(".w-nav-brand");
                    m && "/" === m.attr("href") && null == m.attr("aria-label") && m.attr("aria-label", "home"), y.button.attr("style", "-webkit-user-select: text;"), null == y.button.attr("aria-label") && y.button.attr("aria-label", "menu"), y.button.attr("role", "button"), y.button.attr("tabindex", "0"), y.button.attr("aria-controls", y.overlayContainerId), y.button.attr("aria-haspopup", "menu"), y.button.attr("aria-expanded", "false"), y.el.off(E), y.button.off(E), y.menu.off(E), w(y), l ? (S(y), y.el.on("setting" + E, (r = y, function(e, n) {
                        n = n || {};
                        var a = u.width();
                        w(r), !0 === n.open && G(r, !0), !1 === n.open && D(r, !0), r.open && t.defer(function() {
                            a !== u.width() && N(r)
                        })
                    }))) : ((c = y).overlay || (c.overlay = e('<div class="w-nav-overlay" data-wf-ignore />').appendTo(c.el), c.overlay.attr("id", c.overlayContainerId), c.parent = c.menu.parent(), D(c, !0)), y.button.on("click" + E, C(y)), y.menu.on("click" + E, "a", V(y)), y.button.on("keydown" + E, (s = y, function(e) {
                        switch (e.keyCode) {
                            case o.SPACE:
                            case o.ENTER:
                                return C(s)(), e.preventDefault(), e.stopPropagation();
                            case o.ESCAPE:
                                return D(s), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                            case o.HOME:
                            case o.END:
                                if (!s.open) return e.preventDefault(), e.stopPropagation();
                                return e.keyCode === o.END ? s.selectedIdx = s.links.length - 1 : s.selectedIdx = 0, L(s), e.preventDefault(), e.stopPropagation()
                        }
                    })), y.el.on("keydown" + E, (p = y, function(e) {
                        if (p.open) switch (p.selectedIdx = p.links.index(document.activeElement), e.keyCode) {
                            case o.HOME:
                            case o.END:
                                return e.keyCode === o.END ? p.selectedIdx = p.links.length - 1 : p.selectedIdx = 0, L(p), e.preventDefault(), e.stopPropagation();
                            case o.ESCAPE:
                                return D(p), p.button.focus(), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                return p.selectedIdx = Math.max(-1, p.selectedIdx - 1), L(p), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                return p.selectedIdx = Math.min(p.links.length - 1, p.selectedIdx + 1), L(p), e.preventDefault(), e.stopPropagation()
                        }
                    }))), P(n, a)
                }

                function A(t, n) {
                    var a = e.data(n, E);
                    a && (S(a), e.removeData(n, E))
                }

                function S(e) {
                    e.overlay && (D(e, !0), e.overlay.remove(), e.overlay = null)
                }

                function w(e) {
                    var n = {},
                        a = e.config || {},
                        i = n.animation = e.el.attr("data-animation") || "default";
                    n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, a.animation !== i && e.open && t.defer(N, e), n.easing = e.el.attr("data-easing") || "ease", n.easing2 = e.el.attr("data-easing2") || "ease";
                    var o = e.el.attr("data-duration");
                    n.duration = null != o ? Number(o) : 400, n.docHeight = e.el.attr("data-doc-height"), e.config = n
                }

                function L(e) {
                    if (e.links[e.selectedIdx]) {
                        var t = e.links[e.selectedIdx];
                        t.focus(), V(t)
                    }
                }

                function N(e) {
                    e.open && (D(e, !0), G(e, !0))
                }

                function C(e) {
                    return p(function() {
                        e.open ? D(e) : G(e)
                    })
                }

                function V(t) {
                    return function(n) {
                        var i = e(this).attr("href");
                        if (!a.validClick(n.currentTarget)) return void n.preventDefault();
                        i && 0 === i.indexOf("#") && t.open && D(t)
                    }
                }
                c.ready = c.design = c.preview = function() {
                    l = g && a.env("design"), d = a.env("editor"), n = e(document.body), (r = f.find(E)).length && (r.each(R), v(), a.resize.on(_))
                }, c.destroy = function() {
                    h = e(), v(), r && r.length && r.each(A)
                };
                var M = p(function(e, t) {
                    if (e.open) {
                        var n = t.closest(".w-nav-menu");
                        e.menu.is(n) || D(e)
                    }
                });

                function P(t, n) {
                    var a = e.data(n, E),
                        i = a.collapsed = "none" !== a.button.css("display");
                    if (!a.open || i || l || D(a, !0), a.container.length) {
                        var o, r = ("none" === (o = a.container.css(F)) && (o = ""), function(t, n) {
                            (n = e(n)).css(F, ""), "none" === n.css(F) && n.css(F, o)
                        });
                        a.links.each(r), a.dropdowns.each(r)
                    }
                    a.open && U(a)
                }
                var F = "max-width";

                function k(e, t) {
                    t.setAttribute("data-nav-menu-open", "")
                }

                function x(e, t) {
                    t.removeAttribute("data-nav-menu-open")
                }

                function G(e, t) {
                    if (!e.open) {
                        e.open = !0, e.menu.each(k), e.links.addClass(b), e.dropdowns.addClass(m), e.dropdownToggle.addClass(I), e.dropdownList.addClass(T), e.button.addClass(y);
                        var n = e.config;
                        ("none" === n.animation || !s.support.transform || n.duration <= 0) && (t = !0);
                        var i = U(e),
                            o = e.menu.outerHeight(!0),
                            r = e.menu.outerWidth(!0),
                            d = e.el.height(),
                            c = e.el[0];
                        if (P(0, c), O.intro(0, c), a.redraw.up(), l || f.on("click" + E, e.outside), t) return void p();
                        var u = "transform " + n.duration + "ms " + n.easing;
                        if (e.overlay && (h = e.menu.prev(), e.overlay.show().append(e.menu)), n.animOver) {
                            s(e.menu).add(u).set({
                                x: n.animDirect * r,
                                height: i
                            }).start({
                                x: 0
                            }).then(p), e.overlay && e.overlay.width(r);
                            return
                        }
                        s(e.menu).add(u).set({
                            y: -(d + o)
                        }).start({
                            y: 0
                        }).then(p)
                    }

                    function p() {
                        e.button.attr("aria-expanded", "true")
                    }
                }

                function U(e) {
                    var t = e.config,
                        a = t.docHeight ? f.height() : n.height();
                    return t.animOver ? e.menu.height(a) : "fixed" !== e.el.css("position") && (a -= e.el.outerHeight(!0)), e.overlay && e.overlay.height(a), a
                }

                function D(e, t) {
                    if (e.open) {
                        e.open = !1, e.button.removeClass(y);
                        var n = e.config;
                        if (("none" === n.animation || !s.support.transform || n.duration <= 0) && (t = !0), O.outro(0, e.el[0]), f.off("click" + E, e.outside), t) {
                            s(e.menu).stop(), l();
                            return
                        }
                        var a = "transform " + n.duration + "ms " + n.easing2,
                            i = e.menu.outerHeight(!0),
                            o = e.menu.outerWidth(!0),
                            r = e.el.height();
                        if (n.animOver) return void s(e.menu).add(a).start({
                            x: o * n.animDirect
                        }).then(l);
                        s(e.menu).add(a).start({
                            y: -(r + i)
                        }).then(l)
                    }

                    function l() {
                        e.menu.height(""), s(e.menu).set({
                            x: 0,
                            y: 0
                        }), e.menu.each(x), e.links.removeClass(b), e.dropdowns.removeClass(m), e.dropdownToggle.removeClass(I), e.dropdownList.removeClass(T), e.overlay && e.overlay.children().length && (h.length ? e.menu.insertAfter(h) : e.menu.prependTo(e.parent), e.overlay.attr("style", "").hide()), e.el.triggerHandler("w-close"), e.button.attr("aria-expanded", "false")
                    }
                }
                return c
            })
        },
        3946: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                actionListPlaybackChanged: function() {
                    return Y
                },
                animationFrameChanged: function() {
                    return U
                },
                clearRequested: function() {
                    return F
                },
                elementStateChanged: function() {
                    return W
                },
                eventListenerAdded: function() {
                    return k
                },
                eventStateChanged: function() {
                    return G
                },
                instanceAdded: function() {
                    return B
                },
                instanceRemoved: function() {
                    return j
                },
                instanceStarted: function() {
                    return X
                },
                mediaQueriesDefined: function() {
                    return z
                },
                parameterChanged: function() {
                    return D
                },
                playbackRequested: function() {
                    return M
                },
                previewRequested: function() {
                    return V
                },
                rawDataImported: function() {
                    return w
                },
                sessionInitialized: function() {
                    return L
                },
                sessionStarted: function() {
                    return N
                },
                sessionStopped: function() {
                    return C
                },
                stopRequested: function() {
                    return P
                },
                testFrameRendered: function() {
                    return x
                },
                viewportWidthChanged: function() {
                    return Q
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(7087),
                r = n(9468),
                {
                    IX2_RAW_DATA_IMPORTED: l,
                    IX2_SESSION_INITIALIZED: d,
                    IX2_SESSION_STARTED: c,
                    IX2_SESSION_STOPPED: s,
                    IX2_PREVIEW_REQUESTED: u,
                    IX2_PLAYBACK_REQUESTED: f,
                    IX2_STOP_REQUESTED: p,
                    IX2_CLEAR_REQUESTED: g,
                    IX2_EVENT_LISTENER_ADDED: E,
                    IX2_TEST_FRAME_RENDERED: y,
                    IX2_EVENT_STATE_CHANGED: m,
                    IX2_ANIMATION_FRAME_CHANGED: I,
                    IX2_PARAMETER_CHANGED: T,
                    IX2_INSTANCE_ADDED: b,
                    IX2_INSTANCE_STARTED: O,
                    IX2_INSTANCE_REMOVED: h,
                    IX2_ELEMENT_STATE_CHANGED: v,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
                    IX2_VIEWPORT_WIDTH_CHANGED: R,
                    IX2_MEDIA_QUERIES_DEFINED: A
                } = o.IX2EngineActionTypes,
                {
                    reifyState: S
                } = r.IX2VanillaUtils,
                w = e => ({
                    type: l,
                    payload: { ...S(e)
                    }
                }),
                L = ({
                    hasBoundaryNodes: e,
                    reducedMotion: t
                }) => ({
                    type: d,
                    payload: {
                        hasBoundaryNodes: e,
                        reducedMotion: t
                    }
                }),
                N = () => ({
                    type: c
                }),
                C = () => ({
                    type: s
                }),
                V = ({
                    rawData: e,
                    defer: t
                }) => ({
                    type: u,
                    payload: {
                        defer: t,
                        rawData: e
                    }
                }),
                M = ({
                    actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
                    actionListId: t,
                    actionItemId: n,
                    eventId: a,
                    allowEvents: i,
                    immediate: r,
                    testManual: l,
                    verbose: d,
                    rawData: c
                }) => ({
                    type: f,
                    payload: {
                        actionTypeId: e,
                        actionListId: t,
                        actionItemId: n,
                        testManual: l,
                        eventId: a,
                        allowEvents: i,
                        immediate: r,
                        verbose: d,
                        rawData: c
                    }
                }),
                P = e => ({
                    type: p,
                    payload: {
                        actionListId: e
                    }
                }),
                F = () => ({
                    type: g
                }),
                k = (e, t) => ({
                    type: E,
                    payload: {
                        target: e,
                        listenerParams: t
                    }
                }),
                x = (e = 1) => ({
                    type: y,
                    payload: {
                        step: e
                    }
                }),
                G = (e, t) => ({
                    type: m,
                    payload: {
                        stateKey: e,
                        newState: t
                    }
                }),
                U = (e, t) => ({
                    type: I,
                    payload: {
                        now: e,
                        parameters: t
                    }
                }),
                D = (e, t) => ({
                    type: T,
                    payload: {
                        key: e,
                        value: t
                    }
                }),
                B = e => ({
                    type: b,
                    payload: { ...e
                    }
                }),
                X = (e, t) => ({
                    type: O,
                    payload: {
                        instanceId: e,
                        time: t
                    }
                }),
                j = e => ({
                    type: h,
                    payload: {
                        instanceId: e
                    }
                }),
                W = (e, t, n, a) => ({
                    type: v,
                    payload: {
                        elementId: e,
                        actionTypeId: t,
                        current: n,
                        actionItem: a
                    }
                }),
                Y = ({
                    actionListId: e,
                    isPlaying: t
                }) => ({
                    type: _,
                    payload: {
                        actionListId: e,
                        isPlaying: t
                    }
                }),
                Q = ({
                    width: e,
                    mediaQueries: t
                }) => ({
                    type: R,
                    payload: {
                        width: e,
                        mediaQueries: t
                    }
                }),
                z = () => ({
                    type: A
                })
        },
        6011: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = {
                actions: function() {
                    return c
                },
                destroy: function() {
                    return g
                },
                init: function() {
                    return p
                },
                setEnv: function() {
                    return f
                },
                store: function() {
                    return u
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let r = n(9516),
                l = (a = n(7243)) && a.__esModule ? a : {
                    default: a
                },
                d = n(1970),
                c = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(3946));

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (s = function(e) {
                    return e ? n : t
                })(e)
            }
            let u = (0, r.createStore)(l.default);

            function f(e) {
                e() && (0, d.observeRequests)(u)
            }

            function p(e) {
                g(), (0, d.startEngine)({
                    store: u,
                    rawData: e,
                    allowEvents: !0
                })
            }

            function g() {
                (0, d.stopEngine)(u)
            }
        },
        5012: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                elementContains: function() {
                    return T
                },
                getChildElements: function() {
                    return O
                },
                getClosestElement: function() {
                    return v
                },
                getProperty: function() {
                    return g
                },
                getQuerySelector: function() {
                    return y
                },
                getRefType: function() {
                    return _
                },
                getSiblingElements: function() {
                    return h
                },
                getStyle: function() {
                    return p
                },
                getValidDocument: function() {
                    return m
                },
                isSiblingNode: function() {
                    return b
                },
                matchSelector: function() {
                    return E
                },
                queryDocument: function() {
                    return I
                },
                setStyle: function() {
                    return f
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(9468),
                r = n(7087),
                {
                    ELEMENT_MATCHES: l
                } = o.IX2BrowserSupport,
                {
                    IX2_ID_DELIMITER: d,
                    HTML_ELEMENT: c,
                    PLAIN_OBJECT: s,
                    WF_PAGE: u
                } = r.IX2EngineConstants;

            function f(e, t, n) {
                e.style[t] = n
            }

            function p(e, t) {
                return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style instanceof CSSStyleDeclaration ? e.style[t] : void 0
            }

            function g(e, t) {
                return e[t]
            }

            function E(e) {
                return t => t[l](e)
            }

            function y({
                id: e,
                selector: t
            }) {
                if (e) {
                    let t = e;
                    if (-1 !== e.indexOf(d)) {
                        let n = e.split(d),
                            a = n[0];
                        if (t = n[1], a !== document.documentElement.getAttribute(u)) return null
                    }
                    return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
                }
                return t
            }

            function m(e) {
                return null == e || e === document.documentElement.getAttribute(u) ? document : null
            }

            function I(e, t) {
                return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
            }

            function T(e, t) {
                return e.contains(t)
            }

            function b(e, t) {
                return e !== t && e.parentNode === t.parentNode
            }

            function O(e) {
                let t = [];
                for (let n = 0, {
                        length: a
                    } = e || []; n < a; n++) {
                    let {
                        children: a
                    } = e[n], {
                        length: i
                    } = a;
                    if (i)
                        for (let e = 0; e < i; e++) t.push(a[e])
                }
                return t
            }

            function h(e = []) {
                let t = [],
                    n = [];
                for (let a = 0, {
                        length: i
                    } = e; a < i; a++) {
                    let {
                        parentNode: i
                    } = e[a];
                    if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i)) continue;
                    n.push(i);
                    let o = i.firstElementChild;
                    for (; null != o;) - 1 === e.indexOf(o) && t.push(o), o = o.nextElementSibling
                }
                return t
            }
            let v = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
                if (!document.documentElement.contains(e)) return null;
                let n = e;
                do {
                    if (n[l] && n[l](t)) return n;
                    n = n.parentNode
                } while (null != n);
                return null
            };

            function _(e) {
                return null != e && "object" == typeof e ? e instanceof Element ? c : s : null
            }
        },
        1970: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                observeRequests: function() {
                    return q
                },
                startActionGroup: function() {
                    return eg
                },
                startEngine: function() {
                    return ea
                },
                stopActionGroup: function() {
                    return ep
                },
                stopAllActionGroups: function() {
                    return ef
                },
                stopEngine: function() {
                    return ei
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = I(n(9777)),
                r = I(n(4738)),
                l = I(n(4659)),
                d = I(n(3452)),
                c = I(n(6633)),
                s = I(n(3729)),
                u = I(n(2397)),
                f = I(n(5082)),
                p = n(7087),
                g = n(9468),
                E = n(3946),
                y = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = T(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(5012)),
                m = I(n(8955));

            function I(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function T(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (T = function(e) {
                    return e ? n : t
                })(e)
            }
            let b = Object.keys(p.QuickEffectIds),
                O = e => b.includes(e),
                {
                    COLON_DELIMITER: h,
                    BOUNDARY_SELECTOR: v,
                    HTML_ELEMENT: _,
                    RENDER_GENERAL: R,
                    W_MOD_IX: A
                } = p.IX2EngineConstants,
                {
                    getAffectedElements: S,
                    getElementId: w,
                    getDestinationValues: L,
                    observeStore: N,
                    getInstanceId: C,
                    renderHTMLElement: V,
                    clearAllStyles: M,
                    getMaxDurationItemIndex: P,
                    getComputedStyle: F,
                    getInstanceOrigin: k,
                    reduceListToGroup: x,
                    shouldNamespaceEventParameter: G,
                    getNamespacedParameterId: U,
                    shouldAllowMediaQuery: D,
                    cleanupHTMLElement: B,
                    clearObjectCache: X,
                    stringifyTarget: j,
                    mediaQueriesEqual: W,
                    shallowEqual: Y
                } = g.IX2VanillaUtils,
                {
                    isPluginType: Q,
                    createPluginInstance: z,
                    getPluginDuration: H
                } = g.IX2VanillaPlugins,
                $ = navigator.userAgent,
                K = $.match(/iPad/i) || $.match(/iPhone/);

            function q(e) {
                N({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.preview,
                    onChange: Z
                }), N({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.playback,
                    onChange: ee
                }), N({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.stop,
                    onChange: et
                }), N({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.clear,
                    onChange: en
                })
            }

            function Z({
                rawData: e,
                defer: t
            }, n) {
                let a = () => {
                    ea({
                        store: n,
                        rawData: e,
                        allowEvents: !0
                    }), J()
                };
                t ? setTimeout(a, 0) : a()
            }

            function J() {
                document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
            }

            function ee(e, t) {
                let {
                    actionTypeId: n,
                    actionListId: a,
                    actionItemId: i,
                    eventId: o,
                    allowEvents: r,
                    immediate: l,
                    testManual: d,
                    verbose: c = !0
                } = e, {
                    rawData: s
                } = e;
                if (a && i && s && l) {
                    let e = s.actionLists[a];
                    e && (s = x({
                        actionList: e,
                        actionItemId: i,
                        rawData: s
                    }))
                }
                if (ea({
                        store: t,
                        rawData: s,
                        allowEvents: r,
                        testManual: d
                    }), a && n === p.ActionTypeConsts.GENERAL_START_ACTION || O(n)) {
                    ep({
                        store: t,
                        actionListId: a
                    }), eu({
                        store: t,
                        actionListId: a,
                        eventId: o
                    });
                    let e = eg({
                        store: t,
                        eventId: o,
                        actionListId: a,
                        immediate: l,
                        verbose: c
                    });
                    c && e && t.dispatch((0, E.actionListPlaybackChanged)({
                        actionListId: a,
                        isPlaying: !l
                    }))
                }
            }

            function et({
                actionListId: e
            }, t) {
                e ? ep({
                    store: t,
                    actionListId: e
                }) : ef({
                    store: t
                }), ei(t)
            }

            function en(e, t) {
                ei(t), M({
                    store: t,
                    elementApi: y
                })
            }

            function ea({
                store: e,
                rawData: t,
                allowEvents: n,
                testManual: a
            }) {
                let {
                    ixSession: i
                } = e.getState();
                if (t && e.dispatch((0, E.rawDataImported)(t)), !i.active) {
                    (e.dispatch((0, E.sessionInitialized)({
                        hasBoundaryNodes: !!document.querySelector(v),
                        reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
                    })), n) && (function(e) {
                        let {
                            ixData: t
                        } = e.getState(), {
                            eventTypeMap: n
                        } = t;
                        el(e), (0, u.default)(n, (t, n) => {
                            let a = m.default[n];
                            if (!a) return void console.warn(`IX2 event type not configured: ${n}`);
                            ! function({
                                logic: e,
                                store: t,
                                events: n
                            }) {
                                ! function(e) {
                                    if (!K) return;
                                    let t = {},
                                        n = "";
                                    for (let a in e) {
                                        let {
                                            eventTypeId: i,
                                            target: o
                                        } = e[a], r = y.getQuerySelector(o);
                                        t[r] || (i === p.EventTypeConsts.MOUSE_CLICK || i === p.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[r] = !0, n += r + "{cursor: pointer;touch-action: manipulation;}")
                                    }
                                    if (n) {
                                        let e = document.createElement("style");
                                        e.textContent = n, document.body.appendChild(e)
                                    }
                                }(n);
                                let {
                                    types: a,
                                    handler: i
                                } = e, {
                                    ixData: d
                                } = t.getState(), {
                                    actionLists: c
                                } = d, s = ed(n, es);
                                if (!(0, l.default)(s)) return;
                                (0, u.default)(s, (e, a) => {
                                    let i = n[a],
                                        {
                                            action: l,
                                            id: s,
                                            mediaQueries: u = d.mediaQueryKeys
                                        } = i,
                                        {
                                            actionListId: f
                                        } = l.config;
                                    W(u, d.mediaQueryKeys) || t.dispatch((0, E.mediaQueriesDefined)()), l.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(i.config) ? i.config : [i.config]).forEach(n => {
                                        let {
                                            continuousParameterGroupId: a
                                        } = n, i = (0, r.default)(c, `${f}.continuousParameterGroups`, []), l = (0, o.default)(i, ({
                                            id: e
                                        }) => e === a), d = (n.smoothing || 0) / 100, u = (n.restingState || 0) / 100;
                                        l && e.forEach((e, a) => {
                                            ! function({
                                                store: e,
                                                eventStateKey: t,
                                                eventTarget: n,
                                                eventId: a,
                                                eventConfig: i,
                                                actionListId: o,
                                                parameterGroup: l,
                                                smoothing: d,
                                                restingValue: c
                                            }) {
                                                let {
                                                    ixData: s,
                                                    ixSession: u
                                                } = e.getState(), {
                                                    events: f
                                                } = s, g = f[a], {
                                                    eventTypeId: E
                                                } = g, m = {}, I = {}, T = [], {
                                                    continuousActionGroups: b
                                                } = l, {
                                                    id: O
                                                } = l;
                                                G(E, i) && (O = U(t, O));
                                                let _ = u.hasBoundaryNodes && n ? y.getClosestElement(n, v) : null;
                                                b.forEach(e => {
                                                    let {
                                                        keyframe: t,
                                                        actionItems: a
                                                    } = e;
                                                    a.forEach(e => {
                                                        let {
                                                            actionTypeId: a
                                                        } = e, {
                                                            target: i
                                                        } = e.config;
                                                        if (!i) return;
                                                        let o = i.boundaryMode ? _ : null,
                                                            r = j(i) + h + a;
                                                        if (I[r] = function(e = [], t, n) {
                                                                let a, i = [...e];
                                                                return i.some((e, n) => e.keyframe === t && (a = n, !0)), null == a && (a = i.length, i.push({
                                                                    keyframe: t,
                                                                    actionItems: []
                                                                })), i[a].actionItems.push(n), i
                                                            }(I[r], t, e), !m[r]) {
                                                            m[r] = !0;
                                                            let {
                                                                config: t
                                                            } = e;
                                                            S({
                                                                config: t,
                                                                event: g,
                                                                eventTarget: n,
                                                                elementRoot: o,
                                                                elementApi: y
                                                            }).forEach(e => {
                                                                T.push({
                                                                    element: e,
                                                                    key: r
                                                                })
                                                            })
                                                        }
                                                    })
                                                }), T.forEach(({
                                                    element: t,
                                                    key: n
                                                }) => {
                                                    let i = I[n],
                                                        l = (0, r.default)(i, "[0].actionItems[0]", {}),
                                                        {
                                                            actionTypeId: s
                                                        } = l,
                                                        u = (s === p.ActionTypeConsts.PLUGIN_RIVE ? 0 === (l.config ? .target ? .selectorGuids || []).length : Q(s)) ? z(s) ? .(t, l) : null,
                                                        f = L({
                                                            element: t,
                                                            actionItem: l,
                                                            elementApi: y
                                                        }, u);
                                                    eE({
                                                        store: e,
                                                        element: t,
                                                        eventId: a,
                                                        actionListId: o,
                                                        actionItem: l,
                                                        destination: f,
                                                        continuous: !0,
                                                        parameterId: O,
                                                        actionGroups: i,
                                                        smoothing: d,
                                                        restingValue: c,
                                                        pluginInstance: u
                                                    })
                                                })
                                            }({
                                                store: t,
                                                eventStateKey: s + h + a,
                                                eventTarget: e,
                                                eventId: s,
                                                eventConfig: n,
                                                actionListId: f,
                                                parameterGroup: l,
                                                smoothing: d,
                                                restingValue: u
                                            })
                                        })
                                    }), (l.actionTypeId === p.ActionTypeConsts.GENERAL_START_ACTION || O(l.actionTypeId)) && eu({
                                        store: t,
                                        actionListId: f,
                                        eventId: s
                                    })
                                });
                                let g = e => {
                                        let {
                                            ixSession: a
                                        } = t.getState();
                                        ec(s, (o, r, l) => {
                                            let c = n[r],
                                                s = a.eventState[l],
                                                {
                                                    action: u,
                                                    mediaQueries: f = d.mediaQueryKeys
                                                } = c;
                                            if (!D(f, a.mediaQueryKey)) return;
                                            let g = (n = {}) => {
                                                let a = i({
                                                    store: t,
                                                    element: o,
                                                    event: c,
                                                    eventConfig: n,
                                                    nativeEvent: e,
                                                    eventStateKey: l
                                                }, s);
                                                Y(a, s) || t.dispatch((0, E.eventStateChanged)(l, a))
                                            };
                                            u.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(c.config) ? c.config : [c.config]).forEach(g) : g()
                                        })
                                    },
                                    m = (0, f.default)(g, 12),
                                    I = ({
                                        target: e = document,
                                        types: n,
                                        throttle: a
                                    }) => {
                                        n.split(" ").filter(Boolean).forEach(n => {
                                            let i = a ? m : g;
                                            e.addEventListener(n, i), t.dispatch((0, E.eventListenerAdded)(e, [n, i]))
                                        })
                                    };
                                Array.isArray(a) ? a.forEach(I) : "string" == typeof a && I(e)
                            }({
                                logic: a,
                                store: e,
                                events: t
                            })
                        });
                        let {
                            ixSession: a
                        } = e.getState();
                        a.eventListeners.length && function(e) {
                            let t = () => {
                                el(e)
                            };
                            er.forEach(n => {
                                window.addEventListener(n, t), e.dispatch((0, E.eventListenerAdded)(window, [n, t]))
                            }), t()
                        }(e)
                    }(e), function() {
                        let {
                            documentElement: e
                        } = document; - 1 === e.className.indexOf(A) && (e.className += ` ${A}`)
                    }(), e.getState().ixSession.hasDefinedMediaQueries && N({
                        store: e,
                        select: ({
                            ixSession: e
                        }) => e.mediaQueryKey,
                        onChange: () => {
                            ei(e), M({
                                store: e,
                                elementApi: y
                            }), ea({
                                store: e,
                                allowEvents: !0
                            }), J()
                        }
                    }));
                    e.dispatch((0, E.sessionStarted)()),
                        function(e, t) {
                            let n = a => {
                                let {
                                    ixSession: i,
                                    ixParameters: o
                                } = e.getState();
                                if (i.active)
                                    if (e.dispatch((0, E.animationFrameChanged)(a, o)), t) {
                                        let t = N({
                                            store: e,
                                            select: ({
                                                ixSession: e
                                            }) => e.tick,
                                            onChange: e => {
                                                n(e), t()
                                            }
                                        })
                                    } else requestAnimationFrame(n)
                            };
                            n(window.performance.now())
                        }(e, a)
                }
            }

            function ei(e) {
                let {
                    ixSession: t
                } = e.getState();
                if (t.active) {
                    let {
                        eventListeners: n
                    } = t;
                    n.forEach(eo), X(), e.dispatch((0, E.sessionStopped)())
                }
            }

            function eo({
                target: e,
                listenerParams: t
            }) {
                e.removeEventListener.apply(e, t)
            }
            let er = ["resize", "orientationchange"];

            function el(e) {
                let {
                    ixSession: t,
                    ixData: n
                } = e.getState(), a = window.innerWidth;
                if (a !== t.viewportWidth) {
                    let {
                        mediaQueries: t
                    } = n;
                    e.dispatch((0, E.viewportWidthChanged)({
                        width: a,
                        mediaQueries: t
                    }))
                }
            }
            let ed = (e, t) => (0, d.default)((0, s.default)(e, t), c.default),
                ec = (e, t) => {
                    (0, u.default)(e, (e, n) => {
                        e.forEach((e, a) => {
                            t(e, n, n + h + a)
                        })
                    })
                },
                es = e => S({
                    config: {
                        target: e.target,
                        targets: e.targets
                    },
                    elementApi: y
                });

            function eu({
                store: e,
                actionListId: t,
                eventId: n
            }) {
                let {
                    ixData: a,
                    ixSession: i
                } = e.getState(), {
                    actionLists: o,
                    events: l
                } = a, d = l[n], c = o[t];
                if (c && c.useFirstGroupAsInitialState) {
                    let o = (0, r.default)(c, "actionItemGroups[0].actionItems", []);
                    if (!D((0, r.default)(d, "mediaQueries", a.mediaQueryKeys), i.mediaQueryKey)) return;
                    o.forEach(a => {
                        let {
                            config: i,
                            actionTypeId: o
                        } = a, r = S({
                            config: i ? .target ? .useEventTarget === !0 && i ? .target ? .objectId == null ? {
                                target: d.target,
                                targets: d.targets
                            } : i,
                            event: d,
                            elementApi: y
                        }), l = Q(o);
                        r.forEach(i => {
                            let r = l ? z(o) ? .(i, a) : null;
                            eE({
                                destination: L({
                                    element: i,
                                    actionItem: a,
                                    elementApi: y
                                }, r),
                                immediate: !0,
                                store: e,
                                element: i,
                                eventId: n,
                                actionItem: a,
                                actionListId: t,
                                pluginInstance: r
                            })
                        })
                    })
                }
            }

            function ef({
                store: e
            }) {
                let {
                    ixInstances: t
                } = e.getState();
                (0, u.default)(t, t => {
                    if (!t.continuous) {
                        let {
                            actionListId: n,
                            verbose: a
                        } = t;
                        ey(t, e), a && e.dispatch((0, E.actionListPlaybackChanged)({
                            actionListId: n,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function ep({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: a,
                actionListId: i
            }) {
                let {
                    ixInstances: o,
                    ixSession: l
                } = e.getState(), d = l.hasBoundaryNodes && n ? y.getClosestElement(n, v) : null;
                (0, u.default)(o, n => {
                    let o = (0, r.default)(n, "actionItem.config.target.boundaryMode"),
                        l = !a || n.eventStateKey === a;
                    if (n.actionListId === i && n.eventId === t && l) {
                        if (d && o && !y.elementContains(d, n.element)) return;
                        ey(n, e), n.verbose && e.dispatch((0, E.actionListPlaybackChanged)({
                            actionListId: i,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function eg({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: a,
                actionListId: i,
                groupIndex: o = 0,
                immediate: l,
                verbose: d
            }) {
                let {
                    ixData: c,
                    ixSession: s
                } = e.getState(), {
                    events: u
                } = c, f = u[t] || {}, {
                    mediaQueries: p = c.mediaQueryKeys
                } = f, {
                    actionItemGroups: g,
                    useFirstGroupAsInitialState: E
                } = (0, r.default)(c, `actionLists.${i}`, {});
                if (!g || !g.length) return !1;
                o >= g.length && (0, r.default)(f, "config.loop") && (o = 0), 0 === o && E && o++;
                let m = (0 === o || 1 === o && E) && O(f.action ? .actionTypeId) ? f.config.delay : void 0,
                    I = (0, r.default)(g, [o, "actionItems"], []);
                if (!I.length || !D(p, s.mediaQueryKey)) return !1;
                let T = s.hasBoundaryNodes && n ? y.getClosestElement(n, v) : null,
                    b = P(I),
                    h = !1;
                return I.forEach((r, c) => {
                    let {
                        config: s,
                        actionTypeId: u
                    } = r, p = Q(u), {
                        target: g
                    } = s;
                    g && S({
                        config: s,
                        event: f,
                        eventTarget: n,
                        elementRoot: g.boundaryMode ? T : null,
                        elementApi: y
                    }).forEach((s, f) => {
                        let g = p ? z(u) ? .(s, r) : null,
                            E = p ? H(u)(s, r) : null;
                        h = !0;
                        let I = F({
                                element: s,
                                actionItem: r
                            }),
                            T = L({
                                element: s,
                                actionItem: r,
                                elementApi: y
                            }, g);
                        eE({
                            store: e,
                            element: s,
                            actionItem: r,
                            eventId: t,
                            eventTarget: n,
                            eventStateKey: a,
                            actionListId: i,
                            groupIndex: o,
                            isCarrier: b === c && 0 === f,
                            computedStyle: I,
                            destination: T,
                            immediate: l,
                            verbose: d,
                            pluginInstance: g,
                            pluginDuration: E,
                            instanceDelay: m
                        })
                    })
                }), h
            }

            function eE(e) {
                let t, {
                        store: n,
                        computedStyle: a,
                        ...i
                    } = e,
                    {
                        element: o,
                        actionItem: r,
                        immediate: l,
                        pluginInstance: d,
                        continuous: c,
                        restingValue: s,
                        eventId: u
                    } = i,
                    f = C(),
                    {
                        ixElements: g,
                        ixSession: m,
                        ixData: I
                    } = n.getState(),
                    T = w(g, o),
                    {
                        refState: b
                    } = g[T] || {},
                    O = y.getRefType(o),
                    h = m.reducedMotion && p.ReducedMotionTypes[r.actionTypeId];
                if (h && c) switch (I.events[u] ? .eventTypeId) {
                    case p.EventTypeConsts.MOUSE_MOVE:
                    case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                        t = s;
                        break;
                    default:
                        t = .5
                }
                let v = k(o, b, a, r, y, d);
                if (n.dispatch((0, E.instanceAdded)({
                        instanceId: f,
                        elementId: T,
                        origin: v,
                        refType: O,
                        skipMotion: h,
                        skipToValue: t,
                        ...i
                    })), em(document.body, "ix2-animation-started", f), l) return void
                function(e, t) {
                    let {
                        ixParameters: n
                    } = e.getState();
                    e.dispatch((0, E.instanceStarted)(t, 0)), e.dispatch((0, E.animationFrameChanged)(performance.now(), n));
                    let {
                        ixInstances: a
                    } = e.getState();
                    eI(a[t], e)
                }(n, f);
                N({
                    store: n,
                    select: ({
                        ixInstances: e
                    }) => e[f],
                    onChange: eI
                }), c || n.dispatch((0, E.instanceStarted)(f, m.tick))
            }

            function ey(e, t) {
                em(document.body, "ix2-animation-stopping", {
                    instanceId: e.id,
                    state: t.getState()
                });
                let {
                    elementId: n,
                    actionItem: a
                } = e, {
                    ixElements: i
                } = t.getState(), {
                    ref: o,
                    refType: r
                } = i[n] || {};
                r === _ && B(o, a, y), t.dispatch((0, E.instanceRemoved)(e.id))
            }

            function em(e, t, n) {
                let a = document.createEvent("CustomEvent");
                a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a)
            }

            function eI(e, t) {
                let {
                    active: n,
                    continuous: a,
                    complete: i,
                    elementId: o,
                    actionItem: r,
                    actionTypeId: l,
                    renderType: d,
                    current: c,
                    groupIndex: s,
                    eventId: u,
                    eventTarget: f,
                    eventStateKey: p,
                    actionListId: g,
                    isCarrier: m,
                    styleProp: I,
                    verbose: T,
                    pluginInstance: b
                } = e, {
                    ixData: O,
                    ixSession: h
                } = t.getState(), {
                    events: v
                } = O, {
                    mediaQueries: A = O.mediaQueryKeys
                } = v && v[u] ? v[u] : {};
                if (D(A, h.mediaQueryKey) && (a || n || i)) {
                    if (c || d === R && i) {
                        t.dispatch((0, E.elementStateChanged)(o, l, c, r));
                        let {
                            ixElements: e
                        } = t.getState(), {
                            ref: n,
                            refType: a,
                            refState: i
                        } = e[o] || {}, s = i && i[l];
                        (a === _ || Q(l)) && V(n, i, s, u, r, I, y, d, b)
                    }
                    if (i) {
                        if (m) {
                            let e = eg({
                                store: t,
                                eventId: u,
                                eventTarget: f,
                                eventStateKey: p,
                                actionListId: g,
                                groupIndex: s + 1,
                                verbose: T
                            });
                            T && !e && t.dispatch((0, E.actionListPlaybackChanged)({
                                actionListId: g,
                                isPlaying: !1
                            }))
                        }
                        ey(e, t)
                    }
                }
            }
        },
        8955: function(e, t, n) {
            "use strict";
            let a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return ep
                }
            });
            let i = u(n(5801)),
                o = u(n(4738)),
                r = u(n(3789)),
                l = n(7087),
                d = n(1970),
                c = n(3946),
                s = n(9468);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                MOUSE_CLICK: f,
                MOUSE_SECOND_CLICK: p,
                MOUSE_DOWN: g,
                MOUSE_UP: E,
                MOUSE_OVER: y,
                MOUSE_OUT: m,
                DROPDOWN_CLOSE: I,
                DROPDOWN_OPEN: T,
                SLIDER_ACTIVE: b,
                SLIDER_INACTIVE: O,
                TAB_ACTIVE: h,
                TAB_INACTIVE: v,
                NAVBAR_CLOSE: _,
                NAVBAR_OPEN: R,
                MOUSE_MOVE: A,
                PAGE_SCROLL_DOWN: S,
                SCROLL_INTO_VIEW: w,
                SCROLL_OUT_OF_VIEW: L,
                PAGE_SCROLL_UP: N,
                SCROLLING_IN_VIEW: C,
                PAGE_FINISH: V,
                ECOMMERCE_CART_CLOSE: M,
                ECOMMERCE_CART_OPEN: P,
                PAGE_START: F,
                PAGE_SCROLL: k
            } = l.EventTypeConsts, x = "COMPONENT_ACTIVE", G = "COMPONENT_INACTIVE", {
                COLON_DELIMITER: U
            } = l.IX2EngineConstants, {
                getNamespacedParameterId: D
            } = s.IX2VanillaUtils, B = e => t => !!("object" == typeof t && e(t)) || t, X = B(({
                element: e,
                nativeEvent: t
            }) => e === t.target), j = B(({
                element: e,
                nativeEvent: t
            }) => e.contains(t.target)), W = (0, i.default)([X, j]), Y = (e, t) => {
                if (t) {
                    let {
                        ixData: n
                    } = e.getState(), {
                        events: a
                    } = n, i = a[t];
                    if (i && !ee[i.eventTypeId]) return i
                }
                return null
            }, Q = ({
                store: e,
                event: t
            }) => {
                let {
                    action: n
                } = t, {
                    autoStopEventId: a
                } = n.config;
                return !!Y(e, a)
            }, z = ({
                store: e,
                event: t,
                element: n,
                eventStateKey: a
            }, i) => {
                let {
                    action: r,
                    id: l
                } = t, {
                    actionListId: c,
                    autoStopEventId: s
                } = r.config, u = Y(e, s);
                return u && (0, d.stopActionGroup)({
                    store: e,
                    eventId: s,
                    eventTarget: n,
                    eventStateKey: s + U + a.split(U)[1],
                    actionListId: (0, o.default)(u, "action.config.actionListId")
                }), (0, d.stopActionGroup)({
                    store: e,
                    eventId: l,
                    eventTarget: n,
                    eventStateKey: a,
                    actionListId: c
                }), (0, d.startActionGroup)({
                    store: e,
                    eventId: l,
                    eventTarget: n,
                    eventStateKey: a,
                    actionListId: c
                }), i
            }, H = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a, $ = {
                handler: H(W, z)
            }, K = { ...$,
                types: [x, G].join(" ")
            }, q = [{
                target: window,
                types: "resize orientationchange",
                throttle: !0
            }, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }], Z = "mouseover mouseout", J = {
                types: q
            }, ee = {
                PAGE_START: F,
                PAGE_FINISH: V
            }, et = (() => {
                let e = void 0 !== window.pageXOffset,
                    t = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : t.scrollLeft,
                    scrollTop: e ? window.pageYOffset : t.scrollTop,
                    stiffScrollTop: (0, r.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
                    scrollWidth: t.scrollWidth,
                    scrollHeight: t.scrollHeight,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(), en = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), ea = ({
                element: e,
                nativeEvent: t
            }) => {
                let {
                    type: n,
                    target: a,
                    relatedTarget: i
                } = t, o = e.contains(a);
                if ("mouseover" === n && o) return !0;
                let r = e.contains(i);
                return "mouseout" === n && !!o && !!r
            }, ei = e => {
                let {
                    element: t,
                    event: {
                        config: n
                    }
                } = e, {
                    clientWidth: a,
                    clientHeight: i
                } = et(), o = n.scrollOffsetValue, r = "PX" === n.scrollOffsetUnit ? o : i * (o || 0) / 100;
                return en(t.getBoundingClientRect(), {
                    left: 0,
                    top: r,
                    right: a,
                    bottom: i - r
                })
            }, eo = e => (t, n) => {
                let {
                    type: a
                } = t.nativeEvent, i = -1 !== [x, G].indexOf(a) ? a === x : n.isActive, o = { ...n,
                    isActive: i
                };
                return (!n || o.isActive !== n.isActive) && e(t, o) || o
            }, er = e => (t, n) => {
                let a = {
                    elementHovered: ea(t)
                };
                return (n ? a.elementHovered !== n.elementHovered : a.elementHovered) && e(t, a) || a
            }, el = e => (t, n = {}) => {
                let a, i, {
                        stiffScrollTop: o,
                        scrollHeight: r,
                        innerHeight: l
                    } = et(),
                    {
                        event: {
                            config: d,
                            eventTypeId: c
                        }
                    } = t,
                    {
                        scrollOffsetValue: s,
                        scrollOffsetUnit: u
                    } = d,
                    f = r - l,
                    p = Number((o / f).toFixed(2));
                if (n && n.percentTop === p) return n;
                let g = ("PX" === u ? s : l * (s || 0) / 100) / f,
                    E = 0;
                n && (a = p > n.percentTop, E = (i = n.scrollingDown !== a) ? p : n.anchorTop);
                let y = c === S ? p >= E + g : p <= E - g,
                    m = { ...n,
                        percentTop: p,
                        inBounds: y,
                        anchorTop: E,
                        scrollingDown: a
                    };
                return n && y && (i || m.inBounds !== n.inBounds) && e(t, m) || m
            }, ed = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, ec = e => (t, n = {
                clickCount: 0
            }) => {
                let a = {
                    clickCount: n.clickCount % 2 + 1
                };
                return a.clickCount !== n.clickCount && e(t, a) || a
            }, es = (e = !0) => ({ ...K,
                handler: H(e ? W : X, eo((e, t) => t.isActive ? $.handler(e, t) : t))
            }), eu = (e = !0) => ({ ...K,
                handler: H(e ? W : X, eo((e, t) => t.isActive ? t : $.handler(e, t)))
            }), ef = { ...J,
                handler: (a = (e, t) => {
                    let {
                        elementVisible: n
                    } = t, {
                        event: a,
                        store: i
                    } = e, {
                        ixData: o
                    } = i.getState(), {
                        events: r
                    } = o;
                    return !r[a.action.config.autoStopEventId] && t.triggered ? t : a.eventTypeId === w === n ? (z(e), { ...t,
                        triggered: !0
                    }) : t
                }, (e, t) => {
                    let n = { ...t,
                        elementVisible: ei(e)
                    };
                    return (t ? n.elementVisible !== t.elementVisible : n.elementVisible) && a(e, n) || n
                })
            }, ep = {
                [b]: es(),
                [O]: eu(),
                [T]: es(),
                [I]: eu(),
                [R]: es(!1),
                [_]: eu(!1),
                [h]: es(),
                [v]: eu(),
                [P]: {
                    types: "ecommerce-cart-open",
                    handler: H(W, z)
                },
                [M]: {
                    types: "ecommerce-cart-close",
                    handler: H(W, z)
                },
                [f]: {
                    types: "click",
                    handler: H(W, ec((e, {
                        clickCount: t
                    }) => {
                        Q(e) ? 1 === t && z(e) : z(e)
                    }))
                },
                [p]: {
                    types: "click",
                    handler: H(W, ec((e, {
                        clickCount: t
                    }) => {
                        2 === t && z(e)
                    }))
                },
                [g]: { ...$,
                    types: "mousedown"
                },
                [E]: { ...$,
                    types: "mouseup"
                },
                [y]: {
                    types: Z,
                    handler: H(W, er((e, t) => {
                        t.elementHovered && z(e)
                    }))
                },
                [m]: {
                    types: Z,
                    handler: H(W, er((e, t) => {
                        t.elementHovered || z(e)
                    }))
                },
                [A]: {
                    types: "mousemove mouseout scroll",
                    handler: ({
                        store: e,
                        element: t,
                        eventConfig: n,
                        nativeEvent: a,
                        eventStateKey: i
                    }, o = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                            basedOn: r,
                            selectedAxis: d,
                            continuousParameterGroupId: s,
                            reverse: u,
                            restingState: f = 0
                        } = n, {
                            clientX: p = o.clientX,
                            clientY: g = o.clientY,
                            pageX: E = o.pageX,
                            pageY: y = o.pageY
                        } = a, m = "X_AXIS" === d, I = "mouseout" === a.type, T = f / 100, b = s, O = !1;
                        switch (r) {
                            case l.EventBasedOn.VIEWPORT:
                                T = m ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                                break;
                            case l.EventBasedOn.PAGE:
                                {
                                    let {
                                        scrollLeft: e,
                                        scrollTop: t,
                                        scrollWidth: n,
                                        scrollHeight: a
                                    } = et();T = m ? Math.min(e + E, n) / n : Math.min(t + y, a) / a;
                                    break
                                }
                            case l.EventBasedOn.ELEMENT:
                            default:
                                {
                                    b = D(i, s);
                                    let e = 0 === a.type.indexOf("mouse");
                                    if (e && !0 !== W({
                                            element: t,
                                            nativeEvent: a
                                        })) break;
                                    let n = t.getBoundingClientRect(),
                                        {
                                            left: o,
                                            top: r,
                                            width: l,
                                            height: d
                                        } = n;
                                    if (!e && !ed({
                                            left: p,
                                            top: g
                                        }, n)) break;O = !0,
                                    T = m ? (p - o) / l : (g - r) / d
                                }
                        }
                        return I && (T > .95 || T < .05) && (T = Math.round(T)), (r !== l.EventBasedOn.ELEMENT || O || O !== o.elementHovered) && (T = u ? 1 - T : T, e.dispatch((0, c.parameterChanged)(b, T))), {
                            elementHovered: O,
                            clientX: p,
                            clientY: g,
                            pageX: E,
                            pageY: y
                        }
                    }
                },
                [k]: {
                    types: q,
                    handler: ({
                        store: e,
                        eventConfig: t
                    }) => {
                        let {
                            continuousParameterGroupId: n,
                            reverse: a
                        } = t, {
                            scrollTop: i,
                            scrollHeight: o,
                            clientHeight: r
                        } = et(), l = i / (o - r);
                        l = a ? 1 - l : l, e.dispatch((0, c.parameterChanged)(n, l))
                    }
                },
                [C]: {
                    types: q,
                    handler: ({
                        element: e,
                        store: t,
                        eventConfig: n,
                        eventStateKey: a
                    }, i = {
                        scrollPercent: 0
                    }) => {
                        let {
                            scrollLeft: o,
                            scrollTop: r,
                            scrollWidth: d,
                            scrollHeight: s,
                            clientHeight: u
                        } = et(), {
                            basedOn: f,
                            selectedAxis: p,
                            continuousParameterGroupId: g,
                            startsEntering: E,
                            startsExiting: y,
                            addEndOffset: m,
                            addStartOffset: I,
                            addOffsetValue: T = 0,
                            endOffsetValue: b = 0
                        } = n;
                        if (f === l.EventBasedOn.VIEWPORT) {
                            let e = "X_AXIS" === p ? o / d : r / s;
                            return e !== i.scrollPercent && t.dispatch((0, c.parameterChanged)(g, e)), {
                                scrollPercent: e
                            }
                        } {
                            let n = D(a, g),
                                o = e.getBoundingClientRect(),
                                r = (I ? T : 0) / 100,
                                l = (m ? b : 0) / 100;
                            r = E ? r : 1 - r, l = y ? l : 1 - l;
                            let d = o.top + Math.min(o.height * r, u),
                                f = Math.min(u + (o.top + o.height * l - d), s),
                                p = Math.min(Math.max(0, u - d), f) / f;
                            return p !== i.scrollPercent && t.dispatch((0, c.parameterChanged)(n, p)), {
                                scrollPercent: p
                            }
                        }
                    }
                },
                [w]: ef,
                [L]: ef,
                [S]: { ...J,
                    handler: el((e, t) => {
                        t.scrollingDown && z(e)
                    })
                },
                [N]: { ...J,
                    handler: el((e, t) => {
                        t.scrollingDown || z(e)
                    })
                },
                [V]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: H(X, (e, t) => {
                        let n = {
                            finished: "complete" === document.readyState
                        };
                        return n.finished && !(t && t.finshed) && z(e), n
                    })
                },
                [F]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: H(X, (e, t) => (t || z(e), {
                        started: !0
                    }))
                }
            }
        },
        4609: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixData", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: a
            } = n(7087).IX2EngineActionTypes, i = (e = Object.freeze({}), t) => t.type === a ? t.payload.ixData || Object.freeze({}) : e
        },
        7718: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixInstances", {
                enumerable: !0,
                get: function() {
                    return O
                }
            });
            let a = n(7087),
                i = n(9468),
                o = n(1185),
                {
                    IX2_RAW_DATA_IMPORTED: r,
                    IX2_SESSION_STOPPED: l,
                    IX2_INSTANCE_ADDED: d,
                    IX2_INSTANCE_STARTED: c,
                    IX2_INSTANCE_REMOVED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u
                } = a.IX2EngineActionTypes,
                {
                    optimizeFloat: f,
                    applyEasing: p,
                    createBezierEasing: g
                } = i.IX2EasingUtils,
                {
                    RENDER_GENERAL: E
                } = a.IX2EngineConstants,
                {
                    getItemConfigByKey: y,
                    getRenderType: m,
                    getStyleProp: I
                } = i.IX2VanillaUtils,
                T = (e, t) => {
                    let n, a, i, r, {
                            position: l,
                            parameterId: d,
                            actionGroups: c,
                            destinationKeys: s,
                            smoothing: u,
                            restingValue: g,
                            actionTypeId: E,
                            customEasingFn: m,
                            skipMotion: I,
                            skipToValue: T
                        } = e,
                        {
                            parameters: b
                        } = t.payload,
                        O = Math.max(1 - u, .01),
                        h = b[d];
                    null == h && (O = 1, h = g);
                    let v = f((Math.max(h, 0) || 0) - l),
                        _ = I ? T : f(l + v * O),
                        R = 100 * _;
                    if (_ === l && e.current) return e;
                    for (let e = 0, {
                            length: t
                        } = c; e < t; e++) {
                        let {
                            keyframe: t,
                            actionItems: o
                        } = c[e];
                        if (0 === e && (n = o[0]), R >= t) {
                            n = o[0];
                            let l = c[e + 1],
                                d = l && R !== t;
                            a = d ? l.actionItems[0] : null, d && (i = t / 100, r = (l.keyframe - t) / 100)
                        }
                    }
                    let A = {};
                    if (n && !a)
                        for (let e = 0, {
                                length: t
                            } = s; e < t; e++) {
                            let t = s[e];
                            A[t] = y(E, t, n.config)
                        } else if (n && a && void 0 !== i && void 0 !== r) {
                            let e = (_ - i) / r,
                                t = p(n.config.easing, e, m);
                            for (let e = 0, {
                                    length: i
                                } = s; e < i; e++) {
                                let i = s[e],
                                    o = y(E, i, n.config),
                                    r = (y(E, i, a.config) - o) * t + o;
                                A[i] = r
                            }
                        }
                    return (0, o.merge)(e, {
                        position: _,
                        current: A
                    })
                },
                b = (e, t) => {
                    let {
                        active: n,
                        origin: a,
                        start: i,
                        immediate: r,
                        renderType: l,
                        verbose: d,
                        actionItem: c,
                        destination: s,
                        destinationKeys: u,
                        pluginDuration: g,
                        instanceDelay: y,
                        customEasingFn: m,
                        skipMotion: I
                    } = e, T = c.config.easing, {
                        duration: b,
                        delay: O
                    } = c.config;
                    null != g && (b = g), O = null != y ? y : O, l === E ? b = 0 : (r || I) && (b = O = 0);
                    let {
                        now: h
                    } = t.payload;
                    if (n && a) {
                        let t = h - (i + O);
                        if (d) {
                            let t = b + O,
                                n = f(Math.min(Math.max(0, (h - i) / t), 1));
                            e = (0, o.set)(e, "verboseTimeElapsed", t * n)
                        }
                        if (t < 0) return e;
                        let n = f(Math.min(Math.max(0, t / b), 1)),
                            r = p(T, n, m),
                            l = {},
                            c = null;
                        return u.length && (c = u.reduce((e, t) => {
                            let n = s[t],
                                i = parseFloat(a[t]) || 0,
                                o = parseFloat(n) - i;
                            return e[t] = o * r + i, e
                        }, {})), l.current = c, l.position = n, 1 === n && (l.active = !1, l.complete = !0), (0, o.merge)(e, l)
                    }
                    return e
                },
                O = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case r:
                            return t.payload.ixInstances || Object.freeze({});
                        case l:
                            return Object.freeze({});
                        case d:
                            {
                                let {
                                    instanceId: n,
                                    elementId: a,
                                    actionItem: i,
                                    eventId: r,
                                    eventTarget: l,
                                    eventStateKey: d,
                                    actionListId: c,
                                    groupIndex: s,
                                    isCarrier: u,
                                    origin: f,
                                    destination: p,
                                    immediate: E,
                                    verbose: y,
                                    continuous: T,
                                    parameterId: b,
                                    actionGroups: O,
                                    smoothing: h,
                                    restingValue: v,
                                    pluginInstance: _,
                                    pluginDuration: R,
                                    instanceDelay: A,
                                    skipMotion: S,
                                    skipToValue: w
                                } = t.payload,
                                {
                                    actionTypeId: L
                                } = i,
                                N = m(L),
                                C = I(N, L),
                                V = Object.keys(p).filter(e => null != p[e] && "string" != typeof p[e]),
                                {
                                    easing: M
                                } = i.config;
                                return (0, o.set)(e, n, {
                                    id: n,
                                    elementId: a,
                                    active: !1,
                                    position: 0,
                                    start: 0,
                                    origin: f,
                                    destination: p,
                                    destinationKeys: V,
                                    immediate: E,
                                    verbose: y,
                                    current: null,
                                    actionItem: i,
                                    actionTypeId: L,
                                    eventId: r,
                                    eventTarget: l,
                                    eventStateKey: d,
                                    actionListId: c,
                                    groupIndex: s,
                                    renderType: N,
                                    isCarrier: u,
                                    styleProp: C,
                                    continuous: T,
                                    parameterId: b,
                                    actionGroups: O,
                                    smoothing: h,
                                    restingValue: v,
                                    pluginInstance: _,
                                    pluginDuration: R,
                                    instanceDelay: A,
                                    skipMotion: S,
                                    skipToValue: w,
                                    customEasingFn: Array.isArray(M) && 4 === M.length ? g(M) : void 0
                                })
                            }
                        case c:
                            {
                                let {
                                    instanceId: n,
                                    time: a
                                } = t.payload;
                                return (0, o.mergeIn)(e, [n], {
                                    active: !0,
                                    complete: !1,
                                    start: a
                                })
                            }
                        case s:
                            {
                                let {
                                    instanceId: n
                                } = t.payload;
                                if (!e[n]) return e;
                                let a = {},
                                    i = Object.keys(e),
                                    {
                                        length: o
                                    } = i;
                                for (let t = 0; t < o; t++) {
                                    let o = i[t];
                                    o !== n && (a[o] = e[o])
                                }
                                return a
                            }
                        case u:
                            {
                                let n = e,
                                    a = Object.keys(e),
                                    {
                                        length: i
                                    } = a;
                                for (let r = 0; r < i; r++) {
                                    let i = a[r],
                                        l = e[i],
                                        d = l.continuous ? T : b;
                                    n = (0, o.set)(n, i, d(l, t))
                                }
                                return n
                            }
                        default:
                            return e
                    }
                }
        },
        1540: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixParameters", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: a,
                IX2_SESSION_STOPPED: i,
                IX2_PARAMETER_CHANGED: o
            } = n(7087).IX2EngineActionTypes, r = (e = {}, t) => {
                switch (t.type) {
                    case a:
                        return t.payload.ixParameters || {};
                    case i:
                        return {};
                    case o:
                        {
                            let {
                                key: n,
                                value: a
                            } = t.payload;
                            return e[n] = a,
                            e
                        }
                    default:
                        return e
                }
            }
        },
        7243: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let a = n(9516),
                i = n(4609),
                o = n(628),
                r = n(5862),
                l = n(9468),
                d = n(7718),
                c = n(1540),
                {
                    ixElements: s
                } = l.IX2ElementsReducer,
                u = (0, a.combineReducers)({
                    ixData: i.ixData,
                    ixRequest: o.ixRequest,
                    ixSession: r.ixSession,
                    ixElements: s,
                    ixInstances: d.ixInstances,
                    ixParameters: c.ixParameters
                })
        },
        628: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixRequest", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let a = n(7087),
                i = n(1185),
                {
                    IX2_PREVIEW_REQUESTED: o,
                    IX2_PLAYBACK_REQUESTED: r,
                    IX2_STOP_REQUESTED: l,
                    IX2_CLEAR_REQUESTED: d
                } = a.IX2EngineActionTypes,
                c = {
                    preview: {},
                    playback: {},
                    stop: {},
                    clear: {}
                },
                s = Object.create(null, {
                    [o]: {
                        value: "preview"
                    },
                    [r]: {
                        value: "playback"
                    },
                    [l]: {
                        value: "stop"
                    },
                    [d]: {
                        value: "clear"
                    }
                }),
                u = (e = c, t) => {
                    if (t.type in s) {
                        let n = [s[t.type]];
                        return (0, i.setIn)(e, [n], { ...t.payload
                        })
                    }
                    return e
                }
        },
        5862: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixSession", {
                enumerable: !0,
                get: function() {
                    return y
                }
            });
            let a = n(7087),
                i = n(1185),
                {
                    IX2_SESSION_INITIALIZED: o,
                    IX2_SESSION_STARTED: r,
                    IX2_TEST_FRAME_RENDERED: l,
                    IX2_SESSION_STOPPED: d,
                    IX2_EVENT_LISTENER_ADDED: c,
                    IX2_EVENT_STATE_CHANGED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
                    IX2_VIEWPORT_WIDTH_CHANGED: p,
                    IX2_MEDIA_QUERIES_DEFINED: g
                } = a.IX2EngineActionTypes,
                E = {
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
                },
                y = (e = E, t) => {
                    switch (t.type) {
                        case o:
                            {
                                let {
                                    hasBoundaryNodes: n,
                                    reducedMotion: a
                                } = t.payload;
                                return (0, i.merge)(e, {
                                    hasBoundaryNodes: n,
                                    reducedMotion: a
                                })
                            }
                        case r:
                            return (0, i.set)(e, "active", !0);
                        case l:
                            {
                                let {
                                    payload: {
                                        step: n = 20
                                    }
                                } = t;
                                return (0, i.set)(e, "tick", e.tick + n)
                            }
                        case d:
                            return E;
                        case u:
                            {
                                let {
                                    payload: {
                                        now: n
                                    }
                                } = t;
                                return (0, i.set)(e, "tick", n)
                            }
                        case c:
                            {
                                let n = (0, i.addLast)(e.eventListeners, t.payload);
                                return (0, i.set)(e, "eventListeners", n)
                            }
                        case s:
                            {
                                let {
                                    stateKey: n,
                                    newState: a
                                } = t.payload;
                                return (0, i.setIn)(e, ["eventState", n], a)
                            }
                        case f:
                            {
                                let {
                                    actionListId: n,
                                    isPlaying: a
                                } = t.payload;
                                return (0, i.setIn)(e, ["playbackState", n], a)
                            }
                        case p:
                            {
                                let {
                                    width: n,
                                    mediaQueries: a
                                } = t.payload,
                                o = a.length,
                                r = null;
                                for (let e = 0; e < o; e++) {
                                    let {
                                        key: t,
                                        min: i,
                                        max: o
                                    } = a[e];
                                    if (n >= i && n <= o) {
                                        r = t;
                                        break
                                    }
                                }
                                return (0, i.merge)(e, {
                                    viewportWidth: n,
                                    mediaQueryKey: r
                                })
                            }
                        case g:
                            return (0, i.set)(e, "hasDefinedMediaQueries", !0);
                        default:
                            return e
                    }
                }
        },
        7377: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return s
                },
                createPluginInstance: function() {
                    return d
                },
                getPluginConfig: function() {
                    return i
                },
                getPluginDestination: function() {
                    return l
                },
                getPluginDuration: function() {
                    return o
                },
                getPluginOrigin: function() {
                    return r
                },
                renderPlugin: function() {
                    return c
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = e => e.value,
                o = (e, t) => {
                    if ("auto" !== t.config.duration) return null;
                    let n = parseFloat(e.getAttribute("data-duration"));
                    return n > 0 ? 1e3 * n : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
                },
                r = e => e || {
                    value: 0
                },
                l = e => ({
                    value: e.value
                }),
                d = e => {
                    let t = window.Webflow.require("lottie");
                    if (!t) return null;
                    let n = t.createInstance(e);
                    return n.stop(), n.setSubframe(!0), n
                },
                c = (e, t, n) => {
                    if (!e) return;
                    let a = t[n.actionTypeId].value / 100;
                    e.goToFrame(e.frames * a)
                },
                s = e => {
                    let t = window.Webflow.require("lottie");
                    t && t.createInstance(e).stop()
                }
        },
        5163: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return g
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return d
                },
                getPluginDestination: function() {
                    return u
                },
                getPluginDuration: function() {
                    return c
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return p
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = "--wf-rive-fit",
                o = "--wf-rive-alignment",
                r = e => document.querySelector(`[data-w-id="${e}"]`),
                l = () => window.Webflow.require("rive"),
                d = (e, t) => e.value.inputs[t],
                c = () => null,
                s = (e, t) => {
                    if (e) return e;
                    let n = {},
                        {
                            inputs: a = {}
                        } = t.config.value;
                    for (let e in a) null == a[e] && (n[e] = 0);
                    return n
                },
                u = e => e.value.inputs ? ? {},
                f = (e, t) => {
                    if ((t.config ? .target ? .selectorGuids || []).length > 0) return e;
                    let n = t ? .config ? .target ? .pluginElement;
                    return n ? r(n) : null
                },
                p = (e, {
                    PLUGIN_RIVE: t
                }, n) => {
                    let a = l();
                    if (!a) return;
                    let r = a.getInstance(e),
                        d = a.rive.StateMachineInputType,
                        {
                            name: c,
                            inputs: s = {}
                        } = n.config.value || {};

                    function u(e) {
                        if (e.loaded) n();
                        else {
                            let t = () => {
                                n(), e ? .off("load", t)
                            };
                            e ? .on("load", t)
                        }

                        function n() {
                            let n = e.stateMachineInputs(c);
                            if (null != n) {
                                if (e.isPlaying || e.play(c, !1), i in s || o in s) {
                                    let t = e.layout,
                                        n = s[i] ? ? t.fit,
                                        a = s[o] ? ? t.alignment;
                                    (n !== t.fit || a !== t.alignment) && (e.layout = t.copyWith({
                                        fit: n,
                                        alignment: a
                                    }))
                                }
                                for (let e in s) {
                                    if (e === i || e === o) continue;
                                    let a = n.find(t => t.name === e);
                                    if (null != a) switch (a.type) {
                                        case d.Boolean:
                                            null != s[e] && (a.value = !!s[e]);
                                            break;
                                        case d.Number:
                                            {
                                                let n = t[e];null != n && (a.value = n);
                                                break
                                            }
                                        case d.Trigger:
                                            s[e] && a.fire()
                                    }
                                }
                            }
                        }
                    }
                    r ? .rive ? u(r.rive) : a.setLoadHandler(e, u)
                },
                g = (e, t) => null
        },
        2866: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return g
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return l
                },
                getPluginDestination: function() {
                    return u
                },
                getPluginDuration: function() {
                    return d
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return p
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = e => document.querySelector(`[data-w-id="${e}"]`),
                o = () => window.Webflow.require("spline"),
                r = (e, t) => e.filter(e => !t.includes(e)),
                l = (e, t) => e.value[t],
                d = () => null,
                c = Object.freeze({
                    positionX: 0,
                    positionY: 0,
                    positionZ: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1
                }),
                s = (e, t) => {
                    let n = Object.keys(t.config.value);
                    if (e) {
                        let t = r(n, Object.keys(e));
                        return t.length ? t.reduce((e, t) => (e[t] = c[t], e), e) : e
                    }
                    return n.reduce((e, t) => (e[t] = c[t], e), {})
                },
                u = e => e.value,
                f = (e, t) => {
                    let n = t ? .config ? .target ? .pluginElement;
                    return n ? i(n) : null
                },
                p = (e, t, n) => {
                    let a = o();
                    if (!a) return;
                    let i = a.getInstance(e),
                        r = n.config.target.objectId,
                        l = e => {
                            if (!e) throw Error("Invalid spline app passed to renderSpline");
                            let n = r && e.findObjectById(r);
                            if (!n) return;
                            let {
                                PLUGIN_SPLINE: a
                            } = t;
                            null != a.positionX && (n.position.x = a.positionX), null != a.positionY && (n.position.y = a.positionY), null != a.positionZ && (n.position.z = a.positionZ), null != a.rotationX && (n.rotation.x = a.rotationX), null != a.rotationY && (n.rotation.y = a.rotationY), null != a.rotationZ && (n.rotation.z = a.rotationZ), null != a.scaleX && (n.scale.x = a.scaleX), null != a.scaleY && (n.scale.y = a.scaleY), null != a.scaleZ && (n.scale.z = a.scaleZ)
                        };
                    i ? l(i.spline) : a.setLoadHandler(e, l)
                },
                g = () => null
        },
        1407: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return p
                },
                createPluginInstance: function() {
                    return s
                },
                getPluginConfig: function() {
                    return r
                },
                getPluginDestination: function() {
                    return c
                },
                getPluginDuration: function() {
                    return l
                },
                getPluginOrigin: function() {
                    return d
                },
                renderPlugin: function() {
                    return f
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(380),
                r = (e, t) => e.value[t],
                l = () => null,
                d = (e, t) => {
                    if (e) return e;
                    let n = t.config.value,
                        a = t.config.target.objectId,
                        i = getComputedStyle(document.documentElement).getPropertyValue(a);
                    return null != n.size ? {
                        size: parseInt(i, 10)
                    } : "%" === n.unit || "-" === n.unit ? {
                        size: parseFloat(i)
                    } : null != n.red && null != n.green && null != n.blue ? (0, o.normalizeColor)(i) : void 0
                },
                c = e => e.value,
                s = () => null,
                u = {
                    color: {
                        match: ({
                            red: e,
                            green: t,
                            blue: n,
                            alpha: a
                        }) => [e, t, n, a].every(e => null != e),
                        getValue: ({
                            red: e,
                            green: t,
                            blue: n,
                            alpha: a
                        }) => `rgba(${e}, ${t}, ${n}, ${a})`
                    },
                    size: {
                        match: ({
                            size: e
                        }) => null != e,
                        getValue: ({
                            size: e
                        }, t) => "-" === t ? e : `${e}${t}`
                    }
                },
                f = (e, t, n) => {
                    let {
                        target: {
                            objectId: a
                        },
                        value: {
                            unit: i
                        }
                    } = n.config, o = t.PLUGIN_VARIABLE, r = Object.values(u).find(e => e.match(o, i));
                    r && document.documentElement.style.setProperty(a, r.getValue(o, i))
                },
                p = (e, t) => {
                    let n = t.config.target.objectId;
                    document.documentElement.style.removeProperty(n)
                }
        },
        3690: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "pluginMethodMap", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let a = n(7087),
                i = c(n(7377)),
                o = c(n(2866)),
                r = c(n(5163)),
                l = c(n(1407));

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }

            function c(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = d(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            let s = new Map([
                [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i
                }],
                [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o
                }],
                [a.ActionTypeConsts.PLUGIN_RIVE, { ...r
                }],
                [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...l
                }]
            ])
        },
        8023: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
                    return b
                },
                IX2_ANIMATION_FRAME_CHANGED: function() {
                    return g
                },
                IX2_CLEAR_REQUESTED: function() {
                    return u
                },
                IX2_ELEMENT_STATE_CHANGED: function() {
                    return T
                },
                IX2_EVENT_LISTENER_ADDED: function() {
                    return f
                },
                IX2_EVENT_STATE_CHANGED: function() {
                    return p
                },
                IX2_INSTANCE_ADDED: function() {
                    return y
                },
                IX2_INSTANCE_REMOVED: function() {
                    return I
                },
                IX2_INSTANCE_STARTED: function() {
                    return m
                },
                IX2_MEDIA_QUERIES_DEFINED: function() {
                    return h
                },
                IX2_PARAMETER_CHANGED: function() {
                    return E
                },
                IX2_PLAYBACK_REQUESTED: function() {
                    return c
                },
                IX2_PREVIEW_REQUESTED: function() {
                    return d
                },
                IX2_RAW_DATA_IMPORTED: function() {
                    return i
                },
                IX2_SESSION_INITIALIZED: function() {
                    return o
                },
                IX2_SESSION_STARTED: function() {
                    return r
                },
                IX2_SESSION_STOPPED: function() {
                    return l
                },
                IX2_STOP_REQUESTED: function() {
                    return s
                },
                IX2_TEST_FRAME_RENDERED: function() {
                    return v
                },
                IX2_VIEWPORT_WIDTH_CHANGED: function() {
                    return O
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = "IX2_RAW_DATA_IMPORTED",
                o = "IX2_SESSION_INITIALIZED",
                r = "IX2_SESSION_STARTED",
                l = "IX2_SESSION_STOPPED",
                d = "IX2_PREVIEW_REQUESTED",
                c = "IX2_PLAYBACK_REQUESTED",
                s = "IX2_STOP_REQUESTED",
                u = "IX2_CLEAR_REQUESTED",
                f = "IX2_EVENT_LISTENER_ADDED",
                p = "IX2_EVENT_STATE_CHANGED",
                g = "IX2_ANIMATION_FRAME_CHANGED",
                E = "IX2_PARAMETER_CHANGED",
                y = "IX2_INSTANCE_ADDED",
                m = "IX2_INSTANCE_STARTED",
                I = "IX2_INSTANCE_REMOVED",
                T = "IX2_ELEMENT_STATE_CHANGED",
                b = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
                O = "IX2_VIEWPORT_WIDTH_CHANGED",
                h = "IX2_MEDIA_QUERIES_DEFINED",
                v = "IX2_TEST_FRAME_RENDERED"
        },
        2686: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                ABSTRACT_NODE: function() {
                    return et
                },
                AUTO: function() {
                    return W
                },
                BACKGROUND: function() {
                    return G
                },
                BACKGROUND_COLOR: function() {
                    return x
                },
                BAR_DELIMITER: function() {
                    return z
                },
                BORDER_COLOR: function() {
                    return U
                },
                BOUNDARY_SELECTOR: function() {
                    return d
                },
                CHILDREN: function() {
                    return H
                },
                COLON_DELIMITER: function() {
                    return Q
                },
                COLOR: function() {
                    return D
                },
                COMMA_DELIMITER: function() {
                    return Y
                },
                CONFIG_UNIT: function() {
                    return y
                },
                CONFIG_VALUE: function() {
                    return f
                },
                CONFIG_X_UNIT: function() {
                    return p
                },
                CONFIG_X_VALUE: function() {
                    return c
                },
                CONFIG_Y_UNIT: function() {
                    return g
                },
                CONFIG_Y_VALUE: function() {
                    return s
                },
                CONFIG_Z_UNIT: function() {
                    return E
                },
                CONFIG_Z_VALUE: function() {
                    return u
                },
                DISPLAY: function() {
                    return B
                },
                FILTER: function() {
                    return M
                },
                FLEX: function() {
                    return X
                },
                FONT_VARIATION_SETTINGS: function() {
                    return P
                },
                HEIGHT: function() {
                    return k
                },
                HTML_ELEMENT: function() {
                    return J
                },
                IMMEDIATE_CHILDREN: function() {
                    return $
                },
                IX2_ID_DELIMITER: function() {
                    return i
                },
                OPACITY: function() {
                    return V
                },
                PARENT: function() {
                    return q
                },
                PLAIN_OBJECT: function() {
                    return ee
                },
                PRESERVE_3D: function() {
                    return Z
                },
                RENDER_GENERAL: function() {
                    return ea
                },
                RENDER_PLUGIN: function() {
                    return eo
                },
                RENDER_STYLE: function() {
                    return ei
                },
                RENDER_TRANSFORM: function() {
                    return en
                },
                ROTATE_X: function() {
                    return A
                },
                ROTATE_Y: function() {
                    return S
                },
                ROTATE_Z: function() {
                    return w
                },
                SCALE_3D: function() {
                    return R
                },
                SCALE_X: function() {
                    return h
                },
                SCALE_Y: function() {
                    return v
                },
                SCALE_Z: function() {
                    return _
                },
                SIBLINGS: function() {
                    return K
                },
                SKEW: function() {
                    return L
                },
                SKEW_X: function() {
                    return N
                },
                SKEW_Y: function() {
                    return C
                },
                TRANSFORM: function() {
                    return m
                },
                TRANSLATE_3D: function() {
                    return O
                },
                TRANSLATE_X: function() {
                    return I
                },
                TRANSLATE_Y: function() {
                    return T
                },
                TRANSLATE_Z: function() {
                    return b
                },
                WF_PAGE: function() {
                    return o
                },
                WIDTH: function() {
                    return F
                },
                WILL_CHANGE: function() {
                    return j
                },
                W_MOD_IX: function() {
                    return l
                },
                W_MOD_JS: function() {
                    return r
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = "|",
                o = "data-wf-page",
                r = "w-mod-js",
                l = "w-mod-ix",
                d = ".w-dyn-item",
                c = "xValue",
                s = "yValue",
                u = "zValue",
                f = "value",
                p = "xUnit",
                g = "yUnit",
                E = "zUnit",
                y = "unit",
                m = "transform",
                I = "translateX",
                T = "translateY",
                b = "translateZ",
                O = "translate3d",
                h = "scaleX",
                v = "scaleY",
                _ = "scaleZ",
                R = "scale3d",
                A = "rotateX",
                S = "rotateY",
                w = "rotateZ",
                L = "skew",
                N = "skewX",
                C = "skewY",
                V = "opacity",
                M = "filter",
                P = "font-variation-settings",
                F = "width",
                k = "height",
                x = "backgroundColor",
                G = "background",
                U = "borderColor",
                D = "color",
                B = "display",
                X = "flex",
                j = "willChange",
                W = "AUTO",
                Y = ",",
                Q = ":",
                z = "|",
                H = "CHILDREN",
                $ = "IMMEDIATE_CHILDREN",
                K = "SIBLINGS",
                q = "PARENT",
                Z = "preserve-3d",
                J = "HTML_ELEMENT",
                ee = "PLAIN_OBJECT",
                et = "ABSTRACT_NODE",
                en = "RENDER_TRANSFORM",
                ea = "RENDER_GENERAL",
                ei = "RENDER_STYLE",
                eo = "RENDER_PLUGIN"
        },
        262: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                ActionAppliesTo: function() {
                    return o
                },
                ActionTypeConsts: function() {
                    return i
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = {
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
                    PLUGIN_RIVE: "PLUGIN_RIVE",
                    PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
                    GENERAL_DISPLAY: "GENERAL_DISPLAY",
                    GENERAL_START_ACTION: "GENERAL_START_ACTION",
                    GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
                    GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
                    GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
                    GENERAL_LOOP: "GENERAL_LOOP",
                    STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
                },
                o = {
                    ELEMENT: "ELEMENT",
                    ELEMENT_CLASS: "ELEMENT_CLASS",
                    TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
                }
        },
        7087: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                ActionTypeConsts: function() {
                    return r.ActionTypeConsts
                },
                IX2EngineActionTypes: function() {
                    return l
                },
                IX2EngineConstants: function() {
                    return d
                },
                QuickEffectIds: function() {
                    return o.QuickEffectIds
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = c(n(1833), t),
                r = c(n(262), t);
            c(n(8704), t), c(n(3213), t);
            let l = u(n(8023)),
                d = u(n(2686));

            function c(e, t) {
                return Object.keys(e).forEach(function(n) {
                    "default" === n || Object.prototype.hasOwnProperty.call(t, n) || Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[n]
                        }
                    })
                }), e
            }

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (s = function(e) {
                    return e ? n : t
                })(e)
            }

            function u(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = s(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
        },
        3213: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ReducedMotionTypes", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let {
                TRANSFORM_MOVE: a,
                TRANSFORM_SCALE: i,
                TRANSFORM_ROTATE: o,
                TRANSFORM_SKEW: r,
                STYLE_SIZE: l,
                STYLE_FILTER: d,
                STYLE_FONT_VARIATION: c
            } = n(262).ActionTypeConsts, s = {
                [a]: !0,
                [i]: !0,
                [o]: !0,
                [r]: !0,
                [l]: !0,
                [d]: !0,
                [c]: !0
            }
        },
        1833: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                EventAppliesTo: function() {
                    return o
                },
                EventBasedOn: function() {
                    return r
                },
                EventContinuousMouseAxes: function() {
                    return l
                },
                EventLimitAffectedElements: function() {
                    return d
                },
                EventTypeConsts: function() {
                    return i
                },
                QuickEffectDirectionConsts: function() {
                    return s
                },
                QuickEffectIds: function() {
                    return c
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = {
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
                },
                o = {
                    ELEMENT: "ELEMENT",
                    CLASS: "CLASS",
                    PAGE: "PAGE"
                },
                r = {
                    ELEMENT: "ELEMENT",
                    VIEWPORT: "VIEWPORT"
                },
                l = {
                    X_AXIS: "X_AXIS",
                    Y_AXIS: "Y_AXIS"
                },
                d = {
                    CHILDREN: "CHILDREN",
                    SIBLINGS: "SIBLINGS",
                    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
                },
                c = {
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
                },
                s = {
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
                }
        },
        8704: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "InteractionTypeConsts", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = {
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
            }
        },
        380: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeColor", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aqua: "#00FFFF",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blue: "#0000FF",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgreen: "#006400",
                darkgrey: "#A9A9A9",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                fuchsia: "#FF00FF",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#ADFF2F",
                grey: "#808080",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgray: "#D3D3D3",
                lightgreen: "#90EE90",
                lightgrey: "#D3D3D3",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                lime: "#00FF00",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                maroon: "#800000",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                navy: "#000080",
                oldlace: "#FDF5E6",
                olive: "#808000",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#FF0000",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                silver: "#C0C0C0",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                teal: "#008080",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                white: "#FFFFFF",
                whitesmoke: "#F5F5F5",
                yellow: "#FFFF00",
                yellowgreen: "#9ACD32"
            };

            function a(e) {
                let t, a, i, o = 1,
                    r = e.replace(/\s/g, "").toLowerCase(),
                    l = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
                if (l.startsWith("#")) {
                    let e = l.substring(1);
                    3 === e.length || 4 === e.length ? (t = parseInt(e[0] + e[0], 16), a = parseInt(e[1] + e[1], 16), i = parseInt(e[2] + e[2], 16), 4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16), a = parseInt(e.substring(2, 4), 16), i = parseInt(e.substring(4, 6), 16), 8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255))
                } else if (l.startsWith("rgba")) {
                    let e = l.match(/rgba\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), a = parseInt(e[1], 10), i = parseInt(e[2], 10), o = parseFloat(e[3])
                } else if (l.startsWith("rgb")) {
                    let e = l.match(/rgb\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), a = parseInt(e[1], 10), i = parseInt(e[2], 10)
                } else if (l.startsWith("hsla")) {
                    let e, n, r, d = l.match(/hsla\(([^)]+)\)/)[1].split(","),
                        c = parseFloat(d[0]),
                        s = parseFloat(d[1].replace("%", "")) / 100,
                        u = parseFloat(d[2].replace("%", "")) / 100;
                    o = parseFloat(d[3]);
                    let f = (1 - Math.abs(2 * u - 1)) * s,
                        p = f * (1 - Math.abs(c / 60 % 2 - 1)),
                        g = u - f / 2;
                    c >= 0 && c < 60 ? (e = f, n = p, r = 0) : c >= 60 && c < 120 ? (e = p, n = f, r = 0) : c >= 120 && c < 180 ? (e = 0, n = f, r = p) : c >= 180 && c < 240 ? (e = 0, n = p, r = f) : c >= 240 && c < 300 ? (e = p, n = 0, r = f) : (e = f, n = 0, r = p), t = Math.round((e + g) * 255), a = Math.round((n + g) * 255), i = Math.round((r + g) * 255)
                } else if (l.startsWith("hsl")) {
                    let e, n, o, r = l.match(/hsl\(([^)]+)\)/)[1].split(","),
                        d = parseFloat(r[0]),
                        c = parseFloat(r[1].replace("%", "")) / 100,
                        s = parseFloat(r[2].replace("%", "")) / 100,
                        u = (1 - Math.abs(2 * s - 1)) * c,
                        f = u * (1 - Math.abs(d / 60 % 2 - 1)),
                        p = s - u / 2;
                    d >= 0 && d < 60 ? (e = u, n = f, o = 0) : d >= 60 && d < 120 ? (e = f, n = u, o = 0) : d >= 120 && d < 180 ? (e = 0, n = u, o = f) : d >= 180 && d < 240 ? (e = 0, n = f, o = u) : d >= 240 && d < 300 ? (e = f, n = 0, o = u) : (e = u, n = 0, o = f), t = Math.round((e + p) * 255), a = Math.round((n + p) * 255), i = Math.round((o + p) * 255)
                }
                if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i)) throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
                return {
                    red: t,
                    green: a,
                    blue: i,
                    alpha: o
                }
            }
        },
        9468: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                IX2BrowserSupport: function() {
                    return o
                },
                IX2EasingUtils: function() {
                    return l
                },
                IX2Easings: function() {
                    return r
                },
                IX2ElementsReducer: function() {
                    return d
                },
                IX2VanillaPlugins: function() {
                    return c
                },
                IX2VanillaUtils: function() {
                    return s
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = f(n(2662)),
                r = f(n(8686)),
                l = f(n(3767)),
                d = f(n(5861)),
                c = f(n(1799)),
                s = f(n(4124));

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (u = function(e) {
                    return e ? n : t
                })(e)
            }

            function f(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = u(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
        },
        2662: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = {
                ELEMENT_MATCHES: function() {
                    return c
                },
                FLEX_PREFIXED: function() {
                    return s
                },
                IS_BROWSER_ENV: function() {
                    return l
                },
                TRANSFORM_PREFIXED: function() {
                    return u
                },
                TRANSFORM_STYLE_PREFIXED: function() {
                    return p
                },
                withBrowser: function() {
                    return d
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let r = (a = n(9777)) && a.__esModule ? a : {
                    default: a
                },
                l = "undefined" != typeof window,
                d = (e, t) => l ? e() : t,
                c = d(() => (0, r.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
                s = d(() => {
                    let e = document.createElement("i"),
                        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
                    try {
                        let {
                            length: n
                        } = t;
                        for (let a = 0; a < n; a++) {
                            let n = t[a];
                            if (e.style.display = n, e.style.display === n) return n
                        }
                        return ""
                    } catch (e) {
                        return ""
                    }
                }, "flex"),
                u = d(() => {
                    let e = document.createElement("i");
                    if (null == e.style.transform) {
                        let t = ["Webkit", "Moz", "ms"],
                            {
                                length: n
                            } = t;
                        for (let a = 0; a < n; a++) {
                            let n = t[a] + "Transform";
                            if (void 0 !== e.style[n]) return n
                        }
                    }
                    return "transform"
                }, "transform"),
                f = u.split("transform")[0],
                p = f ? f + "TransformStyle" : "transformStyle"
        },
        3767: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = {
                applyEasing: function() {
                    return u
                },
                createBezierEasing: function() {
                    return s
                },
                optimizeFloat: function() {
                    return c
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let r = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(8686)),
                l = (a = n(1361)) && a.__esModule ? a : {
                    default: a
                };

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }

            function c(e, t = 5, n = 10) {
                let a = Math.pow(n, t),
                    i = Number(Math.round(e * a) / a);
                return Math.abs(i) > 1e-4 ? i : 0
            }

            function s(e) {
                return (0, l.default)(...e)
            }

            function u(e, t, n) {
                return 0 === t ? 0 : 1 === t ? 1 : n ? c(t > 0 ? n(t) : t) : c(t > 0 && e && r[e] ? r[e](t) : t)
            }
        },
        8686: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = {
                bounce: function() {
                    return X
                },
                bouncePast: function() {
                    return j
                },
                ease: function() {
                    return l
                },
                easeIn: function() {
                    return d
                },
                easeInOut: function() {
                    return s
                },
                easeOut: function() {
                    return c
                },
                inBack: function() {
                    return M
                },
                inCirc: function() {
                    return L
                },
                inCubic: function() {
                    return g
                },
                inElastic: function() {
                    return k
                },
                inExpo: function() {
                    return A
                },
                inOutBack: function() {
                    return F
                },
                inOutCirc: function() {
                    return C
                },
                inOutCubic: function() {
                    return y
                },
                inOutElastic: function() {
                    return G
                },
                inOutExpo: function() {
                    return w
                },
                inOutQuad: function() {
                    return p
                },
                inOutQuart: function() {
                    return T
                },
                inOutQuint: function() {
                    return h
                },
                inOutSine: function() {
                    return R
                },
                inQuad: function() {
                    return u
                },
                inQuart: function() {
                    return m
                },
                inQuint: function() {
                    return b
                },
                inSine: function() {
                    return v
                },
                outBack: function() {
                    return P
                },
                outBounce: function() {
                    return V
                },
                outCirc: function() {
                    return N
                },
                outCubic: function() {
                    return E
                },
                outElastic: function() {
                    return x
                },
                outExpo: function() {
                    return S
                },
                outQuad: function() {
                    return f
                },
                outQuart: function() {
                    return I
                },
                outQuint: function() {
                    return O
                },
                outSine: function() {
                    return _
                },
                swingFrom: function() {
                    return D
                },
                swingFromTo: function() {
                    return U
                },
                swingTo: function() {
                    return B
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let r = (a = n(1361)) && a.__esModule ? a : {
                    default: a
                },
                l = (0, r.default)(.25, .1, .25, 1),
                d = (0, r.default)(.42, 0, 1, 1),
                c = (0, r.default)(0, 0, .58, 1),
                s = (0, r.default)(.42, 0, .58, 1);

            function u(e) {
                return Math.pow(e, 2)
            }

            function f(e) {
                return -(Math.pow(e - 1, 2) - 1)
            }

            function p(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
            }

            function g(e) {
                return Math.pow(e, 3)
            }

            function E(e) {
                return Math.pow(e - 1, 3) + 1
            }

            function y(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
            }

            function m(e) {
                return Math.pow(e, 4)
            }

            function I(e) {
                return -(Math.pow(e - 1, 4) - 1)
            }

            function T(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
            }

            function b(e) {
                return Math.pow(e, 5)
            }

            function O(e) {
                return Math.pow(e - 1, 5) + 1
            }

            function h(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
            }

            function v(e) {
                return -Math.cos(Math.PI / 2 * e) + 1
            }

            function _(e) {
                return Math.sin(Math.PI / 2 * e)
            }

            function R(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            }

            function A(e) {
                return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
            }

            function S(e) {
                return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
            }

            function w(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
            }

            function L(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }

            function N(e) {
                return Math.sqrt(1 - Math.pow(e - 1, 2))
            }

            function C(e) {
                return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }

            function V(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function M(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function P(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function F(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function k(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)))
            }

            function x(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - t) / n) + 1)
            }

            function G(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .3 * 1.5), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), e < 1) ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)) : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n) * .5 + 1
            }

            function U(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function D(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function B(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function X(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function j(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }
        },
        1799: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return E
                },
                createPluginInstance: function() {
                    return p
                },
                getPluginConfig: function() {
                    return c
                },
                getPluginDestination: function() {
                    return f
                },
                getPluginDuration: function() {
                    return u
                },
                getPluginOrigin: function() {
                    return s
                },
                isPluginType: function() {
                    return l
                },
                renderPlugin: function() {
                    return g
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(2662),
                r = n(3690);

            function l(e) {
                return r.pluginMethodMap.has(e)
            }
            let d = e => t => {
                    if (!o.IS_BROWSER_ENV) return () => null;
                    let n = r.pluginMethodMap.get(t);
                    if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
                    let a = n[e];
                    if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
                    return a
                },
                c = d("getPluginConfig"),
                s = d("getPluginOrigin"),
                u = d("getPluginDuration"),
                f = d("getPluginDestination"),
                p = d("createPluginInstance"),
                g = d("renderPlugin"),
                E = d("clearPlugin")
        },
        4124: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                cleanupHTMLElement: function() {
                    return eY
                },
                clearAllStyles: function() {
                    return eX
                },
                clearObjectCache: function() {
                    return eu
                },
                getActionListProgress: function() {
                    return e$
                },
                getAffectedElements: function() {
                    return eb
                },
                getComputedStyle: function() {
                    return eO
                },
                getDestinationValues: function() {
                    return eL
                },
                getElementId: function() {
                    return eE
                },
                getInstanceId: function() {
                    return ep
                },
                getInstanceOrigin: function() {
                    return eR
                },
                getItemConfigByKey: function() {
                    return ew
                },
                getMaxDurationItemIndex: function() {
                    return eH
                },
                getNamespacedParameterId: function() {
                    return eZ
                },
                getRenderType: function() {
                    return eN
                },
                getStyleProp: function() {
                    return eC
                },
                mediaQueriesEqual: function() {
                    return e0
                },
                observeStore: function() {
                    return eI
                },
                reduceListToGroup: function() {
                    return eK
                },
                reifyState: function() {
                    return ey
                },
                renderHTMLElement: function() {
                    return eV
                },
                shallowEqual: function() {
                    return s.default
                },
                shouldAllowMediaQuery: function() {
                    return eJ
                },
                shouldNamespaceEventParameter: function() {
                    return eq
                },
                stringifyTarget: function() {
                    return e1
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = E(n(4075)),
                r = E(n(1455)),
                l = E(n(5720)),
                d = n(1185),
                c = n(7087),
                s = E(n(7164)),
                u = n(3767),
                f = n(380),
                p = n(1799),
                g = n(2662);

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                BACKGROUND: y,
                TRANSFORM: m,
                TRANSLATE_3D: I,
                SCALE_3D: T,
                ROTATE_X: b,
                ROTATE_Y: O,
                ROTATE_Z: h,
                SKEW: v,
                PRESERVE_3D: _,
                FLEX: R,
                OPACITY: A,
                FILTER: S,
                FONT_VARIATION_SETTINGS: w,
                WIDTH: L,
                HEIGHT: N,
                BACKGROUND_COLOR: C,
                BORDER_COLOR: V,
                COLOR: M,
                CHILDREN: P,
                IMMEDIATE_CHILDREN: F,
                SIBLINGS: k,
                PARENT: x,
                DISPLAY: G,
                WILL_CHANGE: U,
                AUTO: D,
                COMMA_DELIMITER: B,
                COLON_DELIMITER: X,
                BAR_DELIMITER: j,
                RENDER_TRANSFORM: W,
                RENDER_GENERAL: Y,
                RENDER_STYLE: Q,
                RENDER_PLUGIN: z
            } = c.IX2EngineConstants, {
                TRANSFORM_MOVE: H,
                TRANSFORM_SCALE: $,
                TRANSFORM_ROTATE: K,
                TRANSFORM_SKEW: q,
                STYLE_OPACITY: Z,
                STYLE_FILTER: J,
                STYLE_FONT_VARIATION: ee,
                STYLE_SIZE: et,
                STYLE_BACKGROUND_COLOR: en,
                STYLE_BORDER: ea,
                STYLE_TEXT_COLOR: ei,
                GENERAL_DISPLAY: eo,
                OBJECT_VALUE: er
            } = c.ActionTypeConsts, el = e => e.trim(), ed = Object.freeze({
                [en]: C,
                [ea]: V,
                [ei]: M
            }), ec = Object.freeze({
                [g.TRANSFORM_PREFIXED]: m,
                [C]: y,
                [A]: A,
                [S]: S,
                [L]: L,
                [N]: N,
                [w]: w
            }), es = new Map;

            function eu() {
                es.clear()
            }
            let ef = 1;

            function ep() {
                return "i" + ef++
            }
            let eg = 1;

            function eE(e, t) {
                for (let n in e) {
                    let a = e[n];
                    if (a && a.ref === t) return a.id
                }
                return "e" + eg++
            }

            function ey({
                events: e,
                actionLists: t,
                site: n
            } = {}) {
                let a = (0, r.default)(e, (e, t) => {
                        let {
                            eventTypeId: n
                        } = t;
                        return e[n] || (e[n] = {}), e[n][t.id] = t, e
                    }, {}),
                    i = n && n.mediaQueries,
                    o = [];
                return i ? o = i.map(e => e.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
                    ixData: {
                        events: e,
                        actionLists: t,
                        eventTypeMap: a,
                        mediaQueries: i,
                        mediaQueryKeys: o
                    }
                }
            }
            let em = (e, t) => e === t;

            function eI({
                store: e,
                select: t,
                onChange: n,
                comparator: a = em
            }) {
                let {
                    getState: i,
                    subscribe: o
                } = e, r = o(function() {
                    let o = t(i());
                    if (null == o) return void r();
                    a(o, l) || n(l = o, e)
                }), l = t(i());
                return r
            }

            function eT(e) {
                let t = typeof e;
                if ("string" === t) return {
                    id: e
                };
                if (null != e && "object" === t) {
                    let {
                        id: t,
                        objectId: n,
                        selector: a,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: r
                    } = e;
                    return {
                        id: t,
                        objectId: n,
                        selector: a,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: r
                    }
                }
                return {}
            }

            function eb({
                config: e,
                event: t,
                eventTarget: n,
                elementRoot: a,
                elementApi: i
            }) {
                let o, r, l;
                if (!i) throw Error("IX2 missing elementApi");
                let {
                    targets: d
                } = e;
                if (Array.isArray(d) && d.length > 0) return d.reduce((e, o) => e.concat(eb({
                    config: {
                        target: o
                    },
                    event: t,
                    eventTarget: n,
                    elementRoot: a,
                    elementApi: i
                })), []);
                let {
                    getValidDocument: s,
                    getQuerySelector: u,
                    queryDocument: f,
                    getChildElements: p,
                    getSiblingElements: E,
                    matchSelector: y,
                    elementContains: m,
                    isSiblingNode: I
                } = i, {
                    target: T
                } = e;
                if (!T) return [];
                let {
                    id: b,
                    objectId: O,
                    selector: h,
                    selectorGuids: v,
                    appliesTo: _,
                    useEventTarget: R
                } = eT(T);
                if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
                if (_ === c.EventAppliesTo.PAGE) {
                    let e = s(b);
                    return e ? [e] : []
                }
                let A = (t ? .action ? .config ? .affectedElements ? ? {})[b || h] || {},
                    S = !!(A.id || A.selector),
                    w = t && u(eT(t.target));
                if (S ? (o = A.limitAffectedElements, r = w, l = u(A)) : r = l = u({
                        id: b,
                        selector: h,
                        selectorGuids: v
                    }), t && R) {
                    let e = n && (l || !0 === R) ? [n] : f(w);
                    if (l) {
                        if (R === x) return f(l).filter(t => e.some(e => m(t, e)));
                        if (R === P) return f(l).filter(t => e.some(e => m(e, t)));
                        if (R === k) return f(l).filter(t => e.some(e => I(e, t)))
                    }
                    return e
                }
                return null == r || null == l ? [] : g.IS_BROWSER_ENV && a ? f(l).filter(e => a.contains(e)) : o === P ? f(r, l) : o === F ? p(f(r)).filter(y(l)) : o === k ? E(f(r)).filter(y(l)) : f(l)
            }

            function eO({
                element: e,
                actionItem: t
            }) {
                if (!g.IS_BROWSER_ENV) return {};
                let {
                    actionTypeId: n
                } = t;
                switch (n) {
                    case et:
                    case en:
                    case ea:
                    case ei:
                    case eo:
                        return window.getComputedStyle(e);
                    default:
                        return {}
                }
            }
            let eh = /px/,
                ev = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eP[t.type]), e), e || {}),
                e_ = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eF[t.type] || t.defaultValue || 0), e), e || {});

            function eR(e, t = {}, n = {}, a, i) {
                let {
                    getStyle: r
                } = i, {
                    actionTypeId: l
                } = a;
                if ((0, p.isPluginType)(l)) return (0, p.getPluginOrigin)(l)(t[l], a);
                switch (a.actionTypeId) {
                    case H:
                    case $:
                    case K:
                    case q:
                        return t[a.actionTypeId] || eM[a.actionTypeId];
                    case J:
                        return ev(t[a.actionTypeId], a.config.filters);
                    case ee:
                        return e_(t[a.actionTypeId], a.config.fontVariations);
                    case Z:
                        return {
                            value: (0, o.default)(parseFloat(r(e, A)), 1)
                        };
                    case et:
                        {
                            let t, i = r(e, L),
                                l = r(e, N);
                            return {
                                widthValue: a.config.widthUnit === D ? eh.test(i) ? parseFloat(i) : parseFloat(n.width) : (0, o.default)(parseFloat(i), parseFloat(n.width)),
                                heightValue: a.config.heightUnit === D ? eh.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, o.default)(parseFloat(l), parseFloat(n.height))
                            }
                        }
                    case en:
                    case ea:
                    case ei:
                        return function({
                            element: e,
                            actionTypeId: t,
                            computedStyle: n,
                            getStyle: a
                        }) {
                            let i = ed[t],
                                r = a(e, i),
                                l = (function(e, t) {
                                    let n = e.exec(t);
                                    return n ? n[1] : ""
                                })(eU, eG.test(r) ? r : n[i]).split(B);
                            return {
                                rValue: (0, o.default)(parseInt(l[0], 10), 255),
                                gValue: (0, o.default)(parseInt(l[1], 10), 255),
                                bValue: (0, o.default)(parseInt(l[2], 10), 255),
                                aValue: (0, o.default)(parseFloat(l[3]), 1)
                            }
                        }({
                            element: e,
                            actionTypeId: a.actionTypeId,
                            computedStyle: n,
                            getStyle: r
                        });
                    case eo:
                        return {
                            value: (0, o.default)(r(e, G), n.display)
                        };
                    case er:
                        return t[a.actionTypeId] || {
                            value: 0
                        };
                    default:
                        return
                }
            }
            let eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
                ew = (e, t, n) => {
                    if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
                    switch (e) {
                        case J:
                            {
                                let e = (0, l.default)(n.filters, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        case ee:
                            {
                                let e = (0, l.default)(n.fontVariations, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        default:
                            return n[t]
                    }
                };

            function eL({
                element: e,
                actionItem: t,
                elementApi: n
            }) {
                if ((0, p.isPluginType)(t.actionTypeId)) return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
                switch (t.actionTypeId) {
                    case H:
                    case $:
                    case K:
                    case q:
                        {
                            let {
                                xValue: e,
                                yValue: n,
                                zValue: a
                            } = t.config;
                            return {
                                xValue: e,
                                yValue: n,
                                zValue: a
                            }
                        }
                    case et:
                        {
                            let {
                                getStyle: a,
                                setStyle: i,
                                getProperty: o
                            } = n,
                            {
                                widthUnit: r,
                                heightUnit: l
                            } = t.config,
                            {
                                widthValue: d,
                                heightValue: c
                            } = t.config;
                            if (!g.IS_BROWSER_ENV) return {
                                widthValue: d,
                                heightValue: c
                            };
                            if (r === D) {
                                let t = a(e, L);
                                i(e, L, ""), d = o(e, "offsetWidth"), i(e, L, t)
                            }
                            if (l === D) {
                                let t = a(e, N);
                                i(e, N, ""), c = o(e, "offsetHeight"), i(e, N, t)
                            }
                            return {
                                widthValue: d,
                                heightValue: c
                            }
                        }
                    case en:
                    case ea:
                    case ei:
                        {
                            let {
                                rValue: a,
                                gValue: i,
                                bValue: o,
                                aValue: r,
                                globalSwatchId: l
                            } = t.config;
                            if (l && l.startsWith("--")) {
                                let {
                                    getStyle: t
                                } = n, a = t(e, l), i = (0, f.normalizeColor)(a);
                                return {
                                    rValue: i.red,
                                    gValue: i.green,
                                    bValue: i.blue,
                                    aValue: i.alpha
                                }
                            }
                            return {
                                rValue: a,
                                gValue: i,
                                bValue: o,
                                aValue: r
                            }
                        }
                    case J:
                        return t.config.filters.reduce(eA, {});
                    case ee:
                        return t.config.fontVariations.reduce(eS, {});
                    default:
                        {
                            let {
                                value: e
                            } = t.config;
                            return {
                                value: e
                            }
                        }
                }
            }

            function eN(e) {
                return /^TRANSFORM_/.test(e) ? W : /^STYLE_/.test(e) ? Q : /^GENERAL_/.test(e) ? Y : /^PLUGIN_/.test(e) ? z : void 0
            }

            function eC(e, t) {
                return e === Q ? t.replace("STYLE_", "").toLowerCase() : null
            }

            function eV(e, t, n, a, i, o, l, d, c) {
                switch (d) {
                    case W:
                        var s = e,
                            u = t,
                            f = n,
                            E = i,
                            y = l;
                        let m = ex.map(e => {
                                let t = eM[e],
                                    {
                                        xValue: n = t.xValue,
                                        yValue: a = t.yValue,
                                        zValue: i = t.zValue,
                                        xUnit: o = "",
                                        yUnit: r = "",
                                        zUnit: l = ""
                                    } = u[e] || {};
                                switch (e) {
                                    case H:
                                        return `${I}(${n}${o}, ${a}${r}, ${i}${l})`;
                                    case $:
                                        return `${T}(${n}${o}, ${a}${r}, ${i}${l})`;
                                    case K:
                                        return `${b}(${n}${o}) ${O}(${a}${r}) ${h}(${i}${l})`;
                                    case q:
                                        return `${v}(${n}${o}, ${a}${r})`;
                                    default:
                                        return ""
                                }
                            }).join(" "),
                            {
                                setStyle: A
                            } = y;
                        eD(s, g.TRANSFORM_PREFIXED, y), A(s, g.TRANSFORM_PREFIXED, m),
                            function({
                                actionTypeId: e
                            }, {
                                xValue: t,
                                yValue: n,
                                zValue: a
                            }) {
                                return e === H && void 0 !== a || e === $ && void 0 !== a || e === K && (void 0 !== t || void 0 !== n)
                            }(E, f) && A(s, g.TRANSFORM_STYLE_PREFIXED, _);
                        return;
                    case Q:
                        return function(e, t, n, a, i, o) {
                            let {
                                setStyle: l
                            } = o;
                            switch (a.actionTypeId) {
                                case et:
                                    {
                                        let {
                                            widthUnit: t = "",
                                            heightUnit: i = ""
                                        } = a.config,
                                        {
                                            widthValue: r,
                                            heightValue: d
                                        } = n;void 0 !== r && (t === D && (t = "px"), eD(e, L, o), l(e, L, r + t)),
                                        void 0 !== d && (i === D && (i = "px"), eD(e, N, o), l(e, N, d + i));
                                        break
                                    }
                                case J:
                                    var d = a.config;
                                    let c = (0, r.default)(n, (e, t, n) => `${e} ${n}(${t}${ek(n,d)})`, ""),
                                        {
                                            setStyle: s
                                        } = o;
                                    eD(e, S, o), s(e, S, c);
                                    break;
                                case ee:
                                    a.config;
                                    let u = (0, r.default)(n, (e, t, n) => (e.push(`"${n}" ${t}`), e), []).join(", "),
                                        {
                                            setStyle: f
                                        } = o;
                                    eD(e, w, o), f(e, w, u);
                                    break;
                                case en:
                                case ea:
                                case ei:
                                    {
                                        let t = ed[a.actionTypeId],
                                            i = Math.round(n.rValue),
                                            r = Math.round(n.gValue),
                                            d = Math.round(n.bValue),
                                            c = n.aValue;eD(e, t, o),
                                        l(e, t, c >= 1 ? `rgb(${i},${r},${d})` : `rgba(${i},${r},${d},${c})`);
                                        break
                                    }
                                default:
                                    {
                                        let {
                                            unit: t = ""
                                        } = a.config;eD(e, i, o),
                                        l(e, i, n.value + t)
                                    }
                            }
                        }(e, 0, n, i, o, l);
                    case Y:
                        var C = e,
                            V = i,
                            M = l;
                        let {
                            setStyle: P
                        } = M;
                        if (V.actionTypeId === eo) {
                            let {
                                value: e
                            } = V.config;
                            P(C, G, e === R && g.IS_BROWSER_ENV ? g.FLEX_PREFIXED : e);
                        }
                        return;
                    case z:
                        {
                            let {
                                actionTypeId: e
                            } = i;
                            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(c, t, i)
                        }
                }
            }
            let eM = {
                    [H]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [$]: Object.freeze({
                        xValue: 1,
                        yValue: 1,
                        zValue: 1
                    }),
                    [K]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [q]: Object.freeze({
                        xValue: 0,
                        yValue: 0
                    })
                },
                eP = Object.freeze({
                    blur: 0,
                    "hue-rotate": 0,
                    invert: 0,
                    grayscale: 0,
                    saturate: 100,
                    sepia: 0,
                    contrast: 100,
                    brightness: 100
                }),
                eF = Object.freeze({
                    wght: 0,
                    opsz: 0,
                    wdth: 0,
                    slnt: 0
                }),
                ek = (e, t) => {
                    let n = (0, l.default)(t.filters, ({
                        type: t
                    }) => t === e);
                    if (n && n.unit) return n.unit;
                    switch (e) {
                        case "blur":
                            return "px";
                        case "hue-rotate":
                            return "deg";
                        default:
                            return "%"
                    }
                },
                ex = Object.keys(eM),
                eG = /^rgb/,
                eU = RegExp("rgba?\\(([^)]+)\\)");

            function eD(e, t, n) {
                if (!g.IS_BROWSER_ENV) return;
                let a = ec[t];
                if (!a) return;
                let {
                    getStyle: i,
                    setStyle: o
                } = n, r = i(e, U);
                if (!r) return void o(e, U, a);
                let l = r.split(B).map(el); - 1 === l.indexOf(a) && o(e, U, l.concat(a).join(B))
            }

            function eB(e, t, n) {
                if (!g.IS_BROWSER_ENV) return;
                let a = ec[t];
                if (!a) return;
                let {
                    getStyle: i,
                    setStyle: o
                } = n, r = i(e, U);
                r && -1 !== r.indexOf(a) && o(e, U, r.split(B).map(el).filter(e => e !== a).join(B))
            }

            function eX({
                store: e,
                elementApi: t
            }) {
                let {
                    ixData: n
                } = e.getState(), {
                    events: a = {},
                    actionLists: i = {}
                } = n;
                Object.keys(a).forEach(e => {
                    let n = a[e],
                        {
                            config: o
                        } = n.action,
                        {
                            actionListId: r
                        } = o,
                        l = i[r];
                    l && ej({
                        actionList: l,
                        event: n,
                        elementApi: t
                    })
                }), Object.keys(i).forEach(e => {
                    ej({
                        actionList: i[e],
                        elementApi: t
                    })
                })
            }

            function ej({
                actionList: e = {},
                event: t,
                elementApi: n
            }) {
                let {
                    actionItemGroups: a,
                    continuousParameterGroups: i
                } = e;
                a && a.forEach(e => {
                    eW({
                        actionGroup: e,
                        event: t,
                        elementApi: n
                    })
                }), i && i.forEach(e => {
                    let {
                        continuousActionGroups: a
                    } = e;
                    a.forEach(e => {
                        eW({
                            actionGroup: e,
                            event: t,
                            elementApi: n
                        })
                    })
                })
            }

            function eW({
                actionGroup: e,
                event: t,
                elementApi: n
            }) {
                let {
                    actionItems: a
                } = e;
                a.forEach(e => {
                    let a, {
                        actionTypeId: i,
                        config: o
                    } = e;
                    a = (0, p.isPluginType)(i) ? t => (0, p.clearPlugin)(i)(t, e) : eQ({
                        effect: ez,
                        actionTypeId: i,
                        elementApi: n
                    }), eb({
                        config: o,
                        event: t,
                        elementApi: n
                    }).forEach(a)
                })
            }

            function eY(e, t, n) {
                let {
                    setStyle: a,
                    getStyle: i
                } = n, {
                    actionTypeId: o
                } = t;
                if (o === et) {
                    let {
                        config: n
                    } = t;
                    n.widthUnit === D && a(e, L, ""), n.heightUnit === D && a(e, N, "")
                }
                i(e, U) && eQ({
                    effect: eB,
                    actionTypeId: o,
                    elementApi: n
                })(e)
            }
            let eQ = ({
                effect: e,
                actionTypeId: t,
                elementApi: n
            }) => a => {
                switch (t) {
                    case H:
                    case $:
                    case K:
                    case q:
                        e(a, g.TRANSFORM_PREFIXED, n);
                        break;
                    case J:
                        e(a, S, n);
                        break;
                    case ee:
                        e(a, w, n);
                        break;
                    case Z:
                        e(a, A, n);
                        break;
                    case et:
                        e(a, L, n), e(a, N, n);
                        break;
                    case en:
                    case ea:
                    case ei:
                        e(a, ed[t], n);
                        break;
                    case eo:
                        e(a, G, n)
                }
            };

            function ez(e, t, n) {
                let {
                    setStyle: a
                } = n;
                eB(e, t, n), a(e, t, ""), t === g.TRANSFORM_PREFIXED && a(e, g.TRANSFORM_STYLE_PREFIXED, "")
            }

            function eH(e) {
                let t = 0,
                    n = 0;
                return e.forEach((e, a) => {
                    let {
                        config: i
                    } = e, o = i.delay + i.duration;
                    o >= t && (t = o, n = a)
                }), n
            }

            function e$(e, t) {
                let {
                    actionItemGroups: n,
                    useFirstGroupAsInitialState: a
                } = e, {
                    actionItem: i,
                    verboseTimeElapsed: o = 0
                } = t, r = 0, l = 0;
                return n.forEach((e, t) => {
                    if (a && 0 === t) return;
                    let {
                        actionItems: n
                    } = e, d = n[eH(n)], {
                        config: c,
                        actionTypeId: s
                    } = d;
                    i.id === d.id && (l = r + o);
                    let u = eN(s) === Y ? 0 : c.duration;
                    r += c.delay + u
                }), r > 0 ? (0, u.optimizeFloat)(l / r) : 0
            }

            function eK({
                actionList: e,
                actionItemId: t,
                rawData: n
            }) {
                let {
                    actionItemGroups: a,
                    continuousParameterGroups: i
                } = e, o = [], r = e => (o.push((0, d.mergeIn)(e, ["config"], {
                    delay: 0,
                    duration: 0
                })), e.id === t);
                return a && a.some(({
                    actionItems: e
                }) => e.some(r)), i && i.some(e => {
                    let {
                        continuousActionGroups: t
                    } = e;
                    return t.some(({
                        actionItems: e
                    }) => e.some(r))
                }), (0, d.setIn)(n, ["actionLists"], {
                    [e.id]: {
                        id: e.id,
                        actionItemGroups: [{
                            actionItems: o
                        }]
                    }
                })
            }

            function eq(e, {
                basedOn: t
            }) {
                return e === c.EventTypeConsts.SCROLLING_IN_VIEW && (t === c.EventBasedOn.ELEMENT || null == t) || e === c.EventTypeConsts.MOUSE_MOVE && t === c.EventBasedOn.ELEMENT
            }

            function eZ(e, t) {
                return e + X + t
            }

            function eJ(e, t) {
                return null == t || -1 !== e.indexOf(t)
            }

            function e0(e, t) {
                return (0, s.default)(e && e.sort(), t && t.sort())
            }

            function e1(e) {
                if ("string" == typeof e) return e;
                if (e.pluginElement && e.objectId) return e.pluginElement + j + e.objectId;
                if (e.objectId) return e.objectId;
                let {
                    id: t = "",
                    selector: n = "",
                    useEventTarget: a = ""
                } = e;
                return t + j + n + j + a
            }
        },
        7164: function(e, t) {
            "use strict";

            function n(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let a = function(e, t) {
                if (n(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                let a = Object.keys(e),
                    i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (let i = 0; i < a.length; i++)
                    if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
                return !0
            }
        },
        5861: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                createElementState: function() {
                    return v
                },
                ixElements: function() {
                    return h
                },
                mergeActionState: function() {
                    return _
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(1185),
                r = n(7087),
                {
                    HTML_ELEMENT: l,
                    PLAIN_OBJECT: d,
                    ABSTRACT_NODE: c,
                    CONFIG_X_VALUE: s,
                    CONFIG_Y_VALUE: u,
                    CONFIG_Z_VALUE: f,
                    CONFIG_VALUE: p,
                    CONFIG_X_UNIT: g,
                    CONFIG_Y_UNIT: E,
                    CONFIG_Z_UNIT: y,
                    CONFIG_UNIT: m
                } = r.IX2EngineConstants,
                {
                    IX2_SESSION_STOPPED: I,
                    IX2_INSTANCE_ADDED: T,
                    IX2_ELEMENT_STATE_CHANGED: b
                } = r.IX2EngineActionTypes,
                O = {},
                h = (e = O, t = {}) => {
                    switch (t.type) {
                        case I:
                            return O;
                        case T:
                            {
                                let {
                                    elementId: n,
                                    element: a,
                                    origin: i,
                                    actionItem: r,
                                    refType: l
                                } = t.payload,
                                {
                                    actionTypeId: d
                                } = r,
                                c = e;
                                return (0, o.getIn)(c, [n, a]) !== a && (c = v(c, a, l, n, r)),
                                _(c, n, d, i, r)
                            }
                        case b:
                            {
                                let {
                                    elementId: n,
                                    actionTypeId: a,
                                    current: i,
                                    actionItem: o
                                } = t.payload;
                                return _(e, n, a, i, o)
                            }
                        default:
                            return e
                    }
                };

            function v(e, t, n, a, i) {
                let r = n === d ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
                return (0, o.mergeIn)(e, [a], {
                    id: a,
                    ref: t,
                    refId: r,
                    refType: n
                })
            }

            function _(e, t, n, a, i) {
                let r = function(e) {
                    let {
                        config: t
                    } = e;
                    return R.reduce((e, n) => {
                        let a = n[0],
                            i = n[1],
                            o = t[a],
                            r = t[i];
                        return null != o && null != r && (e[i] = r), e
                    }, {})
                }(i);
                return (0, o.mergeIn)(e, [t, "refState", n], a, r)
            }
            let R = [
                [s, g],
                [u, E],
                [f, y],
                [p, m]
            ]
        },
        9868: function() {
            Webflow.require("ix").init([{
                slug: "new-interaction",
                name: "New Interaction",
                value: {
                    style: {},
                    triggers: []
                }
            }]), Webflow.require("ix2").init({
                events: {
                    "e-3": {
                        id: "e-3",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-4"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "64ce77fa9e1879e4a86e120a|f05f5d76-6169-f6b8-8078-b78e1ee3ad00",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "64ce77fa9e1879e4a86e120a|f05f5d76-6169-f6b8-8078-b78e1ee3ad00",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x189f8ef5ada
                    },
                    "e-5": {
                        id: "e-5",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-47",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-6"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "64ce77fa9e1879e4a86e120a|5f12a6ba-8897-194f-ea8c-e67f4964b01e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "64ce77fa9e1879e4a86e120a|5f12a6ba-8897-194f-ea8c-e67f4964b01e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x189f8f3d6bf
                    },
                    "e-7": {
                        id: "e-7",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-8"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "64ce77fa9e1879e4a86e120a|077cab80-071d-3f24-83fd-f014a1eeef65",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "64ce77fa9e1879e4a86e120a|077cab80-071d-3f24-83fd-f014a1eeef65",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x189f90db161
                    },
                    "e-9": {
                        id: "e-9",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-10"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "64ce77fa9e1879e4a86e120a|42721281-1bea-2197-951c-14830aaa3721",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "64ce77fa9e1879e4a86e120a|42721281-1bea-2197-951c-14830aaa3721",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x189f90de3a7
                    },
                    "e-11": {
                        id: "e-11",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-12"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "64ce77fa9e1879e4a86e120a|baff4a4c-39f7-eeeb-4636-16da9c1083fc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "64ce77fa9e1879e4a86e120a|baff4a4c-39f7-eeeb-4636-16da9c1083fc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x189f90e0c47
                    },
                    "e-13": {
                        id: "e-13",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-14"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "64ce77fa9e1879e4a86e120a|58447c3d-6d97-6ac7-61b7-353d7bc76c70",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "64ce77fa9e1879e4a86e120a|58447c3d-6d97-6ac7-61b7-353d7bc76c70",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x189fdfc8d11
                    },
                    "e-15": {
                        id: "e-15",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-16"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "64ce77fa9e1879e4a86e120a|efa6660e-3bbf-5618-d58d-ec47f10463c1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "64ce77fa9e1879e4a86e120a|efa6660e-3bbf-5618-d58d-ec47f10463c1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x189fe1b5b7e
                    },
                    "e-17": {
                        id: "e-17",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-48",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-18"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".new-navbar-navbutton",
                            originalId: "46ebec14-7dfa-13fc-33af-50e25a5b67f8",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".new-navbar-navbutton",
                            originalId: "46ebec14-7dfa-13fc-33af-50e25a5b67f8",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1987a4adb99
                    },
                    "e-18": {
                        id: "e-18",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-49",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-17"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".new-navbar-navbutton",
                            originalId: "46ebec14-7dfa-13fc-33af-50e25a5b67f8",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".new-navbar-navbutton",
                            originalId: "46ebec14-7dfa-13fc-33af-50e25a5b67f8",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1987a4adb99
                    },
                    "e-19": {
                        id: "e-19",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-50",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-20"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6891ea896e965d2e8a518ceb|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6891ea896e965d2e8a518ceb|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1987d49e823
                    },
                    "e-20": {
                        id: "e-20",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-19"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6891ea896e965d2e8a518ceb|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6891ea896e965d2e8a518ceb|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1987d49e824
                    },
                    "e-21": {
                        id: "e-21",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-52",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6891ea896e965d2e8a518ceb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6891ea896e965d2e8a518ceb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-52-p",
                            smoothing: 83,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1987d68ad61
                    },
                    "e-22": {
                        id: "e-22",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-23"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6891ea896e965d2e8a518ceb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6891ea896e965d2e8a518ceb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1987d76383f
                    },
                    "e-23": {
                        id: "e-23",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-22"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6891ea896e965d2e8a518ceb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6891ea896e965d2e8a518ceb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1987d763840
                    },
                    "e-24": {
                        id: "e-24",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-55",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-25"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "06de28e9-c0f3-7d7e-c14d-9bea388b2709",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "06de28e9-c0f3-7d7e-c14d-9bea388b2709",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1987d80016b
                    },
                    "e-25": {
                        id: "e-25",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-24"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "06de28e9-c0f3-7d7e-c14d-9bea388b2709",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "06de28e9-c0f3-7d7e-c14d-9bea388b2709",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1987d80016b
                    },
                    "e-28": {
                        id: "e-28",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-29"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6891ea896e965d2e8a518ceb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6891ea896e965d2e8a518ceb",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1987e05123d
                    },
                    "e-30": {
                        id: "e-30",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "NAVBAR_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-60",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-31"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "46ebec14-7dfa-13fc-33af-50e25a5b67e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "46ebec14-7dfa-13fc-33af-50e25a5b67e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1987e49b2cd
                    },
                    "e-31": {
                        id: "e-31",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "NAVBAR_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-61",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-30"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "46ebec14-7dfa-13fc-33af-50e25a5b67e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "46ebec14-7dfa-13fc-33af-50e25a5b67e6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1987e49b2cd
                    },
                    "e-32": {
                        id: "e-32",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-62",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["small", "tiny"],
                        target: {
                            selector: ".new---hero-story-grid",
                            originalId: "6891ea896e965d2e8a518ceb|f1e26494-d1e8-440a-ad40-c4d6415ae1c9",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".new---hero-story-grid",
                            originalId: "6891ea896e965d2e8a518ceb|f1e26494-d1e8-440a-ad40-c4d6415ae1c9",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-62-p",
                            smoothing: 100,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1987e519689
                    },
                    "e-35": {
                        id: "e-35",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-63",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6891ea896e965d2e8a518ceb|a3eae7a5-d364-82b3-ea35-746fdc96b763",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6891ea896e965d2e8a518ceb|a3eae7a5-d364-82b3-ea35-746fdc96b763",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-63-p",
                            smoothing: 88,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1987edaa529
                    },
                    "e-40": {
                        id: "e-40",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-50",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-41"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b392c59b
                    },
                    "e-41": {
                        id: "e-41",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-40"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b392c59b
                    },
                    "e-42": {
                        id: "e-42",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-68",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-68-p",
                            smoothing: 83,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x198b392c59b
                    },
                    "e-43": {
                        id: "e-43",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-44"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b392c59b
                    },
                    "e-44": {
                        id: "e-44",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-43"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b392c59b
                    },
                    "e-47": {
                        id: "e-47",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-48"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b392c59b
                    },
                    "e-56": {
                        id: "e-56",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-50",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-57"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9|7a54e128-09aa-7522-1f15-8dad92417443",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9|7a54e128-09aa-7522-1f15-8dad92417443",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b39d2276
                    },
                    "e-57": {
                        id: "e-57",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-56"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9|7a54e128-09aa-7522-1f15-8dad92417443",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9|7a54e128-09aa-7522-1f15-8dad92417443",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b39d2276
                    },
                    "e-58": {
                        id: "e-58",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-59"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".new-navbar-navbutton",
                            originalId: "20dc8af1-6ac2-5fee-6078-149bbad47dea",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".new-navbar-navbutton",
                            originalId: "20dc8af1-6ac2-5fee-6078-149bbad47dea",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3a6946b
                    },
                    "e-59": {
                        id: "e-59",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-72",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-58"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".new-navbar-navbutton",
                            originalId: "20dc8af1-6ac2-5fee-6078-149bbad47dea",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".new-navbar-navbutton",
                            originalId: "20dc8af1-6ac2-5fee-6078-149bbad47dea",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3a6946b
                    },
                    "e-60": {
                        id: "e-60",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-73",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-61"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9|cf76741d-9e9b-927d-dc5a-d540d7b70ad5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9|cf76741d-9e9b-927d-dc5a-d540d7b70ad5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3a6946b
                    },
                    "e-61": {
                        id: "e-61",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-74",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-60"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9|cf76741d-9e9b-927d-dc5a-d540d7b70ad5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9|cf76741d-9e9b-927d-dc5a-d540d7b70ad5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3a6946b
                    },
                    "e-62": {
                        id: "e-62",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-75",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-63"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".new-navbar-navbutton",
                            originalId: "6891ea896e965d2e8a518ceb|afa04c77-c567-7e56-789c-dc84497703cb",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".new-navbar-navbutton",
                            originalId: "6891ea896e965d2e8a518ceb|afa04c77-c567-7e56-789c-dc84497703cb",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3a6e0a5
                    },
                    "e-63": {
                        id: "e-63",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-76",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-62"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".new-navbar-navbutton",
                            originalId: "6891ea896e965d2e8a518ceb|afa04c77-c567-7e56-789c-dc84497703cb",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".new-navbar-navbutton",
                            originalId: "6891ea896e965d2e8a518ceb|afa04c77-c567-7e56-789c-dc84497703cb",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3a6e0a5
                    },
                    "e-64": {
                        id: "e-64",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-77",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-65"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6891ea896e965d2e8a518ceb|46ebec14-7dfa-13fc-33af-50e25a5b67fd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6891ea896e965d2e8a518ceb|46ebec14-7dfa-13fc-33af-50e25a5b67fd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3a6e0a5
                    },
                    "e-65": {
                        id: "e-65",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-60",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-64"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6891ea896e965d2e8a518ceb|46ebec14-7dfa-13fc-33af-50e25a5b67fd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6891ea896e965d2e8a518ceb|46ebec14-7dfa-13fc-33af-50e25a5b67fd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3a6e0a5
                    },
                    "e-66": {
                        id: "e-66",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-50",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-67"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9|236910ce-926e-42df-c2e0-f05c2bc77e64",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9|236910ce-926e-42df-c2e0-f05c2bc77e64",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3ec00e3
                    },
                    "e-67": {
                        id: "e-67",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-66"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9|236910ce-926e-42df-c2e0-f05c2bc77e64",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9|236910ce-926e-42df-c2e0-f05c2bc77e64",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3ec00e3
                    },
                    "e-70": {
                        id: "e-70",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-50",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-71"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9|e5571619-db5c-0034-5bb5-77a5ca7dc5ba",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9|e5571619-db5c-0034-5bb5-77a5ca7dc5ba",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3ec5285
                    },
                    "e-71": {
                        id: "e-71",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-70"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9|e5571619-db5c-0034-5bb5-77a5ca7dc5ba",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9|e5571619-db5c-0034-5bb5-77a5ca7dc5ba",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3ec5285
                    },
                    "e-72": {
                        id: "e-72",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-50",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-73"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9|a59388eb-f769-220d-44e7-b37fbf34e311",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9|a59388eb-f769-220d-44e7-b37fbf34e311",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3ecbdc0
                    },
                    "e-73": {
                        id: "e-73",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-72"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0a8a4d76c4ad323a0c4e9|a59388eb-f769-220d-44e7-b37fbf34e311",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0a8a4d76c4ad323a0c4e9|a59388eb-f769-220d-44e7-b37fbf34e311",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b3ecbdc0
                    },
                    "e-74": {
                        id: "e-74",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-50",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-75"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0c384aaf4c4c6e71606bb|79382347-eea4-0d5b-9673-bbac6981bd65",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0c384aaf4c4c6e71606bb|79382347-eea4-0d5b-9673-bbac6981bd65",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b6bc878b
                    },
                    "e-75": {
                        id: "e-75",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-74"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a0c384aaf4c4c6e71606bb|79382347-eea4-0d5b-9673-bbac6981bd65",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a0c384aaf4c4c6e71606bb|79382347-eea4-0d5b-9673-bbac6981bd65",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b6bc878b
                    },
                    "e-78": {
                        id: "e-78",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-79",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a20f3d177dc57b2d05e059",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a20f3d177dc57b2d05e059",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-79-p",
                            smoothing: 83,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x198b90b8d3c
                    },
                    "e-79": {
                        id: "e-79",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-80",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-80"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a20f3d177dc57b2d05e059",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a20f3d177dc57b2d05e059",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b90b8d3c
                    },
                    "e-80": {
                        id: "e-80",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-81",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-79"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a20f3d177dc57b2d05e059",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a20f3d177dc57b2d05e059",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b90b8d3c
                    },
                    "e-81": {
                        id: "e-81",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-82"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a20f3d177dc57b2d05e059",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a20f3d177dc57b2d05e059",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b90b8d3c
                    },
                    "e-89": {
                        id: "e-89",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-73",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-90"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a20f3d177dc57b2d05e059|cf76741d-9e9b-927d-dc5a-d540d7b70ad5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a20f3d177dc57b2d05e059|cf76741d-9e9b-927d-dc5a-d540d7b70ad5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b90b8d3c
                    },
                    "e-90": {
                        id: "e-90",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-74",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-89"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a20f3d177dc57b2d05e059|cf76741d-9e9b-927d-dc5a-d540d7b70ad5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a20f3d177dc57b2d05e059|cf76741d-9e9b-927d-dc5a-d540d7b70ad5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198b90b8d3c
                    },
                    "e-91": {
                        id: "e-91",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-50",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-92"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198bb2b80ec
                    },
                    "e-92": {
                        id: "e-92",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-91"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198bb2b80ec
                    },
                    "e-93": {
                        id: "e-93",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-82",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-82-p",
                            smoothing: 83,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x198bb2b80ec
                    },
                    "e-94": {
                        id: "e-94",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-83",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-95"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198bb2b80ec
                    },
                    "e-95": {
                        id: "e-95",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-84",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-94"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198bb2b80ec
                    },
                    "e-96": {
                        id: "e-96",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-97"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198bb2b80ec
                    },
                    "e-102": {
                        id: "e-102",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-50",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-103"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|7a54e128-09aa-7522-1f15-8dad92417443",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|7a54e128-09aa-7522-1f15-8dad92417443",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198bb2b80ec
                    },
                    "e-103": {
                        id: "e-103",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-102"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|7a54e128-09aa-7522-1f15-8dad92417443",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|7a54e128-09aa-7522-1f15-8dad92417443",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198bb2b80ec
                    },
                    "e-104": {
                        id: "e-104",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-73",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-105"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|cf76741d-9e9b-927d-dc5a-d540d7b70ad5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|cf76741d-9e9b-927d-dc5a-d540d7b70ad5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198bb2b80ec
                    },
                    "e-105": {
                        id: "e-105",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "NAVBAR_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-74",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-104"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|cf76741d-9e9b-927d-dc5a-d540d7b70ad5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|cf76741d-9e9b-927d-dc5a-d540d7b70ad5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198bb2b80ec
                    },
                    "e-106": {
                        id: "e-106",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-85",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|66736544-58ec-04af-7ccc-13af19234b29",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|66736544-58ec-04af-7ccc-13af19234b29",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-85-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x198bba2bbec
                    },
                    "e-107": {
                        id: "e-107",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-86",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-108"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|8c16e92a-ffee-6645-231d-0e2e525e9f82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198bcc9806e
                    },
                    "e-109": {
                        id: "e-109",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-87",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-110"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|89746c36-e444-d5fd-3249-56eccf0d58cc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|89746c36-e444-d5fd-3249-56eccf0d58cc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198bce1880f
                    },
                    "e-111": {
                        id: "e-111",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-86",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-112"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|3f5a4613-f013-9253-2ee2-5cad083e634f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|3f5a4613-f013-9253-2ee2-5cad083e634f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198bce7f419
                    },
                    "e-113": {
                        id: "e-113",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-64",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-114"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "0a561e35-7639-4379-1146-af34dae42f03",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "0a561e35-7639-4379-1146-af34dae42f03",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198c0dd2c96
                    },
                    "e-114": {
                        id: "e-114",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-65",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-113"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "0a561e35-7639-4379-1146-af34dae42f03",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "0a561e35-7639-4379-1146-af34dae42f03",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198c0dd2c96
                    },
                    "e-115": {
                        id: "e-115",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "DROPDOWN_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-116"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "0a561e35-7639-4379-1146-af34dae42f40",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "0a561e35-7639-4379-1146-af34dae42f40",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198c0dd2c96
                    },
                    "e-116": {
                        id: "e-116",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "DROPDOWN_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-115"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "0a561e35-7639-4379-1146-af34dae42f40",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "0a561e35-7639-4379-1146-af34dae42f40",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198c0dd2c96
                    },
                    "e-117": {
                        id: "e-117",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-86",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-118"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|ab7adaff-a204-0787-22d0-ca07928d5e6a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|ab7adaff-a204-0787-22d0-ca07928d5e6a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198c2678728
                    },
                    "e-119": {
                        id: "e-119",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-50",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-120"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6891ea896e965d2e8a518ceb|a5e9c5cf-b841-f92d-80d7-88db0021e874",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6891ea896e965d2e8a518ceb|a5e9c5cf-b841-f92d-80d7-88db0021e874",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198c277b5fc
                    },
                    "e-120": {
                        id: "e-120",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-119"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6891ea896e965d2e8a518ceb|a5e9c5cf-b841-f92d-80d7-88db0021e874",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6891ea896e965d2e8a518ceb|a5e9c5cf-b841-f92d-80d7-88db0021e874",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198c277b5fc
                    },
                    "e-121": {
                        id: "e-121",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-89",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6891ea896e965d2e8a518ceb|3d3bb76d-ae12-146f-4300-7825e3efcd0d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6891ea896e965d2e8a518ceb|3d3bb76d-ae12-146f-4300-7825e3efcd0d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-89-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x198c283689f
                    },
                    "e-122": {
                        id: "e-122",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-50",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-123"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|48ddfbdc-4d47-11ff-a5a8-d3998ee201cd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|48ddfbdc-4d47-11ff-a5a8-d3998ee201cd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198c29d6b8a
                    },
                    "e-123": {
                        id: "e-123",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-122"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|48ddfbdc-4d47-11ff-a5a8-d3998ee201cd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|48ddfbdc-4d47-11ff-a5a8-d3998ee201cd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198c29d6b8a
                    },
                    "e-124": {
                        id: "e-124",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-90",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|6891ea896e965d2e8a518cf1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|6891ea896e965d2e8a518cf1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-90-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x198c29f36fe
                    },
                    "e-125": {
                        id: "e-125",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-86",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-126"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68a29a7e259fd242a0e42dc3|48ddfbdc-4d47-11ff-a5a8-d3998ee201cb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68a29a7e259fd242a0e42dc3|48ddfbdc-4d47-11ff-a5a8-d3998ee201cb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198c2a2ee78
                    }
                },
                actionLists: {
                    "a-46": {
                        id: "a-46",
                        title: "plan-selection-modal",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-46-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".v4-promotion-plan-modal",
                                        selectorGuids: ["fd635298-3391-1b9b-19fd-84c1cb4abbb3"]
                                    },
                                    value: "none"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-46-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".v4-promotion-plan-modal",
                                        selectorGuids: ["fd635298-3391-1b9b-19fd-84c1cb4abbb3"]
                                    },
                                    value: "flex"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x189f8ef7971
                    },
                    "a-47": {
                        id: "a-47",
                        title: "Pricing-Plan-Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-47-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".v4-promotion-plan-modal",
                                        selectorGuids: ["fd635298-3391-1b9b-19fd-84c1cb4abbb3"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x189f8f3fa49
                    },
                    "a-48": {
                        id: "a-48",
                        title: "New - NavButton Scale In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-48-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 150,
                                    target: {
                                        useEventTarget: !0,
                                        id: "46ebec14-7dfa-13fc-33af-50e25a5b67f8"
                                    },
                                    xValue: 1.03,
                                    yValue: 1.03,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987a47d530
                    },
                    "a-49": {
                        id: "a-49",
                        title: "New - NavButton Scale Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-49-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 150,
                                    target: {
                                        useEventTarget: !0,
                                        id: "46ebec14-7dfa-13fc-33af-50e25a5b67f8"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987a47d530
                    },
                    "a-50": {
                        id: "a-50",
                        title: "New - ButtonHero - In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-50-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 120,
                                    target: {
                                        useEventTarget: !0,
                                        id: "6891ea896e965d2e8a518ceb|8c16e92a-ffee-6645-231d-0e2e525e9f82"
                                    },
                                    xValue: 1.01,
                                    yValue: 1.01,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987d4ad3d8
                    },
                    "a-51": {
                        id: "a-51",
                        title: "New - ButtonHero - Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-51-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 120,
                                    target: {
                                        useEventTarget: !0,
                                        id: "6891ea896e965d2e8a518ceb|8c16e92a-ffee-6645-231d-0e2e525e9f82"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987d4ad3d8
                    },
                    "a-52": {
                        id: "a-52",
                        title: "Page Scroll Nav BG",
                        continuousParameterGroups: [{
                            id: "a-52-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 1,
                                actionItems: [{
                                    id: "a-52-n",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: [.363, .176, .801, .685],
                                        duration: 500,
                                        target: {
                                            id: "6891ea896e965d2e8a518ceb|46ebec14-7dfa-13fc-33af-50e25a5b67fd"
                                        },
                                        globalSwatchId: "--_new-design---layer--transparent",
                                        rValue: 244,
                                        bValue: 255,
                                        gValue: 248,
                                        aValue: 0
                                    }
                                }, {
                                    id: "a-52-n-4",
                                    actionTypeId: "STYLE_BORDER",
                                    config: {
                                        delay: 0,
                                        easing: [.363, .176, .801, .685],
                                        duration: 500,
                                        target: {
                                            id: "6891ea896e965d2e8a518ceb|46ebec14-7dfa-13fc-33af-50e25a5b67fd"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 0
                                    }
                                }]
                            }, {
                                keyframe: 4,
                                actionItems: [{
                                    id: "a-52-n-2",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: [.158, .311, .614, .901],
                                        duration: 500,
                                        target: {
                                            id: "6891ea896e965d2e8a518ceb|46ebec14-7dfa-13fc-33af-50e25a5b67fd"
                                        },
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: .5
                                    }
                                }, {
                                    id: "a-52-n-3",
                                    actionTypeId: "STYLE_BORDER",
                                    config: {
                                        delay: 0,
                                        easing: [.158, .311, .614, .901],
                                        duration: 500,
                                        target: {
                                            id: "6891ea896e965d2e8a518ceb|46ebec14-7dfa-13fc-33af-50e25a5b67fd"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: .1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1987d68c2f9
                    },
                    "a-54": {
                        id: "a-54",
                        title: "Page Scroll Up - Show Nav",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-54-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.215, .61, .355, 1],
                                    duration: 200,
                                    target: {
                                        id: "6891ea896e965d2e8a518ceb|46ebec14-7dfa-13fc-33af-50e25a5b67fd"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987d765965
                    },
                    "a-53": {
                        id: "a-53",
                        title: "Page Scroll Down - Hide Nav",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-53-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.55, .055, .675, .19],
                                    duration: 200,
                                    target: {
                                        id: "6891ea896e965d2e8a518ceb|46ebec14-7dfa-13fc-33af-50e25a5b67fd"
                                    },
                                    yValue: -73,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987d765965
                    },
                    "a-55": {
                        id: "a-55",
                        title: "New - StoryCard Hover - In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-55-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.25, .1, .25, 1],
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".new---hero-story-grid-img",
                                        selectorGuids: ["73806123-e28d-e5ac-28f6-da906442c722"]
                                    },
                                    xValue: 1.05,
                                    yValue: 1.05,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987d8022ec
                    },
                    "a-56": {
                        id: "a-56",
                        title: "New - StoryCard Hover - Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-56-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.215, .61, .355, 1],
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".new---hero-story-grid-img",
                                        selectorGuids: ["73806123-e28d-e5ac-28f6-da906442c722"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987d8022ec
                    },
                    "a-59": {
                        id: "a-59",
                        title: "New - Habit Icon Grid Carousel",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-59-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 1e4,
                                    target: {
                                        selector: ".new---hn-bignumber-icon-grid-copy",
                                        selectorGuids: ["c720b410-8e43-607c-9fc6-370a37ba105a"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-59-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 15e3,
                                    target: {
                                        selector: ".new---hn-bignumber-icon-grid-copy",
                                        selectorGuids: ["c720b410-8e43-607c-9fc6-370a37ba105a"]
                                    },
                                    xValue: -1488,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-59-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".new---hn-bignumber-icon-grid-copy",
                                        selectorGuids: ["c720b410-8e43-607c-9fc6-370a37ba105a"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1987e052249
                    },
                    "a-60": {
                        id: "a-60",
                        title: "New - Open menu BG",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-60-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: [.755, .05, .855, .06],
                                    duration: 250,
                                    target: {
                                        useEventTarget: !0,
                                        id: "46ebec14-7dfa-13fc-33af-50e25a5b67e6"
                                    },
                                    globalSwatchId: "--_new-design---color--white--w-100",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987e4a5515
                    },
                    "a-61": {
                        id: "a-61",
                        title: "New - Close menu BG",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-61-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: [.755, .05, .855, .06],
                                    duration: 250,
                                    target: {
                                        useEventTarget: !0,
                                        id: "46ebec14-7dfa-13fc-33af-50e25a5b67e6"
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: .3
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987e4a5515
                    },
                    "a-62": {
                        id: "a-62",
                        title: "New - Story Mobile Scroll",
                        continuousParameterGroups: [{
                            id: "a-62-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-62-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            id: "6891ea896e965d2e8a518ceb|f1e26494-d1e8-440a-ad40-c4d6415ae1c9"
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-62-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            id: "6891ea896e965d2e8a518ceb|f1e26494-d1e8-440a-ad40-c4d6415ae1c9"
                                        },
                                        xValue: -72,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1987e51c039
                    },
                    "a-63": {
                        id: "a-63",
                        title: "New - Single Progress View In",
                        continuousParameterGroups: [{
                            id: "a-63-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-63-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "6891ea896e965d2e8a518ceb|83cb00f8-ffde-5087-ca6a-378dd334be6c"
                                        },
                                        yValue: 30,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-63-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "6891ea896e965d2e8a518ceb|83cb00f8-ffde-5087-ca6a-378dd334be6c"
                                        },
                                        yValue: -60,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1987ec8e2f8
                    },
                    "a-68": {
                        id: "a-68",
                        title: "Page Scroll Nav BG 2",
                        continuousParameterGroups: [{
                            id: "a-68-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 1,
                                actionItems: [{
                                    id: "a-68-n",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: [.363, .176, .801, .685],
                                        duration: 500,
                                        target: {
                                            id: "68a0a8a4d76c4ad323a0c4e9|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                        },
                                        globalSwatchId: "--_new-design---layer--transparent",
                                        rValue: 244,
                                        bValue: 255,
                                        gValue: 248,
                                        aValue: 0
                                    }
                                }, {
                                    id: "a-68-n-2",
                                    actionTypeId: "STYLE_BORDER",
                                    config: {
                                        delay: 0,
                                        easing: [.363, .176, .801, .685],
                                        duration: 500,
                                        target: {
                                            id: "68a0a8a4d76c4ad323a0c4e9|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 0
                                    }
                                }]
                            }, {
                                keyframe: 4,
                                actionItems: [{
                                    id: "a-68-n-3",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: [.158, .311, .614, .901],
                                        duration: 500,
                                        target: {
                                            id: "68a0a8a4d76c4ad323a0c4e9|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                        },
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: .5
                                    }
                                }, {
                                    id: "a-68-n-4",
                                    actionTypeId: "STYLE_BORDER",
                                    config: {
                                        delay: 0,
                                        easing: [.158, .311, .614, .901],
                                        duration: 500,
                                        target: {
                                            id: "68a0a8a4d76c4ad323a0c4e9|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: .1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1987d68c2f9
                    },
                    "a-69": {
                        id: "a-69",
                        title: "Page Scroll Up - Show Nav Download",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-69-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.215, .61, .355, 1],
                                    duration: 200,
                                    target: {
                                        id: "68a0a8a4d76c4ad323a0c4e9|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987d765965
                    },
                    "a-70": {
                        id: "a-70",
                        title: "Page Scroll Down - Hide Nav Download",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-70-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.55, .055, .675, .19],
                                    duration: 200,
                                    target: {
                                        id: "68a0a8a4d76c4ad323a0c4e9|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                    },
                                    yValue: -73,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987d765965
                    },
                    "a-71": {
                        id: "a-71",
                        title: "New - NavButton Scale In 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-71-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 150,
                                    target: {
                                        useEventTarget: !0,
                                        id: "20dc8af1-6ac2-5fee-6078-149bbad47dea"
                                    },
                                    xValue: 1.03,
                                    yValue: 1.03,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987a47d530
                    },
                    "a-72": {
                        id: "a-72",
                        title: "New - NavButton Scale Out 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-72-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 150,
                                    target: {
                                        useEventTarget: !0,
                                        id: "20dc8af1-6ac2-5fee-6078-149bbad47dea"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987a47d530
                    },
                    "a-73": {
                        id: "a-73",
                        title: "New - Open menu BG 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-73-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: [.755, .05, .855, .06],
                                    duration: 250,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68a0a8a4d76c4ad323a0c4e9|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                    },
                                    globalSwatchId: "--_new-design---color--white--w-100",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987e4a5515
                    },
                    "a-74": {
                        id: "a-74",
                        title: "New - Close menu BG 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-74-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: [.755, .05, .855, .06],
                                    duration: 250,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68a0a8a4d76c4ad323a0c4e9|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: .3
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987e4a5515
                    },
                    "a-75": {
                        id: "a-75",
                        title: "New - NavButton Scale In 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-75-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 150,
                                    target: {
                                        useEventTarget: !0,
                                        id: "6891ea896e965d2e8a518ceb|afa04c77-c567-7e56-789c-dc84497703cb"
                                    },
                                    xValue: 1.03,
                                    yValue: 1.03,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987a47d530
                    },
                    "a-76": {
                        id: "a-76",
                        title: "New - NavButton Scale Out 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-76-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 150,
                                    target: {
                                        useEventTarget: !0,
                                        id: "6891ea896e965d2e8a518ceb|afa04c77-c567-7e56-789c-dc84497703cb"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987a47d530
                    },
                    "a-77": {
                        id: "a-77",
                        title: "New - Open menu BG 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-77-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: [.755, .05, .855, .06],
                                    duration: 250,
                                    target: {
                                        useEventTarget: !0,
                                        id: "6891ea896e965d2e8a518ceb|46ebec14-7dfa-13fc-33af-50e25a5b67fd"
                                    },
                                    globalSwatchId: "--_new-design---color--white--w-100",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987e4a5515
                    },
                    "a-79": {
                        id: "a-79",
                        title: "Page Scroll Nav BG 3",
                        continuousParameterGroups: [{
                            id: "a-79-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 1,
                                actionItems: [{
                                    id: "a-79-n",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: [.363, .176, .801, .685],
                                        duration: 500,
                                        target: {
                                            id: "68a20f3d177dc57b2d05e059|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                        },
                                        globalSwatchId: "--_new-design---layer--transparent",
                                        rValue: 244,
                                        bValue: 255,
                                        gValue: 248,
                                        aValue: 0
                                    }
                                }, {
                                    id: "a-79-n-2",
                                    actionTypeId: "STYLE_BORDER",
                                    config: {
                                        delay: 0,
                                        easing: [.363, .176, .801, .685],
                                        duration: 500,
                                        target: {
                                            id: "68a20f3d177dc57b2d05e059|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 0
                                    }
                                }]
                            }, {
                                keyframe: 4,
                                actionItems: [{
                                    id: "a-79-n-3",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: [.158, .311, .614, .901],
                                        duration: 500,
                                        target: {
                                            id: "68a20f3d177dc57b2d05e059|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                        },
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: .5
                                    }
                                }, {
                                    id: "a-79-n-4",
                                    actionTypeId: "STYLE_BORDER",
                                    config: {
                                        delay: 0,
                                        easing: [.158, .311, .614, .901],
                                        duration: 500,
                                        target: {
                                            id: "68a20f3d177dc57b2d05e059|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: .1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1987d68c2f9
                    },
                    "a-80": {
                        id: "a-80",
                        title: "Page Scroll Up - Show Nav Download 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-80-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.215, .61, .355, 1],
                                    duration: 200,
                                    target: {
                                        id: "68a20f3d177dc57b2d05e059|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987d765965
                    },
                    "a-81": {
                        id: "a-81",
                        title: "Page Scroll Down - Hide Nav Download 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-81-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.55, .055, .675, .19],
                                    duration: 200,
                                    target: {
                                        id: "68a20f3d177dc57b2d05e059|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                    },
                                    yValue: -73,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987d765965
                    },
                    "a-82": {
                        id: "a-82",
                        title: "Page Scroll Nav BG 4",
                        continuousParameterGroups: [{
                            id: "a-82-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 1,
                                actionItems: [{
                                    id: "a-82-n",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: [.363, .176, .801, .685],
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                        },
                                        globalSwatchId: "--_new-design---layer--transparent",
                                        rValue: 244,
                                        bValue: 255,
                                        gValue: 248,
                                        aValue: 0
                                    }
                                }, {
                                    id: "a-82-n-2",
                                    actionTypeId: "STYLE_BORDER",
                                    config: {
                                        delay: 0,
                                        easing: [.363, .176, .801, .685],
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: 0
                                    }
                                }]
                            }, {
                                keyframe: 4,
                                actionItems: [{
                                    id: "a-82-n-3",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: [.158, .311, .614, .901],
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                        },
                                        globalSwatchId: "",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: .5
                                    }
                                }, {
                                    id: "a-82-n-4",
                                    actionTypeId: "STYLE_BORDER",
                                    config: {
                                        delay: 0,
                                        easing: [.158, .311, .614, .901],
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: .1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1987d68c2f9
                    },
                    "a-83": {
                        id: "a-83",
                        title: "Page Scroll Up - Show Nav Download 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-83-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.215, .61, .355, 1],
                                    duration: 200,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987d765965
                    },
                    "a-84": {
                        id: "a-84",
                        title: "Page Scroll Down - Hide Nav Download 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-84-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.55, .055, .675, .19],
                                    duration: 200,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                    },
                                    yValue: -73,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1987d765965
                    },
                    "a-85": {
                        id: "a-85",
                        title: "New / HT / Section 1",
                        continuousParameterGroups: [{
                            id: "a-85-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-85-n",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|047620ff-57ff-2d84-2e47-27f8cac9fb42"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: .1
                                    }
                                }, {
                                    id: "a-85-n-6",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|047620ff-57ff-2d84-2e47-27f8cac9fb42"
                                        },
                                        globalSwatchId: "--_new-design---content--5",
                                        rValue: 104,
                                        bValue: 104,
                                        gValue: 104,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: .1,
                                actionItems: [{
                                    id: "a-85-n-2",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|047620ff-57ff-2d84-2e47-27f8cac9fb42"
                                        },
                                        globalSwatchId: "--_new-design---color--brand--1",
                                        rValue: 42,
                                        bValue: 244,
                                        gValue: 103,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-5",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|047620ff-57ff-2d84-2e47-27f8cac9fb42"
                                        },
                                        globalSwatchId: "--_new-design---color--white--w-100",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 27,
                                actionItems: [{
                                    id: "a-85-n-4",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|047620ff-57ff-2d84-2e47-27f8cac9fb42"
                                        },
                                        globalSwatchId: "--_new-design---color--brand--1",
                                        rValue: 42,
                                        bValue: 244,
                                        gValue: 103,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-7",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|047620ff-57ff-2d84-2e47-27f8cac9fb42"
                                        },
                                        globalSwatchId: "--_new-design---color--white--w-100",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-11",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|cd014f87-eddc-dbae-138a-4d747d33a72a"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: .1
                                    }
                                }, {
                                    id: "a-85-n-12",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|cd014f87-eddc-dbae-138a-4d747d33a72a"
                                        },
                                        globalSwatchId: "--_new-design---content--5",
                                        rValue: 104,
                                        bValue: 104,
                                        gValue: 104,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 27.01,
                                actionItems: [{
                                    id: "a-85-n-3",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|047620ff-57ff-2d84-2e47-27f8cac9fb42"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: .1
                                    }
                                }, {
                                    id: "a-85-n-8",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|047620ff-57ff-2d84-2e47-27f8cac9fb42"
                                        },
                                        globalSwatchId: "--_new-design---content--5",
                                        rValue: 104,
                                        bValue: 104,
                                        gValue: 104,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-9",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|cd014f87-eddc-dbae-138a-4d747d33a72a"
                                        },
                                        globalSwatchId: "--_new-design---color--brand--1",
                                        rValue: 42,
                                        bValue: 244,
                                        gValue: 103,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-10",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|cd014f87-eddc-dbae-138a-4d747d33a72a"
                                        },
                                        globalSwatchId: "--_new-design---color--white--w-100",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 43,
                                actionItems: [{
                                    id: "a-85-n-15",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|cd014f87-eddc-dbae-138a-4d747d33a72a"
                                        },
                                        globalSwatchId: "--_new-design---color--brand--1",
                                        rValue: 42,
                                        bValue: 244,
                                        gValue: 103,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-16",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|cd014f87-eddc-dbae-138a-4d747d33a72a"
                                        },
                                        globalSwatchId: "--_new-design---color--white--w-100",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-17",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|be48acbd-5b50-4dac-fca9-992bdf2a04df"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: .1
                                    }
                                }, {
                                    id: "a-85-n-18",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|be48acbd-5b50-4dac-fca9-992bdf2a04df"
                                        },
                                        globalSwatchId: "--_new-design---content--5",
                                        rValue: 104,
                                        bValue: 104,
                                        gValue: 104,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 43.01,
                                actionItems: [{
                                    id: "a-85-n-13",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|cd014f87-eddc-dbae-138a-4d747d33a72a"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: .1
                                    }
                                }, {
                                    id: "a-85-n-14",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|cd014f87-eddc-dbae-138a-4d747d33a72a"
                                        },
                                        globalSwatchId: "--_new-design---content--5",
                                        rValue: 104,
                                        bValue: 104,
                                        gValue: 104,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-19",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|be48acbd-5b50-4dac-fca9-992bdf2a04df"
                                        },
                                        globalSwatchId: "--_new-design---color--brand--1",
                                        rValue: 42,
                                        bValue: 244,
                                        gValue: 103,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-20",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|be48acbd-5b50-4dac-fca9-992bdf2a04df"
                                        },
                                        globalSwatchId: "--_new-design---color--white--w-100",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 53,
                                actionItems: [{
                                    id: "a-85-n-21",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|be48acbd-5b50-4dac-fca9-992bdf2a04df"
                                        },
                                        globalSwatchId: "--_new-design---color--brand--1",
                                        rValue: 42,
                                        bValue: 244,
                                        gValue: 103,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-22",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|be48acbd-5b50-4dac-fca9-992bdf2a04df"
                                        },
                                        globalSwatchId: "--_new-design---color--white--w-100",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-23",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|490845e2-15c9-527e-a36d-db6745080d86"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: .1
                                    }
                                }, {
                                    id: "a-85-n-24",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|490845e2-15c9-527e-a36d-db6745080d86"
                                        },
                                        globalSwatchId: "--_new-design---content--5",
                                        rValue: 104,
                                        bValue: 104,
                                        gValue: 104,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 53.01,
                                actionItems: [{
                                    id: "a-85-n-27",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|490845e2-15c9-527e-a36d-db6745080d86"
                                        },
                                        globalSwatchId: "--_new-design---color--brand--1",
                                        rValue: 42,
                                        bValue: 244,
                                        gValue: 103,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-28",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|490845e2-15c9-527e-a36d-db6745080d86"
                                        },
                                        globalSwatchId: "--_new-design---color--white--w-100",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-29",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|be48acbd-5b50-4dac-fca9-992bdf2a04df"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: .1
                                    }
                                }, {
                                    id: "a-85-n-30",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|be48acbd-5b50-4dac-fca9-992bdf2a04df"
                                        },
                                        globalSwatchId: "--_new-design---content--5",
                                        rValue: 104,
                                        bValue: 104,
                                        gValue: 104,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 78,
                                actionItems: [{
                                    id: "a-85-n-31",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|490845e2-15c9-527e-a36d-db6745080d86"
                                        },
                                        globalSwatchId: "--_new-design---color--brand--1",
                                        rValue: 42,
                                        bValue: 244,
                                        gValue: 103,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-32",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|490845e2-15c9-527e-a36d-db6745080d86"
                                        },
                                        globalSwatchId: "--_new-design---color--white--w-100",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-37",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|f1f2f0d4-b59f-72bd-3c6b-bd0700f735c8"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: .1
                                    }
                                }, {
                                    id: "a-85-n-38",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|f1f2f0d4-b59f-72bd-3c6b-bd0700f735c8"
                                        },
                                        globalSwatchId: "--_new-design---content--5",
                                        rValue: 104,
                                        bValue: 104,
                                        gValue: 104,
                                        aValue: 1
                                    }
                                }]
                            }, {
                                keyframe: 78.1,
                                actionItems: [{
                                    id: "a-85-n-33",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|490845e2-15c9-527e-a36d-db6745080d86"
                                        },
                                        globalSwatchId: "",
                                        rValue: 0,
                                        bValue: 0,
                                        gValue: 0,
                                        aValue: .1
                                    }
                                }, {
                                    id: "a-85-n-34",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|490845e2-15c9-527e-a36d-db6745080d86"
                                        },
                                        globalSwatchId: "--_new-design---content--5",
                                        rValue: 104,
                                        bValue: 104,
                                        gValue: 104,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-35",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|f1f2f0d4-b59f-72bd-3c6b-bd0700f735c8"
                                        },
                                        globalSwatchId: "--_new-design---color--brand--1",
                                        rValue: 42,
                                        bValue: 244,
                                        gValue: 103,
                                        aValue: 1
                                    }
                                }, {
                                    id: "a-85-n-36",
                                    actionTypeId: "STYLE_TEXT_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "easeInOut",
                                        duration: 500,
                                        target: {
                                            id: "68a29a7e259fd242a0e42dc3|f1f2f0d4-b59f-72bd-3c6b-bd0700f735c8"
                                        },
                                        globalSwatchId: "--_new-design---color--white--w-100",
                                        rValue: 255,
                                        bValue: 255,
                                        gValue: 255,
                                        aValue: 1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x198bb8671df
                    },
                    "a-86": {
                        id: "a-86",
                        title: "New / Open Purchase Modal - In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-86-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|92771c9d-7e28-ee7f-880a-672f6bab95e0"
                                    },
                                    xValue: 0,
                                    yValue: 100,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-86-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|92771c9d-7e28-ee7f-880a-672f6bab95e0"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-86-n-8",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|625ae5fd-5ddb-d5b9-f9e7-034177f95b3c"
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 0
                                }
                            }, {
                                id: "a-86-n-9",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|625ae5fd-5ddb-d5b9-f9e7-034177f95b3c"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-86-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                    },
                                    value: "none"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-86-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|625ae5fd-5ddb-d5b9-f9e7-034177f95b3c"
                                    },
                                    value: "flex"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-86-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 100,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|625ae5fd-5ddb-d5b9-f9e7-034177f95b3c"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-86-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.215, .61, .355, 1],
                                    duration: 350,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|92771c9d-7e28-ee7f-880a-672f6bab95e0"
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-86-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: [.215, .61, .355, 1],
                                    duration: 350,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|92771c9d-7e28-ee7f-880a-672f6bab95e0"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x198bcc9c44c
                    },
                    "a-87": {
                        id: "a-87",
                        title: "New / Open Purchase Modal - In 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-87-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|92771c9d-7e28-ee7f-880a-672f6bab95e0"
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-87-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|92771c9d-7e28-ee7f-880a-672f6bab95e0"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-87-n-3",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|625ae5fd-5ddb-d5b9-f9e7-034177f95b3c"
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 0
                                }
                            }, {
                                id: "a-87-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|625ae5fd-5ddb-d5b9-f9e7-034177f95b3c"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-87-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|cf76741d-9e9b-927d-dc5a-d540d7b70ad5"
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-87-n-6",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|625ae5fd-5ddb-d5b9-f9e7-034177f95b3c"
                                    },
                                    value: "none"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-87-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 100,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|625ae5fd-5ddb-d5b9-f9e7-034177f95b3c"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-87-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.215, .61, .355, 1],
                                    duration: 350,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|92771c9d-7e28-ee7f-880a-672f6bab95e0"
                                    },
                                    xValue: 0,
                                    yValue: 100,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-87-n-9",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: [.215, .61, .355, 1],
                                    duration: 350,
                                    target: {
                                        id: "68a29a7e259fd242a0e42dc3|92771c9d-7e28-ee7f-880a-672f6bab95e0"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x198bcc9c44c
                    },
                    "a-64": {
                        id: "a-64",
                        title: "New - Footer - Copy Button Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-64-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-64-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: [.55, .055, .675, .19],
                                    duration: 150,
                                    target: {
                                        useEventTarget: !0,
                                        id: "6891ea896e965d2e8a518ceb|86d5969b-4e53-a218-6818-f8f2245b0a22"
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: .1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-64-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 100,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19882afacb9
                    },
                    "a-65": {
                        id: "a-65",
                        title: "New - Footer - Copy Button Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-65-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: [.55, .055, .675, .19],
                                    duration: 150,
                                    target: {
                                        useEventTarget: !0,
                                        id: "6891ea896e965d2e8a518ceb|86d5969b-4e53-a218-6818-f8f2245b0a22"
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-65-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 100,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19882afacb9
                    },
                    "a-66": {
                        id: "a-66",
                        title: "Dropdown Arrow Rotate - In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-66-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: [.25, .46, .45, .94],
                                    duration: 150,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".new---footer-dropdown-icon",
                                        selectorGuids: ["087c9699-c015-ab0d-71c7-18fd9f65e8d5"]
                                    },
                                    yValue: 0,
                                    zValue: 180,
                                    xUnit: "DEG",
                                    yUnit: "deg",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x198833ac690
                    },
                    "a-67": {
                        id: "a-67",
                        title: "Dropdown Arrow Rotate - Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-67-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: [.25, .46, .45, .94],
                                    duration: 150,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".new---footer-dropdown-icon",
                                        selectorGuids: ["087c9699-c015-ab0d-71c7-18fd9f65e8d5"]
                                    },
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "deg",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x198833ac690
                    },
                    "a-89": {
                        id: "a-89",
                        title: "Show Mobile Download Butotn",
                        continuousParameterGroups: [{
                            id: "a-89-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 14,
                                actionItems: [{
                                    id: "a-89-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "SIBLINGS",
                                            selector: ".new---button-hero.sticky-mobile",
                                            selectorGuids: ["e9d5eea8-db04-9788-1cd7-0b0ec31e8fe2", "24fabf16-1172-6dce-0afe-d9feaffadde7"]
                                        },
                                        yValue: 160,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 15,
                                actionItems: [{
                                    id: "a-89-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.25, .25, .75, .75],
                                        duration: 500,
                                        target: {
                                            useEventTarget: "SIBLINGS",
                                            selector: ".new---button-hero.sticky-mobile",
                                            selectorGuids: ["e9d5eea8-db04-9788-1cd7-0b0ec31e8fe2", "24fabf16-1172-6dce-0afe-d9feaffadde7"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 87,
                                actionItems: [{
                                    id: "a-89-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "SIBLINGS",
                                            selector: ".new---button-hero.sticky-mobile",
                                            selectorGuids: ["e9d5eea8-db04-9788-1cd7-0b0ec31e8fe2", "24fabf16-1172-6dce-0afe-d9feaffadde7"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 88,
                                actionItems: [{
                                    id: "a-89-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "SIBLINGS",
                                            selector: ".new---button-hero.sticky-mobile",
                                            selectorGuids: ["e9d5eea8-db04-9788-1cd7-0b0ec31e8fe2", "24fabf16-1172-6dce-0afe-d9feaffadde7"]
                                        },
                                        xValue: 0,
                                        yValue: 120,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x198c2838b93
                    },
                    "a-90": {
                        id: "a-90",
                        title: "Show Mobile Team Button",
                        continuousParameterGroups: [{
                            id: "a-90-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 30,
                                actionItems: [{
                                    id: "a-90-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".new---button-hero.sticky-mobile",
                                            selectorGuids: ["e9d5eea8-db04-9788-1cd7-0b0ec31e8fe2", "24fabf16-1172-6dce-0afe-d9feaffadde7"]
                                        },
                                        yValue: 160,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 31,
                                actionItems: [{
                                    id: "a-90-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: [.25, .25, .75, .75],
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".new---button-hero.sticky-mobile",
                                            selectorGuids: ["e9d5eea8-db04-9788-1cd7-0b0ec31e8fe2", "24fabf16-1172-6dce-0afe-d9feaffadde7"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 75,
                                actionItems: [{
                                    id: "a-90-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".new---button-hero.sticky-mobile",
                                            selectorGuids: ["e9d5eea8-db04-9788-1cd7-0b0ec31e8fe2", "24fabf16-1172-6dce-0afe-d9feaffadde7"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 76,
                                actionItems: [{
                                    id: "a-90-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".new---button-hero.sticky-mobile",
                                            selectorGuids: ["e9d5eea8-db04-9788-1cd7-0b0ec31e8fe2", "24fabf16-1172-6dce-0afe-d9feaffadde7"]
                                        },
                                        xValue: 0,
                                        yValue: 120,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x198c2838b93
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            })
        }
    }
]);