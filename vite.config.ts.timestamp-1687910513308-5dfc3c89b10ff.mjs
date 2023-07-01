// vite.config.ts
import { defineConfig } from "file:///workspace/node_modules/vite/dist/node/index.js";
import react from "file:///workspace/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: { app: "./src/app/app.tsx" },
        output: {
          entryFileNames: `[name].js`
        }
      },
      outDir: "../dist"
    },
    hmr: {
      host: "0.0.0.0",
      overlay: true,
      clientPort: 8081
    },
    plugins: [
      react({
        include: "**/*.{jsx,tsx}"
      })
    ],
    root: "src",
    resolve: {
      alias: {
        "@components/": "./app/components/"
      }
    },
    server: {
      host: true,
      port: 3e3,
      strictPort: true
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvd29ya3NwYWNlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy93b3Jrc3BhY2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnVpbGQ6IHtcbiAgICAgICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogeyBhcHA6ICcuL3NyYy9hcHAvYXBwLnRzeCcgfSxcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6IGBbbmFtZV0uanNgLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXREaXI6ICcuLi9kaXN0JyxcbiAgICAgICAgfSxcbiAgICAgICAgaG1yOiB7XG4gICAgICAgICAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgICAgICAgICBvdmVybGF5OiB0cnVlLFxuICAgICAgICAgICAgY2xpZW50UG9ydDogODA4MSxcbiAgICAgICAgfSxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgcmVhY3Qoe1xuICAgICAgICAgICAgICAgIGluY2x1ZGU6ICcqKi8qLntqc3gsdHN4fScsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgcm9vdDogJ3NyYycsXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAgICAgJ0Bjb21wb25lbnRzLyc6ICcuL2FwcC9jb21wb25lbnRzLycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgICAgIGhvc3Q6IHRydWUsXG4gICAgICAgICAgICBwb3J0OiAzMDAwLFxuICAgICAgICAgICAgc3RyaWN0UG9ydDogdHJ1ZVxuICAgICAgICB9XG4gICAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnTixTQUFTLG9CQUFvQjtBQUM3TyxPQUFPLFdBQVc7QUFFbEIsSUFBTyxzQkFBUSxhQUFhLE1BQU07QUFDOUIsU0FBTztBQUFBLElBQ0gsT0FBTztBQUFBLE1BQ0gsZUFBZTtBQUFBLFFBQ1gsT0FBTyxFQUFFLEtBQUssb0JBQW9CO0FBQUEsUUFDbEMsUUFBUTtBQUFBLFVBQ0osZ0JBQWdCO0FBQUEsUUFDcEI7QUFBQSxNQUNKO0FBQUEsTUFDQSxRQUFRO0FBQUEsSUFDWjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0QsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDTCxNQUFNO0FBQUEsUUFDRixTQUFTO0FBQUEsTUFDYixDQUFDO0FBQUEsSUFDTDtBQUFBLElBQ0EsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0gsZ0JBQWdCO0FBQUEsTUFDcEI7QUFBQSxJQUNKO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixZQUFZO0FBQUEsSUFDaEI7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
