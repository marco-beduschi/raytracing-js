Feature: Tuples
    Scenario: A tuple with w=1.0 is a point
        Given a <- tuple 4.3, -4.2, 3.1, 1.0
        Then a.x = 4.3
        And a.y = -4.2
        And a.z = 3.1
        And a.w = 1.0
        And a is a point
        And a is not a vector

    Scenario: point() creates tuples with w=1
        Given p <- point 4, -4, 3
        Then p = tuple 4, -4, 3, 1

    Scenario: vector() creates tuples with w=0
        Given v <- vector 4, -4, 3
        Then v = tuple 4, -4, 3, 0

    Scenario: Adding two tuples
        Given a <- tuple 3, -2, 5, 1
        And a2 <- tuple -2, 3, 1, 0
        Then a plus a2 = tuple 1 1 6 1

    Scenario: Subtracting two points
        Given p <- point 3, 2, 1
        And p2 <- point 5, 6, 7
        Then p minus p2 <- vector -2, -4, -6
