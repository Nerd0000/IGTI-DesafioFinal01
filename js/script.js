let users = [];

window.addEventListener('load', () => {

    const inputUsers = document.querySelector('#inputUsers');
    doFetch();
});

async function doFetch() {
    const res = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');
    const json = await res.json();

    console.log(json);

}