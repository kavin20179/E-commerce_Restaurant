document.getElementById("search").addEventListener("keyup",function(event)
{
    const enteredtext =event.target.value.toUpperCase();
    const allcards =document.querySelectorAll(".col-sm-3");
    for(let i=0;i<allcards.length;i++)
    {
        const col=allcards[i];
        const title=col.querySelector(".card-title");
       
        if(title)
        {
            const product=title.textContent.toUpperCase();
            if(product.includes(enteredtext))
            {
                col.style.display="block";
            }
            else
            {
                col.style.display="none";
                
               
            }
        }
    }
})



