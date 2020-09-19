Feature: Rcoket
    Get the rocket status
    
    Scenario: As a Chief of the Rocket department
        When I consult the current rocket status
        Then I receive a status code 200 and the rocket status is "ready,not ready"
        
