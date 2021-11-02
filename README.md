# fwi-fe-code-challenge

The Frontend aspect of FWI's full stack developer code challenge.

### View the deployed version! http://44.225.53.153:3000

This code base is slightly different than the primary FE challenge in that it
communicates with the Api that I wrote: https://github.com/jakuzo/fwi-poker-api.

Thus, inorder to test this code base locally, you will also need to run that api
locally.

For request documentation see: https://github.com/jakuzo/fwi-poker-api.

### Project Setup

Install dependencies and start in development mode.

```sh
yarn
yarn dev
```

### Challenge Checklist

- [x] Create Player
- [x] Modify Player
- [x] Delete Player
- [x] Implement sorting (optional)
- [ ] Lazy loading/pagination (optional)
- [ ] Tests (optional)

### Items Left to do / Room For improvement

- The backend has pagination functionality, but I didn't get a chance to utilize
  this on the frontend.
- Some of the style implementations for my components are less than ideal.
- No input validation.
- Could have utilized component library (react-md) a bit more.
- The Filter/Player Menu components/styles should probably be consolidated into
  a single component.
- These two components in particular are rather large.

## Deployment

Unfortunately, continuous deployment is not set up yet. We are performing
"manual" deployments for the time being.

Utilizing pm2 for daemon processing, so that we can start the app and leave the
shell almost guilt free.

To start the app:

```sh
  pm2 --name pokerfe start npm -- start
```

To check processes running:

```sh
  pm2 ps
```

To stop a process

```sh
  pm2 <process id>
```
