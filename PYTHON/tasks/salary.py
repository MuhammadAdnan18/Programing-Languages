salary=int(input("Enter you Salary: "))
experience=int(input("Enter you service yars: "))
new_salary = salary + 0.05*salary

if experience > 5:
    print("congratulations!🥳 Your new salary is: ",new_salary)
else:
    print("your salary is same: ",salary)
        
