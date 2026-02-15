import { Card, Col, Empty, Row, Typography } from "antd";
import { useMemo } from "react";
import {
	dashboardItems,
	filterDashboardItems,
} from "../config/dashboard.config";
import { useAuth } from "../../../auth/presentation/hooks/use-auth.hook";
import { AppCard } from "../../../../shared/components/cards/app-card";

const { Title } = Typography;

export const DashboardPage = () => {
	const { user } = useAuth();

	const accessibleItems = useMemo(() => {
		return filterDashboardItems(dashboardItems, user?.role);
	}, [user]);

	return (
		<>
			<Title level={2} style={{ marginBottom: 24 }}>
				Dashboard
			</Title>
			{accessibleItems.length > 0 ? (
				<Row gutter={[16, 16]}>
					{accessibleItems.map((item, index) => (
						<Col key={index} xs={24} sm={12} lg={6}>
							<AppCard
								title={item.title}
								subtitle={item.subtitle}
								icon={item.icon}
								to={item.to}
								iconColor={item.iconColor}
							/>
						</Col>
					))}
				</Row>
			) : (
				<Card>
					<Empty
						image={Empty.PRESENTED_IMAGE_SIMPLE}
						description="Nenhuma funcionalidade disponível para o seu perfil"
					/>
				</Card>
			)}
		</>
	);
};
