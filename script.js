let arr=[25,10,5,1];
let ans={};
const makeChange = (c) => 
{
  // your name here
	for(let i=0;i<4;i++)
	{
	
		if(i==0)
		{
			//when 25..
			ans['q']=parseInt(c/arr[i]);
			c=c-arr[i]*ans['q'];
		}
		else if(i==1)
		{
			ans['d']=parseInt(c/arr[i]);
			c=c-arr[i]*ans['d'];
		}
		else if(i==2)
		{
			ans['n']=parseInt(c/arr[i]);
			c=c-arr[i]*ans['n'];
		}
		else if(i==3)
		{
			ans['p']=parseInt(c/arr[i]);
			c=c-arr[i]*ans['p'];
		}
	}
	return ans;
	
};

// Do not the change the code below
const c = prompt("Enter c: ");

alert(JSON.stringify(makeChange(c)));
