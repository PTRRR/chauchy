<script module lang="ts">
	export type ImageRowsItem = {
		url: string;
		width: string;
	};
</script>

<script lang="ts">
	interface Props {
		items: ImageRowsItem[];
	}

	const { items }: Props = $props();
</script>

<div class="images-row">
	<div class="content">
		{#each items as item}
			<div class="item" style="width: {item.width};">
				<img src={item.url} alt="" />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.images-row {
		overflow: hidden;

		.content {
			display: flex;
			margin: -0.25rem;

			.item {
				padding: 0.25rem;
				display: flex;

				img {
					width: 100%;
				}
			}
		}

		@media screen and (max-width: 600px) {
			.content {
				flex-direction: column;
				margin: 0;
				gap: 1rem;

				.item {
					padding: 0;
					width: 100% !important;
				}
			}
		}
	}
</style>
