import { Flex, Spin } from "antd";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthRoutesEnum } from "../../enums/app-routes.enum";
import { useAuth } from "../../../modules/auth/presentation/hooks/use-auth.hook";

export const AuthGuard = () => {
	const { isAuthenticated, isLoading } = useAuth();
	const location = useLocation();

	if (isLoading) {
		return (
			<Flex justify="center" align="center" style={{ height: "100vh" }}>
				<Spin size="large" tip="Carregando sessão..." />
			</Flex>
		);
	}

	if (!isAuthenticated) {
		return (
			<Navigate to={AuthRoutesEnum.LOGIN} state={{ from: location }} replace />
		);
	}

	return <Outlet />;
};
