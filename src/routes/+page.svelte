<script lang="ts">
	import ImagesRow from '$lib/components/ImagesRow.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	let overlayImage = $state('');

	onMount(() => {
		const allImages = document.querySelectorAll('section img');

		for (const image of allImages) {
			image.addEventListener('click', () => {
				overlayImage = image.getAttribute('src') || '';
			});
		}

		const allAnchors = document.querySelectorAll('.anchor');

		for (const anchor of allAnchors) {
			anchor.addEventListener('click', (e) => {
				e.preventDefault();
				const href = anchor.getAttribute('href') || '';
				const target = document.querySelector(href);
				target?.scrollIntoView({
					behavior: 'smooth',
					block: 'nearest'
				});
			});
		}
	});
</script>

<svelte:head>
	<title>Chauchy</title>
	<meta
		name="description"
		content="Ancienne grange du 18ᵉ siècle au cœur du village de Denes, entièrement rénovée selon des
				principes écologiques proposant une un habitat écologique, participatif, responsable et
				solidaire."
	/>
</svelte:head>

{#if overlayImage}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="image-overlay" onclick={() => (overlayImage = '')}>
		<img src={overlayImage} alt="" />
	</div>
{/if}

<div class="page">
	<div class="hero">
		<div class="title">
			<h1>CHAUCHY</h1>
			<p>Une proposition pour un habitat écologique, participatif, responsable et solidaire.</p>
		</div>
		<img src="/images/resized/002b_AXO.jpg" alt="" />
		<a class="anchor" href="#nouvelle-place">↓</a>
	</div>

	<section id="nouvelle-place">
		<h2>Une place se libère dans notre habitat partagé à Denens</h2>

		<p>
			Disponible maintenant, unité de 49 m² dans une maison intergénérationnelle rénovée
			écologiquement
		</p>

		<ul>
			<li>
				<h3>Loyer</h3>
				1890 CHF/mois
			</li>
			<li>
				<h3>Espaces partagés</h3>
				130 m² (cuisine, salle à manger, salon) + 2 grands jardins avec potager
			</li>
			<li>
				<h3>Option</h3>
				Subdivision possible en 2 chambres (14 m² à 798 CHF + 25 m² à 1118 CHF), partageant une salle
				de bain
			</li>
			<li>
				<h3>Localisation</h3>
				Denens – 10 min en bus de Morges, 30 min de Lausanne
			</li>
			<li>
				<h3>Nous sommes</h3>
				8 habitants de 1 à 40 ans qui partageons le goût de la bonne cuisine, de la nature, de la musique
				et d'une vie conviviale tout en préservant l'intimité de chacun.
			</li>
		</ul>

		<p>
			👉 Intéressé·e ? Contacte-nous : <a href="mailto:info@chauchy.ch">info@chauchy.ch</a> – écris-nous
			quelques lignes sur qui tu es et pourquoi tu souhaiterais habiter ici.
		</p>
	</section>

	<section class="full">
		<ImagesRow items={data.imageGroupDimensions[1]} />
	</section>

	<section id="maison">
		<h2>La maison</h2>
		<p>
			Ancienne grange du 18ᵉ siècle au cœur du village, entièrement rénovée selon des principes
			écologiques :
		</p>

		<ul>
			<li>Matériaux biosourcés</li>
			<li>Toilettes alimentées à l'eau de pluie</li>
			<li>Électricité photovoltaïque ⚡</li>
			<li>Architecture pensée pour favoriser la vie partagée</li>
		</ul>

		<img src="/images/resized/000.jpg" alt="" />

		<p>Les espaces communs se déploient sur 4 niveaux :</p>

		<ul>
			<li>
				<h3>Rez-de-chaussée</h3>
				Buanderie et espace polyvalent avec accès au jardin
			</li>
			<li>
				<h3>1er étage</h3>
				Grande cuisine conviviale avec coin repas
			</li>
			<li>
				<h3>2e étage</h3>
				Salon avec vue et cheminée
			</li>
			<li>
				<h3>Combles</h3>
				Espace modulable de 20 m² (atelier, chambre d'amis, coin détente...)
			</li>
		</ul>

		<p>
			Les grands jardins sont entièrement à disposition des habitant·e·s pour cultiver, se détendre
			ou créer.
		</p>
	</section>

	<section class="full">
		<ImagesRow items={data.imageGroupDimensions[0]} />
	</section>

	<section id="life">
		<h2>La vie ici</h2>
		<div class="text">
			<p>
				Notre habitat réunit actuellement 8 personnes de tous âges dans une ambiance chaleureuse et
				dynamique. Nous aimons cuisiner ensemble, jardiner, faire de la musique, partir en montagne,
				et profiter des moments partagés autour d'un jeu ou d'une bonne tarte maison 🍰 L'immeuble
				accueille plusieurs familles et enfants, créant un véritable esprit de communauté tout en
				respectant l'intimité et l'autonomie de chacun.
			</p>

			<p>
				L'immeuble accueille plusieurs familles et enfants, créant un véritable esprit de communauté
				tout en respectant l'intimité et l'autonomie de chacun.
			</p>
		</div>
	</section>

	<section>
		<img src="/images/resized/001.jpg" alt="" />
	</section>

	<section id="denens">
		<h2>Le village de Denens</h2>

		<p>Village viticole de 750 habitants dominant le lac Léman et les Alpes, Denens offre :</p>

		<ul>
			<li>Une boulangerie</li>
			<li>Un restaurant thaïlandais</li>
			<li>Une école primaire</li>
			<li>Bus réguliers vers Morges (726) – connexions vers Lausanne et Genève</li>
			<li>Accès facile en mobilité douce (vélo : 5 km de Morges)</li>
		</ul>

		<img src="/images/resized/010_CARTES_WEB_A43.jpg" alt="" />

		<ImagesRow items={data.imageGroupDimensions[4]} />
	</section>

	<section id="cluster">
		<h2>Le concept "cluster"</h2>

		<p>
			Notre habitat s'inspire du modèle du cluster : des unités privées autonomes (avec salle de
			bain et kitchenette) organisées autour de généreux espaces communs. Cette organisation offre :
		</p>

		<ul>
			<li>Plus d'autonomie qu'une colocation classique</li>
			<li>Plus d'interactions sociales qu'un studio</li>
			<li>La flexibilité pour s'adapter aux différentes étapes de vie</li>
		</ul>

		<img src="/images/resized/002.jpg" alt="" />
	</section>

	<section id="philosophie">
		<h2>Philosophie du projet</h2>
		<p>
			Au-delà du simple logement, Chauchy est une exploration concrète d'un mode d'habitat plus
			durable socialement et écologiquement. Dans un contexte où les villages doivent réinventer
			leur modèle de développement, ce projet propose une alternative aux formes d'habitat
			dominantes : mutualisation des espaces et des ressources, mixité intergénérationnelle, ancrage
			local, et sobriété assumée. Un terreau fertile pour une vie plus écoresponsable et solidaire.
			🌱
		</p>
	</section>

	<section id="plans">
		<h2>Plans</h2>
		<img src="/images/resized/004d_Option_subdivision.jpg" alt="" />
	</section>

	<section class="full">
		<ImagesRow items={data.imageGroupDimensions[2]} />
		<ImagesRow items={data.imageGroupDimensions[3]} />
	</section>
</div>

<style lang="scss">
	.image-overlay {
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fbfaf8;
		width: 100%;
		height: 100%;
		z-index: 100;
		padding: 5rem;
		box-sizing: border-box;
		cursor: pointer;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	.anchor {
		color: black;
		text-decoration: none;
	}

	.page {
		display: flex;
		flex-direction: column;
		gap: 4rem;
		padding-bottom: 4rem;
	}

	.hero {
		width: 100%;
		height: 100vh;
		height: 100svh;
		display: flex;
		position: relative;
		background-color: white;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			opacity: 0.4;
		}

		.title {
			position: absolute;
			top: 0;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 10;
			text-align: center;
			max-width: 35rem;
			width: 100%;

			h1 {
				font-size: 6rem;
				margin: 0;
				font-weight: 200;
			}

			p {
				font-size: 1.5rem;
				font-weight: 500;
			}
		}

		a {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translate(-50%, 0%);
			font-size: 6rem;
			font-weight: 100;
		}
	}

	section {
		width: 100%;
		max-width: 60rem;
		margin: auto;
		padding: 0 1rem;
		font-size: 1.5rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 4rem;

		&.full {
			max-width: initial;
			padding: 0;
		}

		h2 {
			font-weight: 200;
			/* text-align: center; */
			font-size: 3rem;
			margin: 0;
		}

		.text {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		p {
			margin: 0;
		}

		ul {
			/* max-width: 40rem; */
			/* list-style: none; */
			/* padding: 0; */
			margin: 0 0;
			padding: 0 4rem;
			font-weight: 200;

			li {
				h3 {
					font-size: inherit;
					margin: 0;
					font-weight: 500;
				}
			}

			li + li {
				margin-top: 0.8rem;
			}
		}

		:global {
			img {
				width: 100%;
				cursor: pointer;
			}
		}
	}

	@media screen and (max-width: 600px) {
		.image-overlay {
			padding: 1rem;
		}

		section {
			&.full {
				padding: 1rem;
			}

			ul {
				padding: 0 2rem;
			}
		}
	}
</style>
