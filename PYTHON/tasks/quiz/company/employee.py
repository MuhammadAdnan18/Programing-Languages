class Employee:
    def __init__(self):
        name = str(input("Enter the name of employee: "))
        employee_id = int(input("Enter the ID of employee: "))
        position = str(input("Enter the positon of employee: "))
        if not isinstance(name, str):
            raise ValueError("Name must be a string")
        if not isinstance(employee_id, int) or employee_id <= 0:
            raise ValueError("Employee ID must be a positive integer")
        if not isinstance(position, str):
            raise ValueError("Position must be a string")
        self.name = name
        self.employee_id = employee_id
        self.position = position

    def get_employee_info(self):
        print(f'Name: {self.name}, Employee ID: {self.employee_id}, Position: {self.position}')

