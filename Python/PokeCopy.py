import random
z = random.randint(1, 3)
oppo = random.randint(1, 3)

me = o = 0

if z == 1:
    print ("This is fire")
    if oppo == 3:
        print("you win")
        me += 1
        o -= 1
    elif oppo == 2:
        print("you lose")
        me -= 1
        o += 1
elif z == 2:
    print("This is water")
elif z == 3:
    print("This is grass")
    
print(me, o)
