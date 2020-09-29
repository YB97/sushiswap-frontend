import BigNumber from 'bignumber.js/bignumber'
import EggKing from '../../assets/img/egg-king.png'
import SuperShell from '../../assets/img/super-shell.png'
import Artiste from '../../assets/img/gifted-artiste.png'
import Tamago from '../../assets/img/tamago-boy.png'
import Popular from '../../assets/img/mr-popular.png'
import ChillGal from '../../assets/img/chill-gal.png'
import OldEggy from '../../assets/img/old-eggy.png'
import Swordsman from '../../assets/img/swordsman.png'
import BookWorm from '../../assets/img/book-worm.png'
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
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0xD76E93a21e2FE502a636e268D37Ad31be52D9517',
  // UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  sushi: {
    4: '0x4C361b5CA7cB9CF6FD4CC3E53cd4845c2D271e07',
    // 1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  },
  masterChef: {
    4: '0xd52086D2F1DF2B1E8C8225dcbD80164cE54Fc78e',
    // 1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
  },
  weth: {
    4: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
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

// export const supportedPools = [
//   {
//     pid: 12,
//     lpAddresses: {
//       1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
//     },
//     tokenAddresses: {
//       1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
//     },
//     symbol: 'SUSHI-ETH UNI-V2 LP',
//     tokenSymbol: 'SUSHI',
//     name: 'Egg King',
//     icon: EggKing,
//   },
//   {
//     pid: 0,
//     lpAddresses: {
//       1: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
//     },
//     tokenAddresses: {
//       1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
//     },
//     name: 'Super Shell',
//     tokenSymbol: 'USDT',
//     symbol: 'USDT-ETH UNI-V2 LP',
//     icon: SuperShell,
//   },
//   {
//     pid: 1,
//     lpAddresses: {
//       1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
//     },
//     tokenAddresses: {
//       1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
//     },
//     name: '茶叶蛋',
//     symbol: 'USDC-ETH UNI-V2 LP',
//     tokenSymbol: 'USDC',
//     icon: Plant,
//   },
//   // {
//   //   pid: 1,
//   //   lpAddresses: {
//   //     1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
//   //   },
//   //   tokenAddresses: {
//   //     1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
//   //   },
//   //   name: 'Gifted Artiste',
//   //   symbol: 'USDC-ETH UNI-V2 LP',
//   //   tokenSymbol: 'USDC',
//   //   icon: Artiste,
//   // },
//   {
//     pid: 2,
//     lpAddresses: {
//       1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
//     },
//     tokenAddresses: {
//       1: '0x6b175474e89094c44da98b954eedeac495271d0f',
//     },
//     name: 'Tamago Boy',
//     symbol: 'DAI-ETH UNI-V2 LP',
//     tokenSymbol: 'DAI',
//     icon: Tamago,
//   },
//   {
//     pid: 3,
//     lpAddresses: {
//       1: '0xf80758ab42c3b07da84053fd88804bcb6baa4b5c',
//     },
//     tokenAddresses: {
//       1: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
//     },
//     name: 'Mr. Popular',
//     symbol: 'SUSD-ETH UNI-V2 LP',
//     tokenSymbol: 'SUSD',
//     icon: Popular,
//   },
//   {
//     pid: 7,
//     lpAddresses: {
//       1: '0x88d97d199b9ed37c29d846d00d443de980832a22',
//     },
//     tokenAddresses: {
//       1: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
//     },
//     name: 'Chill Gal',
//     symbol: 'UMA-ETH UNI-V2 LP',
//     tokenSymbol: 'UMA',
//     icon: ChillGal,
//   },
//   {
//     pid: 9,
//     lpAddresses: {
//       1: '0xf421c3f2e695c2d4c0765379ccace8ade4a480d9',
//     },
//     tokenAddresses: {
//       1: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
//     },
//     symbol: 'BAND-ETH UNI-V2 LP',
//     tokenSymbol: 'BAND',
//     name: 'Old Eggy',
//     icon: OldEggy,
//   },
//   {
//     pid: 8,
//     lpAddresses: {
//       1: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
//     },
//     tokenAddresses: {
//       1: '0x514910771af9ca656af840dff83e8264ecf986ca',
//     },
//     name: 'Swordsman',
//     symbol: 'LINK-ETH UNI-V2 LP',
//     tokenSymbol: 'LINK',
//     icon: Swordsman,
//   },
//   {
//     pid: 1,
//     lpAddresses: {
//       1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
//     },
//     tokenAddresses: {
//       1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
//     },
//     name: 'Gifted Artiste',
//     symbol: 'USDC-ETH UNI-V2 LP',
//     tokenSymbol: 'USDC',
//     icon: Artiste,
//   },
//   // {
//   //   pid: 10,
//   //   lpAddresses: {
//   //     1: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
//   //   },
//   //   tokenAddresses: {
//   //     1: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
//   //   },
//   //   name: 'Book Worm',
//   //   symbol: 'AMPL-ETH UNI-V2 LP',
//   //   tokenSymbol: 'AMPL',
//   //   icon: BookWorm,
//   // },
//   {
//     pid: 4,
//     lpAddresses: {
//       1: '0xcffdded873554f362ac02f8fb1f02e5ada10516f',
//     },
//     tokenAddresses: {
//       1: '0xc00e94cb662c3520282e6f5717214004a7f26888',
//     },
//     name: 'Friendly Fighter',
//     symbol: 'COMP-ETH UNI-V2 LP',
//     tokenSymbol: 'COMP',
//     icon: Fighter,
//   },
//   {
//     pid: 5,
//     lpAddresses: {
//       1: '0xab3f9bf1d81ddb224a2014e98b238638824bcf20',
//     },
//     tokenAddresses: {
//       1: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
//     },
//     name: 'Benevolent Banker',
//     symbol: 'LEND-ETH UNI-V2 LP',
//     tokenSymbol: 'LEND',
//     icon: Banker,
//   },
//   {
//     pid: 6,
//     lpAddresses: {
//       1: '0x43ae24960e5534731fc831386c07755a2dc33d47',
//     },
//     tokenAddresses: {
//       1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
//     },
//     name: 'Generous Yolk',
//     symbol: 'SNX-ETH UNI-V2 LP',
//     tokenSymbol: 'SNX',
//     icon: Yolk,
//   },
//   {
//     pid: 11,
//     lpAddresses: {
//       1: '0x2fdbadf3c4d5a8666bc06645b8358ab803996e28',
//     },
//     tokenAddresses: {
//       1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
//     },
//     name: 'Shapeshifter',
//     symbol: 'YFI-ETH UNI-V2 LP',
//     tokenSymbol: 'YFI',
//     icon: Shape,
//   },
//   {
//     pid: 13,
//     lpAddresses: {
//       1: '0x8bd1661da98ebdd3bd080f0be4e6d9be8ce9858c',
//     },
//     tokenAddresses: {
//       1: '0x408e41876cccdc0f92210600ef50372656052a38',
//     },
//     name: 'Zen Farmer',
//     symbol: 'REN-ETH UNI-V2 LP',
//     tokenSymbol: 'REN',
//     icon: Zen,
//   },
//   {
//     pid: 14,
//     lpAddresses: {
//       1: '0xaad22f5543fcdaa694b68f94be177b561836ae57',
//     },
//     tokenAddresses: {
//       1: '0x68A118Ef45063051Eac49c7e647CE5Ace48a68a5',
//     },
//     name: 'Amply Plump',
//     symbol: 'BASE-sUSD UNI-V2 LP',
//     tokenSymbol: 'BASED',
//     icon: Amply,
//   },
//   // {
//   //   pid: 15,
//   //   lpAddresses: {
//   //     1: '0xcc3d1ecef1f9fd25599dbea2755019dc09db3c54',
//   //   },
//   //   tokenAddresses: {
//   //     1: '0x476c5E26a75bd202a9683ffD34359C0CC15be0fF',
//   //   },
//   //   name: 'SRM Shark',
//   //   symbol: 'SRM-ETH UNI-V2 LP',
//   //   tokenSymbol: 'SRM',
//   //   icon: '🦈',
//   // },
//   // {
//   //   pid: 16,
//   //   lpAddresses: {
//   //     1: '0xa5904961f61bae7c4dd8478077556c91bf291cfd',
//   //   },
//   //   tokenAddresses: {
//   //     1: '0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a',
//   //   },
//   //   name: 'SUSHIv2 SUSHI',
//   //   symbol: 'SUSHIv2-ETH UNI-V2 LP',
//   //   tokenSymbol: 'SUSHIv2',
//   //   icon: '🍠',
//   // },
//   // {
//   //   pid: 17,
//   //   lpAddresses: {
//   //     1: '0x3da1313ae46132a397d90d95b1424a9a7e3e0fce',
//   //   },
//   //   tokenAddresses: {
//   //     1: '0xD533a949740bb3306d119CC777fa900bA034cd52',
//   //   },
//   //   name: 'CRV Crocodile',
//   //   symbol: 'CRV-ETH UNI-V2 LP',
//   //   tokenSymbol: 'CRV',
//   //   icon: '🐊',
//   // },
// ]

export const supportedPools = [
  {
    pid: '0',
    lpAddresses: {
      4: '0x96B0d1c5665F3C402Ac82Fb86A50e5d85096131F',
    },
    tokenAddresses: {
      4: '0x4C361b5CA7cB9CF6FD4CC3E53cd4845c2D271e07',
    },
    symbol: 'CHKN-ETH UNI-V2 CLP',
    tokenSymbol: 'CHKN',
    name: 'Egg King',
    icon: EggKing,
  },
  {
    pid: '1',
    lpAddresses: {
      4: '0xbDe9dd9eA60c183Dfb23fDA4fBAf3696f9525A4D',
    },
    tokenAddresses: {
      4: '0x4C361b5CA7cB9CF6FD4CC3E53cd4845c2D271e07',
      // 2: '0xfb1d709cb959ac0ea14cad0927eabc7832e65058',
    },
    symbol: 'CHKN-USDT UNI-V2 CLP',
    tokenSymbol: 'CHKN-USDT',
    name: 'Super Shell',
    icon: SuperShell,
  },
  {
    pid: '2',
    lpAddresses: {
      4: '0x503dBeea4571C637024Fcd8b07aF94835EaA95b1',
    },
    tokenAddresses: {
      4: '0x2448eE2641d78CC42D7AD76498917359D961A783',
    },
    symbol: 'DAI-ETH UNI-V2 CLP',
    tokenSymbol: 'DAI',
    name: 'Old Eggy',
    icon: OldEggy,
  },
]
