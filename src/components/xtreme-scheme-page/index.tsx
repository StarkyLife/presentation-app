/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@alfalab/core-components/button';
import { Tooltip } from '@alfalab/core-components/tooltip';

import { AppRoutes } from '../../app-routes';

import './styles.css';

type Practice = {
    name: string;
    description: string;
    path?: string;
    position: 'top' | 'right' | 'bottom' | 'left' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
};

const businessPractices: Practice[] = [
    {
        name: 'Whole Team',
        description: 'Вся команда сидит вместе и работает над одной задачей',
        position: 'top',
    },
    {
        name: 'Planning Games',
        description: 'Игры планирования (planning poker и др.)',
        position: 'right',
    },
    {
        name: 'Small Releases',
        description: 'Раскатка на бой маленькими кусочками',
        position: 'bottom',
    },
    {
        name: 'Acceptance Tests',
        description: 'Автоматизированные приемочные тесты',
        position: 'left',
        path: AppRoutes.BEHAVIOR_DRIVEN_DEVELOPMENT_PAGE,
    },
];
const teamPractices: Practice[] = [
    {
        name: 'Collective Code Ownership',
        description: 'Коллективное владение кодом (будь то LoanMB, фронт или мидл)',
        position: 'top-right',
    },
    {
        name: 'Sustainable Pace',
        description: 'Устойчивый темп',
        position: 'bottom-right',
    },
    {
        name: 'Metaphor',
        description: 'a story that everyone - customers, programmers, and managers - can tell about how the system works',
        position: 'bottom-left',
    },
    {
        name: 'Continuous Integration',
        description: 'Develop -> Build -> Test end-to-end -> Stage (https://www.scaledagileframework.com/continuous-integration/)',
        position: 'top-left',
    },
];
const engineeringPractices: Practice[] = [
    {
        name: 'TDD',
        description: 'Разработка через тестирование',
        path: AppRoutes.TEST_DRIVEN_DEVELOPMENT_PAGE,
        position: 'top',
    },
    {
        name: 'Refactoring',
        description: 'Улучшение кодовой базы',
        position: 'right',
    },
    {
        name: 'Simple Design',
        description: 'Простой и понятный дизайн системы',
        position: 'bottom',
    },
    {
        name: 'Pair Programming',
        description: 'Парное программирование',
        path: AppRoutes.PAIR_PROGRAMMING_PAGE,
        position: 'left',
    },
];

const SchemeElement: React.FC<Practice> = ({
    name,
    description,
    path,
    position,
}) => {
    const history = useHistory();

    return (
        <Tooltip
            key={ name }
            content={ description }
            position="top"
            targetClassName={ `scheme-element ${position}` }
        >
            <Button
                view="secondary"
                className="scheme-element__button"
                onClick={ () => path && history.push(path) }
            >
                { name }
            </Button>
        </Tooltip>
    );
};

export const XtremeSchemePage: React.FC = () => (
    <section className="scheme">
        <div className="circle-container business">
            { businessPractices.map((p) => (
                <SchemeElement { ...p } />
            )) }
            <div className="circle-container team">
                { teamPractices.map((p) => (
                    <SchemeElement { ...p } />
                )) }
                <div className="circle-container engineering">
                    { engineeringPractices.map((p) => (
                        <SchemeElement { ...p } />
                    )) }
                </div>
            </div>
        </div>
    </section>
);
