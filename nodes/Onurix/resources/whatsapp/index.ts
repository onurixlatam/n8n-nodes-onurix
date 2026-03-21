import type { INodeProperties } from 'n8n-workflow';
import { whatsappSendDescription } from './send';
import { whatsappSendNoTemplateDescription } from './sendNoTemplate';
import { whatsappSend2faDescription } from './send2fa';

const showOnlyForWhatsapp = {
	resource: ['whatsapp'],
};

export const whatsappOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForWhatsapp,
		},
		options: [
			{
				name: 'Send 2FA Code',
				value: 'send2fa',
				description: 'Send a 2FA verification code via WhatsApp',
				action: 'Send a 2FA code via WhatsApp',
				routing: {
					request: {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						url: '/whatsapp/2fa/send',
					},
				},
			},
			{
				name: 'Send Message',
				value: 'send',
				description: 'Send a WhatsApp message using a Meta template',
				action: 'Send a WhatsApp message',
				routing: {
					request: {
						method: 'POST',
						url: '/whatsapp/send',
					},
				},
			},
			{
				name: 'Send Message Without Template',
				value: 'sendNoTemplate',
				description: 'Send a free-form WhatsApp message (user must have initiated the conversation first)',
				action: 'Send a WhatsApp message without template',
				routing: {
					request: {
						method: 'POST',
						url: '/whatsapp/send/no-template',
					},
				},
			},
		],
		default: 'send',
	},
	...whatsappSend2faDescription,
	...whatsappSendDescription,
	...whatsappSendNoTemplateDescription,
];
