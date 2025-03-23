import { trackNavItems } from "@/lib/api";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

export default function useNavItemDragAndDrop({
  isEditMode,
  index,
  parentIndex,
  moveItem,
}: {
  isEditMode?: boolean;
  index: number;
  parentIndex?: number;
  moveItem: (
    dragIndex: number,
    hoverIndex: number,
    parentIndex?: number
  ) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: "NAV_ITEM",
    item: { index, parentIndex },
    canDrag: isEditMode,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "NAV_ITEM",
    hover: (draggedItem: { index: number; parentIndex?: number }, monitor) => {
      if (!monitor.isOver({ shallow: true })) return;
      // Ensure children only reorder within the same parent
      if (
        draggedItem.parentIndex === parentIndex &&
        draggedItem.index !== index
      ) {
        moveItem(draggedItem.index, index, parentIndex);
        draggedItem.index = index;
      }
    },
    drop: async () => {
      await trackNavItems();
    },
  });

  drag(drop(ref));
  return {
    isDragging,
    ref,
  };
}
