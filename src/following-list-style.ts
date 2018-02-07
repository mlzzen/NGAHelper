export default function writeStyle() {
    let style : HTMLStyleElement = document.createElement('style');
    style.innerText = '\
        body{\
            position: relative;\
        }\
        .follow-list-panel{\
            position: fixed;\
            width: 800px;\
            margin: auto;\
            background: #f5e8cb;\
            left: 0;\
            top: 0;\
        }\
    ';
    document
        .head
        .appendChild(style);
}
