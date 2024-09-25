const axios = require('axios');

exports.handler = async (event) => {
    try {
        const cpf = event.event.pathParameters.cpf
        const response = await axios.get(`https://seu-endpoint.com/clientes/${cpf}`);
        
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: error.response ? error.response.status : 500,
            body: JSON.stringify({ message: error.message }),
        };
    }
};