import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactsAddToGroup = {
	operation: ['addToGroup'],
	resource: ['contacts'],
};

export const contactsAddToGroupDescription: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'id',
		type: 'number',
		default: '',
		required: true,
		description: 'ID of the contact to associate',
		displayOptions: {
			show: showOnlyForContactsAddToGroup,
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'number',
		default: '',
		required: true,
		description: 'ID of the group to associate the contact with',
		displayOptions: {
			show: showOnlyForContactsAddToGroup,
		},
		routing: {
			send: {
				type: 'body',
				property: 'group-id',
			},
		},
	},
];
