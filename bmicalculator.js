const form = document.querySelector('form')

form.addEventListener('submit', function(e){

    e.preventDefault()

    // console.log("Hello Worlda")
    let bmi = 0;
    let flag = false

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('#result')
    let msg = document.querySelector('#msg')

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = "Please give valid height"
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give valid weight`
    }else{
        bmi = (weight)/((height*100)*(height*100))
        // console.log("BMI calculating....")
        result.innerHTML = `Your BMI value is ${bmi}`
        flag = true

    }

    // console.log(bmi)

    if(bmi<=18.6 && flag){
        msg.innerHTML = `You are under weight`
    } else if (bmi >18.6 && bmi <24.9 && flag){
        msg.innerHTML = `You are perfectly weighted`
    } else if(flag){
        msg.innerHTML = `You are overweighted`
    }

    
})