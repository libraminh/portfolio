import { githubPagesUrl } from "data/constant";

export const bookingAppSchema = {
  name: "Booking App",
  slug: "bookingapp",
  sites: [
    {
      name: "Contact",
      url: `${githubPagesUrl}/bookingapp/contact.html`,
    },
    {
      name: "Home Page",
      url: `${githubPagesUrl}/bookingapp/index.html`,
    },
    {
      name: "Price",
      url: `${githubPagesUrl}/bookingapp/price.html`,
    },
    {
      name: "Service",
      url: `${githubPagesUrl}/bookingapp/service.html`,
    },
  ],
};
