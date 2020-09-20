import React from "react";
import burnChiliIcon from "../../../../assets/img/burn-chili.png";
import { StyledWrapper, StyledTitle, StyledSubtitle, StyledBtn} from "./styled";

interface MenuCardProps {
  textClassName?: string,
  title?: string,
  subtitle?: string,
  onBtnClick?: () => void,
  btnText?: string,
  isBtnDisabled?: boolean
}

const MenuCard: React.FC<MenuCardProps> = ({
  textClassName,
  title,
  subtitle,
  onBtnClick,
  btnText = "Select",
  isBtnDisabled = false,
}) => {
  return (
    <StyledWrapper>
      <img src={burnChiliIcon} alt="Select" />
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle className={textClassName}>{subtitle}</StyledSubtitle>
      <StyledBtn
        onClick={onBtnClick}
        disabled={isBtnDisabled}
      >
        {btnText}
      </StyledBtn>
    </StyledWrapper>
  );
};

export default MenuCard;
