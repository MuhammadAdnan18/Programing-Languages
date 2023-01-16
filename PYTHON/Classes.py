#CLASSES:
#PREDIFINED CLASSES(string,int,float etc)
#OOP:WHEN YOU CAN CREATE YOUR OWN DATA TYPES WITH THE HELP OF YOUR OWN CREATED CLASS
#keywords: words that are specified for a specific function/feature in a language

class Point:
    
    def move(self):
        print ("draw")
#object of Point class        
point1=Point()
# . is used to acces features of object
point1.move()

#CLASS1
class Human:
    def person(self):
        name=input("enter your name")
        age=input("enter your age")
        print("my name is",name,"and my age is",age)


#CLASS 2
class Human:
    def person(self,name,age):
        self.name=""
        self.age=0
        print("my name is",name,"and my age is",age)
        
    def talk(self):
                      
              print(self.name,'here and I can talk')
            

person1=Human()
person2=Human()
person3=Human()

person1.person("Umar",16)
person2.person("Ali",18)
person3.person("Ahmad",18)
    
person1.talk()

#CLASS

class Human:
    
    def __init__(self,name,age):
        self.name=name
        self.age=age
        
    def talk(self):
         print(self.name,'here and I can talk')

self.name=input("enter your name")
self.age=input("enter your age")
person1=Human(name,age)
person2=Human(name,age)
person3=Human(name,age)
talk1=Human(name,age)

person1.talk

