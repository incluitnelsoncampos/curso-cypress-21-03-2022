Feature: TestSuite Orange HRM

Scenario: Inicio de Sesion Exitoso
    Given en la pagina principal de Orange HRM
    When ingreso las credenciales validas y presiono el boton Login
    Then visualizo el nombre correcto