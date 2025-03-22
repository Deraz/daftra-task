import { NavItem } from "@/types/nav";

export const fetchNavItems = async (): Promise<NavItem[]> => {
  const res = await fetch("http://localhost:8081/nav");
  if (!res.ok) throw new Error("Failed to fetch navigation items");
  return res.json();
};

export const saveNavItems = async (navItems: NavItem[]): Promise<void> => {
  try {
    const response = await fetch("http://localhost:8081/nav", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(navItems),
    });

    if (!response.ok) {
      throw new Error("Failed to save navigation items");
    }
  } catch {
    throw new Error("Failed to save navigation items");
  }
};

export const trackNavItems = async (
  id: number,
  from: number,
  to: number
): Promise<void> => {
  try {
    const response = await fetch("http://localhost:8081/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, from, to }),
    });

    if (!response.ok) {
      throw new Error("Failed to save navigation items");
    }
  } catch {
    throw new Error("Failed to save navigation items");
  }
};
