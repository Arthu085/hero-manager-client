import { api } from "../../../core/config/axios/axios.config";
import type { IStatusDto } from "../../../shared/domain/dtos/status.dto";
import type { IProjectCreateDto } from "../domain/dtos/project-create.dto";
import type { IProjectDetailsResponse } from "../domain/dtos/project-details-response.dto";
import type { IProjectFilterDto } from "../domain/dtos/project-filter.dto";
import type { IProjectListResponse } from "../domain/dtos/project-list-response.dto";
import type { IProjectUpdateDto } from "../domain/dtos/project-update.dto";

export const projectService = {
	findAll: async (
		filters: IProjectFilterDto,
	): Promise<IProjectListResponse> => {
		const response = await api.get<IProjectListResponse>("/project", {
			params: filters,
		});
		return response.data;
	},

	findOne: async (uuid: string): Promise<IProjectDetailsResponse> => {
		const response = await api.get<IProjectDetailsResponse>(`/project/${uuid}`);
		return response.data;
	},

	create: async (dto: IProjectCreateDto): Promise<IProjectListResponse> => {
		const response = await api.post<IProjectListResponse>("/project", dto);
		return response.data;
	},

	update: async (
		uuid: string,
		dto: IProjectUpdateDto,
	): Promise<IProjectListResponse> => {
		const response = await api.patch<IProjectListResponse>(
			`/project/${uuid}`,
			dto,
		);
		return response.data;
	},

	updateStatus: async (
		uuid: string,
		dto: IStatusDto,
	): Promise<IProjectListResponse> => {
		const response = await api.put<IProjectListResponse>(
			`/project/${uuid}`,
			dto,
		);
		return response.data;
	},

	delete: async (uuid: string): Promise<IProjectListResponse> => {
		const response = await api.delete<IProjectListResponse>(`/project/${uuid}`);
		return response.data;
	},
};
