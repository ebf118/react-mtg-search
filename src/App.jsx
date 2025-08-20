import React from 'react'
import Header from './components/Header.jsx'
import CardDetail from './components/CardDetail.jsx'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { useTheme } from './hooks/UseTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

function App() {
  const { isDarkMode } = useTheme();

  return (
      <MUIThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Header />
        <Box sx={{ mt: 4 }}>  {/* Adding margin top spacing */}
          <Container maxWidth="lg" sx={{justifyContent: 'center'}}>
            <CardDetail />
          </Container>
        </Box>
      </MUIThemeProvider>
  )

}

export default App
