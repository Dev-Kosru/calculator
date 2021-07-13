let inputs = document.getElementById("input-box")

function calculate(event){
   inputs.value =inputs.value+ event;

};
function calculation(){
   inputs.value = eval(inputs.value);
};

function allClear(){
    inputs.value="";
}


function slicing(event){
   inputs.value =inputs.value+ event;
   inputs.value =inputs.value.slice(0,-1);

};

function roots(event){
   inputs.value =inputs.value+ event;
   inputs.value = inputs.value.Math.sqrt();

};