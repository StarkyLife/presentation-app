import React from 'react';
import {
    BrowserRouter, Link, Route, Switch,
} from 'react-router-dom';
import { Typography } from '@alfalab/core-components/typography';

import { BehaviorDrivenPage } from './pages/behavior-driven-page';
import { PairProgrammingPage } from './pages/pair-programming-page';
import { TddPage } from './pages/test-driven-page';
import { XtremeSchemePage } from './pages/xtreme-scheme-page';
import { AppRoutes } from './app-routes';
import { TestIds } from './test-ids';

import './app.css';

export const App: React.FC = () => (
    <BrowserRouter>
        <div className="app">
            <Link to={ AppRoutes.MAIN_PAGE }>
                <Typography.Title tag="h1" dataTestId={ TestIds.APP_NAME }>
                    Практики XP в Agile
                </Typography.Title>
            </Link>
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
