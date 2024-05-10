<script lang="ts">
  import type { BlogContentData } from "src/types/blog";
  import BaseCard from "./BaseCard.svelte";
  import type { Snippet } from "svelte";
  import { slugify } from "src/utils/slugify";
  import dayjs from "dayjs";

  interface Props {
    data: BlogContentData;
    children: Snippet;
  }
  let { data, children }: Props = $props();
  let tags = data.tags ?? [];
</script>

<BaseCard className="p-4 flex flex-col items-center">
  <h1 class="text-4xl font-bold text-center block">{data.title}</h1>
  <div class="text-center block font-medium text-lg">
    {dayjs(data.pubDate).format("MMM DD, YYYY")}
  </div>
  <div class="flex flex-wrap mt-2 items-start justify-center gap-2">
    <div class="mr-2">Tags:{tags.length ? "" : " -"}</div>
    {#each tags as tag}
      <a
        class="btn rounded-full btn-xs btn-success"
        href="/blog/tag/{slugify(tag)}">{tag}</a
      >
    {/each}
  </div>
  <img
      src={data.image}
      class="object-cover rounded-2xl w-full max-w-xl aspect-video mt-4"
      alt={data.title}
    />
  <div class="w-full max-w-4xl">
    <hr class="my-8 h-1" />
    <article class="prose max-w-full">
      {@render children()}
    </article>
  </div>
</BaseCard>
