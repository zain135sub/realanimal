function play_audio(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/C7KlGvggS/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,result){
    if(error){
        console.error(error)
    }
        else{
            console.log(result)
            random_number_r=Math.floor(Math.random()*255)+1;
            random_number_g=Math.floor(Math.random()*255)+1;
            random_number_b=Math.floor(Math.random()*255)+1;
        }
        img=document.getElementById("dog");
        if(result[0].label=="barking"){
            img.src="dog1.jfif"
            document.getElementById("detected").innerHTML="I can Hear-"+result[0].label;
        }
        else if(result[0].label=="meowing"){
            img.src="cat1.jpg";
            document.getElementById("detected").innerHTML="I can Hear-"+result[0].label;
        }
    }

