const User = require('../models/User');

// index - Lista Todas
// show - Lista uma
// store - Cria uma
// update - Atualiza uma
// destroy - Exclui uma

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({email});

        if(!user) user = await User.create({ email });

        return res.json(user);
    }
};