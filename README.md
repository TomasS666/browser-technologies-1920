# Browser Technologies @cmda-minor-web 1920
![project banner](https://github.com/TomasS666/browser-technologies-1920/blob/master/images/BT-shirt-poster.png)


## Table of contents 
* [Link to demo](#link-to-demo)
  * [Questions for feedback (NL)](#user-content-questions-for-feedback-nl)
  * [Link naar Wiki](#link-naar-wiki)
  * [Link naar Dem](#link-naar-dem)
  * [Case / Concept](#case---concept)
    + [First wireflow V1](#first-wireflow-v1)
  * [How to install](#how-to-install)
  * [Core features](#core-features)
  * [Wishlist](#wishlist)
  * [Known bugs](#known-bugs)
  * [Process](#process)
    + [Feature detection](#feature-detection)
    + [Direct manipulation enhancement](#direct-manipulation-enhancement)
    + [LocalStorage as enhancement](#localstorage-as-enhancement)
    + [Multiform as enhancement](#multiform-as-enhancement)
      - [However challenges arose](#however-challenges-arose)
    + [SVG](#svg)
    + [Figure & Figcation do the job](#figure---figcation-do-the-job)
      - [Word-break: break-all](#word-break--break-all)
      - [Max width not working? Oh no, it's the main element](#max-width-not-working--oh-no--it-s-the-main-element)
  * [Browsers and devices](#browsers-and-devices)
    + [Tested browsers](#tested-browsers)
  * [Chrome](#chrome)
  * [Edge](#edge)
  * [Firefox](#firefox)
  * [IE11-9](#ie11-9)
    + [IE5](#ie5)
    + [IE9](#ie9)
    + [IE10](#ie10)
    + [IE11](#ie11)
    + [Features](#features)
  * [Iphone 5](#iphone-5)
  * [Huawei P20 Mate lite](#huawei-p20-mate-lite)
  * [Credits / references](#credits---references)
  * [License](#license)

## Link to demo
https://bt-tomas.herokuapp.com/

## Questions for feedback (NL)
1. Waarom zou je custom properties gebruiken als je voor IE en andere browsers alsnog een fallback eronder moet definiëren?
Ik vind custom properties geweldig, maar nu ben je alles 2 keer aan het doen terwijl de nieuwe browsers en devices de fallback ook ondersteunen.

Example:
```css 
background-color: var(--primary);
background-color: blue;
```
2. De echte functional laag voelt een beetje leeg. Daarmee bedoel ik dat ik het idee heb dat ik niet erg veel kan live previewen op het t-shirt zonder enhancements. Misschien komt dat omdat wij meer vanuit graceful degradation dachten en het nu eens andersom moeten benaderen. **Maar concreet, ik heb een textarea gepositioneert over een shirt plaatje, maar dit wordt 1: niet het eindresultaat zoals je dan zou verwachten en 2: het voelt niet helemaal lekker, is het dan oké om als designer / developer te zeggen: "Ik maak de keuze om de preview dan weg te laten en laat alleen het eindresultaat zien?"**

3. Ik heb nu delen in mijn Readme en delen in mijn Wiki staan. Ik wil eigenlijk het meer algemene plaatje van mijn eindproduct in mijn readme zetten en het diepere onderzoek op features, de verschillende lagen etc. in mijn wiki documenteren. **Is dat oké of hoe zien jullie dit graag?**

## Link naar Wiki
[https://github.com/TomasS666/browser-technologies-1920/wiki](https://github.com/TomasS666/browser-technologies-1920/wiki)

## Link naar Dem

## Case / Concept
**_The power of the Web is in its universality. Acces by everyone ~regardless of disability~ is an essential aspect._**
**_- Tim Berners-Lee_**

### First wireflow V1
![wireflow](https://github.com/TomasS666/browser-technologies-1920/blob/master/images/wireflow-part1.jpg)

## How to install
To install this project, you only have to clone this repository by entering the following command in your terminal:

```git clone https://github.com/TomasS666/browser-technologies-1920.git```

or this command if you want to clone the repo into your current folder:

```git clone https://github.com/TomasS666/browser-technologies-1920.git ./```

or you can download the zip file or something similar by clicking on the green button on the top-right position of every repo.

## Core features
* Design shirt with text
* Pick a shirt color
* Pick a shirt size
* Choose a websafe font
* Save custom shirt for later

## Wishlist
* Saving the data of a user in a better way (though I should focus more on the frontend, no priority)
* Direct text manipulation on the shirt as a delight and addition to the pleasurable layer
* Live preview of shirt color, text ^, font
* Print button for convenience ( **gonna add that with feature detection of the JS window.print() method ** )

## Known bugs
* ~Missing navigation~
* ~Textarea as overlay on shirt is creative, but probably a bad practice since it's kinda hacky positioned.
Gonna remove that.~
* When JS is enabled and you want to go on in the first step without selecting anything, the verification warning isn't showing because the button has a different formaction. When you do fill in something the button gets enabled with a jumpy animation and a different color. Another problem is that color-blind people who suffer from Monochromacy / Achromatopsia, who see no color at all but only light intensity don't have the same experience. Can fix that by adding the buttons when you filled in the form, so the user can focus on the form itself first. But it's debatable if that's a better UX since it's less discoverable. But I haven't fixed that yet.

## Process 

### Feature detection

### Direct manipulation enhancement
I liked the idea of implementing an shirt as SVG to wrap the input of the user directly on the svg. Especially because SVG has a better browser support than I initially thought. But it's harder than I thought. Because it's pretty challenging to break text lines in SVG without a lot of additional logic. So at some point the cost of SVG was higher if we're talking about accesability. Later in this readme a bit more indept about challenges I encountered with SVG.

### LocalStorage as enhancement
I wanted to implement localstorage. And I did, until I figured my whole UI wasn't right. And my code was not generic enough to reuse it easily in my new form setup. It's a shame because I really wanted to use it as an enhancement, but it time was ticking and I had a lot of improvements to fix elsewhere.

### Multiform as enhancement
Splitted the form up in steps with each step in it's own fieldset. I wrote my own script which preventDefaults the button actions when certain features are enabled in the browser. This way I prevent the formaction from submitting, so I can go through the form step by step and save the data in the localStorage. At this point, as pointed out above, localStorage is non-functioning. I refactored my code and localStorage doesn't fit in the time I have left. It works without though.

### Share button as enhancement
Mainly on mobile devices there's a thing called ```javascript navigator .share()``` which gets supported on newer devices. It enabled the user to share content / a page, by their mobile native share functionallity. What's nice here is that the native share functionality UI is user centric. The mediums to share on are based on the users preferences or recently used applications. 

This is the current support, but don't get scared. It's a mobile thing anyway and an enhancement.

![b support navigator.share](images/usable%20layer/navigator-share-support-so-feature-detect.png)

But this one really needs feature detection, otherwise you end up by appending a button to the DOM of a device which doesn't support this functionality at all.


### Print button
As enhancement I wanted to make it the user easier to print instead of going to "File > print". That's why I feature detected the window.print method. If it is enabled, I create element and text nodes (the button), add an eventListener to it which on clicks triggers the print method on the window. But then I had to append it to the DOM. And where I initially thought insertAdjacentElement and insertAdjacentHTML were newer to the game, it didn't mean it had bad support. No, instead appending it by using "append()" had several browser issues. For instance I got errors in IE because it couldn't understand ```.append()```. That's nice, because with insertAdjacentHTML and insertAdjacentElement you have more direct out of the box control of where you want to place the node depending on the node you're targeting. Also nice because now I could add an eventlistener before appending it. Instead of retrieving it out of the DOM and then applying it.
```
  if (window.print) {
        // If so, create button element.
        // This instead of insertAdjecentHTML so I can add eventlistener before appending it 
        // And don't have to retrieve it out of the DOM again

        var printbtn = document.createElement("button")
        var textNode = document.createTextNode("Print")

        printbtn.appendChild(textNode)
        printbtn.className = "active"

        // On click, print page
        printbtn.addEventListener("click", function (e) {
            window.print()
        })

        // Wide browser support, but win for me because I can easily compose where I want
        document.body.insertAdjacentElement('beforeend', printbtn)

```

#### However challenges arose
A big design decision early on, was the bottleneck in my written code later on. I used to fieldsets to seperate the steps with their fields accordingly. To go through it step by step. Out of an HCI principle. But I overly distributed the steps, when I found out it isn't handy at all. Because why choose a font for your shirt later on or before you see the shirt? That's quite stupid. 

But because I created the Javascript enhancement solidly on that use case, I had to start over again. Sometimes it's better to let go and start over with your functionality instead of trying to fix something that's already broken.

In my improvement I will still use the multiform, but into 2 simple steps, picking a size and then customizing the shirt. That's the main 2 steps. Then I split up steps in the second main step while the user is able to see the shirt itself.

### SVG
SVG is pretty well supported, yet a feature of SVG to embed regular HTML elements or other XML based markup isn't supported in IE. The so called ```ForeignObject```. Which is a shame. I wanted to use it as an enhancement, but it's hard to create a fallback for that.

My SVG first looked like this: 

```

   <svg viewBox="0 0 271 276">
                        <title>t-shirt</title>
                        <g>
                            <path
                                d="M227.5,116.5l44-28-38-47c-16.49-14.89-21-23-34-25-14-1-16-1-29.33-5.32-2.22,1.64-15.59,3-34.67,3.83-19.08-.79-32.45-2.19-34.67-3.83C87.5,15.5,85.5,15.5,71.5,16.5c-13,2-17.51,10.11-34,25l-38,47,44,28,18-17-1,74.5H60v86.91A9.09,9.09,0,0,0,69.09,270H201.91a9.09,9.09,0,0,0,9.09-9.09V174h-.51l-1-74.5Z"
                                stroke="#000" stroke-miterlimit="10" stroke-width="0.98" />
                            <foreignObject x="75" y="60" width="120" height="160">
                                <p><%= query.shirtText == "" ? "" : query.shirtText %></p>
                            </foreignObject>
                        </g>
                        <image src="/img/shirt.jpg" alt="t-shirt">
                    </svg>
 ```
 
 Yes, it can take the image fallback. But only if it doesn't support the SVG. It doesn't check if the foreignObject is enabled.
 Therefore I went back to an image, a figcation as overlaw and serveral image sources to switch between colors.
 
### Figure & Figcation do the job

#### Word-break: break-all 
I had an issue with text on the shirt. What if the user would type a very long word? It would have been displayed outside the shirt. That's not cool. Fortunately I found out that CSS could fix this. So I applied ```word-break: break-all```. This breaks the text and pushes it to the next line when it's reaching the border of the container.

#### Max width not working? Oh no, it's the main element
The main element is not supported everywhere or has partial support. That's why the max-width rule didn't apply on the main element in IE 11. It's not seen as a block element.
I fixed it with the solution found below. I apply a display: block to the main element so it does take applied max-width rule.
https://stackoverflow.com/questions/28794718/max-width-not-working-for-ie-11

## Browsers and devices

### Tested browsers
## Chrome

## Edge

## Firefox

## IE11-9

### IE5
On IE5 it works, in theory. It doesn't show a live preview and on the end result the text is misplaced. I tried to write text on an image server sided. With the help of a package named JIMP. More about that over ![#]

### IE9
On IE9 the functionality works so far that it should enable the user to make the shirt, although the live preview doesn't work due to .addEventListener

### IE10 
In IE10 the dataset didn't work. When you apply data- attributes on your markup, for instance: (data-step=0), you can acces them by the following notation: ```Node.dataset.step```. This broke in IE10 though, so I'm getting the attribute the oldschool way by retrieving the value by getAttribute("data-step").

### IE11
In IE11 the ```Array.from()``` doesn't work on a nodelist. This is very unfortunate because it doesn't give a active state to the button when you select a thing in the form. Now I fixed it with feature detection. But it's bad for the UX because right now the user might miss the first step and when they're further in the progress the feedback of that one step not filled in is shown. I considered many options, but this is my quick fix for now. Disabling it anyway doesn't really seem to work. I searched for workarounds but I really have a deeper underlaying problem here. So, yes it works, besides that part.

### Safari
On Safari it broke some flexbox things. For instance the figure I'm using. The figure holds the shirt image and the figcaption with the text of the shirt. It should align over the shirt, but the user-agent style of a figcaption is ```display: block``` which spans over the entire width, like so:

![layout breaking](images/usable%20layer/without-flex-so-inline-block.png)


That's why I changed ```display: block``` to ```display: inline-block;``` because it's supported more widely than flex box. And it wasn't a complex layout either, so this was the way to go. And now it looked like this:

![layout good](images/usable%20layer/inline-block.png)

#### Navigating
Also tabbing through content was an issue. But I found out it is a Safari and Firefox thing. The user needs to enable navigating with tab in the browser settings. Then it works.



## Devices
## Iphone 5
On an older iPhone, it works like expected. Layout is a bit broken and some CSS is not applied. It's a very old version of Safari. But it works though. Only the preview of the shirt doesn't really work. But once you go to the end result it shows up again. Yes, could be better, but the user is still able to go through the steps.

## Huawei P20 Mate lite
Om my Huawei it works like a charm. Nothing is really going on besides some alignment which I had to fix anyway, but did not due time.


## Can you control the site with keyboard-only?
Yes you can. But with enhancements in place, it was a little challenge to fix some bugs. If you tab through a form, it goes over the fieldsets and then the user can use the arrows to navigate within the fieldset. But what if I hide the inputs and style the labels to be the colors? Which is a hack a lot of people do. But what happens with the form then? Actual application of ```css display: none;``` doesn't work. That was my first try. Because the input isn't there. So I tried ```css visibility: hidden``` but that didn't have the desired result either. In the end Ramon told me I could give the input a width of zero. This works like a charm. I implemented it that way and applied styling on the label of the checkbox is focussed. I also added style to the surrounding fieldset with focus-within. That's supported everywhere though. So it can be seen as an enhancement.


```css
fieldset fieldset:focus-within{
    border: orange solid 4px;
    border: orange solid .25rem;
}

input[type="radio"]:checked + label,
input[type="radio"]:focus + label{
    border: orange solid 4px;
    border: orange solid .25rem;
}
```


## Without Javascript?
Without Javascript the whole form is visible. So everything works. What I could have done nicer is actually appending the button "go to next step". Because now it's in the DOM anyway. The result is that only on the last submit it checks on the client if the fields are valid. But it's okay because the formaction of the button goes to the next fieldset when JS is disabled.

![without js](images/usable%20layer/usable-layer-without-javascript.png)

## Colors / contrast
Yes, I could have gone wilder with colors. Unfortunately my audit reports that my contrast ratio is not good enough. I could have added a "higher contrast" button to switch. I'd do that in a future version. For now I used a lot of high contrast and not too many great colors.

The Lighthouse audit with a fancy blue button: 
![audit contrast](images/usable%20layer/not-suff-contrast-btn.png)
![button with blue](images/usable%20layer/save-button-before.png)
The Lighthouse audit with a high black-white contrast:

![passed audit contrast](images/usable%20layer/Now-passes-audit.png)


## Audit scores 


### Meta description 
Lighthouse is pretty handy because it helps a lot with improving your website. And it points out pretty accurately where you should enhance. At some point my audit report noted my website is missing a meta description. You know, that thing beneath a search result in Google where you describe, for example, what your website does and or what content can be found. Handy anyway, but also good for SEO and screenreaders of course.

## Credits / references
Ramon, for mental support and hitting me up with the copy to clipboard tip. He found that out, and I have my own ways of solving things, but this is a very nice sollution for my use case. But it's his idea, so shout out to him.

Menno for the great feedback and help in between!

For using different shirt color images:
https://www.wordans.nl/

## License
[MIT License Copyright (c) 2020 Tomas S](https://github.com/TomasS666/browser-technologies-1920/blob/master/LICENSE)

