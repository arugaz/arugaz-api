# ArugaZ-Api
Access ArugaZ Rest Api Programmatically

### Main website 
[arugaz.my.id](http://arugaz.my.id)

#### If you have any suggestions of a website, open an issue!

## Installation

Via NPM:
```bash
$ npm install @arugaz/arugaz-api
```

## Simple to Use

```js
const arugaz = require('@arugaz/arugaz-api');

/*
arugaz.type.module-name(params)
.then(res => console.log(res))
.catch(err => console.log(err))
*/
```

### Social Media

```js
//Example!
arugaz.sosmed.ytsearch('alan walker')
.then(res => console.log(res))
.catch(err => console.log(err))

arugaz.sosmed.xnxxdetail('https://www.xnxx.com/video-hw4efca/japanese_mom_f._son_to_have_sex_with_her')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = sosmed)</b> (click to show)</summary>

| module name | params | response | description |
| :--- | :---------- | :--- | :--- |
| ytsearch | query | json | Youtube Search |
| ytaudio | url | json | Get Youtube Audio |
| ytvideo | url | json | Youtube Video |
| instagram | url | json | Instagram Post |
| stalkig | query | json | Instagram Profile |
| storyig | query | json | Instagram Story |
| highlightig | query | json | Instagram Highlight |
| tiktok | url | json | Tiktok Download No WM |
| twtimg | url | json | Twitter Image |
| twtvid | url | json | Twitter Video |
| stalktwt | query | json | Twitter Profile |
| facebook | url | json | Facebook Video |
| phubsearch | query | json | Pornhub Search |
| phubdetail | url | json | Pornhub Detail |
| xvidsearch | query | json | XVideo Search |
| xviddetail | url | json | XVideo Detail |
| xnxxsearch | query | json | Xnxx Search |
| xnxxdetail | url | json | Xnxx Detail |
| filmsearch | query | json | Movie Search |
| filmdetail | url | json | Movie Detail |

</details>
