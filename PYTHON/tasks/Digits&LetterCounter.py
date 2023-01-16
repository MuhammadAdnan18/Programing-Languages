alpha,Input =0,"python3.21"
for i in Input:
    if (i.isalpha()):
        alpha+=1
        print("Total digits:", len(Input)-alpha)
        print("total letters", alpha)