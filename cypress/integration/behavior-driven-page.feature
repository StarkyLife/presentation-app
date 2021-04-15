# language: ru
Функционал: Доклад про разработку через поведение (BDD)
    Контекст:
        Пусть пользователь находится на странице, посвященной BDD

    Сценарий: Блок Discovery - открытие
        Если пользователь открыл блок "Discovery"
        Тогда появится информация про Discovery

    Сценарий: Блок Formulation - открытие
        Если пользователь открыл блок "Formulation"
        Тогда появится информация про Formulation

    Сценарий: Блок Automation - открытие
        Если пользователь открыл блок "Automation"
        Тогда появится информация про Automation

    Сценарий: Блок Automation - продвижение вперед
        Пусть пользователь открыл блок "Automation"
        Если он нажмёт клавишу со стрелкой "Вправо"
        Тогда появится информация с заголовком "Пример заполненного шага"

    Сценарий: Блок Automation - продвижение назад
        Пусть пользователь открыл блок "Automation"
        И нажал клавишу со стрелкой "Вправо"
        Если он нажмёт клавишу со стрелкой "Влево"
        Тогда появится информация с заголовком "Пример незаполненных шагов"
