const controller = {};
controller.list = (req, res) => {
    req.getConnection((err, con) => {
        con.query('SELECT * FROM player', (err, players) => {
            if (err) {
                res.json(err);
            }
            console.log(players);
            res.render('players',{
                data: players
            });
        });
    });
}
controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, con) => {
        con.query('INSERT INTO player set ?', [data], (err, players) => {
            console.log(players);
            res.redirect('/');
        });
    });
}
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, con) => {
        con.query('SELECT * FROM player WHERE id = ?', [id], (err, players) => {
            console.log(players);
            res.render('player_edit',{
                data: players[0]
            });
        });
    });
}
controller.update = (req, res) => {
    const { id } = req.params;
    const newPlayer = req.body;
    req.getConnection((err, con) => {
        con.query('UPDATE player SET ? WHERE id = ?', [newPlayer, id], (err, rows) => {
            res.redirect('/');
        });
    });
}
controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, con) => {
        con.query('DELETE FROM player WHERE id = ?', [id], (err, players) => {
            res.redirect('/');
        });
    });
}
module.exports = controller;