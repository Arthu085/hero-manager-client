import type {
	IApiResponse,
	IPaginatedResponse,
} from "../../../../core/interfaces/response/api-response.interface";
import type {
	StatusEnum,
	StatusEnumTranslated,
} from "../../../../shared/domain/enums/status.enum";
import type {
	ProjectStatusEnum,
	ProjectStatusEnumTranslated,
} from "../enums/project-status.enum";

export interface IProjectListData {
	uuid: string;
	name: string;
	description: string;
	projectStatus: {
		value: ProjectStatusEnum;
		label: ProjectStatusEnumTranslated;
	};
	agility: number;
	enchantment: number;
	efficiency: number;
	excellence: number;
	transparency: number;
	ambition: number;
	completionPercentage: number;
	user: {
		value: string;
		label: string;
		label2: string;
	};
	status: {
		value: StatusEnum;
		label: StatusEnumTranslated;
	};
}

export type IProjectListResponse = IApiResponse<
	IPaginatedResponse<IProjectListData>
>;
