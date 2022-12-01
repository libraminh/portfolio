import MobileMenu from "./MobileMenu";
import NextLink from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      className={classNames(
        isActive
          ? "font-semibold text-gray-800 dark:text-gray-200"
          : "font-normal text-gray-600 dark:text-gray-400",
        "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
}

const Navbar = () => {
  return (
    <div className="ml-[-0.60rem]">
      <MobileMenu />
      <NavItem href="/" text="Home" />
      <NavItem href="/about" text="About" />
      <NavItem href="/portfolio" text="Portfolio" />
      {/* <NavItem href="/sitemap" text="Site Map" /> */}
    </div>
  );
};

export default Navbar;
