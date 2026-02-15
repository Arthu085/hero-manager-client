import { AppModal } from "../../../../shared/components/modals/app-modal";
import { AppStatusTag } from "../../../../shared/components/tags/app-status-tag";
import type { IDetailsProps } from "../../../../shared/domain/interfaces/details.interface";
import { useFetchModal } from "../../../../shared/hooks/use-fetch-modal";
import { formatDate } from "../../../../shared/utils/date.util";
import type { IProjectDetailsData } from "../../domain/dtos/project-details-response.dto";
import { projectService } from "../../infra/project.service";
import { Descriptions, Tag } from "antd";

export const ProjectDetails = ({ open, onClose, uuid }: IDetailsProps) => {
	const { loading, data: project } = useFetchModal<IProjectDetailsData>(
		uuid,
		open,
		projectService.findOne,
		onClose,
	);

	return (
		<AppModal
			title="Detalhes do Projeto"
			open={open}
			onCancel={onClose}
			hideFooter
			loading={loading}>
			{project ? (
				<Descriptions column={1} bordered size="small" layout="horizontal">
					<Descriptions.Item label="Nome">{project.name}</Descriptions.Item>
					<Descriptions.Item label="Descrição">
						{project.description}
					</Descriptions.Item>
					<Descriptions.Item label="Status do Projeto">
						<Tag color="green">
							{project.projectStatus?.label || project.projectStatus}
						</Tag>
					</Descriptions.Item>
					<Descriptions.Item label="Agilidade">
						{project.agility + "%"}
					</Descriptions.Item>
					<Descriptions.Item label="Encantamento">
						{project.enchantment + "%"}
					</Descriptions.Item>
					<Descriptions.Item label="Eficiência">
						{project.efficiency + "%"}
					</Descriptions.Item>
					<Descriptions.Item label="Transparência">
						{project.transparency + "%"}
					</Descriptions.Item>
					<Descriptions.Item label="Ambição">
						{project.ambition + "%"}
					</Descriptions.Item>
					<Descriptions.Item label="Porcentagem de Conclusão">
						{project.completionPercentage + "%"}
					</Descriptions.Item>
					<Descriptions.Item label="Nome do Responsável">
						{project.user?.label}
					</Descriptions.Item>
					<Descriptions.Item label="Personagem do Responsável">
						{project.user?.label2}
					</Descriptions.Item>
					<Descriptions.Item label="Status">
						<AppStatusTag status={project.status} />
					</Descriptions.Item>
					<Descriptions.Item label="Data de Criação">
						{formatDate(project.createdAt) || "-"}
					</Descriptions.Item>
					<Descriptions.Item label="Data de Atualização">
						{formatDate(project.updatedAt) || "-"}
					</Descriptions.Item>
					<Descriptions.Item label="Data de Exclusão">
						{formatDate(project.deletedAt) || "-"}
					</Descriptions.Item>
				</Descriptions>
			) : null}
		</AppModal>
	);
};
