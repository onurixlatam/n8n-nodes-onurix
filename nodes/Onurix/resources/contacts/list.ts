import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactsList = {
	operation: ['list'],
	resource: ['contacts'],
};

export const contactsListDescription: INodeProperties[] = [
	{
		displayName: 'Page',
		name: 'page',
		type: 'number',
		default: 1,
		required: false,
		description: 'Page number to return. Default 1. Max 50 items per page.',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: showOnlyForContactsList,
		},
		routing: {
			send: {
				type: 'query',
				property: 'page',
			},
		},
	},
];
