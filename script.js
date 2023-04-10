let input="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target);
        if(e.target.innerHTML=='=')
        {
            input=eval(input);
        }
        else if(e.target.innerHTML=='Clear')
        {
            input="";
        }
        else{
            input = input + e.target.innerHTML;
        }
        document.getElementById('input').value=input;
    })
})