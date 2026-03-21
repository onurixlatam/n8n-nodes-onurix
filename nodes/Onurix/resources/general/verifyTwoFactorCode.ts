import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGeneralVerify2fa = {
	operation: ['verify2fa'],
	resource: ['general'],
};

export const generalVerifyTwoFactorCodeDescription: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		default: '',
		required: true,
		description: 'Phone number used when the 2FA code was generated, e.g., 573150123456.',
		displayOptions: {
			show: showOnlyForGeneralVerify2fa,
		},
		routing: {
			send: {
				type: 'body',
				property: 'phone',
			},
		},
	},
	{
		displayName: 'App Name',
		name: 'appName',
		type: 'string',
		default: '',
		required: true,
		description: 'Application name used when the 2FA code was generated',
		displayOptions: {
			show: showOnlyForGeneralVerify2fa,
		},
		routing: {
			send: {
				type: 'body',
				property: 'app-name',
			},
		},
	},
	{
		displayName: 'Code',
		name: 'code',
		type: 'string',
		default: '',
		required: true,
		description: 'Verification code received via SMS',
		displayOptions: {
			show: showOnlyForGeneralVerify2fa,
		},
		routing: {
			send: {
				type: 'body',
				property: 'code',
			},
		},
	},
];
