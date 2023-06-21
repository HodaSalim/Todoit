exports.getAllCards =
  ("/cards",
  async (req, res) => {
    try {
      const cards = await Card.find();
      res.json(cards);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

exports.addCard =
  ("/cards",
  async (req, res) => {
    try {
      const {
        title,
        description,
        dueDate,
        checklist,
        labels,
        listId,
        boardId,
        createdBy,
      } = req.body;
      const card = new Card({
        title,
        description,
        dueDate,
        checklist,
        labels,
        list: listId,
        board: boardId,
        createdBy,
      });
      await card.save();
      await List.findByIdAndUpdate(listId, { $push: { cards: card._id } });
      res.json(card);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

exports.editCard =
  ("/cards/:cardId",
  async (req, res) => {
    try {
      const { title, description, dueDate, checklist, labels } = req.body;
      const card = await Card.findByIdAndUpdate(
        req.params.cardId,
        { title, description, dueDate, checklist, labels },
        { new: true }
      );
      res.json(card);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

exports.deleteCard =
  ("/cards/:cardId",
  async (req, res) => {
    try {
      const card = await Card.findByIdAndDelete(req.params.cardId);
      await List.findByIdAndUpdate(card.list, { $pull: { cards: card._id } });
      res.json(card);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });
