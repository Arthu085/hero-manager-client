import { Flex, Typography } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import type { SelectProps } from "antd";
import { AppUserSelect } from "./app-user-select";

const { Text } = Typography;

interface AppUserFilterSelectProps extends Omit<SelectProps, "options"> {
	value?: string;
	onChange: (value: any) => void;
	placeholder?: string;
	label?: string;
	width?: number | string;
	size?: SizeType;
	onlyActive?: boolean;
	limit?: number;
}

export const AppUserFilterSelect = ({
	value,
	onChange,
	placeholder = "Buscar pelo usuário...",
	label,
	width = "100%",
	size = "middle",
	onlyActive,
	limit,
	style,
	...rest
}: AppUserFilterSelectProps) => {
	return (
		<Flex vertical gap={4} style={{ width }}>
			{label && <Text strong>{label}</Text>}
			<AppUserSelect
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				size={size}
				showSearch
				{...rest}
			/>
		</Flex>
	);
};
