import useNav from "@/hooks/useNav";
import Image from "next/image";
import NavItem from "./NavItem";

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
  } = useNav();

  if (loading) return <p className="text-center m-5">Loading...</p>;
  if (error)
    return (
      <p className="text-red-500 text-center m-5">
        Error: {error}, please refresh the page.
      </p>
    );

  return (
    <div className="flex flex-1 bg-gray-100">
      <aside className="bg-white w-80 py-4">
        <div className="flex justify-between items-center mb-4 px-4 pb-4 border-0 border-b border-solid border-[#E9E9E9]">
          <h1 className="text-lg font-bold">Menu</h1>
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
            {navItems.map((item) => (
              <NavItem
                item={item}
                key={item.id}
                onClick={onClickItem}
                isEditMode={isEditMode}
                setVisibility={setVisibility}
                setTitle={setTitle}
              />
            ))}
          </ul>
        </nav>
      </aside>
      <main className="p-6 overflow-auto">{children}</main>
    </div>
  );
};

export default Sidebar;
