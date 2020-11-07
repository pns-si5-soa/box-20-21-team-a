Feature: Complete scenario


  Scenario: The mission progression from its creation to the payloas delivery
    When Richard creates a new mission
    Then a new poll is created with its values set as 'false'
    And a new head stage is created #tester l'existance en faisant un get sur la télémétrie
    And a new booster is created
    And a new payload is creaded

    When Tory has been informed that the poll has been created, she can check the weather status
    Then the weather status is 'Sunny', 'Rainy' or 'Cloudy'
    When she answers positively to the poll
    Then the weather department vote is 'true'

    When Elon gets the poll
    Then he sees that Tory has answered to it so it is his turn to answer
    When he gets the rocket status
    Then he sees the rocket is 'On preparation'
    When Elon puts the rocket on internal power
    Then the status of the rocket is now 'On internal power' and everything is going fine for the rocket
    When he answers positively to the poll
    Then the rocket department answer to the poll is now 'true'

    When it's Richard's turn to answer, he votes on the poll
    Then the poll shows that the mission department vote is 'true'

    When Elon initializes the launch process
    Then Richard and Marie see in real time that the status of the rocket is now on 'Startup'
    When 57 seconds have passed after startup
    Then Richard and Marie see in real time that the rocket status is now 'Main engine started' after startup
    When 3 seconds have passed after main engine
    Then Richard and Marie see in real time that the rocket is 'Launched'
    When the pressure of the rocket is at 000?
    Then Richard and Marie see in real time that the rocket status is now 'Max Q reached' after main engine started
    And the speed of the rocket does not increase anymore
    When the booster has 15hl of fuel left
    Then Richard and Marie see in real time that the rocket status is 'Main engine cut off'
    And then the rocket status is 'Stage separation' after main engine
    And then the rocket status is 'Second engine started' after stage separation
    And that the booster is going through a 'Flip maneuver'
    And then the booster status is 'Entry burn' after flip maneuver
    And then the booster status is 'Guidance' after entry burn
    And then the booster status is Landing burn' after guidance
    And then the booster status is Landing legs deployed after landing burn
    And then the booster has landed, its status is 'Landed'
    And then the rocket status is 'fairing separation'
    When the rocket has no more fuel
    Then the rocket status is Second engine cut off

    When Gwynn decides to deliver the payload then the rocket status is now 'Payload delivered'