
exports.up = (knex) => {
  return knex.schema.createTable('produtos', (table) => {
    table.increments();
    table.string('p_nome', 80).notNullable();
    table.string('descricao', 255).notNullable();
    table.string('foto').notNullable();
    table.decimal('preco', 9.2).notNullable();
    table.boolean('destaque').notNullable().defaultTo(false);
    // cria os campos created_at e updated_at
    table.timestamps(true, true);
  })
};

exports.down = (knex) => knex.schema.dropTable('produtos');