import type { INodeProperties } from 'n8n-workflow';


const showOnlyForCallsSend = {
    operation: ['calls'],
    resource: ['sms'],
};

export const callsSendDescription: INodeProperties[] = [
    {
        displayName: 'Phone Number',
        name: 'phoneNumber',
        type: 'string',
        default: '',
        required: true,
        description: 'Phone number to send the SMS to. Include country code, e.g., +1234567890',
        displayOptions: {
            show: showOnlyForCallsSend,
        },
        routing: {
            send: {
                type: 'body',
                property: 'phone',
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
            show: showOnlyForCallsSend,
        },
        routing: {
            send: {
                type: 'body',
                property: 'sms',
            }
        }
    }
];      