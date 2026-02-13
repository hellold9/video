const videos = [
  {
    title: "示例视频 1",
    file: "video1.mp4",
    cover: "cover/cover1.jpg",
    desc: "这是示例视频1的简介内容。"
  },
  {
    title: "示例视频 2",
    file: "video2.mp4",
    cover: "cover/cover2.jpg",
    desc: "这是示例视频2的简介内容。"
  }
];

const params = new URLSearchParams(window.location.search);
const videoFile = params.get("video");

const player = document.getElementById("videoPlayer");
const title = document.getElementById("videoTitle");
const desc = document.getElementById("videoDesc");
const recommendList = document.getElementById("recommendList");

let currentVideo = videos.find(v => v.file === videoFile) || videos[0];

player.src = "video/" + currentVideo.file;
title.textContent = currentVideo.title;
desc.textContent = currentVideo.desc;

// 生成推荐列表
videos.forEach(video => {
  if (video.file !== currentVideo.file) {
    const item = document.createElement("div");
    item.className = "recommend-item";
    item.innerHTML = `
      <img src="${video.cover}">
      <div class="recommend-info">${video.title}</div>
    `;
    item.onclick = () => {
      window.location.href = `watch.html?video=${video.file}`;
    };
    recommendList.appendChild(item);
  }
});