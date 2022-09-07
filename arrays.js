1.  Find the Product.
const Find_Prod = (array, N) => 
{
  let pro=1;
  for(i=0;i<N;i++){
    pro=pro*array[i];
  }
  return(pro);
};

2. Find the Sum.
const Find_Sum = (array, N) => 
{
  let sum=0;
  for(let i=0 ; i<N ; i++){
    sum=sum+array[i];
  }
    return (sum);
};
 3. Count Occurrences
 const findCount = (N, K, Arr) => 
{
  let count=0;
  for(i=0 ; i<N ; i++){
    if(Arr[i]==K)
    count=count+1;
  }
  return(count);
};
4.Even Odd
const findEvenOdd = (N, Arr) => 
{
    let sumeven=0;
    let sumodd=0;
    for (let i=0;i<N;i++){
      if (Arr[i]%2==0){
        sumeven=sumeven+Arr[i];
      }
      else{
        sumodd=sumodd+Arr[i];
      }
    }
    return[sumeven,sumodd];;
};

5. Find whether the number is present or not
const Find_Num = (array,N,M) => 
{
  for(let i=0 ; i<N ; i++)
  {
    if(array[i]==M)
      return "YES"
      else
      continue;
      }
    return "NO"
};

6.Higher Age
const highAge = (N, Arr) => 
{
  let Arra=[]
    for(let i=0 ; i < N ; i++)
    {
      if(Arr[i]>=18)
      {
        Arra.push(Arr[i])
      }
        else{
        continue;
        }
    }
    return(Arra);
};

7.Increment the Array Elements
const Inc_Arr = (array,N) => 
{
   let arr=[]
  for(let i=0;i<N;i++)
  {
    arr.push(array[i]+1)
  }
  console.log(...arr)

}
8.Pass or Fail
const isAllPass = (N, Arr) => 
{
   
    let count=0;
  for(let i=0;i<N;i++){
    if(Arr[i]>=32){
      count=count+1;
    }
    else{
      break;
    }
  }
  if(count===N){
    return "YES";
  }
  return "NO";

};

9.Unique Color Shirt
function Unique_Shirts (arr,N) {

    arr = arr.sort();
    let count = 0;
    for(let i = 0; i < N; i++){
      if((arr[i-1] === arr[i]) || (arr[i] === arr[i+1])){
        count += 1;
      }
    }
    return (N - count);
  }

10.Min and Max
function arrayMax(arr) {
    let b=[]
    b[1]=arr[0]
    let y=arr
     for(let j=1;j<arr.length;j++)
     {
       if(y[j]>b[1])
       {
         b[1]=y[j];
       }
     }
     return b[1]
    }

11. Birthday Game
let counter = 0;
for(let i = 0; i < arr.length - 1; i++){
  let subArray = arr.slice(i,i+M);
  if ( subArray.length === M ) {
    let sum=subArray.reduce((a,b)=> a + b, 0);
    if(sum === D){
      counter += 1;
    }
  } 
  
}
 return counter;
}












