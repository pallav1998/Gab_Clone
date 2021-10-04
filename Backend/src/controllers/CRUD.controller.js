const post = (model) => async (req, res) => {
  try {
    const users = await model.create(req.body);
    res.status(201).json({ users });
  } catch (err) {
    res.status(400).json({ status: "Error in Post", message: err.message });
  }
};

const get = (model) => async (req, res) => {
  try {
    const users = await model.find().lean().exec();
    res.status(200).send({ users });
  } catch (err) {
    res.status(400).json({ status: "Error in Get", message: err.message });
  }
};

const getOne = (model) => async (req, res) => {
  try {
    const users = await model.findById(req.params.id).lean().exec();

    res.status(200).json({ users });
  } catch (err) {
    res.status(400).json({ status: "Error in GetOne", message: err.message });
  }
};

const update = (model) => async (req, res) => {
  try {
    const users = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({ users });
  } catch (err) {
    res.status(400).json({ status: "Error in Update", message: err.message });
  }
};

const deleteOne = (model) => async (req, res) => {
  try {
    const users = await model.findByIdAndDelete(req.params.id);

    res.status(200).json({ users });
  } catch (err) {
    res.status(400).json({ status: "Error in Delete", message: err.message });
  }
};

module.exports = { post, get, getOne, update, deleteOne };
