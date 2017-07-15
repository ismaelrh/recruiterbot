# recruiterbot
Little script to test Twitter API, that sends each minute one tweet with a fake HR IT recruiter message in Spanish.

## Usage:

To install dependencies, just type
``` 
npm install
```

Then, edit the index.js file to write your API details:
```javascript
var client = new Twitter({
  consumer_key: 'MY_CONSUMER_KEY',
  consumer_secret: 'MY_CONSUMER_SECRET',
  access_token_key: 'MY_ACCESS_TOKEN_KEY',
  access_token_secret: 'MY_ACCESS_TOKEN_SECRET'
});


```

Finally, run the script just with

```
node index.js
```
