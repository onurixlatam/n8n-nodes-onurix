import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactsCreate = {
	operation: ['create'],
	resource: ['contacts'],
};

export const contactsCreateDescription: INodeProperties[] = [
	{
		displayName: 'First Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForContactsCreate,
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
		required: true,
		displayOptions: {
			show: showOnlyForContactsCreate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'lastname',
			},
		},
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		required: true,
		typeOptions: {
			email: true,
		},
		displayOptions: {
			show: showOnlyForContactsCreate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'email',
			},
		},
	},
	{
		displayName: 'Phone Number',
		name: 'phone',
		type: 'string',
		default: '',
		required: true,
		description: 'Include country code, e.g., +1234567890.',
		displayOptions: {
			show: showOnlyForContactsCreate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},
];
