exports.getArmyIndex = function(req, res) {
    let sql = 'SELECT * FROM Units u \
     inner join Units_Factions uf on u.id == uf.unitId \
     where uf.factionId =';
    sql = sql + req.params.factionId;
    sql = sql + ' and u.battlefieldRole =' + req.params.roleId;
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
};
exports.getBellicRoles = function(req,res){
    let q = "SELECT * FROM BattlefieldRole";
    var roles =[];
    db.all(q,[],(err,rows)=>{
        if(err){
            throw err;
        }
        rows.forEach((row)=> {
            roles.push({id: row.id,name:row.name});
        });
    });
    res.json(roles);
}