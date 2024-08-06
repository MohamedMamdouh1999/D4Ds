const companies = [
    {
        id: 1,
        logo: 'media/images/company-1.svg',
        title: "MOC",
        about: "The Ministry of Commerce seeks to play a pivotal role in the growth and sustainability of the Kingdom's commercial sector and to keep up with the ever-evolving changes and developments in trade globally. The Ministry aims to strengthen the Kingdom's economic position as a preferred hub for trade in the Middle East and around the world.  Providing a comprehensive and integrated road map to fulfill its ambitious objective of leading the Saudi trading sector in a fair and stimulating environment. The Ministry's message centers around the crucial role it has been playing in enhancing the business climate in the Kingdom through the adoption, development, and oversight of flexible and fair commercial laws regulations, and policies, as well as the strengthening of strategic alliances with various relevant local and international authorities in order to strengthen the bonds of trust between the seller and the customer. By adhering to an integrated system of established values that place an emphasis on justice, respect for rights, creativity, teamwork, speed of response, and a constant effort to provide value-added services that exceed the expectations of all categories of customers, it helps to maximize the contribution of the commercial sector to the support and sustainability of the national economy.​"
    },
    {
        id: 2,
        logo: 'media/images/company-2.svg',
        title: "MOT",
        about: "The Ministry of Tourism started operations in 2000, focusing on long-term growth. Its main objective is to implement the kingdom's vision for tourism, along with facilitating successful collaborations and developing national human capital."
    },
    {
        id: 3,
        logo: 'media/images/company-3.svg',
        title: "NG",
        about: "The National Guard is an armed military force that contributes to defending the lands and borders of the Kingdom of Saudi Arabia and maintaining internal security and stability."
    },
    {
        id: 4,
        logo: 'media/images/company-4.svg',
        title: "SBA",
        about: "The Saudi Radio and Television Corporation is a Saudi government body that has a legal personality and financial independence affiliated with the Saudi Ministry of Information. It seeks to convey the message of the Kingdom of Saudi Arabia to all regions locally and globally through word and image, and to raise and develop the level of radio and television performance. It has several governmental and official television and radio channels, namely the Saudi Channel, the SBC Channel, the Memories Channel, the News Channel, the Saudi Sports Channels, the Holy Quran Channel, and the Prophet’s Sunnah Channel. Among the radio stations are the Holy Quran Radio, Jeddah Radio, Riyadh Radio, Call of Islam Radio, and Saudi Radio Radio. And Saudi international radio."
    },
    {
        id: 5,
        logo: 'media/images/company-5.svg',
        title: "MOMRAH",
        about: "The Ministry Of Municipal And Rural Affairs Was Established In 1395 AH / 1975 AD By Royal Decree No. (A/266) Dated 8/10/1395 AH And Was Entrusted With The Responsibility Of Urban Planning For The Cities Of The Kingdom, And What This Entails In Providing Roads And Basic Equipment, Improving And Beautifying Cities & Developing Municipal And Rural Areas In Addition To To The Management Of The Services Necessary To Maintain The Cleanliness And Health Of The Environment In The Kingdom."
    },
    {
        id: 6,
        logo: 'media/images/company-6.svg',
        title: "MOH",
        about: "Since the founding of Saudi Arabia by King Abdul Aziz, public health has been a top priority. In 1925, he established the Public Health Department in Makkah, building a solid healthcare infrastructure with international cooperation. To manage growing healthcare demands, including for Hajj and Umrah, the Public Health Council was formed. In 1951, the Ministry of Health was established by Royal Decree, realizing King Abdul Aziz’s vision for a comprehensive national healthcare system."
    },
    {
        id: 7,
        logo: 'media/images/company-7.svg',
        title: "MRM",
        about: "The Medina Region Municipality is responsible for providing municipal services with the aim of developing and improving the region in terms of urban, economic and social aspects. In the year 1401 AH, a royal decree was issued to change the name of the city municipality to “the Municipality of Medina,” following a ministerial decision in 1398 that classified the municipality as an excellent category. The secretariat is concerned with multiple tasks such as maintaining cleanliness, combating public health pests, monitoring commercial activities and ensuring food safety, in addition to maintaining roads and lighting, establishing building regulations, and supervising the provision of municipal services to residents and visitors of Medina."
    },
    {
        id: 8,
        logo: 'media/images/company-8.svg',
        title: "MOHRSD",
        about: "The Ministry of Human Resources and Social Development is the government body that is responsible for establishing general policy for labor and workers laws in both public and private sectors inside the Kingdom of Saudi Arabia, as well as all matters relating to social affairs and its development programs which conform with the visions and policies adopted by the Kingdom’s government."
    }
];
const objectives = [
    {
        id: 1,
        title: 'Helping<br>organizations',
        description: "in realizing the real data values that include data monetization and operations optimization.",
        icon: 'media/icons/hand-salute.svg'
    },
    {
        id: 2,
        title: 'Assisting<br>organizations',
        description: "to build data-driven culture by following best practices in managing their data assets.",
        icon: 'media/icons/gear.svg'
    },
    {
        id: 3,
        title: 'Transform<br>organizations',
        description: "in dealing with data as a strategic asset that requires special attention to create values for the organizations.",
        icon: 'media/icons/users-connection.svg'
    },
    {
        id: 4,
        title: 'Support<br>building',
        description: "governance bodies to comply with the related regulations and standards.",
        icon: 'media/icons/headset.svg'
    },
    {
        id: 5,
        title: 'Building<br>business',
        description: "intelligence capabilities for organizations through expert teams that have required the skills and experiences.",
        icon: 'media/icons/hand-salute.svg'
    },
    {
        id: 6,
        title: 'Helping<br>organizations',
        description: "in realizing the real data values that include data monetization and operations optimization.",
        icon: 'media/icons/gear.svg'
    },
];

