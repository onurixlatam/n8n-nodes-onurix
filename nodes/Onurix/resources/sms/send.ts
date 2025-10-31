import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSmsSend = {
    operation: ['send'],
    resource: ['sms'],
};

export const smsSendDescription: INodeProperties[] = [
    {
        displayName: 'Phone Number',
        name: 'phoneNumber',
        type: 'string',
        default: '573201234567',
        required: true,
        description: 'Phone number to send the SMS to. Include country code, e.g., +1234567890',
        displayOptions: {
            show: showOnlyForSmsSend,
        },
        routing: {
            send: {
                type: 'body',
                property: 'phones',
            }
        }
    },
    {
        displayName: 'Message',
        name: 'sms',
        type: 'string',
        typeOptions: {
            maxLength: 800,
        },
        default: 'Este es un mensaje desde n8n',
        required: true,
        description: 'Content of the SMS message (max 800 characters)',
        displayOptions: {
            show: showOnlyForSmsSend,
        },
        routing: {
            send: {
                type: 'body',
                property: 'sms',
            }
        }
    }
];  