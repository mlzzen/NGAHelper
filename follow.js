export default function createFollowButton(followingList) {
    let uid = location
        .search
        .match(/uid=([\d]{1,})/)[1];
    if (uid) {
        let isFollowing = followingList.find((value) => value.uid == uid)
            ? true
            : false;
        let infoWrapper = document.querySelector('.info');
        let followButton = document.createElement('li');
        if (isFollowing) {
            followButton.innerHTML = '<li style="width: 240px;" class="following">关注中</li>';
            infoWrapper.appendChild(followButton);
        }
        else {
            followButton.innerHTML = '<li style="width: 240px;">+关注</li>';
            infoWrapper.appendChild(followButton);
        }
        followButton.onclick = (e) => {
            let that = e.target;
            if (that.classList.contains('following')) {
                that.innerHTML = '<li style="width: 240px;">+关注</li>';
                followingList.splice(followingList.findIndex((item) => {
                    return item.uid == uid;
                }));
            }
            else {
                that.innerHTML = '<li style="width: 240px;" class="following">关注中</li>';
                let imgUrl = document.querySelector('#ucpuser_avatar_blockContent img').src;
                let username = document.querySelectorAll('.info li')[1].querySelector('span>span').innerText;
                followingList.push({ uid: uid, imgUrl: imgUrl, username: username });
            }
            localStorage.setItem('helpData', JSON.stringify({ 'followingList': followingList }));
        };
    }
}
//# sourceMappingURL=follow.js.map