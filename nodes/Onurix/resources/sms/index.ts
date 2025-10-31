import type { INodeProperties } from 'n8n-workflow';
import { smsSendDescription } from './send';
import { smsSendTwoFactorCodeDescription } from './sendTwoFactorCode';

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
                value: 'send',
                description: 'Send SMS message',
                action: 'Send an SMS message',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/sms/send',
                    },
                }
            },
            {
                name: 'Send 2FA Code',
                value: 'send_2fa',
                description: 'Send 2FA code via SMS',
                action: 'Send a 2FA code via SMS',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/sms/2fa/send',
                    },
                }
            }
        ],
        default: 'send',
    },
    ...smsSendDescription,
    ...smsSendTwoFactorCodeDescription
];