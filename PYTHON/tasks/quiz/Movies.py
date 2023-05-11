class Movie:
    def __init__(self):
        title = str(input("Enter title of the movie: "))
        director = str(input("Enter director's name: "))
        year = int(input("Enter the released year: "))
        actors = str(input("Enter the lead actors: "))
        rating = float(input("Enter the movie rating(from 0 to 5): "))
        if not isinstance(title, str):
            raise ValueError("Title must be a string")
        if not isinstance(director, str):
            raise ValueError("Director must be a string")
        if not isinstance(year, int):
            raise ValueError("Year must be an integer")
        if not all(isinstance(i, str) for i in actors):
            raise ValueError("Actors must be a list of strings")
        if not isinstance(rating, float) or rating < 0 or rating > 5:
            raise ValueError("Rating must be a float between 0 and 5")

        self.title = title
        self.director = director
        self.year = year
        self.actors = actors
        self.rating = rating

    def get_movie_info(self):
        print(f'Title: {self.title}, Director: {self.director}, Year: {self.year}, Actors: {self.actors}, Rating: {self.rating}')

A=Movie()

A.get_movie_info()