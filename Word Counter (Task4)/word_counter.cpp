#include <iostream>
#include <fstream>

using namespace std;

int wordCounter();

int main()
{
    if (wordCounter() != -1)
    {

        cout << "Total Words: " << wordCounter();
    }
    return 0;
}

int wordCounter()
{
    fstream file;
    string line;
    file.open("doc.txt", ios::in);
    if (!file.is_open())
    {
        cerr << "Failed to open the file.\n";
        return -1;
    }
    int wordCounter = 0;
    while (file >> line)
    {
        wordCounter++;
    }
    return wordCounter;
}
