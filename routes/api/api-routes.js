// get calendar data
app.get("/api/trainer_calendar", function(req, res) {
    db.calendar.findAll({
      where: {
        UserId: res.req.user.id
      },
      order: [
        ['year', 'ASC'],
        ['month', 'ASC'],
        ['day', 'ASC'],
        ['hour', 'DESC'],
        ['min', 'DESC'],
        ['ampm', 'DESC']
      ]
    }).then(function(results){
      res.json(results);
     
    });
  });


  // Add an event
app.post("/api/new_class", function(req, res) {
 
     console.log(req.body);
   
     db.calendar.create({
       month: req.body.month,
       day: req.body.day,
       year: req.body.year,
       hour: req.body.hour,
       min: req.body.min,
       ampm: req.body.ampm,
       event: req.body.event
     }).then(function(results) {
       res.end();
     });
   
   });