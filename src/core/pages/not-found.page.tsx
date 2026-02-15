import { Result } from "antd";
import { useNavigate } from "react-router-dom";
import { AppButton } from "../../shared/components/buttons/app-buton";
import { DashboardRoutesEnum } from "../enums/app-routes.enum";

export const NotFoundPage = () => {
	const navigate = useNavigate();

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh",
				backgroundColor: "#f5f5f5",
			}}>
			<Result
				status="404"
				title="404"
				subTitle="Desculpe, a página que você está procurando não existe."
				extra={
					<AppButton
						label="Voltar ao Início"
						type="primary"
						onClick={() => navigate(DashboardRoutesEnum.HOME)}
					/>
				}
			/>
		</div>
	);
};
