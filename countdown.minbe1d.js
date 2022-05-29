/*! Thrive Architect - 2021-06-18
 * http://www.thrivethemes.com/
 * Copyright (c) 2021 Thrive Themes */

"use strict";

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(t, e) {
    for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
}

function _createClass(t, e, n) {
    return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t
}

function _defineProperty(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}! function (c) {
    var u, f, a, p, v, s = {
            ".js": [],
            ".json": [],
            ".css": [],
            ".html": []
        },
        d = "function" == typeof require ? require : null;
    return p = function (t) {
        var e = new Error("Could not find module '" + t + "'");
        return e.code = "MODULE_NOT_FOUND", e
    }, v = function (t, e, n) {
        var i, a;
        if ("function" == typeof t[e + n]) return e + n;
        for (i = 0; a = s[n][i]; ++i)
            if ("function" == typeof t[e + a]) return e + a;
        return null
    }, u = function (t, e, n, i, a, s) {
        var o, r, c, d, l, h;
        for ("." !== (o = (n = n.split("/")).pop()) && ".." !== o || (n.push(o), o = ""); null != (r = n.shift());)
            if (r && "." !== r && (".." === r ? (t = e.pop(), s = s.slice(0, s.lastIndexOf("/"))) : (e.push(t), t = t[r], s += "/" + r), !t)) throw p(i);
        if (o && "function" != typeof t[o] && ((h = (h = (h = (h = v(t, o, ".js")) || v(t, o, ".json")) || v(t, o, ".css")) || v(t, o, ".html")) ? o = h : 2 !== a && "object" === _typeof(t[o]) && (e.push(t), t = t[o], s += "/" + o, o = "")), !o) return 1 !== a && t[":mainpath:"] ? u(t, e, t[":mainpath:"], i, 1, s) : u(t, e, "index", i, 2, s);
        if (!(l = t[o])) throw p(i);
        return l.hasOwnProperty("module") ? l.module.exports : (c = {}, l.module = d = {
            exports: c,
            id: s + "/" + o
        }, l.call(c, c, d, f(t, e, s)), d.exports)
    }, a = function (t, e, n, i) {
        var a, s = n,
            o = n.charAt(0),
            r = 0;
        if ("/" === o) {
            if (s = s.slice(1), !(t = c["/"])) {
                if (d) return d(n);
                throw p(n)
            }
            i = "/", e = []
        } else if ("." !== o) {
            if (a = s.split("/", 1)[0], !(t = c[a])) {
                if (d) return d(n);
                throw p(n)
            }
            i = a, e = [], (s = s.slice(a.length + 1)) || (r = (s = t[":mainpath:"]) ? 1 : (s = "index", 2))
        }
        return u(t, e, s, n, r, i)
    }, (f = function (e, n, i) {
        return function (t) {
            return a(e, [].concat(n), t, i)
        }
    })(c, [], "")
}({
    workspace: {
        editor: {
            js: {
                frontend: {
                    modules: {
                        "countdown.js": function (t, e, n) {
                            void 0 === TCB_Front.js_modules.countdown && TCB_Front.setModuleLoadedStatus("countdown", !1),
                                function (l, h) {
                                    if (!TCB_Front.isModuleLoaded("countdown")) {
                                        window.addEventListener("load", function () {
                                            h.$body.find(".tve-countdown").each(function (t, e) {
                                                new n(l(e), !!TCB_Front.Utils.isEditorPage())
                                            })
                                        }), l(window).on("tcb_after_dom_ready", function () {
                                            l(".tve-countdown").each(function (t, e) {
                                                new n(l(e), !!TCB_Front.Utils.isEditorPage())
                                            })
                                        });
                                        var u, r = ["days", "hours", "minutes", "seconds"],
                                            n = function () {
                                                function d(t, e) {
                                                    var n = this;
                                                    if (_classCallCheck(this, d), _defineProperty(this, "$el", l()), _defineProperty(this, "eventDate", new Date), _defineProperty(this, "$_days", l()), _defineProperty(this, "$_hours", l()), _defineProperty(this, "$_minutes", l()), _defineProperty(this, "$_seconds", l()), _defineProperty(this, "daysChanged", !1), _defineProperty(this, "hoursChanged", !1), _defineProperty(this, "minutesChanged", !1), _defineProperty(this, "secondsChanged", !1), _defineProperty(this, "daysValue", 0), _defineProperty(this, "hoursValue", 0), _defineProperty(this, "minutesValue", 0), _defineProperty(this, "secondsValue", 0), _defineProperty(this, "daysPrev", 0), _defineProperty(this, "hoursPrev", 0), _defineProperty(this, "minutesPrev", 0), _defineProperty(this, "secondsPrev", 0), _defineProperty(this, "isEvergreen", !1), _defineProperty(this, "isEditor", !1), _defineProperty(this, "interval", void 0), _defineProperty(this, "anim", ""), _defineProperty(this, "cfg", {}), _defineProperty(this, "isNoRestart", 0), _defineProperty(this, "cookie", void 0), !e && u || (u = h.getDisplayType()), !t.data("tcb.countdown") || e) {
                                                        var i = new Date,
                                                            a = e && TVE.Components ? TVE.Components.countdown.timezone : t.attr("data-timezone");
                                                        if (this.isEditor = e, this.$el = t, this.readDomData(), this.isEvergreen = this.$el.hasClass("tve-countdown-evergreen"), this.isNoRestart = parseInt(this.$el.attr("data-norestart")), this.eventDate = new Date("".concat(this.$el.attr("data-date"), "T").concat(this.$el.attr("data-hour"), ":").concat(this.$el.attr("data-min"), ":").concat(this.$el.attr("data-sec") || "00").concat(a)), this.isEditor ? this.addMutationListener() : this.$el.is(":visible") && setTimeout(function () {
                                                                n.handleOverflow()
                                                            }, 1e3), this.isEvergreen) {
                                                            var s = !(this.isEditor || "true" === h.queryString.get("preview"));
                                                            if (this.eventDate = new Date, this.cookie = h.getCookie(this.$el.attr("data-id")), this.cookie && s) this.cookie = this.cookie.split("-"), this.eventDate.setTime(new Date(this.cookie[0], this.cookie[1] - 1, this.cookie[2], this.cookie[3], this.cookie[4], this.cookie[5]));
                                                            else if (this.eventDate.setTime(i.getTime() + 24 * this.$el.attr("data-day") * 3600 * 1e3 + 3600 * this.$el.attr("data-hour") * 1e3 + 60 * this.$el.attr("data-min") * 1e3 + 1e3 * this.$el.attr("data-sec")), s) {
                                                                var o = "".concat(this.eventDate.getFullYear(), "-").concat(this.eventDate.getMonth() + 1, "-").concat(this.eventDate.getDate(), "-").concat(this.eventDate.getHours(), "-").concat(this.eventDate.getMinutes(), "-").concat(this.eventDate.getSeconds()),
                                                                    r = new Date("2030-01-01");
                                                                if (!this.isNoRestart) {
                                                                    var c = new Date(this.eventDate.getTime());
                                                                    r = c.setDate(this.eventDate.getDate() + parseInt(this.$el.attr("data-expday"))), r = c.setHours(this.eventDate.getHours() + parseInt(this.$el.attr("data-exphour"))), r = new Date(r)
                                                                }
                                                                TCB_Front.setCookie(this.$el.attr("data-id"), o, {
                                                                    expires: r
                                                                })
                                                            }
                                                        }!this.isEditor && (i >= this.eventDate || isNaN(this.eventDate.getTime())) ? this.finish() : (this.onStateChange(), this.anim && "function" == typeof this["render".concat(this.anim)] && this["render".concat(this.anim)](), this.isEditor || (this.interval = setInterval(this.onStateChange.bind(this), 1e3))), t.data("tcb.countdown", this)
                                                    }
                                                }
                                                return _createClass(d, [{
                                                    key: "finish",
                                                    value: function () {
                                                        var e = this;
                                                        if (r.forEach(function (t) {
                                                                e["update".concat(e.anim)]("00", "00", e["$_".concat(t)])
                                                            }), !this.isEditor) {
                                                            this.$el.addClass("expired"), clearInterval(this.interval);
                                                            var t = l.Event("tve.countdown-finished");
                                                            this.$el.trigger(t)
                                                        }
                                                    }
                                                }, {
                                                    key: "onStateChange",
                                                    value: function () {
                                                        this.updateValues(), this.updateDom(), this.daysValue <= 0 && this.hoursValue <= 0 && this.minutesValue <= 0 && this.secondsValue <= 0 && (this.daysValue = this.hoursValue = this.minutesValue = this.secondsValue = 0, this.finish())
                                                    }
                                                }, {
                                                    key: "renderDefault",
                                                    value: function () {
                                                        var n = this;
                                                        r.forEach(function (t) {
                                                            var e = n["".concat(t, "Value")].toString();
                                                            1 === e.length && (e = "0".concat(e)), n["$_".concat(t)].html('<div class="t-digit-part"><span>'.concat(e, "</span></div>"))
                                                        })
                                                    }
                                                }, {
                                                    key: "renderSlideDown",
                                                    value: function () {
                                                        var o = this;
                                                        r.forEach(function (t) {
                                                            var e, n, i = o["".concat(t, "Value")].toString(),
                                                                a = l('<div class="t-digit-part"></div>');
                                                            1 === i.length && (i = "0".concat(i));
                                                            for (var s = 0; s < i.length; s++) a.append((e = i.length - s, n = i[s], l('<span class="t-slide-part-digit" data-index="'.concat(e, '"><span class="part-p ct-d-placeholder">&nbsp;&nbsp;</span><span class="part-').concat(e, '">').concat(n, "</span></span>"))));
                                                            o["$_".concat(t)].html('<div class="t-digit-part"><span class="t-digits" >'.concat(a[0].innerHTML, "</span></div>"))
                                                        })
                                                    }
                                                }, {
                                                    key: "renderFlipTile",
                                                    value: function () {
                                                        var i = this;
                                                        r.forEach(function (t) {
                                                            var e = i["".concat(t, "Value")].toString();
                                                            1 === e.length && (e = "0".concat(e));
                                                            var n = {
                                                                "--digits-number": e.length,
                                                                "--digit-width-percent": "".concat(2 < e.length ? .55 : .65)
                                                            };
                                                            h.inlineCssVariable(i["$_".concat(t)], n), i["$_".concat(t)].html('<div class="flip-clock__card t-digit-part"><span class="card__top"></span><span class="card__bottom"></span><span class="card__back"><span class="card__bottom"></span></span></div>'), i.updateFlipTile(e, new Array(e.length).fill(0).join(""), i["$_".concat(t)])
                                                        })
                                                    }
                                                }, {
                                                    key: "updateDefault",
                                                    value: function (t, e, n) {
                                                        n.find("span").text(t)
                                                    }
                                                }, {
                                                    key: "updateSlideDown",
                                                    value: function (t, e, n) {
                                                        function i(t, e) {
                                                            if (t.html() === e) return t;
                                                            t.removeClass("next").css("display", "");
                                                            var n = t.clone().removeClass("go-down").addClass("next").html(e);
                                                            return t.before(n).next(".go-down").remove(), t.addClass("go-down"), setTimeout(function () {
                                                                n.addClass("go-down")
                                                            }, 20), setTimeout(function () {
                                                                t[0].style.setProperty("display", "none", "important")
                                                            }, 220), t
                                                        }
                                                        var a = n.find(".t-digit-part");
                                                        a.removeClass("tcb-permanently-hidden");
                                                        for (var s = 0; s < a.length - t.length; s++) a.filter('[data-index="'.concat(a.length - s, '"]')).addClass("tcb-permanently-hidden");
                                                        for (var o = 0; o < t.length; o++) {
                                                            var r = t.length - o,
                                                                c = n.find(".part-".concat(r));
                                                            c.length && i(c.first(), t[o])
                                                        }
                                                    }
                                                }, {
                                                    key: "updateFlipTile",
                                                    value: function (t, e, n) {
                                                        var i = n.find(".card__top"),
                                                            a = n.find(".card__bottom"),
                                                            s = n.find(".card__back"),
                                                            o = n.find(".card__back .card__bottom");
                                                        0 <= Number(e) && (s.attr("data-value", e), a.attr("data-value", e)), i.html(t), o.attr("data-value", t), n.removeClass("flip"), n[0].offsetWidth, n.addClass("flip")
                                                    }
                                                }, {
                                                    key: "readDomData",
                                                    value: function () {
                                                        var s = this,
                                                            t = this.$el.attr("data-anim") || "default";
                                                        this.anim = t.charAt(0).toUpperCase() + t.slice(1), this.parseConfig(), r.forEach(function (t, e) {
                                                            var n = s.$el.find(".tve-countdown-".concat(t)),
                                                                i = !1;
                                                            if (s["$_".concat(t)] = n.find(".tve-countdown-digit"), n.toggleClass("tcb-permanently-hidden", !s.cfg[t]), s.cfg[t] && s.cfg[u])
                                                                for (var a = e + 1; a < r.length; a++) s.cfg[r[a]] && (i = !0);
                                                            n.next(".tve-countdown-tile-separator").toggleClass("tcb-permanently-hidden", !i)
                                                        })
                                                    }
                                                }, {
                                                    key: "updateDom",
                                                    value: function () {
                                                        var i = this;
                                                        r.forEach(function (t) {
                                                            if (i["".concat(t, "Changed")]) {
                                                                var e = i["".concat(t, "Value")].toString(),
                                                                    n = i["".concat(t, "Prev")].toString();
                                                                1 === e.length && (e = "0".concat(e)), 1 === n.length && (n = "0".concat(n)), i["update".concat(i.anim)](e, n, i["$_".concat(t)])
                                                            }
                                                        })
                                                    }
                                                }, {
                                                    key: "updateValues",
                                                    value: function () {
                                                        var e = this,
                                                            t = new Date;
                                                        r.forEach(function (t) {
                                                            e["".concat(t, "Prev")] = e["".concat(t, "Value")]
                                                        }), this.secondsValue = Math.floor((this.eventDate.getTime() - t.getTime()) / 1e3), this.minutesValue = Math.floor(this.secondsValue / 60), this.secondsValue = this.secondsValue % 60, this.hoursValue = Math.floor(this.minutesValue / 60), this.minutesValue = this.minutesValue % 60, this.daysValue = Math.floor(this.hoursValue / 24), this.hoursValue = this.hoursValue % 24, this.cfg.days || (this.hoursValue += 24 * this.daysValue), this.cfg.hours || (this.minutesValue += 60 * this.hoursValue), this.cfg.minutes || (this.secondsValue += 60 * this.minutesValue), r.forEach(function (t) {
                                                            e["".concat(t, "Changed")] = e["".concat(t, "Value")] !== e["".concat(t, "Prev")]
                                                        })
                                                    }
                                                }, {
                                                    key: "parseConfig",
                                                    value: function () {
                                                        var e, n = {
                                                            days: !0,
                                                            minutes: !0,
                                                            hours: !0,
                                                            seconds: !0
                                                        };
                                                        try {
                                                            e = JSON.parse(this.$el.attr("data-visible") || JSON.stringify(n))
                                                        } catch (t) {
                                                            console.warn("Could not get json data for element:", this), e = n
                                                        }
                                                        this.cfg = e
                                                    }
                                                }, {
                                                    key: "handleOverflow",
                                                    value: function () {
                                                        if (this.$el[0].parentNode && this.$el.find(".tve-countdown-content").length && !this.$el.hasClass("expired")) {
                                                            var t = this.$el.find(".tve-countdown-content")[0].offsetWidth,
                                                                e = this.$el.parent().width();
                                                            if (e < (t += parseInt(this.$el.css("padding-left")) + parseInt(this.$el.css("padding-right")))) {
                                                                var n = e / t * parseInt(getComputedStyle(this.$el[0]).getPropertyValue("--tve-countdown-size").replace("px", ""));
                                                                this.isEditor ? TVE.Components.countdown.handleOverflow(this.$el, n) : (n = Math.max(n, 20), this.$el[0].style.setProperty("--tve-countdown-size", "".concat(n, "px"), "important"))
                                                            }
                                                        }
                                                    }
                                                }, {
                                                    key: "addMutationListener",
                                                    value: function () {
                                                        function e() {
                                                            cancelAnimationFrame(t), t = requestAnimationFrame(n.handleOverflow.bind(n))
                                                        }
                                                        var t, n = this;
                                                        if (window.ResizeObserver && !this.$el.data("resize-observer")) {
                                                            var i = new ResizeObserver(e);
                                                            this.$el.data("resize-observer", i), i.observe(this.$el[0]);
                                                            var a = new MutationObserver(function (t) {
                                                                Array.from(t).forEach(function (t) {
                                                                    "attributes" === t.type && ["class", "data-value", "id"].includes(t.attributeName) || t.target.classList.contains("tve-countdown") && "attributes" === t.type && !["data-visible", "data-resize"].includes(t.attributeName) || TVE._.debounce(e, 100)
                                                                })
                                                            });
                                                            a.observe(this.$el[0], {
                                                                attributes: !0
                                                            }), this.$el.find(".tve-countdown-data .tcb-plain-text, .tve-countdown-data span").each(function (t, e) {
                                                                a.observe(e, {
                                                                    attributes: !0
                                                                })
                                                            })
                                                        }
                                                    }
                                                }]), d
                                            }();
                                        window.TCB_Front.Countdown = n, e.exports = n, TCB_Front.setModuleLoadedStatus("countdown", !0)
                                    }
                                }(ThriveGlobal.$j, TCB_Front)
                        }
                    }
                }
            }
        }
    }
})("workspace/editor/js/frontend/modules/countdown");