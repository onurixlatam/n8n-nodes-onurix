import type { INodeProperties } from 'n8n-workflow';
import { groupsCreateDescription } from './create';
import { groupsDeleteDescription } from './delete';
import { groupsListDescription } from './list';
import { groupsUpdateDescription } from './update';
import { onurixErrorHandler } from '../shared';

const showOnlyForGroups = {
	resource: ['groups'],
};

export const groupsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForGroups,
		},
		options: [
			{
				name: 'Create Group',
				value: 'create',
				description: 'Create a new contact group',
				action: 'Create a group',
				routing: {
					request: {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						url: '/group/create',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
			{
				name: 'Delete Group',
				value: 'delete',
				description: 'Delete a group (must have no associated contacts)',
				action: 'Delete a group',
				routing: {
					request: {
						method: 'DELETE',
						url: '/group/delete',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
			{
				name: 'List Groups',
				value: 'list',
				description: 'Retrieve a paginated list of contact groups',
				action: 'List groups',
				routing: {
					request: {
						method: 'GET',
						url: '/group/list',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
			{
				name: 'Update Group',
				value: 'update',
				description: 'Update the name of an existing group',
				action: 'Update a group',
				routing: {
					request: {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						url: '/group/update',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
		],
		default: 'create',
	},
	...groupsCreateDescription,
	...groupsDeleteDescription,
	...groupsListDescription,
	...groupsUpdateDescription,
];
