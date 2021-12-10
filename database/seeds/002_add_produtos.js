
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('produtos').del()
    .then(function () {
      // Inserts seed entries
      return knex('produtos').insert([
        {p_nome: 'Amigurumi', preco: 27, descricao:'Amigurumi de Crochê em formato de onçinha 20cm', foto: 'https://img.elo7.com.br/product/zoom/2B7D327/amigurumi-onca-pintada-onca.jpg'},
        {p_nome: 'Cachecol Gato', preco: 26, descricao:'Cachecol de Crochê em formato de gatinho', foto: 'https://i.pinimg.com/originals/8f/9b/37/8f9b37ab73ee937a709bb249d688e546.jpg'},
        {p_nome: 'Touca Coelho', preco: 22, descricao:'Touca de Trico em fomato de coelho, tamanho infantil', foto: 'https://img.elo7.com.br/product/main/1DBA788/touca-coelho-cinza-touca.jpg'},
        {p_nome: 'Cachecol Cachorro', preco: 26, descricao:'Cachecol de Crochet em formato de cachorro', foto: 'https://img.elo7.com.br/product/original/12FF317/cachecol-cachorrinho-com-bolso-urso.jpg'},
        {p_nome: 'Touca Dino', preco: 22, descricao:'Touca de Trico em fomato de dinosauro, tamanho infantil', foto: 'https://cdn.ficoupequeno.com/lojinhas/desapegos-do-vitor/1907245289_g.jpeg'},
        {p_nome: 'Vasos De Crochê', preco: 15, descricao:'Vasinho De crochê para suculentas', foto: 'https://img.elo7.com.br/product/zoom/2487F92/kit-vasos-de-cactus-em-croche-1-grande-1-pequeno-arte.jpg'},   
        {p_nome: 'Kit Banheiro', preco: 43, descricao:'Kit Banheiro crochê azul 4 peças', foto: 'https://cdn.awsli.com.br/800x800/1765/1765397/produto/100794350/faa4c9a9d4.jpg'},
      ]);
    });
};
