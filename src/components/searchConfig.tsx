import { SandboxEndpoints } from "@yext/search-headless-react";

const searchConfig = {
  apiKey: import.meta.env.API_KEY,
  experienceKey: import.meta.env.EXP_KEY,
  locale: "en",
  verticalKey: "restaurants",
  endpoints: SandboxEndpoints,
};

export default searchConfig;
