import { defineDb, defineTable, column  } from 'astro:db';


const Certification = defineTable({
  columns: {
    label: column.text(),
    description: column.text(),
    href: column.text(),
  }
})

const Skill = defineTable({
  columns: {
    label: column.text(),
    icon: column.text(),
  }
})

const Project = defineTable({
  columns: {
    title: column.text(),
    description: column.text(),
    gtihub: column.text(),
    preview: column.text()
  }
})


// https://astro.build/db/config
export default defineDb({
  tables: { Certification, Skill, Project }
});
