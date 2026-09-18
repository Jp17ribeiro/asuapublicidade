import { spawnSync } from "node:child_process";
import { cpSync, existsSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const out = join(root, "out");
const nextCli = join(root, "node_modules", "next", "dist", "bin", "next");

const result = spawnSync(process.execPath, [nextCli, "build"], {
  cwd: root,
  env: {
    ...process.env,
    BUILD_TARGET: "github-pages",
    NEXT_PUBLIC_BASE_PATH: "/asuapublicidade",
    NEXT_PUBLIC_SITE_URL: "https://jp17ribeiro.github.io/asuapublicidade",
  },
  stdio: "inherit",
});

if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status || 1);
if (!existsSync(join(out, "index.html"))) throw new Error("Exportação sem index.html");

// GitHub Pages serves this repository from main's root.
const generatedAssets = join(root, "_next");
const insideRoot = relative(root, generatedAssets);
if (!insideRoot || insideRoot.startsWith("..") || resolve(root, insideRoot) !== generatedAssets) {
  throw new Error("Pasta de destino fora do projeto");
}
rmSync(generatedAssets, { recursive: true, force: true });

for (const name of readdirSync(out)) {
  cpSync(join(out, name), join(root, name), { recursive: true, force: true });
}
writeFileSync(join(root, ".nojekyll"), "");
console.log("GitHub Pages: arquivos estáticos copiados para a raiz do repositório.");
