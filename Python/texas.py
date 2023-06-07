import random

values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
suits = ["spades", "hearts", "diamonds", "clubs"]

faces = {
    11: "J",
    12: "Q",
    13: "K",
    14: "A"
}

class Card:
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit

def getCards():
    cards = []
    for value in values:
        for suit in suits:
            if value in faces:
                _card = Card(faces[value], suit)
            else:
                _card = Card(value, suit)
            cards.append(_card)
    return cards
