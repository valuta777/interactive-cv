import React from 'react';
import SQLSVG from 'assets/icons/sql.svg?react';

interface SQLIconProps {
  size?: number;
}

export const SQLIcon: React.FC<SQLIconProps> = ({ size = 24 }) => {
  return <SQLSVG width={size} height={size} />;
};
