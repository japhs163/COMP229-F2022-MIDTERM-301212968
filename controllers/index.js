/*
JAPHET REYES
301212968
Midterm
 */
exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
