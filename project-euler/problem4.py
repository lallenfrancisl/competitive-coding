palindrome = []
for i in range(110, 1000, 11):
    for j in range(100, 1000):
        product = i * j
        if str(product) == str(product)[::-1]:
            palindrome.append(product)

palindrome.sort()

tries = input()

for k in range(tries):
    inp = input()
    i = 0
    while palindrome[i] < inp:
        i += 1
    print(palindrome[i-1])
