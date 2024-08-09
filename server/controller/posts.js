const connectionDB = require("../db/connect");
const fs = require("fs");
const path = require("path");

// getting posting data
const getPost = async (req, res) => {
  try {
    const Que = "SELECT * FROM post";

    connectionDB.query(Que, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: "internel server error" });
      }
      return res.json(data);
    });
  } catch (error) {
    console.error(error.message);
  }
};

// inserting post in database
const insertPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file?.image ? req.file.image[0] : "null";

    const Que = "INSERT INTO post (title, description, image) values(?, ?, ?)";

    const data = [title, description, image];

    connectionDB.query(Que, data, (err) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ msg: "internal server error" });
      }
      return res.status(200).json({ msg: "Post inserted successfully" });
    });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ msg: "bad request" });
  }
};

// edit posts
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    console.log(req.params);
    console.log(req.body);

    const Que = `UPDATE post SET title = ? , description = ? where id = ?`;
    const data = [id, title, description];

    connectionDB.query(Que, data, (err) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ msg: "internel server error" });
      }
      return res.status(200).json({ msg: "updated successfully" });
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ msg: "bad requist" });
  }
};

// delete
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const Que = "DELETE FROM post WHERE id = ?";

    connectionDB.query(Que, [id], (err) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ msg: "internel server error" });
      }
      return res.status(200).json({ msg: "deleted successfully" });
    });
  } catch (error) {
    console.error(error.message);
    return res.sendStatus(400).json({ msg: "bad requies" });
  }
};

module.exports = {
  getPost,
  insertPost,
  updatePost,
  deletePost,
};
