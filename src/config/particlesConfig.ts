export const particlesOptions = {
  background: { color: 'transparent' },
  particles: {
    number: { value: 200, density: { enable: true, area: 1000 } },
    color: {
      value: [
        '#ff3366',
        '#ffcc00',
        '#66ccff',
        '#33cc33',
        '#ff6600',
        '#9966ff',
        '#00cccc',
      ],
    },
    shape: { type: 'circle' },
    opacity: {
      value: 0.6,
      random: true,
      animation: { enable: true, speed: 0.3, minimumValue: 0.3 },
    },
    size: {
      value: 3,
      random: true,
      animation: { enable: true, speed: 0.5, minimumValue: 1 },
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: 'none' as const,
      random: true,
    },
  },
};
