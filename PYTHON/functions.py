
def sum(x,y):
    return x+y


print("sum is: ",sum(4,5))

def func(name,message):  
    print("printing the message with",name,"and ",message)  
func(name = "John",message="hello") 

def printme(name,age=22):  
    print("My name is",name,"and age is",age)  
printme(name = "john") #the variable age is not passed into the function however the default value of age is considered in the function  
printme("David",10)

def names(*name):
    print("names are: ")
    for n in name:
        print(n)
names("Ali","Umar","Ahmad")


def fac(n):
    if n==0:
        return 1
    else:
        return n*fac(n-1)