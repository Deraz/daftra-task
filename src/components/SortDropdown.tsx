import { useState } from "react";
import Image from "next/image";
const sortingOptions = [
  { label: "Top match", value: "top-match" },
  { label: "Newest", value: "newest" },
  { label: "Latest", value: "latest" },
];

const SortDropdown = () => {
  const [selectedSort, setSelectedSort] = useState(sortingOptions[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left self-end z-20">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer py-2 flex items-center justify-between ${
          isOpen
            ? "rounded-t bg-white border border-solid border-transparent"
            : "rounded border border-solid border-[#F0F0F0]"
        } px-3 py-2 w-64 text-black`}
      >
        <span className="text-[#707070]">Sorting by :</span>
        <span className="font-medium text-green-600">{selectedSort.label}</span>
        <Image
          src="/green-chevron-down.png"
          width={12}
          height={12}
          alt="sort"
        />
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute left-0 w-64 rounded-b bg-white shadow">
          {sortingOptions.map((option) => (
            <li
              key={option.value}
              className={`p-4 cursor-pointer ${
                selectedSort.value === option.value
                  ? "bg-gray-200 text-green-600 font-medium"
                  : "hover:bg-gray-100 text-[#707070]"
              }`}
              onClick={() => {
                setSelectedSort(option);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortDropdown;
