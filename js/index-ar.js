const objectives = [
    {
        id: 1,
        title: 'مساعدة<br>المنظمات',
        description: "في تحقيق قيم البيانات الحقيقية التي تشمل تسييل البيانات وتحسين العمليات.",
        icon: 'media/icons/hand-salute.svg'
    },
    {
        id: 2,
        title: 'المنظمات<br>المساعدة',
        description: "لبناء ثقافة تعتمد على البيانات من خلال اتباع أفضل الممارسات في إدارة أصول البيانات الخاصة بهم.",
        icon: 'media/icons/gear.svg'
    },
    {
        id: 3,
        title: 'تحويل<br>المنظمات',
        description: "في التعامل مع البيانات كأصل استراتيجي يتطلب اهتمامًا خاصًا لخلق قيم للمؤسسات.",
        icon: 'media/icons/users-connection.svg'
    },
    {
        id: 4,
        title: 'بناء<br>الدعم',
        description: "هيئات الحوكمة للامتثال للوائح والمعايير ذات الصلة.",
        icon: 'media/icons/headset.svg'
    },
    {
        id: 5,
        title: 'بناء<br>الأعمال',
        description: "القدرات الاستخباراتية للمؤسسات من خلال فرق الخبراء التي تتطلب المهارات والخبرات.",
        icon: 'media/icons/hand-salute.svg'
    },
    {
        id: 6,
        title: 'مساعدة<br>المنظمات',
        description: "في تحقيق قيم البيانات الحقيقية التي تشمل تسييل البيانات وتحسين العمليات.",
        icon: 'media/icons/gear.svg'
    },
];

const whyUsCards = document.querySelectorAll('.info-card');
const partnerCards = document.querySelectorAll('.partner-card');
const serviceCards = document.querySelectorAll('.service');
const companies = document.querySelectorAll('.companies > div');

let partnersDots = [];
let companiesAboutDots = [];
let companiesCollaborationDots = [];

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
let hijriDate = date.toLocaleDateString('ar-u-ca-islamic', options);
document.querySelector('.timeline-ar').innerHTML = `${hijriDate} | بتوقيت الرياض ${date.getHours()}:${date.getMinutes()} ${date.getHours() >= 12 ? 'م' : 'ص'}`;

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
    partnersDots = document.querySelectorAll('.owl-partners .owl-dots button.owl-dot');
    displaySections(partnerCards, indexPartners, partnersDots);
    if (window.innerWidth < 768) serviceCards.forEach(card => card.classList.add("active"));
    else displaySections(serviceCards, indexServices, []);
    companiesAboutDots = document.querySelectorAll('.owl-companies-about .owl-dots button.owl-dot');
    companiesCollaborationDots = document.querySelectorAll('.owl-companies-collaboration .owl-dots button.owl-dot');
    displaySections(companies, indexCompanies, companiesAboutDots, companiesCollaborationDots);
});
$('.owl-carousel-item').owlCarousel({
    margin: 10,
    rtl: true,
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
$('.owl-companies-about').owlCarousel({
    margin: 10,
    rtl: true,
    nav: false,
    loop: true,
    dots: true,
    center: true,
    autoplay: false,
    mouseDrag: false,
    animateOut: 'fadeOut',
    smartSpeed: 500,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items: 1
        }
    }
});
$('.owl-about-us').owlCarousel({
    margin: 0,
    nav: true,
    rtl: true,
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

function displaySections(items, index, dots, otherDots) {
    items.forEach(card => {
        card.classList.remove("active");
        items[index].classList.add("active");
        dots.forEach(dot => {
            dot.classList.remove('active');
            dots[index].classList.add('active');
            dots[index].click();
        });
        if (otherDots) {
            otherDots.forEach(dot => {
                dot.classList.remove('active');
                otherDots[index].classList.add('active');
                otherDots[index].click();
            });
        }
    });
};
partnerCards.forEach((card, index) => card.addEventListener("click", _ => displayCurrentItem(index, 'partners')));
serviceCards.forEach((card, index) => {
    if (window.innerWidth >= 768) card.addEventListener("click", _ => displayCurrentItem(index, 'services'));
});
companies.forEach((card, index) => card.addEventListener("click", _ => displayCurrentItem(index, 'companies')));
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
        displaySections(companies, indexCompanies, companiesAboutDots, companiesCollaborationDots);
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
            displaySections(companies, indexCompanies, companiesAboutDots, companiesCollaborationDots);
        } else if (label === 'objectives'){
            indexObjectives = indexObjectives < data.length - 1 ? indexObjectives + 1 : 0;
            displayObjectives();
        }
    }, duration);
}

displayObjectives();
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
        nameError.textContent = "الرجاء إدخال اسمك بشكل صحيح.";
        isValid = false;
    }
    if (emailInput === "" || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput) === false) {
        emailError.textContent = "يرجى إدخال عنوان بريد إلكتروني صالح.";
        isValid = false;
    }
    if (subjectInput === "") {
        subjectError.textContent = "الرجاء إدخال الموضوع الخاص بك.";
        isValid = false;
    }

    return isValid;
}