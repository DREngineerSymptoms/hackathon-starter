/**
 * GET /
 * Home page.
 */
// exports.index = (req, res) => {
//   res.render('home', {
//     title: 'Home'
//   });
// };

exports.index = function (req, res) {
  res.render('index', { title: 'ejs' });
};
