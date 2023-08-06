import type { Config } from "tailwindcss";

import baseConfig from "@sik/tailwind";

export default {
  content: [...baseConfig.content, "../../library/ui/src/**/*.{ts,tsx}"],
  presets: [baseConfig],
} satisfies Config;
