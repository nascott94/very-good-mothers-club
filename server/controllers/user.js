import UserData from "../models/user.js";

// GET USER DATA
export const getUser = async (req, res) => {
  try {
    const theUser = await UserData.find();

    res.status(200).json(theUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// CREATE USER DATA
export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserData(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
