# sum of squares of first n natural numbers
def sum_first_n_squares(n):
    return n * (n + 1) * (2 * n + 1) / 6


# square of sum of n natural numbers
def square_sum_n_numbers(n):
    return (n * (n + 1) / 2)**2


testcases = int(input())

for i in range(testcases):
    n = int(input())
    print(int(square_sum_n_numbers(n) - sum_first_n_squares(n)))
