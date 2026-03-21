import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupsUpdate = {
	operation: ['update'],
	resource: ['groups'],
};

export const groupsUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'id',
		type: 'number',
		default: '',
		required: true,
		description: 'ID of the group to update',
		displayOptions: {
			show: showOnlyForGroupsUpdate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'New group name. No special characters or spaces allowed.',
		displayOptions: {
			show: showOnlyForGroupsUpdate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
