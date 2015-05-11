class Dog:
    # class variable
    # same for all instances of Dog objects
    home = "kennel"

    def __init__(self, name):
        # instance variable
        # unique for each instance
        self.name = name

    def bark(self):
        # instance variables accessed with self.varName
        # class variables accessed with Dog.varName
        print(self.name + " from "+  Dog.home+ " goes bark!")
