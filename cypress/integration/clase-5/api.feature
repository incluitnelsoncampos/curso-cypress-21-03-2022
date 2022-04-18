Feature: TestSuite para API's


Scenario Outline: Registro de usuario
Given el registro del usuario "<name>" "<email>" "<password>"
Then el status code es "200"
Examples:
    | name | email | password |
    | test_nelson  | test.nelson@ggmail.com  | 123456  |


Scenario Outline: Registro de usuario - Comando Personalizado
Given el nuevo registro "<name>" "<email>" "<password>"
When realizo el llamado al registo de un nuevo usuario
Then el campo code es "1"
Examples:
    | name | email | password |
    | test_nelson  | test.nelson@ggmail.com  | 123456  |

Scenario Outline: Obtener todos los usuarios
Given el usuario "<email>" "<password>"
When nos logueamos en el sistema
Then obtengo el token
When consulto por todos los usuarios
Then obtengo un listado de usuarios
Examples:
    |  email | password |
    | test.nelson@ggmail.com  | 123456  |