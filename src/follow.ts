import {Following} from './types';
export default function createFollowButton(followingList : Following[]) {
    let matchArray : RegExpMatchArray | null = location
        .search
        .match(/uid=([\d]{1,})/);
    let uid : string | null = matchArray && matchArray[1];
    if (uid) {
        let isFollowing : boolean = followingList.find((value) => value.uid == uid)
            ? true
            : false;
        let infoWrapper = document.querySelector('.info');
        let followButton = document.createElement('li');
        if (isFollowing) {
            followButton.innerHTML = '<li style="width: 240px;" class="following">关注中</li>';
            infoWrapper&&infoWrapper.appendChild(followButton);
        } else {
            followButton.innerHTML = '<li style="width: 240px;">+关注</li>';
            infoWrapper&&infoWrapper.appendChild(followButton);
        }
        followButton.onclick = (e) => {
            let that = e.target as HTMLElement;
            if (that.classList.contains('following')) {
                that.innerHTML = '<li style="width: 240px;">+关注</li>';
                followingList.splice(followingList.findIndex((item : Following) => {
                    return item.uid == uid
                }));
            } else {
                that.innerHTML = '<li style="width: 240px;" class="following">关注中</li>';
                let imgUrl : string = (document.querySelector('#ucpuser_avatar_blockContent img')as HTMLImageElement).src;
                let username : string = (document.querySelectorAll('.info li')[1].querySelector('span>span')as HTMLElement).innerText;
                followingList.push({uid: uid  as string, imgUrl: imgUrl, username: username});
            }
            localStorage.setItem('helpData', JSON.stringify({'followingList': followingList}));
        }
    }
}