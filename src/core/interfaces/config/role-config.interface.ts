import type { RoleEnum } from "../../../shared/domain/enums/role.enum";
import type { IAppMenuItem } from "../menu/app-menu.interface";

export interface IRoleGuardProps {
	allowedRoles?: RoleEnum[];
	children?: IAppMenuItem[];
}
