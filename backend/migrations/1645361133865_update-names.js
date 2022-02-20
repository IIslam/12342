/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.renameColumn("user", "first_name", "firstName");
  pgm.renameColumn("user", "last_name", "lastName");
  pgm.renameColumn("fund", "user_email", "userEmail");
  pgm.renameColumn("fund_financial", "fund_fk", "fundId");
};

exports.down = (pgm) => {
  pgm.renameColumn("user", "firstName", "first_name");
  pgm.renameColumn("user", "lastName", "last_name");
  pgm.renameColumn("fund", "userEmail", "user_email");
  pgm.renameColumn("fund_financial", "fundId", "fund_fk");
};
