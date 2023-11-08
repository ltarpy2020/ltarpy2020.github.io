import random

me = o = 0
element = e = ""
caputre = 0
    
for x in range(10):
    z = random.randint(1, 12)
    oppo = random.randint(1, 12)
    jewel = random.randint(1, 50)
    chance = random.randint(1, 100)
    rock = ""
            
    if 1 <= jewel <= 38:
        rock = "Quartz"
    elif jewel == 39:
        rock = "Ruby"
    elif jewel == 40:
        rock = "Sapphire"
    elif jewel == 41:
        rock = "Emerald"
    elif jewel == 42:
        rock = "Topaz"
    elif jewel == 43:
        rock = "Garnet"
    elif jewel == 44:
        rock = "Tourmaline"
    elif jewel == 45:
        rock = "Opal"
    elif jewel == 46:
        rock = "Tigers Eye"
    elif jewel == 47:
        rock = "Amethyst"
    elif jewel == 48:
        rock = "Aquamarine"
    elif jewel == 49:
        rock = "Citrene"
    elif jewel == 50:
        rock = "Peridot"

    if z == 1:
        element = "This is fire"
        if oppo == 2:
            me -= 1
            o += 1
        if oppo == 12:
            me += 1
            o -= 1
            #if rock = "Quartz" and chance >= 35:
                #print("Congrats on the capture")
                #capture += 1
            #elif rock = "Peridot":
                #print("Congrats on the capture")
                #capture += 1
        #else:
            #if rock = "Quartz" and chance >= 35:
                #print("Congrats on the capture")
                #capture += 1

    elif z == 2:
        element = "This is water"
        if oppo == 3:
            me -= 1
            o += 1
        if oppo == 1:
            me += 1
            o -= 1
            print(rock)

    elif z == 3:
        element = "This is plant"
        if oppo == 11:
            me -= 1
            o += 1
        if oppo == 2:
            me += 1
            o -= 1
            print(rock)
            
    elif z == 4:
        element = "This is electric"
        if oppo == 5:
            me -= 1
            o += 1
        if oppo == 11:
            me += 1
            o -= 1
            print(rock)
        
    elif z == 5:
        element = "This is ground"
        if oppo == 10:
            me -= 1
            o += 1
        if oppo == 4:
            me += 1
            o -= 1
            print(rock)
    
    elif z == 6:
        element = "This is shadow"
        if oppo == 7:
            me -= 1
            o += 1
        if oppo == 9:
            me += 1
            o -= 1
            print(rock)
    
    elif z == 7:
        element = "This is light"
        if oppo == 12:
            me -= 1
            o += 1
        if oppo == 6:
            me += 1
            o -= 1
            print(rock)
    
    elif z == 8:
        element = "This is physical"
        if oppo == 9:
            me -= 1
            o += 1
        if oppo == 10:
            me += 1
            o -= 1
            print(rock)
        
    elif z == 9:
        element = "This is mind"
        if oppo == 8:
            me -= 1
            o += 1
        if oppo == 6:
            me += 1
            o -= 1
            print(rock)
    
    elif z == 10:
        element = "This is ice"
        if oppo == 8:
            me -= 1
            o += 1
        if oppo == 5:
            me += 1
            o -= 1
            print(rock)
        
    elif z == 11:
        element = "This is air"
        if oppo == 4:
            me -= 1
            o += 1
        if oppo == 3:
            me += 1
            o -= 1
            print(rock)
        
    elif z == 12:
        element = "This is toxic"
        if oppo == 1:
            me -= 1
            o += 1
        if oppo == 7:
            me += 1
            o -= 1
            print(rock)
            
    if oppo == 1:
        e = "Opponent has fire"
    elif oppo == 2:
        e = "Opponent has water"
    elif oppo == 3:
        e = "Opponent has plant"
    elif oppo == 4:
        e = "Opponent has electric"
    elif oppo == 5:
        e = "Opponent has ground"
    elif oppo == 6:
        e = "Opponent has shadow"
    elif oppo == 7:
        e = "Opponent has light"
    elif oppo == 8:
        e = "Opponent has physical"
    elif oppo == 9:
        e = "Opponent has mind"
    elif oppo == 10:
        e = "Opponent has ice"
    elif oppo == 11:
        e = "Opponent has air"
    elif oppo == 12:
        e = "Opponent has toxic"
    
    print(element + "\n" + e + "\n")


if me > o:
    print('You win')
elif me == o:
    print('You tie')
else:
    print('You lose')
print(me, o)
