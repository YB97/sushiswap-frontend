import React from "react";

import sprite from "./sprite.svg";

interface IconProps {
  className?: string, 
  iconName: string,
}

const Icon: React.FC<IconProps> = ({ className, iconName }) => {
  return (
    <svg className={className}>
      <use href={sprite + `#icon-${iconName}`}></use>
    </svg>
  );
};

export default Icon;
