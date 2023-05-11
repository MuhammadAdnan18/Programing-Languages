from company import *
class BankAccount:
    
    def __init__(self, name: str, balance: float):
        if not isinstance(name, str):
            raise ValueError("Name must be a string")
        if not isinstance(balance, float) or balance < 0:
            raise ValueError("Balance must be a positive float")
        self.name = name
        self.balance = balance
        self.transactions = []

    def deposit(self):
        amount=float(input("Enter amount to be Deposited: "))
        if not isinstance(amount, float) or amount <= 0:
            raise ValueError("Amount must be a positive float")
        self.balance += amount
        self.transactions.append(f"Deposited ${amount}")

    def withdraw(self):
        amount = float(input("Enter amount to be Withdrawn: "))
        if not isinstance(amount, float) or amount <= 0:
            raise ValueError("Amount must be a positive float")
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount
        self.transactions.append(f"Withdrew ${amount}")

    def get_transactions(self):
        print(self.transactions)	
	
print(employee.Employee.get_employee_info)

s=BankAccount("Adnan",90.5)

s.deposit()
s.withdraw()
s.get_transactions()

