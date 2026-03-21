import type { INodeProperties } from 'n8n-workflow';
import { channelOptions } from '../shared';

const showOnlyForGeneralBlockPhone = {
	operation: ['blockPhone'],
	resource: ['general'],
};

export const generalBlockPhoneDescription: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		default: '',
		required: true,
		description: 'Phone number to block. Include country code, e.g., +1234567890.',
		displayOptions: {
			show: showOnlyForGeneralBlockPhone,
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},
	{
		displayName: 'Channel',
		name: 'channel',
		type: 'options',
		default: 'ALL',
		required: true,
		description: 'Communication channel to block',
		displayOptions: {
			show: showOnlyForGeneralBlockPhone,
		},
		options: channelOptions,
		routing: {
			send: {
				type: 'body',
				property: 'channel',
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: false,
		description: 'Contact name (optional)',
		displayOptions: {
			show: showOnlyForGeneralBlockPhone,
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
