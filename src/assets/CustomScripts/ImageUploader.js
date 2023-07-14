﻿//Image Uploader
/*! Image Uploader - v1.2.3 - 26/11/2019
Copyright (c) 2019 Christian Bayer; Licensed MIT */
!(function (e) {
    e.fn.imageUploader = function (t) {
        let n,
            i = {
                preloadedimage: [],
                imagesInputName: "eventImagesList",
                preloadedInputName: "preloaded",
                label: "Drag & Drop files here or click to browse",
                extensions: [".jpg", ".jpeg", ".png"],
                mimes: ["image/jpeg", "image/png", "image/jpeg"],
                maxSize: undefined,
                maxFiles: void 0,
            },
            a = this,
            s = new DataTransfer();
        (a.settings = {}),
            (a.init = function () {
                (a.settings = e.extend(a.settings, i, t)),
                    a.each(function (t, n) {
                        let i = o();
                        if (
                            (e(n).append(i),
                                i.on("dragover", r.bind(i)),
                                i.on("dragleave", r.bind(i)),
                                i.on("drop", p.bind(i)),
                                a.settings.preloadedimage.length)
                        ) {
                            i.addClass("has-files");
                            let e = i.find(".uploaded");
                            for (let t = 0; t < a.settings.preloadedimage.length; t++)
                                e.append(
                                    l(a.settings.preloadedimage[t].src, a.settings.preloadedimage[t].id, !0)
                                );
                        }
                    });
            });
        let o = function () {
            let t = e("<div>", { class: "image-uploader" });
            n = e("<input>", {
                type: "file",
                id: a.settings.imagesInputName + "-" + h(),
                name: a.settings.imagesInputName,
                accept: a.settings.extensions.join(","),
                multiple: "",
            }).appendTo(t);

            let i = e("<div>", { class: "upload-text" }).appendTo(t);
            e("<i>", { class: "bi bi-plus-lg" }).appendTo(i);
            e("<span>", { text: a.settings.label }).appendTo(i);
            e("<div>", { class: "uploaded" }).appendTo(t);
            return (
                i.on("click", function (e) {
                    d(e), n.trigger("click");
                }),
                n.on("click", function (e) {
                    e.stopPropagation();
                }),
                n.on("change", p.bind(t)),
                t
            );
        },
            d = function (e) {
                e.preventDefault(), e.stopPropagation();
            },
            l = function (t, i, o) {
                let l = e("<div>", { class: "uploaded-image" }),
                    r =
                        (e("<img>", { src: t }).appendTo(l),
                            e("<button>", { class: "delete-image" }).appendTo(l));
                e("<i>", { class: "bi bi-x" }).appendTo(r);
                if (o) {
                    l.attr("data-preloaded", !0);
                    e("<input>", {
                        type: "hidden",
                        name: a.settings.preloadedInputName + "[]",
                        value: t,
                    }).appendTo(l);
                } else l.attr("data-index", i);
                return (
                    l.on("click", function (e) {
                        d(e);
                    }),
                    r.on("click", function (t) {
                        d(t);
                        let o = l.parent();
                        if (!0 === l.data("preloadedimage"))
                            a.settings.preloadedimage = a.settings.preloadedimage.filter(function (e) {
                                return e.id !== i;
                            });
                        else {
                            let t = parseInt(l.data("index"));
                            o.find(".uploaded-image[data-index]").each(function (n, i) {
                                n > t && e(i).attr("data-index", n - 1);
                            }),
                                s.items.remove(t),
                                n.prop("files", s.files);
                        }
                        l.remove(),
                            o.children().length || o.parent().removeClass("has-files");
                    }),
                    l
                );
            },
            r = function (t) {
                d(t),
                    "dragover" === t.type
                        ? e(this).addClass("drag-over")
                        : e(this).removeClass("drag-over");
            },
            p = function (t) {
                d(t);
                let i = e(this),
                    o = Array.from(t.target.files || t.originalEvent.dataTransfer.files),
                    l = [];
                e(o).each(function (e, t) {
                    (a.settings.extensions && !g(t)) ||
                        (a.settings.mimes && !c(t)) ||
                        (a.settings.maxSize && !f(t)) ||
                        (a.settings.maxFiles && !m(l.length, t)) ||
                        l.push(t);
                }),
                    l.length
                        ? (i.removeClass("drag-over"), u(i, l))
                        : n.prop("files", s.files);
            },
            g = function (e) {
                return (
                    !(
                        a.settings.extensions.indexOf(
                            e.name.replace(new RegExp("^.*\\."), ".")
                        ) < 0
                    ) ||
                    (alert(
                        `The file "${e.name
                        }" does not match with the accepted file extensions: "${a.settings.extensions.join(
                            '", "'
                        )}"`
                    ),
                        !1)
                );
            },
            c = function (e) {
                return (
                    !(a.settings.mimes.indexOf(e.type) < 0) ||
                    (alert(
                        `The file "${e.name
                        }" does not match with the accepted mime types: "${a.settings.mimes.join(
                            '", "'
                        )}"`
                    ),
                        !1)
                );
            },
            f = function (e) {
                return (
                    !(e.size > a.settings.maxSize) ||
                    (alert(
                        `The file "${e.name}" exceeds the maximum size of ${a.settings.maxSize / 1024 / 1024
                        }Mb`
                    ),
                        !1)
                );
            },
            m = function (e, t) {
                return (
                    !(
                        e + s.items.length + a.settings.preloadedimage.length >=
                        a.settings.maxFiles
                    ) ||
                    (alert(
                        `The file "${t.name}" could not be added because the limit of ${a.settings.maxFiles} files was reached`
                    ),
                        !1)
                );
            },
            u = function (t, n) {
                t.addClass("has-files");
                let i = t.find(".uploaded"),
                    a = t.find('input[type="file"]');
                e(n).each(function (e, t) {
                    s.items.add(t),
                        i.append(l(URL.createObjectURL(t), s.items.length - 1), !1);
                }),
                    a.prop("files", s.files);
            },
            h = function () {
                return Date.now() + Math.floor(100 * Math.random() + 1);
            };
        return this.init(), this;
    };
})(jQuery);


// //EndDate Validation
// function setEndDate() {
//     var start = new Date($("#startDate").val());
//     start.setDate(start.getDate());
//     var minEndDateStr = start.toISOString().slice(0, 10);
//     $("#endDate").attr("min", minEndDateStr);
// }
// function setEndTime() {
//     var start = $("#startDate").val();
//     var end = $("#endDate").val();

//     var startTimeVal = $("#startTime").val();
//     if (start == end) {
//         let [hours, mins] = startTimeVal.split(':');
//         hours = parseInt(hours) + 1;
//         if (hours < 10) {
//             hours = hours.toString().padStart(2, '0');
//         };
//         let list = [hours, mins];
//         let newstart = list.join(':');
//         console.log(newstart);

//         $("#endTime").attr("min", newstart);
//     }
// }

// //For Created By
// function loggedUser() {
//     $.ajax({
//         url: "/Methods/LoggedUser",
//         method: "GET",
//         success: function (result) {
//             //console.log(result);
//             document.getElementById('createdBy').value = result.userId;
//             document.getElementById('createdByForDisplay').value = result.userName;


//         },
//         error: function (error) {
//             console.log(error);
//         },
//     });
// }