'use strict';
module.exports = function(app) {
    var armybuilder = require('../controllers/wh40kabController');

    // armybuilder Routes
    app.route('/tasks')
        .get(armybuilder.list_all_tasks)
        .post(armybuilder.create_a_task);


    app.route('/tasks/:taskId')
        .get(armybuilder.read_a_task)
        .put(armybuilder.update_a_task)
        .delete(armybuilder.delete_a_task);
};