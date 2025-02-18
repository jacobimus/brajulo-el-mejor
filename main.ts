basic.forever(function () {
    if (input.compassHeading() == 0) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else {
        basic.pause(5000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.compassHeading() == 180) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . . # # .
            . . . # .
            . # # # .
            `)
    } else {
        basic.pause(5000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.compassHeading() == 270) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        basic.pause(5000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.compassHeading() == 90) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else {
        basic.pause(5000)
        basic.clearScreen()
    }
})
