const esbuild = require("esbuild");

esbuild
  .serve(
    {
      servedir: "public",
      port: 8000,
    },
    {
      entryPoints: ["./src/index.js"],
      outfile: "./public/js/app.js",
      bundle: true,
      loader: {
        ".js": "jsx",
      }
    }
  )
  .catch(() => process.exit());
