exports.getAllLists =
  ("/lists",
  async (req, res) => {
    try {
      const lists = await List.find().populate("cards");
      res.json(lists);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

exports.addList =
  ("/lists",
  async (req, res) => {
    try {
      const { title, boardId, createdBy } = req.body;
      const list = new List({ title, board: boardId, createdBy });
      await list.save();
      await Board.findByIdAndUpdate(boardId, { $push: { lists: list._id } });
      res.json(list);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

exports.editList =
  ("/lists/:listId",
  async (req, res) => {
    try {
      const { title } = req.body;
      const list = await List.findByIdAndUpdate(
        req.params.listId,
        { title },
        { new: true }
      );
      res.json(list);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

exports.deleteList =
  ("/lists/:listId",
  async (req, res) => {
    try {
      const list = await List.findByIdAndDelete(req.params.listId);
      await Board.findByIdAndUpdate(list.board, { $pull: { lists: list._id } });
      res.json(list);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });
