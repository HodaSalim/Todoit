exports.getAllUsers =
  ("/users",
  async (req, res) => {
    try {
      const users = await User.find().populate("boards");
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

exports.addUser =
  ("/users",
  async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = new User({ name, email, password });
      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

exports.editUser =
  ("/users/:userId",
  async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { name, email, password },
        { new: true }
      );
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });

exports.deleteUser =
  ("/users/:userId",
  async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  });
