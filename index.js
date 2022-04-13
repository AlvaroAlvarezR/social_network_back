const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

global.__basedir = __dirname + "/..";

// Cors
app.use(cors());

// Middlewares
app.use(express.json());
app.use(express.static('public'));

// Import routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});
require('./routes/user')(app);
require('./routes/auth')(app);
require('./routes/post')(app);
// require('./routes/comment')(app);
// require('./routes/like')(app);

// Routes
// app.use('/api/users', userRoutes);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});