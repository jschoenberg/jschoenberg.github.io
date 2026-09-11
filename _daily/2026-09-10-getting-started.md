---
title: "Getting Started"
intro: "I guess I forgot how to blink"
---
Yeah yeah this is supposed to be daily or something but I'm employed.

Anyway, all of the things that I ordered to begin learning all this
stuff as come in, as well as things I had prior. In all, we have

- FreeNove Pico Ultimate Starter Kit
- RPI Pico 2 W
- ESP32 C6 Devkit-C
- STM32L476RG Nucleo Board
- nRF52840 DK + Dongle
- PocketBeagle 2
- Multimeter
- Logic Analyzer

I may need additional things like a UART to USB connector at some
point, but for now I think this should be ok. For now, my intention
is to work my way through the tutorial projects on the starter
kit, both on the Pico, but also with the other boards. This will
add significant time as I learn as I will need to be learning
the other SDKs and probably fight the build system s bit as well
(as I am not using IDE plugins or custom IDEs for each board), but 
I think this will ensure I don't get myself locked into the RPI 
pico SDK, and ensure I have a general understanding of what I am doing
and can apply it to other boards.

For instance, the usual "blinky". I've done it before on my STM32 and
nRF, but now I had to do it on new boards, and it was a decent bit 
different. Why? Well,

1. The intended Pico LED is NOT connected directly to the CPU. Rather,
it is connected to the WiFi chip, which is connected to with SPI. So,
need to import the proper headers to interact with it.

2. The ESP32 C6 LED does not function like how the other LEDs function, 
as it is RGB. There's a custom HAL layer for it that needs to be
used to use it. Just sending HIGH to GPIO_8 was not working for me. I
intend on going a bit into the internals, figuring this out, and going
around this led_strip abstraction.

This may seem like overkill (it probably is), but when I do these
tutorials, I feel the best way I make sure I understand everything
is to do it many times in different environments. Therefore, doing
these tutorials will take me much time. 

For instance, I'm not even done with blink! I've worked on it for
about 5-7 hours total over the course of 3 evenings. Why? 
Well in those hours I've,

1. Done the tutorial on the Pi
2. Redid it on the ESP32
  1. Originally did it with just GPIO in similar vein
  2. Spent a good bit figuring out that issue and using the led_strip
  library
3. Redid it on the STM32
  1. Configured using the [stm32-cmake](https://github.com/ObKo/stm32-cmake.git) build system
  2. Did not define SysTick_Handler cause I forgot
  3. Used GDB to debug the firmware
  4. Saw it was stuck at the HardFault (and others) address
  5. Did some debugging and searching with some AI help
  6. Found that Handler wasn't defined (and the linker pointed that function
  to that address, which is how it ended up there)
  7. Defined the handler and everything worked
4. Redid it on the PocketBeagle 2 (Linux)
  1. Found the correct GPIO pins after navigating the datasheet and
  sysfs like a stranger in a foreign land
  2. Sending input on the GPIO pins said device busy (makes sense since they
  are used by the board to communicate status)
  3. Decided to interact with the `/leds/*/brightness` file instead
    since that was working

Sure, this could've taken like 2, 3 hours max if I just used AI for it 
and it wrote the code and did all the research and debugged everything
fot me. But, where's the fun in that? Where's the learning? Where's 
the whimsy?

Was it frustrating? Sure. Was I being too stubborn? Probably. But you
know what? I learned. And I will forget some of the information I learned 
in this process and have to relearn it. Eventually it will stick. And
all this means that I will have a real, deep undestanding of what it is
I am doing, and I can build things myself. If all I can do is what the AI 
tells me to do, I'd be no better at this than Joe Schmoe.

Anyway, what's left?

1. Re-implement Blink on the STM32 w/o the HAL. Gotta do it at least once
so I can understand what happens under the abstraction, both so I can
appreciate the abstraction, and go around it if needed. I doubt I'll need
to, but who knows

2. Re-implement blink using the MCU and PRU on the PocketBeagle 2. I 
anticipate this being quite interesting and annoying to get working.

3. Get around the led_strip abstraction, and try to use the 
GPIO directly. If it requires some weird stuff like how the Pico uses
SPI to communicate with the WiFi chip, then I will likely skip it. 
I will deal with the protocols when the tutorials get there

Then, after all that, I can do blink, with a button! I recall that
being the next project. Don't feel like checking right at this moment.
Circuitry? Not in many years, and never in any depth. This oughtta be
interesting. Wondering if the tutorial pages will be sufficient and 
explain the circuitry stuff in a way that is sufficient for me, or if
I'll end up going off on my own to learn it.

Overall, definitely a slow start, but purposefully slow. I want to 
take my time and do this right. That way, I can actually make cool stuff
without sitting at my computer going "ChatGPT, how do I make the thing do
the thing I want?"

With all the AI fear and predictions going around, I could be wasting my
time. But, I will try to be optimistic.

Cheers.
