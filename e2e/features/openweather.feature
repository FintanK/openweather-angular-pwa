Feature: OpenWeather
  Scenario: Overview Page
    Given I navigate to "/#/overview"
    When I wait for 3000 ms
    Then the title should be "Angular OpenWeather API"
