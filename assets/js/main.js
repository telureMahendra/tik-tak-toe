function ani() {
    document.getElementById('win-out').className = 'zoomOut';
    location.reload(true);
}
function done1() {

    var ch = document.getElementById('win-out')
    console.log(ch)
    ch.style.display = "block"
    alert("You Won..!")

}
var no = 0
var data = document.querySelectorAll('.tg-0pky').forEach(item => {
    item.addEventListener('click', event => {
        mahi = event.target;
        no++;
        var div = 2
        var oe = no % div

        if (no < 10) {

            if (oe == 0) {
                mahi.style.background = "#ffff00"
                mahi.innerHTML = "o"
                mahi.innerHTML = `<img src="./img/o-name.png">`;
                winner()
            } else {
                mahi.style.background = "#b800e6"
                mahi.innerHTML = "x"
                mahi.innerHTML = `<img src="./img/x-name.png">`;
                winner()
            }

        } else {
            var ch1 = document.getElementById('win-out-e')
            ch1.style.display = "block"

            var ch = document.getElementById('win-out')
            console.log(ch)
            ch.style.display = "none"
        }
    })
})

function winner() {

    document.getElementById('test1234').className = 'zoomIn';

    var box1 = document.getElementById('id1')
    var box2 = document.getElementById('id2')
    var box3 = document.getElementById('id3')
    var box4 = document.getElementById('id4')
    var box5 = document.getElementById('id5')
    var box6 = document.getElementById('id6')
    var box7 = document.getElementById('id7')
    var box8 = document.getElementById('id8')
    var box9 = document.getElementById('id9')

    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML) {
        box1.style.background = "#00ff00"
        box2.style.background = "#00ff00"
        box3.style.background = "#00ff00"

        window.setTimeout(done1, 500)
    }
    else if (box4.innerHTML !== "" && box4.innerHTML == box5.innerHTML && box4.innerHTML == box6.innerHTML) {
        box4.style.background = "#00ff00"
        box5.style.background = "#00ff00"
        box6.style.background = "#00ff00"

        window.setTimeout(done1, 500)
        
    }
    else if (box7.innerHTML !== "" && box7.innerHTML == box8.innerHTML && box7.innerHTML == box9.innerHTML) {
        box7.style.background = "#00ff00"
        box8.style.background = "#00ff00"
        box9.style.background = "#00ff00"

        window.setTimeout(done1, 500)

    }

    else if (box1.innerHTML !== "" && box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML) {
        box1.style.background = "#00ff00"
        box4.style.background = "#00ff00"
        box7.style.background = "#00ff00"
        
        window.setTimeout(done1, 500)
    }
    else if (box2.innerHTML !== "" && box2.innerHTML == box5.innerHTML && box2.innerHTML == box8.innerHTML) {
        box2.style.background = "#00ff00"
        box5.style.background = "#00ff00"
        box8.style.background = "#00ff00"
        
        window.setTimeout(done1, 500)
    }
    else if (box3.innerHTML !== "" && box3.innerHTML == box6.innerHTML && box3.innerHTML == box9.innerHTML) {
        box3.style.background = "#00ff00"
        box6.style.background = "#00ff00"
        box9.style.background = "#00ff00"
       
        window.setTimeout(done1, 500)
    }
    else if (box1.innerHTML !== "" && box1.innerHTML == box5.innerHTML && box1.innerHTML == box9.innerHTML) {
        box1.style.background = "#00ff00"
        box5.style.background = "#00ff00"
        box9.style.background = "#00ff00"
        
        window.setTimeout(done1, 500)
    }
    else if (box3.innerHTML !== "" && box3.innerHTML == box5.innerHTML && box3.innerHTML == box7.innerHTML) {
        box3.style.background = "#00ff00"
        box5.style.background = "#00ff00"
        box7.style.background = "#00ff00"
        
        window.setTimeout(done1, 500)
    }
}
