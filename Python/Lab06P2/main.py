j_list = []
k_list = []
c_list = []
all_scores = [j_list[:], k_list[:], c_list[:]]

for i in range(4):
    j = int(input("Enter the score for Jean: "))
    j_list.append(j)
print("Jean's scores are: ", j_list)

for i in range(4):
    k = int(input("Enter the score for Kayla: "))
    k_list.append(k)
print("Kayla's scores are: ", k_list)

for i in range(4):
    c = int(input("Enter the score for Connie: "))
    c_list.append(c)
print("Connie's scores are: ", c_list)

for row in all_scores:
    for scores in row:
        all_scores = all_scores + 1

print("The total scores are: ", all_scores)
all_scores.sort()
print("The scores after sorting: ", all_scores)
