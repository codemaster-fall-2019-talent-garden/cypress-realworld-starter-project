# Cypress + Testing Library starter project

### Running instructions

- (be sure that you have already installed the project through `$ npm install`)
- launch the front-end project with `$ npm start`
- (in another Terminal tab) open Cypress with `$ npm run cy:open`

### Installation instructions

- clone/download this repository, you can clone it with `$ https://github.com/codemaster-fall-2019-talent-garden/cypress-realworld-starter-project`
- launch `$ npm install`

To test that everything works, launch `$ npm run test:cypress`, you should see an output like the following one

```yaml
Running:  smoke.spec.js                                                                   (1 of 1)


  Smoke test
    ✓ The front-end project should work (729ms)


  1 passing (756ms)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     0 seconds                                                                        │
  │ Spec Ran:     smoke.spec.js                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: /Users/noriste/Sites/tag/cypress-realworld-starter-project/    (0 seconds)
                          cypress/videos/smoke.spec.js.mp4


========================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  smoke.spec.js                            745ms        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        745ms        1        1        -        -        -
```

### Info

- the front-end application is the [RealWorld.io](https://github.com/gothinkster/react-redux-realworld-example-app) one, the version based on React and Redux
- the project has [Cypress](https://www.cypress.io/) and [Cypress Testing Library](https://github.com/testing-library/cypress-testing-library) already installed
