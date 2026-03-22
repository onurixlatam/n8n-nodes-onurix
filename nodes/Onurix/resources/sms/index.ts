import type { INodeProperties } from 'n8n-workflow';
import { smsSendDescription } from './send';
import { smsSendTwoFactorCodeDescription } from './sendTwoFactorCode';
import { smsSendGroupsDescription } from './sendGroups';
import { onurixErrorHandler } from '../shared';

const showOnlyForSms = {
    resource: ['sms'],
};

export const smsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForSms,
        },
        options: [
            {
                name: 'Send',
                value: 'send_sms',
                description: 'Send SMS message',
                action: 'Send an SMS message',
                routing: {
                    request: {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        method: 'POST',
                        url: '/sms/send',
                    },
                    output: { postReceive: [onurixErrorHandler] },
                },
            },
            {
                name: 'Send to Groups',
                value: 'send_to_groups',
                description: 'Send SMS message to groups',
                action: 'Send an SMS message to groups',
                routing: {
                    request: {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        method: 'POST',
                        url: '/sms/send',
                    },
                    output: { postReceive: [onurixErrorHandler] },
                },
            },
            {
                name: 'Send 2FA Code',
                value: 'send_2fa',
                description: 'Send 2FA code via SMS',
                action: 'Send a 2FA code via SMS',
                routing: {
                    request: {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        method: 'POST',
                        url: '/sms/2fa/send',
                    },
                    output: { postReceive: [onurixErrorHandler] },
                },
            }
        ],
        default: 'send_sms',
    },
    ...smsSendDescription,
    ...smsSendTwoFactorCodeDescription,
    ...smsSendGroupsDescription
];