import Image from "next/image";

const Navbar = () => {
  const navItems = [
    { title: "Home", icon: "/home.png" },
    { title: "Jobs", icon: "/jobs.png" },
    { title: "Employees", icon: "/employees.png" },
    { isVerticalRule: true },
    { title: "Notifications", icon: "/notifications.png" },
    { title: "Messaging", icon: "/messaging.png" },
    { title: "Profile ▼", icon: "/profile.png" },
  ];
  return (
    <div className="z-10 sticky top-0 flex justify-between items-center bg-black shadow-md px-4 py-2">
      <div className="flex items-center gap-14">
        <Image src="/logo.png" alt="logo" width={81} height={27} />
      </div>
      <div className="flex items-center gap-14">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="text-[#E6E6E6] flex flex-col items-center gap-1 cursor-pointer hover:opacity-80"
          >
            {item.isVerticalRule ? (
              <div className="h-12 bg-[#D6D6D699] w-0.5" />
            ) : (
              <>
                <Image
                  src={item.icon as string}
                  alt={item.title as string}
                  width={36}
                  height={36}
                />
                <span>{item.title}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
