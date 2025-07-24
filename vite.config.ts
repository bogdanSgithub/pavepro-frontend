import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // 👈 necessary to allow LAN/public access
    allowedHosts: true, // 👈 or specify your ngrok subdomain(s)
    port: 5173, // optional, can be omitted
  },
})