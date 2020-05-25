const express = require("express");
const shortId = require("shortid");
const https = require("https");
const path = require("path");
const { Server } = require("ws");

const PORT = process.env.PORT || 3000;
const pingDelay = 50000;
const messagePath = "/api/message";
const botToken = "<telegram_bot_token>";
const chatId = "<ID_ADMIN_CHAT>"; // ID чата, в который будут идти сообщения
const adminId = "<ID_ADMIN_CHAT>"; // ID пользователя, от которого сервер будет принимать управляющие сообщения
let managerName = "Name"; // Имя администратора, которое будет отображаться у клиента

const connectedClients = {};

const server = express()
  .use(express.json({ extended: true }))
  .use("/", express.static(path.join(__dirname, "client")))
  .post(messagePath, (req, res) => {
    if (!req.body.message.reply_to_message) {
      if (req.body.message.from.id === +adminId) {
        if (req.body.message.text.startsWith("#setName")) {
          managerName = req.body.message.text.split(" ")[1];
          sendToTelegramm(`System: name set to ${managerName}`);
          return res.status(200).json("ok");
        }
      }
      sendToTelegramm("System error: message type not recognized");
      return res.status(200).json("ok");
    }
    let question = req.body.message.reply_to_message.text;
    const from = question.indexOf("(");
    const to = question.indexOf("):");
    const id = question.slice(from + 1, to);
    if (connectedClients[id])
      connectedClients[id].send(`${managerName}: \n ${req.body.message.text}`);
    res.status(200).json("ok");
  })
  .get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
  })
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
    sendToTelegramm(`Server started on ${PORT}`);
  });

const wss = new Server({ server });
wss.on("connection", ws => {
  const id = shortId.generate();
  connectedClients[id] = ws;
  sendToTelegramm(createTelegramMsg("connect", id));
  ws.on("close", () => {
    sendToTelegramm(createTelegramMsg("disconnect", id));
    delete connectedClients[id];
  });
  ws.on("message", resp => {
    if (!validate(JSON.parse(resp))) {
      ws.send("Иди уроки делать, мамкин хакер");
      return;
    }
    sendToTelegramm(createTelegramMsg("send", id, JSON.parse(resp)));
  });
});

function validate(data) {
  if (
    typeof data !== "object" ||
    !data.name ||
    !data.msg ||
    typeof data.name !== "string" ||
    typeof data.msg !== "string"
  )
    return false;
  if (data.name.trim() === "" || data.msg.trim() === "") return false;
  return true;
}

function createTelegramMsg(type, id, data) {
  switch (type) {
    case "connect":
      return `(${id}): вошел в чат`;
    case "disconnect":
      return `(${id}): вышел из чата`;
    case "send":
      return `${data.name.replace(/\(|\)/g, "")}(${id}): \n ${data.msg}`;
    default:
      return "Ошибка типа сообщения";
  }
}

function sendToTelegramm(msg) {
  const body = JSON.stringify({
    chat_id: chatId,
    text: msg,
    parse_mode: "Markdown"
  });
  const options = {
    hostname: "api.telegram.org",
    port: 443,
    path: `/bot${botToken}/sendMessage`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": body.length
    }
  };
  const req = https.request(options);
  req.on("error", e => {
    connectedClients[id].send("Ошибка сервера");
    console.error(e);
  });
  req.write(body);
  req.end();
}

setInterval(() => {
  // keep sockets alive
  wss.clients.forEach(client => {
    client.ping();
  });
}, pingDelay);
