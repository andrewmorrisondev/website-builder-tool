"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [707],
  {
    8179: function (e, t, r) {
      var n = r(2952),
        o = r(7573);
      t.Z = (0, n.Z)(
        (0, o.jsx)("path", { d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" }),
        "Menu",
      );
    },
    7834: function (e, t, r) {
      var n = r(7653),
        o = r(2343),
        l = r(3322),
        i = r(7573);
      let a = "function" == typeof (0, o.zY)({}),
        s = (e, t) => ({
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          boxSizing: "border-box",
          WebkitTextSizeAdjust: "100%",
          ...(t && !e.vars && { colorScheme: e.palette.mode }),
        }),
        u = (e) => ({
          color: (e.vars || e).palette.text.primary,
          ...e.typography.body1,
          backgroundColor: (e.vars || e).palette.background.default,
          "@media print": {
            backgroundColor: (e.vars || e).palette.common.white,
          },
        }),
        c = function (e) {
          var t, r;
          let n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            o = {};
          n &&
            e.colorSchemes &&
            "function" == typeof e.getColorSchemeSelector &&
            Object.entries(e.colorSchemes).forEach((t) => {
              var r, n;
              let [l, i] = t,
                a = e.getColorSchemeSelector(l);
              a.startsWith("@")
                ? (o[a] = {
                    ":root": {
                      colorScheme:
                        null === (r = i.palette) || void 0 === r
                          ? void 0
                          : r.mode,
                    },
                  })
                : (o[a.replace(/\s*&/, "")] = {
                    colorScheme:
                      null === (n = i.palette) || void 0 === n
                        ? void 0
                        : n.mode,
                  });
            });
          let l = {
              html: s(e, n),
              "*, *::before, *::after": { boxSizing: "inherit" },
              "strong, b": { fontWeight: e.typography.fontWeightBold },
              body: {
                margin: 0,
                ...u(e),
                "&::backdrop": {
                  backgroundColor: (e.vars || e).palette.background.default,
                },
              },
              ...o,
            },
            i =
              null === (r = e.components) || void 0 === r
                ? void 0
                : null === (t = r.MuiCssBaseline) || void 0 === t
                  ? void 0
                  : t.styleOverrides;
          return i && (l = [l, i]), l;
        },
        d = "mui-ecs",
        f = (e) => {
          let t = c(e, !1),
            r = Array.isArray(t) ? t[0] : t;
          return (
            !e.vars &&
              r &&
              (r.html[":root:has(".concat(d, ")")] = {
                colorScheme: e.palette.mode,
              }),
            e.colorSchemes &&
              Object.entries(e.colorSchemes).forEach((t) => {
                var n, o;
                let [l, i] = t,
                  a = e.getColorSchemeSelector(l);
                a.startsWith("@")
                  ? (r[a] = {
                      [":root:not(:has(.".concat(d, "))")]: {
                        colorScheme:
                          null === (n = i.palette) || void 0 === n
                            ? void 0
                            : n.mode,
                      },
                    })
                  : (r[a.replace(/\s*&/, "")] = {
                      ["&:not(:has(.".concat(d, "))")]: {
                        colorScheme:
                          null === (o = i.palette) || void 0 === o
                            ? void 0
                            : o.mode,
                      },
                    });
              }),
            t
          );
        },
        h = (0, o.zY)(
          a
            ? (e) => {
                let { theme: t, enableColorScheme: r } = e;
                return c(t, r);
              }
            : (e) => {
                let { theme: t } = e;
                return f(t);
              },
        );
      t.ZP = function (e) {
        let { children: t, enableColorScheme: r = !1 } = (0, l.i)({
          props: e,
          name: "MuiCssBaseline",
        });
        return (0, i.jsxs)(n.Fragment, {
          children: [
            a && (0, i.jsx)(h, { enableColorScheme: r }),
            !a &&
              !r &&
              (0, i.jsx)("span", { className: d, style: { display: "none" } }),
            t,
          ],
        });
      };
    },
    18: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return E;
        },
      });
      var n = r(7653);
      let o = n.createContext(null);
      function l() {
        return n.useContext(o);
      }
      var i =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("mui.nested")
            : "__THEME_NESTED__",
        a = r(7573),
        s = function (e) {
          let { children: t, theme: r } = e,
            s = l(),
            u = n.useMemo(() => {
              let e =
                null === s
                  ? { ...r }
                  : "function" == typeof r
                    ? r(s)
                    : { ...s, ...r };
              return null != e && (e[i] = null !== s), e;
            }, [r, s]);
          return (0, a.jsx)(o.Provider, { value: u, children: t });
        },
        u = r(7361),
        c = r(3230),
        d = r(3916),
        f = r(6335);
      let h = {};
      function m(e, t, r) {
        let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return n.useMemo(() => {
          let n = (e && t[e]) || t;
          if ("function" == typeof r) {
            let l = r(n),
              i = e ? { ...t, [e]: l } : l;
            return o ? () => i : i;
          }
          return e ? { ...t, [e]: r } : { ...t, ...r };
        }, [e, t, r, o]);
      }
      var p = function (e) {
          let { children: t, theme: r, themeId: n } = e,
            o = (0, c.Z)(h),
            i = l() || h,
            p = m(n, o, r),
            g = m(n, i, r, !0),
            y = "rtl" === p.direction;
          return (0, a.jsx)(s, {
            theme: g,
            children: (0, a.jsx)(u.T.Provider, {
              value: p,
              children: (0, a.jsx)(d.Z, {
                value: y,
                children: (0, a.jsx)(f.Z, {
                  value: null == p ? void 0 : p.components,
                  children: t,
                }),
              }),
            }),
          });
        },
        g = r(1679);
      function y(e) {
        let { theme: t, ...r } = e,
          n = g.Z in t ? t[g.Z] : void 0;
        return (0, a.jsx)(p, {
          ...r,
          themeId: n ? g.Z : void 0,
          theme: n || t,
        });
      }
      var b = r(7580),
        v = r(3411);
      let S = "mode",
        j = "color-scheme";
      function k(e) {
        if (
          "undefined" != typeof window &&
          "function" == typeof window.matchMedia &&
          "system" === e
        )
          return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
      }
      function _(e, t) {
        return "light" === e.mode ||
          ("system" === e.mode && "light" === e.systemMode)
          ? t("light")
          : "dark" === e.mode ||
              ("system" === e.mode && "dark" === e.systemMode)
            ? t("dark")
            : void 0;
      }
      function x(e, t) {
        let r;
        if ("undefined" != typeof window) {
          try {
            (r = localStorage.getItem(e) || void 0) ||
              localStorage.setItem(e, t);
          } catch (e) {}
          return r || t;
        }
      }
      var P = r(4047),
        C = r(2753);
      let {
        CssVarsProvider: w,
        useColorScheme: O,
        getInitColorSchemeScript: R,
      } = (function (e) {
        let {
            themeId: t,
            theme: r = {},
            modeStorageKey: o = S,
            colorSchemeStorageKey: i = j,
            disableTransitionOnChange: s = !1,
            defaultColorScheme: u,
            resolveTheme: c,
          } = e,
          d = {
            allColorSchemes: [],
            colorScheme: void 0,
            darkColorScheme: void 0,
            lightColorScheme: void 0,
            mode: void 0,
            setColorScheme: () => {},
            setMode: () => {},
            systemMode: void 0,
          },
          f = n.createContext(void 0),
          h = "string" == typeof u ? u : u.light,
          m = "string" == typeof u ? u : u.dark;
        return {
          CssVarsProvider: function (e) {
            let {
                children: d,
                theme: h,
                modeStorageKey: m = o,
                colorSchemeStorageKey: g = i,
                disableTransitionOnChange: y = s,
                storageWindow: b = "undefined" == typeof window
                  ? void 0
                  : window,
                documentNode: P = "undefined" == typeof document
                  ? void 0
                  : document,
                colorSchemeNode: C = "undefined" == typeof document
                  ? void 0
                  : document.documentElement,
                disableNestedContext: w = !1,
                disableStyleSheetGeneration: O = !1,
              } = e,
              R = n.useRef(!1),
              E = l(),
              M = n.useContext(f),
              I = !!M && !w,
              N = n.useMemo(() => h || ("function" == typeof r ? r() : r), [h]),
              T = N[t],
              {
                colorSchemes: A = {},
                components: L = {},
                cssVarPrefix: W,
                ...$
              } = T || N,
              U = Object.keys(A)
                .filter((e) => !!A[e])
                .join(","),
              z = n.useMemo(() => U.split(","), [U]),
              Z = "string" == typeof u ? u : u.light,
              K = "string" == typeof u ? u : u.dark,
              D =
                A[Z] && A[K]
                  ? "system"
                  : A[$.defaultColorScheme]?.palette?.mode || $.palette?.mode,
              {
                mode: F,
                setMode: V,
                systemMode: q,
                lightColorScheme: B,
                darkColorScheme: H,
                colorScheme: Y,
                setColorScheme: Q,
              } = (function (e) {
                let {
                    defaultMode: t = "light",
                    defaultLightColorScheme: r,
                    defaultDarkColorScheme: o,
                    supportedColorSchemes: l = [],
                    modeStorageKey: i = S,
                    colorSchemeStorageKey: a = j,
                    storageWindow: s = "undefined" == typeof window
                      ? void 0
                      : window,
                  } = e,
                  u = l.join(","),
                  c = l.length > 1,
                  [d, f] = n.useState(() => {
                    let e = x(i, t),
                      n = x("".concat(a, "-light"), r),
                      l = x("".concat(a, "-dark"), o);
                    return {
                      mode: e,
                      systemMode: k(e),
                      lightColorScheme: n,
                      darkColorScheme: l,
                    };
                  }),
                  [, h] = n.useState(!1),
                  m = n.useRef(!1);
                n.useEffect(() => {
                  c && h(!0), (m.current = !0);
                }, [c]);
                let p = _(d, (e) =>
                    "light" === e
                      ? d.lightColorScheme
                      : "dark" === e
                        ? d.darkColorScheme
                        : void 0,
                  ),
                  g = n.useCallback(
                    (e) => {
                      f((r) => {
                        if (e === r.mode) return r;
                        let n = null != e ? e : t;
                        try {
                          localStorage.setItem(i, n);
                        } catch (e) {}
                        return { ...r, mode: n, systemMode: k(n) };
                      });
                    },
                    [i, t],
                  ),
                  y = n.useCallback(
                    (e) => {
                      e
                        ? "string" == typeof e
                          ? e && !u.includes(e)
                            ? console.error(
                                "`".concat(
                                  e,
                                  "` does not exist in `theme.colorSchemes`.",
                                ),
                              )
                            : f((t) => {
                                let r = { ...t };
                                return (
                                  _(t, (t) => {
                                    try {
                                      localStorage.setItem(
                                        "".concat(a, "-").concat(t),
                                        e,
                                      );
                                    } catch (e) {}
                                    "light" === t && (r.lightColorScheme = e),
                                      "dark" === t && (r.darkColorScheme = e);
                                  }),
                                  r
                                );
                              })
                          : f((t) => {
                              let n = { ...t },
                                l = null === e.light ? r : e.light,
                                i = null === e.dark ? o : e.dark;
                              if (l) {
                                if (u.includes(l)) {
                                  n.lightColorScheme = l;
                                  try {
                                    localStorage.setItem(
                                      "".concat(a, "-light"),
                                      l,
                                    );
                                  } catch (e) {}
                                } else
                                  console.error(
                                    "`".concat(
                                      l,
                                      "` does not exist in `theme.colorSchemes`.",
                                    ),
                                  );
                              }
                              if (i) {
                                if (u.includes(i)) {
                                  n.darkColorScheme = i;
                                  try {
                                    localStorage.setItem(
                                      "".concat(a, "-dark"),
                                      i,
                                    );
                                  } catch (e) {}
                                } else
                                  console.error(
                                    "`".concat(
                                      i,
                                      "` does not exist in `theme.colorSchemes`.",
                                    ),
                                  );
                              }
                              return n;
                            })
                        : f((e) => {
                            try {
                              localStorage.setItem("".concat(a, "-light"), r),
                                localStorage.setItem("".concat(a, "-dark"), o);
                            } catch (e) {}
                            return {
                              ...e,
                              lightColorScheme: r,
                              darkColorScheme: o,
                            };
                          });
                    },
                    [u, a, r, o],
                  ),
                  b = n.useCallback(
                    (e) => {
                      "system" === d.mode &&
                        f((t) => {
                          let r = (null == e ? void 0 : e.matches)
                            ? "dark"
                            : "light";
                          return t.systemMode === r
                            ? t
                            : { ...t, systemMode: r };
                        });
                    },
                    [d.mode],
                  ),
                  v = n.useRef(b);
                return (
                  (v.current = b),
                  n.useEffect(() => {
                    if ("function" != typeof window.matchMedia || !c) return;
                    let e = function () {
                        for (
                          var e = arguments.length, t = Array(e), r = 0;
                          r < e;
                          r++
                        )
                          t[r] = arguments[r];
                        return v.current(...t);
                      },
                      t = window.matchMedia("(prefers-color-scheme: dark)");
                    return (
                      t.addListener(e),
                      e(t),
                      () => {
                        t.removeListener(e);
                      }
                    );
                  }, [c]),
                  n.useEffect(() => {
                    if (s && c) {
                      let e = (e) => {
                        let r = e.newValue;
                        "string" == typeof e.key &&
                          e.key.startsWith(a) &&
                          (!r || u.match(r)) &&
                          (e.key.endsWith("light") && y({ light: r }),
                          e.key.endsWith("dark") && y({ dark: r })),
                          e.key === i &&
                            (!r || ["light", "dark", "system"].includes(r)) &&
                            g(r || t);
                      };
                      return (
                        s.addEventListener("storage", e),
                        () => {
                          s.removeEventListener("storage", e);
                        }
                      );
                    }
                  }, [y, g, i, a, u, t, s, c]),
                  {
                    ...d,
                    mode: m.current || !c ? d.mode : void 0,
                    systemMode: m.current || !c ? d.systemMode : void 0,
                    colorScheme: m.current || !c ? p : void 0,
                    setMode: g,
                    setColorScheme: y,
                  }
                );
              })({
                supportedColorSchemes: z,
                defaultLightColorScheme: Z,
                defaultDarkColorScheme: K,
                modeStorageKey: m,
                colorSchemeStorageKey: g,
                defaultMode: D,
                storageWindow: b,
              }),
              G = F,
              J = Y;
            I && ((G = M.mode), (J = M.colorScheme));
            let X = J || $.defaultColorScheme,
              ee = $.generateThemeVars?.() || $.vars,
              et = {
                ...$,
                components: L,
                colorSchemes: A,
                cssVarPrefix: W,
                vars: ee,
              };
            if (
              ("function" == typeof et.generateSpacing &&
                (et.spacing = et.generateSpacing()),
              X)
            ) {
              let e = A[X];
              e &&
                "object" == typeof e &&
                Object.keys(e).forEach((t) => {
                  e[t] && "object" == typeof e[t]
                    ? (et[t] = { ...et[t], ...e[t] })
                    : (et[t] = e[t]);
                });
            }
            let er = $.colorSchemeSelector;
            n.useEffect(() => {
              if (J && C && er && "media" !== er) {
                let e = er;
                if (
                  ("class" === er && (e = ".%s"),
                  "data" === er && (e = "[data-%s]"),
                  er?.startsWith("data-") &&
                    !er.includes("%s") &&
                    (e = `[${er}="%s"]`),
                  e.startsWith("."))
                )
                  C.classList.remove(
                    ...z.map((t) => e.substring(1).replace("%s", t)),
                  ),
                    C.classList.add(e.substring(1).replace("%s", J));
                else {
                  let t = e.replace("%s", J).match(/\[([^\]]+)\]/);
                  if (t) {
                    let [e, r] = t[1].split("=");
                    r ||
                      z.forEach((t) => {
                        C.removeAttribute(e.replace(J, t));
                      }),
                      C.setAttribute(e, r ? r.replace(/"|'/g, "") : "");
                  } else C.setAttribute(e, J);
                }
              }
            }, [J, er, C, z]),
              n.useEffect(() => {
                let e;
                if (y && R.current && P) {
                  let t = P.createElement("style");
                  t.appendChild(
                    P.createTextNode(
                      "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
                    ),
                  ),
                    P.head.appendChild(t),
                    window.getComputedStyle(P.body),
                    (e = setTimeout(() => {
                      P.head.removeChild(t);
                    }, 1));
                }
                return () => {
                  clearTimeout(e);
                };
              }, [J, y, P]),
              n.useEffect(
                () => (
                  (R.current = !0),
                  () => {
                    R.current = !1;
                  }
                ),
                [],
              );
            let en = n.useMemo(
                () => ({
                  allColorSchemes: z,
                  colorScheme: J,
                  darkColorScheme: H,
                  lightColorScheme: B,
                  mode: G,
                  setColorScheme: Q,
                  setMode: V,
                  systemMode: q,
                }),
                [z, J, H, B, G, Q, V, q],
              ),
              eo = !0;
            (O || !1 === $.cssVariables || (I && E?.cssVarPrefix === W)) &&
              (eo = !1);
            let el = (0, a.jsxs)(n.Fragment, {
              children: [
                eo &&
                  (0, a.jsx)(n.Fragment, {
                    children: (et.generateStyleSheets?.() || []).map((e, t) =>
                      (0, a.jsx)(v.Z, { styles: e }, t),
                    ),
                  }),
                (0, a.jsx)(p, {
                  themeId: T ? t : void 0,
                  theme: c ? c(et) : et,
                  children: d,
                }),
              ],
            });
            return I ? el : (0, a.jsx)(f.Provider, { value: en, children: el });
          },
          useColorScheme: () => n.useContext(f) || d,
          getInitColorSchemeScript: (e) =>
            (function (e) {
              let {
                  defaultLightColorScheme: t = "light",
                  defaultDarkColorScheme: r = "dark",
                  modeStorageKey: n = S,
                  colorSchemeStorageKey: o = j,
                  attribute: l = "data-color-scheme",
                  colorSchemeNode: i = "document.documentElement",
                  nonce: s,
                } = e || {},
                u = "",
                c = l;
              if (
                ("class" === l && (c = ".%s"),
                "data" === l && (c = "[data-%s]"),
                c.startsWith("."))
              ) {
                let e = c.substring(1);
                u += `${i}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${i}.classList.add('${e}'.replace('%s', colorScheme));`;
              }
              let d = c.match(/\[([^\]]+)\]/);
              if (d) {
                let [e, t] = d[1].split("=");
                t ||
                  (u += `${i}.removeAttribute('${e}'.replace('%s', light));
      ${i}.removeAttribute('${e}'.replace('%s', dark));`),
                  (u += `
      ${i}.setAttribute('${e}'.replace('%s', colorScheme), ${t ? `${t}.replace('%s', colorScheme)` : '""'});`);
              } else u += `${i}.setAttribute('${c}', colorScheme);`;
              return (0, a.jsx)(
                "script",
                {
                  suppressHydrationWarning: !0,
                  nonce: "undefined" == typeof window ? s : "",
                  dangerouslySetInnerHTML: {
                    __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${n}') || 'system';
  const dark = localStorage.getItem('${o}-dark') || '${r}';
  const light = localStorage.getItem('${o}-light') || '${t}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();`,
                  },
                },
                "mui-color-scheme-init",
              );
            })({
              colorSchemeStorageKey: i,
              defaultLightColorScheme: h,
              defaultDarkColorScheme: m,
              modeStorageKey: o,
              ...e,
            }),
        };
      })({
        themeId: g.Z,
        theme: () => (0, P.Z)({ cssVariables: !0 }),
        colorSchemeStorageKey: "mui-color-scheme",
        modeStorageKey: "mui-mode",
        defaultColorScheme: { light: "light", dark: "dark" },
        resolveTheme: (e) => {
          let t = { ...e, typography: (0, C.Z)(e.palette, e.typography) };
          return (
            (t.unstable_sx = function (e) {
              return (0, b.Z)({ sx: e, theme: this });
            }),
            t
          );
        },
      });
      function E(e) {
        let { theme: t, ...r } = e;
        return "function" != typeof t &&
          "colorSchemes" in (g.Z in t ? t[g.Z] : t)
          ? (0, a.jsx)(w, { theme: t, ...r })
          : (0, a.jsx)(y, { theme: t, ...r });
      }
    },
    7659: function (e, t, r) {
      r.d(t, {
        default: function () {
          return o.a;
        },
      });
      var n = r(5469),
        o = r.n(n);
    },
    9912: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(2679);
      let n = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2774: function (e, t, r) {
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(2679),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5469: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return S;
          },
        });
      let n = r(4732),
        o = r(7573),
        l = n._(r(7653)),
        i = r(5913),
        a = r(5499),
        s = r(3570),
        u = r(6e3),
        c = r(9912),
        d = r(1917),
        f = r(5026),
        h = r(3868),
        m = r(2774),
        p = r(5923),
        g = r(5398),
        y = new Set();
      function b(e, t, r, n, o, l) {
        if ("undefined" != typeof window && (l || (0, a.isLocalURL)(t))) {
          if (!n.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                  ? e.locale
                  : void 0);
            if (y.has(o)) return;
            y.add(o);
          }
          (async () => (l ? e.prefetch(t, o) : e.prefetch(t, r, n)))().catch(
            (e) => {},
          );
        }
      }
      function v(e) {
        return "string" == typeof e ? e : (0, s.formatUrl)(e);
      }
      let S = l.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: s,
          as: y,
          children: S,
          prefetch: j = null,
          passHref: k,
          replace: _,
          shallow: x,
          scroll: P,
          locale: C,
          onClick: w,
          onMouseEnter: O,
          onTouchStart: R,
          legacyBehavior: E = !1,
          ...M
        } = e;
        (r = S),
          E &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, o.jsx)("a", { children: r }));
        let I = l.default.useContext(d.RouterContext),
          N = l.default.useContext(f.AppRouterContext),
          T = null != I ? I : N,
          A = !I,
          L = !1 !== j,
          W = null === j ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: $, as: U } = l.default.useMemo(() => {
            if (!I) {
              let e = v(s);
              return { href: e, as: y ? v(y) : e };
            }
            let [e, t] = (0, i.resolveHref)(I, s, !0);
            return { href: e, as: y ? (0, i.resolveHref)(I, y) : t || e };
          }, [I, s, y]),
          z = l.default.useRef($),
          Z = l.default.useRef(U);
        E && (n = l.default.Children.only(r));
        let K = E ? n && "object" == typeof n && n.ref : t,
          [D, F, V] = (0, h.useIntersection)({ rootMargin: "200px" }),
          q = l.default.useCallback(
            (e) => {
              (Z.current !== U || z.current !== $) &&
                (V(), (Z.current = U), (z.current = $)),
                D(e),
                K &&
                  ("function" == typeof K
                    ? K(e)
                    : "object" == typeof K && (K.current = e));
            },
            [U, K, $, V, D],
          );
        l.default.useEffect(() => {
          T && F && L && b(T, $, U, { locale: C }, { kind: W }, A);
        }, [U, $, F, C, L, null == I ? void 0 : I.locale, T, A, W]);
        let B = {
          ref: q,
          onClick(e) {
            E || "function" != typeof w || w(e),
              E &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              T &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, i, s, u, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, a.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == s || s;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: i,
                          locale: u,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](n || r, { scroll: e });
                  };
                  c ? l.default.startTransition(f) : f();
                })(e, T, $, U, _, x, P, C, A);
          },
          onMouseEnter(e) {
            E || "function" != typeof O || O(e),
              E &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              T &&
                (L || !A) &&
                b(
                  T,
                  $,
                  U,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: W },
                  A,
                );
          },
          onTouchStart: function (e) {
            E || "function" != typeof R || R(e),
              E &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              T &&
                (L || !A) &&
                b(
                  T,
                  $,
                  U,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: W },
                  A,
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(U)) B.href = U;
        else if (!E || k || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== C ? C : null == I ? void 0 : I.locale,
            t =
              (null == I ? void 0 : I.isLocaleDomain) &&
              (0, m.getDomainLocale)(
                U,
                e,
                null == I ? void 0 : I.locales,
                null == I ? void 0 : I.domainLocales,
              );
          B.href =
            t ||
            (0, p.addBasePath)(
              (0, c.addLocale)(U, e, null == I ? void 0 : I.defaultLocale),
            );
        }
        return E
          ? l.default.cloneElement(n, B)
          : (0, o.jsx)("a", { ...M, ...B, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6790: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5913: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let n = r(6537),
        o = r(3570),
        l = r(9084),
        i = r(6e3),
        a = r(2679),
        s = r(5499),
        u = r(7145),
        c = r(3929);
      function d(e, t, r) {
        let d;
        let f = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
          h = f.match(/^[a-zA-Z]{1,}:\/\//),
          m = h ? f.slice(h[0].length) : f;
        if ((m.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.",
          );
          let t = (0, i.normalizeRepeatedSlashes)(m);
          f = (h ? h[0] : "") + t;
        }
        if (!(0, s.isLocalURL)(f)) return r ? [f] : f;
        try {
          d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(e.searchParams),
              { result: i, params: a } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                r,
              );
            i &&
              (t = (0, o.formatWithValidation)({
                pathname: i,
                hash: e.hash,
                query: (0, l.omit)(r, a),
              }));
          }
          let i =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return r ? [i, t || i] : i;
        } catch (e) {
          return r ? [f] : f;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3868: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(7653),
        o = r(6790),
        l = "function" == typeof IntersectionObserver,
        i = new Map(),
        a = [];
      function s(e) {
        let { rootRef: t, rootMargin: r, disabled: s } = e,
          u = s || !l,
          [c, d] = (0, n.useState)(!1),
          f = (0, n.useRef)(null),
          h = (0, n.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (l) {
              if (u || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: l,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = a.find(
                        (e) => e.root === r.root && e.margin === r.margin,
                      );
                    if (n && (t = i.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      a.push(r),
                      i.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    l.set(e, t),
                    o.observe(e),
                    function () {
                      if ((l.delete(e), o.unobserve(e), 0 === l.size)) {
                        o.disconnect(), i.delete(n);
                        let e = a.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin,
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [u, r, t, c, f.current]),
          [
            h,
            c,
            (0, n.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8161: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return r.test(e) ? e.replace(n, "\\$&") : e;
      }
    },
    1917: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(4732)._(r(7653)).default.createContext(null);
    },
    3570: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return l;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return i;
          },
        });
      let n = r(5622)._(r(6537)),
        o = /https?|ftp|gopher|file/;
      function l(e) {
        let { auth: t, hostname: r } = e,
          l = e.protocol || "",
          i = e.pathname || "",
          a = e.hash || "",
          s = e.query || "",
          u = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (u = t + e.host)
            : r &&
              ((u = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (u += ":" + e.port)),
          s &&
            "object" == typeof s &&
            (s = String(n.urlQueryToSearchParams(s)));
        let c = e.search || (s && "?" + s) || "";
        return (
          l && !l.endsWith(":") && (l += ":"),
          e.slashes || ((!l || o.test(l)) && !1 !== u)
            ? ((u = "//" + (u || "")), i && "/" !== i[0] && (i = "/" + i))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            l +
            u +
            (i = i.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            a
        );
      }
      let i = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(e) {
        return l(e);
      }
    },
    7145: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let n = r(3963),
        o = r(3992);
    },
    3929: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(1889),
        o = r(1019);
      function l(e, t, r) {
        let l = "",
          i = (0, o.getRouteRegex)(e),
          a = i.groups,
          s = (t !== e ? (0, n.getRouteMatcher)(i)(t) : "") || r;
        l = e;
        let u = Object.keys(a);
        return (
          u.every((e) => {
            let t = s[e] || "",
              { repeat: r, optional: n } = a[e],
              o = "[" + (r ? "..." : "") + e + "]";
            return (
              n && (o = (t ? "" : "/") + "[" + o + "]"),
              r && !Array.isArray(t) && (t = [t]),
              (n || e in s) &&
                (l =
                  l.replace(
                    o,
                    r
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t),
                  ) || "/")
            );
          }) || (l = ""),
          { params: u, result: l }
        );
      }
    },
    3992: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(3468),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function l(e) {
        return (
          (0, n.isInterceptionRouteAppPath)(e) &&
            (e = (0, n.extractInterceptionRouteInformation)(
              e,
            ).interceptedRoute),
          o.test(e)
        );
      }
    },
    5499: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(6e3),
        o = r(3655);
      function l(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, o.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    9084: function (e, t) {
      function r(e, t) {
        let r = {};
        return (
          Object.keys(e).forEach((n) => {
            t.includes(n) || (r[n] = e[n]);
          }),
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    6537: function (e, t) {
      function r(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r]
              ? (t[r] = e)
              : Array.isArray(t[r])
                ? t[r].push(e)
                : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function n(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(r, n(e)))
              : t.set(r, n(o));
          }),
          t
        );
      }
      function l(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, r) => e.append(r, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          assign: function () {
            return l;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    1889: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(6e3);
      function o(e) {
        let { re: t, groups: r } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let l = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            i = {};
          return (
            Object.keys(r).forEach((e) => {
              let t = r[e],
                n = o[t.pos];
              void 0 !== n &&
                (i[e] = ~n.indexOf("/")
                  ? n.split("/").map((e) => l(e))
                  : t.repeat
                    ? [l(n)]
                    : l(n));
            }),
            i
          );
        };
      }
    },
    1019: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return f;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return s;
          },
        });
      let n = r(3468),
        o = r(8161),
        l = r(74);
      function i(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let r = e.startsWith("...");
        return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
      }
      function a(e) {
        let t = (0, l.removeTrailingSlash)(e).slice(1).split("/"),
          r = {},
          a = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = n.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                l = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && l) {
                let { key: e, optional: n, repeat: s } = i(l[1]);
                return (
                  (r[e] = { pos: a++, repeat: s, optional: n }),
                  "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!l) return "/" + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: n } = i(l[1]);
                return (
                  (r[e] = { pos: a++, repeat: t, optional: n }),
                  t ? (n ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: r,
        };
      }
      function s(e) {
        let { parameterizedRoute: t, groups: r } = a(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: r };
      }
      function u(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: r,
            segment: n,
            routeKeys: l,
            keyPrefix: a,
          } = e,
          { key: s, optional: u, repeat: c } = i(n),
          d = s.replace(/\W/g, "");
        a && (d = "" + a + d);
        let f = !1;
        (0 === d.length || d.length > 30) && (f = !0),
          isNaN(parseInt(d.slice(0, 1))) || (f = !0),
          f && (d = r()),
          a ? (l[d] = "" + a + s) : (l[d] = s);
        let h = t ? (0, o.escapeStringRegexp)(t) : "";
        return c
          ? u
            ? "(?:/" + h + "(?<" + d + ">.+?))?"
            : "/" + h + "(?<" + d + ">.+?)"
          : "/" + h + "(?<" + d + ">[^/]+?)";
      }
      function c(e, t) {
        let r;
        let i = (0, l.removeTrailingSlash)(e).slice(1).split("/"),
          a =
            ((r = 0),
            () => {
              let e = "",
                t = ++r;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          s = {};
        return {
          namedParameterizedRoute: i
            .map((e) => {
              let r = n.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                l = e.match(/\[((?:\[.*\])|.+)\]/);
              if (r && l) {
                let [r] = e.split(l[0]);
                return u({
                  getSafeRouteKey: a,
                  interceptionMarker: r,
                  segment: l[1],
                  routeKeys: s,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return l
                ? u({
                    getSafeRouteKey: a,
                    segment: l[1],
                    routeKeys: s,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: s,
        };
      }
      function d(e, t) {
        let r = c(e, t);
        return {
          ...s(e),
          namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
          routeKeys: r.routeKeys,
        };
      }
      function f(e, t) {
        let { parameterizedRoute: r } = a(e),
          { catchAll: n = !0 } = t;
        if ("/" === r) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: o } = c(e, !1);
        return { namedRegex: "^" + o + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    3963: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class r {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let r = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              r.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/"),
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").',
              );
            r.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              r.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/"),
              ),
            null !== this.optionalRestSlugName &&
              r.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/"),
              ),
            r
          );
        }
        _insert(e, t, n) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let o = e[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let r = o.slice(1, -1),
              i = !1;
            if (
              (r.startsWith("[") &&
                r.endsWith("]") &&
                ((r = r.slice(1, -1)), (i = !0)),
              r.startsWith("...") && ((r = r.substring(3)), (n = !0)),
              r.startsWith("[") || r.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  r +
                  "').",
              );
            if (r.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  r +
                  "').",
              );
            function l(e, r) {
              if (null !== e && e !== r)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    r +
                    "').",
                );
              t.forEach((e) => {
                if (e === r)
                  throw Error(
                    'You cannot have the same slug name "' +
                      r +
                      '" repeat within a single dynamic path',
                  );
                if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      r +
                      '" differ only by non-word symbols within a single dynamic path',
                  );
              }),
                t.push(r);
            }
            if (n) {
              if (i) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).',
                  );
                l(this.optionalRestSlugName, r),
                  (this.optionalRestSlugName = r),
                  (o = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").',
                  );
                l(this.restSlugName, r), (this.restSlugName = r), (o = "[...]");
              }
            } else {
              if (i)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").',
                );
              l(this.slugName, r), (this.slugName = r), (o = "[]");
            }
          }
          this.children.has(o) || this.children.set(o, new r()),
            this.children.get(o)._insert(e.slice(1), t, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function n(e) {
        let t = new r();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    6e3: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DecodeError: function () {
            return m;
          },
          MiddlewareNotFoundError: function () {
            return b;
          },
          MissingStaticPage: function () {
            return y;
          },
          NormalizeError: function () {
            return p;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return h;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return s;
          },
          getLocationOrigin: function () {
            return i;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return l;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return v;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), l = 0; l < n; l++)
            o[l] = arguments[l];
          return r || ((r = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        l = (e) => o.test(e);
      function i() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function a() {
        let { href: e } = window.location,
          t = i();
        return e.substring(t.length);
      }
      function s(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function u(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && u(r)) return n;
        if (!n)
          throw Error(
            '"' +
              s(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.',
          );
        return n;
      }
      let f = "undefined" != typeof performance,
        h =
          f &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e],
          );
      class m extends Error {}
      class p extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class y extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class b extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function v(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
  },
]);
