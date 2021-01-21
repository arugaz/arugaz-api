# ArugaZ-Api
Access ArugaZ Rest Api Programmatically

### Main website 
[arugaz.my.id](https://arugaz.my.id)

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

### Text Pro

```js
//Example!
arugaz.textpro.glue3d('hello world')
.then(res => console.log(res))
.catch(err => console.log(err))

arugaz.textpro.space3d('hello', 'world')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = textpro)</b> (click to show)</summary>

| module name | params | response | description |
| :--- | :---------- | :--- | :--- |
| luxury | query | buffer | 3D luxury gold text effect |
| text3d | query | buffer | 3D gradient text effect |
| blackpink | query | buffer | Blackpink logo style |
| realvintage | query | buffer | realistic vintage style light bulb |
| realcloud | query | buffer | realistic cloud text effect |
| sandsummer| query | buffer | write in sand summer beach |
| sandwrite | query | buffer | sand writing |
| sandengraved | query | buffer | sand engraved 3d |
| sandsummery | query | buffer | summery sand writing |
| foilballoon | query | buffer | foil balloon text effect |
| glue3d | query | buffer | 3D glue effect |
| space3d | query, query | buffer | space 3D text effect |
| metaldark | query | buffer | Metal dark gold effect |
| glitchtext | query, query | buffer | Glitch text effect tiktok |
| stonetext | query, query | buffer | Stone text effect |
| neonlight | query | buffer | Neon light with galaxy |
| old1917 | query | buffer | 1917 Old Text effect |
| minion | query | buffer | Minion text effect |
| pornhub | query, query | buffer | Pornhub style logo |
| holograpich | query | buffer | Holograpich 3D effect |
| avengers | query, query | buffer | 3D Avengers Logo |
| marvel | query, query | buffer | Marvel studio logo |
| firework | query | buffer | Firework sparkle effect |
| lavatext | query | buffer | Lava text effect |
| america | query | buffer | Captain America style |
| equalizer | query | buffer | Rainbow equalizer effect |
| toxic | query | buffer | Green Toxic Text |
| matrix | query | buffer | Matrix Text Effect |
| blood | query | buffer | Horror blood effect |
| thunder | query | buffer | Thunder text effect |
| neon | query | buffer | Neon text effect |
| bokeh | query | buffer | Bokeh text effect |
| green | query | buffer | Green neon style |
| glow | query | buffer | Glowing text |
| water | query | buffer | Dropwater text effect |

</details>