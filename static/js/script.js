localStorage.clear()

if (document.querySelector('input[name="shirtText"]')) {
    console.log("shirtInput")
    var shirtInput = document.querySelector("input[name=shirtText]")

    var shirtText = document.querySelector("figcaption")
    var shirt = document.querySelector("img")


    // var g = document.createElement("g")
    // var svgText = document.createElement("text")
    // svgText
    //     .setAttribute("x", 0);
    // svgText
    //     .setAttribute("y", 50);

    //     svg.append(svgText)
    // g.append(svgText)
    // svg.append(g)





    if (document.querySelector('[name="font"')) {
        var fontSelect = document.querySelector('[name="font"');

        fontSelect.addEventListener("change", function (event) {
            console.log(this.value)

            console.log(event.target.tagName)
            // svgText.removeAttribute("class")
            // svgText.classList.add(this.value)

            shirtText.className = this.value

        })
    }

    if (document.querySelector('[name="shirtColor"')) {
        var shirtColorSelect = document.querySelector('[name="shirtColor"');

        shirtColorSelect.addEventListener("change", function (event) {


            var target = event.target
            if (target.tagName.toLowerCase() == "input") {
                // shirt.removeAttribute("class")
                console.log(target.value)
                shirt.src = "/img/" + target.value + ".jpg"
            }


        })
    }

    if (document.querySelector('[name="textColor"')) {
        var textColorSelect = document.querySelector('[name="textColor"');

        textColorSelect.addEventListener("change", function (event) {


            var target = event.target
            if (target.tagName.toLowerCase() == "input") {
                // shirt.removeAttribute("class")
                console.log(target.value)
                shirtText.style.color = target.value;
            }


        })
    }


    if (document.querySelector('[name="fontSize"')) {
        var textSize = document.querySelector('select[name="fontSize"');

        textSize.addEventListener("change", function (event) {

            var target = event.target
            // console.log(target)
            // if (target.tagName.toLowerCase() == "option") {
                // shirt.removeAttribute("class")
                console.log(target.value)
                shirtText.style.fontSize = this.value + "px";
            // }


        })
    }



    shirtInput.addEventListener("input", function (event) {

        shirtText.textContent = shirtInput.value

    })
}


function isPage(term) {
    return window.location.href.indexOf(term) > -1
}

// check if on save route
if (isPage("/save?") || isPage("/result?")) {
    // Detect if window has the method print
    if (window.print) {
        // If so, create button element.
        // This instead of insertAdjecentHTML so I can add eventlistener before appending it 
        // And don't have to retrieve it out of the DOM again

        var printbtn = document.createElement("button")
        var textNode = document.createTextNode("Print")

        printbtn.appendChild(textNode)

        // On click, print page
        printbtn.addEventListener("click", function (e) {
            window.print()
        })

        // Wide browser support, but win for me because I can easily compose where I want
        document.body.insertAdjacentElement('beforeend', printbtn)
    }
}


// Two steps

if (!isPage("/result?") && !isPage("/save?")) {
    var steps = document.querySelectorAll('[name^=field-]');


    var btnStep1 = document.querySelector('button[data-step="1"]')
    var btnStep2 = document.querySelector('button[data-step="2"]')


    var filled = false;
    btnStep1.disabled = true;

    var sizeField = document.querySelector('fieldset[name=size]');
    
    var isChecked = Array.from(sizeField.querySelectorAll("input")).some(function(input){
        return input.checked == true
    })

    if(isChecked){
        var filled = true;
        btnStep1.disabled = false;
    }

    console.log(isChecked)

    sizeField.addEventListener("change", function (event) {
        var target = event.target;

        if (target.tagName.toLowerCase() == "input") {
            // shirt.removeAttribute("class")
            console.log(target.value)
            btnStep1.disabled = false;
            filled = true;
        }
    })

    if (document.querySelector("form")) {
        multiStepForm(0)
        var form = document.querySelector("form")
        form.addEventListener("click", function (event) {

            var target = event.target;

            if (target.tagName.toLowerCase() == "button" && target.hasAttribute("formaction") && target.getAttribute("formaction") != "/save") {
                event.preventDefault()

                // if(filled){
                //     multiStepForm(target.dataset.step)
                // }

                multiStepForm(target.dataset.step)
            }
        })
    }

    console.log(steps)
}

// If native share is enabled
if (isPage("/result?")) {
    if (navigator.share) {

        // const btn = document.querySelector('button.share');
        // btn.classList.add("show")
        // btn.classList.remove("hidden")
        // const resultPara = document.querySelector('.result');


        var shareButton = document.createElement("button")
        var textNode = document.createTextNode("Share")

        shareButton.appendChild(textNode)

        // On click, print page
        shareButton("click", function (e) {
            const title = window.document.title;
            const url = window.document.location.href;

            const file = {
                title: title,
                url: url
            }

            navigator.share(file).then(() => {
                console.log('nice');
            })
        })

        // Wide browser support, but win for me because I can easily compose where I want
        document.body.insertAdjacentElement('beforeend', shareButton)

    } else {
        console.log("Not supported")
    }
}

// Font selector





function get(key, value) {
    return localStorage.getItem(key, value)
}

function set(key, value) {
    return localStorage.setItem(key, value)
}



// This function lets you go to the next step or prev step
function multiStepForm(currentIndex) {
    if (document.querySelectorAll('[name^=field-]')) {

        // var currentIndex = 0;
        var fieldsets = document.querySelectorAll('[name^=field-]');


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

    }
}


// Copy to clipboard, idea by Ramon 
if(document.querySelector('input[name="save-link"]')){
    console.log("fwefwefwef")
    var textCopy = document.querySelector('input[name="save-link"]');
    if(textCopy.select && textCopy.setSelectionRange){
        console.log("click")

        var saveBtn = document.querySelector('button[data-btn="save"]')


        saveBtn.addEventListener("click", function(event){
            console.log("click")
            textCopy.select();
            textCopy.setSelectionRange(0, 99999);
    
            document.execCommand("copy");
        })
      
    }  
}


