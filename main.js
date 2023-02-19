 function startClassification()
 {
    navigator.mediaDevices.getUserMedia({audio:true, video:false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ufeQqkAYW/model.json', {probabilityThreshold:0.7},modelReady);
 }
 function modelReady()
 {
    classifier.classify(gotResults);
 }
 var cat = 0;
 var dog = 0;
 var cow = 0;
 var tiger = 0;
 function gotResults(error, results)
 {
if(error)
{
    console.error(error);
} 
else {
    console.log(results);
    randomnumber_r = Math.floor(Math.random() *255) + 1;
    randomnumber_g = Math.floor(Math.random() *255) + 1;
    randomnumber_b = Math.floor(Math.random() *255) + 1;
    document.getElementById("result_label").innerHTML = "detected voice is of " + results[0].label;
    document.getElementById("result_confidence").innerHTML = "detected voice is of " + results[0].confidence.toFixed(3);
    document.getElementById("result_label").style.color = "rgb(" + randomnumber_r + "," + randomnumber_g + ", " + randomnumber_b + ")";
    document.getElementById("result_confidence").style.color = "rgb(" + randomnumber_r + "," + randomnumber_g + ", " + randomnumber_b + ")";
img = document.getElementById("animal_image");
if(results[0].label == "Cat")
{
    img.src = "cat.png";
    cat = cat+1;
}
else if(results[0].label == "Dog")
{
    img.src = "dog.png";
    dog = dog+1;
}
else if(results[0].label == "Cow")
{
    img.src = "cow.png";
    cow = cow+1;
}
else if(results[0].label == "Tiger")
{
    img.src = "tiger.png";
    tiger = tiger+1;
}
else {
    img.src = "ear.png";
}
}
}