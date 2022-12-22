import User from "../model/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
  try {
    //1. check email
    const user = await User.findOne({ email: req.body.email });
    //2. user not found
    if (!user) return next(createError(404, "User not found!"));
    // user found
    //3. check user password same or not
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    //4.  whether password wrong
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));
    //5. JWT
    const token = jwt.sign(
      { id: user._id, name: user.firstname },
      process.env.JWT
    );

    const { password, email, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails } });
  } catch (err) {
    next(err);
  }
};
