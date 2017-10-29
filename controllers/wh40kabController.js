exports.getArmyIndex = function(req, res) {
    let sql = 'SELECT * FROM Units u \
     inner join Units_Factions uf on u.id == uf.unitId \
     where uf.factionId =';
    sql = sql + req.params.factionId;
    var list = [];
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            list.push({ id: row.id, name: row.name, point: row.point });
            console.log(row.name);
        });
        res.json(list);
    });
    //var list = [{ id: 1, name: "Sammael", role: '1' }, { id: 2, name: "Ezekiel", role: '1' }];



    // Task.findById(req.params.armyId, function(err, task) {
    //     if (err)
    //         res.send(err);
    //     res.json(task);
    // });
};