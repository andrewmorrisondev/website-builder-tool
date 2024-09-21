(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    3265: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 3774));
    },
    3774: function (e, t, i) {
      "use strict";
      i.r(t);
      var s = i(7573),
        r = i(7653),
        n = i(3474),
        o = i(9984),
        a = i(7907);
      t.default = () => {
        let [e, t] = (0, r.useState)(!1),
          [i, l] = (0, r.useState)(""),
          [c, d] = (0, r.useState)({ name: "", email: "", message: "" }),
          [u, m] = (0, r.useState)(!1),
          [p, x] = (0, r.useState)(0),
          h = [
            (0, s.jsx)(
              a.rJ,
              {
                title: "Service 1",
                description: "We provide top-notch web development services.",
              },
              1,
            ),
            (0, s.jsx)(
              a.rJ,
              {
                title: "Service 2",
                description:
                  "Our design services will help your brand stand out.",
              },
              2,
            ),
            (0, s.jsx)(
              a.rJ,
              {
                title: "Service 3",
                description: "Get comprehensive digital marketing solutions.",
              },
              3,
            ),
          ],
          g = [
            { src: "/web-avatar@2x.png", alt: "Image of Andy" },
            { src: "/web-avatar@2x.png", alt: "Another Image" },
            { src: "/web-avatar@2x.png", alt: "Third Image" },
          ];
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(a.NR, {}),
            (0, s.jsx)(a.yo, {
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
            (0, s.jsxs)(n.Z, {
              padding: 4,
              children: [
                (0, s.jsx)(o.Z, {
                  variant: "h4",
                  gutterBottom: !0,
                  children: "Our Services",
                }),
                (0, s.jsx)(a.lr, { items: h, interval: 5e3 }),
              ],
            }),
            (0, s.jsxs)(n.Z, {
              padding: 4,
              children: [
                (0, s.jsx)(o.Z, {
                  variant: "h4",
                  gutterBottom: !0,
                  children: "Example Usage of Dynamic Forms",
                }),
                (0, s.jsx)(n.Z, {
                  marginBottom: 4,
                  children: (0, s.jsx)(a.t, {
                    onSubmit: (e) => {
                      d(e), console.log("Contact Form Submitted:", e);
                    },
                  }),
                }),
                (0, s.jsx)(n.Z, {
                  marginBottom: 4,
                  children: (0, s.jsx)(a.oz, {
                    onSubmit: (e) => {
                      console.log("Newsletter Signup Submitted:", e);
                    },
                  }),
                }),
                (0, s.jsxs)(n.Z, {
                  children: [
                    (0, s.jsx)(o.Z, {
                      variant: "h6",
                      children: "Custom Form Field",
                    }),
                    (0, s.jsx)(a.Wi, {
                      label: "Custom Input",
                      value: i,
                      onChange: (e) => {
                        l(e);
                      },
                      required: !0,
                    }),
                    (0, s.jsxs)(o.Z, {
                      variant: "body1",
                      color: "textSecondary",
                      children: ["Current Form Field Value: ", i],
                    }),
                  ],
                }),
                c.name &&
                  (0, s.jsxs)(n.Z, {
                    marginTop: 4,
                    children: [
                      (0, s.jsx)(o.Z, {
                        variant: "h6",
                        children: "Submitted Contact Form Data:",
                      }),
                      (0, s.jsxs)(o.Z, { children: ["Name: ", c.name] }),
                      (0, s.jsxs)(o.Z, { children: ["Email: ", c.email] }),
                      (0, s.jsxs)(o.Z, { children: ["Message: ", c.message] }),
                    ],
                  }),
              ],
            }),
            (0, s.jsxs)(n.Z, {
              children: [
                (0, s.jsx)(a.$0, {
                  title: "Our Services",
                  subtitle: "We provide the best services tailored for you",
                  textAlign: "center",
                  padding: 6,
                  children: (0, s.jsxs)(a.Sj, {
                    spacing: 4,
                    columns: { xs: 12, sm: 6, md: 4 },
                    children: [
                      (0, s.jsx)(a.rJ, {
                        title: "Service 1",
                        description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      }),
                      (0, s.jsx)(a.rJ, {
                        title: "Service 2",
                        description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      }),
                      (0, s.jsx)(a.rJ, {
                        title: "Service 3",
                        description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      }),
                      (0, s.jsx)(a.rJ, {
                        title: "Service 4",
                        description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)(a.$0, {
                  padding: 4,
                  children: [
                    (0, s.jsx)(o.Z, { variant: "h5", children: "About Us" }),
                    (0, s.jsx)(a.MS, {
                      children: (0, s.jsx)(a.ds, {
                        children: (0, s.jsx)(a.Z3, {
                          children: (0, s.jsx)(o.Z, {
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
            (0, s.jsx)(a.hJ, {
              images: g,
              spacing: 2,
              columns: { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 },
              onClickImage: (e) => {
                x(e), m(!0);
              },
            }),
            (0, s.jsx)(a.ey, {
              images: g,
              open: u,
              onClose: () => {
                m(!1);
              },
              initialIndex: p,
            }),
            (0, s.jsx)(a.vj, {
              title: "demo video",
              src: "https://www.youtube.com/embed/pCTTOnSpupo",
            }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("button", {
                  onClick: () => t(!0),
                  children: "Open Modal",
                }),
                (0, s.jsx)(a.u_, {
                  open: e,
                  onClose: () => t(!1),
                  title: "My Modal",
                  children: (0, s.jsx)("p", {
                    children: "This is a modal content.",
                  }),
                }),
                (0, s.jsx)("button", {
                  onClick: () => m(!0),
                  children: "Open Lightbox",
                }),
              ],
            }),
            (0, s.jsx)(a.bv, {
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
  },
  function (e) {
    e.O(0, [252, 907, 293, 286, 744], function () {
      return e((e.s = 3265));
    }),
      (_N_E = e.O());
  },
]);
