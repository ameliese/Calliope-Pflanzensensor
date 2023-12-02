input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (pins.analogReadPin(AnalogPin.P0) > BfMin && pins.analogReadPin(AnalogPin.P0) < BfMax) {
        basic.showLeds(`
            # . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.setLedColor(0x00ff00)
    } else {
        basic.showLeds(`
            # . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (input.temperature() > TempMin && input.temperature() < TempMax) {
        basic.showLeds(`
            . . . . #
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.setLedColor(0x00ff00)
    } else {
        basic.showLeds(`
            . . . . #
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (input.lightLevel() > HellMin && input.lightLevel() < HellMax) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.setLedColor(0x00ff00)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
    }
})
let TempMax = 0
let TempMin = 0
let BfMax = 0
let BfMin = 0
let HellMax = 0
let HellMin = 0
HellMin = 20
HellMax = 70
BfMin = 20
BfMax = 70
TempMin = 15
TempMax = 25
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.setLedColor(0x000000)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.showString("" + (input.lightLevel()))
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showString("" + (input.temperature()))
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.showString("" + (pins.analogReadPin(AnalogPin.P1)))
})
