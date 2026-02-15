import {
	DashboardOutlined,
	LogoutOutlined,
	ProjectOutlined,
	UserAddOutlined,
	UserOutlined,
} from "@ant-design/icons";
import {
	DashboardRoutesEnum,
	ProjectRoutesEnum,
	UserRoutesEnum,
} from "../../enums/app-routes.enum";
import type { IAppMenuItem } from "../../interfaces/menu/app-menu.interface";
import { Link } from "react-router-dom";
import { RoleEnum } from "../../../shared/domain/enums/role.enum";

export const topMenuItems: IAppMenuItem[] = [
	{
		key: DashboardRoutesEnum.HOME,
		icon: <DashboardOutlined />,
		label: <Link to={DashboardRoutesEnum.HOME}>Dashboard</Link>,
	},
	{
		key: ProjectRoutesEnum.PROJECTS,
		icon: <ProjectOutlined />,
		label: <Link to={ProjectRoutesEnum.PROJECTS}>Projetos</Link>,
		allowedRoles: [RoleEnum.ADMIN, RoleEnum.USUARIO],
	},
	{
		key: UserRoutesEnum.USERS,
		icon: <UserAddOutlined />,
		label: <Link to={UserRoutesEnum.USERS}>Usuários</Link>,
		allowedRoles: [RoleEnum.ADMIN],
	},
];

export const bottomMenuItems = (logoutCallback: () => void): IAppMenuItem[] => [
	{
		key: UserRoutesEnum.PROFILE,
		icon: <UserOutlined />,
		label: <Link to={UserRoutesEnum.PROFILE}>Perfil</Link>,
	},
	{
		key: "logout",
		icon: <LogoutOutlined />,
		label: "Sair",
		onClick: logoutCallback,
		danger: true,
	},
];
