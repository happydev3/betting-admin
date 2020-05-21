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
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboard',
            },
            {
                id       : 'onlineUser',
                title    : 'Online User',
                type     : 'item',
                icon     : 'web',
                url      : '/online-user',
            },
            {
                id       : 'blockUser',
                title    : 'Block User',
                type     : 'item',
                icon     : 'error',
                url      : '/block-user',
            },
            {
                id       : 'lockUser',
                title    : 'Lock User',
                type     : 'item',
                icon     : 'lock',
                url      : '/lock-user',
            },
            // {
            //     id       : 'Subscription',
            //     title    : 'Subscription',
            //     type     : 'item',
            //     icon     : 'attach_money',
            //     url      : '/subscription',
            // },
            {
                id       : 'disputes',
                title    : 'Disputes',
                type     : 'item',
                icon     : 'error',
                url      : '/disputes',
            },
            {
                id       : 'posts',
                title    : 'Posts',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/posts',
            },
            // {
            //     id       : 'answers',
            //     title    : 'Answers',
            //     type     : 'item',
            //     icon     : 'dashboard',
            //     url      : '/answers',
            // },
        ]
    }
];
