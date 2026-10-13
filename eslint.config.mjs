// Summary: ESLint flat config using the Next.js core-web-vitals preset (replaces the removed `next lint`).
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    ignores: [".contentlayer/**", ".next/**", "archived-blog/**", "archived-project/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
