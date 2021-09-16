import React from 'react';
import { Routes } from '../common/types';

const routes: Routes = {
    'home': {
        path: '/',
        Component: React.lazy(() => import('../pages/Home'))
    }, 
    'chat': {
        path: '/chat',
        Component: React.lazy(() => import('../pages/Chat'))
    },
    '404': {
        path: '/404',
        Component: React.lazy(() => import('../pages/NotFound'))
    }
};

export default routes;