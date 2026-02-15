import {
	AuthRoutesEnum,
	DashboardRoutesEnum,
	NotFoundRoutesEnum,
	ProjectRoutesEnum,
	UserRoutesEnum,
} from "../enums/app-routes.enum";
import { Navigate } from "react-router-dom";
import { NotFoundPage } from "../pages/not-found.page";
import { GuestGuard } from "../components/guards/guest.guard";
import { AuthLayout } from "../components/layouts/auth.layout";
import { AuthGuard } from "../components/guards/auth.guard";
import { MainLayout } from "../components/layouts/main.layout";
import type { IAppRoute } from "../interfaces/config/route-config.interface";
import { LoginPage } from "../../modules/auth/presentation/pages/login.page";
import { RegisterPage } from "../../modules/auth/presentation/pages/register.page";
import { DashboardPage } from "../../modules/dashboard/presentation/pages/dashboard.page";
import { ProfilePage } from "../../modules/profile/presentation/pages/profile.page";
import { UserPage } from "../../modules/user/presentation/pages/user.page";
import { ProjectPage } from "../../modules/project/presentation/pages/project.page";

export const routesConfig: IAppRoute[] = [
	{
		element: <GuestGuard />,
		children: [
			{
				element: <AuthLayout />,
				children: [
					{
						path: AuthRoutesEnum.LOGIN,
						element: <LoginPage />,
					},
					{
						path: AuthRoutesEnum.REGISTER,
						element: <RegisterPage />,
					},
					{
						path: "/auth",
						element: <Navigate to={AuthRoutesEnum.LOGIN} replace />,
					},
				],
			},
		],
	},
	{
		element: <AuthGuard />,
		children: [
			{
				element: <MainLayout />,
				children: [
					{
						path: DashboardRoutesEnum.HOME,
						element: <DashboardPage />,
					},
					{
						path: UserRoutesEnum.USERS,
						element: <UserPage />,
					},
					{
						path: UserRoutesEnum.PROFILE,
						element: <ProfilePage />,
					},
					{
						path: ProjectRoutesEnum.PROJECTS,
						element: <ProjectPage />,
					},
				],
			},
		],
	},
	{
		path: NotFoundRoutesEnum.NOT_FOUND,
		element: <NotFoundPage />,
	},
];
