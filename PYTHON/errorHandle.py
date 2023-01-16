#-------devide by 0 PROGRAM without TRY EXCEPT-------
age=0
income= 2000
risk=income/age


print('number cant be printed')
    
print (risk)

#-------devide by 0 PROGRAM with TRY EXCEPT-------

try:
    age=0
    income= 2000
    risk=income/age

except ZeroDivisionError:
    print('number cant be printed')
    
print (risk)
