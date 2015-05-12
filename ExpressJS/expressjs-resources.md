# ExpressJS Resources

See the 'Getting Started', and 'Guide' sections at [ExpressJS](http://expressjs.com/).

Learn the basics of the Express.js framework
* [https://github.com/azat-co/expressworks](https://github.com/azat-co/expressworks)

You can skip `jade` and `stylish css`, though they are relatively simple. They introduce you to middleware but are not required to build a RESTful API. 

If you fail the `hello world` challenge, but are confident in your answer, you 
may have to change a line in 
```
/usr/lib/node_modules/expressworks/exercises/hello_world/exercise.js
```
Change `setTimeout(query.bind(this, mode), 500)` to `setTimeout(query.bind(this, mode), 1500)`
(Will require `sudo` to write to file).
You will have to do this for each challenge. I have submitted a [pull request](https://github.com/azat-co/expressworks/pull/68) to fix this issue with all exercises.

