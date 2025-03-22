import { NavItem } from "./nav";

export interface INavItemComponent {
  item: NavItem;
  isChild?: boolean;
  isEditMode?: boolean;
  onClick: (
    item: NavItem,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  setVisibility: (item: NavItem, isVisible: boolean) => void;
  setTitle: (item: NavItem, newTitle: string) => void;
  index: number;
  parentIndex?: number;
  moveItem: (
    dragIndex: number,
    hoverIndex: number,
    parentIndex?: number
  ) => void;
}
