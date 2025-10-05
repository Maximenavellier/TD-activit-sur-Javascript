document.addEventListener("DOMContentLoaded", function() {
    let euros = document.getElementById("euro");
    let dollarsusa = document.getElementById("dollarsus");
    let dollarsaus = document.getElementById("dollarsaus");

    euros.addEventListener("input", function(){convmonnaie(this.id, this.value);});
    dollarsusa.addEventListener("input", function(){convmonnaie(this.id, this.value);});
    dollarsaus.addEventListener("input", function(){convmonnaie(this.id, this.value);});

    function convmonnaie(id, valeur){
        if(id == "euro"){
            dollarsusa.value = valeur * 1.1;
            dollarsaus.value = valeur * 1.5;
        }else if(id == "dollarsus"){
            euros.value = valeur / 1.1;
            dollarsaus.value = valeur * 1.5;
        }else if(id == "dollarsaus"){
            euros.value = valeur / 1.5;
            dollarsusa.value = valeur / 1.5;
        }
    }
});