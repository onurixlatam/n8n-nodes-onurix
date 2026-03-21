import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactsListByGroup = {
	operation: ['listByGroup'],
	resource: ['contacts'],
};

export const contactsListByGroupDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'number',
		default: '',
		required: true,
		description: 'ID of the group whose contacts to retrieve',
		displayOptions: {
			show: showOnlyForContactsListByGroup,
		},
		routing: {
			request: {
				url: '=/group/{{ $value }}/contacts/list',
			},
		},
	},
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
			show: showOnlyForContactsListByGroup,
		},
		routing: {
			send: {
				type: 'query',
				property: 'page',
			},
		},
	},
];
