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
    var url = "https://nutritionapiv2.herokuapp.com/test/q?name="
    var fruitVegName = $('#fruitVegName').val()
    var tempHolder;
    url = url + fruitVegName
    console.log(url)
    $.getJSON(url, function(data) {
        $('.testResult').css("opacity",1)
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
const fileSelector = document.getElementById('imageFile');
    var fileList
    fileSelector.addEventListener('change', (event) => {
    fileList = event.target.files;
    console.log(fileList);
     });


