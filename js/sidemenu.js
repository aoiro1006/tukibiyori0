// document.addEventListener('DOMContentLoaded', (event) => {
//     const btn = document.getElementById('btn');

//     function sideMenu() {
//         const sideMenu = document.getElementById('sideMenu');
//         sideMenu.style.bottom = '0%';
//         console.log('OK');
//     }

//     if (btn) {
//         btn.addEventListener('click', sideMenu);
//     } else {
//         console.log('Button element not found');
//     }
// });

function addEventListeners() {
    const btn = document.getElementById('btn');
    if (btn) {
        console.log('Button element found, adding event listener');
        btn.addEventListener('click', function() {
            const sideMenu = document.getElementById('sideMenu');
            if (sideMenu.style.bottom <= '-649%') {
                sideMenu.style.bottom = '-650%';
                console.log('Side menu shown');
            } else {
                sideMenu.style.bottom = '-1000%';
                console.log('Side menu element not found');
            }
        });
    } else {
        console.log('Button element not found');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // `DOMContentLoaded`イベントが発生したときに実行する内容があればここに追加
});
