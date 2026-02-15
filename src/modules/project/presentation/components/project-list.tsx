import { useMemo } from "react";
import { getProjectColumns } from "./tables/project-columns";
import { Grid } from "antd";
import { AppTable } from "../../../../shared/components/tables/app-table";
import type { IProjectListProps } from "../../domain/interfaces/project-list.interface";
import type { IProjectListData } from "../../domain/dtos/project-list-response.dto";

export const ProjectList = ({
	projects,
	loading,
	total,
	onEdit,
	onDetails,
	onStatus,
	onDelete,
	page,
	pageSize,
	onChangePage,
}: IProjectListProps) => {
	const screens = Grid.useBreakpoint();
	const isMobile = (screens.xs && !screens.sm) ?? false;

	const columns = useMemo(
		() =>
			getProjectColumns({ onEdit, onDetails, onStatus, onDelete, isMobile }),
		[onEdit, onDetails, onStatus, onDelete, isMobile],
	);

	return (
		<AppTable<IProjectListData>
			columns={columns}
			dataSource={projects}
			loading={loading}
			pagination={{
				current: page,
				pageSize: pageSize,
				total: total,
				onChange: onChangePage,
			}}
			rowKey="uuid"
		/>
	);
};
