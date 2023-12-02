input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
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
    Feuchte = pins.analogReadPin(AnalogPin.P1)
    basic.showString("" + (Feuchte))
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    Feuchte = pins.analogReadPin(AnalogPin.P0)
    if (Feuchte > BfMin && Feuchte < BfMax) {
        basic.setLedColor(0x00ff00)
        basic.showLeds(`
            # . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
    } else {
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            # . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    music.playTone(165, music.beat(BeatFraction.Whole))
    if (input.temperature() > TempMin && input.temperature() < TempMax) {
        basic.showLeds(`
            . . . . #
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.setLedColor(0x00ff00)
        basic.pause(1000)
    } else {
        basic.showLeds(`
            . . . . #
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
        basic.pause(1000)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.playTone(587, music.beat(BeatFraction.Whole))
    if (input.lightLevel() > HellMin && input.lightLevel() < HellMax) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.setLedColor(0x00ff00)
        basic.pause(1000)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
        basic.pause(1000)
    }
})
let Feuchte = 0
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
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.setLedColor(0x000000)
})
