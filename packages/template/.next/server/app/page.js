(() => {
  var e = {};
  (e.id = 931),
    (e.ids = [931]),
    (e.modules = {
      2934: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      4580: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      5869: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      1017: (e) => {
        "use strict";
        e.exports = require("path");
      },
      5034: (e) => {
        "use strict";
        e.exports = require("url");
      },
      5230: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => a.a,
            __next_app__: () => u,
            originalPathname: () => p,
            pages: () => d,
            routeModule: () => m,
            tree: () => c,
          }),
          r(1254),
          r(2567),
          r(7824);
        var i = r(3282),
          s = r(5736),
          o = r(3906),
          a = r.n(o),
          n = r(6880),
          l = {};
        for (let e in n)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => n[e]);
        r.d(t, l);
        let c = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(r.bind(r, 1254)),
                    "/Users/andrewmorrison/code/projects/website-builder-tool/packages/template/app/page.tsx",
                  ],
                  metadata: {
                    icon: [
                      async (e) =>
                        (await Promise.resolve().then(r.bind(r, 6952))).default(
                          e,
                        ),
                    ],
                    apple: [],
                    openGraph: [],
                    twitter: [],
                    manifest: void 0,
                  },
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 2567)),
                "/Users/andrewmorrison/code/projects/website-builder-tool/packages/template/app/layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 7824, 23)),
                "next/dist/client/components/not-found-error",
              ],
              metadata: {
                icon: [
                  async (e) =>
                    (await Promise.resolve().then(r.bind(r, 6952))).default(e),
                ],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          d = [
            "/Users/andrewmorrison/code/projects/website-builder-tool/packages/template/app/page.tsx",
          ],
          p = "/page",
          u = { require: r, loadChunk: () => Promise.resolve() },
          m = new i.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: "/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      7487: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 736));
      },
      736: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => l });
        var i = r(3227),
          s = r(3677),
          o = r(6949),
          a = r(5168),
          n = r(6572);
        let l = () => {
          let [e, t] = (0, s.useState)(!1),
            [r, l] = (0, s.useState)(""),
            [c, d] = (0, s.useState)({ name: "", email: "", message: "" }),
            [p, u] = (0, s.useState)(!1),
            [m, x] = (0, s.useState)(0),
            g = [
              i.jsx(
                n.rJ,
                {
                  title: "Service 1",
                  description: "We provide top-notch web development services.",
                },
                1,
              ),
              i.jsx(
                n.rJ,
                {
                  title: "Service 2",
                  description:
                    "Our design services will help your brand stand out.",
                },
                2,
              ),
              i.jsx(
                n.rJ,
                {
                  title: "Service 3",
                  description: "Get comprehensive digital marketing solutions.",
                },
                3,
              ),
            ],
            h = [
              { src: "/web-avatar@2x.png", alt: "Image of Andy" },
              { src: "/web-avatar@2x.png", alt: "Another Image" },
              { src: "/web-avatar@2x.png", alt: "Third Image" },
            ];
          return (0, i.jsxs)(i.Fragment, {
            children: [
              i.jsx(n.NR, {}),
              i.jsx(n.yo, {
                title: "Welcome to Our Company",
                subtitle: "We create beautiful digital experiences",
                backgroundImage: "/web-avatar@2x.png",
                ctaText: "Learn More",
                onCtaClick: () => {
                  console.log("CTA button clicked");
                },
                align: "center",
                fullHeight: !0,
              }),
              (0, i.jsxs)(o.Z, {
                padding: 4,
                children: [
                  i.jsx(a.Z, {
                    variant: "h4",
                    gutterBottom: !0,
                    children: "Our Services",
                  }),
                  i.jsx(n.lr, { items: g, interval: 5e3 }),
                ],
              }),
              (0, i.jsxs)(o.Z, {
                padding: 4,
                children: [
                  i.jsx(a.Z, {
                    variant: "h4",
                    gutterBottom: !0,
                    children: "Example Usage of Dynamic Forms",
                  }),
                  i.jsx(o.Z, {
                    marginBottom: 4,
                    children: i.jsx(n.t, {
                      onSubmit: (e) => {
                        d(e), console.log("Contact Form Submitted:", e);
                      },
                    }),
                  }),
                  i.jsx(o.Z, {
                    marginBottom: 4,
                    children: i.jsx(n.oz, {
                      onSubmit: (e) => {
                        console.log("Newsletter Signup Submitted:", e);
                      },
                    }),
                  }),
                  (0, i.jsxs)(o.Z, {
                    children: [
                      i.jsx(a.Z, {
                        variant: "h6",
                        children: "Custom Form Field",
                      }),
                      i.jsx(n.Wi, {
                        label: "Custom Input",
                        value: r,
                        onChange: (e) => {
                          l(e);
                        },
                        required: !0,
                      }),
                      (0, i.jsxs)(a.Z, {
                        variant: "body1",
                        color: "textSecondary",
                        children: ["Current Form Field Value: ", r],
                      }),
                    ],
                  }),
                  c.name &&
                    (0, i.jsxs)(o.Z, {
                      marginTop: 4,
                      children: [
                        i.jsx(a.Z, {
                          variant: "h6",
                          children: "Submitted Contact Form Data:",
                        }),
                        (0, i.jsxs)(a.Z, { children: ["Name: ", c.name] }),
                        (0, i.jsxs)(a.Z, { children: ["Email: ", c.email] }),
                        (0, i.jsxs)(a.Z, {
                          children: ["Message: ", c.message],
                        }),
                      ],
                    }),
                ],
              }),
              (0, i.jsxs)(o.Z, {
                children: [
                  i.jsx(n.$0, {
                    title: "Our Services",
                    subtitle: "We provide the best services tailored for you",
                    textAlign: "center",
                    padding: 6,
                    children: (0, i.jsxs)(n.Sj, {
                      spacing: 4,
                      columns: { xs: 12, sm: 6, md: 4 },
                      children: [
                        i.jsx(n.rJ, {
                          title: "Service 1",
                          description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        }),
                        i.jsx(n.rJ, {
                          title: "Service 2",
                          description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        }),
                        i.jsx(n.rJ, {
                          title: "Service 3",
                          description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        }),
                        i.jsx(n.rJ, {
                          title: "Service 4",
                          description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)(n.$0, {
                    padding: 4,
                    children: [
                      i.jsx(a.Z, { variant: "h5", children: "About Us" }),
                      i.jsx(n.MS, {
                        children: i.jsx(n.ds, {
                          children: i.jsx(n.Z3, {
                            children: i.jsx(a.Z, {
                              variant: "body1",
                              children:
                                "We are a company dedicated to providing high-quality services to meet your needs. Our experienced team is here to assist you in every step of the way.",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsx(n.hJ, {
                images: h,
                spacing: 2,
                columns: { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 },
                onClickImage: (e) => {
                  x(e), u(!0);
                },
              }),
              i.jsx(n.ey, {
                images: h,
                open: p,
                onClose: () => {
                  u(!1);
                },
                initialIndex: m,
              }),
              i.jsx(n.vj, {
                title: "demo video",
                src: "https://www.youtube.com/embed/pCTTOnSpupo",
              }),
              (0, i.jsxs)("div", {
                children: [
                  i.jsx("button", {
                    onClick: () => t(!0),
                    children: "Open Modal",
                  }),
                  i.jsx(n.u_, {
                    open: e,
                    onClose: () => t(!1),
                    title: "My Modal",
                    children: i.jsx("p", {
                      children: "This is a modal content.",
                    }),
                  }),
                  i.jsx("button", {
                    onClick: () => u(!0),
                    children: "Open Lightbox",
                  }),
                ],
              }),
              i.jsx(n.bv, {
                options: [
                  {
                    title: "Basic",
                    price: "$9.99/month",
                    features: ["1 Project", "Basic Support", "500MB Storage"],
                    buttonText: "Get Started",
                    onButtonClick: () => alert("Basic plan selected"),
                  },
                  {
                    title: "Pro",
                    price: "$19.99/month",
                    features: ["5 Projects", "Priority Support", "5GB Storage"],
                    buttonText: "Choose Pro",
                    onButtonClick: () => alert("Pro plan selected"),
                  },
                  {
                    title: "Enterprise",
                    price: "$49.99/month",
                    features: [
                      "Unlimited Projects",
                      "24/7 Support",
                      "Unlimited Storage",
                    ],
                    buttonText: "Contact Us",
                    onButtonClick: () => alert("Enterprise plan selected"),
                  },
                ],
              }),
            ],
          });
        };
      },
      1254: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => i });
        let i = (0, r(3189).createProxy)(
          String.raw`/Users/andrewmorrison/code/projects/website-builder-tool/packages/template/app/page.tsx#default`,
        );
      },
      6952: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s });
        var i = r(7201);
        let s = (e) => [
          {
            type: "image/x-icon",
            sizes: "16x16",
            url: (0, i.fillMetadataSegment)(".", e.params, "favicon.ico") + "",
          },
        ];
      },
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    i = t.X(0, [522, 853, 201, 407], () => r(5230));
  module.exports = i;
})();
