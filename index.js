// global var
var amount41;
var amount42;
var amount43;
var amount44;
var amount51;
var amount52;
var amount53;
var amount54;
var amount55;

// selection buttons
const four = $('#four');
const five = $('#five');

$("#four-btn").click(() => {
    if (five.css('visibility') == 'visible') {
        five.css('visibility', 'hidden')
        four.css('visibility', 'visible')
    }
    else {
        four.css('visibility', 'visible')
    }
})

$("#five-btn").click(() => {
    four.css('visibility', 'hidden')
    five.css('visibility', 'visible')
})

function R4_1(event) {
    let get_check1 = $("#check1");
    switch (event) {
        case "brown":
            get_check1.css('backgroundColor', "brown");
            amount41 = 1;
            break;
        case "red":
            get_check1.css('backgroundColor', "red");
            amount41 = 2;
            break;
        case "orange":
            get_check1.css('backgroundColor', "orange");
            amount41 = 3;
            break;
        case "yellow":
            get_check1.css('backgroundColor', "yellow");
            amount41 = 4;
            break;
        case "green":
            get_check1.css('backgroundColor', "green");
            amount41 = 5
            break;
        case "blue":
            get_check1.css('backgroundColor', "blue");
            amount41 = 6
            break;
        case "purple":
            get_check1.css('backgroundColor', "purple");
            amount41 = 7
            break;
        case "gry":
            get_check1.css('backgroundColor', "gray");
            amount41 = 8
            break;
        case "white":
            get_check1.css('backgroundColor', "whitesmoke");
            amount41 = 9
            break;
        default:
            break;
    }
}

function R4_2(event) {
    let get_check2 = $("#check2");
    switch (event) {
        case "black":
            get_check2.css('backgroundColor', "black");
            amount42 = 0
            break;
        case "brown":
            get_check2.css('backgroundColor', "brown");
            amount42 = 1
            break;
        case "red":
            get_check2.css('backgroundColor', "red");
            amount42 = 2
            break;
        case "orange":
            get_check2.css('backgroundColor', "orange");
            amount42 = 3
            break;
        case "yellow":
            get_check2.css('backgroundColor', "yellow");
            amount42 = 4
            break;
        case "green":
            get_check2.css('backgroundColor', "green");
            amount42 = 5
            break;
        case "blue":
            get_check2.css('backgroundColor', "blue");
            amount42 = 6
            break;
        case "purple":
            get_check2.css('backgroundColor', "purple");
            amount42 = 7
            break;
        case "gry":
            get_check2.css('backgroundColor', "gray");
            amount42 = 8
            break;
        case "white":
            get_check2.css('backgroundColor', "whitesmoke");
            amount42 = 9
            break;
        default:
            break;
    }
}

function R4_3(event) {
    let get_check3 = $("#check3");
    switch (event) {
        case "black":
            get_check3.css('backgroundColor', "black");
            amount43 = 0
            break;
        case "brown":
            get_check3.css('backgroundColor', "brown");
            amount43 = 1
            break;
        case "red":
            get_check3.css('backgroundColor', "red");
            amount43 = 2
            break;
        case "orange":
            get_check3.css('backgroundColor', "orange");
            amount43 = 3
            break;
        case "yellow":
            get_check3.css('backgroundColor', "yellow");
            amount43 = 4
            break;
        case "green":
            get_check3.css('backgroundColor', "green");
            amount43 = 5
            break;
        case "blue":
            get_check3.css('backgroundColor', "blue");
            amount43 = 6
            break;
        case "purple":
            get_check3.css('backgroundColor', "purple");
            amount43 = 7
            break;
        case "gry":
            get_check3.css('backgroundColor', "gray");
            amount43 = 8
            break;
        case "white":
            get_check3.css('backgroundColor', "whitesmoke");
            amount43 = 9
            break;
        case "gold":
            get_check3.css('backgroundColor', "gold");
            amount43 = 0.1
            break;
        case "silver":
            get_check3.css('backgroundColor', "silver");
            amount43 = 0.01
            break;
        default:
            break;
    }
}

