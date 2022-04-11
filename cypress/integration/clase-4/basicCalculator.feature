Feature: TestSuite Basic Calculator

    Scenario Outline: Operación de "<operacion>"
        Given en la pagina principal Basic Calculator
        When se ingresa los numeros "<numero_uno>" y "<numero_dos>"
        When se selecciona la operacion "<operacion>"
        When presiono en calcular
        Then el resultado es "<resultado>"
        Examples:
            | operacion   | numero_uno | numero_dos | resultado |
            | Add         | 1          | 1          | 2         |
            | Subtract    | 10         | 2          | 8         |
            | Multiply    | 5          | 5          | 25        |
            | Divide      | 1          | 1          | 1         |
            | Concatenate | 2          | 4          | 24        |
