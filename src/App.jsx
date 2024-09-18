import "./App.css";
import { ChakraBaseProvider } from "@chakra-ui/react";
import Main from "./pages/Main";
import theme from "../theme";
function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Main />
    </ChakraBaseProvider>
  );
}

export default App;
