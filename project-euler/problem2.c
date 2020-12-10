#include <stdio.h>

int main(void)
{
    unsigned int nOfInputs = 0, maxValue = 1, previous = 1, current = 2, sumFibonacci = 0;
    unsigned int fibonacci = 0;
    scanf("%u", &nOfInputs);
    for (int i = 0; i < nOfInputs; ++i)
    {
        sumFibonacci = 0;
        previous = 1;
        current = 2;
        fibonacci = 2;
        scanf("%u", &maxValue);
        while (fibonacci <= maxValue)
        {
            if ((fibonacci % 2) == 0)
            {
                sumFibonacci += fibonacci;
            }
            fibonacci = previous + current;
            previous = current;
            current = fibonacci;
        }
        printf("%u\n", sumFibonacci);
    }
    return 0;
}


