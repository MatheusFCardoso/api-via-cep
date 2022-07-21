
let data;

function getDataApi(cep){

const xhr = new XMLHttpRequest();

xhr.responseText = "json";
xhr.onreadystatechange =()=>{
    if(xhr.readyState == 4){
        data = xhr.response;
        data = JSON.parse(data)
        /* alert(typeof data); */
        /* console.log(typeof data) */
    }else{

    }
}

xhr.open('GET',`https://viacep.com.br/ws/${cep}/json/`);
xhr.send();

}

const showData = (result) =>{
    for(const key in result){
        if(document.querySelector('#'+key))
        
        document.querySelector('#'+key).value = result[key];
    }
}

const cep = document.querySelector('#cep');

cep.addEventListener('blur', ()=>{
    let cepData = cep.value.replace('-','')
    getDataApi(cepData);
    
    showData(data);
});
