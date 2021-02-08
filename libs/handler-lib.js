/*
endpoints:
  POST - https://vidhoc8be1.execute-api.us-east-2.amazonaws.com/prod/notes
  GET - https://vidhoc8be1.execute-api.us-east-2.amazonaws.com/prod/notes/{id}
  GET - https://vidhoc8be1.execute-api.us-east-2.amazonaws.com/prod/notes
  PUT - https://vidhoc8be1.execute-api.us-east-2.amazonaws.com/prod/notes/{id}
  DELETE - https://vidhoc8be1.execute-api.us-east-2.amazonaws.com/prod/notes/{id}
*/

export default function handler(lambda) {
  return async function (event, context) {
    let body, statusCode;

    try {
      // Run the Lambda
      body = await lambda(event, context);
      statusCode = 200;
    } catch (e) {
      body = { error: e.message };
      statusCode = 500;
    }

    // Return HTTP response
    return {
      statusCode,
      body: JSON.stringify(body),
    };
  };
}