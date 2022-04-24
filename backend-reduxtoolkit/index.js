const experss = require("express")

const app = experss()
app.use(experss.json())

app.post("/user/update", (req, res) => {
    setTimeout(() => {
        res.status(200).json(req.body)
    }, 2000)
})

app.post("/user/post", (req, res) => {
    setTimeout(() => {
        res.status(200).json(req.body)
    }, 2000)
})


app.listen(3030, () => {
    console.log("Server is running at the https:localhost:3030")
})