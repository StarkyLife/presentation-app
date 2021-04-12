# language: ru
Функционал: Схема практик экстремального программирования
    Контекст:
        Пусть пользователь находится на главной странице

    Структура сценария: Элементы схемы
        Когда пользователь наводит на "<Практика XP>"
        Тогда пользователь видит "<Пояснение>" во всплывающей окошке

        Примеры:
            | Практика XP               | Пояснение |
            | TDD                       | Разработка через тестирование |
            | Pair Programming          | Парное программирование |
            | Refactoring               | Улучшение кодовой базы |
            | Simple Design             | Простой и понятный дизайн системы |
            | Planning Games            | Игры планирования (planning poker и др.) |
            | Small Releases            | Раскатка на бой маленькими кусочками |
            | Acceptance Tests          | Автоматизированные приемочные тесты |
            | Whole Team                | Вся команда сидит вместе и работает над одной задачей |
            | Collective Code Ownership | Коллективное владение кодом (будь то LoanMB, фронт или мидл) |
            | Code Standarts            | Стандарты |
            | Sustainable Pace          | Устойчивый темп |
            | Metaphor                  | a story that everyone - customers, programmers, and managers - can tell about how the system works |
            | Continuous Integration    | Develop -> Build -> Test end-to-end -> Stage (https://www.scaledagileframework.com/continuous-integration/) |

    Структура сценария: Открытие страницы с практикой
        Когда пользователь нажимает на "<Практика XP>"
        Тогда открывается страница с заголовком "<Заголовок>"

        Примеры:
            | Практика XP               | Заголовок
            | TDD                       | Test-Driven Development
            | Acceptance Tests          | Behavior-Driven Development

