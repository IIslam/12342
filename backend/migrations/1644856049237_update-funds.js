/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumns("fund", { user_email: { type: "string" } });
  pgm.addConstraint("fund", "user_email_FK", {
    foreignKeys: {
      columns: ["user_email"],
      references: "user",
    },
  });

  pgm.db.query("select * from public.user").then((result) => {
    result.rows.forEach((row) => {
      pgm.db.query(`UPDATE public.fund
     SET user_email='${row.email}'
     WHERE id = ${row.fund_fk}`);
    });
  });
};

exports.down = (pgm) => {
  pgm.dropConstraint("fund", "user_email_FK");
  pgm.dropColumn("fund", "user_email");
};
