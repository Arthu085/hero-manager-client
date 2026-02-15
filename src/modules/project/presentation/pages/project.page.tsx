import { Typography, Card, Row, Col } from "antd";
import { ProjectList } from "../components/project-list";
import { useModals } from "../../../../shared/hooks/use-modals";
import { useList } from "../../../../shared/hooks/use-list";
import { StatusEnum } from "../../../../shared/domain/enums/status.enum";
import { useRowAction } from "../../../../shared/hooks/use-row-action";
import { AppButton } from "../../../../shared/components/buttons/app-buton";
import { StatusFilter } from "../../../../shared/components/filters/app-status-filter";
import { ProjectCreate } from "../components/project-create";
import { ProjectEdit } from "../components/project-edit";
import { ProjectDetails } from "../components/project-details";
import type { IProjectListData } from "../../domain/dtos/project-list-response.dto";
import type { IProjectFilterDto } from "../../domain/dtos/project-filter.dto";
import { projectService } from "../../infra/project.service";
import { AppSearchFilter } from "../../../../shared/components/filters/app-search-filter";
import { ProjectStatusFilter } from "../components/filters/project-status-filter";
import { AppUserFilterSelect } from "../../../../shared/components/selects/user/app-user-filter-select";

const { Title } = Typography;

export const ProjectPage = () => {
	const modals = useModals<string>();
	const {
		loading,
		data: projects,
		meta,
		filters,
		handleFilterChange,
		handlePageChange,
		refresh,
	} = useList<IProjectListData, IProjectFilterDto>(projectService.findAll, {
		page: 1,
		limit: 10,
		status: StatusEnum.ATIVO,
	});

	const { handleAction: handleChangeStatus } = useRowAction(
		projectService.updateStatus,
		refresh,
	);

	const { handleAction: handleDelete } = useRowAction(
		projectService.delete,
		refresh,
	);

	return (
		<>
			<Row
				justify={"space-between"}
				align={"middle"}
				style={{ marginBottom: 16 }}>
				<Col flex="auto">
					<Title level={2}>Projetos</Title>
				</Col>
				<Col
					flex="none"
					style={{ display: "flex", justifyContent: "flex-end" }}>
					<AppButton
						label="Novo Projeto"
						type="primary"
						onClick={() => modals.openCreate()}
					/>
				</Col>
			</Row>
			<Card>
				<Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
					<Col xs={24} sm={24} md={12} lg={4} xl={4}>
						<StatusFilter
							value={filters.status}
							onChange={(val) => handleFilterChange("status", val)}
						/>
					</Col>
					<Col xs={24} sm={24} md={12} lg={10} xl={6}>
						<ProjectStatusFilter
							value={filters.projectStatus}
							onChange={(val) => handleFilterChange("projectStatus", val)}
						/>
					</Col>
					<Col xs={24} sm={24} md={12} lg={10} xl={6}>
						<AppUserFilterSelect
							label="Responsável"
							placeholder="Buscar pelo responsável do projeto..."
							value={filters.user}
							onChange={(val) => handleFilterChange("user", val)}
						/>
					</Col>
					<Col xs={24} sm={24} md={12} lg={12} xl={8}>
						<AppSearchFilter
							label="Nome"
							placeholder="Buscar pelo nome..."
							value={filters.name}
							onChange={(val) => handleFilterChange("name", val)}
						/>
					</Col>
				</Row>
				<ProjectList
					loading={loading}
					projects={projects}
					total={meta.total}
					page={filters.page}
					pageSize={filters.limit}
					onChangePage={handlePageChange}
					onEdit={(project) => modals.openEdit(project.uuid)}
					onDetails={(project) => modals.openDetails(project.uuid)}
					onStatus={handleChangeStatus}
					onDelete={handleDelete}
				/>
				<ProjectCreate
					open={modals.isCreateOpen}
					onClose={modals.closeCreate}
					onSuccess={() => {
						modals.closeCreate();
						refresh();
					}}
				/>
				<ProjectEdit
					open={modals.isEditOpen}
					uuid={modals.selectedUuid}
					onClose={modals.closeEdit}
					onSuccess={() => {
						modals.closeEdit();
						refresh();
					}}
				/>
				<ProjectDetails
					open={modals.isDetailsOpen}
					uuid={modals.selectedUuid}
					onClose={modals.closeDetails}
				/>
			</Card>
		</>
	);
};
