import { createIPXHandler } from "@netlify/ipx";

export const handler = createIPXHandler({
  domains: ["res.cloudinary.com"]
});
