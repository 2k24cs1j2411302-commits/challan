let form=document.getElementById('form');
let btn =document.getElementById('btn');
let btn2 =document.getElementById('btn2');
let form2=document.getElementById('form2');
let input=document.getElementById('input1');
let input2=document.getElementById('input2');
// let data =JSON.parse(JSON.stringify(useCases));
fetch('data.json')
.then(response => response.json())
.then(
    data => {
        useCases = data.useCases;
        // console.log(useCases);
    }
)
btn.addEventListener('click', ()=>{
    
    console.log(form.value);
    useCases = useCases.filter(item => item.id === form.value);
    // console.log(useCases);
    // console.log(useCases[0].title);
    // console.log(useCases[0].description);
    // console.log(useCases[0].variants);

    for(let i =0; i < useCases[0].variants.length; i++){
        console.log(useCases[0].variants[i].id);
        let option = document.createElement("option");
        option.value = useCases[0].variants[i].id;
        option.text = useCases[0].variants[i].trigger;
        form2.appendChild(option);
        console.log(option.value, option.text);

    }
})
btn2.addEventListener('click', ()=>{
    console.log(useCases[0].variants);
    requiredVariant = useCases[0].variants.filter(item => item.id === form2.value);
    input.value = requiredVariant[0].shouldDo;
    input2.value = requiredVariant[0].shouldNotDo;

    // Adjust input width based on content
    input.style.width = (input.value.length * 8) + 'px';
    input2.style.width = (input2.value.length * 8) + 'px';

    console.log(requiredVariant[0].trigger);
    
    
    
})