import JobCard from "@/components/JobCard";
import Pagination from "@/components/Pagination";
import SortDropdown from "@/components/SortDropdown";
import ToggleSwitch from "@/components/ToggleSwitch";
import { Job } from "@/types/job";
import Image from "next/image";

export default function Home() {
  const JOBS: Job[] = [
    {
      isSelected: true,
      logo: "/rockstar.png",
      title: "Gaming UI designer",
      company: "Rockstar Games",
      location: "ElMansoura, Egypt",
      postedSince: "10 days ago",
      tags: ["0 - 3y of exp", "Full time", "Remote"],
      fields: ["Creative/Design", "IT / Software development", "Gaming"],
    },
    {
      isSelected: false,
      logo: "/egabi.png",
      title: "Senior UX UI Designer",
      company: "Egabi",
      location: "Cairo, Egypt",
      postedSince: "month ago",
      tags: ["0 - 3y of exp", "Full time", "Hybrid"],
      fields: ["Creative/Design", "IT / Software development"],
    },
    {
      isSelected: false,
      logo: "/magara.png",
      title: "React Frontend developer",
      company: "Magara",
      location: "ElMansoura, Egypt",
      postedSince: "month ago",
      tags: ["5 - 7y of exp", "Freelance", "Remote"],
      fields: ["Creative/Design", "IT / Software development"],
    },
    {
      isSelected: false,
      logo: "/rockstar.png",
      title: "Gaming UI designer",
      company: "Rockstar Games",
      location: "ElMansoura, Egypt",
      postedSince: "10 days ago",
      tags: ["0 - 3y of exp", "Full time", "Remote"],
      fields: ["Creative/Design", "IT / Software development", "Gaming"],
    },
    {
      isSelected: false,
      logo: "/egabi.png",
      title: "Senior UX UI Designer",
      company: "Egabi",
      location: "Cairo, Egypt",
      postedSince: "month ago",
      tags: ["0 - 3y of exp", "Full time", "Hybrid"],
      fields: ["Creative/Design", "IT / Software development"],
    },
    {
      isSelected: false,
      logo: "/magara.png",
      title: "React Frontend developer",
      company: "Magara",
      location: "ElMansoura, Egypt",
      postedSince: "month ago",
      tags: ["5 - 7y of exp", "Freelance", "Remote"],
      fields: ["Creative/Design", "IT / Software development"],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <SortDropdown />
      <div className="flex justify-between">
        <div className="bg-[#3D8E41] px-2 md:px-6 py-4 flex flex-wrap gap-1 justify-between items-center text-white w-5/6 md:w-full">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-sm md:text-lg">UI Designer in Egypt</span>
            <span className="text-sm">70 job positions</span>
          </div>
          <div className="flex gap-2 self-end">
            <span>Set alert</span>
            <ToggleSwitch />
          </div>
        </div>
        <div
          onClick={() => {
            document.getElementById("show-side-bar-trigger")?.click();
          }}
          className="md:hidden flex items-center justify-center ms-1 border border-solid border-[#F0F0F0] w-1/6 bg-white"
        >
          <Image src="/burger-menu.png" alt="menu" width={35} height={35} />
        </div>
      </div>
      {JOBS.map((job, index) => (
        <JobCard key={"job-" + index} job={job} />
      ))}
      <Pagination />
    </div>
  );
}
