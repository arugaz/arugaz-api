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

| module name | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| ytsearch | query | youtube title | json | Youtube Search |
| ytaudio | url | youtube url | json | Get Youtube Audio |
| ytvideo | url | youtube url | json | Youtube Video |
| instagram | url | instagram url | json | Instagram Post |
| stalkig | query | instagram username | json | Instagram Profile |
| storyig | query | instagram username | json | Instagram Story |
| highlightig | query | instagram username | json | Instagram Highlight |
| tiktok | url | tiktok url | json | Tiktok Download No WM |
| twtimg | url | twitter url | json | Twitter Image |
| twtvid | url | twitter url | json | Twitter Video |
| stalktwt | query | twitter username | json | Twitter Profile |
| facebook | url | facebook url | json | Facebook Video |
| phubsearch | query | pornhub title | json | Pornhub Search |
| phubdetail | url | pornhub url | json | Pornhub Detail |
| xvidsearch | query | xvideo title | json | XVideo Search |
| xviddetail | url | xvideo url | json | XVideo Detail |
| xnxxsearch | query | xnxx title | json | Xnxx Search |
| xnxxdetail | url | xnxx url | json | Xnxx Detail |
| filmsearch | query | filmapik title | json | Movie Search |
| filmdetail | url | filmapik url | json | Movie Detail |

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

| module name | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| luxury | query | any text | buffer | 3D luxury gold text effect |
| text3d | query | any text | buffer | 3D gradient text effect |
| blackpink | query | any text | buffer | Blackpink logo style |
| realvintage | query | any text | buffer | realistic vintage style light bulb |
| realcloud | query | any text | buffer | realistic cloud text effect |
| sandsummer| query | any text | buffer | write in sand summer beach |
| sandwrite | query | any text | buffer | sand writing |
| sandengraved | query | any text | buffer | sand engraved 3d |
| sandsummery | query | any text | buffer | summery sand writing |
| foilballoon | query | any text | buffer | foil balloon text effect |
| glue3d | query | any text | buffer | 3D glue effect |
| space3d | query, query | any text, any text | buffer | space 3D text effect |
| metaldark | query | any text | buffer | Metal dark gold effect |
| glitchtext | query, query | any text, any text | buffer | Glitch text effect tiktok |
| stonetext | query, query | any text, any text | buffer | Stone text effect |
| neonlight | query | any text | buffer | Neon light with galaxy |
| neonnew | query | any text | buffer | Neon light Effect |
| old1917 | query | any text | buffer | 1917 Old Text effect |
| minion | query | any text | buffer | Minion text effect |
| pornhub | query, query | any text, any text | buffer | Pornhub style logo |
| holograpich | query | any text | buffer | Holograpich 3D effect |
| avengers | query, query | any text, any text | buffer | 3D Avengers Logo |
| marvel | query, query | any text, any text | buffer | Marvel studio logo |
| firework | query | any text | buffer | Firework sparkle effect |
| lavatext | query | any text | buffer | Lava text effect |
| america | query | any text | buffer | Captain America style |
| equalizer | query | any text | buffer | Rainbow equalizer effect |
| toxic | query | any text | buffer | Green Toxic Text |
| matrix | query | any text | buffer | Matrix Text Effect |
| blood | query | any text | buffer | Horror blood effect |
| thunder | query | any text | buffer | Thunder text effect |
| neon | query | any text | buffer | Neon text effect |
| bokeh | query | any text | buffer | Bokeh text effect |
| green | query | any text | buffer | Green neon style |
| glow | query | any text | buffer | Glowing text |
| water | query | any text | buffer | Dropwater text effect |

</details>

### Education

```js
//Example!
arugaz.edu.corona('Indonesia')
.then(res => console.log(res))
.catch(err => console.log(err))

arugaz.edu.translate('ar', 'Halo nama saya aruga')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = edu)</b> (click to show)</summary>

| module name | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| idwiki | query | any text | json | Indonesia Wikipedia |
| enwiki | query | any text | json | English Wikipedia |
| corona | query | country | json | Corona details by country |
| resep | query | food | json | Food recipes |
| translate | query, query | country id, any text | json | Translate to country language |

</details>

### Flaming Text

```js
//Example!
arugaz.flaming.wroom('hello world')
.then(res => console.log(res))
.catch(err => console.log(err))

arugaz.flaming.memo('hello world')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = flaming)</b> (click to show)</summary>

| module name | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| wroom | query | any text | buffer | Wroom effect |
| text3d | query | any text | buffer | Gold text 3D Style |
| black | query | any text | buffer | Blackbird effect |
| water | query | any text | buffer | Text with water effect |
| smurf | query | any text | buffer | Like a smurf |
| memo | query | any text | buffer | Memories text gif |

</details>