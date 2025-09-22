import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import { TrafficLight } from './TrafficLight';
import { TrafficLightWithHook } from './TrafficLightWithHook';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    <TrafficLightWithHook />
  </StrictMode>
);
