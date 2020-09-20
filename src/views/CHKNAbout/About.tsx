import React from 'react'
import Icon from '../../chknComponents/Icon'
import H1 from '../../chknComponents/H1'
import P from '../../chknComponents/P'
import ammMaxSvg from '../../assets/img/amm-max.svg'
import spiceLevelFormulaSvg from '../../assets/img/spice-level-formula.svg'
import riskFormulaSvg from '../../assets/img/risk-formula.svg'
import Container from '../../chknComponents/Container'
import {
  ABOUT_VARIABLES_LIST,
  ABOUT_GENESIS_LIST,
  ABOUT_APY_LIST,
} from './constants'
import './styles.css'

const About = () => {
  const renderVariablesList = () => {
    return ABOUT_VARIABLES_LIST.map((item) => {
      const sup = item.sub && <sub>{item.sub}</sub>

      return (
        <li className={'variables__item'}>
          <span className={'variables__symbol'}>
            {item.var}
            {sup}
          </span>
          <span className={'variables__equal'}>=</span>
          <span className={'variables__text'}>{item.text}</span>
        </li>
      )
    })
  }

  const renderGenesisList = () => {
    return ABOUT_GENESIS_LIST.map((item) => {
      return (
        <li className={'genesis__item'}>
          <span className={'genesis__text'}>{item.text}</span>
          <img
            className={`image ${'genesis__img'}`}
            src={item.imgSrc}
            alt="formula"
          />
        </li>
      )
    })
  }

  const renderApyList = () => {
    return ABOUT_APY_LIST.map((item) => {
      return <li className="apy__item">{item.text}</li>
    })
  }

  return (
    <Container>
      <main className="about">
        <div className="logo-wrapper">
          <Icon className="logo" iconName="logo-medium" />
        </div>
        <H1 className="title" align="center">
          CHKN Technology
        </H1>
        <P className="subtitle" align="center">
          CHKN in the next generation in advanced automated market making.
        </P>
        <P className="text" align="center">
          CHKN is a new digital commodity. It is the first yield farm platform
          that will automatically swap your position in and out of the highest
          yielding alt coins completely synthetically, avoiding gas fees and
          giving you exposure to the highest possible returns. We call the
          volatility risk multiplier of your underlying staked asset your spice
          level.
        </P>
        <div className="spice-level">
          <div className="spice-level__text">
            <h3>SPICE LEVEL</h3>
            <span>(HIGHER APY, HIGHER RISK)</span>
          </div>
          <div className="spice-level__formula">
            <div className={'picture'}>
              <img
                className={`image spice-level__formula-img`}
                src={spiceLevelFormulaSvg}
                alt="formula"
              />
            </div>
          </div>
        </div>
        <P className={'text'} align="center">
          To start, there is no spice level aded to the menu item you select for
          the specific swaps you stake (one fixed APY, one multiplier). In the
          short future you will then have the option to let CHKN.farm
          automatically trade you in and out of liquidity pools that have
          different spice multiples, based on the cumulative volatility risk of
          all swaps in each specific high-yield asset pool. This is the next
          generation of automated market making in DeFi.
        </P>

        <section className="variables">
          <h2 className="section-title">Variables</h2>
          <ul className={'variables__list'}>{renderVariablesList()}</ul>
        </section>

        <section className={'genesis'}>
          <h2 className={'section-title'}>Genesis</h2>
          <ul className={'genesis__list'}>{renderGenesisList()}</ul>
        </section>

        <section className={'amm'}>
          <h2 className={`section-title amm__title`}>AMM Stage</h2>
          <P className={'amm__text'}>
            Variables changed: m remains as early multiplier but gets
            grandfathered based on:
          </P>
          <div className={'amm__img-wrap'}>
            <div className={'picture'}>
              <img className={`image amm__img`} src={ammMaxSvg} alt="formula" />
            </div>
            <P className={'amm__text-img'}>
              , where i represents in the ith pool
            </P>
          </div>
          <P className={'amm__text'}>All else should remain equal.</P>
        </section>

        <section className={'apy'}>
          <h2 className={'section-title'}>Determining Apy</h2>
          <P className={'apy__text'}>
            Choose the spice level you want your CHKN velocity farmed at. <br />
            CHKN.farm’s APY calculators switches to the reward with the highest
            APY.
          </P>
          <span className={'apy__title-list'}>
            Risk is determined based on the following:
          </span>
          <ul className={'apy__list'}>{renderApyList()}</ul>
        </section>

        <section className={'score'}>
          <h2 className={`section-title score__title`}>Risk Score</h2>
          <span className={'score__text'}>
            - data from off-chain orale + CoinMarketCap
          </span>
        </section>

        <section className={'liquidity'}>
          <h2 className={`section-title liquidity__title`}>Liquidity</h2>
          <P className={'liquidity__text'}>
            (you want this number high) = volume(24hr) in USD/underlying crypto
            price/circulating supply.
          </P>
          <P className={'liquidity__desc'}>
            Circulating supply is defined as: The best approximation of the
            number of coins that are circulating in the market and in the
            general public’s hands.
          </P>

          <ul className={'liquidity__list'}>
            <li className={'liquidity__item'}>
              <span>- 9/6 6:35pm</span>
              <ul className={'liquidity__sublist'}>
                <li className={'liquidity__item'}>
                  - ETH: 28, 060,489,559/353.18/112,495,298 = 0.7062602617
                </li>
                <li className={'liquidity__item'}>
                  - ETH: 28, 060,489,559/353.18/112,495,298 = 0.7062602617
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className={'risk'}>
          <h2 className={`risk__title' section-title`}>
            You want (1 - Volatility risk) high, want volatility risk number low
          </h2>

          <P className={'risk__text'}>
            Volatility risk = (high price over time t - low price over time t) /
            low price over time t <br />
            Subscript = 1 2 3 4 5, representing 1 day, 7 days, 90 days, 365
            days, respectively <br />
            Weighted = 1/2 + 1/4 + 1/8 + 1/16 + 1/16 = 1 <br />
            Risk = \frac{'2pc'}
            {'v_1'}+\frac{1}
            {2}(1-\sum_{'i=1'}^5(\frac{'h_i-l_i'}
            {'(Min(2^i,16))l_i'}))
          </P>
          <div className={`picture risk__formula-wrap`}>
            <img className="image" src={riskFormulaSvg} alt="formula" />
          </div>
        </section>
      </main>
    </Container>
  )
}

export default About
