import { ConfigProvider, App as AntdApp } from "antd";
import { RouterProvider } from "react-router-dom";
import ptBR from "antd/locale/pt_BR";
import "./index.css";
import { antThemeConfig } from "./core/config/theme/theme.config";
import { router } from "./core/routes/router";
import { AuthProvider } from "./modules/auth/presentation/contexts/auth.provider";

function App() {
	return (
		<ConfigProvider theme={antThemeConfig} locale={ptBR}>
			<AntdApp>
				<AuthProvider>
					<RouterProvider router={router} />
				</AuthProvider>
			</AntdApp>
		</ConfigProvider>
	);
}

export default App;
