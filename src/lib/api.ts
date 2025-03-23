import { NavItem } from "@/types/nav";
const BASE_URL = "https://daftra-backend-production.up.railway.app";
export const fetchNavItems = async (): Promise<NavItem[]> => {
  const res = await fetch(`${BASE_URL}/nav`);
  if (!res.ok) throw new Error("Failed to fetch navigation items");
  return res.json();
};

export const saveNavItems = async (navItems: NavItem[]): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/nav`, {
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

export const trackNavItems = async (): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/track`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 1, from: 1, to: 1 }),
    });

    if (!response.ok) {
      throw new Error("Failed to save navigation items");
    }
  } catch {
    throw new Error("Failed to save navigation items");
  }
};
