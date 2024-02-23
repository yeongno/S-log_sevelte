<script>
  import Comment from "./Comment.svelte";
</script>

<!-- slog-comment-wrap start-->
<div class="slog-comment-wrap">
  <!-- slog-comment-box start-->
  <div class="slog-comment-box">
    <div class="comment-box-header">
      <div class="content-box-header-inner-left">
        <p class="p-user">freeseamew</p>
        <p class="p-date">2022-11-11</p>
      </div>
    </div>

    <div class="comment-box-main">
      <p class="whitespace-pre-line">
        Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat
        eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur
        elit cillum esse. Pariatur occaecat nisi laboris tempor laboris eiusmod
        qui id Lorem esse commodo in. Exercitation aute dolore deserunt culpa
        consequat elit labore incididunt elit anim.
      </p>
      <div class="inner-button-box">
        <button class="button-base">글 목록 보기</button>
      </div>
    </div>

    <div class="commnet-list-box">
      <h1 class="comment-title">Comments</h1>
      <ul class="my-5">
        <Comment />
      </ul>
    </div>

    <div class="comment-box-bottom">
      <textarea
        id="message"
        rows="5"
        class="slog-content-textarea"
        placeholder="내용을 입력해 주세요."
      ></textarea>
      <div class="button-box-full">
        <button class="button-base">입력</button>
      </div>
    </div>
  </div>
  <!-- slog-comment-box end -->
</div>
<!-- slog-comment-wrap end-->
