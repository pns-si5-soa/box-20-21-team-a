Feature: Two missions, anomalies and abort mission

  Background:
    Given three missions which have passed all required controls before the launch procedure
    And the rocket has been launched for each mission
    And the first mission has its rocket still attached to the booster
    And the second mission has already its rocket and its booster detached from each other
    And the third mission has already its rocket and its booster detached from each other

  Scenario: Two simultaneous missions are going wrong in a different way
    When the anomaly 'skyfall' which have a severity of 3 is detected in the first mission's rocket
    Then the mission is immediately aborted which cause the head stage status to change to 'Destroyed :('
    And the booster is immediatly 'Destroyed :('

    When the anomaly 'skyfall' which have a severity of 3 is detected in the second mission's rocket
    Then the second mission is immediately aborted which cause the head stage status to change to 'Destroyed :('
    And the booster continues its landing process normally and finally has the 'Landed' status

  #  When the anomaly 'Booster tank leaking' is detected in the second mission while the booster is still attached to the head stage
  #  Then the anomaly is not handled automatically as it is not critical and the status of all parts of the rocket do not change
  #  When Richard has evaluated the risk of the anomaly and considers that it could be an issue, he can decide to order the destruction of the booster
  #  Then the booster is now 'Destroyed' and as the head stage was attached to it, it is 'Destroyed' as well




