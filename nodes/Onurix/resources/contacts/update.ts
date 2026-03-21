import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactsUpdate = {
	operation: ['update'],
	resource: ['contacts'],
};

export const contactsUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'id',
		type: 'number',
		default: '',
		required: true,
		description: 'ID of the contact to update',
		displayOptions: {
			show: showOnlyForContactsUpdate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'name',
		type: 'string',
		default: '',
		required: false,
		displayOptions: {
			show: showOnlyForContactsUpdate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'lastname',
		type: 'string',
		default: '',
		required: false,
		displayOptions: {
			show: showOnlyForContactsUpdate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'lastname',
			},
		},
	},
	{
		displayName: 'Phone Number',
		name: 'phone',
		type: 'string',
		default: '',
		required: false,
		description: 'Include country code, e.g., +1234567890.',
		displayOptions: {
			show: showOnlyForContactsUpdate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		required: false,
		typeOptions: {
			email: true,
		},
		displayOptions: {
			show: showOnlyForContactsUpdate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'email',
			},
		},
	},
];
