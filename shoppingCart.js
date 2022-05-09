var plus=document.querySelectorAll('.btnPlus');
var minus=document.querySelectorAll('.btnMinus');
console.log(plus);
console.log(minus);
var Price=document.querySelectorAll('.price');
console.log(Price[0].innerHTML);
var tot= document.getElementById('TOT')
for(let i=0;i<plus.length;i++)
{ 
    plus[i].addEventListener("click",function(){
        plus[i].nextElementSibling.innerHTML++;
      //  tot.innerHTML=parseInt(Price[i].innerHTML)*parseInt(plus[i].nextElementSibling.innerHTML)
       Total()
    })
}
for(let i=0;i<minus.length;i++)
{
    {
        minus[i].addEventListener("click",function(){
        if((minus[i].previousElementSibling.innerHTML)>0)  
        {  
            minus[i].previousElementSibling.innerHTML--;

            Total()
          //  Price[i].innerHTML=parseInt(Price[i].innerHTML)-parseInt(originalPrice);

        }    
        })
    }    
}
//remove items from the cart
var removecartButtons=document.querySelectorAll('.Trash');
console.log(removecartButtons);
var cartt=document.querySelector('.cart')
for(let i=0;i<removecartButtons.length;i++)
{
  
    removecartButtons[i].addEventListener("click",function(){
        removecartButtons[i].parentElement.remove()
       // cartt.firstElementChild.remove()
        Total()
    });
}
//total

function Total(){

    var qties= document.querySelectorAll('.qty')
    console.log(qties)
    var price= document.querySelectorAll('.price')
    console.log(price)
    console.log(total)
    var total=document.getElementById('totalValue')
   var sum=0
  for (let i =0 ; i< price.length ; i++) {
      sum+= parseInt(qties[i].innerHTML)*parseInt(price[i].innerHTML)
      console.log(sum)
  }

  total.innerHTML=sum
}
/*var removeCart=document.getElementById('removeCart');
removeCart.addEventListener('click',function(){
    removeCart.parentElement.remove();
})*/
var panier=document.querySelector('.h');
var displayCart=document.querySelector('.cart');
panier.addEventListener('click',function(){
    displayCart.style.display="block"
})
var removeCart=document.getElementById('removeCart');
removeCart.addEventListener('click',function(){
    displayCart.style.display="none"
})
var redHeart=document.querySelectorAll('i');
console.log(redHeart)
for(let i=0;i<redHeart.length;i++)
{
    redHeart[i].addEventListener('click',function(){
        redHeart[i].classList.toggle('red')
    })
}
