<script lang="ts">
    import "../app.css";
    import "uno.css";
    import "@fontsource/poppins";
    import ChampSelection from "../components/ChampSelection.svelte";
    import ChampionComponent from "../components/ChampionComponent.svelte";
    import type { Champion } from "../types";

    let version: string;
    let currentChampion: Champion;

    fetch("https://ddragon.leagueoflegends.com/api/versions.json")
        .then((res) => res.json())
        .then((data) => {
            version = data[0];
        });
</script>

<div class="w-full h-full font-poppins text-white flex flex-col">
    <div class="w-full text-center text-2xl font-500 py-4">loldicas</div>

    {#if version}
        {#if currentChampion}
            <ChampionComponent champion={currentChampion} {version} />
        {:else}
            <ChampSelection
                {version}
                selectChampion={(champion) => (currentChampion = champion)}
            />
        {/if}
    {/if}
</div>
