export default function renderBlock({title, year}) {

    return `

    <div class='burned-container'>
        <h2 class='burned-head'>${title}</h2>

        <div class='burned-anim-div' data-country='${year}'>
            <img class='burned-anim burned-anim--2019' src='<%= path %>/${year}_2019-fs8.png' />
            <img class='burned-anim burned-anim--2020 burned-hidden' src='<%= path %>/${year}_2020-fs8.png' />
        </div>
    </div>

    `;
} 