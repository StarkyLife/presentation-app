import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from '@alfalab/core-components/tooltip';
import { Typography } from '@alfalab/core-components/typography';

import { AppRoutes } from '../../app-routes';

import './styles.css';

const practices: Array<{ name: string; description: string; path?: string }> = [
    { name: 'TDD', description: 'Разработка через тестирование', path: AppRoutes.TEST_DRIVEN_DEVELOPMENT_PAGE },
    { name: 'Pair Programming', description: 'Парное программирование', path: AppRoutes.PAIR_PROGRAMMING_PAGE },
    { name: 'Refactoring', description: 'Улучшение кодовой базы' },
    { name: 'Simple Design', description: 'Простой и понятный дизайн системы' },
    { name: 'Planning Games', description: 'Игры планирования (planning poker и др.)' },
    { name: 'Small Releases', description: 'Раскатка на бой маленькими кусочками' },
    { name: 'Acceptance Tests', description: 'Автоматизированные приемочные тесты', path: AppRoutes.BEHAVIOR_DRIVEN_DEVELOPMENT_PAGE },
    { name: 'Whole Team', description: 'Вся команда сидит вместе и работает над одной задачей' },
    { name: 'Collective Code Ownership', description: 'Коллективное владение кодом (будь то LoanMB, фронт или мидл)' },
    { name: 'Code Standarts', description: 'Стандарты' },
    { name: 'Sustainable Pace', description: 'Устойчивый темп' },
    { name: 'Metaphor', description: 'a story that everyone - customers, programmers, and managers - can tell about how the system works' },
    { name: 'Continuous Integration', description: 'Develop -> Build -> Test end-to-end -> Stage (https://www.scaledagileframework.com/continuous-integration/)' },
];

export const XtremeSchemePage: React.FC = () => (
    <section>
        { practices.map((p) => (
            <Tooltip
                key={ p.name }
                content={ p.description }
                position="top"
                targetClassName="tooltip-container"
            >
                { p.path
                    ? (
                        <Link to={ p.path }>
                            { p.name }
                        </Link>
                    )
                    : (
                        <Typography.Text>
                            { p.name }
                        </Typography.Text>
                    ) }
            </Tooltip>
        )) }
    </section>
);
