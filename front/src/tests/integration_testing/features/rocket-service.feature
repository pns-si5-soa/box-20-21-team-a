Feature: Rocket
    Get the rocket status
    
    # //TODO This scenario must be moved to telemetry-service.feature
    # For this release we don't have this scenario
    # Scenario: As a Chief of the Rocket department
    #     When I consult the current rocket status
    #     Then I receive a status code 200 and the rocket status is "Ready,Not ready"

     Scenario: Launch the rocket twice but only once working
        When The Chief of the Rocket department launches the rocket for the first time
        Then He receives the rocket launched status is "Launching Rocket..."
        #When The Chief of the Rocket department launches the rocket for the second time
        #Then He receives a status code 200 and the rocket launched status is now "Already launched"
        
