const mx = document.getElementById('binaryMatrix');
const data = mx.getContext('2d');

mx.width = window.innerWidth;
mx.height = window.innerHeight;

const size = 20;
var col = mx.width / size;

const binary = '01';

var drop = [0];

for (let i = 0; i < col; i++) {
    drop[i] = 0;
}


let matrix = () => {
    data.fillStyle = 'rgba(0, 0, 0, 0.05)'; // RGB with opacity
    data.fillRect(0, 0, mx.width, mx.height);

    data.fillStyle = 'rgb(0,255,0)'; // RBG Green
    data.font = size + 'px fantasy';

    for (let i = 0; i < drop.length; i++) {
        if (Math.random() > 0.985) {
            drop[i] = 0;
        }
        drop[i]++;

        var bin = binary.charAt(Math.floor(Math.random() * binary.length));
        data.fillText(bin, i * size, drop[i] * size);
    }

};
setInterval(matrix, 40);
