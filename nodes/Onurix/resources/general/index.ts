import type { INodeProperties } from 'n8n-workflow';
import { generalBlockPhoneDescription } from './blockPhone';
import { generalVerifyTwoFactorCodeDescription } from './verifyTwoFactorCode';
import { onurixErrorHandler } from '../shared';

const showOnlyForGeneral = {
	resource: ['general'],
};

export const generalOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForGeneral,
		},
		options: [
			{
				name: 'Block Phone',
				value: 'blockPhone',
				description: 'Block a phone number from receiving communications',
				action: 'Block a phone number',
				routing: {
					request: {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						url: '/block-phone',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
			{
				name: 'Get Balance',
				value: 'getBalance',
				description: 'Retrieve the available account credits',
				action: 'Get account balance',
				routing: {
					request: {
						method: 'GET',
						url: '/balance',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
			{
				name: 'Verify 2FA Code',
				value: 'verify2fa',
				description: 'Verify a 2FA code sent via SMS',
				action: 'Verify a 2FA code',
				routing: {
					request: {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						method: 'POST',
						url: '/2fa/verification-code',
					},
					output: { postReceive: [onurixErrorHandler] },
				},
			},
		],
		default: 'getBalance',
	},
	...generalBlockPhoneDescription,
	...generalVerifyTwoFactorCodeDescription,
];
