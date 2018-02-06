import { Following } from "./types";
export default function initData(followingList : Following[]) {
    let helpData : string = localStorage.getItem('helpData');
    if (helpData) {
        followingList = JSON
            .parse(helpData)
            .followingList;
    } else {
        localStorage.setItem('helpData', JSON.stringify({'followingList': []}));
    }
}