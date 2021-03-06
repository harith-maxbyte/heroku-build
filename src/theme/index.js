// @ts-nocheck
import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core/styles';
import palette from './palette';
import typography from './typography';

// read more at https://material-ui.com/customization/themes
const theme = createTheme({
  palette: palette,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  topBar: {
    height: '56px'
  }
});

export default theme;
