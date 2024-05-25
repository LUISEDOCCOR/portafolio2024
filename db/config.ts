import { defineDb, defineTable, column  } from 'astro:db';


const Certification = defineTable({
  columns: {
    label: column.text(),
    description: column.text(),
    href: column.text(),
  }
})


// https://astro.build/db/config
export default defineDb({
  tables: { Certification }
});
