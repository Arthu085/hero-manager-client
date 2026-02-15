import type { IBaseFilterDto } from "../../../../shared/domain/dtos/base-filter.dto";
import type { RoleEnum } from "../../../../shared/domain/enums/role.enum";

export interface IUserFilterDto extends IBaseFilterDto {
	name?: string;
	character?: string;
	role?: RoleEnum;
}
