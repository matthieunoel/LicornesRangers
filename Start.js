// PrintPictureInLayer('LayerBack', './Images/HQ4.jpg')
// CleanLayers()
// ShowHideValidationButton(false)
// PrintPictureInLayer('LayerBack', './Images/SalleBain-Broken.gif')

// Story is set when calling Story.js in index.HTML
// StoryJson = Story

// StoryJson = JSON.parse(readTextFile(window.location.origin + '/Data/Story.json'))
StoryJson = JSON.parse(readTextFile('./Data/Story.json'))


// -- DATA MODEL --

// Key: "QGA-A3",,
// Animation: "Flash",
// Text: "Question ?",
// ImgBack: "./Images/HQ4.jpg",
// ImgP1: "./Images/Jerry-Common.png",
// ImgP2: "Images/Licornes-Rangers-Meh.png",
// ImgJerryFace: "",
// ImgFore: "",
// Dest: "",
// Question: {
//     A: {
//         Text: "La réponse A",
//         Dest: "QGA-AA1",
//     },
//     B: {
//         Text: "La réponse B",
//         Dest: "QGA-AB1",
//     },
// }

// -- DATA MODEL END --


// console.log('StoryJson :', StoryJson)

Dest = ''

StoryMap = new Map()
for (let index = 1; index < StoryJson.length; index++) {
    if (StoryMap.get(StoryJson[index].Key) != undefined && StoryMap.get(StoryJson[index].Key) != '') {
        console.warn('Key ' + StoryJson[index].Key + ' has been overwritten.')
    }
    StoryMap.set(StoryJson[index].Key, StoryJson[index])
}

StartPreLoadIn2Sec()

// L'index 0 est la Key de départ.
ShowPlan(StoryMap.get(StoryJson[0]))
MoveLittleArrow()
    // console.log('StoryJson[0] :', StoryJson[0])
    // console.log(StoryMap.get(StoryJson[0]))

// console.log('StoryMap :', StoryMap)