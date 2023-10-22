#include <iostream>
#include <string>
using namespace std;

// Student Class To Keep Track of studentNames and studentGrades

class Student
{

    // private variables

    string studentName[30];
    double studentGrade;

    // public methods

public:
    void setDetails(int index);
    double getGrade();
};

// Method to get student grade

double Student::getGrade()
{
    return studentGrade;
}

// Method to set student details

void Student::setDetails(int index)
{
    cout << "Enter Student Name: ";
    cin >> studentName[index];
    cout << "Enter Student Grade: ";
    cin >> studentGrade;
}

// Main Function

int main()
{
    Student stu[30];
    int n, i;

    cout << "Enter Number of Students You Want To Enter: ";
    cin >> n;
    double totalGrade = 0.0;
    double lowestGrade = 0.0;
    double highestGrade = 0.0;
    for (int i = 0; i < n; i++)
    {
        stu[i].setDetails(i);
        totalGrade += stu[i].getGrade();
        if (i == 0)
        {
            lowestGrade = stu[i].getGrade();
            highestGrade = stu[i].getGrade();
        }

        if (stu[i].getGrade() < lowestGrade)
        {
            lowestGrade = stu[i].getGrade();
        }
        if (stu[i].getGrade() > highestGrade)
        {
            highestGrade = stu[i].getGrade();
        }
    }

    cout << "Highest Grade: " << highestGrade << endl;
    cout << "Average Grade: " << totalGrade / n << endl;
    cout << "Lowest Grade: " << lowestGrade << endl;
}