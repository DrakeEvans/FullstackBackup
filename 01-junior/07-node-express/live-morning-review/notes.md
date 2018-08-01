# Morning Review - Express

## Topics To Hit
    * Middleware
        * What is it? - It is every function that a request touches on it's way to generating a response.
        * Why would I want to make my own? - Something specific you want to get done.

        (req, res, next) => {
            req.params { 
                puppyId: req.originalUrl.slice(req.originalUrl.indexOf('/puppies'), ...through next slash)
            }
        }
        (req, res, next) => {
            req.someValue = 5; 
            next();
        }
        ....

        (req, res, next) => {
            if(req.someValue > 5){
                ...
            } else {
                ...
            }
        }
        * What express.static middleware actually does?
    ```js
        app.use(express.static(path.join(__dirname, 'public'))) ... 
        
        app.use('/picture.jpg', (req, res, next) => {
            res.sendFile('./public/picture.jpg');
        })
        app.use('/styles.css', (req, res, next) => {
            res.sendFile('./public/styles.css');
        })
        app.use('/something.js', (req, res, next) => {
            res.sendFile('./public/something.js');
        })
    ```

