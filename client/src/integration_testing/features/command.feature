Feature: Command
  Get the launching state

  Scenario: As a Mission Commander
    When I create a Go/No Go poll
    Then I receive a status code 200 and the parameters are 'false' by default
