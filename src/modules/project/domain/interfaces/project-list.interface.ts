import type { IStatusDto } from "../../../../shared/domain/dtos/status.dto";
import type { IListProps } from "../../../../shared/domain/interfaces/list.interface";
import type { IProjectListData } from "../dtos/project-list-response.dto";

export interface IProjectListProps extends Omit<
	IListProps<IProjectListData>,
	"items"
> {
	projects: IProjectListData[];
	onEdit: (project: IProjectListData) => void;
	onDetails: (project: IProjectListData) => void;
	onStatus: (uuid: string, dto: IStatusDto) => Promise<void>;
	onDelete: (uuid: string) => Promise<void>;
}
