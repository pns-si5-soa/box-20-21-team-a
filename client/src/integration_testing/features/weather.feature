Feature: Weather
    Get the current Weather
    
    Scenario: As a Launch Weather Officer
        When I consult the current weather
        Then I receive a status code 200 and the weather in "Sunny,Cloudy,Rainy"
        
