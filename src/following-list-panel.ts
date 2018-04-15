import {Following} from './types';
function updateFollowingListPanel(followingList : Following[]) {

    let followListUl : HTMLUListElement = document.querySelector('ul.list-panel-ul');
    followingList.forEach(item => {
        let followItem : HTMLLIElement = document.createElement('li');
        followItem.className = 'panel-ul-item';
        followItem.innerHTML = `<a href="http://bbs.nga.cn/nuke.php?func=ucp&uid=${item.uid}">用户名:${item.username} uid:${item.uid}</a>`
        followListUl.appendChild(followItem);
    });
}

function createFollowingListPanel() {
    console.log('创建关注列表');
    let followListPanel : HTMLDivElement = document.createElement('div');
    followListPanel.className = 'follow-list-panel';
    followListPanel.style.display = 'none';
    let followListUl : HTMLUListElement = document.createElement('ul');
    followListUl.className = 'list-panel-ul';
    followListPanel.appendChild(followListUl);
    document
        .body
        .appendChild(followListPanel);
}
function createFollowingListButton() {
    let followListButton : HTMLDivElement = document.createElement('div');
    followListButton.innerHTML = '<a href="javascript:void(0)" class="mmdefault " \
    title="关注列表" style="color:' +
            ' gray; white-space: nowrap;">关注列表</a>';
    followListButton.className = 'td';
    let nav : HTMLElement = document.querySelector('.right')as HTMLElement;
    nav.appendChild(followListButton);
    (document.querySelectorAll('.right .td')[4]as HTMLElement).onclick = () => {
        let followListPanel : HTMLUListElement = document.querySelector('div.follow-list-panel');
        followListPanel.style.display = 'block';
        // updateFollowingListPanel();
    }
}

export {createFollowingListPanel, createFollowingListButton, updateFollowingListPanel}
