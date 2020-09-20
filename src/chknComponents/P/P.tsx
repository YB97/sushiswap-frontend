import React from "react";
import { StyledP } from "./styled";

interface P {
  className?: string,
  align?: 'center' | 'left' | 'right'
}

const P: React.FC<P> = ({ className, children, align }) => {
  const style = {textAlign: align}
  return <StyledP style={style} className={className}>{children}</StyledP>;
};

export default P;
