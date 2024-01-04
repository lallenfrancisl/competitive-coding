def gcd(number_1, number_2):
    if number_1 == 0:
        return number_2
    if number_2 == 0:
        return number_1

    return gcd(number_2, number_1 % number_2)


def lcm(number_1, number_2):
    return number_1 * number_2 // gcd(number_1, number_2)


def lcm_upto(number):
    calculated_lcm = number
    while number > 1:
        calculated_lcm = lcm(calculated_lcm, number - 1)
        number -= 1

    return calculated_lcm


testcases = int(input())

for i in range(testcases):
    inp = int(input())
    print(lcm_upto(inp))
