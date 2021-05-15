# oleksandr-kravchenko-e2e
RisePeople

To run the test:
1. Clone 'youtube.spec.js' file into /integraion folder of Cypress
2. Find the file via Cypress
3. Run the test

Node.js Version (14.15.1)

Chrome Version 90

Cypress Version (7.3.0)
Released 05/10/2021

Proxy Settings
There is no active proxy configuration

Test file name 'youtube.spec.js'

Your end-to-end test do the following:
1) Visit youtube.com
2) Search for “The whole working-from-home thing — Apple” and click on this video.
3) To emulate an actual user’s experience, we want to wait for the whole page to load
before continuing with our assertions. To do this, you can wait for a specific network
request to complete with the desired status before proceeding. You can use the Cypress
documentation to help you go about this.
4) Assert that the title of the video matches what you searched for previously and that the
uploader is indeed “Apple”
