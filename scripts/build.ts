import esbuild, { Loader, Platform, Plugin } from "esbuild"

const configs = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node" as Platform,
  outdir: "dist",
  sourcemap: true,
  loader: {
    ".node": "copy" as Loader,
  },
  external: [],
  plugins: [] as Plugin[],
}

void (async () => {
  process.stdout.write("Building...")
  await esbuild.build(configs)
  console.log("OK")
})()
