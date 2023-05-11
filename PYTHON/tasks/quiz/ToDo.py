class TodoList:
    def __init__(self, name: str):
        if not isinstance(name, str):
            raise ValueError("Name must be a string")
        self.name = name
        self.items = []
        self.completed_items = []

    def add_item(self):
        item = str(input("Enter items to be completed: "))

        if not isinstance(item, str):
            raise ValueError("Item must be a string")
        self.items.append(item)

    def complete_item(self):
        item = str(input("Enter items that are completed: "))

        if not isinstance(item, str):
            raise ValueError("Item must be a string")
        if item not in self.items:
            raise ValueError("Item not found in the list")
        self.items.remove(item)
        self.completed_items.append(item)

    def get_items(self):
        print(self.items)


T=TodoList("Today's Agenda:")

T.add_item()
T.complete_item()
T.get_items()