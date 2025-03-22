import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { INavItemComponent } from "@/types/INavItemComponent";
import useNavItemDragAndDrop from "@/hooks/useDragAndDrop";

const NavItem = ({
  item,
  isChild,
  isEditMode,
  onClick,
  setVisibility,
  setTitle,
  index,
  moveItem,
  parentIndex,
}: INavItemComponent) => {
  const [newTitle, setNewTitle] = useState(item.title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { ref, isDragging } = useNavItemDragAndDrop({
    isEditMode,
    index,
    parentIndex,
    moveItem,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTitle(item, newTitle);
      setIsEditingTitle(false);
    } else if (e.key === "Escape") {
      setNewTitle(item.title);
      setIsEditingTitle(false);
    }
  };

  useEffect(() => {
    if (!isEditMode) {
      setNewTitle(item.title);
    }
  }, [isEditMode, item.title]);

  return (
    <li
      ref={ref}
      className={`${
        item.visible !== false || isEditMode ? "flex flex-col gap-2" : "hidden"
      }`}
    >
      <Link
        href={item.target ?? "/"}
        onClick={(e) => onClick(item, e)}
        className={`flex justify-between items-center w-full p-2 rounded cursor-pointer hover:bg-[#d7d7d7] ${
          isChild ? "" : "bg-[#F7F7F7]"
        } ${item.visible === false ? "opacity-50" : ""}
        ${isDragging ? "bg-blue-300 opacity-50" : ""}`}
      >
        <span className="flex gap-2 items-center">
          {isEditMode && (
            <Image src="/drag.png" alt="drag" width={18} height={18} />
          )}
          {isEditingTitle && isEditMode ? (
            <input
              ref={inputRef}
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              maxLength={50}
              onKeyDown={handleKeyDown}
              className="py-1 ps-2 border border-solid border-black rounded bg-white"
            />
          ) : (
            <span>{item.title}</span>
          )}
        </span>
        {!isEditMode &&
          item.children &&
          item.children.filter((child) => child.visible !== false).length >
            0 && (
            <Image
              src={item.isExpanded ? "/chevron-up.png" : "/chevron-down.png"}
              alt={item.title}
              width={12}
              height={12}
            />
          )}
        {isEditMode && (
          <span className="flex gap-2 items-center">
            <Image
              src="/edit.png"
              alt="edit"
              width={16}
              height={16}
              className="hover:opacity-70"
              onClick={() => {
                setIsEditingTitle(true);
                setTimeout(() => {
                  inputRef?.current?.focus();
                }, 0);
              }}
            />
            {item.visible !== false ? (
              <Image
                src="/eye.png"
                alt="hide"
                width={16}
                height={16}
                onClick={(e) => {
                  e.preventDefault();
                  setVisibility(item, false);
                }}
                className="hover:opacity-70"
              />
            ) : (
              <Image
                src="/hidden-eye.png"
                alt="show"
                width={16}
                height={16}
                onClick={(e) => {
                  e.preventDefault();
                  setVisibility(item, true);
                }}
                className="hover:opacity-70"
              />
            )}
          </span>
        )}
      </Link>
      {item.children &&
        item.children.filter((child) => child.visible !== false).length > 0 && (
          <ul
            className={`${
              item.isExpanded || isEditMode ? "block" : "hidden"
            } ps-4`}
          >
            {item.children.map((child, childIndex) => (
              <NavItem
                item={child}
                key={child.id}
                isChild
                onClick={onClick}
                isEditMode={isEditMode}
                setVisibility={setVisibility}
                setTitle={setTitle}
                index={childIndex}
                parentIndex={index}
                moveItem={moveItem}
              />
            ))}
          </ul>
        )}
    </li>
  );
};

export default NavItem;
