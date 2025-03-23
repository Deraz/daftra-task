import { Job } from "@/types/job";
import Image from "next/image";
import React from "react";

const JobCard = ({
  job: {
    isSelected,
    logo,
    title,
    company,
    location,
    postedSince,
    tags,
    fields,
  },
}: {
  job: Job;
}) => {
  return (
    <div
      className={`rounded-lg w-full px-4 py-6 flex flex-col gap-4
        ${
          isSelected
            ? "bg-[#F3FDF3] border border-solid border-[#48A74C]"
            : "bg-[#FFF]"
        }
      `}
    >
      <div className="flex gap-2 items-center">
        <Image src={logo} alt="logo" width={70} height={70} />
        <div className="flex flex-col gap-2 justify-center">
          <span className="text-lg font-bold">{title}</span>
          <span className="text-[#14A077] font-bold">{company}</span>
        </div>
      </div>
      <div className="flex flex-wrap text-[#707070] gap-4">
        <span className="flex gap-1 items-center">
          <Image
            src="/location-pin.png"
            alt="location"
            width={18}
            height={18}
            className="inline-flex"
          />
          {location}
        </span>
        <span className="flex gap-1 items-center">
          <Image
            src="/calendar.png"
            alt="since"
            width={18}
            height={18}
            className="inline-flex"
          />
          {postedSince}
        </span>
      </div>
      <div className="flex flex-wrap gap-4 text-[#707070]">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`rounded ${
              isSelected ? "bg-[#FFF]" : "bg-[#F7F7F7]"
            } text-sm p-2`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="h-[1px] bg-[#F0F0F0]" />
      <div className="flex flex-wrap gap-2 text-[#707070]">
        {fields.map((field, index) => (
          <span key={index}>
            <span key={field} className="text-sm">
              {field}
            </span>
            {index !== fields.length - 1 && <span className="text-sm">-</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
