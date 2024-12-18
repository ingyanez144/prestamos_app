import '../App.css';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


export  function Whatssap({esMovil}){
   const conteiner={
    alignItems: 'center',
    background:"red",
   }
    const fabStyle = {
        position: 'fixed',
        bottom: 16,
        right: 16,
        color:"white",
        display: 'flex',
        background:"#2e7d32",
        alignItems: 'center',
        borderRadius: '50%'
        
      };
      const fabStylPhone = {
        position: 'fixed',
        bottom: 100,
        right: 16,
        color:"white",
        display: 'flex',
        background:"#BDBDBD",
        alignItems: 'center',
        borderRadius: '50%',
        ...(esMovil && { bottom: 60 }), 
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
            main: '#2e7d32', // Por ejemplo, rojo
          },
          secondary: {
            main: '#BDBDBD', // Por ejemplo, verde
            fontsize:24
          },
        },
      });

      const mensajePredeterminado = encodeURIComponent("Hola soy Iván Yáñez \n Solicito información sobre lo siguiente: \n  A- Molde piedra: 1%0A- Molde roca: \n A- Molde para piso liso: \n                       Día: viernes 9 de mayo");
      const handleClick = (type) => {
        const phoneNumber = '+526672111101';
        if (type === 'phone') {
          window.location.href = `tel:${phoneNumber}`;
        } else if (type === 'whatsapp') {
          window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${mensajePredeterminado}`;
        }
      };

    return (
    <Box >
    <Box sx={fabStylPhone} onClick={() => handleClick('phone')}>
    <ThemeProvider theme={theme}>
        <Fab aria-label="Add" color="secondary"
        sx={{
          width: { xs: '40px', sm: '64px' },
          height: { xs: '40px', sm: '64px' }
        }}>
        <LocalPhoneIcon
        sx={{
          width: { xs: '40px', sm: '64px' },
          height: { xs: '40px', sm: '64px' }
        }} />
        </Fab>
        <Typography variant="body2" color="#EEEEEE" sx={{fontSize:{ xs: 14, sm: 24 }}}>
        +52 6672  11 11 01
        </Typography> 
        </ThemeProvider>
     </Box>
    <Box sx={fabStyle} onClick={() => handleClick('whatsapp')}>
    <ThemeProvider theme={theme}>
      <Fab aria-label="Add" color="primary" sx={{
        width: { xs: '40px', sm: '64px' },
        height: { xs: '40px', sm: '64px' }
      }}>
      <WhatsAppIcon
      sx={{
      width: { xs: '40px', sm: '64px' }, // Tamaño para dispositivos extra pequeños (xs) y pequeños (sm)
      height: { xs: '40px', sm: '64px' }, // Tamaño para dispositivos extra pequeños (xs) y pequeños (sm)
    }} />
      </Fab>
      <Typography variant="body2" color="#EEEEEE" sx={{fontSize:{ xs: 14, sm: 24 }}}>
    +52 6672 11 11 01
    </Typography>        
      </ThemeProvider>
      </Box>
      </Box>
    );
}