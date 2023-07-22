import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

export default function AppBarButton () {
  return (
    <Box sx={{ flexGrow: 1 , marginBottom:3}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        
              <Link to="/" exact>
                <HomeIcon  sx={{ color:'white'}}  fontSize='large' />
              </Link>
         
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontWeight:"bold", flexGrow: 1 }}>
           The Movies Saga
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}