export interface SidebarItemsBySection {
    id: string;
    attributes: SidebarItems;
}

export interface SidebarItems {
  createdAt: string;
  img: string;
  name: string;
  publishedAt: string;
  updatedAt: string;
  uri: string;
  menu: SidebarItemsBySection;
}