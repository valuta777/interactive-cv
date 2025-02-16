import React from 'react';
import RxJsSVG from 'assets/icons/rxjs.svg?react';

interface RxJsIconProps {
  size?: number;
}

export const RxJsIcon: React.FC<RxJsIconProps> = ({ size = 24 }) => {
  return <RxJsSVG width={size} height={size} />;
};
