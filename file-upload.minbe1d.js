/*! Thrive Architect - 2021-06-18
 * http://www.thrivethemes.com/
 * Copyright (c) 2021 Thrive Themes */

"use strict";

function ownKeys(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), i.push.apply(i, r)
    }
    return i
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(i, !0).forEach(function (e) {
            _defineProperty(t, e, i[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ownKeys(i).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        })
    }
    return t
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var r = t[i];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}

function _defineProperty(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function (s) {
    var p, u, n, h, m, o = {
            ".js": [],
            ".json": [],
            ".css": [],
            ".html": []
        },
        f = "function" == typeof require ? require : null;
    return h = function (e) {
        var t = new Error("Could not find module '" + e + "'");
        return t.code = "MODULE_NOT_FOUND", t
    }, m = function (e, t, i) {
        var r, n;
        if ("function" == typeof e[t + i]) return t + i;
        for (r = 0; n = o[i][r]; ++r)
            if ("function" == typeof e[t + n]) return t + n;
        return null
    }, p = function (e, t, i, r, n, o) {
        var l, a, s, f, d, c;
        for ("." !== (l = (i = i.split("/")).pop()) && ".." !== l || (i.push(l), l = ""); null != (a = i.shift());)
            if (a && "." !== a && (".." === a ? (e = t.pop(), o = o.slice(0, o.lastIndexOf("/"))) : (t.push(e), e = e[a], o += "/" + a), !e)) throw h(r);
        if (l && "function" != typeof e[l] && ((c = (c = (c = (c = m(e, l, ".js")) || m(e, l, ".json")) || m(e, l, ".css")) || m(e, l, ".html")) ? l = c : 2 !== n && "object" === _typeof(e[l]) && (t.push(e), e = e[l], o += "/" + l, l = "")), !l) return 1 !== n && e[":mainpath:"] ? p(e, t, e[":mainpath:"], r, 1, o) : p(e, t, "index", r, 2, o);
        if (!(d = e[l])) throw h(r);
        return d.hasOwnProperty("module") ? d.module.exports : (s = {}, d.module = f = {
            exports: s,
            id: o + "/" + l
        }, d.call(s, s, f, u(e, t, o)), f.exports)
    }, n = function (e, t, i, r) {
        var n, o = i,
            l = i.charAt(0),
            a = 0;
        if ("/" === l) {
            if (o = o.slice(1), !(e = s["/"])) {
                if (f) return f(i);
                throw h(i)
            }
            r = "/", t = []
        } else if ("." !== l) {
            if (n = o.split("/", 1)[0], !(e = s[n])) {
                if (f) return f(i);
                throw h(i)
            }
            r = n, t = [], (o = o.slice(n.length + 1)) || (a = (o = e[":mainpath:"]) ? 1 : (o = "index", 2))
        }
        return p(e, t, o, i, a, r)
    }, (u = function (t, i, r) {
        return function (e) {
            return n(t, [].concat(i), e, r)
        }
    })(s, [], "")
}({
    workspace: {
        editor: {
            js: {
                frontend: {
                    modules: {
                        "file-upload.js": function (e, t, i) {
                            void 0 === TCB_Front.js_modules["file-upload"] && TCB_Front.setModuleLoadedStatus("file-upload", !1),
                                function (n) {
                                    if (!TCB_Front.isModuleLoaded("file-upload")) {
                                        var e = function () {
                                            function t(e) {
                                                if (_classCallCheck(this, t), _defineProperty(this, "config", {}), _defineProperty(this, "$wrapper", n()), _defineProperty(this, "$el", n()), _defineProperty(this, "el", null), _defineProperty(this, "fileId", 0), _defineProperty(this, "$fileList", n()), _defineProperty(this, "deleteIcon", '<svg width="12" height="14" viewBox="0 0 18 20"><path fill="#6D7A86" d="M17.188 2.5h-4.063L11.812.75c-.354-.472-.91-.75-1.5-.75H7.188c-.59 0-1.146.278-1.5.75L4.375 2.5H.312C.14 2.5 0 2.64 0 2.813v.624c0 .173.14.313.313.313h.738l1.297 14.543c.087.966.897 1.707 1.867 1.707h9.07c.97 0 1.78-.74 1.867-1.707L16.45 3.75h.738c.173 0 .313-.14.313-.313v-.624c0-.173-.14-.313-.313-.313zm-10.5-1c.118-.157.303-.25.5-.25h3.125c.196 0 .381.093.5.25l.75 1H5.936l.75-1zm7.218 16.68c-.026.323-.297.57-.62.57H4.214c-.324 0-.595-.247-.621-.57L2.304 3.75h12.891l-1.289 14.43z"/></svg>'), _defineProperty(this, "uploader", null), _defineProperty(this, "errorTemplates", {}), _defineProperty(this, "files", {}), _defineProperty(this, "uploadInProgress", !1), _defineProperty(this, "fieldName", ""), _defineProperty(this, "fieldMapping", ""), !e.data("tcb-file-upload") && (this.$wrapper = e, this.$el = this.$wrapper.find(".tve_lg_file"), this.$wrapper.data("tcb-file-upload", this), this.$el.length)) {
                                                    this.el = this.$el[0];
                                                    try {
                                                        this.readConfig()
                                                    } catch (e) {
                                                        return this.$el.remove(), void console.log("File upload error", e)
                                                    }
                                                    this.dom(), this.plupload()
                                                }
                                            }

                                            function e() {
                                                return i.apply(this, arguments)
                                            }
                                            var i;
                                            return _createClass(t, [{
                                                key: "isValid",
                                                value: function () {
                                                    return !this.el || (this.uploadInProgress ? this.errorTemplates.upload_progress || "File upload in progress. Please wait for the upload to finish and try again." : !(this.config.required && !this.fileCount) || (this.errorTemplates.file_required || "At least one file is required"))
                                                }
                                            }, {
                                                key: "dom",
                                                value: function () {
                                                    var t = this,
                                                        e = this.$el.find('input[type="file"]').remove();
                                                    this.fieldName = e.attr("name"), this.fieldMapping = e.attr("data-mapping"), this.$fileList = n('<div class="tcb-file-list tcb-plain-text"></div>').insertAfter(this.$el), this.$fileList.on("click.tcb", ".tcb-file-remove", function (e) {
                                                        t.removeFile(e.currentTarget.dataset.fileId)
                                                    });

                                                    function i() {
                                                        return t.el.classList.remove(r)
                                                    }
                                                    var r = "tve-state-active";
                                                    return this.$el.off("dragover.tcb dragenter.tcb dragleave.tcb drop.tcb").on("dragenter.tcb", function () {
                                                        return t.el.classList.add(r)
                                                    }).on("dragover.tcb", function (e) {
                                                        return e.originalEvent.dataTransfer.dropEffect = "copy"
                                                    }).on("drop.tcb dragend.tcb", i).on("dragleave.tcb", function (e) {
                                                        e.originalEvent.relatedTarget && !n.contains(t.el, e.originalEvent.relatedTarget) && i()
                                                    }), this
                                                }
                                            }, {
                                                key: "readConfig",
                                                value: function () {
                                                    if (this.fileId = parseInt(this.$wrapper.attr("data-f-id") || 0), this.$wrapper.removeAttr("data-f-id"), this.config = JSON.parse(this.el.dataset.fileSetup), this.$el.removeAttr("data-file-setup"), !this.fileId || !this.config) throw new Error("Missing file ID / setup");
                                                    try {
                                                        this.errorTemplates = JSON.parse(this.$wrapper.find(".tve-lg-err-msg").val())
                                                    } catch (e) {
                                                        this.errorTemplates = {}
                                                    }
                                                    this.errorTemplates = _objectSpread({}, {
                                                        file_extension: "Sorry, {fileextension} files are not allowed",
                                                        file_size: "{file} exceeds the maximum file size of {filelimit}",
                                                        max_files: "Sorry, the maximum number of files is {maxfiles}"
                                                    }, {}, this.errorTemplates)
                                                }
                                            }, {
                                                key: "$fileItem",
                                                value: function (e) {
                                                    return "string" != typeof e && e.id && (e = e.id), this.$fileList.children('[data-id="'.concat(e, '"]'))
                                                }
                                            }, {
                                                key: "formatFileSize",
                                                value: function (e) {
                                                    if (!e.origSize) return "";
                                                    var t = "B",
                                                        i = e.origSize;
                                                    return 1e3 < i && (i /= 1024, t = "KB"), 1e3 < i && (i /= 1024, t = "MB"), i !== parseInt(i) && (i = i.toFixed(1)), i + " " + t
                                                }
                                            }, {
                                                key: "template",
                                                value: function (e) {
                                                    var t = this.$fileItem(e.id),
                                                        i = '<div class="tcb-file-info"><span class="tcb-file-name">'.concat(e.name, '</span><span class="tcb-file-size">').concat(this.formatFileSize(e), "</span></div>"),
                                                        r = '<button data-file-id="'.concat(e.id, '" type="button" class="tcb-file-remove">').concat(this.deleteIcon, "</button>");
                                                    return t.length || (t = n('<div class="tcb-file-item" data-id="'.concat(e.id, '">').concat(i).concat('<span class="tcb-upload-progress"><span class="progress-bg"></span></span>').concat(r).concat('<div class="tcb-file-loader"><span class="tcb-form-loader-icon thrv-icon-spinner9"></span></div>', "</div>")).appendTo(this.$fileList)), t
                                                }
                                            }, {
                                                key: "clearErrors",
                                                value: function () {
                                                    this.$fileList.children(".tcb-error").remove()
                                                }
                                            }, {
                                                key: "plupload",
                                                value: (i = function () {
                                                    var n, e = this;
                                                    if (plupload.addFileFilter("max_files", function (e, t, i) {
                                                            var r = this;
                                                            this._tcbInstance.fileCount >= e ? (clearTimeout(n), n = setTimeout(function () {
                                                                r._tcbInstance.clearErrors(), r._tcbInstance.uploader.trigger("Error", {
                                                                    code: 800,
                                                                    message: r._tcbInstance.getErrorMessage("max_files", t),
                                                                    file: t
                                                                })
                                                            }, 100), i(!1)) : i(!0)
                                                        }), this.uploader = new plupload.Uploader({
                                                            runtimes: "html5,html4",
                                                            dragdrop: !0,
                                                            drop_element: this.el,
                                                            browse_button: this.$el.find(".tcb-file-upload-trigger")[0],
                                                            container: this.el,
                                                            url: tve_frontend_options.ajaxurl + "?action=tcb_file_upload&id=" + encodeURIComponent(this.fileId),
                                                            filters: {
                                                                max_files: this.config.max_files || 1,
                                                                max_file_size: this.maxFileSize,
                                                                mime_types: [{
                                                                    title: "Custom",
                                                                    extensions: this.config.allowed.join(",")
                                                                }]
                                                            },
                                                            init: {
                                                                FilesAdded: this.onFilesAdded.bind(this),
                                                                FilesRemoved: this.onFilesRemoved.bind(this),
                                                                UploadFile: this.onUploadStart.bind(this),
                                                                UploadProgress: this.onUploadProgress.bind(this),
                                                                FileUploaded: this.onFileUploaded.bind(this),
                                                                Error: this.onUploadError.bind(this),
                                                                FileFiltered: this.onFileFiltered.bind(this),
                                                                UploadComplete: this.onUploadComplete.bind(this)
                                                            }
                                                        }), (this.uploader._tcbInstance = this).uploader.init(), TCB_Front.browser.ios) {
                                                        var t = this.$wrapper.find(".tcb-file-upload-trigger");
                                                        t.replaceWith(t.clone()), this.$wrapper.on("click", ".tcb-file-upload-trigger", function () {
                                                            e.$wrapper.find("input[type=file]")[0].click()
                                                        })
                                                    }
                                                }, e.toString = function () {
                                                    return i.toString()
                                                }, e)
                                            }, {
                                                key: "markFileError",
                                                value: function (e, t) {
                                                    return this.template(e).removeClass("tcb-uploading tcb-done").addClass("tcb-error").find(".tcb-file-info").html(t), this
                                                }
                                            }, {
                                                key: "isUploaded",
                                                value: function (e) {
                                                    return e = "string" == typeof e ? e : e.id, this.$wrapper.find("input#file-".concat(e)).length
                                                }
                                            }, {
                                                key: "getUploadedFileId",
                                                value: function (e) {
                                                    return e = "string" == typeof e ? e : e.id, this.$wrapper.find("input#file-".concat(e)).val()
                                                }
                                            }, {
                                                key: "getUploadedFileNonce",
                                                value: function (e) {
                                                    return e = "string" == typeof e ? e : e.id, this.$wrapper.find("input#file-".concat(e)).attr("data-key")
                                                }
                                            }, {
                                                key: "removeFile",
                                                value: function (e) {
                                                    e = "string" == typeof e ? e : e.id, delete this.files[e], this.uploader.removeFile(e), this.$fileItem(e).remove();
                                                    var t = this.getUploadedFileId(e);
                                                    t && n.ajax({
                                                        url: tve_frontend_options.ajaxurl,
                                                        type: "post",
                                                        data: {
                                                            action: "tcb_file_remove",
                                                            id: this.fileId,
                                                            file_id: t,
                                                            nonce: this.getUploadedFileNonce(e)
                                                        }
                                                    }), this.$wrapper.find("input#file-".concat(e)).remove()
                                                }
                                            }, {
                                                key: "appendExtraData",
                                                value: function (e) {
                                                    return this.fieldName && (e += "&tcb_file_field=" + encodeURIComponent(this.fieldName) + "&tcb_file_id=" + this.fileId), e
                                                }
                                            }, {
                                                key: "getErrorMessage",
                                                value: function (e, t) {
                                                    if (!this.errorTemplates[e]) return "Unknown error";
                                                    var i = t.name.split(".").pop();
                                                    return this.errorTemplates[e].replace(/({file})/g, t.name).replace(/{filelimit}/g, this.maxFileSize.toUpperCase()).replace(/{fileextension}/g, i).replace(/{maxfiles}/g, this.config.max_files || 1)
                                                }
                                            }, {
                                                key: "clear",
                                                value: function () {
                                                    this.$fileList.empty(), this.files = {}, this.uploader && (this.uploader.files = [])
                                                }
                                            }, {
                                                key: "onFilesAdded",
                                                value: function (e, t) {
                                                    var i = this;
                                                    plupload.each(t, function (e) {
                                                        i.$fileList.append(i.template(e))
                                                    });
                                                    var r = this.$wrapper.find('input[type="email"]').val();
                                                    this.uploader.setOption("url", tve_frontend_options.ajaxurl + "?action=tcb_file_upload&id=" + encodeURIComponent(this.fileId) + "&email=" + encodeURIComponent(r)), this.uploader.start()
                                                }
                                            }, {
                                                key: "onFilesRemoved",
                                                value: function (e, t) {
                                                    var i = this;
                                                    plupload.each(t, function (e) {
                                                        delete i.files[e.id], i.$fileItem(e).remove()
                                                    })
                                                }
                                            }, {
                                                key: "onUploadStart",
                                                value: function (e, t) {
                                                    this.$el.removeClass("tcb-form-input-error").next(".tcb-form-error").remove(), this.uploadInProgress = !0, this.$fileItem(t).addClass("tcb-uploading")
                                                }
                                            }, {
                                                key: "onUploadProgress",
                                                value: function (e, t) {
                                                    var i = "".concat(t.percent, "%");
                                                    this.template(t).addClass("tcb-uploading").find(".progress-bg").attr("data-percent", i).css("width", i)
                                                }
                                            }, {
                                                key: "onUploadError",
                                                value: function (e, t) {
                                                    if (!t.file) throw new Error("missing file data");
                                                    var i = t.response || t.message;
                                                    if (t.response) try {
                                                        var r = JSON.parse(r.response);
                                                        r.error && (i = r.error)
                                                    } catch (e) {}
                                                    switch (t.code) {
                                                        case plupload.FILE_SIZE_ERROR:
                                                            i = this.getErrorMessage("file_size", t.file);
                                                            break;
                                                        case plupload.FILE_EXTENSION_ERROR:
                                                            i = this.getErrorMessage("file_extension", t.file) + " (".concat(t.file.name, ")");
                                                            break;
                                                        default:
                                                            i += " (".concat(t.file.name, ")")
                                                    }
                                                    delete this.files[t.file.id], this.markFileError(t.file, i)
                                                }
                                            }, {
                                                key: "onFileFiltered",
                                                value: function (e, t) {
                                                    this.files[t.id] = t
                                                }
                                            }, {
                                                key: "onFileUploaded",
                                                value: function (e, t, i) {
                                                    this.template(t).removeClass("tcb-uploading").addClass("tcb-done");
                                                    try {
                                                        if (200 !== i.status) throw new Error("Something went wrong. Response was: " + i.response);
                                                        var r = JSON.parse(i.response);
                                                        if (!r.file_id) throw new Error("Something went wrong while uploading the file");
                                                        this.$wrapper.find("form").append('<input data-mapping="'.concat(this.fieldMapping, '" type="hidden" data-key="').concat(r.nonce, '" id="file-').concat(t.id, '" name="_tcb_files[').concat(r.nonce, ']" value="').concat(r.file_id, '">'))
                                                    } catch (e) {
                                                        this.markFileError(t, e.message)
                                                    }
                                                }
                                            }, {
                                                key: "onUploadComplete",
                                                value: function () {
                                                    this.uploadInProgress = !1
                                                }
                                            }, {
                                                key: "maxFileSize",
                                                get: function () {
                                                    return (this.config.max_size || 1) + "mb"
                                                }
                                            }, {
                                                key: "fileCount",
                                                get: function () {
                                                    return Object.keys(this.files).length
                                                }
                                            }]), t
                                        }();
                                        window.TCB_Front.FileUpload = e, t.exports = e, TCB_Front.setModuleLoadedStatus("file-upload", !0)
                                    }
                                }(ThriveGlobal.$j)
                        }
                    }
                }
            }
        }
    }
})("workspace/editor/js/frontend/modules/file-upload");