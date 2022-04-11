Feature: TestSuite Orange HRM

    @Simple
    Scenario: Inicio de Sesion Exitoso
        Given en la pagina principal de Orange HRM
        When ingreso las credenciales validas y presiono el boton Login
        Then visualizo el nombre correcto

    @Parametros
    Scenario: Inicio de Sesion Exitoso con parametros
        Given en la pagina principal de Orange HRM
        When ingreso el nombre de usuario "Admin"
        When ingreso el password del usuario "admin123"
        When hago click en el boton Login
        Then visualizo el mensaje de bienvenida "Welcome Paul"

    @Smoke
    @Parametros
    Scenario Outline: Inicio de Sesion Exitoso con ejemplo
        Given en la pagina principal de Orange HRM
        When ingreso el nombre de usuario "<user_name>"
        When ingreso el password del usuario "<user_password>"
        When hago click en el boton Login
        Then visualizo el mensaje de bienvenida "<user>"
        Examples:
            | user_name | user_password | user         |
            | Admin     | admin123      | Welcome Paul |
            | Admin     | admin123      | Welcome Paul |
            | Admin     | admin123      | Welcome Paul |
            | Admin     | admin123      | Welcome Paul |
            | Admin     | admin123      | Welcome Paul |


    @VariableEntorno 
    Scenario: Inicio de Sesion Exitoso con variable de entorno
        Given en la pagina principal de Orange HRM
        When ingreso el nombre de usuario "Admin"
        When ingreso el password del usuario desde una variable de entorno
        When hago click en el boton Login
        Then visualizo el mensaje de bienvenida "Welcome Paul"
