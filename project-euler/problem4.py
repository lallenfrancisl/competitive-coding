"""
Reference Link: https://www.geeksforgeeks.org/largest-palindrome-which-is-product-of-two-n-digit-numbers-set-2/

"""
max_palindrome = 0
for i in range(999, 101, -1):
    for j in range(990, 101, -11):
        if (i * j) > max_palindrome and str(i * j) == str(i * j)[::-1]:
            max_palindrome = i * j
print(max_palindrome)
        
