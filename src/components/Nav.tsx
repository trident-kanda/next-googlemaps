import Link from "next/link";
import { useRouter } from "next/router";
const Nav = () => {
  const { pathname } = useRouter();
  return (
    <nav className="sm:rounded-lg bg-white flex shadow">
      {}
      <Link href="/">
        <a className="flex-1 py-4 text-center font-medium text-xl text-gray-500 hover:bg-gray-50 hover:text-black">
          基本
        </a>
      </Link>
      <Link href="/marker">
        <a className="flex-1 py-4 text-center font-medium text-xl text-gray-500 hover:bg-gray-50 hover:text-black">
          マーカーセット
        </a>
      </Link>
      <Link href="/geocoder">
        <a className="flex-1 py-4 text-center font-medium text-xl text-gray-500 hover:bg-gray-50 hover:text-black">
          検索
        </a>
      </Link>
    </nav>
  );
};

export default Nav;
