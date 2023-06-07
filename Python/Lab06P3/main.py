import random
tuple1 = []
for i in range(10):
    tuples = random.randint(1,15)
    tupleRand = tuple1.append(tuples)
print("Random values are: ", tuple1)

tupleFirst = [tuple1[0], tuple1[1], tuple1[2]]
tupleLast = [tuple1[7], tuple1[8], tuple1[9]]
tupleCon = tupleFirst + tupleLast
print("Tuple of first 3 numbers: ", tupleFirst)
print("Tuple of the last 3 numbers: ", tupleLast)
print("Tuple of both first and last numbers: ", tupleCon)

tupleCon.sort()
print("The tuple sorted and concatenated are: ", tupleCon)
