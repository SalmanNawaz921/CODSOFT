#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int generateRandomNo();
void userInterface();
int returnGuess();

int main()
{
    userInterface();
    int userGuess = 0;
    int randomNo = generateRandomNo();
    while (userGuess != randomNo)
    {
        userGuess = returnGuess();
        if (userGuess < randomNo)
        {
            cout << "Your Guess is Less Than The Random Number" << endl;
        }
        else if (userGuess > randomNo)
        {
            cout << "Your Guess is Greater Than The Random Number" << endl;
        }
    }
    cout << "Your Guess is Correct" << endl;
}

int generateRandomNo()
{
    srand(time(0));
    return rand() % 100 + 1; // Generate a random number between 1 and 100
}

void userInterface()
{
    cout << "Welcome To The Number Guessing Game!!!" << endl;
    cout << "A number is generated you have to guess it ... So go ahead....." << endl;
}

int returnGuess()
{
    int no;
    cout << "Your Guess: ";
    cin >> no;
    return no;
}