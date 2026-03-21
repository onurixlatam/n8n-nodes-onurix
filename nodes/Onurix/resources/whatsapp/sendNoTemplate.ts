import type { INodeProperties } from 'n8n-workflow';

const showOnlyForWhatsappSendNoTemplate = {
	operation: ['sendNoTemplate'],
	resource: ['whatsapp'],
};

export const whatsappSendNoTemplateDescription: INodeProperties[] = [
	{
		displayName: 'Phone Sender ID',
		name: 'phoneSenderId',
		type: 'string',
		default: '',
		required: true,
		description: 'Sender phone number ID (from Meta)',
		displayOptions: {
			show: showOnlyForWhatsappSendNoTemplate,
		},
		routing: {
			send: {
				type: 'query',
				property: 'phone-sender-id',
			},
		},
	},
	{
		displayName: 'From Phone Meta ID',
		name: 'fromPhoneMetaId',
		type: 'string',
		default: '',
		required: true,
		description: 'Meta ID of the sender phone number',
		displayOptions: {
			show: showOnlyForWhatsappSendNoTemplate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'from_phone_meta_id',
			},
		},
	},
	{
		displayName: 'Destination Phone',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		description: 'Destination phone number. The user must have initiated a conversation previously with this WhatsApp line.',
		displayOptions: {
			show: showOnlyForWhatsappSendNoTemplate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},
	{
		displayName: 'Message Type',
		name: 'messageType',
		type: 'options',
		default: 'text',
		required: true,
		description: 'Type of message to send',
		displayOptions: {
			show: showOnlyForWhatsappSendNoTemplate,
		},
		options: [
			{ name: 'Text', value: 'text' },
			// Future types go here, e.g.:
			// { name: 'Image', value: 'image' },
			// { name: 'Video', value: 'video' },
			// { name: 'Document', value: 'document' },
		],
		routing: {
			send: {
				type: 'body',
				property: 'message.type',
			},
		},
	},

	// ─── Fields for type: text ────────────────────────────────────────────────
	{
		displayName: 'Message',
		name: 'messageValue',
		type: 'string',
		default: '',
		required: true,
		description: 'Text content of the message',
		typeOptions: {
			rows: 3,
		},
		displayOptions: {
			show: {
				...showOnlyForWhatsappSendNoTemplate,
				messageType: ['text'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'message.value',
			},
		},
	},

	// ─── Fields for type: image (example structure for future use) ────────────
	// {
	// 	displayName: 'Image URL',
	// 	name: 'messageImageUrl',
	// 	type: 'string',
	// 	default: '',
	// 	required: true,
	// 	displayOptions: { show: { ...showOnlyForWhatsappSendNoTemplate, messageType: ['image'] } },
	// 	routing: { send: { type: 'body', property: 'message.url' } },
	// },
	// {
	// 	displayName: 'Caption',
	// 	name: 'messageImageCaption',
	// 	type: 'string',
	// 	default: '',
	// 	displayOptions: { show: { ...showOnlyForWhatsappSendNoTemplate, messageType: ['image'] } },
	// 	routing: { send: { type: 'body', property: 'message.caption' } },
	// },
];
