import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "Invalid Input",
        success: false,
      });
      return;
    }

    const newData = {
      email,
      name,
      message,
    };

    let client = null;
    try {
      client = await MongoClient.connect(
        process.env.mongodb_url
      );
    } catch (err) {
      res.status(500).json({
        message: "Could not connect to database.",
        success: false,
      });
      return;
    }

    try {
      const db = client.db();
      const result = await db.collection("queries").insertOne(newData);
      console.log(result);
    } catch (err) {
      client.close();
      res.status(500).json({
        message: "Storing message failed!",
        success: false,
      });
      return;
    }

    client.close();

    res.status(201).json({
      message: "We will get back to you soon",
      data: newData,
      success: true,
    });
    return;
  }
}

export default handler;
