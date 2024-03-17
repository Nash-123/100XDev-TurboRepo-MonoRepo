import { BACKEND_URL } from "@repo/common/config";
import express from "express";

const app = express();
app.get('/nishan', (req,res) => {
    res.send("Hello Nishan, all Good");
});

app.listen(5174, () => {
    console.log(`Example app listening on port 3010`);
})
console.log(BACKEND_URL);

