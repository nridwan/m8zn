<script lang="ts">
  interface Props {
    prev?: string;
    next?: string;
  }
  let { prev, next }: Props = $props();
</script>

<div class="flex justify-between">
  {#if prev}
    <a href={prev} class="btn bg-base-100 shadow-xl">
      {" "}
      <svg
        class="h-6 w-6 fill-current md:h-8 md:w-8"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
        />
      </svg>{" "}
      Recent posts
    </a>
  {:else}
    <div></div>
  {/if}
  {#if next}
    <a href={next} class="btn bg-base-100 shadow-xl">
      Older Posts{" "}
      <svg
        class="h-6 w-6 fill-current md:h-8 md:w-8"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        {" "}
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </a>
  {:else}
    <div></div>
  {/if}
</div>
