# Pycante
![Main Menu](logo.png)

## Introduction
Pycante is the world’s hottest programming language, taking inspiration from the functional capabilities of Javascript and blending Python to bring the user the most intuitive, pleasing experience. Boasting dictionary capabilities, and both static typing and scoping, Pycante is the future of learnable, readable, and reusable code.

## Features
* Variable declaration type inference
* Static typing
* Static scoping
* Strong typing
* Assignment using “let”
* String Interpolation
* For loops, while loops, if statements
* Composition and object orientation
* Lists, Dictionaries, and Classes

## Operators
* Additive:       +
* Subtraction:    -
* Multiplication: *
* Exponential:    **
* Division:       /
* Floor:          //
* Relational:     <, >, >=, <=, ==, !=
* Boolean:        &, |
* Modulo:         %
* Increment/Decrement:  ++a, --a
* Warning:       🔥
* Function:      🌶️
* Class:         ♨️

## Data Types:
* Number: 4, 27.3, -13.0182
* Boolean: true, false
* String: “Spicy”, “Un poco picante”, “\“What does a nosy pepper do?\”\n\“It gets Jalepeño business!\”
* Comments: ~ Single Line Comment; |- Multi line comment -|

## Examples
Variable declaration:

```
let x = 12         ~ Number declaration

let str = "Hello"  ~ String declaration

let z = false      ~ Boolean declaration
```


Function declarations:

```
🌶️ add(x, y)
    let z = x + y
    return z
end
```


Expressions:

```
let addition = 10 + 20

let multiplication = 10 * 12

```

If statement:

```
let x = 10
let y = 20
if (x < y)
    x = x + 10
end
```

If else:

```
let x = 10
let y = 20
if (x < y)
    print: x is less than y  ~ This statement is executed.
else
    print: x is not less than y
end
```

For loop:


```
let list = [1, 2, 3, 4]

for (let index = 0; index < 4; ++index )
    print: list[index]
end
```


While Loop:


```
let list = ["one", "two", "three", "four"]

let index = 0
while (index < 4)
    print: list[index]
    ++index
end
```

Printing:

```
let x = 10
print: x     ~ Prints "10"

print: hello ~ Prints "hello"

```

Type Inference: The what(id) function is used to infer the type of a variable.

```
let x = 10
what(x)      ~ returns "number"

let str = "Hello"
what(str)    ~ returns "string"

let isTrue = true
what(isTrue) ~ returns "bool"
```

Pycante Dictionaries:

```
webster = aardvark: 1,
    acapella: "song w/o instruments",
    pycante: "The HOTTEST programming language",
    spicy: true.
```

Pycante Classes:

```
♨️ Pepper
    🌶️ f(self)
        return 'spice is nice'
    end
end
```
