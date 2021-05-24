let hallway;

let roomBlackList = [];
let lastRoom = -1;
let historyEntry = 0;
let textSpeed = 1000;
let charactersTyped = 0;
let textContent = "";
const eventTypes = [
    // selected event type wil try to fin a matching min 
    // example random number = 0.7
    // if the min where the random number only 0.6 and 0 would be smaller then it
    // but we also need a max thats bigger then it to satisfy its condition 
    // we will now search for a max thats bigger then the example number 
    // the only one is max infiniy but this could be multiple maxes 
    // but its an && statement which means both conditions need to be met 
    // so only index 2 meets this 
    { min: 0, max: 0.6 }, //battle (60%)
    { min: 0.6, max: Infinity } // event (40%)
]

const eventTrees = [
    { min: 0, max: 0.2 }, //shape shifter room (20%)
    { min: 0.2, max: 0.4 }, //eyeball room (20%)
    { min: 0.4, max: 0.6 }, //swamp room (20%)
    { min: 0.6, max: 0.8 }, //puzzle room (20%)
    { min: 0.8, max: 1 } //trap room(20%)
]

class HallwayManager {
    drawEvent() {
        let eventType = Math.random(); // random number between 0 and 1 reprensenting 0 - 100% range
        const selectedEventType = eventTypes.findIndex(type => type.min <= eventType && type.max > eventType); // go trough event types array and find matching min and max 
        console.log(selectedEventType);
        switch (selectedEventType) {
            case 0:
                console.log('dit is een battle');
                break;

            case 1:
                console.log('dit is een event');
                let eventTree = Math.random(); // random number between 0 and 1 reprensenting 0 - 100% range
                let selectedEventTree = eventTrees.findIndex(tree => tree.min <= eventTree && tree.max > eventTree); // go trough event trees array and find matching min and max

                while (selectedEventTree === lastRoom) {
                    // makes sure that the new room is a unique one otherwise it redraws the index
                    eventTree = Math.random(); // random number between 0 and 1 reprensenting 0 - 100% range
                    selectedEventTree = eventTrees.findIndex(tree => tree.min <= eventTree && tree.max > eventTree); // go trough event trees array and find matching min and max
                }

                this.eventTree(selectedEventTree);
                lastRoom = selectedEventTree;
                break;
        }
    }

     eventTree(SelectedEvent) {
        switch (SelectedEvent) {
            case 0:
                textContent = "shapshifter room";
                 this.appendParagraph(textContent);
                textContent = "You walked into a room and you see a trap infront of you";
                 this.appendParagraph(textContent);
                break;
            case 1:
                textContent = "eyeball room";
                 this.appendParagraph(textContent);
                textContent = "You walked into a room and you see a trap infront of you";
                 this.appendParagraph(textContent);
                console.log('eyeball room');
                break;

            case 2:
                textContent = "swamp room lorem ipsum lorem ipsum penis lmao xd among us";
                 this.appendParagraph(textContent);
                textContent = "You walked into a room and you see a trap infront of you";
                 this.appendParagraph(textContent);
                console.log('swamp room');
                break;

            case 3:
                textContent = "puzzle room";
                 this.appendParagraph(textContent);
                textContent = "You walked into a room and you see a trap infront of you";
                 this.appendParagraph(textContent);
                console.log('puzzle room');
                break;
            case 4:
                textContent = "trap room";
                 this.appendParagraph(textContent);
                textContent = "You walked into a room and you see a trap infront of you";
                 this.appendParagraph(textContent);
                console.log('trap room');
                break;

        }
    }

     appendParagraph(typeText) {
        // create paragraph in history
        let paragraph = document.createElement("p");
        historyText.append(paragraph);
        // in that paragraph we add text
        let typeWriter = new Typewriter(paragraph, {
            loop: false,
            delay: 50,
            cursor: '',

        })
        typeWriter.typeString(typeText).start();
        // this.addText(paragraph,typeText);
    }

    // async addText(element, text) {
    //     //slowly add the text to the element
    //     if (charactersTyped < text.length) {
    //         element.innerHTML += text.charAt(charactersTyped);
    //         charactersTyped++;
    //         setTimeout(function () {
    //             hallway.addText(element, text);
    //         }, 75)
    //     } else {
    //         charactersTyped = 0;
    //     }
    // }
}