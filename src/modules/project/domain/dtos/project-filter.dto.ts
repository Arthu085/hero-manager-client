import type { IBaseFilterDto } from "../../../../shared/domain/dtos/base-filter.dto";
import type { ProjectStatusEnum } from "../enums/project-status.enum";

export interface IProjectFilterDto extends IBaseFilterDto {
	name?: string;
	projectStatus?: ProjectStatusEnum;
	user?: string;
}
