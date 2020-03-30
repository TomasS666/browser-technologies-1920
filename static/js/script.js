localStorage.clear()

if (document.querySelector('input[name="shirtText"]')) {
    console.log("shirtInput")
    var shirtInput = document.querySelector("input[name=shirtText]")

    var svg = document.querySelector("svg")
    // var g = document.createElement("g")
    // var svgText = document.createElement("text")
    // svgText
    //     .setAttribute("x", 0);
    // svgText
    //     .setAttribute("y", 50);

    //     svg.append(svgText)
    // g.append(svgText)
    // svg.append(g)

    var svgText = document.querySelector("p")



    shirtInput.addEventListener("input", function (event) {

        svgText.textContent = shirtInput.value

    })
}

// check if on save route
if (window.location.href.indexOf("/save?") > -1) {
    // Detect if window has the method print
    if(window.print){
        // If so, create button element.
        // This instead of insertAdjecentHTML so I can add eventlistener before appending it 
        // And don't have to retrieve it out of the DOM again

        var printbtn = document.createElement("button")
        var textNode = document.createTextNode("Print")
        
        printbtn.append(textNode)

        // On click, print page
        printbtn.addEventListener("click", function(e){
            window.print()
        })

        // Wide browser support, but win for me because I can easily compose where I want
        document.body.insertAdjacentElement('beforeend', printbtn)
    }
}


// Two steps

if(document.querySelector){
    var steps = document.querySelectorAll('[name^=field-]');
    console.log(steps)
    
}



function get(key, value) {
    return localStorage.getItem(key, value)
}

function set(key, value) {
    return localStorage.setItem(key, value)
}