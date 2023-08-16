import express from "express";
const port = 3000;

const app = express();

let day = new Date().getDay();
let today = "";
let advice = "";
if (day == 6 || day == 0) today = "weekend";
else today = "weekday";

if (today == "weekend") advice = "Enjoy the weekend!";
else advice = "Work Hard!";

app.get("/", (req, res) => {
    res.render("index.ejs", {dayType: today, advice: advice});
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})