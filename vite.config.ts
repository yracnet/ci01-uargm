import { defineConfig } from "vite";
import { pluginAPIRoutes } from "vite-plugin-api-routes";
import pluginReact from "@vitejs/plugin-react-swc";

const pluginHtml = () => {
  return {
    name: "html-transform",
    transformIndexHtml(html: string) {
      ["RUN_NUMBER", "BRANCH_NAME", "COMMIT_ID", "BUILD_DATE"].forEach(
        (key) => {
          const value = process.env[key] || `¿¿${key}??`;
          html = html.replace(`__${key}__`, value);
        }
      );
      return html;
    },
  };
};
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    outDir: "dist/public",
  },
  plugins: [
    pluginHtml(),
    pluginReact(),
    pluginAPIRoutes({
      routeBase: "api",
      dirs: [
        {
          dir: "./src/server/api",
          route: "",
        },
      ],
      outDir: "dist/server",
    }),
  ],
});
