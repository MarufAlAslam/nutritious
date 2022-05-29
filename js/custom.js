$('.bmiCalculate').click(function(e){
    e.preventDefault()
    var h = Number($('#height').val())
    var w = Number($('#weight').val())
    var bmi = (w / (h * h)) * 10000
    $('#bmiVal').html(bmi.toFixed(2))

    if(bmi < 18.5){
        $('#bmiStat').html("Underweight")
    }
    else if(bmi >= 18.5 && bmi <=24.9){
        $('#bmiStat').html("Normal")
    }
    else if(bmi >= 25 && bmi <=29.9){
        $('#bmiStat').html("Overweight")
    }
    else if(bmi >= 30 && bmi <=34.9){
        $('#bmiStat').html("Obese")
    }
    else if(bmi >= 35 && bmi <=39.9){
        $('#bmiStat').html("Severely Obese")
    }
    else if(bmi >= 40){
        $('#bmiStat').html("Morbidly Obese")
    }
})



$('.searchByName').click(function(){
    $('.img-fluid.loader').show()
    var url = "https://nutritionapiv2.herokuapp.com/test/q?name="
    var fruitVegName = $('#fruitVegName').val()
    var tempHolder;
    url = url + fruitVegName
    console.log(url)
    $.getJSON(url, function(data) {
        $('.testResult').css("opacity",1)
        $('.img-fluid.loader').hide()
    // get name
    $('.fruitVegName').html(data.data.name)

    // general items
    var generalItems = data.data.generalItems;
    for(var i=0; i<generalItems.length; i++){
        var x=document.getElementById('generalTable').insertRow(1);
        var c1=x.insertCell(0);
        var c2=x.insertCell(1);
        c1.innerHTML=generalItems[i].nutrientName;
        c2.innerHTML=generalItems[i].nutrientValue+"("+generalItems[i].unit+")";
    }



    // mineral items
    var mineralItems = data.data.mineralItems;
    for(var i=0; i<mineralItems.length; i++){
        var x=document.getElementById('mineralItems').insertRow(1);
        var c1=x.insertCell(0);
        var c2=x.insertCell(1);
        c1.innerHTML=mineralItems[i].nutrientName;
        c2.innerHTML=mineralItems[i].nutrientValue+"("+mineralItems[i].unit+")";
    }



    // vitamin items
    var vitaminItems = data.data.vitaminItems;
    for(var i=0; i<vitaminItems.length; i++){
        var x=document.getElementById('vitaminItems').insertRow(1);
        var c1=x.insertCell(0);
        var c2=x.insertCell(1);
        c1.innerHTML=vitaminItems[i].nutrientName;
        c2.innerHTML=vitaminItems[i].nutrientValue+"("+vitaminItems[i].unit+")";
    }




//    console.log(data.data.generalItems)
});

  // console.log(tempHolder.name);
})

$('.imageFile').change(function(){
    if (input.files && input.files[0]) {
        var reader = new FileReader();
    
        reader.onload = function (e) {
          $('.detectedImage').attr('src', e.target.result).width(150).height(200);
        };
    
        reader.readAsDataURL(input.files[0]);
      }
})

$('.uploadBtn').click(function(){
    $('.img-fluid.loader').show()
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    
    formData.append('image', fileField.files[0]);
    console.log(fileField.files[0])
    
    
        fetch('https://food-recognition-ssm.herokuapp.com/v1/', {
        method: 'POST',
        body: formData
        })
        .then(response => response.json())
        .then(result => {
        //console.log('Success:', result.data[0].name);
        var url = "https://nutritionapiv2.herokuapp.com/test/q?name="
    var fruitVegName = result.data[0].name
    var tempHolder;
    url = url + fruitVegName
    console.log(url)
    $.getJSON(url, function(data) {
        $('.testResult').css("opacity",1)
        $('.img-fluid.loader').hide()
    // get name
    $('.fruitVegName').html(data.data.name)

    // general items
    var generalItems = data.data.generalItems;
    for(var i=0; i<generalItems.length; i++){
        var x=document.getElementById('generalTable').insertRow(1);
        var c1=x.insertCell(0);
        var c2=x.insertCell(1);
        c1.innerHTML=generalItems[i].nutrientName;
        c2.innerHTML=generalItems[i].nutrientValue+"("+generalItems[i].unit+")";
    }



    // mineral items
    var mineralItems = data.data.mineralItems;
    for(var i=0; i<mineralItems.length; i++){
        var x=document.getElementById('mineralItems').insertRow(1);
        var c1=x.insertCell(0);
        var c2=x.insertCell(1);
        c1.innerHTML=mineralItems[i].nutrientName;
        c2.innerHTML=mineralItems[i].nutrientValue+"("+mineralItems[i].unit+")";
    }



    // vitamin items
    var vitaminItems = data.data.vitaminItems;
    for(var i=0; i<vitaminItems.length; i++){
        var x=document.getElementById('vitaminItems').insertRow(1);
        var c1=x.insertCell(0);
        var c2=x.insertCell(1);
        c1.innerHTML=vitaminItems[i].nutrientName;
        c2.innerHTML=vitaminItems[i].nutrientValue+"("+vitaminItems[i].unit+")";
    }




//    console.log(data.data.generalItems)
});
        })
        .catch(error => {
        console.error('Error:', error);
            });
})
// const fileSelector = document.getElementById('imageFile');
//     var fileList
//     fileSelector.addEventListener('change', (event) => {
//     fileList = event.target.files;
//     console.log(fileList);
//      });


