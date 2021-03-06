const masks = {
    cpf(value){
        console.log(value)
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    }
}

document.querySelectorAll('input').forEach(($input) =>{
    const field = $input.dataset.js

    $input.addEventListenner('input', (e) => {
        e.target.value = masks[field](e.target.value)
    },false)
})