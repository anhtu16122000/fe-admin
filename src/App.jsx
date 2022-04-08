
// import { ThemeProvider } from '@material-ui/material/styles';
import './App.css'
import { customizationState } from './redux/selectors';
import store, { persistor } from './redux/store';
import React, { useEffect } from 'react';
import Routers from './routers'
import theme from './themes'
import { CssBaseline } from '@material-ui/core'
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import ScrollTopContainer from './layout/ScrollTopContainer';
import userSlice from './redux/reducers/userSlice'


function App() {
  const customization = useSelector(customizationState)
  const  dispatch = useDispatch()

  useEffect( () => {
    dispatch(userSlice.actions.fail())
  }, [])
  
  return (    
    <StyledEngineProvider injectFirst>
      <CssBaseline/>
      <ThemeProvider theme = {theme(customization)}>
        <ScrollTopContainer>
          <Routers/>
        </ScrollTopContainer>
      </ThemeProvider>  
    </StyledEngineProvider>
  );
}

export default App;
