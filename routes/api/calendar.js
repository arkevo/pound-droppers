// get calendar data
// app.get("/api/trainer_calendar", function(req, res) {
//     db.calendar.findAll({
//       where: {
//         UserId: res.req.user.id
//       },
//       order: [
//         ['year', 'ASC'],
//         ['month', 'ASC'],
//         ['day', 'ASC'],
//         ['hour', 'DESC'],
//         ['min', 'DESC'],
//         ['ampm', 'DESC']
//       ]
//     }).then(function(results){
//       res.json(results);
     
//     });
//   });