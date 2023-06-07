list1 = [2, 5, 7, 8]
list2 = [1, 2]
myList1 = []
myList2 = []
MyList3 = [[list1 + 1] for list1 in list1]
BothLists = [list1 + list2]
AddLists = []

for i in range (4):
    Add = list1[0] + list2[0]
    AddLists.append(Add)

for x in list1:
    myList1.append(x * 2 + 1)

for x in list1:
    myList2.append(x * 2 - 1)

print(myList1)
myList2.remove(13)
myList2.remove(15)
print(myList2)
print(MyList3, list1)
print(BothLists)
print(AddLists)
