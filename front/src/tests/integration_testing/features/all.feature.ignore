Feature: Complete scenario
  Get the launching state


  Scenario: As Richard
    When I create the poll to start the mission
    Then a poll is created and its values are all on 'false'

  Scenario: As Tory
    When I have been informed that the poll has been created, I can check the weather
    Then I can see the weather status
    When I answer to the poll
    Then the poll shows that my vote has been taken into account

  Scenario: As Elon
    When I get the poll
    Then I see that Tory has answered to it and it is my turn to answer
    When I get the Rocket status
    Then I see that the rocket is ready, I can answer positively to the poll
    When I send my answer to the poll
    Then he poll shows that my vote has been taken into account

  Scenario: As Richard
    When I get the poll
    Then I see that Tory and Elon have answered to it and it is my turn to answer
    When I send my answer to the poll
    Then he poll shows that my vote has been taken into account, the rocket can be launched


  Scenario: As Elon
    When I launch the rocket
    Then the status of the rocket is now 'Launched, in first stage of flight'

  Scenario: As Jeff
    When I ask for telemetry data from the launched rocket
    Then I have a value for the Altitude, Speed and status of the rocket

  Scenario: As Elon
    When the Booster of the rocket has no more fuel
    Then I want the Booster to detach from the rocket and its status to become 'Detached'

  Scenario: As Jeff
    When I ask for telemetry data from the booster
    Then I get a value for its Altitude, speed and status

  Scenario: As Elon
    When the rocket undergoes 'x' pressure
    Then I want its engines to slow down

  Scenario: As Peter
    When the booster has reached 'x' in altitude
    Then I want it to trigger the landing process


  Scenario: As Gwynne
    When the altitude and speed of the rocket are optimal I want to trigger the delivering of the payload
    Then the payload should be 'Delivered'
    When Gwynne asks for telemetry data from the payload
    Then she gets a value for its speed, xxx