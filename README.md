# fizz-buzz-kata

Exercise on generalisation and abstraction

## How to start

```
git clone git@github.com:sarunas/fizz-buzz-kata.git
cd fizz-buzz-kata
npm install
npm run watch
```

## Task

Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

## Step 1

- Add way to change default range

## Step 2

- Add 3rd rule with number 7 and word "Foo"
- Add 4th rule with number 11 and word "Boo"
- Common multiples should be concatenated, e.g. number 21 is "FizzFoo" and number 77 is "FooBoo"

## Step 3

- Add new type of rule "less than 16" and word "Small" (replace numbers, but prepend to words)
- Add new type of rule "more than 95" and word "Big" (replace numbers, but prepend to words)

## Step 4

- Change rules ordering to: Buzz, Fizz
- Change rules ordering to: Buzz, Small, Fizz

## Step 5

- Add new type of rule "multiple of 3 and 5" and word "FTW"
- Add new type of rule "multiple of 3 or 5" and word "GG"
