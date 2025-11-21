export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  details?: string; // e.g. "Contains: wheat, sesame seeds"
  image: string;
  tags?: string[]; // e.g. GF, Vegan
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}