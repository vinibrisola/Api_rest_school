import User from '../models/Aluno';

class TokenController {
  async store(req,res){
    res.json("OK");
  }
}

export default new TokenController();
