import { NavItem } from "@/types/nav";
import { useEffect, useState } from "react";
import {
  fetchNavItems as fetchNavItemsApi,
  saveNavItems as saveNavItemsApi,
} from "@/lib/api";

export default function useNav() {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const fetchNavItems = async () => {
    try {
      const data = await fetchNavItemsApi();
      setNavItems(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const saveNavItems = async (updatedItems: NavItem[]) => {
    try {
      await saveNavItemsApi(updatedItems);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNavItems();
  }, []);

  const onClickItem = (
    item: NavItem,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (isEditMode) return e.preventDefault();
    if (
      item.children &&
      item.children.filter((child) => child.visible !== false).length > 0
    ) {
      e.preventDefault();
      const newNavItems = navItems.map((navItem) => {
        if (navItem.id === item.id) {
          return { ...navItem, isExpanded: !navItem.isExpanded };
        }
        return navItem;
      });
      setNavItems(newNavItems);
    }
  };

  const updateItem = (
    item: NavItem,
    key: string,
    value: string | boolean | undefined
  ) => {
    const newNavItems = navItems.map((navItem) => {
      if (navItem.id === item.id) {
        return { ...navItem, [key]: value };
      }
      if (navItem.children) {
        return {
          ...navItem,
          children: navItem.children.map((childNavItem) => {
            if (childNavItem.id === item.id) {
              return {
                ...childNavItem,
                [key]: value,
              };
            }
            return childNavItem;
          }),
        };
      }
      return navItem;
    });

    setNavItems(newNavItems);
  };

  const setVisibility = (item: NavItem, isVisible: boolean) => {
    updateItem(item, "visible", isVisible ? undefined : false);
  };

  const setTitle = (item: NavItem, newTitle: string) => {
    updateItem(item, "title", newTitle);
  };

  const discardChanges = async () => {
    await fetchNavItems();
    setIsEditMode(false);
  };

  const saveChanges = async () => {
    await saveNavItems(navItems);
    setIsEditMode(false);
  };
  return {
    navItems,
    loading,
    error,
    setNavItems,
    onClickItem,
    isEditMode,
    setIsEditMode,
    setVisibility,
    setTitle,
    discardChanges,
    saveChanges,
  };
}
