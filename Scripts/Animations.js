function MoveLittleArrow() {

    x = 0;
    y = Math.sin(x);
    speed = 0.03;
    height = 5;

    function breath() {
        if (y >= 360) {
            y = 0;
        }
        x = x + speed;
        y = Math.sin(x);
        // $(".hover").css("bottom", (y * height + 150) + "px");
        TextBoxOk = document.getElementById('TextBoxOk')
        if (TextBoxOk.style.display != 'none') {
            TextBoxOk.style = 'Bottom: ' + String(y * height + 4) + 'px;'
            setTimeout(() => { breath() }, 20);
        }
    }

    // $(document).ready(function() {
    //     setInterval(breath(), 20);
    // });

    breath()

}

function FlashBang(opacity) {

    opacity = opacity - 0.0075;
    document.getElementById('LayerFore').style = 'Background: white; Opacity: ' + String(opacity) + ';';

    if (opacity > 0) {
        setTimeout(function() {
            FlashBang(opacity);
        }, 40);
    }

}

function Animate(IdAnimation) {
    if (IdAnimation == 'FlashBang') {
        new Audio('./Sounds/Explosion.mp3').play();
        new Audio('./Sounds/FlashBang.mp3').play();
        FlashBang(1.42)
    } else if (IdAnimation == 'BipBip') {
        new Audio('./Sounds/BipBip.mp3').play();
    }
}