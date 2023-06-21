if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
// password: EIjmy2MR8hqs8YBd
// Importing Libraies that we installed using npm
const express = require("express");
var path = require("path");
const app = express();
const bcrypt = require("bcrypt"); // Importing bcrypt package
const passport = require("passport");
const initializePassport = require("./passport-config");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const mongodb = require("mongodb");
const { urlencoded } = require("body-parser");
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

const users = [];

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // We wont resave the session variable if nothing is changed
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

// Configuring the register post functionality
app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/userprofile",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// Configuring the register post functionality
app.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(users); // Display newly registered in the console
    res.redirect("/login");
  } catch (e) {
    console.log(e);
    res.redirect("/register");
  }
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Connect to the MongoDB database
    const client = await mongodb.connect(
      "mongodb+srv://test:test@cluster0.xqxgaza.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db("test");

    // Insert the registration data into a collection (e.g., 'users')
    await db.collection("test1").insertOne({ name, email, password });

    client.close();

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

// app.post("/register", async (req, res, next) => {
// const newUser = new Form(req.body);
//await newUser.save();
//res.json({
//user: newUser,
//});
//});

app.use(express.static(path.join(__dirname, "public"))); // view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/script2.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/script.js");
});

app.get("/script.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/script.js");
});

app.get("/apikey.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/apikey.js");
});
app.get("/demo.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/demo.js");
});
app.get("/dictionary.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/dictionary.js");
});
app.get("/info.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/info.js");
});
app.get("/main.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/main.js");
});
app.get("/mainV2.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/mainV2.js");
});
app.get("/menu.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/menu.js");
});
app.get("/old-main.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/old-main.js");
});
app.get("/BAC.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/BAC.js");
});
app.get("/bmi.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/bmi.js");
});
app.get("/calories.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/calories.js");
});
app.get("/WIC.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/WIC.js");
});
app.get("/ORMC.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/ORMC.js");
});
app.get("/THRC.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/THRC.js");
});
app.get("/coming soon.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/coming soon.js");
});
app.get("/chart.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/chart.js");
});
app.get("/reminder.js", (req, res) => {
  res.sendFile(__dirname + "/scriptsheet/reminder.js");
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/stylesheet/style.css");
});
app.get("/style2.css", (req, res) => {
  res.sendFile(__dirname + "/stylesheet/style2.css");
});
app.get("/style3.css", (req, res) => {
  res.sendFile(__dirname + "/stylesheet/style3.css");
});
app.get("/landing.css", (req, res) => {
  res.sendFile(__dirname + "/stylesheet/landing.css");
});
app.get("/main.css", (req, res) => {
  res.sendFile(__dirname + "/stylesheet/main.css");
});
app.get("/health-calculator.css", (req, res) => {
  res.sendFile(__dirname + "/stylesheet/health-calculator.css");
});
app.get("/BAC.css", (req, res) => {
  res.sendFile(__dirname + "/stylesheet/BAC.css");
});
app.get("/bmi.css", (req, res) => {
  res.sendFile(__dirname + "/stylesheet/bmi.css");
});
app.get("/calories.css", (req, res) => {
  res.sendFile(__dirname + "/stylesheet/calories.css");
});
app.get("/ORMC.css", (req, res) => {
  res.sendFile(__dirname + "/stylesheet/ORMC.css");
});
app.get("/THRC.css", (req, res) => {
  res.sendFile(__dirname + "/stylesheet/THRC.css");
});
app.get("/WIC.css", (req, res) => {
  res.sendFile(__dirname + "/stylesheet/WIC.css");
});
app.get("/coming soon.css", (req, res) => {
  res.sendFile(__dirname + "/stylesheet/coming soon.css");
});
app.get("/", (req, res) => {
  res.render("homepage.ejs");
});
//routes
app.get("/", checkAuthenticated, (req, res) => {
  res.render("homepage.ejs", { name: req.user.name });
});

app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register.ejs");
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});

app.post("/register", urlencodedParser, (req, res) => {
  formData(req.body);
  res.render("success", { name: req.body.name });
});

app.get("/userprofile", (req, res) => {
  res.render("user-profile.ejs");
});

app.get("/main", (req, res) => {
  res.render("main.ejs");
});

app.get("/index2", (req, res) => {
  res.render("index2.ejs");
});

app.get("/health-calculator", (req, res) => {
  res.render("health calculator.ejs");
});

app.get("/BAC", (req, res) => {
  res.render("BAC.ejs");
});

app.get("/bmi", (req, res) => {
  res.render("bmi.ejs");
});

app.get("/calories", (req, res) => {
  res.render("calories.ejs");
});

app.get("/ORMC", (req, res) => {
  res.render("ORMC.ejs");
});

app.get("/THRC", (req, res) => {
  res.render("THRC.ejs");
});

app.get("/WIC", (req, res) => {
  res.render("WIC.ejs");
});

app.get("/chart", (req, res) => {
  res.render("chart.ejs");
});
app.get("/reminder", (req, res) => {
  res.render("reminder.ejs");
});
app.get("/coming-soon", (req, res) => {
  res.render("coming soon.ejs");
});
app.get("/logout", (req, res) => {
  res.render("homepage.ejs");
});

app.get("/symptomchecker", (req, res) => {
  const filepath = path.join(
    __dirname,
    "medical-symptom-checker-master",
    "public",
    "index.html"
  );
  res.sendFile(filepath);
});
// End Routes

// app.delete('/logout', (req, res) => {
//     req.logOut()
//     res.redirect('/login')
//   })

app.delete("/logout", (req, res) => {
  req.logout(req.user, (err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/userprofile");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}
app.listen(4000, () => {
  console.log("server running on port : " + 4000);
});
