import Container from "components/Container";
import { SiteMap, siteMaps } from "data/sitemaps";
import Link from "next/link";

const SiteMapPage = ({ sitemap }: { sitemap: SiteMap }) => {
  const sitemapSorted = sitemap.sites.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Container title="Portfolio – Minh Le">
      <div className="max-2-xl md:max-w-5xl w-full mx-auto pb-16 text-gray-600 dark:text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16">
          {sitemap.name}
        </h1>

        <p className="text-sm md:text-xl mb-5 uppercase font-medium">
          Total pages: {sitemapSorted.length}
        </p>

        <ul className="text-sm md:text-lg flex flex-wrap gap-3">
          {sitemapSorted?.map((item) => (
            <li key={item.name}>
              <Link
                href={item.url}
                target="_blank"
                className="text-white dark:hover:text-teal-500 transition inline-flex bg-black/30 hover:bg-black/50 dark:bg-white/10 dark:hover:bg-white/20 rounded-lg px-5 py-2"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  return {
    paths: siteMaps.map((item) => ({ params: { slug: item.slug } })),
    fallback: "blocking"
  };
}

export async function getStaticProps({ params, preview = false }) {
  const sitemap = siteMaps.find((site) => site.slug === params.slug);

  if (!sitemap) {
    return { notFound: true };
  }

  return {
    props: {
      sitemap
    }
  };
}
export default SiteMapPage;
