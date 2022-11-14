    

import random
num=int(input("guess the right number "))
guess_num= random.randrange(0, 60)
guess_count =0
guess_limit =3
limit=guess_limit 

while guess_count < guess_limit:
   if num==guess_num :
      print("Congratulations!!🥳 You have guessed the right number")

      break

   else:
      print("wrong 😥 ,The answer is: ",guess_num ," and remaing limits are: ",guess_limit)
      print("The range of answer is: 0 - 60")
      break