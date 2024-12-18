import '../App.css';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


const abrirFacebook = (link) => {
    window.open(link, '_blank');
  };
  
  // Función para abrir enlace de Instagram
  const abrirInstagram = (link) => {
    window.open(link, '_blank');
  };

export function RedesSociales({ esMovil }) {
   const conteiner={
    alignItems: 'center',
    background:"red",
   }
    const fabStyle = {
        display: 'flex',
        alignItems: 'center',
      };
      const fabStylPhone = {
        display: 'flex',
        alignItems: 'center',
      };
      /*const fabStyleCar = {
        position: 'fixed',
        top: 60,
        right: 16,
        color:"white"
      };*/
    
      const theme = createTheme({
        palette: {
          primary: {
            main: '#F1F3F4', // Por ejemplo, rojo
          },
          secondary: {
            main: '#F1F3F4', // Por ejemplo, verde
            fontsize:24
          },
        },
      });

    return (
        <Box display="flex" justifyContent="flex-end">
        <Box sx={{fabStylPhone}} onClick={() => abrirFacebook("https://m.facebook.com/moldesparaconcretoestampadoculiacanyaco")}>
          <ThemeProvider theme={theme}>
            <Button>
              <FacebookIcon sx={{ width: { xs: '30px', sm: '40px' }, height: { xs: '30px', sm: '40px' },color: '#515BD4', }} />
              </Button>
          </ThemeProvider>
        </Box>
        <Box sx={fabStyle} >
          <ThemeProvider theme={theme}>
            <Button>
              <InstagramIcon sx={{ width: { xs: '30px', sm: '40px' }, height: { xs: '30px', sm: '40px' }, color: '#DD2A7B' }} />
              </Button>
          </ThemeProvider>
        </Box>
      </Box>
    );
}