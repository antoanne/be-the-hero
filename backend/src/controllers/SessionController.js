const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;
        
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong) {
            return response.status(400).json({ error: 'There is no ONG with this ID.' });
        }
        return response.json(ong);
    },

    // async create(request, response) {
    //     const { name, email, whatsapp, city, uf } = request.body;

    //     const id = crypto.randomBytes(4).toString('HEX');

    //     await connection('ongs').insert({
    //         id, 
    //         name, 
    //         email,
    //         whatsapp, 
    //         city,
    //         uf,
    //     });
        
    //     return response.json({ id });
    // }
   
}