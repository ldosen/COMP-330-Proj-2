function predict_sentiement(tweet){
    const {PythonShell} = require("python-shell");
    var pyshell = new PythonShell('./back-end/python/predict_sentiment.py');

    pyshell.send(JSON.stringify([tweet]));

    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
    });

// end the input stream and allow the process to exit
    pyshell.end(function (err) {
        if (err){
            throw err;
        };

        console.log('finished');
    });
}

predict_sentiement("I hate this movie");
