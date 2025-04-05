import user from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const jwtSceretKey = process.env.jwtSecretKey;
  if (!jwtSceretKey) {
    return res.status(500).json({ message: "server error" });
  }
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ mesaage: "null " });
  }
  try {
    const find = await user.findOne({ email });
    if (!find) {
      return res.status(400).json({ message: "user not found" });
    }
    const comparePassword = await bcrypt.compare(password, find.password);
    if (!comparePassword) {
      return res.status(400).json({ message: "incoorect password" });
    }
    const token = jwt.sign(
      { id: find._id, fullName: find.fullName },
      jwtSceretKey
    );

    res.cookie("token", token, {
      // secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    return res
      .status(200)
      .json({ message: "login Successfully", token: token });
  } catch (err) {
    console.log(err);
  }
};
export default login;
