
let  item = document.getElementById("int");
let list = document.getElementById("ul") ;

function Add()
{
    if(item.value ==="")
    {
        {
            alert( "Please enter an Item" );
        }
    }

    else{
        let li = document.createElement('li');
        let check = document.createElement('input') ;
        check.type='checkbox';
        li.appendChild(check);


        let span = document.createElement('span');
        span.textContent = item.value;
        li.appendChild(span);

        list.appendChild(li);

        li.onclick = function()
        {
            this.parentNode.removeChild(this);
            alert("Yeah..!! You Complete Your Task .");
        }

        item.value = '';

    }

}

document.getElementById("add").addEventListener("click", Add);

document.getElementById("clr").addEventListener("click", function() {
    document.getElementById("ul").innerHTML = "";
});




