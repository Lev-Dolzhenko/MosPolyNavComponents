import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { VitePWA } from "vite-plugin-pwa";
import { ViteAliases } from "vite-aliases";
import { ViteCompress } from "vite-plugin-compress";
import { ViteEnv } from "./build/env";
import ViteComponents from "vite-plugin-components";
import Markdown from "vite-plugin-md";
import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteCompress({
      verbose: true,
      disable: false,
      threshold: 10240,
    }),
    ViteAliases({
      useTypescript: true,
      root: ".",
    }),
    ViteEnv({
      loadEnv: false,
    }),
    VitePWA(),
    ViteComponents({
      globalComponentsDeclaration: true,
    }),
    Markdown(),
    ViteIcons(),
    ViteIconsResolver(),
    VitePluginGhPages(),
  ],
});
