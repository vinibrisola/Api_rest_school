import User from '../models/User';

class UserController {
  async store(req,res){
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.massage),
      });
    }
  }

  async index(req,res){
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null)
    }
  }

  async show(req,res){
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.json(null)
    }
  }


  async update(req,res){
    try {
      if(!req.params.id){
        return res.status(400).json({
          errors:['ID não enviado'],
        })
      }
      const user = await User.findByPk(req.params.id);
      if(!user){
        return res.status(400).json({
          erros: ['Usuário não existe'],
        })
      }
      const novosDados = await user.update(req.body);
      return res.json(novosDados);

    } catch (e) {
      return res.json(null)
    }
  }

  async delete(req,res){
    try {
      if(!req.params.id){
        return res.status(400).json({
          errors:['ID não enviado'],
        })
      }
      const user = await User.findByPk(req.params.id);
      if(!user){
        return res.status(400).json({
          erros: ['Usuário não existe'],
        })
      }
      await user.destroy();
      return res.json(user);

    } catch (e) {
      return res.json(null)
    }
  }
}

export default new UserController();
