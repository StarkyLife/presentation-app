import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Typography } from '@alfalab/core-components/typography';

import { BehaviorDrivenPage } from './pages/behavior-driven-page';
import { PairProgrammingPage } from './pages/pair-programming-page';
import { TddPage } from './pages/test-driven-page';
import { XtremeSchemePage } from './pages/xtreme-scheme-page';
import { AppRoutes } from './app-routes';

import './app.css';

export const App: React.FC = () => (
    <BrowserRouter>
        <div className="app">
            <Typography.Title tag="h1">
                Практики XP в Agile
            </Typography.Title>
            <Switch>
                <Route path={ AppRoutes.MAIN_PAGE } exact={ true }>
                    <XtremeSchemePage />
                </Route>
                <Route path={ AppRoutes.TEST_DRIVEN_DEVELOPMENT_PAGE }>
                    <TddPage />
                </Route>
                <Route path={ AppRoutes.BEHAVIOR_DRIVEN_DEVELOPMENT_PAGE }>
                    <BehaviorDrivenPage />
                </Route>
                <Route path={ AppRoutes.PAIR_PROGRAMMING_PAGE }>
                    <PairProgrammingPage />
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
);
