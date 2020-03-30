# Browser Technologies @cmda-minor-web 1920
![project banner](https://github.com/TomasS666/browser-technologies-1920/blob/master/images/BT-shirt-poster.png)

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
* Missing navigation
* Textarea as overlay on shirt is creative, but probably a bad practice since it's kinda hacky positioned.
Gonna remove that.

## Process 

### Feature detection

### Direct manipulation enhancement
I liked the idea of implementing an shirt as SVG to wrap the input of the user directly on the svg. Especially because SVG has a better browser support than I initially thought. But it's harder than I thought. Because it's pretty challenging to 

### LocalStorage as enhancement

### Multiform as enhancement
Splitted the form up in steps with each step in it's own fieldset. I wrote my own script which preventDefaults the button actions when certain features are enabled in the browser. This way I prevent the formaction from submitting, so I can go through the form step by step and save the data in the localStorage.

#### However challenges arose
A big design decision early on, was the bottleneck in my written code later on. I used to fieldsets to seperate the steps with their fields accordingly. To go through it step by step. Out of an HCI principle. But I overly distributed the steps, when I found out it isn't handy at all. Because why choose a font for your shirt later on or before you see the shirt? That's quite stupid. 

But because I created the Javascript enhancement solidly on that use case, I had to start over again. Sometimes it's better to let go and start over with your functionality instead of trying to fix something that's already broken.

In my improvement I will still use the multiform, but into 2 simple steps, picking a size and then customizing the shirt. That's the main 2 steps. Then I split up steps in the second main step while the user is able to see the shirt itself.

## License

[MIT License Copyright (c) 2020 Tomas S](https://github.com/TomasS666/browser-technologies-1920/blob/master/LICENSE)

