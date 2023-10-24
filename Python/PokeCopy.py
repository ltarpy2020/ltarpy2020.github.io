
import random

me = o = 0

for x in range(10):
    z = random.randint(1, 3)
    oppo = random.randint(1, 3)

    if z == 1:
        print ("This is fire")
        if oppo == 3:
            me += 1
            o -= 1
        elif oppo == 2:
            me -= 1
            o += 1
    elif z == 2:
        print("This is water")
        if oppo == 1:
            me += 1
            o -= 1
        elif oppo == 3:
            me -= 1
            o += 1
    elif z == 3:
        print("This is grass")
        if oppo == 2:
            me += 1
            o -= 1
        elif oppo == 1:
            me -= 1
            o += 1

if me > o:
    print('You win')
else:
    print('You lose')
print(me, o)
