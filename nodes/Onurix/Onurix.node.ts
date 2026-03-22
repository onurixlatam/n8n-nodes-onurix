import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { smsOperations } from './resources/sms';
import { callsOperations } from './resources/calls';
import { generalOperations } from './resources/general';
import { whatsappOperations } from './resources/whatsapp';
import { urlOperations } from './resources/url';
import { groupsOperations } from './resources/groups';
import { contactsOperations } from './resources/contacts';


export class Onurix implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Onurix',
		name: 'onurix',
		icon: 'file:onurix_logo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Onurix API',
		defaults: {
			name: 'Onurix',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		// eslint-disable-next-line @n8n/community-nodes/no-credential-reuse
		credentials: [{ name: 'onurixApi', required: true }],
		requestDefaults: {
			baseURL: 'https://www.onurix.com/api/v1',
			ignoreHttpStatusErrors: true,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Contacts',
						value: 'contacts',
					},
					{
						name: 'General',
						value: 'general',
					},
					{
						name: 'Groups',
						value: 'groups',
					},
					{
						name: 'SMS',
						value: 'sms',
					},
					{
						name: 'Call',
						value: 'calls',
					},
					{
						name: 'URL',
						value: 'url',
					},
					{
						name: 'WhatsApp',
						value: 'whatsapp',
					},
				],
				default: 'sms',
			},
			...contactsOperations,
			...generalOperations,
			...groupsOperations,
			...smsOperations,
			...callsOperations,
			...urlOperations,
			...whatsappOperations,
		],
	};
}
