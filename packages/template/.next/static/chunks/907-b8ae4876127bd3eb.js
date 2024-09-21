"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [907],
  {
    7907: function (e, t, n) {
      n.d(t, {
        uT: function () {
          return F;
        },
        m3: function () {
          return s;
        },
        lr: function () {
          return Y;
        },
        Z3: function () {
          return er;
        },
        t: function () {
          return k;
        },
        Wi: function () {
          return S;
        },
        yo: function () {
          return B;
        },
        ds: function () {
          return en;
        },
        hU: function () {
          return d;
        },
        hJ: function () {
          return M;
        },
        rJ: function () {
          return g;
        },
        ey: function () {
          return L;
        },
        NR: function () {
          return Q;
        },
        u_: function () {
          return O;
        },
        oz: function () {
          return C;
        },
        bv: function () {
          return X;
        },
        Sj: function () {
          return W;
        },
        MS: function () {
          return et;
        },
        $0: function () {
          return E;
        },
        YE: function () {
          return y;
        },
        vj: function () {
          return q;
        },
      });
      var r = n(7573),
        i = n(7653),
        o = n(7213),
        a = n(3769),
        l = n(7817),
        s = (e) => {
          let {
              variant: t = "contained",
              color: n = "primary",
              size: i = "medium",
              label: s = "Click Me",
              fullWidth: c = !1,
              onClick: d,
              tooltip: u,
              ...h
            } = e,
            p = (0, l.Z)(),
            x = () => {
              if ("inherit" === n) return "inherit";
              let e = p.palette[n];
              return "accent1" === n || "accent2" === n
                ? p.palette[n]
                : e && e.main
                  ? e.main
                  : p.palette.primary.main;
            },
            m = (0, r.jsx)(o.Z, {
              variant: t,
              size: i,
              fullWidth: c,
              onClick: d,
              sx: {
                borderRadius: p.spacing(2),
                padding: p.spacing(2, 4),
                textTransform: "none",
                fontSize: p.typography.button.fontSize,
                fontWeight: p.typography.button.fontWeight,
                color: "contained" === t ? p.palette.common.white : x(),
                backgroundColor: "contained" === t ? x() : "transparent",
                boxShadow: "contained" === t ? p.shadows[1] : "none",
                "&:hover": {
                  backgroundColor:
                    "contained" === t
                      ? p.palette.action.hover
                      : p.palette.action.selected,
                },
              },
              ...h,
              children: s,
            });
          return u ? (0, r.jsx)(a.Z, { title: u, children: m }) : m;
        },
        c = n(417),
        d = (e) => {
          let {
              icon: t,
              color: n = "primary",
              size: i = "medium",
              tooltip: o,
              variant: s = "contained",
              shape: d = "round",
              onClick: u,
              sx: h = {},
              ...p
            } = e,
            x = (0, l.Z)(),
            m = () => {
              if ("inherit" === n) return "inherit";
              let e = x.palette[n];
              return "accent1" === n || "accent2" === n
                ? x.palette[n]
                : e && e.main
                  ? e.main
                  : x.palette.primary.main;
            },
            g = {
              borderRadius: "round" === d ? "50%" : x.spacing(1),
              color: "contained" === s ? x.palette.common.white : m(),
              backgroundColor: "contained" === s ? m() : "transparent",
              boxShadow: "contained" === s ? x.shadows[2] : "none",
              border: "outlined" === s ? "1px solid ".concat(m()) : "none",
              padding: x.spacing(1),
              "&:hover": {
                backgroundColor:
                  "contained" === s
                    ? x.palette.action.hover
                    : x.palette.action.selected,
              },
              ...h,
            },
            f = (0, r.jsx)(c.Z, {
              size: i,
              onClick: u,
              sx: g,
              ...p,
              children: t,
            });
          return o ? (0, r.jsx)(a.Z, { title: o, children: f }) : f;
        },
        u = n(1489),
        h = n(3474),
        p = n(9799),
        x = n(9984),
        m = n(806),
        g = (e) => {
          let {
              title: t = "Default Title",
              subtitle: n,
              description: i,
              actions: o,
              variant: a = "elevation",
              image: s,
              imageAlt: c = "Card image",
              imageHeight: d = 200,
              fullWidth: g = !1,
              sx: f = [],
              ...j
            } = e,
            Z = (0, l.Z)(),
            b = {
              maxWidth: g ? "100%" : 345,
              boxShadow: "elevation" === a ? Z.shadows[1] : "none",
              border:
                "outlined" === a
                  ? "1px solid ".concat(Z.palette.divider)
                  : "none",
              borderRadius: Z.spacing(2),
              overflow: "hidden",
              ...f,
            };
          return (0, r.jsxs)(u.Z, {
            sx: b,
            ...j,
            children: [
              s &&
                (0, r.jsx)(h.Z, {
                  component: "img",
                  src: s,
                  alt: c,
                  sx: {
                    width: "100%",
                    height: d,
                    objectFit: "cover",
                    display: s ? "block" : "none",
                  },
                }),
              (0, r.jsxs)(p.Z, {
                children: [
                  t &&
                    (0, r.jsx)(x.Z, {
                      variant: "h5",
                      component: "div",
                      gutterBottom: !0,
                      children: t,
                    }),
                  n &&
                    (0, r.jsx)(x.Z, {
                      variant: "subtitle1",
                      color: "textSecondary",
                      gutterBottom: !0,
                      children: n,
                    }),
                  i &&
                    (0, r.jsx)(x.Z, {
                      variant: "body2",
                      color: "textSecondary",
                      children: i,
                    }),
                ],
              }),
              o && (0, r.jsx)(m.Z, { children: o }),
            ],
          });
        },
        f = n(1887),
        j = n(3678);
      (0, f.ZP)(j.Z)((e) => {
        let { theme: t } = e;
        return {
          position: "fixed",
          bottom: t.spacing(2),
          right: t.spacing(2),
          backgroundColor: t.palette.primary.main,
          "&:hover": { backgroundColor: t.palette.secondary.main },
        };
      });
      var Z = n(2527);
      (0, f.ZP)(Z.Z)((e) => {
        let { theme: t } = e;
        return { position: "fixed", bottom: t.spacing(8), right: t.spacing(8) };
      });
      var b = n(7906),
        v = n(5861),
        y = (e) => {
          let {
              isDrawerOpen: t = !1,
              toggleDrawer: n,
              drawerWidth: o = 240,
              children: a,
            } = e,
            [l, s] = (0, i.useState)(t);
          (0, i.useEffect)(() => {
            s(t);
          }, [t]);
          let c =
            n ||
            ((e) => () => {
              s(e);
            });
          return (0, r.jsx)(b.ZP, {
            anchor: "left",
            open: l,
            onClose: c(!1),
            variant: "persistent",
            sx: {
              width: o,
              flexShrink: 0,
              "& .MuiDrawer-paper": { width: o, boxSizing: "border-box" },
            },
            children: (0, r.jsxs)(h.Z, {
              sx: { width: o, padding: "1rem" },
              children: [
                (0, r.jsxs)(h.Z, {
                  sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                  children: [
                    (0, r.jsx)("h3", {
                      children: "Nothing to See here \uD83D\uDC40",
                    }),
                    (0, r.jsx)(d, {
                      icon: (0, r.jsx)(v.Z, {}),
                      onClick: c(!1),
                    }),
                  ],
                }),
                a,
              ],
            }),
          });
        },
        w = n(8471),
        k = (e) => {
          let { onSubmit: t, initialValues: n, width: a = "100%" } = e,
            [l, s] = i.useState(n || { name: "", email: "", message: "" }),
            c = (e) => (t) => {
              s({ ...l, [e]: t.target.value });
            };
          return (0, r.jsxs)(h.Z, {
            component: "form",
            onSubmit: (e) => {
              e.preventDefault(), t(l), s({ name: "", email: "", message: "" });
            },
            sx: { width: a },
            children: [
              (0, r.jsx)(x.Z, { variant: "h6", children: "Contact Us" }),
              (0, r.jsx)(w.Z, {
                label: "Name",
                placeholder: l.name,
                onChange: c("name"),
                fullWidth: !0,
                margin: "normal",
                required: !0,
              }),
              (0, r.jsx)(w.Z, {
                label: "Email",
                placeholder: l.email,
                onChange: c("email"),
                fullWidth: !0,
                margin: "normal",
                required: !0,
              }),
              (0, r.jsx)(w.Z, {
                label: "Message",
                placeholder: l.message,
                onChange: c("message"),
                fullWidth: !0,
                margin: "normal",
                multiline: !0,
                rows: 4,
                required: !0,
              }),
              (0, r.jsx)(o.Z, {
                type: "submit",
                variant: "contained",
                color: "primary",
                children: "Submit",
              }),
            ],
          });
        },
        C = (e) => {
          let { onSubmit: t, initialEmail: n = "", width: a = "100%" } = e,
            [l, s] = i.useState(n),
            [c, d] = i.useState(!1),
            u = (e) =>
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e);
          return (0, r.jsxs)(h.Z, {
            component: "form",
            onSubmit: (e) => {
              e.preventDefault(), u(l) ? (t(l), s(""), d(!1)) : d(!0);
            },
            sx: { width: a },
            children: [
              (0, r.jsx)(x.Z, {
                variant: "h6",
                children: "Sign up for our Newsletter",
              }),
              (0, r.jsx)(w.Z, {
                label: "Email",
                value: l,
                placeholder: "Enter your email",
                onChange: (e) => s(e.target.value),
                fullWidth: !0,
                margin: "normal",
                required: !0,
                type: "email",
                error: c,
                helperText: c ? "Please enter a valid email address." : "",
              }),
              (0, r.jsx)(o.Z, {
                type: "submit",
                variant: "contained",
                color: "primary",
                children: "Sign Up",
              }),
            ],
          });
        },
        S = (e) => {
          let {
            label: t,
            value: n,
            onChange: i,
            type: o = "text",
            required: a = !1,
            multiline: l = !1,
            rows: s = 1,
            width: c = "100%",
          } = e;
          return (0, r.jsx)(w.Z, {
            label: t,
            value: n,
            onChange: (e) => i(e.target.value),
            type: o,
            fullWidth: !1,
            margin: "normal",
            required: a,
            multiline: l,
            rows: s,
            sx: { width: c },
          });
        },
        T = n(4813),
        W = (e) => {
          let {
              children: t,
              spacing: n = 2,
              columns: i = { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 },
              alignItems: o = "center",
              justifyContent: a = "center",
            } = e,
            s = (0, l.Z)();
          return (0, r.jsx)(T.Z, {
            container: !0,
            spacing: n,
            alignItems: o,
            justifyContent: a,
            sx: {
              [s.breakpoints.up("xs")]: {
                gridTemplateColumns: "repeat(".concat(i.xs, ", 1fr)"),
              },
              [s.breakpoints.up("sm")]: {
                gridTemplateColumns: "repeat(".concat(i.sm, ", 1fr)"),
              },
              [s.breakpoints.up("md")]: {
                gridTemplateColumns: "repeat(".concat(i.md, ", 1fr)"),
              },
              [s.breakpoints.up("lg")]: {
                gridTemplateColumns: "repeat(".concat(i.lg, ", 1fr)"),
              },
              [s.breakpoints.up("xl")]: {
                gridTemplateColumns: "repeat(".concat(i.xl, ", 1fr)"),
              },
            },
            children: t,
          });
        },
        E = (e) => {
          let {
              children: t,
              title: n,
              subtitle: i,
              padding: o = 4,
              backgroundColor: a,
              textAlign: s = "left",
            } = e,
            c = (0, l.Z)(),
            d = a || c.palette.background.default;
          return (0, r.jsxs)(h.Z, {
            sx: { backgroundColor: d, padding: c.spacing(o), textAlign: s },
            children: [
              n && (0, r.jsx)(x.Z, { variant: "h4", children: n }),
              i && (0, r.jsx)(x.Z, { variant: "subtitle1", children: i }),
              (0, r.jsx)(h.Z, { children: t }),
            ],
          });
        },
        D = n(5565),
        z = n(9547);
      function I() {
        let e = (0, D._)([
          "\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-5px);\n  }\n",
        ]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      let _ = (0, n(338).F4)(I());
      var B = (e) => {
          let {
              title: t,
              subtitle: n,
              backgroundImage: a,
              ctaText: s,
              onCtaClick: c,
              align: d = "center",
              fullHeight: u = !1,
            } = e,
            p = (0, l.Z)(),
            [m, g] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              let e = () => {
                window.scrollY > 0 ? g(!0) : g(!1);
              };
              return (
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, r.jsxs)(h.Z, {
              sx: {
                backgroundImage: "url(".concat(a, ")"),
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: p.spacing(8, 4),
                textAlign: d,
                color: p.palette.common.white,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:
                  "center" === d
                    ? "center"
                    : "right" === d
                      ? "flex-end"
                      : "flex-start",
                height: u ? "100dvh" : "25em",
                position: "relative",
                width: "100%",
              },
              children: [
                (0, r.jsx)(x.Z, {
                  variant: "h2",
                  gutterBottom: !0,
                  children: t,
                }),
                n &&
                  (0, r.jsx)(x.Z, {
                    variant: "h6",
                    gutterBottom: !0,
                    children: n,
                  }),
                s &&
                  (0, r.jsx)(o.Z, {
                    variant: "contained",
                    color: "primary",
                    onClick: c,
                    sx: { marginTop: p.spacing(2) },
                    children: s,
                  }),
                u &&
                  (0, r.jsxs)(h.Z, {
                    sx: {
                      position: "absolute",
                      bottom: p.spacing(4),
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      animation: "".concat(_, " 2s infinite"),
                      cursor: "pointer",
                      color: p.palette.common.white,
                      opacity: m ? 0 : 1,
                      transition: "opacity 0.5s ease-in-out",
                    },
                    children: [
                      (0, r.jsxs)(h.Z, {
                        sx: { display: { xs: "none", md: "block" } },
                        children: [
                          (0, r.jsx)(x.Z, {
                            variant: "body1",
                            children: "Scroll Down",
                          }),
                          (0, r.jsx)(z.Z, { sx: { fontSize: "2rem" } }),
                        ],
                      }),
                      (0, r.jsx)(h.Z, {
                        sx: { display: { xs: "block", md: "none" } },
                        children: (0, r.jsx)(z.Z, { sx: { fontSize: "3rem" } }),
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        P = n(9217),
        N = n(8964),
        Y = (e) => {
          let { items: t, interval: n = 5e3 } = e,
            [o, a] = (0, i.useState)(0),
            s = (0, l.Z)();
          return (
            (0, i.useEffect)(() => {
              if (n) {
                let e = setInterval(() => {
                  a((e) => (e + 1) % t.length);
                }, n);
                return () => clearInterval(e);
              }
            }, [n, t.length]),
            (0, r.jsxs)(h.Z, {
              sx: {
                position: "relative",
                overflow: "hidden",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "300px",
              },
              children: [
                (0, r.jsx)(h.Z, {
                  sx: {
                    display: "flex",
                    transition: s.transitions.create("transform", {
                      duration: s.transitions.duration.standard,
                    }),
                    transform: "translateX(-".concat(100 * o, "%)"),
                    width: "".concat(100 * t.length, "%"),
                  },
                  children: t.map((e, t) =>
                    (0, r.jsx)(
                      h.Z,
                      {
                        sx: {
                          minWidth: "100%",
                          flexShrink: 0,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        children: e,
                      },
                      t,
                    ),
                  ),
                }),
                (0, r.jsx)(c.Z, {
                  onClick: () => {
                    a((e) => (0 === e ? t.length - 1 : e - 1));
                  },
                  sx: {
                    position: "absolute",
                    left: s.spacing(2),
                    backgroundColor: s.palette.common.white,
                    color: s.palette.common.black,
                  },
                  children: (0, r.jsx)(P.Z, {}),
                }),
                (0, r.jsx)(c.Z, {
                  onClick: () => {
                    a((e) => (e + 1) % t.length);
                  },
                  sx: {
                    position: "absolute",
                    right: s.spacing(2),
                    backgroundColor: s.palette.common.white,
                    color: s.palette.common.black,
                  },
                  children: (0, r.jsx)(N.Z, {}),
                }),
              ],
            })
          );
        },
        A = n(5172),
        F = (e) => {
          let { children: t, isDrawerOpen: n, drawerWidth: i } = e,
            o = (0, l.Z)(),
            a = (0, A._j)(o.palette.background.default, 0.2);
          return (0, r.jsx)(h.Z, {
            sx: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minWidth: n ? "calc(100vw - ".concat(i, "px)") : "100vw",
              minHeight: "100vh",
              background: "linear-gradient(135deg, "
                .concat(o.palette.background.default, " 0%, ")
                .concat(a, " 100%)"),
              boxSizing: "border-box",
              transition: "min-width 0.3s ease",
            },
            children: t,
          });
        },
        M = (e) => {
          let {
              images: t,
              spacing: n = 2,
              columns: i = { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 },
              onClickImage: o,
            } = e,
            a = (0, l.Z)();
          return (0, r.jsx)(W, {
            spacing: n,
            columns: i,
            children: t.map((e, t) =>
              (0, r.jsx)(
                h.Z,
                {
                  component: "img",
                  src: e.src,
                  alt: e.alt,
                  sx: {
                    width: "100%",
                    height: "auto",
                    borderRadius: a.shape.borderRadius,
                    cursor: "pointer",
                  },
                  onClick: () => o(t),
                },
                t,
              ),
            ),
          });
        },
        R = n(5388),
        q = (e) => {
          let { src: t, title: n, aspectRatio: o = "16:9" } = e,
            [a, l] = (0, i.useState)(!1);
          return (0, r.jsx)(R.Z, {
            elevation: 3,
            sx: { overflow: "hidden" },
            onMouseEnter: () => {
              l(!0);
            },
            onMouseLeave: () => {
              l(!1);
            },
            onTouchStart: () => {
              l((e) => !e);
            },
            children: (0, r.jsx)(h.Z, {
              sx: {
                position: "relative",
                paddingBottom: "16:9" === o ? "56.25%" : "75%",
                height: 0,
                overflow: "hidden",
                "& iframe": {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                },
              },
              children: (0, r.jsx)("iframe", {
                src: a
                  ? "".concat(t, "?controls=1")
                  : "".concat(t, "?controls=0"),
                title: n,
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
              }),
            }),
          });
        },
        H = n(2512),
        L = (e) => {
          let { images: t, open: n, onClose: o, initialIndex: a = 0 } = e,
            [l, s] = (0, i.useState)(a);
          return (0, r.jsx)(H.Z, {
            fullScreen: !0,
            open: n,
            onClose: o,
            children: (0, r.jsxs)(h.Z, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                position: "relative",
              },
              children: [
                (0, r.jsx)(h.Z, {
                  component: "img",
                  src: t[l].src,
                  alt: t[l].alt,
                  sx: { maxWidth: "100%", maxHeight: "100%" },
                }),
                (0, r.jsx)(c.Z, {
                  sx: { position: "absolute", top: 16, right: 16 },
                  onClick: o,
                  children: (0, r.jsx)(v.Z, {}),
                }),
                (0, r.jsx)(c.Z, {
                  sx: { position: "absolute", left: 16 },
                  onClick: () => {
                    s((e) => (0 === e ? t.length - 1 : e - 1));
                  },
                  children: "Prev",
                }),
                (0, r.jsx)(c.Z, {
                  sx: { position: "absolute", right: 16 },
                  onClick: () => {
                    s((e) => (e + 1) % t.length);
                  },
                  children: "Next",
                }),
              ],
            }),
          });
        },
        U = n(182),
        J = n(4224),
        $ = n(5717),
        O = (e) => {
          let {
              open: t,
              onClose: n,
              title: i,
              children: o,
              maxWidth: a = "md",
              fullScreenOnMobile: s = !0,
            } = e,
            d = (0, l.Z)(),
            u = (0, U.Z)(d.breakpoints.down("sm"));
          return (0, r.jsxs)(H.Z, {
            open: t,
            onClose: n,
            fullScreen: s && u,
            maxWidth: a,
            fullWidth: !u,
            children: [
              (0, r.jsxs)(J.Z, {
                children: [
                  i,
                  (0, r.jsx)(c.Z, {
                    "aria-label": "close",
                    onClick: n,
                    sx: {
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: (e) => e.palette.grey[500],
                    },
                    children: (0, r.jsx)(v.Z, {}),
                  }),
                ],
              }),
              (0, r.jsx)($.Z, { children: (0, r.jsx)(h.Z, { children: o }) }),
            ],
          });
        },
        V = n(5596),
        X = (e) => {
          let { options: t } = e;
          return (0, r.jsx)(V.ZP, {
            container: !0,
            spacing: 4,
            children: t.map((e, t) =>
              (0, r.jsx)(
                V.ZP,
                {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  md: 4,
                  children: (0, r.jsxs)(R.Z, {
                    elevation: 3,
                    sx: { padding: 4 },
                    children: [
                      (0, r.jsx)(x.Z, {
                        variant: "h6",
                        align: "center",
                        children: e.title,
                      }),
                      (0, r.jsx)(x.Z, {
                        variant: "h4",
                        align: "center",
                        sx: { marginBottom: 2 },
                        children: e.price,
                      }),
                      (0, r.jsx)(h.Z, {
                        component: "ul",
                        sx: { padding: 0, listStyleType: "none" },
                        children: e.features.map((e, t) =>
                          (0, r.jsx)(
                            x.Z,
                            {
                              component: "li",
                              variant: "body2",
                              sx: { marginBottom: 1, textAlign: "center" },
                              children: e,
                            },
                            t,
                          ),
                        ),
                      }),
                      (0, r.jsx)(o.Z, {
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        onClick: e.onButtonClick,
                        sx: { marginTop: 2 },
                        children: e.buttonText,
                      }),
                    ],
                  }),
                },
                t,
              ),
            ),
          });
        },
        G = n(10),
        K = n.n(G),
        Q = (e) => {
          let {
            title: t = "Default Title",
            description: n = "Default description for the website.",
            keywords: i = "default, keywords, seo",
            image: o = "/default-image.png",
            url: a = "https://www.example.com",
          } = e;
          return (0, r.jsxs)(K(), {
            children: [
              (0, r.jsx)("title", { children: t }),
              (0, r.jsx)("meta", { name: "description", content: n }),
              (0, r.jsx)("meta", { name: "keywords", content: i }),
              (0, r.jsx)("meta", { property: "og:title", content: t }),
              (0, r.jsx)("meta", { property: "og:description", content: n }),
              (0, r.jsx)("meta", { property: "og:image", content: o }),
              (0, r.jsx)("meta", { property: "og:url", content: a }),
              (0, r.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
            ],
          });
        },
        ee = n(6578),
        et = (e) => {
          let {
            children: t,
            startOffset: n = "50%",
            endOffset: i = "0%",
            duration: o = 0.8,
            easing: a = [0.25, 0.1, 0.25, 1],
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(ee.E.div, {
                initial: { opacity: 0, translateY: n },
                whileInView: { opacity: 1, translateY: i },
                viewport: { once: !0, amount: 0.5 },
                transition: { duration: o, ease: a },
                children: t,
              }),
              (0, r.jsx)("noscript", {
                children: (0, r.jsx)("div", {
                  style: { opacity: 1 },
                  children: t,
                }),
              }),
            ],
          });
        },
        en = (e) => {
          let {
            children: t,
            scaleOnHover: n = 0.99,
            duration: i = 0.3,
            easing: o = [0.42, 0, 0.58, 1],
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(ee.E.div, {
                whileHover: { scale: n },
                transition: { duration: i, ease: o },
                children: t,
              }),
              (0, r.jsx)("noscript", {
                children: (0, r.jsx)("div", { children: t }),
              }),
            ],
          });
        },
        er = (e) => {
          let {
            children: t,
            scaleOnClick: n = 0.97,
            opacityOnClick: i = 0.9,
            duration: o = 0.2,
            easing: a = [0.42, 0, 0.58, 1],
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(ee.E.div, {
                whileTap: { scale: n, opacity: i },
                transition: { duration: o, ease: a },
                children: t,
              }),
              (0, r.jsx)("noscript", {
                children: (0, r.jsx)("div", { children: t }),
              }),
            ],
          });
        };
    },
  },
]);
