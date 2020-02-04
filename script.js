//handling all the moment calculations
const m = moment();

console.log(m.format("[Today's Date: ]ddd MMM Mo YYYY"));
$("#todaysDate").text(m.format("[Today's Date: ]dddd MMM Mo YYYY"));
displayTime();
function displayTime(){
const nm = moment();
$("#todaysTime").text(nm.format("[Time: ] hh[:]mm a"));
console.log(nm.format("[Time: ] hh[:]mm a"));
}

console.log(m.format("hh"));
//handling all the styling as it relates to the current hour...
if(m.format("hh")==09){
    document.getElementById("textField0").style.backgroundColor = "red";
    console.log("highlight 9");
    document.getElementById("textarea0").style.backgroundColor = "red";
}else if(m.format("hh")==10){
    document.getElementById("textField1").style.backgroundColor = "red";
    console.log("highlight 10");
    document.getElementById("textField0").style.backgroundColor = "lightgrey";
    document.getElementById("textarea1").style.backgroundColor = "red";
}else if(m.format("hh")==11){
    document.getElementById("textField2").style.backgroundColor = "red";
    console.log("highlight 11");
    document.getElementById("textField0").style.backgroundColor = "lightgrey";
    document.getElementById("textField1").style.backgroundColor = "lightgrey";
    document.getElementById("textarea2").style.backgroundColor = "red";
}else if(m.format("hh")==12){
    document.getElementById("textField3").style.backgroundColor = "red";
    console.log("highlight 12");
    document.getElementById("textField0").style.backgroundColor = "lightgrey";
    document.getElementById("textField1").style.backgroundColor = "lightgrey";
    document.getElementById("textField2").style.backgroundColor = "lightgrey";
    document.getElementById("textarea3").style.backgroundColor = "red";
}else if(m.format("hh")==01){
    document.getElementById("textField4").style.backgroundColor = "red";
    console.log("highlight 1");
    document.getElementById("textField0").style.backgroundColor = "lightgrey";
    document.getElementById("textField1").style.backgroundColor = "lightgrey";
    document.getElementById("textField2").style.backgroundColor = "lightgrey";
    document.getElementById("textField3").style.backgroundColor = "lightgrey";
    document.getElementById("textarea4").style.backgroundColor = "red";
}else if(m.format("hh")==02){
    document.getElementById("textField5").style.backgroundColor = "red";
    console.log("highlight 2");
    document.getElementById("textField0").style.backgroundColor = "lightgrey";
    document.getElementById("textField1").style.backgroundColor = "lightgrey";
    document.getElementById("textField2").style.backgroundColor = "lightgrey";
    document.getElementById("textField3").style.backgroundColor = "lightgrey";
    document.getElementById("textField4").style.backgroundColor = "lightgrey";
    document.getElementById("textarea5").style.backgroundColor = "red";
}else if(m.format("hh")==03){
    document.getElementById("textField6").style.backgroundColor = "red";
    console.log("highlight 3");
    document.getElementById("textField0").style.backgroundColor = "lightgrey";
    document.getElementById("textField1").style.backgroundColor = "lightgrey";
    document.getElementById("textField2").style.backgroundColor = "lightgrey";
    document.getElementById("textField3").style.backgroundColor = "lightgrey";
    document.getElementById("textField4").style.backgroundColor = "lightgrey";
    document.getElementById("textField5").style.backgroundColor = "lightgrey";
    document.getElementById("textarea6").style.backgroundColor = "red";
}else if(m.format("hh")==04){
    document.getElementById("textField7").style.backgroundColor = "red";
    console.log("highlight 4");
    document.getElementById("textField0").style.backgroundColor = "lightgrey";
    document.getElementById("textField1").style.backgroundColor = "lightgrey";
    document.getElementById("textField2").style.backgroundColor = "lightgrey";
    document.getElementById("textField3").style.backgroundColor = "lightgrey";
    document.getElementById("textField4").style.backgroundColor = "lightgrey";
    document.getElementById("textField5").style.backgroundColor = "lightgrey";
    document.getElementById("textField6").style.backgroundColor = "lightgrey";
    document.getElementById("textarea7").style.backgroundColor = "red";
}else if(m.format("hh")==05){
    document.getElementById("textField8").style.backgroundColor = "red";
    console.log("highlight 5");
    document.getElementById("textField0").style.backgroundColor = "lightgrey";
    document.getElementById("textField1").style.backgroundColor = "lightgrey";
    document.getElementById("textField2").style.backgroundColor = "lightgrey";
    document.getElementById("textField3").style.backgroundColor = "lightgrey";
    document.getElementById("textField4").style.backgroundColor = "lightgrey";
    document.getElementById("textField5").style.backgroundColor = "lightgrey";
    document.getElementById("textField6").style.backgroundColor = "lightgrey";
    document.getElementById("textField7").style.backgroundColor = "lightgrey";
    document.getElementById("textarea8").style.backgroundColor = "red";
}else{
    console.log("past 5pm / before 9am");
    document.getElementById("textField0").style.backgroundColor = "grey";
    document.getElementById("textField1").style.backgroundColor = "grey";
    document.getElementById("textField2").style.backgroundColor = "grey";
    document.getElementById("textField3").style.backgroundColor = "grey";
    document.getElementById("textField4").style.backgroundColor = "grey";
    document.getElementById("textField5").style.backgroundColor = "grey";
    document.getElementById("textField6").style.backgroundColor = "grey";
    document.getElementById("textField7").style.backgroundColor = "grey";
    document.getElementById("textField8").style.backgroundColor = "grey";
    document.getElementById("textarea0").style.backgroundColor = "grey";
    document.getElementById("textarea1").style.backgroundColor = "grey";
    document.getElementById("textarea2").style.backgroundColor = "grey";
    document.getElementById("textarea3").style.backgroundColor = "grey";
    document.getElementById("textarea4").style.backgroundColor = "grey";
    document.getElementById("textarea5").style.backgroundColor = "grey";
    document.getElementById("textarea6").style.backgroundColor = "grey";
    document.getElementById("textarea7").style.backgroundColor = "grey";
    document.getElementById("textarea8").style.backgroundColor = "grey";
}

