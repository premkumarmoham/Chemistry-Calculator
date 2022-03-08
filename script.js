
function molality(event){
    event.preventDefault();
     var  moles,kg,result;
 moles = document.getElementById("Molality-solvent").value;
 kg = document.getElementById("kg-solvent").value;
 result= moles/kg;
 document.getElementById("result").innerHTML = result;
}
function molarity(event){
        event.preventDefault();
 var  moles,kg,result;
 moles = document.getElementById("Molarity-solvent").value;
 kg = document.getElementById("Molarity-volume-solvent").value;
 result= moles/kg;
 document.getElementById("Molarity-result").innerHTML = result;
}
function Normality(event){
        event.preventDefault();
 var  moles,kg,result;
 moles = document.getElementById("Normality-solvent").value;
 kg = document.getElementById("Normality-volume-solvent").value;
 result= moles/kg;
 document.getElementById("Normality-result").innerHTML = result;
}