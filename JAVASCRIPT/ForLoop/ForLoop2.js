io= require('console-read-write');
async function main()
{
    console.log("Please enter the no. upto which harmonic sum is to be calculated");
    
    let n= await io.read(parseInt());
    let total=0;
    for(let i=1;i<=n;i++)
    {
        total+= Reciprocal(i);
    }
    console.log("Harmonic sum is: "+total);
}
function Reciprocal(a)
{
    return 1/a;
}
main();