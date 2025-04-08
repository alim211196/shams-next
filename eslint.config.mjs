import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    settings: {
      next: {
        rootDir: ["app/"], // Adjust this based on your project structure
      },
    },
    overrides: [
      {
        files: ["*.js", "*.jsx"],
        parser: "espree",
      },
    ],
  },
];

export default eslintConfig;
