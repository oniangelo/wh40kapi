exports.getArmyIndex = function(req, res) {
    var list = [{ id: 1, name: "Sammael", role: '1' }, { id: 2, name "Ezekiel", role: '1' }];
    res.json(list);

    // Task.findById(req.params.armyId, function(err, task) {
    //     if (err)
    //         res.send(err);
    //     res.json(task);
    // });
};