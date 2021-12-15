# lambda-middy

![CircleCI](https://img.shields.io/circleci/build/gh/tsamaya/lambda-middy)
![Codecov](https://img.shields.io/codecov/c/gh/tsamaya/lambda-middy)

## Prerequistes

- node 14
- jq (nice to have)

## get started

- clone
- npm i

## test

### invoke local

```bash
npx serverless invoke local -f hello
{
  "message": "👋"
}
```

### offline dev

```bash
npm run start:offline
```

then

```bash
curl -s http://localhost:3001/dev/hello | jq
{
  "message": "👋"
}

curl -s "http://localhost:3001/dev/hello?name=andy" | jq
{
  "message": "Hello!"
}

curl -s "http://localhost:3001/dev/hello?name=error" -i
HTTP/1.1 500 Internal Server Error
access-control-allow-origin: *
x-dns-prefetch-control: off
strict-transport-security: max-age=15552000; includeSubDomains; preload
x-download-options: noopen
x-content-type-options: nosniff
referrer-policy: no-referrer
x-permitted-cross-domain-policies: none
content-type: text/plain; charset=utf-8
cache-control: no-cache
content-length: 16
Date: Wed, 15 Dec 2021 11:35:47 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Unexpected error
```

## deploy

```bash
export AWS_ACCESS_KEY_ID=<your id>
export AWS_SECRET_ACCESS_KEY=<your secret>

npm run deploy
```

## cleanup

```bash
export AWS_ACCESS_KEY_ID=<your id>
export AWS_SECRET_ACCESS_KEY=<your secret>

npm run remove
```

## notes

without middy

```js
const baseHhandler = async (event) => {
  try {
    console.log(event);
    const { name } = event.queryStringParameters || 'unknown';
    const message = greetings(name);
    const response = {
      statusCode: 200,
      body: JSON.stringify({ message }),
    };
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error,
      }),
    };
  }
};
```

with middy

```js
const { name } = event.queryStringParameters || 'unknown';
  const message = greetings(name);
  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };
};

const handler = middy(baseHhandler)
  .use(inputOutputLogger())
  .use(httpErrorHandler());
```

## Contributing

Anyone and everyone is welcome to contribute.

## Issues

Find a bug or want to request a new feature? Please let me know by submitting an issue.

## Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE) file.
