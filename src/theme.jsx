import { createTheme } from '@mui/material/styles';
import { dark, light } from '@mui/material/styles/createPalette';

export const theme = createTheme({
  palette: {
    customGray: {
      main: '#F1F5F3',
      lightText:"#505F56",
      mainText:"#152B1E",
      darkText:"#303633",
    },
    statusColor:{
        veryGood:"#14B858",
        good:"#0AA7D9",
        normal:"#505F56",
        bad:"#F7B408",
        veryBad:"#D02128"
    }
  },
});