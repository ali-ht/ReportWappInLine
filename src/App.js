import "./App.css";
import ProjectStatus from "./components/projectStatus";
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { Grid } from "@mui/material";
import DescriptionTitle from "./components/descriptionTitle";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid padding={"12px 12px 0px 12px"}>
          <ProjectStatus />
          <DescriptionTitle/>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
