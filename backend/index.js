const express = require('express');
const path = require("path")
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const methodOverride = require("method-override")

main().then(res => console.log("mongoose connected")
).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/keepnotes');
}

const noteSchema = mongoose.Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    },
    pin: {
        type: Boolean,
        default: false
    },
    archive: {
        type: Boolean,
        default: false
    },
    bin: {
        type: Boolean,
        default: false
    }
})

const Note = mongoose.model("Note", noteSchema)

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride("_method"))


app.get('/', async (req, res) => {
    let notes = await Note.find({})
    res.render("index.ejs", {notes})
});

app.post("/new",async (req, res) => {
    let data = req.body
    let newnote = new Note(data)
    await newnote.save()
    res.redirect("/")
})

// app.get("/api/notes/:id", async (req, res) => {
//     let {id} = req.params;
//     let note = await Note.findById(id)
//     res.send(note)
// })

app.delete("/note/:id",async (req, res) => {
    let {id} = req.params;
    await Note.deleteOne({_id: id})
    res.redirect("/")
})


app.get("/api/notes",async (req, res) => {
    let allnotes = await Note.find({})
    res.send(allnotes)
})

// app.get("/new", async (req, res) => {
//     let fakenote = new Note({
//         title: "Hello world!",
//         desc: "This is description",
//         pin: true,
//         archive: false,
//         bin: false
//     })
//     await fakenote.save()
//     res.send(fakenote)
// })

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});