function R4_4(event) {
    let get_check4 = $("#check4");
    switch (event) {
        case "brown":
            get_check4.css('backgroundColor', "brown");
            amount44 = 1
            break;
        case "red":
            get_check4.css('backgroundColor', "red");
            amount44 = 2
            break;
        case "green":
            get_check4.css('backgroundColor', "green");
            amount44 = 0.5
            break;
        case "blue":
            get_check4.css('backgroundColor', "blue");
            amount44 = 0.25
            break;
        case "purple":
            get_check4.css('backgroundColor', "purple");
            amount44 = 0.1
            break;
        case "gry":
            get_check4.css('backgroundColor', "gray");
            amount44 = 0.05
            break;
        case "gold":
            get_check4.css('backgroundColor', "gold");
            amount44 = 5
            break;
        case "silver":
            get_check4.css('backgroundColor', "silver");
            amount44 = 10
            break;
        case "none":
            get_check4.css('backgroundColor', "white");
            amount44 = 20;
            break;
        default:
            break;
    }
}

$("#cal").click(() => {
    if (!amount41 || !amount42 || !amount43 || !amount44) {
        swal({
            text: 'لطفا تمام رنگ ها را انتخاب کنید',
            icon: "error",
            button: "باشه",
        })
    }
    else {
        p1 = amount41.toString() + amount42.toString()
        if (amount43 == 0.1 || amount43 == 0.01) {
            p2 = parseInt(p1) * amount43;
        }
        else {
            p2 = parseInt(p1) * Math.pow(10, amount43);
        }
        if (!amount44) {
            result = p2.toString() + ' اهم'
            swal({
                title: "مقدار اهمی مقاومت برابر است با ",
                text: result,
                icon: "success",
                button: "باشه",
            }).then(() => {
                window.location.reload()
            })
        }
        else {
            result = amount44 + '%' + ' -+ ' + p2.toString() + ' اهم'
            swal({
                title: "مقدار اهمی مقاومت برابر است با ",
                text: result,
                icon: "success",
                button: "باشه",
            }).then(() => {
                window.location.reload()
            })
        }
    }
})

// five functions
function R5_1(event) {
    let get_check5_1 = $("#check5_1");
    switch (event) {
        case "brown":
            get_check5_1.css('backgroundColor', "brown");
            amount51 = 1;
            break;
        case "red":
            get_check5_1.css('backgroundColor', "red");
            amount51 = 2;
            break;
        case "orange":
            get_check5_1.css('backgroundColor', "orange");
            amount51 = 3;
            break;
        case "yellow":
            get_check5_1.css('backgroundColor', "yellow");
            amount51 = 4;
            break;
        case "green":
            get_check5_1.css('backgroundColor', "green");
            amount51 = 5
            break;
        case "blue":
            get_check5_1.css('backgroundColor', "blue");
            amount51 = 6
            break;
        case "purple":
            get_check5_1.css('backgroundColor', "purple");
            amount51 = 7
            break;
        case "gry":
            get_check5_1.css('backgroundColor', "gray");
            amount51 = 8
            break;
        case "white":
            get_check5_1.css('backgroundColor', "whitesmoke");
            amount51 = 9
            break;
        default:
            break;
    }
}

function R5_2(event) {
    let get_check5_2 = $("#check5_2");
    switch (event) {
        case "black":
            get_check5_2.css('backgroundColor', "black");
            amount52 = 0
            break;
        case "brown":
            get_check5_2.css('backgroundColor', "brown");
            amount52 = 1
            break;
        case "red":
            get_check5_2.css('backgroundColor', "red");
            amount52 = 2
            break;
        case "orange":
            get_check5_2.css('backgroundColor', "orange");
            amount52 = 3
            break;
        case "yellow":
            get_check5_2.css('backgroundColor', "yellow");
            amount52 = 4
            break;
        case "green":
            get_check5_2.css('backgroundColor', "green");
            amount52 = 5
            break;
        case "blue":
            get_check5_2.css('backgroundColor', "blue");
            amount52 = 6
            break;
        case "purple":
            get_check5_2.css('backgroundColor', "purple");
            amount52 = 7
            break;
        case "gry":
            get_check5_2.css('backgroundColor', "gray");
            amount52 = 8
            break;
        case "white":
            get_check5_2.css('backgroundColor', "whitesmoke");
            amount52 = 9
            break;
        default:
            break;
    }
}

