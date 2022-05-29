/*! Thrive Architect - 2021-06-18
 * http://www.thrivethemes.com/
 * Copyright (c) 2021 Thrive Themes */

"use strict";

function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}! function (s) {
    var p, c, o, _, m, a = {
            ".js": [],
            ".json": [],
            ".css": [],
            ".html": []
        },
        f = "function" == typeof require ? require : null;
    return _ = function (t) {
        var e = new Error("Could not find module '" + t + "'");
        return e.code = "MODULE_NOT_FOUND", e
    }, m = function (t, e, n) {
        var r, o;
        if ("function" == typeof t[e + n]) return e + n;
        for (r = 0; o = a[n][r]; ++r)
            if ("function" == typeof t[e + o]) return e + o;
        return null
    }, p = function (t, e, n, r, o, a) {
        var i, d, s, f, u, l;
        for ("." !== (i = (n = n.split("/")).pop()) && ".." !== i || (n.push(i), i = ""); null != (d = n.shift());)
            if (d && "." !== d && (".." === d ? (t = e.pop(), a = a.slice(0, a.lastIndexOf("/"))) : (e.push(t), t = t[d], a += "/" + d), !t)) throw _(r);
        if (i && "function" != typeof t[i] && ((l = (l = (l = (l = m(t, i, ".js")) || m(t, i, ".json")) || m(t, i, ".css")) || m(t, i, ".html")) ? i = l : 2 !== o && "object" === _typeof(t[i]) && (e.push(t), t = t[i], a += "/" + i, i = "")), !i) return 1 !== o && t[":mainpath:"] ? p(t, e, t[":mainpath:"], r, 1, a) : p(t, e, "index", r, 2, a);
        if (!(u = t[i])) throw _(r);
        return u.hasOwnProperty("module") ? u.module.exports : (s = {}, u.module = f = {
            exports: s,
            id: a + "/" + i
        }, u.call(s, s, f, c(t, e, a)), f.exports)
    }, o = function (t, e, n, r) {
        var o, a = n,
            i = n.charAt(0),
            d = 0;
        if ("/" === i) {
            if (a = a.slice(1), !(t = s["/"])) {
                if (f) return f(n);
                throw _(n)
            }
            r = "/", e = []
        } else if ("." !== i) {
            if (o = a.split("/", 1)[0], !(t = s[o])) {
                if (f) return f(n);
                throw _(n)
            }
            r = o, e = [], (a = a.slice(o.length + 1)) || (d = (a = t[":mainpath:"]) ? 1 : (a = "index", 2))
        }
        return p(t, e, a, n, d, r)
    }, (c = function (e, n, r) {
        return function (t) {
            return o(e, [].concat(n), t, r)
        }
    })(s, [], "")
}({
    workspace: {
        editor: {
            js: {
                frontend: {
                    modules: {
                        "timer.js": function (t, e, n) {
                            var I = this;
                            void 0 === TCB_Front.js_modules.timer && TCB_Front.setModuleLoadedStatus("timer", !1),
                                function (D) {
                                    if (!TCB_Front.isModuleLoaded("timer")) {
                                        var t = [".thrv-countdown_timer_evergreen", ".tve_countdown_timer_evergreen", ".thrv-countdown_timer_plain", ".thrv_countdown_timer:not(.tve_countdown_timer_evergreen)"].join(", ");
                                        D(window).on("tcb_after_dom_ready", function () {
                                            TCB_Front.Utils.isEditorPage() || D(t).each(function (t, e) {
                                                return n(D(e))
                                            })
                                        });
                                        var n = function (o) {
                                            var t, e = new Date,
                                                n = new Date(o.attr("data-date") + "T" + o.attr("data-hour") + ":" + o.attr("data-min") + ":" + (o.attr("data-sec") || "00") + o.attr("data-timezone")),
                                                a = 0,
                                                i = 0,
                                                d = 0,
                                                s = 0,
                                                f = 2,
                                                r = o.attr("data-text"),
                                                u = o.hasClass("thrv-countdown_timer_evergreen") || o.hasClass("tve_countdown_timer_evergreen"),
                                                l = o.attr("data-norestart"),
                                                p = parseInt(o.attr("data-day")),
                                                c = parseInt(o.attr("data-hour")),
                                                _ = parseInt(o.attr("data-min")),
                                                m = parseInt(o.attr("data-sec"));
                                            if (o.data("tcb_timer_done")) return I;
                                            if (o.data("tcb_timer_done", !0), u) {
                                                n = new Date;
                                                var v = TCB_Front.getCookie(o.attr("data-id"));
                                                if (v) {
                                                    v = v.split("-");
                                                    var h = new Date(v[0], v[1] - 1, v[2], v[3], v[4], v[5]);
                                                    n.setTime(h)
                                                } else {
                                                    n.setTime(e.getTime() + 24 * p * 3600 * 1e3 + 3600 * c * 1e3 + 60 * _ * 1e3 + 1e3 * m);
                                                    var g = n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate() + "-" + n.getHours() + "-" + n.getMinutes() + "-" + n.getSeconds(),
                                                        w = new Date("2034-01-01");
                                                    if (!parseInt(l)) {
                                                        var y = new Date(n.getTime());
                                                        w = y.setDate(n.getDate() + parseInt(o.attr("data-expday"))), w = y.setHours(n.getHours() + parseInt(o.attr("data-exphour"))), w = new Date(w)
                                                    }
                                                    TCB_Front.setCookie(o.attr("data-id"), g, {
                                                        expires: w
                                                    })
                                                }
                                            }

                                            function C() {
                                                setTimeout(function () {
                                                    o.find(".tve_t_day .t-digits").css("min-width", o.find(".tve_t_sec .t-digits > span").outerWidth() * f + "px")
                                                }, 10)
                                            }
                                            o.parents(".thrv_content_reveal").on("tve-content-revealed", C), o.parents(".tve_p_lb_content").on("tve.before-lightbox-open", C);

                                            function T(t, e) {
                                                if (t.html() == e) return t;
                                                t.removeClass("next");
                                                var n = t.clone().removeClass("go-down").addClass("next").html(e);
                                                return t.before(n).next(".go-down").remove(), t.addClass("go-down"), setTimeout(function () {
                                                    n.addClass("go-down")
                                                }, 20), t
                                            }

                                            function b(t, e, n) {
                                                void 0 === n && (n = !1);
                                                var r = 0;
                                                if (e <= 99) T(t.find(".part-1").first(), e % 10), T(t.find(".part-2").first(), Math.floor(e / 10)), r = 2;
                                                else
                                                    for (; e;) r++, T(t.find(".part-" + r).first(), e % 10), e = Math.floor(e / 10);
                                                if (!1 !== n && r < n)
                                                    for (var o = r + 1; o <= n; o++) T(t.find(".part-" + o).first(), 0)
                                            }
                                            var x = function () {
                                                    o.addClass("tve_cd_expired"), o.find(".t-digits span").html("0"), r && (o.find(".tve_t_part").addClass("ct_finished"), o.find(".tve_t_text").html(r).fadeIn(200));
                                                    var t = D.Event("tve.countdown-finished");
                                                    o.trigger(t), setTimeout(function () {
                                                        o.find(".t-digits span:not(.ct-d-placeholder)").hide()
                                                    }, 100)
                                                },
                                                M = function () {
                                                    e = new Date, s = Math.floor((n.getTime() - e.getTime()) / 1e3), d = Math.floor(s / 60), s %= 60, i = Math.floor(d / 60), d %= 60, a = Math.floor(i / 24), i %= 24, 99 < a && (f = a.toString().length)
                                                };
                                            !u && n <= e ? x() : (M(), function () {
                                                function t(t, e) {
                                                    return D('<span class="part-p ct-d-placeholder">&nbsp;</span><span class="part-' + t + '">' + e + "</span>")
                                                }
                                                o.find(".tve_t_sec .t-digits").empty().append(t(2, Math.floor(s / 10))).append(t(1, s % 10)), o.find(".tve_t_min .t-digits").empty().append(t(2, Math.floor(d / 10))).append(t(1, d % 10)), o.find(".tve_t_hour .t-digits").empty().append(t(2, Math.floor(i / 10))).append(t(1, i % 10));
                                                for (var e = o.find(".tve_t_day .t-digits").empty(), n = a, r = 1; r <= f; r++) e.append(t(r, n % 10)), n = Math.floor(n / 10);
                                                e.css("min-width", "")
                                            }(), o.addClass("init_done"), t = setInterval(function () {
                                                M(), b(o.find(".tve_t_sec .t-digits"), s), b(o.find(".tve_t_min .t-digits"), d), b(o.find(".tve_t_hour .t-digits"), i), b(o.find(".tve_t_day .t-digits"), a, f), a <= 0 && i <= 0 && d <= 0 && s <= 0 && (a = i = d = s = 0, clearInterval(t), x())
                                            }, 1e3)), u && n <= e && (clearInterval(t), x())
                                        };
                                        TCB_Front.setModuleLoadedStatus("timer", !0)
                                    }
                                }(ThriveGlobal.$j)
                        }
                    }
                }
            }
        }
    }
})("workspace/editor/js/frontend/modules/timer");