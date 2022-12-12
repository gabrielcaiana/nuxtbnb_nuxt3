import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import path from "path";
import GithubActionsReporter from "vitest-github-actions-reporter";

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: "jsdom",
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/test/**",
      "**/.{idea,git,cache,output,temp}/**",
    ],
    reporters: process.env.GITHUB_ACTIONS
      ? ["default", new GithubActionsReporter()]
      : "default",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "."),
    },
  },
});
