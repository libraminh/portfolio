import { ischoolSchema } from "./sitemap-schema/ischool";
import { kenhcuoiSchema } from "./sitemap-schema/kenhcuoi";
import { magazineSchema } from "./sitemap-schema/magazine";

export const siteMaps = [magazineSchema, kenhcuoiSchema, ischoolSchema];

interface Site {
  name: string;
  url: string;
}

export interface SiteMap {
  name: string;
  slug: string;
  sites: Site[];
}
