import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("point_items", (table) => {
    table.increments("id").primary();

    table.integer("point_id").notNullable();
    table.integer("item_id").notNullable();

    table
      .foreign("point_id")
      .references("id")
      .inTable("points")
      .onUpdate("cascade")
      .onDelete("cascade");
    table
      .foreign("item_id")
      .references("id")
      .inTable("items")
      .onUpdate("cascade")
      .onDelete("cascade");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("point_items");
}
