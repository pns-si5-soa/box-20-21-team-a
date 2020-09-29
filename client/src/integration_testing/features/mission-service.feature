Feature: Mission
  Get the launching state

  Scenario: As a Mission Commander
    When I create a Go/No Go poll
    Then I receive a status code 200 and the parameters are 'false' by default

  Scenario: As a Mission Commander
    When I received a 'true' answer from weather service,I modify the poll
    Then The new weather status is 'true'


  Scenario: As a Mission Commander
    When I received a 'true' answer from rocket service,I modify the poll
    Then The new rocket status is 'true'