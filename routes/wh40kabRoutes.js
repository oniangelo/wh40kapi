'use strict';
module.exports = function(app) {
    var armybuilder = require('../controllers/wh40kabController');

    // armybuilder Routes
    app.route('/api/getArmyIndex/:factionId/role/:roleId')
        .get(armybuilder.getArmyIndex);


    // app.route('/tasks/:taskId')
    //     .get(armybuilder.read_a_task)
    //     .put(armybuilder.update_a_task)
    //     .delete(armybuilder.delete_a_task);
};