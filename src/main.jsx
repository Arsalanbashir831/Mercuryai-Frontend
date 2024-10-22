import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext";
import { RefferalProvider } from "./context/RefferalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<AuthProvider>
				<RefferalProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</RefferalProvider>
			</AuthProvider>
		</ChakraProvider>
	</React.StrictMode>
);
