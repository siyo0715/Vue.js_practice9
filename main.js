new Vue({
    el: '#app',
    data: {
        number: 0,
        x: 0,
        y:0
    },
    methods: {
        // 掛け算(2倍)
        countUp: function (Hangs) {
            this.number += 1 * Hangs
        },
        changeMousePosition: function (divideNumber, event) {
            this.x = event.clientX / divideNumber;
            this.y = event.clientY / divideNumber;
        },
        // イベント修飾子
        noEvent: function (event) {
            // hairskillのページを開けないようにする
            // preventDefaultでデフォルトの動作を妨げる
            event.preventDefault();
        },
        myAlert() {
            alert('アラート!')
        }
    }
})
// イベントを使ってカウントアップ
new Vue({
    el: '#test',
    data: {
        number: 0,
        event: 'click'
    },
    methods: {
        countUp: function () {
            this.number += 1;
        }
    }
})