renderSaved();


function renderSaved(){
    var savedA = localStorage.getItem("aSave");
    var savedB = localStorage.getItem("bSave");
    var savedC = localStorage.getItem("cSave");
    var savedD = localStorage.getItem("dSave");
    var savedE = localStorage.getItem("eSave");
    var savedF = localStorage.getItem("fSave");
    var savedG = localStorage.getItem("gSave");
    var savedH = localStorage.getItem("hSave");
    var savedJ = localStorage.getItem("jSave");

    document.getElementById("textarea0").value = savedA;
    document.getElementById("textarea1").value = savedB;
    document.getElementById("textarea2").value = savedC;
    document.getElementById("textarea3").value = savedD;
    document.getElementById("textarea4").value = savedE;
    document.getElementById("textarea5").value = savedF;
    document.getElementById("textarea6").value = savedG;
    document.getElementById("textarea7").value = savedH;
    document.getElementById("textarea8").value = savedJ;
}


$(".save-btn").click(function(){
    console.log("you hit a save btn YO")
    console.log(this.id);
    displayTime();
    if(this.id==="save-btn0"){
        var a = document.getElementById("textarea0")
        console.log(a.value)
        var savedA = a.value;
        localStorage.setItem("aSave", savedA);
    }else if(this.id==="save-btn1"){
        var b = document.getElementById("textarea1")
        console.log(b.value)
        var savedB = b.value;
        localStorage.setItem("bSave", savedB);
    }else if(this.id==="save-btn2"){
        var c = document.getElementById("textarea2")
        console.log(c.value)
        var savedC = c.value;
        localStorage.setItem("cSave", savedC);
    }else if(this.id==="save-btn3"){
        var d = document.getElementById("textarea3")
        console.log(d.value)
        var savedD = d.value;
        localStorage.setItem("dSave", savedD);
    }else if(this.id==="save-btn4"){
        var e = document.getElementById("textarea4")
        console.log(e.value)
        var savedE = e.value;
        localStorage.setItem("eSave", savedE);
    }else if(this.id==="save-btn5"){
        var f = document.getElementById("textarea5")
        console.log(f.value)
        var savedF = f.value;
        localStorage.setItem("fSave", savedF);
    }else if(this.id==="save-btn6"){
        var g = document.getElementById("textarea6")
        console.log(g.value)
        var savedG = g.value;
        localStorage.setItem("gSave", savedG);
    }else if(this.id==="save-btn7"){
        var h = document.getElementById("textarea7")
        console.log(h.value)
        var savedH = h.value;
        localStorage.setItem("hSave", savedH);
    }else if(this.id==="save-btn8"){
        var j = document.getElementById("textarea8")
        console.log(j.value)
        var savedJ = j.value;
        localStorage.setItem("jSave", savedJ);
    }else{
        return;
    }
});

$(".clearBtn").click(function(){
    clearAll();
    displayTime();
})
function saveText(a){
    displayTime();
    console.log("save this row...")
    console.log(a.textContent);
    a.textContent ="sitter"
}
function clearAll(){
    if(document.getElementById("textarea0").value = null){
    document.getElementById("textarea0").value="";
    }else if(document.getElementById("textarea1").value = null){
        document.getElementById("textarea1").value="";
    }else if(document.getElementById("textarea2").value = null){
        document.getElementById("textarea2").value="";
    }else if(document.getElementById("textarea3").value = null){
        document.getElementById("textarea3").value="";
    }else if(document.getElementById("textarea4").value = null){
        document.getElementById("textarea4").value="";
    }else if(document.getElementById("textarea5").value = null){
        document.getElementById("textarea5").value="";
    }else if(document.getElementById("textarea6").value = null){
        document.getElementById("textarea6").value="";
    }else if(document.getElementById("textarea7").value = null){
        document.getElementById("textarea7").value="";
    }else if(document.getElementById("textarea8").value = null){
        document.getElementById("textarea8").value="";
    }

    localStorage.clear();
    console.log("you hit a clear btn...")
}
