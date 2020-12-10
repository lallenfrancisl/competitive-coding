#include <stdio.h>
#include <stdbool.h>

bool primeFactor (unsigned long number);

int main(void)
{
    unsigned int nOfTests = 0, number = 0, factor = 0;
    while (factor )
    {

    }
    return 0;
}
// check if a number is prime
bool primeFactor (unsigned long number)
{
    bool prime = false;
    // returns true if number is prime
    if (number == 2)
    {
        return true;
    }
    if (number == 3)
    {
        return true;
    }
    if (number % 2 == 0)
    {
        return false;
    }
    if (number % 3 == 0)
    {
        return false;
    }

    for (int i = 5, w = 2; i * i <= number; i += w, w = 6 - w)
    {
        if (number % i == 0)
        {
            return false;
        }
    }

    return true;
}
