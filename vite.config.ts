import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Standard TanStack Start + Nitro setup. On Vercel, Nitro detects the platform
// and emits the Vercel deployment output automatically.
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      // Use src/server.ts (SSR error wrapper) as the server entry.
      server: { entry: "server" },
    }),
    nitro(),
    viteReact(),
    tailwindcss(),
  ],
});
