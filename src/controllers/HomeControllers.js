import Aluno from '../models/Aluno';

class HomeController {
  async index(req,res){
    const novoAluno = await Aluno.create({
      nome: 'vinicius',
      sobrenome: 'brisola alves',
      email: 'vinicius@gmail.com',
      idade: 23,
      peso: 84,
      altura: 2.5,
    })


    res.json(novoAluno);
  }
}

export default new HomeController();
