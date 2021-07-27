import {
	createTheme,
	makeStyles,
	ThemeProvider,
} from "@material-ui/core/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#00838e",
			light: "#4fb3be",
			dark: "#005661",
		},
		secondary: {
			main: "#bdbdbd",
			light: "#efefef",
			dark: "#8d8d8d",
		},
	},
});

export default theme;
