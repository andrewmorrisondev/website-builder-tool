(exports.id = 407),
  (exports.ids = [407]),
  (exports.modules = {
    8863: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 4424, 23)),
        Promise.resolve().then(r.t.bind(r, 7752, 23)),
        Promise.resolve().then(r.t.bind(r, 5275, 23)),
        Promise.resolve().then(r.t.bind(r, 9842, 23)),
        Promise.resolve().then(r.t.bind(r, 1633, 23)),
        Promise.resolve().then(r.t.bind(r, 9224, 23));
    },
    6767: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 7322));
    },
    1047: (e, t, r) => {
      "use strict";
      r.d(t, {
        uT: () => H,
        m3: () => c,
        lr: () => A,
        Z3: () => ee,
        t: () => w,
        Wi: () => C,
        yo: () => z,
        ds: () => Q,
        rJ: () => g,
        NR: () => X,
        u_: () => L,
        oz: () => S,
        bv: () => U,
        Sj: () => P,
        MS: () => K,
        $0: () => I,
        YE: () => y,
        vj: () => Y,
      });
      var n = r(3227),
        o = r(3677),
        i = r.n(o),
        a = r(4906),
        l = r(5699),
        s = r(6414);
      let c = ({
        variant: e = "contained",
        color: t = "primary",
        size: r = "medium",
        label: o = "Click Me",
        fullWidth: i = !1,
        onClick: c,
        tooltip: d,
        icon: m,
        ...h
      }) => {
        let x = (0, s.Z)(),
          p = () => {
            if ("inherit" === t) return "inherit";
            let e = x.palette[t];
            return "accent1" === t || "accent2" === t
              ? x.palette[t]
              : e && e.main
                ? e.main
                : x.palette.primary.main;
          },
          g = n.jsx(a.Z, {
            variant: e,
            size: r,
            fullWidth: i,
            onClick: c,
            startIcon: m,
            sx: {
              borderRadius: x.spacing(2),
              padding: x.spacing(2, 4),
              textTransform: "none",
              fontSize: x.typography.button.fontSize,
              fontWeight: x.typography.button.fontWeight,
              color: "contained" === e ? x.palette.common.white : p(),
              backgroundColor: "contained" === e ? p() : "transparent",
              boxShadow: "contained" === e ? x.shadows[1] : "none",
              "&:hover": {
                backgroundColor:
                  "contained" === e
                    ? x.palette.action.hover
                    : x.palette.action.selected,
              },
            },
            ...h,
            children: o,
          });
        return d ? n.jsx(l.Z, { title: d, children: g }) : g;
      };
      var d = r(3738),
        m = r(6949),
        h = r(5817),
        x = r(5168),
        p = r(7364);
      let g = ({
        title: e = "Default Title",
        subtitle: t,
        description: r,
        actions: o,
        variant: i = "elevation",
        image: a,
        imageAlt: l = "Card image",
        imageHeight: c = 200,
        fullWidth: g = !1,
        sx: u = [],
        ...f
      }) => {
        let j = (0, s.Z)(),
          b = {
            maxWidth: g ? "100%" : 345,
            boxShadow: "elevation" === i ? j.shadows[1] : "none",
            border:
              "outlined" === i ? `1px solid ${j.palette.divider}` : "none",
            borderRadius: j.spacing(2),
            overflow: "hidden",
            ...u,
          };
        return (0, n.jsxs)(d.Z, {
          sx: b,
          ...f,
          children: [
            a &&
              n.jsx(m.Z, {
                component: "img",
                src: a,
                alt: l,
                sx: {
                  width: "100%",
                  height: c,
                  objectFit: "cover",
                  display: a ? "block" : "none",
                },
              }),
            (0, n.jsxs)(h.Z, {
              children: [
                e &&
                  n.jsx(x.Z, {
                    variant: "h5",
                    component: "div",
                    gutterBottom: !0,
                    children: e,
                  }),
                t &&
                  n.jsx(x.Z, {
                    variant: "subtitle1",
                    color: "textSecondary",
                    gutterBottom: !0,
                    children: t,
                  }),
                r &&
                  n.jsx(x.Z, {
                    variant: "body2",
                    color: "textSecondary",
                    children: r,
                  }),
              ],
            }),
            o && n.jsx(p.Z, { children: o }),
          ],
        });
      };
      var u = r(5340),
        f = r(8968);
      (0, u.ZP)(f.Z)(({ theme: e }) => ({
        position: "fixed",
        bottom: e.spacing(2),
        right: e.spacing(2),
        backgroundColor: e.palette.primary.main,
        "&:hover": { backgroundColor: e.palette.secondary.main },
      }));
      var j = r(8768);
      (0, u.ZP)(j.Z)(({ theme: e }) => ({
        position: "fixed",
        bottom: e.spacing(8),
        right: e.spacing(8),
      }));
      var b = r(6234),
        v = r(849);
      let y = ({
        isDrawerOpen: e = !1,
        toggleDrawer: t,
        drawerWidth: r = 240,
        children: i,
      }) => {
        let [a, l] = (0, o.useState)(e);
        (0, o.useEffect)(() => {
          l(e);
        }, [e]);
        let s =
          t ||
          ((e) => () => {
            l(e);
          });
        return n.jsx(b.ZP, {
          anchor: "left",
          open: a,
          onClose: s(!1),
          variant: "persistent",
          sx: {
            width: r,
            flexShrink: 0,
            "& .MuiDrawer-paper": { width: r, boxSizing: "border-box" },
          },
          children: (0, n.jsxs)(m.Z, {
            sx: { width: r, padding: "1rem" },
            children: [
              (0, n.jsxs)(m.Z, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                },
                children: [
                  n.jsx("h3", { children: "Nothing to See here \uD83D\uDC40" }),
                  n.jsx(c, { icon: n.jsx(v.Z, {}), onClick: () => s(!0) }),
                ],
              }),
              i,
            ],
          }),
        });
      };
      var Z = r(2925);
      let w = ({ onSubmit: e, initialValues: t, width: r = "100%" }) => {
          let [o, l] = i().useState(t || { name: "", email: "", message: "" }),
            s = (e) => (t) => {
              l({ ...o, [e]: t.target.value });
            };
          return (0, n.jsxs)(m.Z, {
            component: "form",
            onSubmit: (t) => {
              t.preventDefault(), e(o), l({ name: "", email: "", message: "" });
            },
            sx: { width: r },
            children: [
              n.jsx(x.Z, { variant: "h6", children: "Contact Us" }),
              n.jsx(Z.Z, {
                label: "Name",
                placeholder: o.name,
                onChange: s("name"),
                fullWidth: !0,
                margin: "normal",
                required: !0,
              }),
              n.jsx(Z.Z, {
                label: "Email",
                placeholder: o.email,
                onChange: s("email"),
                fullWidth: !0,
                margin: "normal",
                required: !0,
              }),
              n.jsx(Z.Z, {
                label: "Message",
                placeholder: o.message,
                onChange: s("message"),
                fullWidth: !0,
                margin: "normal",
                multiline: !0,
                rows: 4,
                required: !0,
              }),
              n.jsx(a.Z, {
                type: "submit",
                variant: "contained",
                color: "primary",
                children: "Submit",
              }),
            ],
          });
        },
        S = ({ onSubmit: e, initialEmail: t = "", width: r = "100%" }) => {
          let [o, l] = i().useState(t),
            [s, c] = i().useState(!1),
            d = (e) =>
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e);
          return (0, n.jsxs)(m.Z, {
            component: "form",
            onSubmit: (t) => {
              t.preventDefault(), d(o) ? (e(o), l(""), c(!1)) : c(!0);
            },
            sx: { width: r },
            children: [
              n.jsx(x.Z, {
                variant: "h6",
                children: "Sign up for our Newsletter",
              }),
              n.jsx(Z.Z, {
                label: "Email",
                value: o,
                placeholder: "Enter your email",
                onChange: (e) => l(e.target.value),
                fullWidth: !0,
                margin: "normal",
                required: !0,
                type: "email",
                error: s,
                helperText: s ? "Please enter a valid email address." : "",
              }),
              n.jsx(a.Z, {
                type: "submit",
                variant: "contained",
                color: "primary",
                children: "Sign Up",
              }),
            ],
          });
        },
        C = ({
          label: e,
          value: t,
          onChange: r,
          type: o = "text",
          required: i = !1,
          multiline: a = !1,
          rows: l = 1,
          width: s = "100%",
        }) =>
          n.jsx(Z.Z, {
            label: e,
            value: t,
            onChange: (e) => r(e.target.value),
            type: o,
            fullWidth: !1,
            margin: "normal",
            required: i,
            multiline: a,
            rows: l,
            sx: { width: s },
          });
      var k = r(6840);
      let P = ({
          children: e,
          spacing: t = 2,
          columns: r = { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 },
          alignItems: o = "center",
          justifyContent: i = "center",
        }) => {
          let a = (0, s.Z)();
          return n.jsx(k.Z, {
            container: !0,
            spacing: t,
            alignItems: o,
            justifyContent: i,
            sx: {
              [a.breakpoints.up("xs")]: {
                gridTemplateColumns: `repeat(${r.xs}, 1fr)`,
              },
              [a.breakpoints.up("sm")]: {
                gridTemplateColumns: `repeat(${r.sm}, 1fr)`,
              },
              [a.breakpoints.up("md")]: {
                gridTemplateColumns: `repeat(${r.md}, 1fr)`,
              },
              [a.breakpoints.up("lg")]: {
                gridTemplateColumns: `repeat(${r.lg}, 1fr)`,
              },
              [a.breakpoints.up("xl")]: {
                gridTemplateColumns: `repeat(${r.xl}, 1fr)`,
              },
            },
            children: e,
          });
        },
        I = ({
          children: e,
          title: t,
          subtitle: r,
          padding: o = 4,
          backgroundColor: i,
          textAlign: a = "left",
        }) => {
          let l = (0, s.Z)(),
            c = i || l.palette.background.default;
          return (0, n.jsxs)(m.Z, {
            sx: { backgroundColor: c, padding: l.spacing(o), textAlign: a },
            children: [
              t && n.jsx(x.Z, { variant: "h4", children: t }),
              r && n.jsx(x.Z, { variant: "subtitle1", children: r }),
              n.jsx(m.Z, { children: e }),
            ],
          });
        };
      var W = r(6970),
        D = r(8964);
      let T = (0, D.F4)`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`,
        z = ({
          title: e,
          subtitle: t,
          backgroundImage: r,
          ctaText: i,
          onCtaClick: l,
          align: c = "center",
          fullHeight: d = !1,
        }) => {
          let h = (0, s.Z)(),
            [p, g] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
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
            (0, n.jsxs)(m.Z, {
              sx: {
                backgroundImage: `url(${r})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: h.spacing(8, 4),
                textAlign: c,
                color: h.palette.common.white,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:
                  "center" === c
                    ? "center"
                    : "right" === c
                      ? "flex-end"
                      : "flex-start",
                height: d ? "100dvh" : "25em",
                position: "relative",
                width: "100%",
              },
              children: [
                n.jsx(x.Z, { variant: "h2", gutterBottom: !0, children: e }),
                t &&
                  n.jsx(x.Z, { variant: "h6", gutterBottom: !0, children: t }),
                i &&
                  n.jsx(a.Z, {
                    variant: "contained",
                    color: "primary",
                    onClick: l,
                    sx: { marginTop: h.spacing(2) },
                    children: i,
                  }),
                d &&
                  (0, n.jsxs)(m.Z, {
                    sx: {
                      position: "absolute",
                      bottom: h.spacing(4),
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      animation: `${T} 2s infinite`,
                      cursor: "pointer",
                      color: h.palette.common.white,
                      opacity: p ? 0 : 1,
                      transition: "opacity 0.5s ease-in-out",
                    },
                    children: [
                      (0, n.jsxs)(m.Z, {
                        sx: { display: { xs: "none", md: "block" } },
                        children: [
                          n.jsx(x.Z, {
                            variant: "body1",
                            children: "Scroll Down",
                          }),
                          n.jsx(W.Z, { sx: { fontSize: "2rem" } }),
                        ],
                      }),
                      n.jsx(m.Z, {
                        sx: { display: { xs: "block", md: "none" } },
                        children: n.jsx(W.Z, { sx: { fontSize: "3rem" } }),
                      }),
                    ],
                  }),
              ],
            })
          );
        };
      var $ = r(746),
        E = r(5486),
        B = r(1120);
      let A = ({ items: e, interval: t = 5e3 }) => {
        let [r, i] = (0, o.useState)(0),
          a = (0, s.Z)();
        return (
          (0, o.useEffect)(() => {
            if (t) {
              let r = setInterval(() => {
                i((t) => (t + 1) % e.length);
              }, t);
              return () => clearInterval(r);
            }
          }, [t, e.length]),
          (0, n.jsxs)(m.Z, {
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
              n.jsx(m.Z, {
                sx: {
                  display: "flex",
                  transition: a.transitions.create("transform", {
                    duration: a.transitions.duration.standard,
                  }),
                  transform: `translateX(-${100 * r}%)`,
                  width: `${100 * e.length}%`,
                },
                children: e.map((e, t) =>
                  n.jsx(
                    m.Z,
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
              n.jsx($.Z, {
                onClick: () => {
                  i((t) => (0 === t ? e.length - 1 : t - 1));
                },
                sx: {
                  position: "absolute",
                  left: a.spacing(2),
                  backgroundColor: a.palette.common.white,
                  color: a.palette.common.black,
                },
                children: n.jsx(E.Z, {}),
              }),
              n.jsx($.Z, {
                onClick: () => {
                  i((t) => (t + 1) % e.length);
                },
                sx: {
                  position: "absolute",
                  right: a.spacing(2),
                  backgroundColor: a.palette.common.white,
                  color: a.palette.common.black,
                },
                children: n.jsx(B.Z, {}),
              }),
            ],
          })
        );
      };
      var F = r(9067);
      let H = ({ children: e, isDrawerOpen: t, drawerWidth: r }) => {
        let o = (0, s.Z)(),
          i = (0, F._j)(o.palette.background.default, 0.2);
        return n.jsx(m.Z, {
          sx: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minWidth: t ? `calc(100vw - ${r}px)` : "100vw",
            minHeight: "100vh",
            background: `linear-gradient(135deg, ${o.palette.background.default} 0%, ${i} 100%)`,
            boxSizing: "border-box",
            transition: "min-width 0.3s ease",
          },
          children: e,
        });
      };
      var M = r(9811);
      let Y = ({ src: e, title: t, aspectRatio: r = "16:9" }) => {
        let [i, a] = (0, o.useState)(!1);
        return n.jsx(M.Z, {
          elevation: 3,
          sx: { overflow: "hidden" },
          onMouseEnter: () => {
            a(!0);
          },
          onMouseLeave: () => {
            a(!1);
          },
          onTouchStart: () => {
            a((e) => !e);
          },
          children: n.jsx(m.Z, {
            sx: {
              position: "relative",
              paddingBottom: "16:9" === r ? "56.25%" : "75%",
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
            children: n.jsx("iframe", {
              src: i ? `${e}?controls=1` : `${e}?controls=0`,
              title: t,
              allow:
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: !0,
            }),
          }),
        });
      };
      var q = r(8681),
        O = r(6664),
        R = r(5091),
        _ = r(2719);
      let L = ({
        open: e,
        onClose: t,
        title: r,
        children: o,
        maxWidth: i = "md",
        fullScreenOnMobile: a = !0,
      }) => {
        let l = (0, s.Z)(),
          c = (0, q.Z)(l.breakpoints.down("sm"));
        return (0, n.jsxs)(O.Z, {
          open: e,
          onClose: t,
          fullScreen: a && c,
          maxWidth: i,
          fullWidth: !c,
          children: [
            (0, n.jsxs)(R.Z, {
              children: [
                r,
                n.jsx($.Z, {
                  "aria-label": "close",
                  onClick: t,
                  sx: {
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (e) => e.palette.grey[500],
                  },
                  children: n.jsx(v.Z, {}),
                }),
              ],
            }),
            n.jsx(_.Z, { children: n.jsx(m.Z, { children: o }) }),
          ],
        });
      };
      var N = r(2090);
      let U = ({ options: e }) =>
        n.jsx(N.ZP, {
          container: !0,
          spacing: 4,
          children: e.map((e, t) =>
            n.jsx(
              N.ZP,
              {
                item: !0,
                xs: 12,
                sm: 6,
                md: 4,
                children: (0, n.jsxs)(M.Z, {
                  elevation: 3,
                  sx: { padding: 4 },
                  children: [
                    n.jsx(x.Z, {
                      variant: "h6",
                      align: "center",
                      children: e.title,
                    }),
                    n.jsx(x.Z, {
                      variant: "h4",
                      align: "center",
                      sx: { marginBottom: 2 },
                      children: e.price,
                    }),
                    n.jsx(m.Z, {
                      component: "ul",
                      sx: { padding: 0, listStyleType: "none" },
                      children: e.features.map((e, t) =>
                        n.jsx(
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
                    n.jsx(a.Z, {
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
      var J = r(9689),
        V = r.n(J);
      let X = ({
        title: e = "Default Title",
        description: t = "Default description for the website.",
        keywords: r = "default, keywords, seo",
        image: o = "/default-image.png",
        url: i = "https://www.example.com",
      }) =>
        (0, n.jsxs)(V(), {
          children: [
            n.jsx("title", { children: e }),
            n.jsx("meta", { name: "description", content: t }),
            n.jsx("meta", { name: "keywords", content: r }),
            n.jsx("meta", { property: "og:title", content: e }),
            n.jsx("meta", { property: "og:description", content: t }),
            n.jsx("meta", { property: "og:image", content: o }),
            n.jsx("meta", { property: "og:url", content: i }),
            n.jsx("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
          ],
        });
      var G = r(9740);
      let K = ({
          children: e,
          startOffset: t = "50%",
          endOffset: r = "0%",
          duration: o = 0.8,
          easing: i = [0.25, 0.1, 0.25, 1],
        }) =>
          (0, n.jsxs)(n.Fragment, {
            children: [
              n.jsx(G.E.div, {
                initial: { opacity: 0, translateY: t },
                whileInView: { opacity: 1, translateY: r },
                viewport: { once: !0, amount: 0.5 },
                transition: { duration: o, ease: i },
                children: e,
              }),
              n.jsx("noscript", {
                children: n.jsx("div", { style: { opacity: 1 }, children: e }),
              }),
            ],
          }),
        Q = ({
          children: e,
          scaleOnHover: t = 0.99,
          duration: r = 0.3,
          easing: o = [0.42, 0, 0.58, 1],
        }) =>
          (0, n.jsxs)(n.Fragment, {
            children: [
              n.jsx(G.E.div, {
                whileHover: { scale: t },
                transition: { duration: r, ease: o },
                children: e,
              }),
              n.jsx("noscript", { children: n.jsx("div", { children: e }) }),
            ],
          }),
        ee = ({
          children: e,
          scaleOnClick: t = 0.97,
          opacityOnClick: r = 0.9,
          duration: o = 0.2,
          easing: i = [0.42, 0, 0.58, 1],
        }) =>
          (0, n.jsxs)(n.Fragment, {
            children: [
              n.jsx(G.E.div, {
                whileTap: { scale: t, opacity: r },
                transition: { duration: o, ease: i },
                children: e,
              }),
              n.jsx("noscript", { children: n.jsx("div", { children: e }) }),
            ],
          });
    },
    7322: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => u });
      var n = r(3227);
      r(1318);
      var o = r(649),
        i = r(3677),
        a = r(1170),
        l = r(8681),
        s = r(7766);
      let c = (e) =>
          (0, s.Z)({
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
            spacing: (e) => `${0.25 * e}rem`,
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
          }),
        d = (0, i.createContext)({
          mode: "light",
          toggleTheme: () => {},
          updateColors: () => {},
        }),
        m = ({ children: e }) => {
          let t = (0, l.Z)("(prefers-color-scheme: dark)"),
            [r, o] = (0, i.useState)("light"),
            [s, m] = (0, i.useState)("#1976d2"),
            [h, x] = (0, i.useState)("#dc004e"),
            [p, g] = (0, i.useState)(""),
            [u, f] = (0, i.useState)(""),
            [j, b] = (0, i.useState)("");
          (0, i.useEffect)(() => {
            let e = localStorage.getItem("theme"),
              r = localStorage.getItem("primaryColor"),
              n = localStorage.getItem("secondaryColor"),
              i = localStorage.getItem("backgroundColor"),
              a = localStorage.getItem("accentColor1"),
              l = localStorage.getItem("accentColor2");
            e ? o(e) : o(t ? "dark" : "light"),
              r && m(r),
              n && x(n),
              i && b(i),
              a && g(a),
              l && f(l);
          }, [t]);
          let v = (0, i.useMemo)(
            () =>
              c({
                mode: r,
                colors: {
                  primary: s,
                  secondary: h,
                  backgroundDefault:
                    j || ("light" === r ? "#f5f5f5" : "#333A3F"),
                  backgroundPaper: "light" === r ? "#ffffff" : "#424242",
                  textPrimary: "light" === r ? "#000000" : "#ffffff",
                  textSecondary: "light" === r ? "#5f5f5f" : "#e0e0e0",
                  accent1: p,
                  accent2: u,
                },
              }),
            [r, s, h, j, p, u],
          );
          return n.jsx(d.Provider, {
            value: {
              mode: r,
              toggleTheme: () => {
                let e = "light" === r ? "dark" : "light";
                o(e), localStorage.setItem("theme", e);
              },
              updateColors: (e, t, r, n) => {
                m(e),
                  x(t),
                  g(r),
                  f(n),
                  b(e),
                  localStorage.setItem("primaryColor", e),
                  localStorage.setItem("secondaryColor", t),
                  localStorage.setItem("backgroundColor", e),
                  localStorage.setItem("accentColor1", r),
                  localStorage.setItem("accentColor2", n);
              },
            },
            children: n.jsx(a.Z, { theme: v, children: e }),
          });
        };
      var h = r(2479),
        x = r(6949),
        p = r(5724),
        g = r(1047);
      function u({ children: e }) {
        let [t, r] = (0, i.useState)(!1),
          a = (e) => () => {
            r(e);
          };
        return n.jsx(n.Fragment, {
          children: n.jsx("html", {
            lang: "en",
            children: n.jsx("body", {
              children: (0, n.jsxs)(m, {
                children: [
                  n.jsx(h.ZP, {}),
                  (0, n.jsxs)(g.YE, {
                    isDrawerOpen: t,
                    toggleDrawer: a,
                    drawerWidth: 250,
                    children: [
                      n.jsx(o.default, {
                        href: "/",
                        passHref: !0,
                        children: n.jsx(g.m3, {
                          label: "Home",
                          variant: "contained",
                          color: "primary",
                        }),
                      }),
                      n.jsx(o.default, {
                        href: "/about",
                        passHref: !0,
                        children: n.jsx(g.m3, {
                          label: "About",
                          variant: "outlined",
                          color: "secondary",
                        }),
                      }),
                    ],
                  }),
                  n.jsx(g.m3, {
                    icon: n.jsx(p.Z, {}),
                    onClick: () => a(!0),
                    sx: {
                      position: "fixed",
                      top: "1rem",
                      left: "1rem",
                      zIndex: 1e3,
                    },
                  }),
                  n.jsx(x.Z, {
                    component: "main",
                    sx: {
                      transition: "margin-left 0.3s ease",
                      marginLeft: t ? "250px" : 0,
                    },
                    children: n.jsx(g.uT, {
                      isDrawerOpen: t,
                      drawerWidth: 250,
                      children: e,
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
    },
    2567: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => n });
      let n = (0, r(3189).createProxy)(
        String.raw`/Users/andrewmorrison/code/projects/website-builder-tool/packages/template/app/layout.tsx#default`,
      );
    },
    1318: () => {},
  });
