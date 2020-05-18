import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'dashboard',
                title    : 'Dashboard',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboard',
            },
            {
                id       : 'onlineUser',
                title    : 'Online User',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'web',
                url      : '/online-user',
            },
            {
                id       : 'Subscription',
                title    : 'Subscription',
                // translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'attach_money',
                url      : '/subscription',
                // badge    : {
                //     title    : '25',
                //     translate: 'NAV.SAMPLE.BADGE',
                //     bg       : '#F44336',
                //     fg       : '#FFFFFF'
                // }
            }
        ]
    }
];
