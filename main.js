Webcam.set({
    width:350,
    height:300,
    image_format:'jpg',
    jpg_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_pic(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
});
}

console.log("ml5 version: ",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/c3SVUjco9/model.json',modelloaded);
function modelloaded(){
    console.log("model is loaded");
}

function check()
{
    img=document.getElementById('captured_img');
    classifier.classify(img,gotresult);
}

function gotresult(error,results)
{
    if(error)
{
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
    document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(2);
}

}