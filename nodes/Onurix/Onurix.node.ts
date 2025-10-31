import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { smsOperations } from './resources/sms';
import { callsOperations } from './resources/calls';


export class Onurix implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Onurix',
		name: 'onurix',
		icon: { light: 'file:onurix_logo.svg', dark: 'file:onurix_logo.svg' },
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
		credentials: [{ name: 'onurixApi', required: true }],
		requestDefaults: {
			baseURL: 'https://www.onurix.com/api/v1',
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
						name: 'Sms',
						value: 'sms',
					},
					{
						name: 'Calls',
						value: 'calls',
					}
				],
				default: 'sms',
			},
			...smsOperations,	
			...callsOperations	
		],
	};
}
