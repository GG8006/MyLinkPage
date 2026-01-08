// 页面加载完成后执行动画
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.links a');
    
    links.forEach((link, index) => {
        // 初始状态隐藏
        link.style.opacity = '0';
        link.style.transform = 'translateY(40px)';
        
        // 延迟逐个淡入
        setTimeout(() => {
            link.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 150 + index * 150);
    });

    // 可选：点击链接时打印到控制台（以后可以接统计）
    links.forEach(link => {
        link.addEventListener('click', () => {
            console.log('点击了链接:', link.textContent.trim());
        });
    });
});