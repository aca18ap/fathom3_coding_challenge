$(document).ready(function() {
    let surprise = $('#surprise')
    surprise.mousedown((e) => {
        if (!surprise.prop('checked')) {
            console.log('ops')
            $('#type').prop('disabled', true)
        } else {
            $('#type').prop('disabled', false)
        }
    })

})


function getJoke() {
    let jokeType;
    if ($('#surprise').is(':checked')) {
        jokeType = 'surprise'
    } else {
        jokeType = $('#type').val()
    }
    $('.joke').hide()
    $.ajax({
        type: 'get',
        url: '/jokes',
        data: {
            type: jokeType
        },
        success: res => {
            console.log(res)
            showJoke(res)
        }
    })
}

function showJoke(joke) {
    let setup = $('#setup')
    let punchline = $('#punchline').hide()
    let wait = $('#wait').text('')
    setup.text(joke.setup)
    $('.joke').delay(500).show()
    punchline.text(joke.punchline)
    for (i = 0; i < 5; i++) {
        setTimeout(function() {
            wait.text(wait.text() + ' .')
        }, i * 800)
    }
    punchline.delay(5000).show(100)
}