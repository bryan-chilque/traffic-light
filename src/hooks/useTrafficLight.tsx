import { useState, useEffect } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
  default: 'bg-gray-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    if (countDown === 0) return;

    const intervalId = setInterval(() => {
      setCountDown(prev => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countDown]);

  useEffect(() => {
    if (countDown > 0) return;
    setCountDown(5);
    if (light === 'red') {
      setLight('green');
    }
    if (light === 'yellow') {
      setLight('red');
    }
    if (light === 'green') {
      setLight('yellow');
    }
  }, [countDown, light]);

  return {
    // props
    countDown,
    // methods
    percentage: (countDown / 5) * 100,
    redLight: light === 'red' ? colors[light] : colors.default,
    yellowLight: light === 'yellow' ? colors[light] : colors.default,
    greenLight: light === 'green' ? colors[light] : colors.default,
  };
};
