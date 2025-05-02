// script.js
document.addEventListener('mousemove', (event) => {
    const cursor = document.querySelector('.cursor');
    // 考虑光标60px尺寸，将中心点对齐到网格
    const gridX = Math.round((event.pageX - 30) / 60) * 60 + 30;
    const gridY = Math.round((event.pageY - 30) / 60) * 60 + 30;
    
    cursor.style.left = `${gridX}px`;
    cursor.style.top = `${gridY}px`;
});
  
  // 文字切换功能
  const toggleText = document.querySelector('.toggle-text');
  let currentIndex = 0;
  const texts = ['LauncherX', 'CMFS', '知识库', '更多项目'];
  setInterval(() => {
    toggleText.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }, 3000);
  