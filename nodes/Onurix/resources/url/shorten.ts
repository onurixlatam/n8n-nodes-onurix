import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUrlShorten = {
	operation: ['shorten'],
	resource: ['url'],
};

export const urlShortenDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'Name to identify the short URL',
		displayOptions: {
			show: showOnlyForUrlShorten,
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Long URL',
		name: 'urlLong',
		type: 'string',
		default: '',
		required: true,
		description: 'The original URL to shorten',
		displayOptions: {
			show: showOnlyForUrlShorten,
		},
		routing: {
			send: {
				type: 'body',
				property: 'url-long',
			},
		},
	},
	{
		displayName: 'Alias',
		name: 'alias',
		type: 'string',
		default: '',
		required: false,
		description: 'Custom alias for the shortened URL (optional)',
		displayOptions: {
			show: showOnlyForUrlShorten,
		},
		routing: {
			send: {
				type: 'body',
				property: 'alias',
			},
		},
	},
	{
		displayName: 'Is Premium',
		name: 'isPremium',
		type: 'boolean',
		default: false,
		required: false,
		displayOptions: {
			show: showOnlyForUrlShorten,
		},
		routing: {
			send: {
				type: 'body',
				property: 'is-premium',
			},
		},
	},
	{
		displayName: 'Group Name',
		name: 'groupName',
		type: 'string',
		default: '',
		required: false,
		description: 'Associated group name (optional)',
		displayOptions: {
			show: showOnlyForUrlShorten,
		},
		routing: {
			send: {
				type: 'body',
				property: 'group-name',
			},
		},
	},
	{
		displayName: 'Domain Name',
		name: 'domainName',
		type: 'string',
		default: '',
		required: false,
		description: 'Registered custom domain name (optional)',
		displayOptions: {
			show: showOnlyForUrlShorten,
		},
		routing: {
			send: {
				type: 'body',
				property: 'domain-name',
			},
		},
	},
	{
		displayName: 'Expiration (Months)',
		name: 'expirationTimeStatistics',
		type: 'number',
		default: 0,
		required: false,
		description: 'URL expiration in months. Use 0 for no expiration.',
		displayOptions: {
			show: showOnlyForUrlShorten,
		},
		routing: {
			send: {
				type: 'body',
				property: 'expiration-time-statistics',
			},
		},
	},
];
