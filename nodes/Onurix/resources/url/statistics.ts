import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUrlStatistics = {
	operation: ['statistics'],
	resource: ['url'],
};

export const urlStatisticsDescription: INodeProperties[] = [
	{
		displayName: 'URL Name',
		name: 'nameUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'Short URL identifier (name)',
		displayOptions: {
			show: showOnlyForUrlStatistics,
		},
		routing: {
			send: {
				type: 'body',
				property: 'name-url',
			},
		},
	},
	{
		displayName: 'Since',
		name: 'since',
		type: 'dateTime',
		default: '',
		required: true,
		description: 'Start date for the statistics range (YYYY-MM-DD)',
		displayOptions: {
			show: showOnlyForUrlStatistics,
		},
		routing: {
			send: {
				type: 'body',
				property: 'since',
			},
		},
	},
	{
		displayName: 'Until',
		name: 'until',
		type: 'dateTime',
		default: '',
		required: true,
		description: 'End date for the statistics range (YYYY-MM-DD)',
		displayOptions: {
			show: showOnlyForUrlStatistics,
		},
		routing: {
			send: {
				type: 'body',
				property: 'until',
			},
		},
	},
	{
		displayName: 'Category',
		name: 'category',
		type: 'options',
		default: '',
		required: false,
		description: 'Metric breakdown category. Premium URLs unlock additional options.',
		displayOptions: {
			show: showOnlyForUrlStatistics,
		},
		options: [
			{ name: 'None', value: '' },
			{ name: 'Date', value: 'date' },
			{ name: 'Hour', value: 'hour' },
			{ name: 'Country', value: 'country' },
			{ name: 'Device', value: 'device' },
			{ name: 'Operating System', value: 'operatingSystem' },
			// Premium only:
			{ name: 'Region (Premium)', value: 'region' },
			{ name: 'City (Premium)', value: 'city' },
			{ name: 'Brand (Premium)', value: 'brand' },
			{ name: 'Model (Premium)', value: 'model' },
			{ name: 'Browser (Premium)', value: 'browser' },
			{ name: 'Language (Premium)', value: 'lang' },
		],
		routing: {
			send: {
				type: 'body',
				property: 'category',
			},
		},
	},
];
