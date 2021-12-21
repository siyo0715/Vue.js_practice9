new Vue({
    el: '#app',
    data: {
        number: 0,
        x: 0,
        y:0
    },
    methods: {
        countUp: function () {
            this.number += 1
        },
        changeMousePosition: function (e) {
            this.x = e.clientX;
            this.y = e.clientY;
        }
    }
})