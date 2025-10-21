# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 34.198.246.228

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```


Midterm Notes:

 - flex -
      To get the division of space for the flexbox children correct we add the following flex properties to each of the children.
      header - flex: 0 80px - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box.
      footer - flex: 0 30px - Like the header it will not grow and has a height of 30 pixels.
      main - flex: 1 - One means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space. Main also gets some additional properties because we want it to also be a flexbox container for the controls and content area. So we set its display to be flex and specify the flex-direction to be row so that the children are oriented side by side.

 - js -
       - arrow functions -
            Arrow functions allows a shorter syntax for function expressions.
            You don't need the function keyword, the return keyword, and the curly brackets:
            let myFunction = (a, b) => a * b;
      - for loops -
            for (let i = 0; i < 2; i++) {}
      - while -
            while (i < 2) {thing; i++;}
      - if -
            if (a === 1) {}
            else if (b === 2) {}
            else {}
      - object -
            const car = {type:"Fiat", model:"500", color:"white"};
      - json -
            JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This makes it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats. Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.

 - functions -
      map(): creates a new array from calling a function for every array element, does not execute the function for empty elements, does not change the original array.
      getElementByID(): Get the element with the specified id (document.getElementById("demo");)
      addEventListener(): attaches an event handler to an element (element.addEventListener("click", function() {document.getElementById("demo").innerHTML = "Hello World";});)
      console.log(): Write to the console: (console.log("Hello world!");)

- span -
      default: inline

- images -
      <img alt="name" src="link" />

- box model -
      layers from inside out: thing, padding, border, margin

- html tags -
      <a>: defines a link
      <p>: paragraph
      <ol>,<ul>: ordered/unordered list
      h<1-9>: level heading
      <script>: using javascript

- console commands -
      chmod - change mode (access permissions)
      pwd - print working directory (current)
      vim - opens text editor
      man - displays manual page
      ps - displays info about running processes
      wget - dowload files from web
      sudo - execute command as superuser
      ssh - creates remote shell session
      ls -la - long format listing of all files including hidden ones

- domain levels -
      top: .com, .click, etc
      sub: first part
      root: second part

- other -
      DNS A record can only point to an IPv4 address
      A web certificate is necessary to use HTTPS
      Port 443 is used for HTTPS (secure web traffic), port 80 is used for HTTP (unencrypted web traffic), and port 22 is used for SSH
