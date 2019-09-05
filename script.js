const url = 'https://jsonplaceholder.typicode.com/photos';

async function fetchAsyncPhoto() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        data.length = 20;

        for (let key in data) {
            let out = '';
            out += `<img src=" ${data[key].url}">`;
            out += `Title: ${data[key].title}`;
            let div = document.createElement('div');
            div.innerHTML = out;
            block.append(div);
            div.classList.add('photo');
            div.classList.add('col-xs-12');
            div.classList.add('col-sm-12');
            div.classList.add('col-md-6');
            div.classList.add('col-lg-4');
            div.classList.add('col-xl-3');
        }
        let result = document.getElementById('result');
        result.innerHTML = `Всего запсей:  ${data.length}`;

    } catch (e) {
        console.error(e);
    }
}
fetchAsyncPhoto();