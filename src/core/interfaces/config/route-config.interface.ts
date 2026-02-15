import type { RouteObject } from "react-router-dom";
import type { RoleEnum } from "../../../shared/domain/enums/role.enum";
import type { StatusEnum } from "../../../shared/domain/enums/status.enum";

export type IAppRoute = Omit<RouteObject, "children"> & {
	path?: string;
	allowedRoles?: RoleEnum[];
	allowedStatus?: StatusEnum;
	title?: string;
	children?: IAppRoute[];
};
