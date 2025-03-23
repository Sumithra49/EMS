const User = require("../models/User");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" }); // ✅ Added success response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" }); // ✅ Check & return error
    }

    // ✅ Create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token }); // ✅ Send token in response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// LOGOUT
exports.logout = async (req, res) => {
  try {
    // If token is in cookies, clear it
    res.clearCookie("token"); // Only if you're using cookies

    // Inform client to delete token
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
