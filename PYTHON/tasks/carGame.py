      #car engine game without GUI
command = ""

started = False

while True:
 command = input("Give command ").lower()

 if command=="start" :
   if started:
    print("Car has already been started🚗" )
   else:
      started=True
      print("car is started 🚗") 

 elif command=="stop" :
   print("Car has stopped 🚗")
   if not started:
    print("car is already stopped ")
   else:
     started:False
     print("car is stopped 🚗")

 elif command =="help" :
   print("type start to start the car \n type stop to stop the car \n press x to exit the game")
   
 elif command =="x" :
   print("The game is finished")    
   break
 
 else:
   print("wrong command😓,Try again") 
  