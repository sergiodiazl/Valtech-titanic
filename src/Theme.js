import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
const theme = {
  colors: {
    body: '#1c2a54',
    main: '#000',
    dark: '#8dbdc5',
    light: '#f4f6f5',
    darkSecondary: '#0d4c56',
    tertiary: '#8d8fc5',
    lightTertiary: '#bf98c1',
    darkTertiary: '#55178e',
  },
  shadows: {
    main: '2px 1px 5px  #6c94d9',

    mainHover: '2px 4px 5px  #6c94d9',
  },
  fonts: ['sans-serif', 'Roboto'],
};
const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-transform:capitalize;
  }

  body {
   
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.main};
     max-width:100vw;
    min-height:100vh;
   
    font-family:   Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    
  }
  
  h1{
    width:100%;
    color: ${({ theme }) => theme.colors.light};
    text-align:center;
    font-family:'Bungee','Playfair Display',Roboto;
    margin:0;
    font-weight:bold;
    line-height:1em;
    text-shadow: 4px 2px 1px ${({ theme }) => theme.colors.darkSecondary},
         4px 2px 1px ${({ theme }) => theme.colors.dark}, 
        3px 1px 2px rgba(0, 0, 0, 0.15),
        3px 2px 2px rgba(0, 0, 0, 0.15);  
        
    @media (min-width: 400px) {
        font-size: 2.5em;
        }
    @media (min-width: 900px) {
        font-size: 4em;
    }     
  }
  }
*{
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;
}
 
  
`;
const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Theme;
