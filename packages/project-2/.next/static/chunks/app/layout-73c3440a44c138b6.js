(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    3793: function (e, t, o) {
      Promise.resolve().then(o.bind(o, 8243));
    },
    8243: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return x;
          },
        });
      var r = o(7573);
      o(1619);
      var a = o(7659),
        l = o(7653),
        n = o(18),
        c = o(182),
        i = o(4047),
        s = (e) =>
          (0, i.Z)({
            palette: {
              mode: e.mode,
              primary: { main: e.colors.primary },
              secondary: { main: e.colors.secondary },
              background: {
                default: e.colors.backgroundDefault,
                paper: e.colors.backgroundPaper,
              },
              text: {
                primary: e.colors.textPrimary,
                secondary: e.colors.textSecondary,
              },
              accent1: e.colors.accent1,
              accent2: e.colors.accent2,
            },
            typography: {
              fontFamily: "'Roboto', 'Arial', sans-serif",
              fontSize: 16,
              h1: {
                fontSize: "3rem",
                fontWeight: 700,
                lineHeight: 1.2,
                color: e.colors.textPrimary,
              },
              h2: {
                fontSize: "2.25rem",
                fontWeight: 600,
                lineHeight: 1.3,
                color: e.colors.textPrimary,
              },
              h3: {
                fontSize: "1.75rem",
                fontWeight: 500,
                lineHeight: 1.4,
                color: e.colors.textPrimary,
              },
              body1: {
                fontSize: "1rem",
                lineHeight: 1.5,
                color: e.colors.textPrimary,
              },
              button: { textTransform: "none" },
            },
            spacing: (e) => "".concat(0.25 * e, "rem"),
            components: {
              MuiCssBaseline: {
                styleOverrides: {
                  body: {
                    margin: 0,
                    padding: 0,
                    backgroundColor: e.colors.backgroundDefault,
                    color: e.colors.textPrimary,
                  },
                },
              },
              MuiButton: {
                styleOverrides: {
                  root: {
                    borderRadius: 8,
                    padding: "8px 16px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    boxShadow:
                      "light" === e.mode
                        ? "0px 2px 4px rgba(0, 0, 0, 0.1)"
                        : "0px 2px 4px rgba(0, 0, 0, 0.5)",
                    "&:hover": {
                      backgroundColor:
                        "light" === e.mode ? "#f0f0f0" : "#3a3a3a",
                    },
                  },
                },
              },
            },
          });
      let d = (0, l.createContext)({
          mode: "light",
          toggleTheme: () => {},
          updateColors: () => {},
        }),
        g = (e) => {
          let { children: t } = e,
            o = (0, c.Z)("(prefers-color-scheme: dark)"),
            [a, i] = (0, l.useState)("light"),
            [g, m] = (0, l.useState)("#1976d2"),
            [f, u] = (0, l.useState)("#dc004e"),
            [h, x] = (0, l.useState)(""),
            [p, y] = (0, l.useState)(""),
            [S, b] = (0, l.useState)("");
          (0, l.useEffect)(() => {
            let e = localStorage.getItem("theme"),
              t = localStorage.getItem("primaryColor"),
              r = localStorage.getItem("secondaryColor"),
              a = localStorage.getItem("backgroundColor"),
              l = localStorage.getItem("accentColor1"),
              n = localStorage.getItem("accentColor2");
            e ? i(e) : i(o ? "dark" : "light"),
              t && m(t),
              r && u(r),
              a && b(a),
              l && x(l),
              n && y(n);
          }, [o]);
          let C = (0, l.useMemo)(
            () =>
              s({
                mode: a,
                colors: {
                  primary: g,
                  secondary: f,
                  backgroundDefault:
                    S || ("light" === a ? "#f5f5f5" : "#333A3F"),
                  backgroundPaper: "light" === a ? "#ffffff" : "#424242",
                  textPrimary: "light" === a ? "#000000" : "#ffffff",
                  textSecondary: "light" === a ? "#5f5f5f" : "#e0e0e0",
                  accent1: h,
                  accent2: p,
                },
              }),
            [a, g, f, S, h, p],
          );
          return (0, r.jsx)(d.Provider, {
            value: {
              mode: a,
              toggleTheme: () => {
                let e = "light" === a ? "dark" : "light";
                i(e), localStorage.setItem("theme", e);
              },
              updateColors: (e, t, o, r) => {
                m(e),
                  u(t),
                  x(o),
                  y(r),
                  b(e),
                  localStorage.setItem("primaryColor", e),
                  localStorage.setItem("secondaryColor", t),
                  localStorage.setItem("backgroundColor", e),
                  localStorage.setItem("accentColor1", o),
                  localStorage.setItem("accentColor2", r);
              },
            },
            children: (0, r.jsx)(n.Z, { theme: C, children: t }),
          });
        };
      var m = o(7834),
        f = o(3474),
        u = o(8179),
        h = o(7907);
      function x(e) {
        let { children: t } = e,
          [o, n] = (0, l.useState)(!1),
          c = (e) => () => {
            n(e);
          };
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("html", {
            lang: "en",
            children: (0, r.jsx)("body", {
              children: (0, r.jsxs)(g, {
                children: [
                  (0, r.jsx)(m.ZP, {}),
                  (0, r.jsxs)(h.YE, {
                    isDrawerOpen: o,
                    toggleDrawer: c,
                    drawerWidth: 250,
                    children: [
                      (0, r.jsx)(a.default, {
                        href: "/",
                        passHref: !0,
                        children: (0, r.jsx)(h.m3, {
                          label: "Home",
                          variant: "contained",
                          color: "primary",
                        }),
                      }),
                      (0, r.jsx)(a.default, {
                        href: "/about",
                        passHref: !0,
                        children: (0, r.jsx)(h.m3, {
                          label: "About",
                          variant: "outlined",
                          color: "secondary",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(h.hU, {
                    icon: (0, r.jsx)(u.Z, {}),
                    onClick: c(!0),
                    sx: {
                      position: "fixed",
                      top: "1rem",
                      left: "1rem",
                      zIndex: 1e3,
                    },
                  }),
                  (0, r.jsx)(f.Z, {
                    component: "main",
                    sx: {
                      transition: "margin-left 0.3s ease",
                      marginLeft: o ? "".concat(250, "px") : 0,
                    },
                    children: (0, r.jsx)(h.uT, {
                      isDrawerOpen: o,
                      drawerWidth: 250,
                      children: t,
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
    },
    1619: function () {},
  },
  function (e) {
    e.O(0, [612, 252, 707, 907, 293, 286, 744], function () {
      return e((e.s = 3793));
    }),
      (_N_E = e.O());
  },
]);
