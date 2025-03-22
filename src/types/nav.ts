export interface NavItem {
  id: string;
  title: string;
  target: string;
  visible?: boolean;
  children?: NavItem[];
  isExpanded?: boolean;
}
