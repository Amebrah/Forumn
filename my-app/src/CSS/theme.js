import { createMuiTheme } from '@material-ui/core/styles';
import {blue, grey, yellow}  from '@material-ui/core/colors';


const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Arial'
      ].join(','),
    },
    palette: {
      primary: {
          main: grey[900]
      },
      secondary: {
          main: '#ffd600',
          contrastText: blue[50]
      }
    }
  });

export default theme;