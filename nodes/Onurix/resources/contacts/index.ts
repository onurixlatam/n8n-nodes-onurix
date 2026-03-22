import type { INodeProperties } from 'n8n-workflow';
import { contactsAddToGroupDescription } from './addToGroup';
import { contactsCreateDescription } from './create';
import { contactsDeleteDescription } from './delete';
import { contactsListDescription } from './list';
import { contactsListByGroupDescription } from './listByGroup';
import { contactsRemoveFromGroupDescription } from './removeFromGroup';
import { contactsUpdateDescription } from './update';
import { onurixErrorHandler } from '../shared';

const showOnlyForContacts = {
	resource: ['contacts'],
};

export const contactsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForContacts,
		},
		options: [
			{
				name: 'Add To Group',
				value: 'addToGroup',
				description: 'Associate a contact with a group',
				action: 'Add a contact to a group',
				routing: {
					request: {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						url: '/contacts/group/add',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
			{
				name: 'Create Contact',
				value: 'create',
				description: 'Create a new contact',
				action: 'Create a contact',
				routing: {
					request: {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						url: '/contacts/create',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
			{
				name: 'Delete Contact',
				value: 'delete',
				description: 'Delete a contact (must not be associated with any group)',
				action: 'Delete a contact',
				routing: {
					request: {
						method: 'DELETE',
						url: '/contacts/delete',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
			{
				name: 'List Contacts',
				value: 'list',
				description: 'Retrieve a paginated list of all contacts',
				action: 'List contacts',
				routing: {
					request: {
						method: 'GET',
						url: '/contacts/list',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
			{
				name: 'List By Group',
				value: 'listByGroup',
				description: 'Retrieve a paginated list of contacts in a group',
				action: 'List contacts by group',
				routing: {
					request: {
						method: 'GET',
						url: '/group/contacts/list',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
			{
				name: 'Remove From Group',
				value: 'removeFromGroup',
				description: 'Disassociate a contact from a group',
				action: 'Remove a contact from a group',
				routing: {
					request: {
						method: 'DELETE',
						url: '/contacts/group/remove',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
			{
				name: 'Update Contact',
				value: 'update',
				description: 'Update an existing contact\'s data',
				action: 'Update a contact',
				routing: {
					request: {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						url: '/contacts/update',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
		],
		default: 'create',
	},
	...contactsAddToGroupDescription,
	...contactsCreateDescription,
	...contactsDeleteDescription,
	...contactsListDescription,
	...contactsListByGroupDescription,
	...contactsRemoveFromGroupDescription,
	...contactsUpdateDescription,
];
