import { userService } from "../../infrastructure/user.service";
import { Form } from "antd";
import {
	roleConfig,
	userCreateSchema,
	type IUserCreateDto,
} from "../../domain/dtos/user-create.dto";
import type { ICreateProps } from "../../../../shared/domain/interfaces/create.interface";
import { useFormSubmit } from "../../../../shared/hooks/use-form-submit";
import { AppModal } from "../../../../shared/components/modals/app-modal";
import { AppInput } from "../../../../shared/components/inputs/app-input";
import { AppPasswordInput } from "../../../../shared/components/inputs/app-password-input";
import { AppSelect } from "../../../../shared/components/selects/app-select";

export const UserCreate = ({ open, onClose, onSuccess }: ICreateProps) => {
	const [form] = Form.useForm();

	const handleCreate = async (dto: IUserCreateDto) => {
		return userService.create(dto);
	};

	const { saving, handleSubmit } = useFormSubmit<IUserCreateDto>(
		handleCreate,
		() => {
			onSuccess?.();
			onClose();
		},
	);

	return (
		<AppModal
			title="Criar Usuário"
			open={open}
			onCancel={onClose}
			onOk={form.submit}
			confirmLoading={saving}>
			<Form<IUserCreateDto>
				form={form}
				layout="vertical"
				onFinish={handleSubmit}
				disabled={saving}
				preserve={false}>
				<AppInput
					name="name"
					label="Nome Completo"
					placeholder="Seu nome completo..."
					zodSchema={userCreateSchema.shape.name}
					maxLength={200}
				/>
				<AppInput
					name="email"
					label="E-mail"
					placeholder="Seu e-mail..."
					zodSchema={userCreateSchema.shape.email}
					maxLength={250}
				/>
				<AppPasswordInput
					name="password"
					label="Senha"
					placeholder="*********"
					zodSchema={userCreateSchema.shape.password}
					maxLength={100}
				/>
				<AppInput
					name="character"
					label="Personagem"
					placeholder="Seu personagem..."
					zodSchema={userCreateSchema.shape.character}
					maxLength={200}
				/>
				<AppSelect
					name="role"
					label="Função"
					placeholder="Selecione uma função"
					options={roleConfig.options}
					zodSchema={userCreateSchema.shape.role}
					showSearch={{ optionFilterProp: "label" }}
				/>
			</Form>
		</AppModal>
	);
};
