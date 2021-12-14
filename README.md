# lambda-middy

![CircleCI](https://img.shields.io/circleci/build/gh/tsamaya/lambda-middy)

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
```

### offline dev

```bash
npm run start:offline
```

then

```bash
curl -s http://localhost:3001/dev/hello | jq

curl -s "http://localhost:3001/dev/hello?name=andy" | jq
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

## Contributing

Anyone and everyone is welcome to contribute.

## Issues

Find a bug or want to request a new feature? Please let me know by submitting an issue.

## Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE) file.
