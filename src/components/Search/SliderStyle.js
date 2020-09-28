import styled from 'styled-components'
const SliderStyle = styled.div`
 
  position: relative;
  width: 100%;
  height: 1em;
  margin: 5% 0;

  background: ${({ theme }) => theme.colors.light};
  font-family: monospace;
  border-radius: 5px;

  box-shadow: ${({ theme }) => theme.shadows.main};
  & > input[type='range'] {
    width: calc(100% - 0.5em);
    position: absolute;
    bottom: 5px;
    left: 0;
    -webkit-appearance: none;
    background: transparent;
  }
  & > input[type='range']:last-of-type {
    margin-left: 0.5em;
  }
  {/*indicadores de slider*/}
  & > input[type='range']::-webkit-slider-thumb {
    
    border: 1px solid none;
    height: 1.5em;
    width: 0.5em;
    border-radius: 0 0 100% 100%;
    transform: translateY(-0.3em);
    -webkit-appearance: none;
    background: #ffffff;
    cursor: pointer;
    margin-top: 0px; 
     box-shadow: 1px 1px 1px #6c94d9, 0px 0px 1px #0d0d0d; 
  }
  & > input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5em;
    cursor: pointer;

   
  }
  {/*indicadores y fondo para mozilla*/}
  & > input[type='range']::-moz-range-thumb {
    border: 1px solid none;
    height: 1.5em;
    width: 0.5em;
    border-radius: 0 0 100% 100%;
    transform: translateY(-0.3em);
    
    background: #ffffff;
    cursor: pointer;
     box-shadow: 1px 1px 1px #6c94d9, 0px 0px 1px #0d0d0d;
  
  }
  & > input[type='range']::-moz-range-track {
    -webkit-appearance: none;
    height: 0px;
  }
  {/*indicadores y fondo para edge e ie*/}
  & > input[type='range']::-ms-thumb {
   
    border: 1px solid none;
    height: 1.5em;
    width: 0.5em;
    border-radius: 0 0 100% 100%;
    transform: translateY(-0.3em);
   
    background: #ffffff;
    cursor: pointer;
    margin-top: 0px; 
     box-shadow: 1px 1px 1px #6c94d9, 0px 0px 1px #0d0d0d; 
  }
  & > input[type='range']::-ms-track {
    
    width: 100%;
    height: 0.5em;
    cursor: pointer;
    background: transparent; 
  border-color: transparent;
  color: transparent;
  }
  & > input[type='range']:focus {
    outline: none; 
  }
`;
export default SliderStyle