import type { MenuProps } from "antd";
import type { IRoleGuardProps } from "../config/role-config.interface";

export type IAppMenuItem = Required<MenuProps>["items"][number] &
	IRoleGuardProps;
