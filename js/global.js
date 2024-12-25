// 创建弹窗
function createGlobalAd() {
    // 创建遮罩层
    const overlay = document.createElement('div');
    overlay.id = 'globalAd';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    // 创建弹窗内容容器
    const popup = document.createElement('div');
    popup.style.background = '#fff';
    popup.style.borderRadius = '10px';
    popup.style.overflow = 'hidden';
    popup.style.width = '300px';
    popup.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    popup.style.textAlign = 'center';

    // 创建顶部区域
    const heroImg = document.createElement('div');
    heroImg.style.background = 'linear-gradient(to left, #ffaec9, #ffaec9)';
    heroImg.style.height = '100px';

    // 创建头像区域
    const profileImg = document.createElement('div');
    profileImg.style.margin = '-40px auto 0';
    profileImg.style.width = '80px';
    profileImg.style.height = '80px';
    profileImg.style.borderRadius = '50%';
    profileImg.style.overflow = 'hidden';
    profileImg.style.border = '3px solid #fff';

    const img = document.createElement('img');
    img.src = 'img/0.gif'; // 替换为实际图片路径
    img.style.width = '100%';
    img.style.height = '100%';
    profileImg.appendChild(img);

    // 创建内容区域
    const content = document.createElement('div');
    content.style.padding = '20px';
    content.style.fontFamily = 'Arial, sans-serif';

    const title = document.createElement('p');
    title.textContent = '柚柚应用分享';
    title.style.fontSize = '16px';
    title.style.fontWeight = 'bold';
    content.appendChild(title);

    const messages = [
        '咳咳，只是一个弹窗',
        '显得高级而已啦',
        '没有什么的东西啦',
        '真的没有了啦！',
        '-----------------------------------',
    ];

    messages.forEach((msg) => {
        const p = document.createElement('p');
        p.textContent = msg;
        p.style.margin = '10px 0';
        p.style.color = '#555';
        content.appendChild(p);
    });

    // 创建按钮
    const btnClose = document.createElement('a');
    btnClose.textContent = '我知道了';
    btnClose.style.display = 'inline-block';
    btnClose.style.padding = '10px 20px';
    btnClose.style.margin = '10px 5px';
    btnClose.style.color = '#fff';
    btnClose.style.backgroundColor = '#ffaec9';
    btnClose.style.borderRadius = '5px';
    btnClose.style.textDecoration = 'none';
    btnClose.style.cursor = 'pointer';
    btnClose.onclick = () => document.body.removeChild(overlay);

    const btnFeedback = document.createElement('a');
    btnFeedback.textContent = '留言反馈';
    btnFeedback.href = '#';
    btnFeedback.style.display = 'inline-block';
    btnFeedback.style.padding = '10px 20px';
    btnFeedback.style.margin = '10px 5px';
    btnFeedback.style.color = '#fff';
    btnFeedback.style.backgroundColor = '#ffaec9';
    btnFeedback.style.borderRadius = '5px';
    btnFeedback.style.textDecoration = 'none';
    btnFeedback.style.cursor = 'pointer';
    btnFeedback.onclick = () => {
        alert('跳转到留言反馈页面！');
        // 示例跳转地址
        window.location.href = 'feedback.html';
    };

    content.appendChild(btnClose);
    content.appendChild(btnFeedback);

    // 将所有元素组装
    popup.appendChild(heroImg);
    popup.appendChild(profileImg);
    popup.appendChild(content);
    overlay.appendChild(popup);

    // 添加到页面
    document.body.appendChild(overlay);
}

// 页面加载后自动显示弹窗
window.onload = () => {
    createGlobalAd();
};
