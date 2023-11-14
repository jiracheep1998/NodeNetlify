require("dotenv").config();
const axios = require("axios");
const process = require("process");
const os = require('os');

exports.handler = async (event, context) => {


    try {
        const jsonData = {
            height: 512,
            prompt: 'cat',
            quantity: 3,
            style: 'Oil Painting',
            width: 512
        };

        axios.post('https://restapi.cutout.pro/web/ai/generateImage/generateAsync', JSON.stringify(jsonData), {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                return {
                    statusCode: 200,
                    body: JSON.stringify({ response }),
                };
            })
            .catch(error => {
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error }),
                };
            });


    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }


};

// module.exports.handler();
