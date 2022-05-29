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
}! function (u) {
    var d, h, o, p, _, i = {
            ".js": [],
            ".json": [],
            ".css": [],
            ".html": []
        },
        c = "function" == typeof require ? require : null;
    return p = function (t) {
        var e = new Error("Could not find module '" + t + "'");
        return e.code = "MODULE_NOT_FOUND", e
    }, _ = function (t, e, n) {
        var r, o;
        if ("function" == typeof t[e + n]) return e + n;
        for (r = 0; o = i[n][r]; ++r)
            if ("function" == typeof t[e + o]) return e + o;
        return null
    }, d = function (t, e, n, r, o, i) {
        var a, l, u, c, s, f;
        for ("." !== (a = (n = n.split("/")).pop()) && ".." !== a || (n.push(a), a = ""); null != (l = n.shift());)
            if (l && "." !== l && (".." === l ? (t = e.pop(), i = i.slice(0, i.lastIndexOf("/"))) : (e.push(t), t = t[l], i += "/" + l), !t)) throw p(r);
        if (a && "function" != typeof t[a] && ((f = (f = (f = (f = _(t, a, ".js")) || _(t, a, ".json")) || _(t, a, ".css")) || _(t, a, ".html")) ? a = f : 2 !== o && "object" === _typeof(t[a]) && (e.push(t), t = t[a], i += "/" + a, a = "")), !a) return 1 !== o && t[":mainpath:"] ? d(t, e, t[":mainpath:"], r, 1, i) : d(t, e, "index", r, 2, i);
        if (!(s = t[a])) throw p(r);
        return s.hasOwnProperty("module") ? s.module.exports : (u = {}, s.module = c = {
            exports: u,
            id: i + "/" + a
        }, s.call(u, u, c, h(t, e, i)), c.exports)
    }, o = function (t, e, n, r) {
        var o, i = n,
            a = n.charAt(0),
            l = 0;
        if ("/" === a) {
            if (i = i.slice(1), !(t = u["/"])) {
                if (c) return c(n);
                throw p(n)
            }
            r = "/", e = []
        } else if ("." !== a) {
            if (o = i.split("/", 1)[0], !(t = u[o])) {
                if (c) return c(n);
                throw p(n)
            }
            r = o, e = [], (i = i.slice(o.length + 1)) || (l = (i = t[":mainpath:"]) ? 1 : (i = "index", 2))
        }
        return d(t, e, i, n, l, r)
    }, (h = function (e, n, r) {
        return function (t) {
            return o(e, [].concat(n), t, r)
        }
    })(u, [], "")
}({
    workspace: {
        editor: {
            js: {
                frontend: {
                    modules: {
                        "content-reveal.js": function (t, e, n) {
                            void 0 === TCB_Front.js_modules["content-reveal"] && TCB_Front.setModuleLoadedStatus("content-reveal", !1),
                                function (a) {
                                    if (!TCB_Front.isModuleLoaded("content-reveal")) {
                                        a(window).on("tcb_after_dom_ready", function () {
                                            a(".thrv_content_reveal").each(function (t, e) {
                                                return l.init(a(e))
                                            })
                                        });
                                        var l = {
                                            init: function (t) {
                                                l.initTestimonialSlider(t);
                                                var e = parseInt(t.attr("data-after")),
                                                    n = t.parents(".tve_p_lb_content").length,
                                                    r = t.children("thrv_tabs_shortcode").length,
                                                    o = t.children(".thrv_toggle_shortcode").length;
                                                e = isNaN(e) ? 0 : e, TCB_Front.handleIframes(t, !1);

                                                function i() {
                                                    setTimeout(function () {
                                                        t.slideDown(200, function () {
                                                            t.trigger("lbresize")
                                                        }), t.data("scroll") && a("html, body").animate({
                                                            scrollTop: t.offset().top - 270
                                                        }), t.parents("#tve_editor").length && "1" !== tve_frontend_options.is_single || "string" != typeof t.attr("data-redirect-url") || !t.attr("data-redirect-url").length || !TCB_Front.isValidUrl(t.attr("data-redirect-url")) || (window.location = t.attr("data-redirect-url")), t.find("iframe").not(".thrv_social_default iframe").each(function () {
                                                            var t = a(this);
                                                            t.attr("src") || r && o || t.attr("src", t.attr("data-src"))
                                                        }), t.find(".thrlider-slider").each(function () {
                                                            a(this).parent().thrlider("init_elements")
                                                        }), t.trigger("tve-content-revealed", t)
                                                    }, 1e3 * e)
                                                }
                                                n ? n.bind("tve.lightbox-open", i) : i()
                                            },
                                            initTestimonialSlider: function (t) {
                                                var e = t.find(".thrlider-slider");
                                                0 < e.length && e.each(function () {
                                                    a(this).parent().attr("data-no-init", "true")
                                                })
                                            }
                                        };
                                        TCB_Front.setModuleLoadedStatus("content-reveal", !0)
                                    }
                                }(ThriveGlobal.$j)
                        }
                    }
                }
            }
        }
    }
})("workspace/editor/js/frontend/modules/content-reveal");