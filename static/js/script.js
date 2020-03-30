localStorage.clear()

console.log(document.querySelector('input[name="shirtText"]'))

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
        // console.log(shirtInput.value)

        svgText.textContent = shirtInput.value

    })
}


if (document.querySelector) {
    // if (window.location.href.indexOf("/design-shirt") > -1) {

    // }

    // Button to go to next or prev step
    var buttons = document.querySelectorAll("button[data-step]")


    if (document.querySelector("form")) {
        var form = document.querySelector("form");

        var bool = false;
        form.addEventListener("click", function (event) {
            // console.log(event.target)
            var target = event.target;
            if (target.tagName.toLowerCase() == "button" && target.hasAttribute("formaction") && target.getAttribute("formaction") != "/save") {
                
                // console.log(event.target, event.target.dataset.step)

                event.preventDefault()

                var step = event.target.dataset.step
                var currentStep = form.querySelector("fieldset[name=field-" + step + "]")
                var fields = currentStep.querySelectorAll("input")

                console.log("Step" + String(step))
                console.log(currentStep)


                // values.push(getValues())

                multiStepForm(Number(step))


           

                if (bool == true) {



                    console.log(fields)
                    for (var i = 0; i < fields.length; i++) {
                        var e = fields[i]
                        console.log("coming here")
                        if (e.value != 'undefined') {

                            if (e.getAttribute("type") == "radio") {
                                if (e.checked) {
                                    set(e.name, JSON.stringify(e.value))
                                    set("step", JSON.stringify(step))
                                }
                            }

                            bool = false
                        } else {
                            bool = false
                        }
                    }
                    multiStepForm(Number(step))
                } else {
                    console.log("fill in")
                }
            }
        })


        form.addEventListener("change", getValues)

        function getValues(event) {
            console.log(event.target.value)

            for (var i = 0; i < form.elements.length; i++) {
                var e = form.elements[i]
                if (e.value != 'undefined') {

                    // set(e.name, JSON.stringify(e.value))
                    bool = true
                } else {
                    bool = false
                }
            }
            console.log(bool)
            return event.target.value
        }
    }
    multiStepForm(0)

    console.log(buttons)
}




// This function lets you go to the next step or prev step
function multiStepForm(currentIndex) {
    if (document.querySelectorAll("fieldset")) {

        // var currentIndex = 0;
        var fieldsets = document.querySelectorAll("fieldset");


        for (var i = 0; i < fieldsets.length; i++) {
            console.log("i " + i + "currentindex" + currentIndex)
            if (i == currentIndex) {
                //show the current index;
                console.log('ik kom hier')
                fieldsets[i].classList.remove("hidden")
            } else {
                //hide all the others
                fieldsets[i].classList.add("hidden")
            }
        }

        // fieldsets.forEach(function(fieldset, index){
        //     console.log(fieldset)
        //     console.log(index, currentIndex)
        //     if(index == currentIndex){
        //         fieldset.classList.remove("hidden")

        //     }else{
        //         fieldset.classList.add("hidden")
        //     }

        // })

    }
}

// var obj = {
//     name: "Tomas"
// }

// set('user', JSON.stringify(obj))

function get(key, value) {
    return localStorage.getItem(key, value)
}

function set(key, value) {
    return localStorage.setItem(key, value)
}