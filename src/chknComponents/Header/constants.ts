import { MenuItemProps} from '../MenuItem';

export const DEFAULT_HEADER_NAVLINKS: Array<MenuItemProps> = [
  { title: "Home", to: "/home" },
  { title: "Menu", to: "/menu" },
  { title: "About", to: "/about" },
  { title: "Exchange", to: "https://serene-darwin-d1a225.netlify.app/#/swap", isNative: true, target: "_blank"},
]