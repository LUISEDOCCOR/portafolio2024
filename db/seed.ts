import { Certification, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Certification).values([
		{
			label: "Crea páginas web con HTML y CSS",
			description: "Curso sobre cómo crear y maquetar páginas usando HTML y CSS",
			href: "https://www.mastermind.ac/certificates/67103e6b5b66470480a38a5f773caed1"
		}
	])
}
