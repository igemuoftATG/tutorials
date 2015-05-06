# Craps

A really simple and exciting game at the casino is craps. The basic "play" is as follows. You roll a pair of standard dice. If you roll a 7 or 11 you win! If you roll a 2, 3, or 12 you lose. However if you roll any other number, that number becomes the point number, and your turn continues. You will then continue to roll, and you must roll that point number again before a 7 is rolled. If you roll the point number before you roll a 7, you win. If you roll a 7, you lose.

Write a program called `craps.py` that implements the craps game. The program should allow the user to repeatedly play until they decide to quit. How this part of the interaction takes place is up to you. You should show the entire process of how they got to a win or loss as output based on the examples below.


Example with a 'point'

'''
Roll #1: [2][6] ==> 'point' is 8 <br>
Roll #2: [4][1] ==> keep going! <br>
Roll #3: [5][6] ==> keep going! <br>
Roll #4: [3][3] ==> keep going! <br>
Roll #5: [3][4] ==> LOSS! <br>
'''

Example of a straight win:

'''
Roll #1: [4][7] ==> WIN!
'''

Example of a straight loss:
'''
Roll #1: [2][1] ==> LOSS!
'''