document.addEventListener('DOMContentLoaded', function() {
    // 获取时钟容器
    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');
    const greetingElement = document.querySelector('.greeting');

    // 如果某个元素没有被找到，停止执行
    if (!timeElement || !dateElement || !greetingElement) {
        console.error('时钟元素未找到！');
        return;
    }

    // 获取当前时间和日期
    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const day = now.getDate();
        const month = now.getMonth() + 1; // 月份从0开始
        const year = now.getFullYear();
        const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        const weekday = weekdays[now.getDay()];

        // 更新时钟
        timeElement.textContent = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        // 更新日期和星期
        dateElement.textContent = `${year}年${month}月${day}日 ${weekday}`;
        
        // 问候语
        if (hours < 12 & hours > 4) {
            greetingElement.textContent = '上午好！';
        } else if (hours == 12){
            greetingElement.textContent = '中午好！';
        } else if (hours > 12 & hours < 18){
            greetingElement.textContent = '下午好！';
        } else if (hours > 18 | hours < 4){
            greetingElement.textContent = '晚上好！';
        }
    }

    // 每秒更新一次时间
    setInterval(updateTime, 1000);
    // 初始加载时也更新一次
    updateTime();
});
