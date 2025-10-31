import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class OnurixApi implements ICredentialType {
	name = 'onurixApi';

	displayName = 'Onurix API';

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-onurix?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		
		{
			displayName: 'User Id',
			name: 'userId',
			type: 'number',
			default: '',
			required: true,
		},
		{
			displayName: 'Secret Key',
			name: 'secretKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		}
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			body: {
				client: '={{$credentials.userId}}',
				key: '={{$credentials.secretKey}}',
			},
			qs: {
				client: '={{$credentials.userId}}',
				key: '={{$credentials.secretKey}}',
			}
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://www.onurix.com/api/v1',
			method: 'GET',
			url: '/balance',
		},
	};
}
