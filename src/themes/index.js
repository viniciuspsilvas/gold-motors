import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import yellow from "@material-ui/core/colors/yellow";
import purple from "@material-ui/core/colors/purple";

const primaryGreen = green[500];
const accentGreen = green.A200;
const darkGreen = green[900];
const primaryPurple = purple[500];
const accentPurple = purple.A200;
const darkPurple = purple[900];

export const overridings = {
  name: 'Light Theme',
  palette: {
    primary: {
      light: accentGreen,
      main: blue[300],
      dark: darkGreen,
      contrastText: "#fff"
    },
    secondary: {
      light: accentPurple,
      main: yellow[300],
      dark: darkPurple,
      contrastText: "#fff"
    }
  }
};

export default createMuiTheme(overridings);