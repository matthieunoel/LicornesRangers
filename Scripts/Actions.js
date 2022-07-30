LastClick = Date.now();


function TextBoxContainerOnclick() {
    if (LastClick + 100 < Date.now()) {
        if (Dest != '') {
            // Si vous avez une "DisplayAndPrint.js:95 Uncaught TypeError: Cannot read property 'Text' of undefined", cela signifie probablement que la destination demandée n'existe pas.
            ShowPlan(StoryMap.get(Dest))
        } else {
            if (Dest == undefined) {
                console.error('Destination not defined when clicking "TextBoxContainer".')
            }
        }
        LastClick = Date.now()
    }
}

function ValidationButtonOnclick() {
    if (LastClick + 100 < Date.now()) {
        Dest = ''

        Quiz = document.getElementById('quiz')
        Labels = Quiz.getElementsByTagName('LABEL')

        for (let index = 0; index < Labels.length; index++) {
            Label = Labels[index];
            Radios = Label.getElementsByTagName('INPUT')
            if (Radios[0].checked) {
                Dest = Radios[0].value
            }
        }

        if (Dest != '') {
            ShowPlan(StoryMap.get(Dest))
        }
        LastClick = Date.now()
    }
}