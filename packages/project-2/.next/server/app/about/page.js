(() => {
  var e = {};
  (e.id = 301),
    (e.ids = [301]),
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
      5071: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => c,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => m,
            tree: () => l,
          }),
          r(2080),
          r(2567),
          r(7824);
        var a = r(3282),
          s = r(5736),
          o = r(3906),
          i = r.n(o),
          n = r(6880),
          p = {};
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
            ].indexOf(e) && (p[e] = () => n[e]);
        r.d(t, p);
        let l = [
            "",
            {
              children: [
                "about",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 2080)),
                        "/Users/andrewmorrison/code/projects/website-builder-tool/packages/project-2/app/about/page.tsx",
                      ],
                    },
                  ],
                },
                {
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
                "/Users/andrewmorrison/code/projects/website-builder-tool/packages/project-2/app/layout.tsx",
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
            "/Users/andrewmorrison/code/projects/website-builder-tool/packages/project-2/app/about/page.tsx",
          ],
          u = "/about/page",
          c = { require: r, loadChunk: () => Promise.resolve() },
          m = new a.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: "/about/page",
              pathname: "/about",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      1263: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 4073));
      },
      4073: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o });
        var a = r(3227),
          s = r(6572);
        let o = () =>
          (0, a.jsxs)(a.Fragment, {
            children: [a.jsx(s.NR, {}), a.jsx(s.yo, { title: "Title" })],
          });
      },
      2080: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => a });
        let a = (0, r(3189).createProxy)(
          String.raw`/Users/andrewmorrison/code/projects/website-builder-tool/packages/project-2/app/about/page.tsx#default`,
        );
      },
      6952: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s });
        var a = r(7201);
        let s = (e) => [
          {
            type: "image/x-icon",
            sizes: "16x16",
            url: (0, a.fillMetadataSegment)(".", e.params, "favicon.ico") + "",
          },
        ];
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [522, 853, 201, 439], () => r(5071));
  module.exports = a;
})();
