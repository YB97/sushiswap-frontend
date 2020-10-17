import BigNumber from 'bignumber.js/bignumber'
import EggKing from '../../assets/img/egg-king.png'
import SuperShell from '../../assets/img/super-shell.png'
import Artiste from '../../assets/img/gifted-artiste.png'
import Tamago from '../../assets/img/tamago-boy.png'
import Popular from '../../assets/img/mr-popular.png'
import ChillGal from '../../assets/img/chill-gal.png'
import OldEggy from '../../assets/img/old-eggy.png'
import Swordsman from '../../assets/img/swordsman.png'
// import BookWorm from '../../assets/img/book-worm.png'
import Fighter from '../../assets/img/friendly-fighter.png'
import Banker from '../../assets/img/banker.png'
import Yolk from '../../assets/img/yolk.png'
import Shape from '../../assets/img/shape.png'
import Zen from '../../assets/img/zen.png'
import Amply from '../../assets/img/amply-plump.png'
import Plant from '../../assets/img/plant.png'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x95eFF79aF348Ad4dB280d0898169826843284886',
  // UNIRouter: '0xD76E93a21e2FE502a636e268D37Ad31be52D9517',
  // UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
  CHKN: '0x297c338da24beecd4c412a3537650ac9010ea628',
  USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  UNI: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  SUSHI: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  ETH: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
  YFII: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
}

export const contractAddresses = {
  sushi: {
    1: '0x297c338da24beecd4c412a3537650ac9010ea628',
    // 4: '0x4C361b5CA7cB9CF6FD4CC3E53cd4845c2D271e07',
    // 1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  },
  masterChef: {
    1: '0x94039E06bCEee1B1A8108c46Be224C66Fc99C87e',
    // 4: '0xd52086D2F1DF2B1E8C8225dcbD80164cE54Fc78e',
    // 1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    // 1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  lookup: {
    1: '0x058daf7Ac8049267D4a20F052406264850261f4B',
  },
  pointsPool: {
    1: '0x28236d58F07373e62996dC4b1667bDD3Fd2bc6C1',
  },
}

/*
UNI-V2 LP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  {
    pid: '0',
    lpAddresses: {
      1: '0xdaa2ea654623783446E9EDDbB2c94C2fE98B14eE',
    },
    tokenAddresses: {
      1: '0x297C338Da24BeEcD4C412a3537650AC9010ea628',
    },
    symbol: 'CHKN-ETH Eggs',
    tokenSymbol: 'CHKN',
    name: 'Egg King',
    icon: EggKing,
  },
  {
    pid: '1',
    lpAddresses: {
      1: '0xd70e57B8C01e727e96F61aa2Da526EdAB2c032A7',
    },
    tokenAddresses: {
      1: '0x297C338Da24BeEcD4C412a3537650AC9010ea628',
      2: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    symbol: 'CHKN-USDT Eggs',
    tokenSymbol: 'CHKN-USDT',
    name: 'Super Shell',
    icon: SuperShell,
  },
  {
    pid: '2',
    lpAddresses: {
      1: '0xd9c7C3CF7FEd9226910b8ee4b9CDA3926623EAe2',
    },
    tokenAddresses: {
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      2: '0x297C338Da24BeEcD4C412a3537650AC9010ea628',
    },
    symbol: 'CHKN-UNI Eggs',
    tokenSymbol: 'CHKN-UNI',
    name: '茶叶蛋',
    icon: Plant,
  },
  {
    pid: '3',
    lpAddresses: {
      1: '0x62637ff868629da4dBb8658372E76eC4C3f29Ccf',
    },
    tokenAddresses: {
      1: '0x297C338Da24BeEcD4C412a3537650AC9010ea628',
      2: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
    symbol: 'CHKN-SUSHI Eggs',
    tokenSymbol: 'CHKN-SUSHI',
    name: 'Tamago Boy',
    icon: Tamago,
  },
  {
    pid: '4',
    lpAddresses: {
      1: '0xfa2b62C142AaEdf0c18CC356499D2f460406b82e',
    },
    tokenAddresses: {
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    symbol: 'USDT-ETH Eggs',
    tokenSymbol: 'USDT',
    name: 'Mr. Popular',
    icon: Popular,
  },
  {
    pid: '5',
    lpAddresses: {
      1: '0x3F8DF53874041Be6C08D6d223d9e03a418162674',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    symbol: 'USDC-ETH Eggs',
    tokenSymbol: 'USDC',
    name: 'Chill Gal',
    icon: ChillGal,
  },
  {
    pid: '6',
    lpAddresses: {
      1: '0x9e4C98a6E67f2aD1eA41e37536E86a22bb445B4A',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    symbol: 'DAI-ETH Eggs',
    tokenSymbol: 'DAI',
    name: 'Old Eggy',
    icon: OldEggy,
  },
  {
    pid: '7',
    lpAddresses: {
      1: '0x99A3a3bD4F9df3f63CACa1799a6d5d65A0C22524',
    },
    tokenAddresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    symbol: 'LINK-ETH Eggs',
    tokenSymbol: 'LINK',
    name: 'Swordsman',
    icon: Swordsman,
  },
  {
    pid: '8',
    lpAddresses: {
      1: '0x6579d38b915fBDFA67420142E5eB4f13B0cdA666',
    },
    tokenAddresses: {
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    },
    symbol: 'UNI-ETH Eggs',
    tokenSymbol: 'UNI',
    name: 'Gifted Artiste',
    icon: Artiste,
  },
  {
    pid: '9',
    lpAddresses: {
      1: '0xA49a189f7068356Cbe50fAE471896d8af3D5302C',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
      2: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    symbol: 'DAI-USDT Eggs',
    tokenSymbol: 'DAI-USDT',
    name: 'Friendly Fighter',
    icon: Fighter,
  },
  {
    pid: '10',
    lpAddresses: {
      1: '0x42a59D187A3b9b1b455D082ba852aCC1b821e846',
    },
    tokenAddresses: {
      1: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
    },
    symbol: 'YFII-ETH Eggs',
    tokenSymbol: 'YFII',
    name: 'Benevolent Banker',
    icon: Banker,
  },
  {
    pid: '11',
    lpAddresses: {
      1: '0xCDddD529FbEe106b88Ae049D98A35E3CDa45A177',
    },
    tokenAddresses: {
      1: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
    },
    symbol: 'LEND-ETH Eggs',
    tokenSymbol: 'LEND',
    name: 'Generous Yolk',
    icon: Yolk,
  },
  {
    pid: '12',
    lpAddresses: {
      1: '0x4CbeE6B0d5d00bf00b15b5bfDbF71A9Ec0064527',
    },
    tokenAddresses: {
      1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    symbol: 'SNX-ETH Eggs',
    tokenSymbol: 'SNX',
    name: 'Shapeshifter',
    icon: Shape,
  },
  {
    pid: '13',
    lpAddresses: {
      1: '0xcD1487A3f56fE5c8a1370794d22826f148B12100',
    },
    tokenAddresses: {
      1: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
    },
    symbol: 'YFI-ETH Eggs',
    tokenSymbol: 'YFI',
    name: 'Zen Farmer',
    icon: Zen,
  },
  {
    pid: '14',
    lpAddresses: {
      1: '0x37f5741c90D0B6d5c7BceA655ADFf896ea37493D',
    },
    tokenAddresses: {
      1: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    },
    symbol: 'AMPL-ETH Eggs',
    tokenSymbol: 'AMPL',
    name: 'Amply Plump',
    icon: Amply,
  },
]
