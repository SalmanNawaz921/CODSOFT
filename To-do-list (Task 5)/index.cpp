#include <iostream>
#include <windows.h>
#include <conio.h>
#include <string>
#include <vector>

using namespace std;

using TaskPair = pair<string, string>;

vector<TaskPair> tasks;

int menu()
{
    int option;
    cout << "1. Add Tasks" << endl;
    cout << "2. View Tasks" << endl;
    cout << "3. Mark Task as Completed" << endl;
    cout << "4. Remove Task" << endl;
    cout << "Your Option: ";
    cin >> option;
    return option;
}

void addTask()
{
    string task;
    cout << "Enter Your Task:";
    cin.ignore();
    getline(cin, task);
    tasks.push_back({task, "Pending"});
}

void viewTask()
{
    for (size_t i = 0; i < tasks.size(); ++i)
    {
        const TaskPair &taskPair = tasks[i];
        cout << i + 1 << ". Task: " << taskPair.first << ", Status: " << taskPair.second << endl;
    }
}

void removeTask(int index)
{
    tasks.erase(tasks.begin() + (index - 1));
}

void markTaskCompleted(int index)
{
    string mark = tasks[index - 1].second;
    if (mark == "Pending")
    {
        tasks[index - 1].second = "Done";
    }
}

void printHeaders()
{
    cout << "To Do List - Your Ultimate Task Saver" << endl;
}

int main()
{
    int opt = 0;
    system("cls");
    while (opt != 5)
    {
        printHeaders();
        opt = menu();
        if (opt == 1)
        {
            addTask();
        }
        else if (opt == 2)
        {
            viewTask();
        }
        else if (opt == 3)
        {
            viewTask();
            int index;
            cout << "Enter The Index Task You Want to Mark As Done : ";
            cin >> index;
            markTaskCompleted(index);
        }
        else if (opt == 4)
        {
            viewTask();
            int index;
            cout << "Enter The No Task You Want to Remove : ";
            cin >> index;
            removeTask(index);
        }
        else
        {
            cout << "Wrong Option...." << endl;
        }

        cout << "Press any key to continue..." << endl;
        getch();
        system("cls");
    }
}