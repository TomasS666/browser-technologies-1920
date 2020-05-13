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

## Link to Wiki
[https://github.com/TomasS666/browser-technologies-1920/wiki](https://github.com/TomasS666/browser-technologies-1920/wiki)

## Link to demo

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


## Layers

### Functional 
#### Definition in this context
Functional means that the core, the essence of what you want to enable for users to reach their goal, works, everywhere. It doesn't have to be nice, fancy, it doesn't have to have flying elephants, shiny animations, paralax scrolling, etc. No, every design has a many purposes, but underneath their most of the times it comes down to one primary goal, consisting of more, but with one sole purpose. 

#### My proces
That purpose here is to be able to design your own shirt with text and color. What do you need to get there? 

I want the user to be able to at least change the color of the shirt, the color and size of the text on the shirt and maybe change the font. But how do I reflect these changes to the user in a manner that it works worldwide, even on the oldest phone? Javascript comes to mind when I want to reflect changes in a live preview kinda way. Of course you can use CSS hacks, SVG maybe up to some point, but I found out it's hard to scale up to the next layers if you fill your websites with CSS hack on top of another 3 CSS hacks. You keep patching and at some point it's your bottleneck. It starts to look like graceful degredation, but them from the bottom up to the modern browsers. Let me explain it like this, graceful degradation is the idealogy of giving a UX with great potential on the newest hardware and software (starting from there), and then making it work on less high-end devices, with maybe less of a great UX, but with a working core. The way I see it now within my project, from the start, is that I tried a lot of different experiments to be able to still deliver the same experience to everyone. But somewhere you have to draw the line. Because this caused me to start out with some sketchy CSS or even HTML tricks, which are fine on this layer, it works, but cause trouble when you climb up the tree to support better hardware and software. 

I started out with plain HTML which got served by a NodeJS Express server. I started out with an Express server because I wanted the load of operations involved by the core functionality, to be handled by the server wherever that seemed fitting. In other words, I can't control the thousands of devices and the software. So wherever I fix something on my server first, I have more control, until I serve it to the outside world.

So with plain HTML I tried to make a structure as semantic as possible. So I can use build in functionality / accesibility from browsers that support it. The hardest part was to search for a responsive yet accesible solution for the shirt. I started out with just testing possible solutions after checking the browser support table on MDN and Can I Use.

Then what often happpened was this: I checked in on multiple browsers support tables, I tested a feature on multiple browsers, I tested it sometimes on my phone during the proces and when things went well, I would go along with it. And then you build something else on top of it or next to it, without thinking it could affect the tested features, but then it actually did. Which was pretty hard. As I write later on in the reflection on these layers, is that you can't just add something, test it and then assume it will work perfect with something else that's really good supported. It's all connected, I knew that, but that was still something that really challenged me during this course.

The functional layer consists of a big form with all steps organised within fieldsets.
It also includes an image of the shirt which I should've removed if I think about it afterwards. Because in the end, assuming that the live preview on the shirt doesn't work everywhere with the use of Javascript and CSS and or SVG for instance, on the same page, why still show a shirt? Why not point out that they can see the shirt on the next page. With even more feature detects I think I could've determined wheter a user his or her hardware and software is within this condition or not. Although that might have become a little messy.

### Usable
#### Definition in this context
To enhance the core with a layer of usability. Give information at the right time, have a layout to organize that information better is what I understand when we talk about the usability in this context.
I got confused sometimes whether something is belongs more to the useable layer or the pleasurable layer. Because something pleasurable can be useful, and something useful can also be pleasurable. So yes, they go along and sometimes they're a little mixed up or complimenting each other. As for the functional layer, I get a more distinct feeling. It's something that has to work. It's more black and white. And everything build on top of that foundation is connected to each other and has more of a grayscale. There's more nuance.

#### My proces
I wanted to split up the form into multiple steps. To spread the user his or her cognitive load acros tasks rather than letting them remember a lot, let them think a lot. I just want to give them one primary step at a time. You can do that with progressive disclosure. Not showing everything at once, but dividing disclosing information in a progressive manner. Chopping up big tasks in smaller tasks. So it's easier for the user to consume. The problem at first was that the chunks I chopped, weren't chopped entirely correct. I kinda automatically chopped up the customization options up as well in steps. While those options have visible impact on each other. And when you have to go back and forward to fine tune them, you lower the user's ability to perform the task. In other words, it's very annoying. Later on I chopped it up in different way. You're start / overview page. Starting out with a size of the shirt, then the customization and afterwards an overview of the order, option to save and an option to print.

Also I made use of a grid. Not CSS grid, but a design grid. Not a complex grid either, but I did this to bring more visual hierarchy into the design. To group custom controls in the left column, each and every control within a fieldset with a border by default. This groups elements that belong to each other. As they should be grouped somehow to bring order into the design and to establish visual hierarchy. You might've noticed that the field to input the text on the shirt is out of that order. I wanted that element to be more important. But afterwards I noticed a little mistake of mine. The inconsistency of the locating that element somewhere else, isn't really an issue, because as I see it, it's out of place so it can draw attention. But I should've given it the same background color as the other options. Because I forgot that, it doesn't look like it belongs to the rest. I think that would've been an improvement.

### Pleasurable 
#### Definition in this context
The pleasurable layer consists of adding a little bit of user delight. Making things go a little smoother, make content and information a little more pleasant. Maybe add a little animation to make it more dynamic or smooth.

#### My proces
I got a little stuck here sometimes with other layers. Because adding stuff like animations and enhancing the multistep form bring along challenges.

Anyway, it all looked a bit boring. I wanted to the website a little more color, I didn't entirely succeed. I used a blue color as a primary active button for instance. But after running a lighthous audit, I found out it doesn't have enough contrast with the white background. As I later described as well, but again here: 


The Lighthouse audit with a fancy blue button: 
![audit contrast](images/usable%20layer/not-suff-contrast-btn.png)
![button with blue](images/usable%20layer/save-button-before.png)
The Lighthouse audit with a high black-white contrast:

![passed audit contrast](images/usable%20layer/Now-passes-audit.png)


Which in my vision, wasn't the case. But I can see everything, I can't assume others do too. So I worked more with a grayscale. So I used near black buttons with a white text, and disabled buttons had a black text and a grey background. 

When the button states change from disabled to enabled they change with a smooth little transition. It's a split of a second, but it's not so harsh for the eye. It's a little smoother. Also in the first step you can see how I added a little animation on the primary next step button. The animation makes the button bounce a little. The idea is that it moves the button out of place to get the attention of the user to commit that primary action. Sort of a call to action. That second animation doesn't work great anymore for the second step due to some form implications. But the idea was to apply that too over there. I could've differentiated the primary action more from the secondary elements. By color or by size.

Next time I would've done more with the multistep form. But then I need to form to be more reliable for those improvements. Because now it feels a bit hacky, but it works for the biggest part and that was the primary goal first. But as delight and to make it more dynamic, I see the next part of the form flying in and the other fading out, feedback of the steps being more alive, stuff like that. 


### Reflection and what I would've done next time
And if I've learned something, it's that progressive enhancements are not easy. They're not just an easy patch, hack, feature detection. Adding a JS snippet isn't an enhancement persé and is in most cases not sufficient. When you add functionality, you have to reorganise and revision your whole website. When you change something here, it changes something elsewhere. And sometimes it breaks something, and you can't always have it both ways. It's sometimes far from the ideal situation. I think if I would do this again, I would keep in mind that it's never the ideal situation, but if it's near ideal and you did what you can, it's better to move on and focus on further progress.



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
Chrome works like expected. I developed the most here in the first place, so it works here solid. Besides the bugs that I haven't figured out myself yet of course.

## Firefox
Firefox works pretty solid. No problems.
## IE11-9
### IE5
On IE5 it works, in theory. It doesn't show a live preview and on the end result the text is misplaced. I tried to write text on an image server sided. With the help of a package named JIMP. More about that over ![#]

### IE9
On IE9 the functionality works so far that it should enable the user to make the shirt Only the formaction doesn't seem to work. So when the user would click on the "Go to next step" it would actually submit the form already. That's not very nice. There was a fix, but clashes with something else I wrote.

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


### Meta description 
Lighthouse is pretty handy because it helps a lot with improving your website. And it points out pretty accurately where you should enhance. At some point my audit report noted my website is missing a meta description. You know, that thing beneath a search result in Google where you describe, for example, what your website does and or what content can be found. Handy anyway, but also good for SEO and screenreaders of course.


## Conclusion and last words
I thought it was a very intense course, although that gave me a big eye-opener and a very educational process. This course learned me all about accesability and inclusive design. Yes a made a multi-step form, great, wasn't very useful in the end and it gave me more trouble than without the use of the form. With every bug fix, there were 99 more bugs. 

I started out with plain HTML, but along the way of adding usebale CSS and enhancements in CSS and JS, the structure changed a lot overall. You don't only add CSS or JS on top of it. Your whole application needs to be restructured to move to that next step, which is pretty hard since a lot of functionallity that we're used to, is simply not avaible in a lot of browsers and devices. This took a lot of time and effort. Yes, then you get a better, more inclusive design, but it also requires a lot of time to test everything everywhere. I think it's mainly assumptions I made that were my bottleneck. For instance I figured out myself the use of ```const``` and ```let``` would break on a lot of browsers since it's ES6 syntax which still has bad support for some browsers. So I used ```var``` instead. But the problem went way deeper. Things like ```addEventListener``` don't work in older versions of IE. 

I also learned to think about wether you can do something server-side. I'm already a fan of doing so, but with this course I got more creativity of handling more simple things on the server. Things that would be overkill in client-side JS.

And last but not least, inclusive design is all about enabling everyone to use your website. Not only taking blind people, people with bad sight into account. No everyone can benefit from a more inclusive design. It goes way beyond that. The web is for everyone, it should look cooler if your hardware can take it, but it should work when hardware is a little less up to date.

## Credits / references
Ramon, for mental support and hitting me up with the copy to clipboard tip. He found that out, and I have my own ways of solving things, but this is a very nice sollution for my use case. But it's his idea, so shout out to him.

Menno for the great feedback and help in between!

For using different shirt color images:
https://www.wordans.nl/

## License
[MIT License Copyright (c) 2020 Tomas S](https://github.com/TomasS666/browser-technologies-1920/blob/master/LICENSE)

