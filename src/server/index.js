import ReactDOMServer from "react-dom/server";
import express from "express";
import Menu from "../Menu";
import * as path from "path";
import * as fs from "fs";
import {data} from "../data";
const app = express();

app.use(express.static("./build"));

const PORT = 4000;

app.get(("/*"), (req, res) => {
    const app = ReactDOMServer.renderToString(
        <Menu />
    );
    fs.readFile(indexFile, "utf8", (err, data) => {
        return res.send(
            data.replace(
                `<div id="root"></div>`,
                `<div id="root">${app}</div>`,
            )
        );
    });
});

const indexFile = path.resolve(
    "./build/index.html"
);

app.listen(PORT, () =>
    console.log(`Server is listening on port ${PORT}`)
);

