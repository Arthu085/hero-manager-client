import { useCallback, useEffect, useState } from "react";
import { Modal, message } from "antd";
import type { IApiResponse } from "../../core/interfaces/response/api-response.interface";
import { getErrorMessage } from "../utils/api-error.util";

type FetcherFunction<TData> = () => Promise<IApiResponse<TData>>;

export const useFetchData = <TData>(
	fetcher: FetcherFunction<TData>,
	enabled: boolean = true,
) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<TData | null>(null);

	const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			const response = await fetcher();

			if (response.success && response.data) {
				setData(response.data);
			} else {
				message.error(response.message || "Não foi possível carregar os dados");
			}
		} catch (error) {
			Modal.error({
				title: "Erro",
				content: getErrorMessage(error),
			});
		} finally {
			setLoading(false);
		}
	}, [fetcher]);

	useEffect(() => {
		if (enabled) fetchData();
	}, [enabled, fetchData]);

	return { loading, data, refresh: fetchData };
};
