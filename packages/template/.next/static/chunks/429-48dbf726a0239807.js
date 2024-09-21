"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [429],
  {
    8429: function (e, t, n) {
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
          return ee;
        },
        t: function () {
          return y;
        },
        Wi: function () {
          return k;
        },
        yo: function () {
          return I;
        },
        ds: function () {
          return Q;
        },
        rJ: function () {
          return h;
        },
        NR: function () {
          return X;
        },
        u_: function () {
          return U;
        },
        oz: function () {
          return w;
        },
        bv: function () {
          return J;
        },
        Sj: function () {
          return S;
        },
        MS: function () {
          return K;
        },
        $0: function () {
          return T;
        },
        YE: function () {
          return b;
        },
        vj: function () {
          return N;
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
              icon: p,
              ...m
            } = e,
            h = (0, l.Z)(),
            x = () => {
              if ("inherit" === n) return "inherit";
              let e = h.palette[n];
              return "accent1" === n || "accent2" === n
                ? h.palette[n]
                : e && e.main
                  ? e.main
                  : h.palette.primary.main;
            },
            g = (0, r.jsx)(o.Z, {
              variant: t,
              size: i,
              fullWidth: c,
              onClick: d,
              startIcon: p,
              sx: {
                borderRadius: h.spacing(2),
                padding: h.spacing(2, 4),
                textTransform: "none",
                fontSize: h.typography.button.fontSize,
                fontWeight: h.typography.button.fontWeight,
                color: "contained" === t ? h.palette.common.white : x(),
                backgroundColor: "contained" === t ? x() : "transparent",
                boxShadow: "contained" === t ? h.shadows[1] : "none",
                "&:hover": {
                  backgroundColor:
                    "contained" === t
                      ? h.palette.action.hover
                      : h.palette.action.selected,
                },
              },
              ...m,
              children: s,
            });
          return u ? (0, r.jsx)(a.Z, { title: u, children: g }) : g;
        },
        c = n(1489),
        d = n(3474),
        u = n(9799),
        p = n(9984),
        m = n(806),
        h = (e) => {
          let {
              title: t = "Default Title",
              subtitle: n,
              description: i,
              actions: o,
              variant: a = "elevation",
              image: s,
              imageAlt: h = "Card image",
              imageHeight: x = 200,
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
          return (0, r.jsxs)(c.Z, {
            sx: b,
            ...j,
            children: [
              s &&
                (0, r.jsx)(d.Z, {
                  component: "img",
                  src: s,
                  alt: h,
                  sx: {
                    width: "100%",
                    height: x,
                    objectFit: "cover",
                    display: s ? "block" : "none",
                  },
                }),
              (0, r.jsxs)(u.Z, {
                children: [
                  t &&
                    (0, r.jsx)(p.Z, {
                      variant: "h5",
                      component: "div",
                      gutterBottom: !0,
                      children: t,
                    }),
                  n &&
                    (0, r.jsx)(p.Z, {
                      variant: "subtitle1",
                      color: "textSecondary",
                      gutterBottom: !0,
                      children: n,
                    }),
                  i &&
                    (0, r.jsx)(p.Z, {
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
        x = n(1887),
        g = n(3678);
      (0, x.ZP)(g.Z)((e) => {
        let { theme: t } = e;
        return {
          position: "fixed",
          bottom: t.spacing(2),
          right: t.spacing(2),
          backgroundColor: t.palette.primary.main,
          "&:hover": { backgroundColor: t.palette.secondary.main },
        };
      });
      var f = n(2527);
      (0, x.ZP)(f.Z)((e) => {
        let { theme: t } = e;
        return { position: "fixed", bottom: t.spacing(8), right: t.spacing(8) };
      });
      var j = n(7906),
        Z = n(5861),
        b = (e) => {
          let {
              isDrawerOpen: t = !1,
              toggleDrawer: n,
              drawerWidth: o = 240,
              children: a,
            } = e,
            [l, c] = (0, i.useState)(t);
          (0, i.useEffect)(() => {
            c(t);
          }, [t]);
          let u =
            n ||
            ((e) => () => {
              c(e);
            });
          return (0, r.jsx)(j.ZP, {
            anchor: "left",
            open: l,
            onClose: u(!1),
            variant: "persistent",
            sx: {
              width: o,
              flexShrink: 0,
              "& .MuiDrawer-paper": { width: o, boxSizing: "border-box" },
            },
            children: (0, r.jsxs)(d.Z, {
              sx: { width: o, padding: "1rem" },
              children: [
                (0, r.jsxs)(d.Z, {
                  sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                  children: [
                    (0, r.jsx)("h3", {
                      children: "Nothing to See here \uD83D\uDC40",
                    }),
                    (0, r.jsx)(s, {
                      icon: (0, r.jsx)(Z.Z, {}),
                      onClick: () => u(!0),
                    }),
                  ],
                }),
                a,
              ],
            }),
          });
        },
        v = n(8471),
        y = (e) => {
          let { onSubmit: t, initialValues: n, width: a = "100%" } = e,
            [l, s] = i.useState(n || { name: "", email: "", message: "" }),
            c = (e) => (t) => {
              s({ ...l, [e]: t.target.value });
            };
          return (0, r.jsxs)(d.Z, {
            component: "form",
            onSubmit: (e) => {
              e.preventDefault(), t(l), s({ name: "", email: "", message: "" });
            },
            sx: { width: a },
            children: [
              (0, r.jsx)(p.Z, { variant: "h6", children: "Contact Us" }),
              (0, r.jsx)(v.Z, {
                label: "Name",
                placeholder: l.name,
                onChange: c("name"),
                fullWidth: !0,
                margin: "normal",
                required: !0,
              }),
              (0, r.jsx)(v.Z, {
                label: "Email",
                placeholder: l.email,
                onChange: c("email"),
                fullWidth: !0,
                margin: "normal",
                required: !0,
              }),
              (0, r.jsx)(v.Z, {
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
        w = (e) => {
          let { onSubmit: t, initialEmail: n = "", width: a = "100%" } = e,
            [l, s] = i.useState(n),
            [c, u] = i.useState(!1),
            m = (e) =>
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e);
          return (0, r.jsxs)(d.Z, {
            component: "form",
            onSubmit: (e) => {
              e.preventDefault(), m(l) ? (t(l), s(""), u(!1)) : u(!0);
            },
            sx: { width: a },
            children: [
              (0, r.jsx)(p.Z, {
                variant: "h6",
                children: "Sign up for our Newsletter",
              }),
              (0, r.jsx)(v.Z, {
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
        k = (e) => {
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
          return (0, r.jsx)(v.Z, {
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
        C = n(4813),
        S = (e) => {
          let {
              children: t,
              spacing: n = 2,
              columns: i = { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 },
              alignItems: o = "center",
              justifyContent: a = "center",
            } = e,
            s = (0, l.Z)();
          return (0, r.jsx)(C.Z, {
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
        T = (e) => {
          let {
              children: t,
              title: n,
              subtitle: i,
              padding: o = 4,
              backgroundColor: a,
              textAlign: s = "left",
            } = e,
            c = (0, l.Z)(),
            u = a || c.palette.background.default;
          return (0, r.jsxs)(d.Z, {
            sx: { backgroundColor: u, padding: c.spacing(o), textAlign: s },
            children: [
              n && (0, r.jsx)(p.Z, { variant: "h4", children: n }),
              i && (0, r.jsx)(p.Z, { variant: "subtitle1", children: i }),
              (0, r.jsx)(d.Z, { children: t }),
            ],
          });
        },
        E = n(5565),
        W = n(9547);
      function D() {
        let e = (0, E._)([
          "\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-5px);\n  }\n",
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      let z = (0, n(338).F4)(D());
      var I = (e) => {
          let {
              title: t,
              subtitle: n,
              backgroundImage: a,
              ctaText: s,
              onCtaClick: c,
              align: u = "center",
              fullHeight: m = !1,
            } = e,
            h = (0, l.Z)(),
            [x, g] = (0, i.useState)(!1);
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
            (0, r.jsxs)(d.Z, {
              sx: {
                backgroundImage: "url(".concat(a, ")"),
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: h.spacing(8, 4),
                textAlign: u,
                color: h.palette.common.white,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:
                  "center" === u
                    ? "center"
                    : "right" === u
                      ? "flex-end"
                      : "flex-start",
                height: m ? "100dvh" : "25em",
                position: "relative",
                width: "100%",
              },
              children: [
                (0, r.jsx)(p.Z, {
                  variant: "h2",
                  gutterBottom: !0,
                  children: t,
                }),
                n &&
                  (0, r.jsx)(p.Z, {
                    variant: "h6",
                    gutterBottom: !0,
                    children: n,
                  }),
                s &&
                  (0, r.jsx)(o.Z, {
                    variant: "contained",
                    color: "primary",
                    onClick: c,
                    sx: { marginTop: h.spacing(2) },
                    children: s,
                  }),
                m &&
                  (0, r.jsxs)(d.Z, {
                    sx: {
                      position: "absolute",
                      bottom: h.spacing(4),
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      animation: "".concat(z, " 2s infinite"),
                      cursor: "pointer",
                      color: h.palette.common.white,
                      opacity: x ? 0 : 1,
                      transition: "opacity 0.5s ease-in-out",
                    },
                    children: [
                      (0, r.jsxs)(d.Z, {
                        sx: { display: { xs: "none", md: "block" } },
                        children: [
                          (0, r.jsx)(p.Z, {
                            variant: "body1",
                            children: "Scroll Down",
                          }),
                          (0, r.jsx)(W.Z, { sx: { fontSize: "2rem" } }),
                        ],
                      }),
                      (0, r.jsx)(d.Z, {
                        sx: { display: { xs: "block", md: "none" } },
                        children: (0, r.jsx)(W.Z, { sx: { fontSize: "3rem" } }),
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        _ = n(417),
        B = n(9217),
        P = n(8964),
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
            (0, r.jsxs)(d.Z, {
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
                (0, r.jsx)(d.Z, {
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
                      d.Z,
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
                (0, r.jsx)(_.Z, {
                  onClick: () => {
                    a((e) => (0 === e ? t.length - 1 : e - 1));
                  },
                  sx: {
                    position: "absolute",
                    left: s.spacing(2),
                    backgroundColor: s.palette.common.white,
                    color: s.palette.common.black,
                  },
                  children: (0, r.jsx)(B.Z, {}),
                }),
                (0, r.jsx)(_.Z, {
                  onClick: () => {
                    a((e) => (e + 1) % t.length);
                  },
                  sx: {
                    position: "absolute",
                    right: s.spacing(2),
                    backgroundColor: s.palette.common.white,
                    color: s.palette.common.black,
                  },
                  children: (0, r.jsx)(P.Z, {}),
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
          return (0, r.jsx)(d.Z, {
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
        M = n(5388),
        N = (e) => {
          let { src: t, title: n, aspectRatio: o = "16:9" } = e,
            [a, l] = (0, i.useState)(!1);
          return (0, r.jsx)(M.Z, {
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
            children: (0, r.jsx)(d.Z, {
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
        q = n(182),
        L = n(2512),
        R = n(4224),
        H = n(5717),
        U = (e) => {
          let {
              open: t,
              onClose: n,
              title: i,
              children: o,
              maxWidth: a = "md",
              fullScreenOnMobile: s = !0,
            } = e,
            c = (0, l.Z)(),
            u = (0, q.Z)(c.breakpoints.down("sm"));
          return (0, r.jsxs)(L.Z, {
            open: t,
            onClose: n,
            fullScreen: s && u,
            maxWidth: a,
            fullWidth: !u,
            children: [
              (0, r.jsxs)(R.Z, {
                children: [
                  i,
                  (0, r.jsx)(_.Z, {
                    "aria-label": "close",
                    onClick: n,
                    sx: {
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: (e) => e.palette.grey[500],
                    },
                    children: (0, r.jsx)(Z.Z, {}),
                  }),
                ],
              }),
              (0, r.jsx)(H.Z, { children: (0, r.jsx)(d.Z, { children: o }) }),
            ],
          });
        },
        $ = n(5596),
        J = (e) => {
          let { options: t } = e;
          return (0, r.jsx)($.ZP, {
            container: !0,
            spacing: 4,
            children: t.map((e, t) =>
              (0, r.jsx)(
                $.ZP,
                {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  md: 4,
                  children: (0, r.jsxs)(M.Z, {
                    elevation: 3,
                    sx: { padding: 4 },
                    children: [
                      (0, r.jsx)(p.Z, {
                        variant: "h6",
                        align: "center",
                        children: e.title,
                      }),
                      (0, r.jsx)(p.Z, {
                        variant: "h4",
                        align: "center",
                        sx: { marginBottom: 2 },
                        children: e.price,
                      }),
                      (0, r.jsx)(d.Z, {
                        component: "ul",
                        sx: { padding: 0, listStyleType: "none" },
                        children: e.features.map((e, t) =>
                          (0, r.jsx)(
                            p.Z,
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
        O = n(10),
        V = n.n(O),
        X = (e) => {
          let {
            title: t = "Default Title",
            description: n = "Default description for the website.",
            keywords: i = "default, keywords, seo",
            image: o = "/default-image.png",
            url: a = "https://www.example.com",
          } = e;
          return (0, r.jsxs)(V(), {
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
        G = n(6578),
        K = (e) => {
          let {
            children: t,
            startOffset: n = "50%",
            endOffset: i = "0%",
            duration: o = 0.8,
            easing: a = [0.25, 0.1, 0.25, 1],
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(G.E.div, {
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
        Q = (e) => {
          let {
            children: t,
            scaleOnHover: n = 0.99,
            duration: i = 0.3,
            easing: o = [0.42, 0, 0.58, 1],
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(G.E.div, {
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
        ee = (e) => {
          let {
            children: t,
            scaleOnClick: n = 0.97,
            opacityOnClick: i = 0.9,
            duration: o = 0.2,
            easing: a = [0.42, 0, 0.58, 1],
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(G.E.div, {
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
