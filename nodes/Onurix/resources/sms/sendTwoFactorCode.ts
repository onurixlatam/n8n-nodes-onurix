import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSmsTwoFactorCode = {
    operation: ['send_2fa'],
    resource: ['sms'],
};
export const smsSendTwoFactorCodeDescription: INodeProperties[] = [
    {
        displayName: 'Phone Number',
        name: 'phoneNumber',
        type: 'string',
        default: '',
        required: true,
        description: 'Phone number to send the 2FA code to. Include country code, e.g., +1234567890',
        displayOptions: {
            show: showOnlyForSmsTwoFactorCode,
        },
        routing: {
            send: {
                type: 'body',
                property: 'phone',
            }
        }
    },
    {
        displayName: 'App Name',
        name: 'appName',
        type: 'string',
        default: '',
        required: true,
        description: 'Name of the application or service requesting the 2FA code',
        displayOptions: {
            show: showOnlyForSmsTwoFactorCode,
        },
        routing: {
            send: {
                type: 'body',
                property: 'app-name',
            }
        }
    }
];
