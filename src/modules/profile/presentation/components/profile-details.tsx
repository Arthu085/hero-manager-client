import { Flex, Avatar, Tag, Descriptions, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import type { IProfileDetails } from "../../domain/interfaces/profile-details.interface";
import { AppStatusTag } from "../../../../shared/components/tags/app-status-tag";

export const ProfileDetails = ({ user }: IProfileDetails) => {
	return (
		<Row gutter={[24, 24]}>
			<Col xs={24} md={6}>
				<Flex vertical align="center" gap="small">
					<Avatar
						size={{ xs: 80, sm: 100, md: 100, lg: 120, xl: 120 }}
						icon={<UserOutlined />}
						style={{ backgroundColor: "#1677ff" }}
					/>
					<Tag color="blue">{user.role.label}</Tag>
					<AppStatusTag status={user.status} />
				</Flex>
			</Col>
			<Col xs={24} md={18}>
				<Descriptions
					title="Informações do Usuário"
					bordered
					layout="vertical"
					column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}>
					<Descriptions.Item label="Nome Completo">
						{user.name}
					</Descriptions.Item>
					<Descriptions.Item label="E-mail">{user.email}</Descriptions.Item>
					<Descriptions.Item label="Personagem">
						{user.character}
					</Descriptions.Item>
				</Descriptions>
			</Col>
		</Row>
	);
};
