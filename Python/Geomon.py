import random

me = o = 0
element = e = ""

for x in range(10):
    z = random.randint(1, 12)
    oppo = random.randint(1, 12)
    jewel = random.randint(1, 100)

    if z == 1:
        element = "This is fire"
        if oppo == 2:
            me -= 1
            o += 1
        if oppo == 12:
            me += 1
            o -= 1
            print(jewel)

    elif z == 2:
        element = "This is water"
        if oppo == 3:
            me -= 1
            o += 1
        if oppo == 1:
            me += 1
            o -= 1
            print(jewel)

    elif z == 3:
        element = "This is plant"
        if oppo == 11:
            me -= 1
            o += 1
        if oppo == 2:
            me += 1
            o -= 1
            print(jewel)
            
    elif z == 4:
        element = "This is electric"
        if oppo == 5:
            me -= 1
            o += 1
        if oppo == 11:
            me += 1
            o -= 1
            print(jewel)
        
    elif z == 5:
        element = "This is ground"
        if oppo == 10:
            me -= 1
            o += 1
        if oppo == 4:
            me += 1
            o -= 1
            print(jewel)
    
    elif z == 6:
        element = "This is shadow"
        if oppo == 7:
            me -= 1
            o += 1
        if oppo == 9:
            me += 1
            o -= 1
            print(jewel)
    
    elif z == 7:
        element = "This is light"
        if oppo == 12:
            me -= 1
            o += 1
        if oppo == 6:
            me += 1
            o -= 1
            print(jewel)
    
    elif z == 8:
        element = "This is physical"
        if oppo == 9:
            me -= 1
            o += 1
        if oppo == 10:
            me += 1
            o -= 1
            print(jewel)
        
    elif z == 9:
        element = "This is mind"
        if oppo == 8:
            me -= 1
            o += 1
        if oppo == 6:
            me += 1
            o -= 1
            print(jewel)
    
    elif z == 10:
        element = "This is ice"
        if oppo == 8:
            me -= 1
            o += 1
        if oppo == 5:
            me += 1
            o -= 1
            print(jewel)
        
    elif z == 11:
        element = "This is air"
        if oppo == 4:
            me -= 1
            o += 1
        if oppo == 3:
            me += 1
            o -= 1
            print(jewel)
        
    elif z == 12:
        element = "This is toxic"
        if oppo == 1:
            me -= 1
            o += 1
        if oppo == 7:
            me += 1
            o -= 1
            print(jewel)
            
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
