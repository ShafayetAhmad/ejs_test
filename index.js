import express from "express";
const port = 3000;

const app = express();

let day = new Date().getDay();
let today = "";
let advice = "";
let tasks = "";
if (day == 6 || day == 0) today = "weekend";
else today = "weekday";

if (today == "weekend") {
    advice = "Enjoy the weekend!";
    tasks = ["Go to the gym", "Do the laundry", "Buy groceries"];
} 
else {
    advice = "Work Hard!";
    tasks = ["Finish the lab", "Read 20 pages of the book", "Do the homework"];
    
}


app.get("/", (req, res) => {
    res.render("index.ejs", {dayType: today, advice: advice, tasks: tasks});
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})