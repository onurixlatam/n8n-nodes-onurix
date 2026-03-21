import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupsDelete = {
	operation: ['delete'],
	resource: ['groups'],
};

export const groupsDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'id',
		type: 'number',
		default: '',
		required: true,
		description: 'ID of the group to delete. The group must have no associated contacts.',
		displayOptions: {
			show: showOnlyForGroupsDelete,
		},
		routing: {
			send: {
				type: 'query',
				property: 'id',
			},
		},
	},
];
