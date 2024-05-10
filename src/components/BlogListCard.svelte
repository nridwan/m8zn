<script lang="ts">
  import type { BlogContent } from "src/types/blog";
  import BaseCard from "./BaseCard.svelte";
  import { slugify } from "src/utils/slugify";
  import dayjs from "dayjs";

  interface Props {
    post: BlogContent;
  }
  let { post }: Props = $props();
  let tags = post.data.tags ?? [];
</script>

<BaseCard className="p-4 mb-4 flex max-sm:flex-col">
  <div class="flex-1">
    <a href={"/blog/" + post.slug} class="text-xl block">
      <div class="font-semibold">{post.data.title}</div>
      <div class="mt-2 text-lg">{post.data.description}</div>
      <div class="badge badge-info">
        {dayjs(post.data.pubDate).format("MMM DD, YYYY")}
      </div>
    </a>
    <div class="flex mt-2 items-start">
      <div class="mr-2">Tags:{tags.length ? "" : " -"}</div>
      <div class="flex flex-wrap gap-2">
        {#each tags as tag}
          <a
            class="btn rounded-full btn-xs btn-success"
            href="/blog/tag/{slugify(tag)}">{tag}</a
          >
        {/each}
      </div>
    </div>
  </div>
  {#if post.data.image}
    <a href={"/blog/" + post.slug} class="ml-4 max-sm:mt-4 max-sm:self-end"
      ><img
        src={post.data.image}
        class="object-cover rounded-2xl w-36 aspect-video"
        alt={post.data.title}
      />
    </a>
  {/if}
</BaseCard>
