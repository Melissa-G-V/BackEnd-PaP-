const knex = require("../database/dbConfig");

module.exports = {
// index: listagem
  // store/create: inclusão
  // update: alteração
  // show: obter 1 registro
  // destroy: exclusão

  async index(req, res) {
    const compras = await knex
      .select("c.id","p.foto" ,"c.usuarios_id","p.preco","u.id","u.nome","u.email", "p.p_nome", "p.descricao")
      .from("compras as c")
      .leftJoin("usuarios as u", "c.usuarios_id", "u.id")
      .leftJoin("produtos as p", "c.produtos_id", "p.id")
      .orderBy("p.id", "desc");
    res.status(200).json(compras);
  },


  async store(req, res) {
    console.log(req.body)
    const { usuarios_id, produtos_id  } = req.body;

    if (!usuarios_id) {
      res.status(400).json({
        erro: "Algo de errado aconeteceu? voce esta logado?",
      });
      return;
    }
    if ( !usuarios_id || !produtos_id) {
      res.status(400).json({
        erro: "Enviar produto id",
      });
      return;
    }
    try {
      const novo = await knex("compras").insert({
         usuarios_id, produtos_id
      });
      res.status(201).json({ id: novo[0] });
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },


  async store2(req, res) {
    console.log(req.body)
    const{ usuarios_id, produtos_id}=req.body;
    try {
        const novo = await knex("compras").insert({
             usuarios_id, produtos_id
        })
        res.status(201).json({id:novo[0]})
        console.log('status 201')
    } catch (error) {
        res.status(400).json({erro: error.message})
    }
  },

  async pesq(req,res){
    const {usuarios_id, produtos_id} = req.params;
    const like = await knex('compras').where('usuarios_id', usuarios_id).andWhere('produtos_id',produtos_id)
    res.status(200).json(like)
}


}