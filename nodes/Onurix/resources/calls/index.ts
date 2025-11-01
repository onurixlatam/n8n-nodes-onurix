import type { INodeProperties } from 'n8n-workflow';
import { callsSendDescription } from './send';

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
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        method: 'POST',
                        url: '/calls/make',
                    },
                },
            },
        ],
        default: 'send_call',
    },
    ...callsSendDescription,
];
