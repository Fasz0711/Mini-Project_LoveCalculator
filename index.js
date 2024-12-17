function esCompatible(){
    const nombre1 = document.getElementById('name1').value;
    const nombre2 = document.getElementById('name2').value;
    let result = document.querySelector('.resultado');
    let resultText = '';
    

    if( nombre1 && nombre2){
        const compatibility = Math.floor(Math.random() * 100); 
        if(1 < compatibility && compatibility < 33){
            resultText= `El cálculo da ${compatibility}%, no son compatibles 😣`; 
        }else if(33 <= compatibility && compatibility < 66){
            resultText= `El cálculo da ${compatibility}%, son medianamente compatibles 🫡`;
        } else{
            resultText= `El cálculo da ${compatibility}%, son compatibles 😍`;
        }

        result.style.color = 'red'; // Cambiar color de texto
        result.innerHTML = resultText;
    } else{
        result.innerHTML = "Por favor, ingrese los nombres";
        console.log('Por favor, ingrese los nombres');
    } 
}