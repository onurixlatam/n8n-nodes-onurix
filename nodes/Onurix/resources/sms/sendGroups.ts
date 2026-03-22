import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSmsSendGroups = {
    operation: ['send_to_groups'],
    resource: ['sms'],
};

export const smsSendGroupsDescription: INodeProperties[] = [
    {
        displayName: 'Phone Number',
        name: 'phoneNumber',
        type: 'string',
        default: '',
        required: true,
        description: 'Phone number to send the SMS to. Include country code, e.g., +1234567890',
        displayOptions: {
            show: showOnlyForSmsSendGroups,
        },
        routing: {
            send: {
                type: 'body',
                property: 'phone',
            }
        }
    },
    {
        displayName: 'Groups ID',
        name: 'groups',
        type: 'string',
        default: '',
        required: true,
        description: 'Comma-separated group IDs, e.g., 1,2,3.',
        displayOptions: {
            show: showOnlyForSmsSendGroups,
        },
        routing: {
            send: {
                type: 'body',
                property: 'groups',
            }
        }
    }
];