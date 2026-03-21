import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactsDelete = {
	operation: ['delete'],
	resource: ['contacts'],
};

export const contactsDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'id',
		type: 'number',
		default: '',
		required: true,
		description: 'ID of the contact to delete. The contact must not be associated with any group.',
		displayOptions: {
			show: showOnlyForContactsDelete,
		},
		routing: {
			send: {
				type: 'query',
				property: 'id',
			},
		},
	},
];
