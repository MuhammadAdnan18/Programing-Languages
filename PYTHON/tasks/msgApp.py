name=input("Enter your name ")
Pass=input("Enter password ")
succesful=False
import itertools
for i in itertools.count(-3):
  msg=input("Enter the message you want to send ")
  if msg!=name+Pass:
      print("try again,number of attempts:{}".format( i))
      continue  
  else:
    print("your message is sent succesfully")
    break