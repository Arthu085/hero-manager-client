import { AppModal } from "../../../../shared/components/modals/app-modal";
import { AppStatusTag } from "../../../../shared/components/tags/app-status-tag";
import type { IDetailsProps } from "../../../../shared/domain/interfaces/details.interface";
import { useFetchModal } from "../../../../shared/hooks/use-fetch-modal";
import { formatDate } from "../../../../shared/utils/date.util";
import type { IUserDetailsData } from "../../domain/dtos/user-details-response.dto";
import { userService } from "../../infra/user.service";
import { Descriptions, Tag } from "antd";

export const UserDetails = ({ open, onClose, uuid }: IDetailsProps) => {
	const { loading, data: user } = useFetchModal<IUserDetailsData>(
		uuid,
		open,
		userService.findOne,
		onClose,
	);

	return (
		<AppModal
			title="Detalhes do Usuário"
			open={open}
			onCancel={onClose}
			hideFooter
			loading={loading}>
			{user ? (
				<Descriptions column={1} bordered size="small" layout="horizontal">
					<Descriptions.Item label="Nome Completo">
						{user.name}
					</Descriptions.Item>
					<Descriptions.Item label="E-mail">{user.email}</Descriptions.Item>
					<Descriptions.Item label="Personagem">
						{user.character}
					</Descriptions.Item>
					<Descriptions.Item label="Função">
						<Tag color={"blue"}>{user.role.label}</Tag>
					</Descriptions.Item>
					<Descriptions.Item label="Status">
						<AppStatusTag status={user.status} />
					</Descriptions.Item>
					<Descriptions.Item label="Data de Criação">
						{formatDate(user.createdAt) || "-"}
					</Descriptions.Item>
					<Descriptions.Item label="Data de Atualização">
						{formatDate(user.updatedAt) || "-"}
					</Descriptions.Item>
					<Descriptions.Item label="Data de Exclusão">
						{formatDate(user.deletedAt) || "-"}
					</Descriptions.Item>
				</Descriptions>
			) : null}
		</AppModal>
	);
};
