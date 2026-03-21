import type { INodePropertyOptions } from 'n8n-workflow';

export const channelOptions: INodePropertyOptions[] = [
	{ name: 'All', value: 'ALL' },
	{ name: 'Call', value: 'CALL' },
	{ name: 'SMS', value: 'SMS' },
	{ name: 'WhatsApp', value: 'WA' },
];
