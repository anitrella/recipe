import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    resolve: {
      alias: {
        views: "/src/views",
        components: "/src/components",
        services: "/src/services",
        utility: "/src/utility",
        queries: "/src/queries",
        assets: "/src/assets",
        layout: "/src/layout",
      },
    },
    plugins: [
      react(),
      eslint(),
      viteTsconfigPaths(),
      svgrPlugin({
        svgrOptions: {
          icon: true,
          // ...svgr options (https://react-svgr.com/docs/options/)
        },
      }),
    ],
  };
});
