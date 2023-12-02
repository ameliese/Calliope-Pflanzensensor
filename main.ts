input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Bf > BfMin && Bf < BfMax) {
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
    if (Temp > TempMin && Temp < TempMax) {
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
    if (Hell > HellMin && Hell < HellMax) {
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
let Hell = 0
let Temp = 0
let Bf = 0
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
basic.forever(function () {
    basic.setLedColor(0x000000)
    Bf = pins.analogReadPin(AnalogPin.P0)
    Hell = input.lightLevel()
    Temp = input.temperature()
    basic.showString("BF: ")
    basic.showString("" + (Bf))
    basic.showString("%")
    basic.showString("He: ")
    basic.showString("" + (Hell))
    basic.showString("%")
    basic.showString("T: ")
    basic.showString("" + (Temp))
    basic.showString("°C")
})
