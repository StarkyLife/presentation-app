import { AppRoutes } from '../app-routes';
import { XpPractice } from '../types/xp-practice';

export const businessPractices: XpPractice[] = [
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
export const teamPractices: XpPractice[] = [
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
export const engineeringPractices: XpPractice[] = [
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
