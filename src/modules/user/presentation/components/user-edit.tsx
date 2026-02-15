import { userService } from "../../infrastructure/user.service";
import { Form } from "antd";
import {
	userUpdateSchema,
	type IUserUpdateDto,
} from "../../domain/dtos/user-update.dto";
import { roleConfig } from "../../domain/dtos/user-create.dto";
import type { IEditProps } from "../../../../shared/domain/interfaces/edit.interface";
import type { IUserListData } from "../../domain/dtos/user-list-response.dto";
import { useFormFetch } from "../../../../shared/hooks/use-form-fetch";
import { useFormSubmit } from "../../../../shared/hooks/use-form-submit";
import { AppModal } from "../../../../shared/components/modals/app-modal";
import { AppInput } from "../../../../shared/components/inputs/app-input";
import { AppPasswordInput } from "../../../../shared/components/inputs/app-password-input";
import { AppSelect } from "../../../../shared/components/selects/app-select";

export const UserEdit = ({ open, onClose, uuid, onSuccess }: IEditProps) => {
	const [form] = Form.useForm();

	const { loading: fetching } = useFormFetch<IUserListData, any>(
		uuid,
		open,
		userService.findOne,
		form,
		(data) => ({
			...data,
			role: data.role.value,
			password: undefined,
		}),
		onClose,
	);

	const handleUpdate = async (dto: IUserUpdateDto) => {
		if (!uuid) throw new Error("UUID não fornecido");
		return userService.update(uuid, dto);
	};

	const { saving, handleSubmit } = useFormSubmit<IUserUpdateDto>(
		handleUpdate,
		() => {
			onSuccess?.();
			onClose();
		},
	);

	return (
		<AppModal
			title="Editar Usuário"
			open={open}
			onCancel={onClose}
			onOk={form.submit}
			confirmLoading={saving}
			loading={fetching}>
			<Form<IUserUpdateDto>
				form={form}
				layout="vertical"
				onFinish={handleSubmit}
				disabled={saving}
				preserve={false}>
				<AppInput
					name="name"
					label="Nome Completo"
					placeholder="Seu nome completo..."
					zodSchema={userUpdateSchema.shape.name}
					maxLength={200}
				/>
				<AppInput
					name="email"
					label="E-mail"
					placeholder="Seu e-mail..."
					zodSchema={userUpdateSchema.shape.email}
					maxLength={250}
				/>
				<AppPasswordInput
					name="password"
					label="Senha"
					placeholder="*********"
					zodSchema={userUpdateSchema.shape.password}
					maxLength={100}
				/>
				<AppInput
					name="character"
					label="Personagem"
					placeholder="Seu personagem..."
					zodSchema={userUpdateSchema.shape.character}
					maxLength={200}
				/>
				<AppSelect
					name="role"
					label="Função"
					placeholder="Selecione uma função"
					options={roleConfig.options}
					zodSchema={userUpdateSchema.shape.role}
					showSearch={{ optionFilterProp: "label" }}
				/>
			</Form>
		</AppModal>
	);
};
