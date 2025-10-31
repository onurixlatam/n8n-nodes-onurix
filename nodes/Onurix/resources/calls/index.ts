import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCalls = {
    resource: ['calls'],
};  

export const callsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForCalls,
        },
        options: [
            {
                name: 'Make Call',
                value: 'makeCall',
                description: 'Make a voice call',
                action: 'Make a voice call',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/calls/make',
                    },
                }
            }
        ],
        default: 'makeCall',
    }
];  