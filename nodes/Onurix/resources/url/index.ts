import type { INodeProperties } from 'n8n-workflow';
import { urlShortenDescription } from './shorten';
import { urlStatisticsDescription } from './statistics';
import { onurixErrorHandler } from '../shared';

const showOnlyForUrl = {
	resource: ['url'],
};

export const urlOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForUrl,
		},
		options: [
			{
				name: 'Get Statistics',
				value: 'statistics',
				description: 'Retrieve click statistics for a short URL',
				action: 'Get short URL statistics',
				routing: {
					request: {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						url: '/url/short-statistic',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
			{
				name: 'Shorten URL',
				value: 'shorten',
				description: 'Create a short URL from a long URL',
				action: 'Shorten a URL',
				routing: {
					request: {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						url: '/url/short',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
		],
		default: 'shorten',
	},
	...urlShortenDescription,
	...urlStatisticsDescription,
];
