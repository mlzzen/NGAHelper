export default function createFollowingListPanel(followingList) {
    let followListButton = document.createElement('div');
    followListButton.innerHTML = '<a href="javascript:void(0)" class="mmdefault " title="关注列表" style="color: gray;' +
        ' white-space: nowrap;">关注列表</a>';
    followListButton.className = 'td';
    let nav = document.querySelector('.right');
    nav && nav.appendChild(followListButton);
    let followListPanel = document.createElement('div');
    followListPanel.className = 'follow-list-panel';
    followListPanel.style.display = 'none';
    let followListUl = document.createElement('ul');
    followListUl.className = 'list-panel-ul';
    followingList.forEach(item => {
        let followItem = document.createElement('li');
        followItem.className = 'panel-ul-item';
        followItem.innerHTML = `<a href="http://bbs.nga.cn/nuke.php?func=ucp&uid=${item.uid}">用户名:${item.username} uid:${item.uid}</a>`;
        followListUl.appendChild(followItem);
    });
    followListPanel.appendChild(followListUl);
    document
        .body
        .appendChild(followListPanel);
    document.querySelectorAll('.right .td')[8].onclick = () => {
        followListPanel.style.display = 'block';
    };
}
//# sourceMappingURL=following-list-panel.js.map