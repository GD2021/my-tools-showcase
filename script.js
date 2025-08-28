// script.js
document.addEventListener('DOMContentLoaded', function() {
    const tools = [
        {
            name: '工具一：条形码标签生成器',
            description: '一个简单易用的条形码标签批量生成器。',
            // 假设你的工具文件在 "tools/json-formatter/index.html"
            url: 'tools/biaoqian/bianqian.html',
            icon: ' J ' // 可以用Emoji或文字作为简单图标
        },
        {
            name: '工具二：图片编辑器01-加框',
            description: '快速进行图片加边框。',
            url: 'tools/image-jiakuang-gemini/Gemini.html',
            icon: ' B '
        },
        {
            name: '工具三：图片编辑器02-加框',
            description: '快速进行图片加边框。',
            url: 'tools/image-jiakuang-geminiok/Geminii.html',
            icon: ' M '
        }
        // 在这里添加更多你的工具...
    ];

    const grid = document.getElementById('tools-grid');

    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
            <div class="tool-card-image">${tool.icon}</div>
            <div class="tool-card-content">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
            </div>
            <div class="tool-card-actions">
                <a href="${tool.url}" target="_blank">立即使用</a>
            </div>
        `;
        grid.appendChild(card);
    });

});
