var faunadb = require("faunadb")

q = faunadb.query

require("dotenv").config()

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async event => {
  try {
    const messageBody = JSON.parse(event.body)
    var adminClient = new faunadb.Client({
      secret: process.env.YOUR_FAUNADB_ADMIN_SECRET,
    })

    const result = await adminClient.query(
      q.Create(q.Collection("message"), {
        data: { detail: messageBody.message },
      })
    )
    // const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: result.ref.id }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

// module.exports = { handler }
