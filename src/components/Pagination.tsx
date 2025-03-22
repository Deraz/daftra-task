import React from "react";
import Image from "next/image";

const Pagination = () => {
  return (
    <div className="self-center flex gap-1">
      <span className="rounded border border-solid border-[#C4C3C3] p-2 w-[38px] flex items-center justify-center cursor-pointer">
        <Image
          src="/pagination-chevron-left.png"
          alt="previous"
          width={20}
          height={20}
        />
      </span>
      <span className="rounded border border-solid border-[#C4C3C3] p-2 w-[38px] flex items-center justify-center cursor-pointer">
        1
      </span>
      <span className="rounded border border-solid border-[#C4C3C3] p-2 w-[38px] flex items-center justify-center cursor-pointer font-bold text-white bg-[#48A74C]">
        2
      </span>
      <span className="rounded border border-solid border-[#C4C3C3] p-2 w-[38px] flex items-center justify-center cursor-pointer">
        3
      </span>
      <span className="rounded border border-solid border-[#C4C3C3] p-2 w-[38px] flex items-center justify-center cursor-pointer">
        <Image
          src="/pagination-chevron-right.png"
          alt="next"
          width={20}
          height={20}
        />
      </span>
    </div>
  );
};

export default Pagination;
