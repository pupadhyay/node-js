const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please enter age");
  } else if (req.query.age < 18) {
    resp.send("You are under age");
  } else {
    next();
  }
};
module.exports = reqFilter;
