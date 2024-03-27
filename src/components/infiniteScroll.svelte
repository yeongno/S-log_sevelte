<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import ArticleLoading from "./ArticleLoading.svelte";
  import { articlePageLock } from "../stores";

  export let totalPageCount;
  export let currentPage;
  export let pageLock;
  export let loading;
  export let domTarget;

  let component;
  let element;

  const dispatch = createEventDispatcher();

  onMount(() => {
    component = document.querySelector(domTarget);
    element = component.parentNode;
  });

  onDestroy(() => {
    if (element) {
      element.removeEventListener("scroll", onScroll);
      element.removeEventListener("resize", onScroll);
    }
  });
  $: {
    if (element) {
      element.addEventListener("scroll", onScroll);
      element.addEventListener("resize", onScroll);
    }
  }

  const onScroll = (e) => {
    const scrollHeight = e.target.scrollHeight;
    const clientHeight = e.target.clientHeight;
    const scrollTop = e.target.scrollTop;
    const realHeight = scrollHeight - clientHeight;
    const triggerHeight = realHeight * 0.7;

    const triggerComputed = () => {
      return scrollTop > triggerHeight;
    };

    //현재 페이지가 전체페이지보다 작거나 같으면 true 리턴
    const countCheck = () => {
      const check = totalPageCount <= currentPage;
      return check;
    };

    //countCheck를 이용해 현재페이지가 페이지 마지막일 경우 articlePageLock을 true로 해서 이를 통해 더이상 페이지가 로딩되지 않게 합니다
    if (countCheck()) {
      dispatch("onPageLock");
    }

    const scrollTrigger = () => {
      return triggerComputed() && !countCheck() && !pageLock;
    };

    if (scrollTrigger()) {
      dispatch("increPage");
    }
  };
</script>

{#if loading}
  <ArticleLoading />
{/if}
