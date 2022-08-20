<script lang="ts">
    export let version: string;
    export let selectChampion: (champion: Champion) => void;

    import type { Champion } from "../types";
    let champions: Champion[] = [];

    fetch(
        `https://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR/champion.json`
    )
        .then((res) => res.json())
        .then((champData: { data: { [key: string]: Champion } }) => {
            champions = Object.values(champData.data).sort(
                (a: Champion, b: Champion) => (a.name > b.name ? 1 : -1)
            );
            console.log(champions);
        });
</script>

<div class="flex flex-wrap justify-center">
    {#each champions as champion}
        <div class="mx-4 group" on:click={() => selectChampion(champion)}>
            <img
                src="https://ddragon.leagueoflegends.com/cdn/{version}/img/champion/{champion.id}.png"
                alt=""
                class="group-hover:(outline outline-3 outline-white cursor-pointer rotate-z-3) transition-transform"
            />
            <div class="mb-4 w-full text-center leading-tight">
                {champion.name}
            </div>
        </div>
    {/each}
</div>
