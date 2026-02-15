import type { IApiResponse } from "../../../../core/interfaces/response/api-response.interface";
import type { IProjectListData } from "./project-list-response.dto";

export interface IProjectDetailsData extends IProjectListData {
	createdAt: string;
	updatedAt: string | null;
	deletedAt: string | null;
}

export type IProjectDetailsResponse = IApiResponse<IProjectDetailsData>;
