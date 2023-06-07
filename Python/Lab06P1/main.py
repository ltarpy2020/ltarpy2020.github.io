test = []

for i in range(5):
    testScore = int(input("Enter the student's test score: "))
    if testScore < 60:
        testScore = testScore + 10
    test.append(testScore)

print("Your scores are: ", test)
