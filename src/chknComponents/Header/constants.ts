import { MenuItemProps } from '../MenuItem'

export const DEFAULT_HEADER_NAVLINKS: Array<MenuItemProps> = [
  { title: 'Home', to: '/' },
  { title: 'Stake', to: '/stake' },
  {
    title: 'About',
    to: 'https://medium.com/@chknfarm/chkn-farm-fa178c712aed ',
    isNative: true,
    target: '_blank',
  },
  {
    title: 'Exchange',
    to: 'https://serene-darwin-d1a225.netlify.app/#/swap',
    isNative: true,
    target: '_blank',
  },
]
