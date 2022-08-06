
import { ThemeProvider } from '@material-ui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import React from 'react';
import './App.css';
import { customizationState } from './redux/selectors';
import Routers from './routers';
import theme from './themes';
// import { ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import ScrollTopContainer from './layout/ScrollTopContainer';

function App() {
  const customization = useSelector(customizationState)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(customization)}>
        <CssBaseline />
        <ScrollTopContainer>
          <Routers />
        </ScrollTopContainer>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
