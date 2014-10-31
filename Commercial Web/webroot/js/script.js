
function ws_kenburns(d, l, m) {
    var e = jQuery;
    var g = e(this);
    var f = document.createElement("canvas").getContext;
    var i = e("<div>").css({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden"
    }).addClass("ws_effect ws_kenburns").appendTo(m);
    var p = d.paths || [{
        from: [0, 0, 1],
        to: [0, 0, 1.2]
    }, {
        from: [0, 0, 1.2],
        to: [0, 0, 1]
    }, {
        from: [1, 0, 1],
        to: [1, 0, 1.2]
    }, {
        from: [0, 1, 1.2],
        to: [0, 1, 1]
    }, {
        from: [1, 1, 1],
        to: [1, 1, 1.2]
    }, {
        from: [0.5, 1, 1],
        to: [0.5, 1, 1.3]
    }, {
        from: [1, 0.5, 1.2],
        to: [1, 0.5, 1]
    }, {
        from: [1, 0.5, 1],
        to: [1, 0.5, 1.2]
    }, {
        from: [0, 0.5, 1.2],
        to: [0, 0.5, 1]
    }, {
        from: [1, 0.5, 1.2],
        to: [1, 0.5, 1]
    }, {
        from: [0.5, 0.5, 1],
        to: [0.5, 0.5, 1.2]
    }, {
        from: [0.5, 0.5, 1.3],
        to: [0.5, 0.5, 1]
    }, {
        from: [0.5, 1, 1],
        to: [0.5, 0, 1.15]
    }];

    function c(h) {
        return p[h ? Math.floor(Math.random() * (f ? p.length : Math.min(5, p.length))) : 0]
    }

    function o(u, v) {
        var x = new Date().getTime();
        var w = function() {
            var y = (new Date().getTime() - x) / v;
            if (y < 1) {
                u(y);
                requestAnimationFrame(w)
            } else {
                h(1)
            }
        };
        w();

        function h(y) {
            cancelAnimationFrame(w);
            if (y) {
                u(1)
            }
        }
        return {
            stop: h
        }
    }
    var k = d.width,
        q = d.height;
    var j, b;
    var a, s;

    function n() {
        a = e('<div style="width:100%;height:100%"></div>').css({
            "z-index": 8,
            position: "absolute",
            left: 0,
            top: 0
        }).appendTo(i)
    }
    n();

    function t(x, u, h) {
        var v = {
            width: 100 * x[2] + "%"
        };
        v[u ? "right" : "left"] = -100 * (x[2] - 1) * (u ? (1 - x[0]) : x[0]) + "%";
        v[h ? "bottom" : "top"] = -100 * (x[2] - 1) * (h ? (1 - x[1]) : x[1]) + "%";
        if (!f) {
            for (var w in v) {
                if (/\%/.test(v[w])) {
                    v[w] = (/right|left|width/.test(w) ? k : q) * parseFloat(v[w]) / 100 + "px"
                }
            }
        }
        return v
    }

    function r(x, A, B) {
        var u = e(x);
        u = {
            width: u.width(),
            height: u.height(),
            marginTop: u.css("marginTop"),
            marginLeft: u.css("marginLeft")
        };
        if (f) {
            if (b) {
                b.stop(1)
            }
            b = j
        }
        if (s) {
            s.remove()
        }
        s = a;
        n();
        if (B) {
            a.hide();
            s.stop(true, true)
        }
        if (f) {
            var z, y;
            var v, h;
            v = e('<canvas width="' + k + '" height="' + q + '"/>');
            v.css({
                position: "absolute",
                left: 0,
                top: 0
            }).css(u).appendTo(a);
            z = v.get(0).getContext("2d");
            h = v.clone().appendTo(a);
            y = h.get(0).getContext("2d");
            j = new o(function(C) {
                var E = [A.from[0] * (1 - C) + C * A.to[0], A.from[1] * (1 - C) + C * A.to[1], A.from[2] * (1 - C) + C * A.to[2]];
                y.drawImage(x, -k * (E[2] - 1) * E[0], -q * (E[2] - 1) * E[1], k * E[2], q * E[2]);
                z.clearRect(0, 0, k, q);
                var D = z;
                z = y;
                y = D
            }, d.duration + d.delay * 2)
        } else {
            k = u.width;
            q = u.height;
            var w = e('<img src="' + x.src + '"/>').css({
                position: "absolute",
                left: "auto",
                right: "auto",
                top: "auto",
                bottom: "auto"
            }).appendTo(a).css(t(A.from, A.from[0] > 0.5, A.from[1] > 0.5)).animate(t(A.to, A.from[0] > 0.5, A.from[1] > 0.5), {
                easing: "linear",
                queue: false,
                duration: (1.5 * d.duration + d.delay)
            })
        }
        if (B) {
            a.fadeIn(d.duration)
        }
    }
    if (typeof d.effect == "string") {
        e(function() {
            l.each(function(h) {
                e(this).css({
                    visibility: "hidden"
                });
                if (h == d.startSlide) {
                    r(this, c(0), 0)
                }
            })
        })
    }
    this.go = function(h, u) {
        setTimeout(function() {
            g.trigger("effectEnd")
        }, d.duration);
        r(l.get(h), c(h), 1)
    }
}; 


jQuery("#wowslider-container1").wowSlider({
    effect: "kenburns",
    prev: "",
    next: "",
    duration: 15 * 100,
    delay: 20 * 100,
    width: 1024,
    height: 600,
    autoPlay: true,
    autoPlayVideo: false,
    playPause: false,
    stopOnHover: false,
    loop: false,
    bullets: 1,
    caption: true,
    captionEffect: "parallax",
    controls: true,
    responsive: 1,
    fullScreen: false,
    gestures: 2,
    onBeforeStep: 0,
    images: 0
});