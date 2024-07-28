const partners = [
    {
        id: 1,
        logo: 'media/images/edm-council.svg',
        description: '<span>EDM Council</span> is the member-driven trade association dedicated to elevating data management and analytics as a strategic business priority. Founded in 2005, we provide best practices, standards and education to data & business professionals in our data-driven world.'
    },
    {
        id: 2,
        logo: 'media/images/fast.svg',
        description: '<span>FAST</span> is a pioneer in the field of digital security and surveillance technologies and is revolutionizing the way organizations and governments protect people, property and assets. The core R&D team of FAST comprises the combined experience of over 150 man-years and 500 000 installed video channels in over 15 000 installations worldwide.'
    },
    {
        id: 3,
        logo: 'media/images/isentry.svg',
        description: '<span>intelexVision</span> delivers a complete, end-to-end solution, enabling effective real-time monitoring of video at scale. Our analytics autonomously monitor and interpret massive amounts of video footage in an unbiased, unsupervised way, using AI to ‘understand’ and learn from any monitored scene, generating critical triggers that alert operators to real and ongoing potential risks.'
    },
    {
        id: 4,
        logo: 'media/images/consquare.svg',
        description: "<span>Consquare Consultancy</span> stands as a premier independent consultancy service firm. Our seasoned team collaborates with global business partners, offering a comprehensive range of multi-disciplinary consulting services. What began as a modest team tackling significant challenges has now flourished into one of the UAE's most proactive consultancy firms, expanding its reach both locally and internationally."
    },
    {
        id: 5,
        logo: 'media/images/dell.svg',
        description: '<span>Dell</span> is an American technology company that develops, sells, repairs, and supports computers and related products and services. Dell is owned by its parent company, Dell Technologies.'
    },
];
const services = [
    {
        id: 1,
        title: 'Data<br>Consulting',
        subtitle: 'Data Consulting Services',
        description: "D4Ds distinguishes itself by having a team of highly skilled data consultants. Offering tailored data consulting services that meet each client's specific needs and challenges."
    },
    {
        id: 2,
        title: 'Digital<br>Transformation',
        subtitle: 'Digital Transformation',
        description: "Providing comprehensive digital transformation services that encompass not only data but also processes, technology & organizational culture. Also, Ensuring seamless integration of digital technologies into all client's business."
    },
    {
        id: 3,
        title: 'Data<br>Technologies',
        subtitle: 'Data Technologies',
        description: "D4Ds distinguishes itself by having a team of highly skilled data consultants. Offering tailored data consulting services that meet each client's specific needs and challenges."
    },
    {
        id: 4,
        title: 'Data<br>Consulting',
        subtitle: 'Data Consulting Services',
        description: "D4Ds distinguishes itself by having a team of highly skilled data consultants. Offering tailored data consulting services that meet each client's specific needs and challenges."
    },
];
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

let indexPartners = 0;
let indexServices = 0;
let indexCompanies = 0;
let indexObjectives = 0;

let date = new Date();
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
let hijriDate = date.toLocaleDateString('en-u-ca-islamic', options);
document.querySelector('.timeline-en').innerHTML = `${hijriDate} | Riyadh Time ${date.getHours()}:${date.getMinutes()} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;

displayPartners();
dispalyServices();
displayCompanies();
displayObjectives();

function displayPartners(){
    let content = "";
    for (let i = 0; i < partners.length; i++) {
        if(i < 2){
            content += `
                <div class="col-12 col-sm-6">
                    <div onclick="displayCurrentItem(${i}, 'partners')" class="partner-card ${i === indexPartners ? 'active' : ''} d-flex align-items-center justify-content-center">
                        <img loading="lazy" src="${partners[i].logo}" alt="D4Ds">
                    </div>
                </div>
            `
        } else {
            content += `
                <div class="col-12 col-sm-4">
                    <div onclick="displayCurrentItem(${i}, 'partners')" class="partner-card ${i === indexPartners ? 'active' : ''} d-flex align-items-center justify-content-center">
                        <img loading="lazy" src="${partners[i].logo}" alt="D4Ds">
                    </div>
                </div>
            `
        }
    }
    document.getElementById('partners-logos').innerHTML = content;
    document.getElementById('partners-description').innerHTML = partners[indexPartners].description;
};
function dispalyServices(){
    let content = "";
    for (let i = 0; i < services.length; i++) {
        content += `
            <div onclick="displayCurrentItem(${i}, 'services')" class="service ${i === indexServices ? 'active' : window.innerWidth > 767 ? '' : 'active'}">
                <h5>${services[i].title}</h5>
                <div class="service-info">
                    <h4>${services[i].subtitle}</h4>
                    <p>${services[i].description}</p>
                    <ul>
                        <li class="d-flex align-items-center">
                            <img loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                            <span>Align data strategy with business strategy</span>
                        </li>
                        <li class="d-flex align-items-center">
                            <img loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                            <span>Compliance with NDMO requirements</span>
                        </li>
                        <li class="d-flex align-items-center">
                            <img loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                            <span>Professional Advice</span>
                        </li>
                        <li class="d-flex align-items-center mb-0">
                            <img loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                            <span>Helps to harness information to drive business insights</span>
                        </li>
                    </ul>
                    <button class="btn-contact-us" type="button" data-bs-toggle="modal" data-bs-target="#contactUs">Request Service</button>
                </div>
            </div>
        `
    }
    document.getElementById('services').innerHTML = content;
};
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

let partnersInterval = setClearInterval('partners', partners, 4000);
let servicesInterval = setClearInterval('services', services, 6000);
let companiesInterval = setClearInterval('companies', companies, 8000);
let objectivesInterval = setClearInterval('objectives', objectives, 4000);
function setClearInterval(label, data, duration) {
    return setInterval(_ => {
        if(label === 'partners'){
            indexPartners = indexPartners < data.length - 1 ? indexPartners + 1 : 0;
            displayPartners();
        } else if(label === 'services'){
            indexServices = indexServices < data.length - 1 ? indexServices + 1 : 0;
            dispalyServices();
        } else if(label === 'companies'){
            indexCompanies = indexCompanies < data.length - 1 ? indexCompanies + 1 : 0;
            displayCompanies();
        } else if(label === 'objectives'){
            indexObjectives = indexObjectives < data.length - 1 ? indexObjectives + 1 : 0;
            displayObjectives();
        }
    }, duration);
}
function displayCurrentItem(index, label){
    if(label === 'partners'){
        clearInterval(partnersInterval);
        indexPartners = index;
        displayPartners();
        partnersInterval = setClearInterval('partners', partners, 4000);
    } else if(label === 'services'){
        clearInterval(servicesInterval);
        indexServices = index;
        dispalyServices();
        servicesInterval = setClearInterval('services', services, 6000);
    } else if(label === 'companies'){
        clearInterval(companiesInterval);
        indexCompanies = index;
        displayCompanies();
        companiesInterval = setClearInterval('companies', companies, 8000);
    } else if(label === 'objectives'){
        clearInterval(objectivesInterval);
        indexObjectives = index;
        displayObjectives();
        objectivesInterval = setClearInterval('objectives', objectives, 4000);
    }
};

$(document).ready(_ => $(".owl-carousel").owlCarousel());
if(window.innerWidth >= 1400) {
    $('.owl-carousel.owl-carousel-about-us').owlCarousel({
        margin: -120,
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
} else {
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
}

const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');
if (myModal) myModal.addEventListener('shown.bs.modal', () => myInput.focus());

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