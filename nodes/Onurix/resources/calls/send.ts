import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCallsMake = {
	operation: ['makeCall'],
	resource: ['calls'],
};

export const callsSendDescription: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		default: '',
		required: true,
		description: 'Phone number to call. Include country code, e.g., +1234567890.',
		displayOptions: {
			show: showOnlyForCallsMake,
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},
];
