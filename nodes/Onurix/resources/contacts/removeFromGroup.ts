import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactsRemoveFromGroup = {
	operation: ['removeFromGroup'],
	resource: ['contacts'],
};

export const contactsRemoveFromGroupDescription: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'id',
		type: 'number',
		default: '',
		required: true,
		description: 'ID of the contact to disassociate',
		displayOptions: {
			show: showOnlyForContactsRemoveFromGroup,
		},
		routing: {
			send: {
				type: 'query',
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
		description: 'ID of the group the contact is associated with',
		displayOptions: {
			show: showOnlyForContactsRemoveFromGroup,
		},
		routing: {
			send: {
				type: 'query',
				property: 'group-id',
			},
		},
	},
];
