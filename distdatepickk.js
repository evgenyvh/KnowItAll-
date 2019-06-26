(function (a, b) {
    'object' == typeof exports && 'object' == typeof module ? module.exports = b() : 'function' == typeof define && define.amd ? define([], b) : 'object' == typeof exports ? exports.Datepickk = b() : a.Datepickk = b()
})(this, function () {
    return function (a) {
        function b(d) {
            if (c[d]) return c[d].exports;
            var e = c[d] = {i: d, l: !1, exports: {}};
            return a[d].call(e.exports, e, e.exports, b), e.l = !0, e.exports
        }

        var c = {};
        return b.m = a, b.c = c, b.d = function (a, c, d) {
            b.o(a, c) || Object.defineProperty(a, c, {configurable: !1, enumerable: !0, get: d})
        }, b.n = function (a) {
            var c = a && a.__esModule ? function () {
                return a['default']
            } : function () {
                return a
            };
            return b.d(c, 'a', c), c
        }, b.o = function (a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }, b.p = '', b(b.s = 0)
    }([function (a, b, c) {
        'use strict';

        function d(a) {
            function b() {
                z.el.days.innerHTML = '';
                var a = null == ba ? E[S].weekStart : ba;
                if (Y) for (var b, c = 0; c < J && 3 > c; c++) {
                    b = document.createElement('div'), b.setAttribute('class', 'd-week');
                    for (var d = 0; 7 > d; d++) {
                        var e = d + a > E[S].dayNames.length - 1 ? d + a - E[S].dayNames.length : d + a,
                            f = document.createElement('div'), g = document.createElement('p');
                        g.innerHTML = E[S].dayNames[e], f.appendChild(g), b.appendChild(f)
                    }
                    z.el.days.appendChild(b)
                }
            }

            function h() {
                [].slice.call(z.el.yearPicker.childNodes).forEach(function (a) {
                    a.innerHTML = '\'' + (C + parseInt(a.getAttribute('data-year'))).toString().substring(2, 4)
                })
            }

            function c() {
                function a(a) {
                    function b(a) {
                        var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
                        return b ? {r: parseInt(b[1], 16), g: parseInt(b[2], 16), b: parseInt(b[3], 16)} : null
                    }

                    if ('LABEL' === a.target.nodeName) {
                        var c = a.target.getAttribute('data-legend-id') ? a.target.getAttribute('data-legend-id').split(' ') : [];
                        c.length && c.forEach(function (c) {
                            var d = z.el.legend.querySelector('[data-legend-id="' + c + '"]');
                            if ('mouseover' == a.type && d) {
                                var e = d.getAttribute('data-color') ? b(d.getAttribute('data-color')) : null;
                                d.setAttribute('style', 'background-color:rgba(' + e.r + ',' + e.g + ',' + e.b + ',0.35);')
                            } else d && d.removeAttribute('style')
                        })
                    }
                }

                z.el.tables.innerHTML = '';
                for (var b, c = 0; c < J; c++) {
                    b = document.createElement('div'), b.setAttribute('class', 'd-table');
                    for (var e, f = 0; 42 > f; f++) {
                        e = document.createElement('input'), e.type = 'checkbox', e.id = d.numInstances + '-' + c + '-d-day-' + f;
                        var g = document.createElement('label');
                        g.setAttribute('for', d.numInstances + '-' + c + '-d-day-' + f);
                        var h = document.createElement('text'), i = document.createElement('span');
                        i.setAttribute('class', 'd-tooltip'), b.appendChild(e), b.appendChild(g), g.appendChild(h), g.appendChild(i), e.addEventListener(A, function (a) {
                            ca && a.preventDefault()
                        }), e.addEventListener('change', s)
                    }
                    z.el.tables.appendChild(b)
                }
                z.el.tables.addEventListener('mouseover', a), z.el.tables.addEventListener('mouseout', a)
            }

            function i() {
                function a(a) {
                    [].slice.call(z.el.tables.querySelectorAll('[data-legend-id*="' + this.getAttribute('data-legend-id') + '"]')).forEach(function (b) {
                        'mouseover' == a.type ? b.classList.add('legend-hover') : b.classList.remove('legend-hover')
                    })
                }

                for (var b = new Date(z.el.tables.childNodes[0].childNodes[0].getAttribute('data-date')), c = new Date(z.el.tables.childNodes[J - 1].childNodes[82].getAttribute('data-date')), d = W.filter(function (a) {
                    for (var d = 0; d < a.dates.length; d++) if (a.dates[d].start < c && a.dates[d].end > b) return !0;
                    return !1
                }), e = [], f = 0; f < d.length; f++) if ('legend' in d[f] && d[f].legend) {
                    var g = H.querySelector('.d-legend-item[data-legend="' + d[f].legend + '"][data-color="' + d[f].backgroundColor + '"]');
                    if (null == g) {
                        var h = document.createElement('p');
                        h.setAttribute('class', 'd-legend-item'), h.setAttribute('data-legend', d[f].legend), h.setAttribute('data-legend-id', W.indexOf(d[f])), h.setAttribute('data-color', d[f].backgroundColor);
                        var i = document.createElement('span');
                        i.setAttribute('style', 'background-color:' + d[f].backgroundColor), h.appendChild(i), z.el.legend.appendChild(h), h.addEventListener('mouseover', a), h.addEventListener('mouseout', a), e.push(h)
                    } else e.push(g)
                }
                [].slice.call(z.el.legend.querySelectorAll('.d-legend-item')).forEach(function (b) {
                    0 > e.indexOf(b) && (b.removeEventListener('mouseover', a), b.removeEventListener('mouseout', a), z.el.legend.removeChild(b))
                })
            }

            function j(a) {
                return 11 < a ? a -= 12 : 0 > a && (a += 12), a
            }

            function k(a, b) {
                var c = z.el.querySelectorAll('.d-table'), d = null == ba ? E[S].weekStart : ba;
                [].slice.call(z.el.querySelectorAll('.d-table')).forEach(function (e, f) {
                    var g = new Date(a, b + f, 0).getDate(), h = new Date(a, b + f - 1, 0).getDate(),
                        k = new Date(a, b + f - 1, 1).getDay();
                    0 > k - d ? k = 7 - d : k -= d;
                    var i = E[S].monthNames[j(b - 1 + f)];
                    e.setAttribute('data-month', i), [].slice.call(e.querySelectorAll('.d-table input')).forEach(function (d, e) {
                        var i = d.nextSibling;
                        d.checked = !1, d.removeAttribute('disabled'), i.removeAttribute('style'), i.removeAttribute('data-legend-id'), i.className = '';
                        var j = null;
                        if (e < k ? (i.childNodes[0].innerHTML = h - (k - e - 1), 0 == f ? (j = new Date(a, b + f - 2, h - (k - e - 1)), i.className = 'prev') : (j = '', i.className = 'd-hidden', d.setAttribute('disabled', !0))) : e < g + k ? (j = new Date(a, b + f - 1, e - k + 1), i.childNodes[0].innerHTML = e - k + 1, i.className = '') : (i.childNodes[0].innerHTML = e - g - k + 1, f == c.length - 1 ? (j = new Date(a, b + f, e - g - k + 1), i.className = 'next') : (j = '', i.className = 'd-hidden', d.setAttribute('disabled', !0))), j instanceof Date) {
                            d.setAttribute('data-date', j.toJSON()), (-1 != U.indexOf(j.getTime()) || -1 != V.indexOf(j.getDay())) && d.setAttribute('disabled', !0), (_ && j < _ || aa && j > aa) && (d.setAttribute('disabled', !0), i.className = 'd-hidden'), Z && j.getTime() == new Date().setHours(0, 0, 0, 0) ? i.classList.add('today') : i.classList.remove('today'), X[j.getTime()] ? (i.childNodes[0].setAttribute('data-tooltip', !0), i.childNodes[1].innerHTML = X[j.getTime()]) : (i.childNodes[0].removeAttribute('data-tooltip'), i.childNodes[1].innerHTML = '');
                            var l = W.filter(function (a) {
                                for (var b = 0; b < a.dates.length; b++) if (j.getTime() >= a.dates[b].start.getTime() && j.getTime() <= a.dates[b].end.getTime()) return !0;
                                return !1
                            });
                            if (0 < l.length) {
                                var m = '', n = '';
                                if (1 < l.length) {
                                    var o = Math.round(100 / l.length);
                                    m = 'background: linear-gradient(-45deg,';
                                    for (var p = 0; p < l.length; p++) n += W.indexOf(l[p]), p !== l.length - 1 && (n += ' '), m += l[p].backgroundColor + ' ' + o * p + '%', p != l.length - 1 && (m += ',', m += l[p].backgroundColor + ' ' + o * (p + 1) + '%,');
                                    m += ');'
                                } else m = l[0].backgroundColor ? 'background:' + l[0].backgroundColor + ';' : '', n += W.indexOf(l[0]);
                                var q = l[0].color ? 'color:' + l[0].color + ';' : '';
                                i.setAttribute('style', m + q), i.setAttribute('data-legend-id', n)
                            }
                        }
                    })
                }), i()
            }

            function l() {
                if (z.el.tables.childNodes.length && z.el.tables.childNodes[0].childNodes.length) {
                    n(), (12 < D || 1 > D) && (12 < D ? (C += 1, D -= 12) : (C -= 1, D += 12)), aa && new Date(C, D - 1 + J - 1, 1) >= new Date(aa).setDate(1) ? (C = aa.getFullYear(), D = aa.getMonth() + 1 - J + 1, z.el.header.childNodes[2].setAttribute('style', 'visibility:hidden')) : z.el.header.childNodes[2].removeAttribute('style'), _ && new Date(C, D - 1, 1) <= new Date(_).setDate(1) ? (C = _.getFullYear(), D = _.getMonth() + 1, z.el.header.childNodes[0].setAttribute('style', 'visibility:hidden')) : z.el.header.childNodes[0].removeAttribute('style');
                    for (var a, b = 0; b < J; b++) a = D - 1 + b, 11 < a ? a -= 12 : 0 > a && (a += 12), z.el.monthPicker.childNodes[a].classList.add('current');
                    k(C, D), h();
                    var c = E[S].monthNames[D - 1], d = '';
                    if (1 < J) {
                        d += ' - ';
                        var e = D - 1 + J - 1;
                        11 < e ? e -= 12 : 0 > e && (e += 12), d += E[S].monthNames[e]
                    }
                    var f = 11 < D - 1 + J - 1 ? C.toString().substring(2, 4) + '/' + (C + 1).toString().substring(2, 4) : C.toString().substring(2, 4);
                    z.el.header.childNodes[1].childNodes[0].innerHTML = c + d, z.el.header.childNodes[1].childNodes[1].innerHTML = f, z.el.yearPicker.querySelector('[data-year="0"]').classList.add('current'), 11 < D - 1 + J - 1 && z.el.yearPicker.querySelector('[data-year="1"]').classList.add('current'), m(), N && N.call(z)
                }
            }

            function m() {
                if (B.forEach(function (a) {
                    var b = z.el.querySelector('[data-date="' + a.toJSON() + '"]');
                    b && (b.checked = !0)
                }), z.el.tables.classList.remove('before'), F && 1 < B.length) {
                    var a = new Date(C, D - 1, 1), b = B.sort(function (c, a) {
                        return c.getTime() - a.getTime()
                    }), c = z.el.querySelector('[data-date="' + b[0].toJSON() + '"]');
                    !c && a >= new Date(b[0].getFullYear(), b[0].getMonth(), 1) && a <= new Date(b[1].getFullYear(), b[1].getMonth(), 1) && z.el.tables.classList.add('before')
                }
            }

            function n() {
                [].slice.call(z.el.querySelectorAll('.d-table input')).forEach(function (a) {
                    a.checked = !1
                }), [].slice.call(z.el.monthPicker.querySelectorAll('.current')).forEach(function (a) {
                    a.classList.remove('current')
                }), [].slice.call(z.el.yearPicker.querySelectorAll('.current')).forEach(function (a) {
                    a.classList.remove('current')
                })
            }

            function o() {
                D += J, l()
            }

            function p() {
                D -= J, l()
            }

            function q(a, b) {
                a = new Date(a), a.setHours(0, 0, 0, 0);
                var c = z.el.querySelector('[data-date="' + a.toJSON() + '"]');
                F && c && c.checked && c.classList.add('single'), c && !c.checked && (c.checked = !0), B.push(a), T && !b && T.apply(a, [!0])
            }

            function r(a, b) {
                a = new Date(a), a.setHours(0, 0, 0, 0);
                var c = z.el.querySelector('[data-date="' + a.toJSON() + '"]');
                c && (c.classList.remove('single'), c.checked && (c.checked = !1)), B = B.filter(function (b) {
                    return b.getTime() != a.getTime()
                }), T && !b && T.call(a, !1)
            }

            function s() {
                var a = this, b = new Date(a.getAttribute('data-date'));
                if (a.classList.remove('single'), !ca) {
                    if (F && z.el.tables.classList.remove('before'), a.checked) {
                        if (G && B.length > G - 1) {
                            var c = B.length;
                            for (c; c > G - 1; c--) r(B[0])
                        }
                        if (F && B.length) {
                            var d = z.el.querySelector('[data-date="' + B[0].toJSON() + '"]');
                            !d && b > B[0] && z.el.tables.classList.add('before')
                        }
                        B.push(b), K && z.hide()
                    } else F && 1 == B.length && B[0].getTime() == b.getTime() ? (q(b), a.classList.add('single')) : B = B.filter(function (a) {
                        return a.getTime() != b.getTime()
                    });
                    T && T.call(b, a.checked)
                }
            }

            function t(a) {
                a ? (F = !0, z.el.tables.classList.add('range')) : (F = !1, z.el.tables.classList.remove('range'))
            }

            function u(a) {
                z.inline || z.container !== document.body || document.body.classList.add('d-noscroll'), x(a);
                z.el.calendar.addEventListener(e(), function a() {
                    z.el.classList.remove('d-show'), z.el.calendar.removeEventListener(e(), a)
                }), z.el.classList.add('d-show'), H.appendChild(z.el), I = !0, $ && (D = $.getMonth() + 1, C = $.getFullYear()), l()
            }

            function v() {
                document.body.classList.remove('d-noscroll');
                z.el.addEventListener(e(), function a() {
                    z.el.parentNode.removeChild(z.el), I = !1, z.el.classList.remove('d-hide'), 'function' == typeof O && O.apply(z), z.el.removeEventListener(e(), a)
                }), z.el.classList.add('d-hide')
            }

            function w() {
                z.el.header.childNodes[0].addEventListener(A, p), z.el.header.childNodes[2].addEventListener(A, o), z.el.header.childNodes[1].childNodes[0].addEventListener(A, function () {
                    z.el.monthPicker.classList.contains('d-show') ? z.el.monthPicker.classList.remove('d-show') : z.el.monthPicker.classList.add('d-show'), z.el.yearPicker.classList.remove('d-show')
                }), z.el.header.childNodes[1].childNodes[1].addEventListener(A, function () {
                    h(), z.el.yearPicker.classList.contains('d-show') ? z.el.yearPicker.classList.remove('d-show') : z.el.yearPicker.classList.add('d-show'), z.el.monthPicker.classList.remove('d-show')
                }), z.el.button.addEventListener(A, v), z.el.overlay.addEventListener(A, function () {
                    Q && z.hide()
                }), [].slice.call(z.el.monthPicker.childNodes).forEach(function (a) {
                    a.addEventListener(A, function () {
                        D = parseInt(this.getAttribute('data-month')), l(), z.el.monthPicker.classList.remove('d-show')
                    })
                }), [].slice.call(z.el.yearPicker.childNodes).forEach(function (a) {
                    a.addEventListener(A, function () {
                        C += parseInt(this.getAttribute('data-year')), l(), z.el.yearPicker.classList.remove('d-show')
                    })
                });
                var a = 0, b = 0;
                z.el.calendar.addEventListener('touchstart', function (b) {
                    a = b.changedTouches[0].clientX || b.originalEvent.changedTouches[0].clientX
                }), z.el.calendar.addEventListener('touchmove', function (c) {
                    b = c.changedTouches[0].clientX - a || c.originalEvent.changedTouches[0].clientX - a, c.preventDefault()
                }), z.el.calendar.addEventListener('touchend', function () {
                    50 < b ? p() : -50 > b && o(), b = 0
                })
            }

            function x(a) {
                for (var b in a) b in z && (z[b] = a[b])
            }

            function y(a) {
                a = new Date(a), D = a.getMonth() + 1, C = a.getFullYear(), l()
            }

            d.numInstances = (d.numInstances || 0) + 1;
            var z = this, A = 'click', B = [], C = new Date().getFullYear(), D = new Date().getMonth() + 1, E = {
                no: {
                    monthNames: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
                    dayNames: ['s\xF8', 'ma', 'ti', 'on', 'to', 'fr', 'l\xF8'],
                    weekStart: 1
                },
                se: {
                    monthNames: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
                    dayNames: ['s\xF6', 'm\xE5', 'ti', 'on', 'to', 'fr', 'l\xF6'],
                    weekStart: 1
                },
                ru: {
                    monthNames: ['\u042F\u043D\u0432\u0430\u0440\u044C', '\u0424\u0435\u0432\u0440\u0430\u043B\u044C', '\u041C\u0430\u0440\u0442', '\u0410\u043F\u0440\u0435\u043B\u044C', '\u041C\u0430\u0439', '\u0418\u044E\u043D\u044C', '\u0418\u044E\u043B\u044C', '\u0410\u0432\u0433\u0443\u0441\u0442', '\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C', '\u041E\u043A\u0442\u044F\u0431\u0440\u044C', '\u041D\u043E\u044F\u0431\u0440\u044C', '\u0414\u0435\u043A\u0430\u0431\u0440\u044C'],
                    dayNames: ['\u0432\u0441', '\u043F\u043D', '\u0432\u0442', '\u0441\u0440', '\u0447\u0442', '\u043F\u0442', '\u0441\u0431'],
                    weekStart: 1
                },
                en: {
                    monthNames: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
                    dayNames: ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'],
                    weekStart: 0
                },
                de: {
                    monthNames: ['Januar', 'Februar', 'M\xE4rz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
                    dayNames: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
                    weekStart: 1
                }
            };
            E.nb = E.no, E.nn = E.no;
            var F = !1, G = null, H = document.body, I = !1, J = 1, K = !1, L = null, M = null, N = null, O = null,
                P = null, Q = !0, R = !1, S = 'en', T = null, U = [], V = [], W = [], X = {}, Y = !0, Z = !0, $ = null,
                _ = null, aa = null, ba = null, ca = !1;
            return z.show = u, z.hide = v, z.selectDate = q, z.unselectAll = function (a) {
                B.forEach(function (b) {
                    r(b, a)
                })
            }, z.unselectDate = r, Object.defineProperties(z, {
                selectedDates: {
                    get: function () {
                        return B.sort(function (c, a) {
                            return c.getTime() - a.getTime()
                        })
                    }
                }, range: {
                    get: function () {
                        return F
                    }, set: function (a) {
                        t(a), a && (G = 2)
                    }
                }, button: {
                    get: function () {
                        return L
                    }, set: function (a) {
                        L = 'string' == typeof a ? a : null, z.el.button.innerHTML = L ? L : ''
                    }
                }, title: {
                    get: function () {
                        return M
                    }, set: function (a) {
                        M = 'string' == typeof a ? a : null, z.el.titleBox.innerText = M ? M : ''
                    }
                }, lang: {
                    get: function () {
                        return S
                    }, set: function (a) {
                        a in E ? (S = a, b(), l()) : console.error('Language not found')
                    }
                }, weekStart: {
                    get: function () {
                        return null == ba ? E[S].weekStart : ba
                    }, set: function (a) {
                        'number' == typeof a && -1 < a && 7 > a ? (ba = a, b(), l()) : console.error('weekStart must be a number between 0 and 6')
                    }
                }, months: {
                    get: function () {
                        return J
                    }, set: function (a) {
                        'number' == typeof a && 0 < a ? (J = a, b(), c(), l(), 1 == J ? z.el.classList.remove('multi') : z.el.classList.add('multi')) : console.error('months must be a number > 0')
                    }
                }, isOpen: {
                    get: function () {
                        return I
                    }
                }, closeOnSelect: {
                    get: function () {
                        return K
                    }, set: function (a) {
                        K = !!a
                    }
                }, disabledDays: {
                    get: function () {
                        return V
                    }, set: function (a) {
                        if (a instanceof Array) for (var b = 0; b < a.length; b++) 'number' == typeof a[b] && V.push(a[b]); else 'number' == typeof a ? V = [a] : a || (V = []);
                        l()
                    }
                }, disabledDates: {
                    get: function () {
                        return U.map(function (a) {
                            return new Date(a)
                        })
                    }, set: function (a) {
                        a instanceof Array ? a.forEach(function (a) {
                            a instanceof Date && U.push(new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime())
                        }) : a instanceof Date ? U = [new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime()] : !a && (U = []), l()
                    }
                }, highlight: {
                    get: function () {
                        return W
                    }, set: function (a) {
                        if (a instanceof Array) a.forEach(function (a) {
                            if (a instanceof Object) {
                                var b = {};
                                b.dates = [], 'start' in a ? b.dates.push({
                                    start: new Date(a.start.getFullYear(), a.start.getMonth(), a.start.getDate()),
                                    end: 'end' in a ? new Date(a.end.getFullYear(), a.end.getMonth(), a.end.getDate()) : new Date(a.start.getFullYear(), a.start.getMonth(), a.start.getDate())
                                }) : 'dates' in a && a.dates instanceof Array && a.dates.forEach(function (a) {
                                    b.dates.push({
                                        start: new Date(a.start.getFullYear(), a.start.getMonth(), a.start.getDate()),
                                        end: 'end' in a ? new Date(a.end.getFullYear(), a.end.getMonth(), a.end.getDate()) : new Date(a.start.getFullYear(), a.start.getMonth(), a.start.getDate())
                                    })
                                }), b.color = a.color, b.backgroundColor = a.backgroundColor, b.legend = 'legend' in a ? a.legend : null, W.push(b)
                            }
                        }); else if (a instanceof Object) {
                            var b = {};
                            b.dates = [], 'start' in a ? b.dates.push({
                                start: new Date(a.start.getFullYear(), a.start.getMonth(), a.start.getDate()),
                                end: 'end' in a ? new Date(a.end.getFullYear(), a.end.getMonth(), a.end.getDate()) : new Date(a.start.getFullYear(), a.start.getMonth(), a.start.getDate())
                            }) : 'dates' in a && a.dates instanceof Array && a.dates.forEach(function (a) {
                                b.dates.push({
                                    start: new Date(a.start.getFullYear(), a.start.getMonth(), a.start.getDate()),
                                    end: 'end' in a ? new Date(a.end.getFullYear(), a.end.getMonth(), a.end.getDate()) : new Date(a.start.getFullYear(), a.start.getMonth(), a.start.getDate())
                                })
                            }), b.color = a.color, b.backgroundColor = a.backgroundColor, b.legend = 'legend' in a ? a.legend : null, W.push(b)
                        } else a || (W = []);
                        l()
                    }
                }, onClose: {
                    set: function (a) {
                        O = a
                    }
                }, onSelect: {
                    set: function (a) {
                        T = a
                    }
                }, today: {
                    get: function () {
                        return Z
                    }, set: function (a) {
                        Z = !!a
                    }
                }, daynames: {
                    get: function () {
                        return Y
                    }, set: function (a) {
                        Y = !!a, b()
                    }
                }, fullscreen: {
                    get: function () {
                        return z.el.classList.contains('fullscreen')
                    }, set: function (a) {
                        a ? z.el.classList.add('fullscreen') : z.el.classList.remove('fullscreen')
                    }
                }, locked: {
                    get: function () {
                        return ca
                    }, set: function (a) {
                        a ? (ca = !0, z.el.tables.classList.add('locked')) : (ca = !1, z.el.tables.classList.remove('locked'))
                    }
                }, maxSelections: {
                    get: function () {
                        return G
                    }, set: function (a) {
                        G = 'number' != typeof a || F ? F ? 2 : null : a
                    }
                }, onConfirm: {
                    set: function (a) {
                        'function' == typeof a ? (P = a.bind(z), z.el.button.addEventListener(A, P)) : !a && (z.el.button.removeEventListener(A, P), P = null)
                    }
                }, onNavigation: {
                    set: function (a) {
                        'function' == typeof a ? N = a.bind(z) : !a && (N = null)
                    }
                }, closeOnClick: {
                    get: function () {
                        return Q
                    }, set: function (a) {
                        Q = !!a
                    }
                }, tooltips: {
                    get: function () {
                        var a = [];
                        for (key in X) a.push({date: new Date(parseInt(key)), text: X[key]});
                        return a
                    }, set: function (a) {
                        a instanceof Array ? a.forEach(function (a) {
                            a.date && a.text && a.date instanceof Date && (X[new Date(a.date.getFullYear(), a.date.getMonth(), a.date.getDate()).getTime()] = a.text)
                        }) : a instanceof Object ? a.date && a.text && a.date instanceof Date && (X[new Date(a.date.getFullYear(), a.date.getMonth(), a.date.getDate()).getTime()] = a.text) : !a && (X = []), l()
                    }
                }, currentDate: {
                    get: function () {
                        return new Date(C, D - 1, 1)
                    }, set: y
                }, setDate: {set: y}, startDate: {
                    get: function () {
                        return $
                    }, set: function (a) {
                        a ? $ = new Date(a) : ($ = null, C = new Date().getFullYear(), D = new Date().getMonth() + 1), l()
                    }
                }, minDate: {
                    get: function () {
                        return _
                    }, set: function (a) {
                        _ = a ? new Date(a) : null, l()
                    }
                }, maxDate: {
                    get: function () {
                        return aa
                    }, set: function (a) {
                        aa = a ? new Date(a) : null, l()
                    }
                }, container: {
                    get: function () {
                        return H
                    }, set: function (a) {
                        if (a instanceof String) {
                            var b = document.querySelector(a);
                            b ? (H = b, H == document.body ? z.el.classList.remove('wrapped') : z.el.classList.add('wrapped')) : console.error('Container doesn\'t exist')
                        } else a instanceof HTMLElement ? (H = a, H == document.body ? z.el.classList.remove('wrapped') : z.el.classList.add('wrapped')) : console.error('Invalid type')
                    }
                }, inline: {
                    get: function () {
                        return R
                    }, set: function (a) {
                        a ? (R = !0, z.el.classList.add('inline')) : (R = !1, z.el.classList.remove('inline'))
                    }
                }
            }), function () {
                z.el = document.createElement('div'), z.el.id = 'Datepickk', z.el.classList.add(g().type), z.el.innerHTML = f, z.el.calendar = z.el.childNodes[1], z.el.titleBox = z.el.childNodes[0], z.el.button = z.el.childNodes[3], z.el.header = z.el.calendar.childNodes[0], z.el.monthPicker = z.el.calendar.childNodes[1], z.el.yearPicker = z.el.calendar.childNodes[2], z.el.tables = z.el.calendar.childNodes[4], z.el.days = z.el.calendar.childNodes[3], z.el.overlay = z.el.childNodes[4], z.el.legend = z.el.childNodes[2], x(a), c(), b(), w(), R && u()
            }(), l(), Object.freeze(z)
        }/*!
  * Datepickk
  * Docs & License: https://crsten.github.com/datepickk
  * (c) 2017 Carsten Jacobsen
  */
        function e() {
            var a, b = document.createElement('fakeelement'), c = {
                animation: 'animationend',
                OAnimation: 'oanimationend',
                MozAnimation: 'animationend',
                WebkitAnimation: 'webkitAnimationEnd',
                "": 'MSAnimationEnd'
            };
            for (a in c) if (b.style[a] !== void 0) return c[a]
        }

        Object.defineProperty(b, '__esModule', {value: !0}), c(1);
        var f = '<div class="d-title"></div><div class="d-calendar"><div class="d-header"><i id="d-previous"></i><p><span class="d-month"></span><span class="d-year"></span></p><i id="d-next"></i></div><div class="d-month-picker"><div data-month="1">1</div><div data-month="2">2</div><div data-month="3">3</div><div data-month="4">4</div><div data-month="5">5</div><div data-month="6">6</div><div data-month="7">7</div><div data-month="8">8</div><div data-month="9">9</div><div data-month="10">10</div><div data-month="11">11</div><div data-month="12">12</div></div><div class="d-year-picker"><div data-year="-5"></div><div data-year="-4"></div><div data-year="-3"></div><div data-year="-2"></div><div data-year="-1"></div><div data-year="0"></div><div data-year="1"></div><div data-year="2"></div><div data-year="3"></div><div data-year="4"></div><div data-year="5"></div></div><div class="d-weekdays"></div><div class="d-tables"></div></div><div class="d-legend"></div><button class="d-confirm"></button><div class="d-overlay"></div>',
            g = function () {
                var a, b, c = {type: null, version: null}, d = navigator.userAgent,
                    e = d.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                return (b = d.match(/(iphone|ipad)\s+OS\s+([\d+_]+\d+)/i) || [], /trident/i.test(e[1])) ? (a = /\brv[ :]+(\d+)/g.exec(d) || [], c.type = 'MSIE', c.version = parseInt(a[1]), c) : 'Chrome' === e[1] && (a = d.match(/\bOPR\/(\d+)/), null != a) ? 'Opera ' + a[1] : b[1] ? c = {
                    type: 'iOS',
                    version: b[2]
                } : (e = e[2] ? [e[1], e[2]] : [navigator.appName, navigator.appVersion, '-?'], null != (a = d.match(/version\/(\d+)/i)) && e.splice(1, 1, a[1]), c.type = e[0], c.version = parseInt(e[1]), c)
            };
        b.default = d
    }, function () {
    }])['default']
});