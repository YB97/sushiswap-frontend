import { MenuItemProps } from '../MenuItem'

export const DEFAULT_HEADER_NAVLINKS: Array<MenuItemProps> = [
  { title: 'home', to: '/' },
  { title: 'stake', to: '/stake' },
  {
    title: 'about',
    to: 'https://medium.com/@chknfarm/chkn-farm-fa178c712aed ',
    isNative: true,
    target: '_blank',
  },
  {
    title: 'exchange',
    to: 'https://www.exchange.chkn.farm/#/swap',
    isNative: true,
    target: '_blank',
  },
]
