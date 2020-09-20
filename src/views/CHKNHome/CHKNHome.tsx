import React from "react";
import { useHistory } from "react-router-dom";
import chiliIcon from "../../assets/img/big-chili.png";
import { Main, LogoLarge, Text, InfoBlock, StyledButton, CardList, StyledCard, Img } from "./styled";

const Home = () => {
  const history = useHistory();

  return (
    <Main>
      <InfoBlock>
        <LogoLarge iconName="logo-large" />
        <Text>
          Stake Uniswap LP tokens to claim your very own yummy CHKN
        </Text>
      </InfoBlock>
      <CardList>
        <StyledCard
          iconName="logo-circle"
          title="Your CHKN Balance"
          value="Locked"
          bottomText="Pending Harvest"
          bottomValue="0.00"
          bottomUnits="CHKN"
          onCardClick={() => console.log("click")}
          isFooterVisible
        />
        <StyledCard
          title="Total CHKN Supply"
          value="Locked"
          bottomText="New rewards per block"
          bottomValue="1.00"
          bottomUnits="CHKN"
          onCardClick={() => console.log("click1")}
          isFooterVisible
        />
      </CardList>
      <div>
        <StyledButton onClick={() => history.push("/menu")}>
          <Img src={chiliIcon} alt="add spice" />
          Add Spice
        </StyledButton>
      </div>
    </Main>
  );
};

export default Home;
