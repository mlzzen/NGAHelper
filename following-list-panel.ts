import {Following} from './types';
export default function createFollowingListPanel(followingList : Following[]) {
    let followListButton : HTMLDivElement = document.createElement('div');
    followListButton.innerHTML = '<a href="javascript:void(0)" class="mmdefault " title="关注列表" style="color: gray;' +
            ' white-space: nowrap;">关注列表</a>';
    followListButton.className = 'td';
    let nav:HTMLElement = document.querySelector('.right') as HTMLElement;
    nav&&nav.appendChild(followListButton);

    let followListPanel : HTMLDivElement = document.createElement('div');
    followListPanel.className = 'follow-list-panel';
    followListPanel.style.display = 'none';
    let followListUl : HTMLUListElement = document.createElement('ul');
    followListUl.className = 'list-panel-ul';
    followingList.forEach(item => {
        let followItem : HTMLLIElement = document.createElement('li');
        followItem.className = 'panel-ul-item';
        followItem.innerHTML = `<a href="http://bbs.nga.cn/nuke.php?func=ucp&uid=${item.uid}">用户名:${item.username} uid:${item.uid}</a>`
        followListUl.appendChild(followItem);
    });
    followListPanel.appendChild(followListUl);
    document
        .body
        .appendChild(followListPanel);
    (document.querySelectorAll('.right .td')[8]as HTMLElement).onclick = () => {
        followListPanel.style.display = 'block';
    }
}