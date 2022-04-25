io= require('console-read-write');

async function main()
{
    console.log("Please enter the no. below which power for 2 is needed to be find out");
    
    let n= await io.read(parseInt());
  
    for(let i=0;i<n;i++)
    {
        let x= power(i);
        console.log("Element at "+(i+1)+"th position is: "+x);
    }
}

function power(a)
{
    let powerResult=0;
    
    for(let j=0;j<=a;j++)
    {
        if(j==0)
        {
            powerResult=1;
        }
        else
            powerResult= 2*powerResult;
    }
    return powerResult;
}
main();