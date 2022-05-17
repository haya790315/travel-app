const esbuild = require("esbuild");
const path = require("path");

esbuild
  .build({
    entryPoints: [path.resolve(__dirname, "src/index.js")],
    bundle: true,
    outdir: "build",
    minify: false,
    platform: "browser",
    format:"cjs",
    sourcemap: true,
    target: ["chrome58", "firefox57"],
    loader: {
      ".js": "jsx",
      ".jpg": "file",
      ".png": "file",
      ".mp4": "file",
    },
  })
  .catch((err) => console.log(err));
