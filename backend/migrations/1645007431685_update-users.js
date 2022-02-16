/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.dropConstraint("user", "user_fund_id_fk");
  pgm.dropColumns("user", "fund_fk");
};

exports.down = (pgm) => {
  pgm.addColumns("user", { fund_fk: { type: "integer" } });
  pgm.addConstraint("user", "user_fund_id_fk", {
    foreignKeys: {
      columns: ["fund_fk"],
      references: "fund",
    },
  });
};
