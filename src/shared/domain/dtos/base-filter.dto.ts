import type { StatusEnum } from "../enums/status.enum";

export interface IBaseFilterDto {
	page: number;
	limit: number;
	status?: StatusEnum;
}
