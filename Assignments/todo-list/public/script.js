const RESPONSE_DONE=4;
const STATUS_OK=200;
var xhr=new XMLHttpRequest();
function append()
{
    var d=document.getElementById("todos_list_div");
    d.innerText=xhr.responseText;
}
function getTodosAJAX()
{
    console.log("need to define");
    xhr.open("GET","/api/todos",true);
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState==RESPONSE_DONE)
        {
            if(xhr.status==STATUS_OK) {
                console.log(xhr.responseText);
                append();
            }
        }
    }
    xhr.send(data=null);
    console.log("ppp");
}