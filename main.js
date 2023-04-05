function seeBirthday(event) {

    {
        event.preventDefault()
    }

    // user date input

    let month = document.querySelector('#month').value
    let date = document.querySelector('#date').value

    // current date

    let currentDate = new Date()
    let currentMonth = currentDate.getMonth()
    let currentDay = currentDate.getDay()
    // day if condition

    if (currentMonth === 0) {

        Month = 'January'

    } else if (currentMonth === 1) {

        Month = 'February'

    } else if (currentMonth === 2) {

        Month = 'March'

    } else if (currentMonth === 3) {

        Month = 'April'

    } else if (currentMonth === 4) {

        Month = 'May'

    } else if (currentMonth === 5) {

        Month = 'June'

    } else if (currentMonth === 6) {

        Month = 'July'

    } else if (currentMonth === 7) {

        Month = 'August'

    } else if (currentMonth === 8) {

        Month = 'September'

    } else if (currentMonth === 9) {

        Month = 'October'

    } else if (currentMonth === 10) {

        Month = 'November'

    } else {

        Month = 'December'

    }

    let now = `${currentDay} ${Month}`
    console.log(now)

    let userDate = `${date} ${month}`
    console.log(userDate) 

    document.querySelector('#result').innerHTML = 'currentDate :' + now + '<br/>' + 'userDate :' + userDate

}