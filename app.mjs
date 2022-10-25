import express from "express";

const app = express()
const port = 3000

app.use('/login', (req, res) => res.send('Login'))
app.use('/Register', (req, res) => res.send('Register'))
app.use('/admin', (req, res) => res.send('admin'))
app.listen(port, () => console.log(`Server Start on port ${port}`))