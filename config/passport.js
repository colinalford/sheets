module.exports = function(passport, LocalStrategy, User) {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  passport.use(new LocalStrategy(
    function(email, password, done) {
      User.findOne({ email: email}, function(err, user) {
        if (err) {
          return done(err);
        } else if (!user) {
          return done(null, false);
        } else if (!user.comparePasswords(password)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      });
    }
  ));
}
