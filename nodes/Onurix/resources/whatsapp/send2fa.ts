import type { INodeProperties } from 'n8n-workflow';

const showOnlyForWhatsappSend2fa = {
	operation: ['send2fa'],
	resource: ['whatsapp'],
};

export const whatsappSend2faDescription: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		default: '',
		required: true,
		description: 'Phone number to send the 2FA code to, e.g., 573150123456.',
		displayOptions: {
			show: showOnlyForWhatsappSend2fa,
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},
	{
		displayName: 'App Name',
		name: 'appName',
		type: 'string',
		default: '',
		required: true,
		description: 'Application name used for the 2FA code generation',
		displayOptions: {
			show: showOnlyForWhatsappSend2fa,
		},
		routing: {
			send: {
				type: 'body',
				property: 'app-name',
			},
		},
	},
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'string',
		default: '',
		required: false,
		description: 'Meta template identifier (optional)',
		displayOptions: {
			show: showOnlyForWhatsappSend2fa,
		},
		routing: {
			send: {
				type: 'body',
				property: 'templateId',
			},
		},
	},
];
