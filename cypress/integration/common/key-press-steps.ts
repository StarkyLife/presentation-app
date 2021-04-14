import { Given, When } from 'cypress-cucumber-preprocessor/steps';

import { triggerKeyDownOnPage } from '../../utils';

Given('(пользователь )нажал клавишу со стрелкой "Вправо"', () => {
    triggerKeyDownOnPage('ArrowRight');
});
When('пользователь/он нажимает/нажмёт клавишу со стрелкой "Вправо"( еще раз)', () => {
    triggerKeyDownOnPage('ArrowRight');
});
When('пользователь/он нажимает/нажмёт клавишу со стрелкой "Влево"', () => {
    triggerKeyDownOnPage('ArrowLeft');
});
