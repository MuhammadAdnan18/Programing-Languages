prod=1
avg=1
while True:
  num = float(input("Enter numbers to find product and average & press 1 to quit:  "))
  if num == 1:
    break
  else:
    prod *= num
    print("PRODUCT IS:",prod)
    avg /= num 
    print(f"Avg is: {avg}")




