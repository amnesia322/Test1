let users = []

/*const getDataFromApi = async () => {
    try {
        const data = await fetch('https://reqres.in/api/users', {method: 'GET'})
        const usersData = await data.json()
        let arr = usersData.data.sort((a, b) => {
            if (a.first_name.toLowerCase() < b.first_name.toLowerCase()) {
                return -1;
            }
            if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) {
                return 1;
            }
            return 0;
        })
        return  arr
    } catch (err) {
        console.log(err)
    }

}*/


fetch('https://reqres.in/api/users', {method: 'GET'})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then(json => initialize(json))
    .catch(err => console.error(`Fetch problem: ${err.message}`));


const paginationBtn = document.querySelectorAll('.pagination_btn')
paginationBtn.forEach(item => item.addEventListener('click', () => loadPageHandler(item.value)))

function loadPageHandler(page) {
    fetch(`https://reqres.in/api/users?page=${page}`, {method: 'GET'})
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then(json => initialize(json))
        .catch(err => console.error(`Fetch problem: ${err.message}`));
}


function initialize(product) {
    product.data.sort((a, b) => {
        if (a.first_name.toLowerCase() < b.first_name.toLowerCase()) {
            return -1;
        }
        if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) {
            return 1;
        }
        return 0;
    })
    const main = document.querySelector('main');
    main.replaceChildren()
    showProduct(product)

    function showProduct(product) {

        product.data.map((el) => {
            const section = document.createElement('section');
            const heading = document.createElement('h2');
            const para = document.createElement('p');
            const image = document.createElement('img');

            heading.textContent = el.first_name

            para.textContent = el.email

            image.src = el.avatar;
            image.alt = el.last_name;

            main.appendChild(section);
            section.appendChild(heading);
            section.appendChild(para);
            section.appendChild(image);
        })


    }
}
