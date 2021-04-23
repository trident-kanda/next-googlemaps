import { ReactNode, VFC } from "react";

const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className=" min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl lg:max-w-5xl mx-auto pt-6 sm:pt-8">
        <main>{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
