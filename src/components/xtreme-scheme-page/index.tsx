/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@alfalab/core-components/button';
import { Tooltip } from '@alfalab/core-components/tooltip';

import { AppRoutes } from '../../app-routes';

import './styles.css';

type Practice = { name: string; description: string; path?: string };

const practices: Practice[] = [
    { name: 'Whole Team', description: 'Вся команда сидит вместе и работает над одной задачей' },
    { name: 'Planning Games', description: 'Игры планирования (planning poker и др.)' },
    { name: 'Small Releases', description: 'Раскатка на бой маленькими кусочками' },
    { name: 'Acceptance Tests', description: 'Автоматизированные приемочные тесты', path: AppRoutes.BEHAVIOR_DRIVEN_DEVELOPMENT_PAGE },
    { name: 'Collective Code Ownership', description: 'Коллективное владение кодом (будь то LoanMB, фронт или мидл)' },
    { name: 'Sustainable Pace', description: 'Устойчивый темп' },
    { name: 'Metaphor', description: 'a story that everyone - customers, programmers, and managers - can tell about how the system works' },
    { name: 'Continuous Integration', description: 'Develop -> Build -> Test end-to-end -> Stage (https://www.scaledagileframework.com/continuous-integration/)' },
    { name: 'TDD', description: 'Разработка через тестирование', path: AppRoutes.TEST_DRIVEN_DEVELOPMENT_PAGE },
    { name: 'Refactoring', description: 'Улучшение кодовой базы' },
    { name: 'Simple Design', description: 'Простой и понятный дизайн системы' },
    { name: 'Pair Programming', description: 'Парное программирование', path: AppRoutes.PAIR_PROGRAMMING_PAGE },
];

const SchemeElement: React.FC<{
    practice: Practice;
    className?: string;
}> = ({
    practice,
    className,
}) => {
    const history = useHistory();

    return (
        <Tooltip
            key={ practice.name }
            content={ practice.description }
            position="top"
            targetClassName={ `tooltip-container${className ? ` ${className}` : ''}` }
        >
            <Button
                view="secondary"
                style={ { background: 'white' } }
                onClick={ () => practice.path && history.push(practice.path) }
            >
                { practice.name }
            </Button>
        </Tooltip>
    );
};

export const XtremeSchemePage: React.FC = () => (
    <section className="scheme">
        <div className="circle-container business">
            <SchemeElement
                className="scheme-element top"
                practice={ practices[0] }
            />
            <SchemeElement
                className="scheme-element right"
                practice={ practices[1] }
            />
            <SchemeElement
                className="scheme-element bottom"
                practice={ practices[2] }
            />
            <SchemeElement
                className="scheme-element left"
                practice={ practices[3] }
            />
            <div className="circle blue">
                <div className="circle-container team">
                    <SchemeElement
                        className="scheme-element top-right"
                        practice={ practices[4] }
                    />
                    <SchemeElement
                        className="scheme-element bottom-right"
                        practice={ practices[5] }
                    />
                    <SchemeElement
                        className="scheme-element bottom-left"
                        practice={ practices[6] }
                    />
                    <SchemeElement
                        className="scheme-element top-left"
                        practice={ practices[7] }
                    />
                    <div className="circle orange">
                        <div className="circle-container engineering">
                            <SchemeElement
                                className="scheme-element top"
                                practice={ practices[8] }
                            />
                            <SchemeElement
                                className="scheme-element right"
                                practice={ practices[9] }
                            />
                            <SchemeElement
                                className="scheme-element bottom"
                                practice={ practices[10] }
                            />
                            <SchemeElement
                                className="scheme-element left"
                                practice={ practices[11] }
                            />
                            <div className="circle green" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
