
import random

me = o = 0

for x in range(10):
    z = random.randint(1, 12)
    oppo = random.randint(1, 12)

    if z == 1:
        print ("This is fire")
        if oppo == 1:
            print ("Opponent has fire\n")
        elif oppo == 2:
            print("Opponent has water\n")
            me -= 1
            o += 1
        if oppo == 3:
            print("Opponent has grass\n")
            me += 1
            o -= 1

    elif z == 2:
        print("This is water")
        if oppo == 1:
            print ("Opponent has fire\n")
            me += 1
            o -= 1
        elif oppo == 2:
            print("Opponent has water\n")
        elif oppo == 3:
            print("Opponent has grass\n")
            me -= 1
            o += 1

    elif z == 3:
        print("This is grass")
        if oppo == 1:
            print ("Opponent has fire\n")
            me -= 1
            o += 1
        elif oppo == 2:
            print("Opponent has water\n")
            me -= 1
            o += 1
        elif oppo == 3:
            print("Opponent has grass\n")
            
    elif z == 4:
        print("This is electricity")
        
    elif z == 5:
        print("This is ground")
    
    elif z == 6:
        print("This is shadow")
    
    elif z == 7:
        print("This is light")
    
    elif z == 8:
        print("This is physical")
        
    elif z == 9:
        print("This is mind")
    
    elif z == 10:
        print("This is ice")
        
    elif z == 11:
        print("This is air")
        
    elif z == 12:
        print("This is toxic")


if me > o:
    print('You win')
else:
    print('You lose')
print(me, o)
