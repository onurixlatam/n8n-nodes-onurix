import {
	NodeApiError,
	type IExecuteSingleFunctions,
	type INodeExecutionData,
	type IN8nHttpFullResponse,
	type IDataObject,
	type IHttpRequestOptions,
	type JsonObject,
	type INodePropertyOptions,
	type PostReceiveAction,
	type PreSendAction,
} from 'n8n-workflow';

/**
 * Removes body fields whose value is an empty JSON object string '{}' or an empty object {}.
 * Use as preSend on optional JSON fields (header, body, button) so they are omitted when blank.
 */
export const omitEmptyJsonFields: PreSendAction = async function (
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	if (requestOptions.body && typeof requestOptions.body === 'object') {
		const body = requestOptions.body as IDataObject;
		for (const key of Object.keys(body)) {
			const val = body[key];
			if (
				val === '{}' ||
				val === '' ||
				(typeof val === 'object' && val !== null && Object.keys(val as object).length === 0)
			) {
				delete body[key];
			}
		}
	}
	return requestOptions;
};

export const channelOptions: INodePropertyOptions[] = [
	{ name: 'All', value: 'ALL' },
	{ name: 'Call', value: 'CALL' },
	{ name: 'SMS', value: 'SMS' },
	{ name: 'WhatsApp', value: 'WA' },
];

export const onurixErrorHandler: PostReceiveAction = async function (
	this: IExecuteSingleFunctions,
	items: INodeExecutionData[],
	response: IN8nHttpFullResponse,
): Promise<INodeExecutionData[]> {
	if (response.statusCode >= 400) {
		const body = response.body as IDataObject;

		// Onurix application error: { error: <code>, msg: "<message>" }
		if (typeof body?.msg === 'string') {
			const errorCode = typeof body?.error === 'number' ? body.error : undefined;
			throw new NodeApiError(this.getNode(), body as JsonObject, {
				message: body.msg,
				description: errorCode !== undefined ? `Código de error Onurix: ${errorCode}` : undefined,
				httpCode: String(response.statusCode),
			});
		}

		// API Platform / proxy error: { title, detail }
		const detail = typeof body?.detail === 'string' ? body.detail : undefined;
		const title = typeof body?.title === 'string' ? body.title : undefined;
		const message = detail ?? title ?? response.statusMessage ?? `HTTP ${response.statusCode}`;

		throw new NodeApiError(this.getNode(), body as JsonObject, {
			message,
			httpCode: String(response.statusCode),
		});
	}
	return items;
};
