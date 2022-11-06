//Special type 
// 1:any ; used to disabble type checking feature of typescript
let v: any = true;
v = "string"; 
Math.round(v); 

//it will not throw any error when converting from one type to another bcz its type is any

//2:Unknown : best used when for post assigning the value i-e when u dont know whether u will assign a integint or flost value so use unknown and tha you can use any of them 
//3:Never: when used, will give an error 
//4:undefined & null :These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.
