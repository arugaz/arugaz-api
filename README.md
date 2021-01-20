# ArugaZ-Api
Access ArugaZ Rest Api Programmatically
[website](http://arugaz.my.id/)

#### If you have any suggestions of a website, open an issue!

## Installation

Via NPM:
```bash
$ npm install @arugaz/arugaz-api
```

## Simple search

```js
const arugaz = require('@arugaz/arugaz-api');

/*
arugaz.type.module-name(params)
.then(res => console.log(res))
.catch(err => console.log(err))
*/

//Example!
arugaz.sosmed.ytsearch('alan walker')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = sosmed)</b> (click to show)</summary>

| module name | params | response | description |
| :--- | :---------- | :--- | :--- |
| ytsearch | query | json | Youtube Search |
| ytaudio | url | json | Get Youtube Audio |
| ytvideo | url | json | Get Youtube Video |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |
| ytsearch | query | json | Youtube Search |

</details>
