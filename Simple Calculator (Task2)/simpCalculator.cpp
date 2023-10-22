#include <iostream>

using namespace std;

double add(int no1, int no2);
double subtract(int no1, int no2);
double multiply(int no1, int no2);
double divide(int no1, int no2);

int main()
{
    int no1, no2;
    char opt;
    cout << "Enter The First Number: ";
    cin >> no1;
    cout << "Enter The Second Number: ";
    cin >> no2;
    cout << "Select The Operator (+/-*): ";
    cin >> opt;
    if (opt == '+')
    {
        cout << "Sum is: " << add(no1, no2);
    }
    else if (opt == '-')
    {
        cout << "Difference is: " << subtract(no1, no2);
    }
    else if (opt == '*')
    {
        cout << "Product is: " << multiply(no1, no2);
    }
    else if (opt == '/')
    {
        cout << "After Division: " << divide(no1, no2);
    }
    else
    {
        cout << "Invalid Operator" << endl;
    }
}

double add(int no1, int no2)
{
    return no1 + no2;
}
double subtract(int no1, int no2)
{
    return no1 - no2;
}
double multiply(int no1, int no2)
{
    return no1 * no2;
}
double divide(int no1, int no2)
{
    return no1 / no2;
}