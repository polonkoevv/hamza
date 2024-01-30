#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
    long n, m = 0, i = 9;

    printf("Введите натуральное число: ");
    scanf("%ld", &n);
 
    for (i; i >= 0; i--) {
        long d = n;
        while (d) {
            if (d % 10 == i)
                m = m * 10 + d % 10;
            d /= 10;
        }
    }
    printf("%ld", m);

    return 0;
}