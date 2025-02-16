import React from 'react';
import PlaywrightSVG from 'assets/icons/playwright.svg?react';

interface PlaywrightIconProps {
  size?: number;
}

export const PlaywrightIcon: React.FC<PlaywrightIconProps> = ({
  size = 24,
}) => {
  return <PlaywrightSVG width={size} height={size} />;
};
