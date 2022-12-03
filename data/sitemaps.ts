import { bookingAppSchema } from "./sitemap-schema/booking-app";
import { bridalStudioSchema } from "./sitemap-schema/bridal-studio";
import { flightHacksSchema } from "./sitemap-schema/flight-hacks";
import { ischoolSchema } from "./sitemap-schema/ischool";
import { kenhcuoiSchema } from "./sitemap-schema/kenhcuoi";
import { magazineSchema } from "./sitemap-schema/magazine";

export const siteMaps = [
  magazineSchema,
  kenhcuoiSchema,
  ischoolSchema,
  bridalStudioSchema,
  bookingAppSchema,
  flightHacksSchema,
];

interface Site {
  name: string;
  url: string;
}

export interface SiteMap {
  name: string;
  slug: string;
  sites: Site[];
}
