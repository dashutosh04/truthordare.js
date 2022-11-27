<div align="center">
	<br />
	<p>
		<a href="https://www.npmjs.com/package/truthordare.js"><img src="https://i.imgur.com/hmnJFmO.png" width="600" alt="truthordare.js" /></a>
	</p>
	<br />
</div>

# 📝 Info

`truthordare.js` is a [Node.js](https://nodejs.org) module that enables us to fetch data from the [Truth or Dare API](https://docs.truthordarebot.xyz/api-docs)

# ⬇️ Installation

```sh-session
npm i truthordare.js
```

# 🔃 Usage

```js
const tord = require("truthordare.js");
```

## ✅ Commands

> You can use the following Funtions :- Truth() | Dare() | Paranoia() | Wyr() | Nhie()

### 👼 **Truth**

```js
const tord = require("truthordare.js");

async function truth_function() {
  (async () => {
    truth = await tord.Truth();
    console.log(truth);
  })();
}

truth_function();
```

### 😈 **Dare**

```js
const tord = require("truthordare.js");

async function dare_function() {
  (async () => {
    dare = await tord.Dare();
    console.log(dare);
  })();
}

dare_function();
```

### 🔎 **Never Have I Ever**

```js
const tord = require("truthordare.js");

async function nhie_function() {
  (async () => {
    nhie = await tord.Nhie();
    console.log(nhie);
  })();
}

nhie_function();
```

## 🟡 Using Parameters

```js
const tord = require("truthordare.js");

async function wyr_function() {
  (async () => {
    wyr = await tord.Wyr({ rating: "R" });
    console.log(wyr);
  })();
}

wyr_function();
```

> Valid Paramaters are: - "PG" , "PG13" , "R"

## ☑️ Output Log (Example)

```
{
  id: 'ku9abgpi0ivr',
  type: 'TRUTH',
  rating: 'PG',
  question: 'Who is your best friend?',
  translations: {
    bn: 'আপনার সেরা বন্ধু কে?',
    de: 'Wer ist dein bester Freund?',
    es: '¿Quién es tu mejor amigo?',
    fr: 'Qui est ton meilleur ami?',
    hi: 'कौन सबसे अच्छे बंधु के रूप में ज्ञात है?',
    tl: 'Sino ang iyong pinakamatalik na kaibigan?'
  }
}
```
