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

function CleanLayers() {
    Layers = document.getElementsByClassName('Layer');
    for (let index = 0; index < Layers.length; index++) {
        if (Layers[index].id != 'LayerText') {
            Layers[index].innerHTML = ''
        }
    }
}

function CleanQuiz() {
    document.getElementById('quiz').innerHTML = ''
}

function PrintText(Text) {
    document.getElementById('Text').innerHTML = Text;
}

function PrintPictureInLayer(Layer, PictPath) {

    Img = document.createElement('img');
    Img.src = PictPath;

    // Si la photo n'est pas nulle
    if (Img.height == 0) {
        console.warn('Picture is null for ', { Layer: Layer, PictPath: PictPath, Img });
    }
    document.getElementById(Layer).appendChild(Img);

}

function ShowHideValidationButton(Show) {
    if (Show) {
        document.getElementById('ValidationButton').style.display = '';
    } else {
        document.getElementById('ValidationButton').style.display = 'none';
    }
}

function PrintQuestions(Questions) {
    if (Questions.A != '') {
        Label = document.createElement('label')
        Label.innerHTML = '<input type="radio" name="checkBox" value="' + Questions.A.Dest + '"/>' + Questions.A.Text
        document.getElementById('quiz').appendChild(Label)
    }
    if (Questions.B != '') {
        Label = document.createElement('label')
        Label.innerHTML = '<input type="radio" name="checkBox" value="' + Questions.B.Dest + '"/>' + Questions.B.Text
        document.getElementById('quiz').appendChild(Label)
    }
    if (Questions.C != '') {
        Label = document.createElement('label')
        Label.innerHTML = '<input type="radio" name="checkBox" value="' + Questions.C.Dest + '"/>' + Questions.C.Text
        document.getElementById('quiz').appendChild(Label)
    }
    if (Questions.D != '') {
        Label = document.createElement('label')
        Label.innerHTML = '<input type="radio" name="checkBox" value="' + Questions.D.Dest + '"/>' + Questions.D.Text
        document.getElementById('quiz').appendChild(Label)
    }
}

function HideArrow() {
    console.log('END')
    document.getElementById('TextBoxOk').style.display = 'none';
}

function ShowPlan(Plan) {

    CleanQuiz()
    PrintText(Plan.Text)

    CleanLayers()
    if (Plan.ImgBack != '') {
        PrintPictureInLayer('LayerBack', Plan.ImgBack)
    }
    if (Plan.ImgP1 != '') {
        PrintPictureInLayer('LayerP1', Plan.ImgP1)
    }
    if (Plan.ImgP2 != '') {
        PrintPictureInLayer('LayerP2', Plan.ImgP2)
    }
    if (Plan.ImgJerryFace != '') {
        PrintPictureInLayer('LayerJerryFace', Plan.ImgJerryFace)
    }
    if (Plan.ImgFore != '') {
        PrintPictureInLayer('LayerFore', Plan.ImgFore)
    }

    if (Plan.Questions == '') {
        Dest = Plan.Dest
        ShowHideValidationButton(false)
            // S'il n'y a ni question, ni destination, alors c'est la fin.
        if (Dest == '') {
            HideArrow()
        }
    } else {
        ShowHideValidationButton(true)
        PrintQuestions(Plan.Questions)
        Dest = ''
    }

    if (Plan.Animation != '') {
        Animate(Plan.Animation)
    }

}