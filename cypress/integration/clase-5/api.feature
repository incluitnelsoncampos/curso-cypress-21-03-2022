Feature: TestSuite para API's


Scenario Outline: Registro de usuario
Given el registro del usuario "<name>" "<email>" "<password>"
Then el status code es "200"
Examples:
    | name | email | password |
    | test_nelson  | test.nelson@ggmail.com  | 123456  |

@focus 
Scenario Outline: Registro de usuario - Comando Personalizado
Given el nuevo registro "<name>" "<email>" "<password>"
When realizo el llamado al registo de un nuevo usuario
Then el campo code es "1"
Examples:
    | name | email | password |
    | test_nelson  | test.nelson@ggmail.com  | 123456  |
