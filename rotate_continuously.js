var t;
function rotating()
{
    var x=document.getElementById("image1");
    var y=document.getElementById("image2");
    var z=document.getElementById("image3");
    x.style.transform+="rotate(45deg)";
    y.style.transform+="rotate(45deg)";
    z.style.transform+="rotate(45deg)";
    t=setTimeout(rotating,100);
}
function stop()
{
    window.location.reload();
    //window.clearTimeout(t);
}
    






    /*for(var i=0;i<=360;i++)
    {
        if(i===360)
        {
            x.style.transform+="rotate(0deg)";
            i=0;
        }
        x.style.transform+="rotate("+(i+1)+"deg)";
    }*/