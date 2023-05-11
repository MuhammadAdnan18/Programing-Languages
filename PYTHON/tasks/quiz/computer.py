class Computer:
    def __init__(self):
        brand = str(input("Enter the brand of computer: "))
        model = str(input("Enter the model number: "))
        os= str(input("Enter the operating system: "))
        ram = int(input("Enter the RAM : "))
        storage = int(input("Enter total storage of your computer: "))

        if not isinstance(brand, str):
            raise ValueError("Brand must be a string")
        if not isinstance(model, str):
            raise ValueError("Model must be a string")
        if not isinstance(os, str):
            raise ValueError("Operating System must be a string")
        if not isinstance(ram, int) or ram <= 0:
            raise ValueError("RAM must be a positive integer in GB")
        if not isinstance(storage, int) or storage <= 0:
            raise ValueError("Storage must be a positive integer in GB")
        self.brand = brand
        self.model = model
        self.os = os
        self.ram = ram
        self.storage = storage

    def get_computer_info(self):
        print(f'Brand: {self.brand}, Model: {self.model}, Operating System: {self.os}, RAM: {self.ram} GB, Storage: {self.storage} GB')
c=Computer()

c.get_computer_info()