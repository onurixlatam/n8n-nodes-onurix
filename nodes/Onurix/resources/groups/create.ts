import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupsCreate = {
	operation: ['create'],
	resource: ['groups'],
};

export const groupsCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'Group name. No special characters or spaces allowed.',
		displayOptions: {
			show: showOnlyForGroupsCreate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
