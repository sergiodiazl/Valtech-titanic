import React, { useState,useCallback, useEffect } from 'react';
import SliderStyle from './SliderStyle';

export default function Slider({ name,maxRange, minRange, onChange }) {
  const [maxValue, setMaxValue] = useState(50);

  const [minValue, setMinValue] = useState(20);
  
 const onChangeCallBack=useCallback(
     (value) => {
         onChange(value)
     },
     [onChange],
 )
  const handleChange = (event) => {
    const eName = event.target.name;
    const eValue = event.target.value;
    switch (eName) {
      case 'maxValue':
        setMaxValue(parseInt(eValue, 10));
        break;
      case 'minValue':
        setMinValue(parseInt(eValue, 10));
        break;
      default:
        break;
    }
  };
  //mueve los indicadores para que el minimo siempre este a la izquierda
  useEffect(() => {
    const minMax = { max: maxValue, min: minValue };
    console.log(minMax);
    if (maxValue < minValue) {
      setMinValue(maxValue - 1);
    }
    if (minValue > maxValue) {
      setMaxValue(minValue + 1);
    }
    onChangeCallBack(minMax);
  }, [maxValue, minValue,onChangeCallBack]);
  return (
    <SliderStyle>
      <input
        type="range"
        name="minValue"
        
        id={`min${name}`}
        min={minRange}
        max={maxRange - 1}
        step={1}
        value={minValue}
        onChange={handleChange}
      />

      <input
        type="range"
        name="maxValue"
        id={`max${name}`}
        min={minRange}
        max={maxRange}
        step={1}
        value={maxValue}
        onChange={handleChange}
      />
    </SliderStyle>
  );
}