function R5_3(event) {
    let get_check5_3 = $("#check5_3");
    switch (event) {
        case "black":
            get_check5_3.css('backgroundColor', "black");
            amount53 = 0
            break;
        case "brown":
            get_check5_3.css('backgroundColor', "brown");
            amount53 = 1
            break;
        case "red":
            get_check5_3.css('backgroundColor', "red");
            amount53 = 2
            break;
        case "orange":
            get_check5_3.css('backgroundColor', "orange");
            amount53 = 3
            break;
        case "yellow":
            get_check5_3.css('backgroundColor', "yellow");
            amount53 = 4
            break;
        case "green":
            get_check5_3.css('backgroundColor', "green");
            amount53 = 5
            break;
        case "blue":
            get_check5_3.css('backgroundColor', "blue");
            amount53 = 6
            break;
        case "purple":
            get_check5_3.css('backgroundColor', "purple");
            amount53 = 7
            break;
        case "gry":
            get_check5_3.css('backgroundColor', "gray");
            amount53 = 8
            break;
        case "white":
            get_check5_3.css('backgroundColor', "whitesmoke");
            amount53 = 9
            break;
        default:
            break;
    }
}

function R5_4(event) {
    let get_check5_4 = $("#check5_4");
    switch (event) {
        case "black":
            get_check5_4.css('backgroundColor', "black");
            amount54 = 0
            break;
        case "brown":
            get_check5_4.css('backgroundColor', "brown");
            amount54 = 1
            break;
        case "red":
            get_check5_4.css('backgroundColor', "red");
            amount54 = 2
            break;
        case "orange":
            get_check5_4.css('backgroundColor', "orange");
            amount54 = 3
            break;
        case "yellow":
            get_check5_4.css('backgroundColor', "yellow");
            amount54 = 4
            break;
        case "green":
            get_check5_4.css('backgroundColor', "green");
            amount54 = 5
            break;
        case "blue":
            get_check5_4.css('backgroundColor', "blue");
            amount54 = 6
            break;
        case "purple":
            get_check5_4.css('backgroundColor', "purple");
            amount54 = 7
            break;
        case "gry":
            get_check5_4.css('backgroundColor', "gray");
            amount54 = 8
            break;
        case "white":
            get_check5_4.css('backgroundColor', "whitesmoke");
            amount54 = 9
            break;
        case "gold":
            get_check5_4.css('backgroundColor', "gold");
            amount54 = 0.1
            break;
        case "silver":
            get_check5_4.css('backgroundColor', "silver");
            amount54 = 0.01
            break;
        default:
            break;
    }
}

function R5_5(event) {
    let get_check5_5 = $("#check5_5");
    switch (event) {
        case "brown":
            get_check5_5.css('backgroundColor', "brown");
            amount55 = 1
            break;
        case "red":
            get_check5_5.css('backgroundColor', "red");
            amount55 = 2
            break;
        case "green":
            get_check5_5.css('backgroundColor', "green");
            amount55 = 0.5
            break;
        case "blue":
            get_check5_5.css('backgroundColor', "blue");
            amount55 = 0.25
            break;
        case "purple":
            get_check5_5.css('backgroundColor', "purple");
            amount55 = 0.1
            break;
        case "gry":
            get_check5_5.css('backgroundColor', "gray");
            amount55 = 0.05
            break;
        case "gold":
            get_check5_5.css('backgroundColor', "gold");
            amount55 = 5
            break;
        case "silver":
            get_check5_5.css('backgroundColor', "silver");
            amount55 = 10
            break;
        case "none":
            get_check5_5.css('backgroundColor', "white");
            amount55 = 20;
            break;
        default:
            break;
    }
}

$('#cal5').click(() => {
    if (!amount51 || !amount52 || !amount53 || !amount54 || !amount55) {
        swal({
            text: 'لطفا تمام رنگ ها را انتخاب کنید',
            icon: "error",
            button: "باشه",
        })
    }
    else {
        p5_1 = amount51.toString() + amount52.toString() + amount53.toString()
        if (amount54 == 0.1 || amount54 == 0.01) {
            p5_2 = parseInt(p5_1) * amount54;
        }
        else {
            p5_2 = parseInt(p5_1) * Math.pow(10, amount54);
        }
        if (!amount55) {
            result5 = p5_2.toString() + ' اهم'
            swal({
                title: "مقدار اهمی مقاومت برابر است با ",
                text: result5,
                icon: "success",
                button: "باشه",
            }).then(() => {
                window.location.reload()
            })
        }
        else {
            result5 = amount55 + '%' + ' -+ ' + p5_2.toString() + ' اهم'
            swal({
                title: "مقدار اهمی مقاومت برابر است با ",
                text: result5,
                icon: "success",
                button: "باشه",
            }).then(() => {
                window.location.reload()
            })
        }
    }
})