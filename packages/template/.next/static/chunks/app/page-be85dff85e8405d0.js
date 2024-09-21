(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    3265: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 3774));
    },
    3774: function (e, t, i) {
      "use strict";
      i.r(t);
      var r = i(7573),
        s = i(7653),
        n = i(3474),
        o = i(9984),
        l = i(8429);
      t.default = () => {
        let [e, t] = (0, s.useState)(!1),
          [i, c] = (0, s.useState)(""),
          [a, d] = (0, s.useState)({ name: "", email: "", message: "" }),
          u = [
            (0, r.jsx)(
              l.rJ,
              {
                title: "Service 1",
                description: "We provide top-notch web development services.",
              },
              1,
            ),
            (0, r.jsx)(
              l.rJ,
              {
                title: "Service 2",
                description:
                  "Our design services will help your brand stand out.",
              },
              2,
            ),
            (0, r.jsx)(
              l.rJ,
              {
                title: "Service 3",
                description: "Get comprehensive digital marketing solutions.",
              },
              3,
            ),
          ];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l.NR, {}),
            (0, r.jsx)(l.yo, {
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
            (0, r.jsxs)(n.Z, {
              padding: 4,
              children: [
                (0, r.jsx)(o.Z, {
                  variant: "h4",
                  gutterBottom: !0,
                  children: "Our Services",
                }),
                (0, r.jsx)(l.lr, { items: u, interval: 5e3 }),
              ],
            }),
            (0, r.jsxs)(n.Z, {
              padding: 4,
              children: [
                (0, r.jsx)(o.Z, {
                  variant: "h4",
                  gutterBottom: !0,
                  children: "Example Usage of Dynamic Forms",
                }),
                (0, r.jsx)(n.Z, {
                  marginBottom: 4,
                  children: (0, r.jsx)(l.t, {
                    onSubmit: (e) => {
                      d(e), console.log("Contact Form Submitted:", e);
                    },
                  }),
                }),
                (0, r.jsx)(n.Z, {
                  marginBottom: 4,
                  children: (0, r.jsx)(l.oz, {
                    onSubmit: (e) => {
                      console.log("Newsletter Signup Submitted:", e);
                    },
                  }),
                }),
                (0, r.jsxs)(n.Z, {
                  children: [
                    (0, r.jsx)(o.Z, {
                      variant: "h6",
                      children: "Custom Form Field",
                    }),
                    (0, r.jsx)(l.Wi, {
                      label: "Custom Input",
                      value: i,
                      onChange: (e) => {
                        c(e);
                      },
                      required: !0,
                    }),
                    (0, r.jsxs)(o.Z, {
                      variant: "body1",
                      color: "textSecondary",
                      children: ["Current Form Field Value: ", i],
                    }),
                  ],
                }),
                a.name &&
                  (0, r.jsxs)(n.Z, {
                    marginTop: 4,
                    children: [
                      (0, r.jsx)(o.Z, {
                        variant: "h6",
                        children: "Submitted Contact Form Data:",
                      }),
                      (0, r.jsxs)(o.Z, { children: ["Name: ", a.name] }),
                      (0, r.jsxs)(o.Z, { children: ["Email: ", a.email] }),
                      (0, r.jsxs)(o.Z, { children: ["Message: ", a.message] }),
                    ],
                  }),
              ],
            }),
            (0, r.jsxs)(n.Z, {
              children: [
                (0, r.jsx)(l.$0, {
                  title: "Our Services",
                  subtitle: "We provide the best services tailored for you",
                  textAlign: "center",
                  padding: 6,
                  children: (0, r.jsxs)(l.Sj, {
                    spacing: 4,
                    columns: { xs: 12, sm: 6, md: 4 },
                    children: [
                      (0, r.jsx)(l.rJ, {
                        title: "Service 1",
                        description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      }),
                      (0, r.jsx)(l.rJ, {
                        title: "Service 2",
                        description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      }),
                      (0, r.jsx)(l.rJ, {
                        title: "Service 3",
                        description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      }),
                      (0, r.jsx)(l.rJ, {
                        title: "Service 4",
                        description:
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)(l.$0, {
                  padding: 4,
                  children: [
                    (0, r.jsx)(o.Z, { variant: "h5", children: "About Us" }),
                    (0, r.jsx)(l.MS, {
                      children: (0, r.jsx)(l.ds, {
                        children: (0, r.jsx)(l.Z3, {
                          children: (0, r.jsx)(o.Z, {
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
            (0, r.jsx)(l.vj, {
              title: "demo video",
              src: "https://www.youtube.com/embed/pCTTOnSpupo",
            }),
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("button", {
                  onClick: () => t(!0),
                  children: "Open Modal",
                }),
                (0, r.jsx)(l.u_, {
                  open: e,
                  onClose: () => t(!1),
                  title: "My Modal",
                  children: (0, r.jsx)("p", {
                    children: "This is a modal content.",
                  }),
                }),
              ],
            }),
            (0, r.jsx)(l.bv, {
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
    e.O(0, [252, 429, 293, 286, 744], function () {
      return e((e.s = 3265));
    }),
      (_N_E = e.O());
  },
]);
