exports.up = (knex) => {
    return knex.schema.createTable('compras', (table) => {
      table.increments();
      table.integer("usuarios_id").notNullable().unsigned();
      table.foreign('usuarios_id')
           .references("usuarios.id")
           .onDelete("restrict")
           .onUpdate("cascade")
      table.integer("produtos_id").notNullable().unsigned();
      table.foreign('produtos_id')
            .references("produtos.id")
            .onDelete("cascade")
            .onUpdate("cascade")
      // cria os campos created_at e updated_at
      table.timestamps(true, true);
    })
  };
  
  exports.down = (knex) => knex.schema.dropTable('compras');