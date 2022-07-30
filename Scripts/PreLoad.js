function StartPreLoadIn2Sec() {

    setTimeout(function() {
        console.log('Starting Preload ...')

        // PictList = JSON.parse(readTextFile(window.location.origin + '/Data/PictList.json'))
        PictList = JSON.parse(readTextFile('./Data/PictList.json'))

        for (let index = 0; index < PictList.length; index++) {
            new Image().src = PictList[index]
        }
    }, 2000);
}