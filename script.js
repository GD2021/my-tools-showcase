// script.js
document.addEventListener('DOMContentLoaded', function() {
    const tools = [
        {
            name: '工具一：JSON格式化',
            description: '一个简单易用的JSON在线格式化和校验工具。',
            // 假设你的工具文件在 "tools/json-formatter/index.html"
            url: 'tools/json-formatter/index.html',
            icon: ' J ' // 可以用Emoji或文字作为简单图标
        },
        {
            name: '工具二：Base64 编码/解码',
            description: '快速进行文本和文件的Base64编码和解码。',
            url: 'tools/base64-encoder/index.html',
            icon: ' B '
        },
        {
            name: '工具三：Markdown编辑器',
            description: '实时预览的Markdown在线编辑器。',
            url: 'tools/md-editor/index.html',
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