const whyUsCards = document.querySelectorAll('.info-card');
const partnerCards = document.querySelectorAll('.partner-card');
const serviceCards = document.querySelectorAll('.service');

let partnersDots = [];

let indexWhyUs = 0;
let indexPartners = 0;
let indexServices = 0;
let indexCompanies = 0;
let indexObjectives = 0;

let partnersInterval = setClearInterval('partners', partnerCards, 5000);
let servicesInterval = setClearInterval('services', serviceCards, 6000);
let companiesInterval = setClearInterval('companies', companies, 8000);
let objectivesInterval = setClearInterval('objectives', objectives, 4000);

let date = new Date();
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
let hijriDate = date.toLocaleDateString('en-u-ca-islamic', options);
document.querySelector('.timeline-en').innerHTML = `${hijriDate} | Riyadh Time ${date.getHours()}:${date.getMinutes()} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;

const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');
if (myModal) myModal.addEventListener('shown.bs.modal', () => myInput.focus());

whyUsCards.forEach(item => {
    item.addEventListener("mouseenter", _ => {
        whyUsCards.forEach(item => item.classList.remove("active"));
        item.classList.add("active");
    })
    item.addEventListener("mouseleave", _ => {
        item.classList.remove("active");
        whyUsCards[indexWhyUs].classList.add("active");
    })
});
setInterval(_ => {
    whyUsCards.forEach(item => item.classList.remove("active"));
    indexWhyUs = indexWhyUs < 3 ? indexWhyUs + 1 : 0;
    whyUsCards[indexWhyUs].classList.add("active");
}, 4000);

$(document).ready(_ => {
    $(".owl-carousel").owlCarousel();
    partnersDots = document.querySelectorAll('.owl-carousel-partners .owl-dots button.owl-dot');
    displaySections(partnerCards, indexPartners, partnersDots);
    if (window.innerWidth < 768) serviceCards.forEach(card => card.classList.add("active"));
    else displaySections(serviceCards, indexServices, []);
});
$('.owl-carousel.owl-carousel-partners').owlCarousel({
    margin: 10,
    rtl: false,
    nav: false,
    loop: true,
    dots: true,
    center: true,
    autoplay: false,
    mouseDrag: false,
    smartSpeed: 500,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items: 1
        }
    }
});
$('.owl-carousel.owl-carousel-about-us').owlCarousel({
    margin: 0,
    nav: true,
    rtl: false,
    loop: true,
    dots: false,
    center: true,
    autoplay: true,
    mouseDrag: false,
    smartSpeed: 1000,
    autoplayTimeout: 10000,
    responsive:{
        0:{
            items: 1
        },
        768:{
            items: 2
        }
    }
});

function displaySections(items, index, dots){
    items.forEach(card => {
        card.classList.remove("active");
        items[index].classList.add("active");
        dots.forEach(dot => {
            dot.classList.remove('active');
            dots[index].classList.add('active');
            dots[index].click();
        });
    });
};
partnerCards.forEach((card, index) => card.addEventListener("click", _ => displayCurrentItem(index, 'partners')));
serviceCards.forEach((card, index) => {
    if (window.innerWidth >= 768) card.addEventListener("click", _ => displayCurrentItem(index, 'services'))
});
function displayCurrentItem(index, label){
    if (label === 'partners'){
        clearInterval(partnersInterval);
        indexPartners = index;
        displaySections(partnerCards, indexPartners, partnersDots);
        partnersInterval = setClearInterval('partners', partnerCards, 4000);
    } else if (label === 'services'){
        clearInterval(servicesInterval);
        indexServices = index;
        displaySections(serviceCards, indexServices, []);
        servicesInterval = setClearInterval('services', serviceCards, 6000);
    } else if (label === 'companies'){
        clearInterval(companiesInterval);
        indexCompanies = index;
        displayCompanies();
        companiesInterval = setClearInterval('companies', companies, 8000);
    } else if (label === 'objectives'){
        clearInterval(objectivesInterval);
        indexObjectives = index;
        displayObjectives();
        objectivesInterval = setClearInterval('objectives', objectives, 4000);
    }
};
function setClearInterval(label, data, duration) {
    return setInterval(_ => {
        if (label === 'partners'){
            indexPartners = indexPartners < partnerCards.length - 1 ? indexPartners + 1 : 0;
            displaySections(partnerCards, indexPartners, partnersDots);
        } else if (label === 'services' && window.innerWidth >= 768){
            indexServices = indexServices < serviceCards.length - 1 ? indexServices + 1 : 0;
            displaySections(serviceCards, indexServices, []);
        } else if (label === 'companies'){
            indexCompanies = indexCompanies < data.length - 1 ? indexCompanies + 1 : 0;
            displayCompanies();
        } else if (label === 'objectives'){
            indexObjectives = indexObjectives < data.length - 1 ? indexObjectives + 1 : 0;
            displayObjectives();
        }
    }, duration);
}

displayCompanies();
displayObjectives();
function displayCompanies(){
    let logo = "";
    for (let i = 0; i < companies.length; i++) {
        logo += `
            <div onclick="displayCurrentItem(${i}, 'companies')" class="col-3 col-md d-flex align-items-center justify-content-center ${i === indexCompanies ? 'active' : ''}">
                <div class="company">
                    <img class="w-100" loading="lazy" src="${companies[i].logo}" alt="D4Ds">
                </div>
            </div>
        `;
    }
    let about = `
        <div>
            <h4>About ${companies[indexCompanies].title}</h4>
            <hr>
            <p>${companies[indexCompanies].about}</p>
        </div>
    `;
    let collaboration = `
        <div>
            <h4>Collaboration with ${companies[indexCompanies].title}</h4>
            <hr>
            <p>Our team members had collaborated with ${companies[indexCompanies].title} within many aspects as follows:</p>
            <ul>
                <li class="d-flex align-items-center">
                    <img loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                    <span> Align data strategy with business strategy along over than 35 different projects ins KSA</span>
                </li>
                <li class="d-flex align-items-center">
                    <img loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                    <span> Compliance with NDMO requirements with many organizations that can affect real world technology</span>
                </li>
                <li class="d-flex align-items-center">
                    <img loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                    <span>Professional Advice along over than 35 different projects ins KSA</span>
                </li>
                <li class="d-flex align-items-center mb-0">
                    <img loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                    <span> Align data strategy with business strategy along over than 35 different projects ins KSA</span>
                </li>
            </ul>
            <button class="btn-contact-us" type="button" data-bs-toggle="modal" data-bs-target="#contactUs">Request Service</button>
        </div>
    `;
    document.querySelector('.companies').innerHTML = logo;
    document.querySelector('.about-companies').innerHTML = about;
    setTimeout(() => document.querySelector('.collaboration-companies').innerHTML = collaboration, 500);
};
function displayObjectives(){
    let content = "";
    for (let i = 0; i < objectives.length; i++) {
        content += `
            <div onclick="displayCurrentItem(${i}, 'objectives')" class="col ${i === indexObjectives ? 'active' : ''}">
                <div>
                    <h4>${objectives[i].title}</h4>
                    <p>${objectives[i].description}</p>
                </div>
                <img loading="lazy" src="${objectives[i].icon}" alt="D4Ds">
            </div>
        `    
    }
    document.querySelector('#objectives .row').innerHTML = content;
};

function hideError(errorElement) {
    document.getElementById(errorElement).textContent = "";
}
function validateForm() {
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const subjectInput = document.getElementById("subject").value;
    
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const subjectError = document.getElementById("subject-error");
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";

    let isValid = true;

    if (nameInput === "" || /\d/.test(nameInput)) {
        nameError.textContent = "Please enter your name properly.";
        isValid = false;
    }
    if (emailInput === "" || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput) === false) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    if (subjectInput === "") {
        subjectError.textContent = "Please enter your subject.";
        isValid = false;
    }

    return isValid;
}