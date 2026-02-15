import { Flex, Typography } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import {
	ProjectStatusEnum,
	ProjectStatusEnumTranslated,
} from "../../../domain/enums/project-status.enum";
import { AppSelect } from "../../../../../shared/components/selects/app-select";

const { Text } = Typography;

interface ProjectStatusFilterProps {
	value?: ProjectStatusEnum;
	onChange: (value?: ProjectStatusEnum) => void;
	width?: number | string;
	placeholder?: string;
	size?: SizeType;
}

const options = (
	Object.keys(ProjectStatusEnum) as Array<keyof typeof ProjectStatusEnum>
).map((key) => ({
	label: ProjectStatusEnumTranslated[key],
	value: ProjectStatusEnum[key],
}));

export const ProjectStatusFilter = ({
	value,
	onChange,
	width = "100%",
	placeholder = "Filtrar por Status do Projeto",
	size = "middle",
}: ProjectStatusFilterProps) => {
	return (
		<Flex vertical gap={4} style={{ width }}>
			<Text strong>Status do Projeto</Text>
			<AppSelect
				placeholder={placeholder}
				style={{ width: "100%", height: 40 }}
				value={value}
				onChange={onChange}
				options={options}
				size={size}
				allowClear={true}
			/>
		</Flex>
	);
};
