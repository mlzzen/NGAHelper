import writeStyle from "./following-list-style"; //导入样式
import {Following} from "./types";
import initData from "./localData"; //初始化本地储存数据的方法
import {createFollowingListPanel, createFollowingListButton, updateFollowingListPanel} from "./following-list-panel"; //关注列表元素生成及事件
import createFollowButton from "./follow";
window.onload = async function () {
    writeStyle(); //写入样式
    let followingList : Following[] = await initData(); //是否初始化本地数据
    createFollowingListPanel(); //关注列表元素生成及事件
    updateFollowingListPanel(followingList);
    createFollowingListButton();//
    createFollowButton(followingList); //关注按钮及事件
    console.log('插件开始运作');
}