
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/




/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * Test Block: Plays different melodies and show
     * different displays depending on sensor input 
     */
    //% block
    export function Test(e: Gesture): void {
        // If micro:bit is shaken, display a smiley face and play a melody
        if (e === Gesture.Shake){
            basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
            music.playMelody("C5 C C5 C B D A F ", 120)

        // If micro:bit is accelerating downward, display a smiley face and play a melody
        } if(e === Gesture.FreeFall){
            basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
            music.playMelody("C5 A B G A F G E ", 120)
        }
    }



    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     *      * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
  //  export function fib(value: number): number {
 //       return value <= 1 ? value : fib(value -1) + fib(value - 2);
  //  }



    /**
  * Get the word field editor
  * @param word eg: Hello
  */
    //% blockId=wordPicker block="$word"
    //% blockHidden=true
    //% colorSecondary="#FFFFFF"
    //% word.fieldEditor="textdropdown"
    //% word.fieldOptions.decompileLiterals=true
    //% word.fieldOptions.values='hi,hello'
   // export function __wordPicker(word: string): string {
//
  //      return word;
   // }

    //% block="say $word"
    //% word.shadow="wordPicker"
   // export function say(word: string) {
//
  //  }
}
