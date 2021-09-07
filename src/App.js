import AppContainer from "./pages";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import styles from "./styles";

const theme = extendTheme(styles);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppContainer />
    </ChakraProvider>
  );
}

export default App;
