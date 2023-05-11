from employee import * 
class Department:
    def __init__(self):
        name = str(input("Enter the name of department: "))
        if not isinstance(name, str):
            raise ValueError("Name must be a string")
        self.name = name
        self.employees = []

    def add_employee(self, employee: Employee):
        self.employees.append(employee)

e=Employee()

e.get_employee_info

d=Department()
d.add_employee()