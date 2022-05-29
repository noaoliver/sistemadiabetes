/*! Thrive Architect - 2021-06-18
 * http://www.thrivethemes.com/
 * Copyright (c) 2021 Thrive Themes */

"use strict";

function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
}

function _iterableToArray(t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
}

function _arrayWithoutHoles(t) {
    if (Array.isArray(t)) {
        for (var e = 0, a = new Array(t.length); e < t.length; e++) a[e] = t[e];
        return a
    }
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(t, e) {
    for (var a = 0; a < e.length; a++) {
        var n = e[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
    }
}

function _createClass(t, e, a) {
    return e && _defineProperties(t.prototype, e), a && _defineProperties(t, a), t
}

function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}! function (l) {
    var u, g, i, m, f, s = {
            ".js": [],
            ".json": [],
            ".css": [],
            ".html": []
        },
        c = "function" == typeof require ? require : null;
    return m = function (t) {
        var e = new Error("Could not find module '" + t + "'");
        return e.code = "MODULE_NOT_FOUND", e
    }, f = function (t, e, a) {
        var n, i;
        if ("function" == typeof t[e + a]) return e + a;
        for (n = 0; i = s[a][n]; ++n)
            if ("function" == typeof t[e + i]) return e + i;
        return null
    }, u = function (t, e, a, n, i, s) {
        var r, o, l, c, d, h;
        for ("." !== (r = (a = a.split("/")).pop()) && ".." !== r || (a.push(r), r = ""); null != (o = a.shift());)
            if (o && "." !== o && (".." === o ? (t = e.pop(), s = s.slice(0, s.lastIndexOf("/"))) : (e.push(t), t = t[o], s += "/" + o), !t)) throw m(n);
        if (r && "function" != typeof t[r] && ((h = (h = (h = (h = f(t, r, ".js")) || f(t, r, ".json")) || f(t, r, ".css")) || f(t, r, ".html")) ? r = h : 2 !== i && "object" === _typeof(t[r]) && (e.push(t), t = t[r], s += "/" + r, r = "")), !r) return 1 !== i && t[":mainpath:"] ? u(t, e, t[":mainpath:"], n, 1, s) : u(t, e, "index", n, 2, s);
        if (!(d = t[r])) throw m(n);
        return d.hasOwnProperty("module") ? d.module.exports : (l = {}, d.module = c = {
            exports: l,
            id: s + "/" + r
        }, d.call(l, l, c, g(t, e, s)), c.exports)
    }, i = function (t, e, a, n) {
        var i, s = a,
            r = a.charAt(0),
            o = 0;
        if ("/" === r) {
            if (s = s.slice(1), !(t = l["/"])) {
                if (c) return c(a);
                throw m(a)
            }
            n = "/", e = []
        } else if ("." !== r) {
            if (i = s.split("/", 1)[0], !(t = l[i])) {
                if (c) return c(a);
                throw m(a)
            }
            n = i, e = [], (s = s.slice(i.length + 1)) || (o = (s = t[":mainpath:"]) ? 1 : (s = "index", 2))
        }
        return u(t, e, s, a, o, n)
    }, (g = function (e, a, n) {
        return function (t) {
            return i(e, [].concat(a), t, n)
        }
    })(l, [], "")
}({
    workspace: {
        editor: {
            js: {
                frontend: {
                    modules: {
                        "image-gallery.js": function (t, e, a) {
                            void 0 === TCB_Front.js_modules["image-gallery"] && TCB_Front.setModuleLoadedStatus("image-gallery", !1),
                                function (s, r) {
                                    if (!TCB_Front.isModuleLoaded("image-gallery")) {
                                        var t = a("../util/gallery-ligthbox");
                                        s(window).on("tcb_after_dom_ready", function () {
                                            s(".tcb-image-gallery").each(function (t, e) {
                                                var a = new n(s(e), !!tve_frontend_options.is_editor_page);
                                                tve_frontend_options.is_editor_page || (a.isHorizontalMasonry() && a.initHorizontalMasonry(), a.hasLightbox() && a.initLightbox()), a.isCarousel() && a.initCarousel()
                                            })
                                        });
                                        var n = function () {
                                            function n() {
                                                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : s(),
                                                    e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                                                _classCallCheck(this, n), this.$element = t, this.isEditor = e
                                            }
                                            return _createClass(n, null, [{
                                                key: "imageSelector",
                                                value: function () {
                                                    return ".thrv_wrapper.tve_image_caption"
                                                }
                                            }, {
                                                key: "captionSelector",
                                                value: function () {
                                                    return ".wp-caption-text.thrv-inline-text"
                                                }
                                            }]), _createClass(n, [{
                                                key: "setImages",
                                                value: function (t) {
                                                    return this.images = t, this
                                                }
                                            }, {
                                                key: "getImages",
                                                value: function () {
                                                    return this.images
                                                }
                                            }, {
                                                key: "readImagesFromElement",
                                                value: function () {
                                                    var i = [],
                                                        t = this.isCarousel() ? ".tcb-image-gallery-container .tve_image_caption.slick-slide:not(.slick-cloned) img" : ".tcb-image-gallery-container img";
                                                    return this.$element.find(t).each(function (t, e) {
                                                        var a = s(e),
                                                            n = a.parents(".tve_image_caption");
                                                        i.push({
                                                            id: n.attr("data-id"),
                                                            caption: n.attr("data-caption"),
                                                            title: a.attr("title"),
                                                            alt: a.attr("alt"),
                                                            width: a.attr("width"),
                                                            height: a.attr("height"),
                                                            url: a.attr("src"),
                                                            sizes: a.tcbJsonData("sizes"),
                                                            styleClass: n[0].className.match(/(^|\s)img_style_\S+/g) || ["no_style"].join(" ")
                                                        })
                                                    }), i
                                                }
                                            }, {
                                                key: "isHorizontalMasonry",
                                                value: function () {
                                                    return "horizontalMasonry" === this.$element.attr("data-type")
                                                }
                                            }, {
                                                key: "initHorizontalMasonry",
                                                value: function () {
                                                    this.$element.find(".tcb-image-gallery-container").justifiedGallery({
                                                        selector: ".tve_image_caption.thrv_wrapper",
                                                        rowHeight: parseInt(r.inlineCssVariable(this.$element, "--tve-gallery-column-height")),
                                                        lastRow: "nojustify",
                                                        margins: parseInt(r.inlineCssVariable(this.$element, "--tve-gallery-gutter"))
                                                    })
                                                }
                                            }, {
                                                key: "render",
                                                value: function () {
                                                    var a = this;
                                                    if (this.isEditor) {
                                                        this.$element = TVE.ActiveElement;
                                                        var t, e, n, i, s, r, o, l = this.$element.find(TVE.identifier("image")),
                                                            c = this.$element.find(TVE.identifier("image_caption")),
                                                            d = l.find(".tve-image-overlay").first(),
                                                            h = {},
                                                            u = {},
                                                            g = {};
                                                        if (l.length && (t = this.getAnimationsClasses(l), e = this.getAnimationsClasses(l.find("img")), n = l.find("img").attr("data-tcb-events"), i = this.getAnimationsClasses(c), s = c.attr("data-tcb-events"), r = (l[0].className.match(/(^|\s)img_style_\S+/g) || ["no_style"]).join(" "), o = this.getResponsiveClasses(c)), this.oldImageSize = this.getImageSize(), c.each(function (t, e) {
                                                                var a = TVE.inner_$(e),
                                                                    n = a.find("a"),
                                                                    i = a.parents(".tve_image_caption"),
                                                                    s = i.attr("data-id");
                                                                u[s] = {
                                                                    text: i.attr("data-caption") || "",
                                                                    hasLink: 0 < n.length,
                                                                    href: n.attr("href"),
                                                                    target: n.attr("target"),
                                                                    rel: n.attr("rel")
                                                                }
                                                            }), this.hasLightbox() || l.each(function (t, e) {
                                                                var a = TVE.inner_$(e),
                                                                    n = a.find(".tve_image_frame a"),
                                                                    i = a.attr("data-id");
                                                                g[i] = {
                                                                    hasLink: 0 < n.length,
                                                                    href: n.attr("href"),
                                                                    target: n.attr("target"),
                                                                    rel: n.attr("rel")
                                                                }
                                                            }), this.$element.hasClass("tcb-elem-placeholder")) this.$element.html('<div class="tcb-image-gallery-container tve-prevent-content-edit"></div>').removeClass("tcb-elem-placeholder tcb-gallery-placeholder");
                                                        else {
                                                            var m = this.$element.find(".tcb-image-gallery-container");
                                                            this.isCarousel() && void 0 !== m[0].slick && m.slick("unslick"), m.html("")
                                                        }
                                                        c.length && c.attr("data-position") && (h.position = {
                                                            attr: "data-position=".concat(c.attr("data-position")),
                                                            classes: "tve-image-caption-".concat(c.attr("data-position"))
                                                        }, "inside" === c.attr("data-position") && c.attr("data-alignment") && (h.alignment = {
                                                            attr: "data-alignment=".concat(c.attr("data-alignment")),
                                                            classes: "tve-image-caption-inside tcb-caption-".concat(c.attr("data-alignment"))
                                                        })), this.$element.attr("data-css", TVE.CSS_Rule_Cache.uniq_id(this.$element)), this.getImages().forEach(function (t, e) {
                                                            return a.renderOneImage(t, e, h, u, g)
                                                        });
                                                        var f = this.$element.find(TVE.identifier("image")),
                                                            p = this.$element.find(".wp-caption-text");
                                                        d.length && d.insertAfter(f), t && (f.addClass(t), this.$element.find("img").addClass(e).attr("data-tcb-events", n)), i && p.addClass(i).attr("data-tcb-events", s), r && f.addClass(r), p.each(function (t, e) {
                                                            var a = e.innerText;
                                                            a && !a.trim().length && e.classList.add("tcb-permanently-hidden")
                                                        }), o && p.addClass(o), this.updateDataSelectors()
                                                    }
                                                }
                                            }, {
                                                key: "renderOneImage",
                                                value: function (t, e, a, n, i) {
                                                    this.$element.find(".tcb-image-gallery-container").append(TVE.tpl("elements/gallery-image")({
                                                        image: t,
                                                        index: e,
                                                        imageObj: this,
                                                        captionSettings: a,
                                                        tcb: r,
                                                        captionLinks: n,
                                                        imageLinks: i
                                                    })), this.$element.find(".tcb-image-gallery-container img:last").tcbJsonData("sizes", t.sizes)
                                                }
                                            }, {
                                                key: "updateDataSelectors",
                                                value: function () {
                                                    var a = this.$element.attr("data-css");
                                                    this.$element.find(n.imageSelector()).each(function (t, e) {
                                                        e.setAttribute("data-selector", '[data-css="'.concat(a, '"] ').concat(n.imageSelector()))
                                                    }), this.$element.find(n.captionSelector()).each(function (t, e) {
                                                        e.setAttribute("data-selector", '[data-css="'.concat(a, '"] ').concat(n.captionSelector()))
                                                    })
                                                }
                                            }, {
                                                key: "hasCaptions",
                                                value: function () {
                                                    return "true" === this.$element.attr("data-caption")
                                                }
                                            }, {
                                                key: "getImageSize",
                                                value: function () {
                                                    var t = this.$element.attr("data-thumbnail-size") || "auto";
                                                    return "auto" === t && (t = this.getBestImageSize()), t
                                                }
                                            }, {
                                                key: "getFullwidthSize",
                                                value: function () {
                                                    return this.$element.attr("data-fullscreen-size") || "large"
                                                }
                                            }, {
                                                key: "hasLightbox",
                                                value: function () {
                                                    return !this.isCarousel() && "fullscreen" === this.$element.attr("data-click-behavior")
                                                }
                                            }, {
                                                key: "getImagePosition",
                                                value: function (e) {
                                                    var t = this.getImages();
                                                    return t.findIndex(function (t) {
                                                        return t.id === e.id
                                                    }) + 1 + "/" + t.length
                                                }
                                            }, {
                                                key: "initLightbox",
                                                value: function () {
                                                    this.$element.data("lightbox-loaded") || (this.lightbox = new t(this), this.lightbox.init(), this.$element.data("lightbox-loaded", !0))
                                                }
                                            }, {
                                                key: "getBestImageSize",
                                                value: function () {
                                                    var t = this.getNumberOfColumns(),
                                                        e = parseInt(r.inlineCssVariable(this.$element, "--tve-gallery-horizontal-space")),
                                                        a = t || Math.min(this.images.length, 4),
                                                        n = (TVE.ActiveElement.outerWidth() - (a - 1) * e) / a,
                                                        i = "large";
                                                    if (n <= 300) {
                                                        var s = TVE.ActiveElement.find("img");
                                                        s.length && n < s.width() || (i = "medium")
                                                    }
                                                    return i
                                                }
                                            }, {
                                                key: "getNumberOfColumns",
                                                value: function () {
                                                    var e;
                                                    if (this.isCarousel()) try {
                                                        e = JSON.parse(this.$element.find(".tcb-image-gallery-container").attr("data-carousel-settings")).slidesToShow
                                                    } catch (t) {
                                                        e = 3
                                                    } else e = r.inlineCssVariable(this.$element, "--tve-gallery-columns");
                                                    return e
                                                }
                                            }, {
                                                key: "getAnimationsClasses",
                                                value: function (t) {
                                                    var e = [],
                                                        a = t.length ? t[0].className.match(/tve_et_\S*|tve_ea_\S*|tve_anim_\S*|tve_evt_\S*/g) : null;
                                                    return null !== a && (e.push.apply(e, _toConsumableArray(a)), e.includes("tve_ea_thrive_tooltip") && e.splice(e.indexOf("tve_ea_thrive_animation"), 1)), _toConsumableArray(new Set(e)).join(" ")
                                                }
                                            }, {
                                                key: "getResponsiveClasses",
                                                value: function (a) {
                                                    var n = [];
                                                    return Object.keys(TVE.main.responsive).forEach(function (t) {
                                                        var e = "tcb-".concat(t, "-hidden");
                                                        a.hasClass(e) && n.push(e)
                                                    }), n
                                                }
                                            }, {
                                                key: "isCarousel",
                                                value: function () {
                                                    return "carousel" === this.$element.attr("data-type")
                                                }
                                            }, {
                                                key: "initCarousel",
                                                value: function () {
                                                    var s = this,
                                                        t = this.$element.find(".tcb-image-gallery-container"),
                                                        e = JSON.parse(t.attr("data-carousel-settings")),
                                                        a = e.tcbDots;
                                                    delete e.tcbDots, !this.isEditor && t.data("loaded") || (t.slick(e), t.data("loaded", !0)), this.$element.find(".slick-list").addClass("tve-prevent-content-edit"), this.setDots(this.$element.find("ul.tcb-carousel-dots"), a), this.$element.toggleClass("tcb-has-arrows", !!this.$element.find(".tcb-carousel-arrow").length), this.isEditor && (t.slick("slickPause"), t.off("breakpoint").on("breakpoint", function (t, e, a) {
                                                        TVE.inner_$('.tcb-image-gallery[data-type="carousel"]').each(function (t, e) {
                                                            var a = TVE.inner_$(e),
                                                                n = JSON.parse(a.find(" .tcb-image-gallery-container").attr("data-carousel-settings")),
                                                                i = a.hasClass("tcb-gallery-crop");
                                                            s.setDots(a.find("ul.tcb-carousel-dots"), n.tcbDots), i && TVE.Components.image_gallery.cropImages(a, i), TVE.main.EditMode.in_edit() || a.find(".slick-list").addClass("tve-prevent-content-edit")
                                                        })
                                                    })), t.removeClass("tve-loading load-bot")
                                                }
                                            }, {
                                                key: "setDots",
                                                value: function (t, e) {
                                                    var a = t.parents(".tcb-image-gallery");
                                                    e && (t.length && 0 === a.find(" > ul.tcb-carousel-dots").length && a.append(t), t.addClass("tcb-carousel-dots-styled"), t.find("li").attr("data-selector", '[data-css="'.concat(a.attr("data-css"), '"] .tcb-carousel-dots li.tcb-dot')).addClass("tcb-dot").html(e))
                                                }
                                            }]), n
                                        }();
                                        window.TCB_Front.ImageGallery = n, TCB_Front.setModuleLoadedStatus("image-gallery", !0)
                                    }
                                }(ThriveGlobal.$j, TCB_Front)
                        }
                    },
                    util: {
                        "gallery-ligthbox.js": function (t, e, a) {
                            var i, n, s;
                            i = ThriveGlobal.$j, n = TCB_Front, s = function () {
                                function e(t) {
                                    _classCallCheck(this, e), this.gallery = t, this.$gallery = t.$element, this.imageCount = this.$gallery.find(".tve_image_caption").length, this.animating = !1, this.isOpen = !1, this.render()
                                }
                                return _createClass(e, [{
                                    key: "render",
                                    value: function () {
                                        this.$overlay = i('\n\t\t\t\t\t\t\t\t\t\t\t<div class="tcb-gallery-overlay">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="tcb-gallery-wrapper"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="tcb-g-count tcb-gl-ctrl-mob">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="tcb-gl-ctrl-wrp">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="tcb-mob-text"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="tcb-img-count"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="tcb-cap-txt"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class="tcb-nav-prev tcb-gl-ctrl">'.concat(n.icons.get("arrow-left"), '</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class="tcb-nav-next tcb-gl-ctrl">').concat(n.icons.get("arrow-right"), '</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class="tcb-nav-close tcb-gl-ctrl-mob">').concat(n.icons.get("cross"), "</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t")).appendTo(i("body")), this.$wrapper = this.$overlay.find(".tcb-gallery-wrapper"), this.$wrapper.css({
                                            width: "".concat(100 * this.imageCount, "%")
                                        })
                                    }
                                }, {
                                    key: "init",
                                    value: function () {
                                        var n = this;
                                        this.currentImageIndex = 0, this.$gallery.find(".tve_image_caption").each(function (t, e) {
                                            var a = i(e).find(".tve_image_frame")[0];
                                            i(e).find("a").removeClass("tve-jump-scroll"), a && a.addEventListener("click", function (t) {
                                                n.isOpen = !0, n.$overlay.show(0).addClass("g-v"), n.showImage(parseInt(e.dataset.index), !1), t.preventDefault()
                                            }), n.createGalleryItem(e)
                                        }), this.$overlay.find(".tcb-nav-prev").on("click", this.showPrev.bind(this)), this.$overlay.find(".tcb-nav-next").on("click", this.showNext.bind(this)), this.$overlay.find(".tcb-nav-close").on("click", this.close.bind(this)), this.$wrapper.on("click", function (t) {
                                            "IMG" !== t.target.tagName && n.close()
                                        }), this.$wrapper.length && this.$wrapper.swipe({
                                            swipeLeft: this.showNext.bind(this),
                                            swipeRight: this.showPrev.bind(this),
                                            swipeUp: function () {
                                                n.isOpen = !1, n.$overlay.removeClass("g-v").hide()
                                            },
                                            swipeDown: function () {
                                                return !1
                                            }
                                        }), i("html").off("keydown.gallery").on("keydown.gallery", function (t) {
                                            if (n.isOpen) switch (t.keyCode) {
                                                case 37:
                                                    n.showPrev();
                                                    break;
                                                case 39:
                                                    n.showNext();
                                                    break;
                                                case 27:
                                                    n.close()
                                            }
                                        })
                                    }
                                }, {
                                    key: "close",
                                    value: function () {
                                        this.isOpen = !1, this.$gallery.addClass(this.getAnimationsClasses()), this.$overlay.removeClass("g-v").hide()
                                    }
                                }, {
                                    key: "createGalleryItem",
                                    value: function (t) {
                                        if (!t.classList.contains("gallery-clicker")) {
                                            var e = t.querySelector("img");
                                            try {
                                                JSON.parse(e.dataset.sizes)
                                            } catch (t) {}
                                            i('<div class="tve-g-image-wrapper">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="tcb-caption-wrapper tcb-loading">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class="tcb-nav-close">'.concat(n.icons.get("cross"), '</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tloading="lazy"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-pos="').concat(t.getAttribute("data-position"), '" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-caption="').concat(t.getAttribute("data-caption"), '" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-index="').concat(t.getAttribute("data-index"), '" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdata-src="').concat(e.dataset.src, '" alt=""/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="tcb-caption"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="tcb-image-loader">').concat(TCB_Front.icons.get("spinner9"), "</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>")).appendTo(this.$wrapper)
                                        }
                                    }
                                }, {
                                    key: "showImage",
                                    value: function (t, e) {
                                        this.$gallery.removeClass(this.getAnimationsClasses()), this.$wrapper.toggleClass("g-n-a", !e);
                                        var a = this.$wrapper.find("img[data-index=".concat(t, "]")),
                                            n = "true" === this.$gallery.attr("data-caption-lightbox"),
                                            i = a.attr("data-caption") || "",
                                            s = a.attr("data-pos");
                                        a.parent().hasClass("tcb-loading") && a.on("load", function () {
                                            a.parent().removeClass("tcb-loading")
                                        }), a.attr("src", a.attr("data-src")), this.$wrapper.css({
                                            left: "-".concat(100 * t, "%")
                                        }), this.currentImageIndex = t, this.$overlay.find(".tcb-img-count").text(s), this.$overlay.find(".tcb-caption").text(n && i.length ? i : ""), this.$overlay.find(".tcb-mob-text").text(i)
                                    }
                                }, {
                                    key: "showNext",
                                    value: function () {
                                        var t = this;
                                        this.animating || (this.currentImageIndex < this.imageCount - 1 ? this.showImage(this.currentImageIndex + 1, !0) : (this.$wrapper.addClass("g-n-a").css("left", "100%"), this.animating = !0, setTimeout(function () {
                                            t.showImage(0, !0), t.animating = !1
                                        }, 20)))
                                    }
                                }, {
                                    key: "showPrev",
                                    value: function () {
                                        var t = this;
                                        this.animating || (0 < this.currentImageIndex ? this.showImage(this.currentImageIndex - 1, !0) : (this.$wrapper.addClass("g-n-a").css("left", -100 * this.imageCount + "%"), this.animating = !0, setTimeout(function () {
                                            t.showImage(t.imageCount - 1, !0), t.animating = !1
                                        }, 20)))
                                    }
                                }, {
                                    key: "getAnimationsClasses",
                                    value: function () {
                                        var t = [];
                                        if (this.$gallery.hasClass("tve_evt_manager_listen")) {
                                            t.push("tve_evt_manager_listen", "tve_ea_thrive_animation");
                                            var e = this.$gallery[0].className.match(/tve_et_\S*|tve_ea_\S*|tve_anim_\S*/g);
                                            null !== e && (t.push.apply(t, _toConsumableArray(e)), t.includes("tve_ea_thrive_tooltip") && t.splice(t.indexOf("tve_ea_thrive_animation"), 1))
                                        }
                                        return _toConsumableArray(new Set(t)).join(" ")
                                    }
                                }]), e
                            }(), e.exports = s
                        }
                    }
                }
            }
        }
    }
})("workspace/editor/js/frontend/modules/image-gallery");