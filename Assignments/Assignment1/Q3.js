function my_forEach(arr,callback)
{
    for(var i=0;i<arr.length;i++)
    {
        callback(arr[i]);
    }
}
function callback(i)
{
    console.log(i*2);
}
my_forEach([1,2,3,4],callback);
function my_map(arr,callback2)
{var res=[];
    for(var i=0;i<arr.length;i++)
    {
        res[i]=callback2(arr[i]);
    }
    return res;
}
function callback2(i)
{
    return i*2;
}