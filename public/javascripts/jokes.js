/**
 * Attaching event listener to surprise me checkbox
 * If clicked, the 
 */
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


/**
 * Function getJoke, is triggered by the 'Click for a joke' button
 * The function performs an ajax get request with the type of joke as query parameter
 * On success, the joke received is passed to the functino showJoke
 */
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
            showJoke(res)
        }
    })
}

/**
 * 
 * @param {setup, punchline} joke is an object containing the setup and punchline received from the server
 * These are then passed onto the DOM along a suspense building .... 
 */
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