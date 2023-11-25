const store = require('./store')
const express = require("express")
const app = express()
const cors = require("cors")


app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.get('/', (req, res) => {
    return res.send(store)
})
app.get('/blog/:bollyData', (req, res) => {
    let category = req.params.bollyData
    const data = store.filter((data) => data.cat === `${category}`)
    return res.send(data)
})
app.listen(5000, () => {
    try {
        console.log("server started...");
    }
    catch {
        console.log("404 error !!");
    }
})