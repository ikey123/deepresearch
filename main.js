// 全局变量
const GLOBE_CONFIG = {
    width: 800,
    height: 600,
    rotationSpeed: 0.01
};

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    initializeGlobe();
    setupAnimations();
    loadDynamicContent();
});

// 3D地球可视化
function initializeGlobe() {
    const container = d3.select('#globe-container');
    // D3.js globe visualization code here
}

// 动态加载内容
function loadDynamicContent() {
    const solutionsSection = document.getElementById('solutions');
    const solutions = [
        {
            title: '学术研究增强',
            description: '利用AI技术提升研究效率',
            icon: '📚'
        },
        // 更多解决方案
    ];

    solutions.forEach(solution => {
        const solutionCard = createSolutionCard(solution);
        solutionsSection.appendChild(solutionCard);
    });
}

// 页面滚动动画
function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
} 