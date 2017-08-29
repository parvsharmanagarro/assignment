function setTimeOutSync(n,callback)
{
    var d=new Date();
    while(true)
    {
    if(new Date()-d>=n)
        break;
    }
    callback();

}
function callback()
{
    console.log("wait over");
}
setTimeOutSync(4000,callback);