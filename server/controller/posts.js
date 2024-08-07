const connectionDB = require("../db/connect");

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

module.exports = {
  getPost,
};
