const $social = document.getElementById('social');
const $links = document.getElementById('links');
const $name = document.querySelector('h1');
const $nickname = document.getElementById('nickname');
const $description = document.getElementById('description');
const $footer = document.getElementById('footer');
const $mision = document.getElementById('mision');

const data = {
    name: "Hugo Herrera Coach",
    nickname: "@hugoherreracoach",
    description: "Entrenador de ventas - Conferencista - Apasionado del emprendimiento",
    mision: "Ayudo y capacito a emprendedores en ventas, oratoria y habilidades sociales a través de contenido gratuito y entrenamientos personalizados.",
    avatar: "...",
    social: [
    {
        name: "Whatsapp",
        url: "https://wa.link/15i2xx",
        path: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z",
        viewbox: "0 0 24 24",
        colorIcon: "#25D366",
    },
    {
        name: "TikTok",
        url: "https://www.tiktok.com/@hugoherreracoach",
        path: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z",
        viewbox: "0 0 448 512",
        colorIcon: "#010101",
    },
    {
        name: "Facebook",
        url: "https://facebook.com/hugoherreracoach",
        path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
        viewbox: "0 0 24 24",
        colorIcon: "#3B5998",
    },
    {
        name: "Instagram",
        url: "https://instagram.com/hugoherreracoach",
        path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
        viewbox: "0 0 24 24",
        colorIcon: "#E4405F",
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@hugoherreracoach",
        path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
        viewbox: "0 0 24 24",
        colorIcon: "#FF0000",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hugoherreracoach/",
        path: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        viewbox: "0 0 448 512",
        colorIcon: "#0077b5",
    },
    ],
    links: [
        {
            name: "Entrenamientos",
            url: "./entrenamientos",
            color: "violet",
            emoji: "🎓",
        },
        {
            name: "Curso Digital",
            url: "./metodo-olimpo",
            color: "red",
            emoji: "📚a",
        },
        {
            name: "Contacto",
            url: "./eventos",
            color: "green",
            emoji: "📞",
        },
        {
            name: "Sobre mí",
            url: "./premios",
            color: "gray",
            emoji: "🏆",
        },
    ],
    footer: "Copyright © 2023 🚀 Hugo Herrera Coach",
};

const main = () =>{
    let name = document.createTextNode(data?.name);
    let nickname = document.createTextNode(data?.nickname);
    let description = document.createTextNode(data?.description);
    let mision = document.createTextNode(data?.mision);
    let footer = document.createTextNode(data?.footer);
    let social = data?.social?.map((redsocial) => {
        return `<a href="${redsocial.url}" target="_blank">
        <svg class="w-6 h-6 cursor-pointer text-gray-400 hover:text-[${redsocial.colorIcon}] fill-current" viewBox="${redsocial.viewbox}"
        xmlns="http://www.w3.org/2000/svg">
        <title>${name}</title>
        <path
            d="${redsocial.path}" />
        </svg>
    </a>`
    }).join('');
    let links = data?.links?.map((link) => {
        return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.url}" target="_blank">
            ${link.name}
        </a>
        <span>${link.emoji}</span>
        </div>`;
    }).join('');
    let socialSection = document.createElement('Section');
    socialSection.classList = "mt-6 flex space-x-4";
    socialSection.innerHTML = social;
    $social.appendChild(socialSection);
    let linksSection = document.createElement('Section');
    linksSection.innerHTML = links;
    $links.appendChild(linksSection);
    $name.appendChild(name);
    $nickname.append(nickname);
    $description.appendChild(description);
    $mision.appendChild(mision);
    $footer.appendChild(footer);
}

main();