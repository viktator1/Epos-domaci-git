function podesiDark(){
    
    const body=document.getElementsByTagName("body")[0];
    body.style.background="rgb(80,80,80)";

    const p=document.getElementsByTagName("p");
    for(pom of p){
        pom.style.color="rgb(255,255,255)";
    }
    const h3=document.getElementsByTagName("h3");
    for(pom of h3){
        pom.style.color="rgb(255,255,255)";
    }
    const a=document.getElementsByTagName("a");
    for(pom of a){
        pom.style.color="rgb(255,255,255)";
    }
   
}