<script lang="ts">
    import type { Champion } from "../types";

    export let champion: Champion;
    export let version: string;

    let allTips: { ally: string[]; enemy: string[] };
    let message: string;

    console.log(
        `https://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR/champion/${champion.id}.json`
    );

    fetch(
        `https://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR/champion/${champion.id}.json`
    )
        .then((data) => data.json())
        .then((data) => {
            allTips = {
                ally: data["data"][champion.id]["allytips"],
                enemy: data["data"][champion.id]["enemytips"],
            };

            if (allTips.ally.length === 0 && allTips.enemy.length === 0) {
                message =
                    "Infelizmente, a Riot Games não informa dicas para esse campeão :(";
            }

            console.log(allTips);
        });
</script>

<svelte:head>
    <title>{champion.name} - loldicas</title>
</svelte:head>

<div class="h-full flex items-center justify-center flex-wrap">
    <span
        class="text-2xl text-white absolute top-2 left-2 flex items-center cursor-pointer"
        on:click={() => window.location.reload()}
    >
        <div class="i-eva-arrow-back-outline" />
        <span> back </span>
    </span>
    <div class="mx-5">
        <div class="text-2xl font-500 text-center">{champion.name}</div>
        <div class="text-xs text-center mb-2 text-gray-3">
            - {champion.title}-
        </div>
        <img
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
            alt=""
            class="h-1/2"
        />
    </div>
    <div class="md:w-1/3 w-4/5 md:text-left text-center h-1/2 text-gray-3">
        {#if message}
            <div class="text-center">{message}</div>
        {:else if allTips}
            <div class="mb-5">
                <div class="text-2xl text-white">Aliado:</div>
                {#each allTips.ally as tip}
                    <hr class="bg-gray opacity-50" />
                    <div class="text-sm">{tip}</div>
                {/each}
            </div>
            <div>
                <div class="text-2xl text-white">Inimigo:</div>
                {#each allTips.enemy as tip}
                    <hr class="bg-gray opacity-50" />
                    <div class="text-sm">{tip}</div>
                {/each}
            </div>
        {:else}
            <div class="text-center">Carregando...</div>
        {/if}
    </div>
</div>
