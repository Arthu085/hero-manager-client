import { Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { IStatusDto } from "../../../../../shared/domain/dtos/status.dto";
import { AppStatusTag } from "../../../../../shared/components/tags/app-status-tag";
import { AppActionsTable } from "../../../../../shared/components/tables/app-action-table";
import type { IProjectListData } from "../../../domain/dtos/project-list-response.dto";

interface GetProjectColumnsProps {
	onEdit: (project: IProjectListData) => void;
	onDetails: (project: IProjectListData) => void;
	onStatus: (uuid: string, dto: IStatusDto) => Promise<void>;
	onDelete: (uuid: string) => Promise<void>;
	isMobile?: boolean;
}

export const getProjectColumns = ({
	onEdit,
	onDetails,
	onStatus,
	onDelete,
	isMobile = false,
}: GetProjectColumnsProps): ColumnsType<IProjectListData> => [
	{
		title: "Nome",
		dataIndex: "name",
		key: "name",
		render: (text) => <strong>{text}</strong>,
		width: 300,
	},
	{
		title: "Descrição",
		dataIndex: "description",
		key: "description",
		width: 250,
	},
	{
		title: "Status do Projeto",
		dataIndex: "projectStatus",
		key: "projectStatus",
		width: 250,
		render: (projectStatus) => (
			<Tag color="green">{projectStatus?.label || projectStatus}</Tag>
		),
	},
	{
		title: "Agilidade",
		dataIndex: "agility",
		key: "agility",
		render: (agility) => <span>{agility + "%"}</span>,
	},
	{
		title: "Encantamento",
		dataIndex: "enchantment",
		key: "enchantment",
		render: (enchantment) => <span>{enchantment + "%"}</span>,
	},
	{
		title: "Eficiência",
		dataIndex: "efficiency",
		key: "efficiency",
		render: (efficiency) => <span>{efficiency + "%"}</span>,
	},
	{
		title: "Transparência",
		dataIndex: "transparency",
		key: "transparency",
		render: (transparency) => <span>{transparency + "%"}</span>,
	},
	{
		title: "Ambição",
		dataIndex: "ambition",
		key: "ambition",
		render: (ambition) => <span>{ambition + "%"}</span>,
	},
	{
		title: "Porcentagem de Conclusão",
		dataIndex: "completionPercentage",
		key: "completionPercentage",
		render: (completionPercentage) => <span>{completionPercentage + "%"}</span>,
	},
	{
		title: "Nome do Responsável",
		dataIndex: "user",
		key: "user",
		width: 200,
		render: (user) => <span>{user?.label || user}</span>,
	},
	{
		title: "Personagem do Responsável",
		dataIndex: "user",
		key: "user",
		width: 200,
		render: (user) => <span>{user?.label2 || user}</span>,
	},
	{
		title: "Status",
		dataIndex: "status",
		key: "status",
		render: (status) => <AppStatusTag status={status} />,
		fixed: isMobile ? undefined : "right",
		width: 150,
	},
	{
		title: "Ações",
		key: "actions",
		render: (_, record) => (
			<AppActionsTable
				entityName="Projeto"
				onEdit={() => onEdit(record)}
				onDetails={() => onDetails(record)}
				onDelete={() => onDelete(record.uuid)}
				currentStatus={record.status.value}
				onStatus={(dto) => onStatus(record.uuid, dto)}
			/>
		),
		fixed: isMobile ? undefined : "right",
		width: 140,
	},
];
