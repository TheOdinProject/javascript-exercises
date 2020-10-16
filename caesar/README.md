# Exercise XX - caesar cipher

Implement the legendary caesar cipher:

> In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

Hint: You may need to convert letters to their unicode values. Be sure to read the documentation!

write a function that takes a string to be encoded and a shift factor and then returns the encoded string:

```javascript
caesar('A', 1) // simply shifts the letter by 1: returns 'B'
```

the cipher should retain capitalization:
```javascript
caesar('Hey', 5) // returns 'Mjd;
```

should _not_ shift punctuation:
```javascript
caesar('Hello, World!', 5) //returns 'Mjqqt, Btwqi!'
```

the shift should wrap around the alphabet:
```javascript
caesar('Z', 1) // returns 'A'
```

negative numbers should work as well:
```javascript
caesar('Mjqqt, Btwqi!', -5) // returns 'Hello, World!'
```


