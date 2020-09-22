Feature: Rocket
    Get the rocket status
    
    Scenario: As a Chief of the Rocket department
        When I consult the current rocket status
        Then I receive a status code 200 and the rocket status is "ready,not ready"

     Scenario: Launch the rocket twice but only once working
        When The Chief of the Rocket department launches the rocket for the first time
        Then He receives a status code 200 and the rocket launched status is "Launching ..."
        #When The Chief of the Rocket department launches the rocket for the second time
        #Then He receives a status code 200 and the rocket launched status is now "Already launched"
        
