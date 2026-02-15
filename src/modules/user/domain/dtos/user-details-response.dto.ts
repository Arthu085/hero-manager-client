import type { IApiResponse } from "../../../../core/interfaces/response/api-response.interface";
import type { IUserListData } from "./user-list-response.dto";

export interface IUserDetailsData extends IUserListData {
	createdAt: string;
	updatedAt: string | null;
	deletedAt: string | null;
}

export type IUserDetailsResponse = IApiResponse<IUserDetailsData>;
