// Server setup
const express = require('express')
const app = express()

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

// MongoDB setup
const databaseUsername = process.env.DATABASE_USERNAME
const databasePassword = process.env.DATABASE_PASSWORD
const MongoClient = require('mongodb').MongoClient
const util = require('util')
const uri = util.format('mongodb+srv://%s:%s@cluster0-3xzdp.mongodb.net/test?retryWrites=true&w=majority', databaseUsername, databasePassword)
const client = new MongoClient(uri, { useNewUrlParser: true })

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

// Example endpoint
app.get('/hello', (req, res) => {
    console.log('password: ' + databasePassword)
    console.log('username: ' + databaseUsername)
    console.log('uri: ' + uri)

    client.connect(err => {
        if (err) {
            console.log('Error: ' + err)
            return res.status(500).send()
        }

        const collection = client.db('test').collection('messages')
        collection.findOne({owner: 'exchange'}).then(function(message) {
            if (!message) {
                console.log('Failed to find message')
                return res.status(404).send()
            }
            console.log('Message: ' + message.message)
            return res.status(200).json({message: message.message})
        })
    })
})

app.listen(port, () => console.log(`Books Exchange server started on port: ${port}`))