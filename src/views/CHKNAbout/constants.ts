import genesisTotalTokensSrc from '../../assets/img/genesis-total-token-formula.svg';
import genesisSplitIntoPoolSrc from '../../assets/img/genesis-split-into-pool-formula.svg';
import genesisPointsEarnedFormula from '../../assets/img/genesis-points-earned-formula.svg';
import genesisTokensPoolAwarded from '../../assets/img/genesis-tokens-pool-awarded.svg';


type AboutVarsType = {
  var: string,
  text: string,
  sub?: string
}

type AboutGenesisType = {
  text: string,
  imgSrc: string
}

type AboutApyType = {
  text: string
}

export const ABOUT_VARIABLES_LIST: Array<AboutVarsType> = [
  {var: 'S', text: 'Spice level (level of risk you want automated)'},
  {var: 'W', text: 'Wealth'},
  {var: 'M', text: 'Exponential decay from 100 to 1'},
  {var: 'X', text: 'Multiplier for being early (max of old + new)'},
  {var: 'T', sub: 'P', text: 'Tokens in the pool'},
  {var: 'T', sub: 'T', text: 'Total tokens'},
  {var: 'W', sub: 'P', text: 'Weight of pool'},
  {var: 'W', sub: 'T', text: 'Total weight'},
  {var: 'P', sub: 'I', text: 'Points of individual in pool'},
  {var: 'T', sub: 'I', text: 'Tokens awarded to individual in pool'},
  {var: 'P', sub: 'P', text: 'Total points in pool'},
]


export const ABOUT_GENESIS_LIST: Array<AboutGenesisType> = [
  {text: 'Total tokens:', imgSrc: genesisTotalTokensSrc},
  {text: 'Total tokens split into pools:', imgSrc: genesisSplitIntoPoolSrc},
  {text: 'Points earned by individuals in the pool:', imgSrc: genesisPointsEarnedFormula},
  {text: 'Tokens in the pool awarded to each individual', imgSrc: genesisTokensPoolAwarded},
]


export const ABOUT_APY_LIST: Array<AboutApyType> = [
  {text: '½ based on liquidity risk'},
  {text: '½ based on volatility risk'}
]