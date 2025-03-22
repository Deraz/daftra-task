import useNav from "@/hooks/useNav";
import Image from "next/image";
import NavItem from "./NavItem";
import { useState } from "react";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const {
    navItems,
    loading,
    error,
    onClickItem,
    setIsEditMode,
    isEditMode,
    setVisibility,
    discardChanges,
    saveChanges,
    setTitle,
    moveItem,
  } = useNav();
  const [showSideBar, setShowSideBar] = useState(false);

  if (loading) return <p className="text-center m-5">Loading...</p>;
  if (error)
    return (
      <p className="text-red-500 text-center m-5">
        Error: {error}, please refresh the page.
      </p>
    );

  return (
    <div className="flex flex-1 flex-wrap md:flex-nowrap bg-gray-100">
      <aside
        className={`bg-white pt-2 w-full h-screen fixed top-0 right-0 z-50 md:w-96 md:static md:h-auto md:z-30 
      transition-transform duration-500 ease-in-out
      ${showSideBar ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-4 p-4 border-0 border-b border-solid border-[#E9E9E9]">
          <div className="flex gap-2 items-center">
            <Image
              src="/back-arrow.png"
              alt="back"
              width={12}
              height={12}
              onClick={() => {
                setShowSideBar(false);
                setIsEditMode(false);
              }}
              className="cursor-pointer md:hidden"
            />
            <h1 className="text-lg">Menu</h1>
          </div>
          <span className="flex gap-2 items-center">
            {!isEditMode ? (
              <Image
                src="/cog.png"
                alt="settings"
                width={30}
                height={30}
                onClick={() => setIsEditMode(true)}
                className="cursor-pointer"
              />
            ) : (
              <>
                <Image
                  src="/close.png"
                  alt="discard"
                  width={30}
                  height={30}
                  onClick={discardChanges}
                  className="cursor-pointer"
                />
                <Image
                  src="/check.png"
                  alt="save"
                  width={30}
                  height={30}
                  onClick={saveChanges}
                  className="cursor-pointer"
                />
              </>
            )}
          </span>
        </div>
        <nav>
          <ul className="space-y-2 px-2">
            {navItems.map((item, index) => (
              <NavItem
                item={item}
                key={item.id}
                onClick={onClickItem}
                isEditMode={isEditMode}
                setVisibility={setVisibility}
                setTitle={setTitle}
                index={index}
                moveItem={moveItem}
              />
            ))}
          </ul>
        </nav>
      </aside>
      <main className="p-6 overflow-auto w-full">{children}</main>
      <a
        className="hidden"
        onClick={() => setShowSideBar(true)}
        id="show-side-bar-trigger"
      />
    </div>
  );
};

export default Sidebar;
