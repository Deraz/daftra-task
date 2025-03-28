import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const navItems = [
    { title: "Home", icon: "/home.png" },
    { title: "Jobs", icon: "/jobs.png" },
    { title: "Employers", icon: "/employers.png" },
    { isVerticalRule: true },
    { title: "Notifications", icon: "/notifications.png" },
    { title: "Messaging", icon: "/messaging.png" },
    { title: "Profile ▼", icon: "/profile.png", hasMenu: true },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-40 sticky top-0 flex justify-between items-center bg-black shadow-md px-4 py-2 flex-row-reverse md:flex-row">
      <div className="flex items-center gap-14">
        <Image src="/logo.png" alt="logo" width={81} height={27} />
      </div>
      <div className="items-center gap-12 hidden md:flex">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`text-[#E6E6E6] flex flex-col items-center gap-1 cursor-pointer ${
              item.hasMenu ? "relative" : ""
            }`}
            onClick={() => {
              if (item.hasMenu) setIsOpen((prev) => !prev);
            }}
          >
            {item.isVerticalRule ? (
              <div className="h-12 bg-[#D6D6D699] w-0.5" />
            ) : (
              <>
                <Image
                  src={("/navbar-white" + item.icon) as string}
                  alt={item.title as string}
                  width={28}
                  height={28}
                  className="hover:opacity-80"
                />
                <span className="hover:opacity-80 text-sm">{item.title}</span>
              </>
            )}
            {item.hasMenu && isOpen && (
              <div className="absolute top-[75px] right-0 mt-2 w-70 bg-white shadow-lg rounded-lg flex-col py-2 px-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={item.icon as string}
                      alt={item.title as string}
                      width={70}
                      height={70}
                    />
                    <div className="flex flex-col">
                      <span className="text-black">Ahmed Amaar</span>
                      <span className="text-[#707070]">UX UI designer</span>
                    </div>
                  </div>
                  <Image
                    src="/chevron-right.png"
                    alt="chevron"
                    width={8}
                    height={8}
                    className="h-fit"
                  />
                </div>
                <div className="flex flex-col gap-2 text-[#707070] border-0 border-y border-solid border-[#F0F0F0] my-4 -mx-4 p-4">
                  <span>Settings and privacy</span>
                  <span>Language</span>
                  <span>Help and privacy</span>
                </div>
                <div className="text-[#ED1F03] mb-2">Logout</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="items-center gap-12 flex md:hidden">
        {navItems
          .filter((i) => i.hasMenu)
          .map((item, index) => (
            <div
              key={index}
              className={`text-[#E6E6E6] flex flex-col items-center gap-1 cursor-pointer ${
                item.hasMenu ? "relative" : ""
              }`}
              onClick={() => {
                if (item.hasMenu) setIsOpen(true);
              }}
            >
              {item.isVerticalRule ? (
                <div className="h-12 bg-[#D6D6D699] w-0.5" />
              ) : (
                <div className="relative">
                  <Image
                    src={item.icon as string}
                    alt={item.title as string}
                    width={50}
                    height={28}
                    className="hover:opacity-80"
                  />
                  <div className="absolute bottom-[-6px] p-1 right-[-6px] rounded-full flex items-center justify-center ms-1 border border-solid border-[#F0F0F0] bg-white">
                    <Image
                      src="/burger-menu.png"
                      alt="menu"
                      width={12}
                      height={12}
                    />
                  </div>
                </div>
              )}
              {item.hasMenu && (
                <div
                  className={`bg-transparent  w-full h-screen fixed top-0 right-0 z-50 md:w-96 md:static md:h-auto md:z-30 
                  transition-transform duration-500 ease-in-out flex
                  ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                  } md:translate-x-0`}
                >
                  <div
                    className={` w-1/5 flex-1 z-50 duration-1000 transition-all ${
                      isOpen
                        ? "opacity-60 bg-black"
                        : "bg-transparent opacity-0 pointer-events-none"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                  />
                  <div className="w-5/6 max-w-[320px] p-4 bg-white">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <Image
                          src={item.icon as string}
                          alt={item.title as string}
                          width={70}
                          height={70}
                        />
                        <div className="flex flex-col">
                          <span className="text-black">Ahmed Amaar</span>
                          <span className="text-[#707070]">UX UI designer</span>
                        </div>
                      </div>
                      <Image
                        src="/chevron-right.png"
                        alt="chevron"
                        width={8}
                        height={8}
                        className="h-fit"
                      />
                    </div>
                    <div className="flex flex-col gap-2 text-[#707070] border-0 border-t border-solid border-[#F0F0F0] mt-4 -mx-4 p-4">
                      {navItems
                        .filter((i) => !i.hasMenu && !i.isVerticalRule)
                        .map((item) => (
                          <Link
                            className="flex gap-2 items-center"
                            key={item.title}
                            href="/"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsOpen(false);
                            }}
                          >
                            <Image
                              src={"/navbar-black" + item.icon}
                              alt={item.title as string}
                              width={20}
                              height={20}
                              className="hover:opacity-80"
                            />
                            <span className="hover:opacity-80">
                              {item.title}
                            </span>
                          </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2 text-[#707070] border-0 border-y border-solid border-[#F0F0F0] mb-4 -mx-4 p-4">
                      <span>Settings and privacy</span>
                      <span>Language</span>
                      <span>Help and privacy</span>
                    </div>
                    <div className="text-[#ED1F03] mb-2">Logout</div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
