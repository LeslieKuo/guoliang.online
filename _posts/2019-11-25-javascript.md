---
layout: post
title: JavaScript Basic
---

**JavaScript First Steps** 


## 1. What is JavaScript?
### A high-level definition

JavaScript is the third layer of the layer cake of standard web technologies.

![](https://mdn.mozillademos.org/files/13502/cake.png)(Ref1)

* **HTML** is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.
* **CSS** is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.
* **JavaScript** is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

### So what can it really do?

JS allow you to do things like:

- Store useful values inside variables.
- Operations on piece of test(string).
- Run code in response to certain events occurring on a web page.



**API**  generally fall into two categories:

1. Browser APIs
2. Third party APIs

---

### What is JavaScript doing on your page?







### How do you add JavaScript to your page?

- Internal JavaScript

```javascript
<script>

  // JavaScript goes here

</script>
```



- External JavaScript

1. First, create a new file in the same directory as your sample HTML file. Call it `script.js` — make sure it has that .js filename extension, as that's how it is recognized as JavaScript.

2. Replace your current <script> element with the following:

   ```html
   <script src="script.js" defer></script>
   ```

   

- Inline JavaScript handlers



Javascript Roadmap:

推荐javascript权威指南作为入门书籍的人都是什么心态？ - 憨豆的回答 - 知乎
https://www.zhihu.com/question/23078046/answer/203531074

*参考文献*
[Learn CSS online](https://learnjavascript.online/app.html)
[w3school js](https://www.w3schools.com/js/default.asp)
[mozilla MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[廖雪峰javascript教程](https://www.liaoxuefeng.com/wiki/1022910821149312)


---
## String Methods and Properties



**String** **Length**

```javascript
var txt = "ABC"
var sln = txt.length
```



**Finding a String in a String**

- IndexOf()

  Return the index of the first occurrence of a specified text in a string.

```javascript
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
```

- lastIndexOf()

  Return the index of the **last** occurrence of a specified text in a string:



**Searching for a String in a String**

```javascript
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);
```



**Extracting String Parts**

- slice(start, end)
- substring(start, end)
- substr(*start*, *length*)

**Replacing String Content**

The `replace()` method does not change the string it is called on. It returns a new string.

To replace case insensitive, use a **regular expression** with an `/i` flag (insensitive):

```javascript
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");
```

To replace all matches, use a **regular expression** with a `/g` flag (global match):

```js
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
```



**Converting to Upper and Lower Case**

```js
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();
```



**The concat() Method**

```js
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");
```



**String.trim()**

The `trim()` method removes whitespace from **both sides** of a string:

```js
var str = "       Hello World!        ";
alert(str.trim());
```



**Extracting String Characters**

- charAt(position)

- charCodeAt(position)

- Property access[]

---

- charAt()

  The `charAt()` method returns the character at a specified index (position) in a string:

```js
var str = "HELLO WORLD";
str.charAt(0);            // returns H
```

- charCodeAt()

  The `charCodeAt()` method returns the unicode of the character at a specified index in a string:

  The method returns a UTF-16 code (an integer between 0 and 65535).

- Property access

```js
var str = "HELLO WORLD";
str[0]; 
```



**Converting a String to an Array**

If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single characters:

```js
var txt = "Hello";       // String
txt.split("");           // Split in characters
var txt = "Hello";       // String
txt.split();           // Separator is ommitted. Split in characters
```



##### For a complete reference, go to our [Complete JavaScript String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp).:



## JavaScript Arrays



#### Creating an Array

```js
var array_name = [item1, item2, ...];
```



Using the JS keyword new

```js
var cars = new Array("Saab", "Volvo", "BMW");
```

**Looping Array Elements**

```js
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
```



**Adding Array Elements**

The easiest way to add a new element to an array is using the `push()` method:

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");    // adds a new element (Lemon) to fruits
```





#### Popping and Pushing(last)

The `pop()` method removes the last element from an array:

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // Removes the last element ("Mango") from fruits
```

The `pop()` method returns the value that was "popped out":



The `push()` method adds a new element to an array (at the end):

The `push()` method returns the new array length:

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.push("Kiwi");   //  the value of x is 5
```





#### Shift and Unshift(first)

The `shift()` method removes the first array element and "shifts" all other elements to a lower index.

The `shift()` method returns the string that was "shifted out":

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // Removes the first element "Banana" from fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift();    // the value of x is "Banana"
```



The `unshift()` method adds a new element to an array (at the beginning), and "unshifts" older elements:

The `unshift()` method returns the new array length.

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Returns 5
```

#### Changing Elements