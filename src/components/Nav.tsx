import Link from "next/link";
import { useRouter } from "next/router";
const Nav = () => {
  const { pathname } = useRouter();
  return (
    <nav className="sm:rounded-lg bg-white flex shadow">
      <Link href="/">
        <a className="flex-1 py-4 text-center font-medium text-xl text-gray-500 hover:bg-gray-50 hover:text-black rounded-l-lg">
          {pathname === "/" && <span className=" text-green-500">基本</span>}
          {pathname !== "/" && <span>基本</span>}
        </a>
      </Link>
      <Link href="/marker">
        <a className="flex-1 py-4 text-center font-medium text-xl text-gray-500 hover:bg-gray-50 hover:text-black border-l border-r border-gray-100">
          {pathname === "/marker" && (
            <span className=" text-green-500">クリック</span>
          )}
          {pathname !== "/marker" && <span>クリック</span>}
        </a>
      </Link>
      <Link href="/search">
        <a className="flex-1 py-4 text-center font-medium text-xl text-gray-500 hover:bg-gray-50 hover:text-black rounded-r-lg">
          {pathname === "/search" && (
            <span className=" text-green-500">検索</span>
          )}
          {pathname !== "/search" && <span>検索</span>}
        </a>
      </Link>
    </nav>
  );
};

export default Nav;
