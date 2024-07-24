const partners = [
    {
        id: 1,
        logo: 'media/images/edm-council.svg',
        description: '<span>EDM Council</span> هي رابطة تجارية يقودها الأعضاء ومخصصة لرفع مستوى إدارة البيانات والتحليلات كأولوية عمل استراتيجية. تأسست في عام 2005، ونحن نقدم أفضل الممارسات والمعايير والتعليم لمحترفي البيانات والأعمال في عالمنا القائم على البيانات.'
    },
    {
        id: 2,
        logo: 'media/images/fast.svg',
        description: '<span>FAST</span> هي شركة رائدة في مجال تقنيات الأمن والمراقبة الرقمية، وتُحدث ثورة في الطريقة التي تحمي بها المنظمات والحكومات الأشخاص والممتلكات والأصول. يضم فريق البحث والتطوير الأساسي لشركة FAST خبرة مشتركة تزيد عن 150 عامًا من العمل و500000 قناة فيديو مثبتة في أكثر من 15000 منشأة حول العالم.'
    },
    {
        id: 3,
        logo: 'media/images/isentry.svg',
        description: '<span>intelexVision</span> توفر حلاً كاملاً وشاملاً، مما يتيح مراقبة فعالة في الوقت الفعلي للفيديو على نطاق واسع. تقوم تحليلاتنا بمراقبة وتفسير كميات هائلة من لقطات الفيديو بشكل مستقل بطريقة غير متحيزة وغير خاضعة للرقابة، باستخدام الذكاء الاصطناعي "لفهم" أي مشهد مراقب والتعلم منه، مما يؤدي إلى توليد محفزات مهمة تنبه المشغلين إلى المخاطر المحتملة الحقيقية والمستمرة.'
    },
    {
        id: 4,
        logo: 'media/images/consquare.svg',
        description: "<span>Consquare Consultancy</span> تقف كشركة خدمات استشارية مستقلة رائدة. يتعاون فريقنا المتمرس مع شركاء الأعمال العالميين، ويقدم مجموعة شاملة من الخدمات الاستشارية متعددة التخصصات. ما بدأ كفريق متواضع يتعامل مع تحديات كبيرة، ازدهر الآن ليصبح واحدة من أكثر الشركات الاستشارية نشاطًا في دولة الإمارات العربية المتحدة، مما أدى إلى توسيع نطاق انتشارها محليًا ودوليًا."
    },
    {
        id: 5,
        logo: 'media/images/dell.svg',
        description: '<span>Dell</span> هي شركة تكنولوجيا أمريكية تعمل على تطوير وبيع وإصلاح ودعم أجهزة الكمبيوتر والمنتجات والخدمات ذات الصلة. شركة Dell مملوكة لشركتها الأم، Dell Technologies.'
    },
];
const services = [
    {
        id: 1,
        title: 'استشارات<br>البيانات',
        subtitle: 'خدمات استشارات البيانات',
        description: "تتميز D4Ds بوجود فريق من مستشاري البيانات ذوي المهارات العالية. تقديم خدمات استشارية مخصصة للبيانات تلبي الاحتياجات والتحديات المحددة لكل عميل."
    },
    {
        id: 2,
        title: 'التحول<br>الرقمي',
        subtitle: 'التحول الرقمي',
        description: "توفير خدمات التحول الرقمي الشاملة التي لا تشمل البيانات فحسب، بل تشمل أيضًا العمليات والتكنولوجيا والثقافة التنظيمية. بالإضافة إلى ضمان التكامل السلس للتقنيات الرقمية في جميع أعمال العميل."
    },
    {
        id: 3,
        title: 'تقنيات<br>البيانات',
        subtitle: 'تقنيات البيانات',
        description: "تتميز D4Ds بوجود فريق من مستشاري البيانات ذوي المهارات العالية. تقديم خدمات استشارية مخصصة للبيانات تلبي الاحتياجات والتحديات المحددة لكل عميل."
    },
    {
        id: 4,
        title: 'استشارات<br>البيانات',
        subtitle: 'خدمات استشارات البيانات',
        description: "تتميز D4Ds بوجود فريق من مستشاري البيانات ذوي المهارات العالية. تقديم خدمات استشارية مخصصة للبيانات تلبي الاحتياجات والتحديات المحددة لكل عميل."
    },
];
const companies = [
    {
        id: 1,
        logo: 'media/images/company-1.svg',
        title: "MOC",
        about: "تسعى وزارة التجارة إلى القيام بدور محوري في نمو واستدامة القطاع التجاري في المملكة ومواكبة التغيرات والتطورات المستمرة في التجارة على مستوى العالم. وتهدف الوزارة إلى تعزيز مكانة المملكة الاقتصادية كمركز مفضل للتجارة في الشرق الأوسط وحول العالم. توفير خريطة طريق شاملة ومتكاملة لتحقيق هدفها الطموح المتمثل في قيادة قطاع التجارة السعودي في بيئة عادلة ومحفزة. تتمحور رسالة الوزارة حول الدور الحاسم الذي تلعبه في تعزيز مناخ الأعمال في المملكة من خلال اعتماد وتطوير والإشراف على أنظمة وسياسات قوانين تجارية مرنة وعادلة، فضلاً عن تعزيز التحالفات الاستراتيجية مع مختلف الجهات ذات الصلة. السلطات المحلية والدولية من أجل تعزيز أواصر الثقة بين البائع والعميل. من خلال الالتزام بمنظومة متكاملة من القيم الراسخة التي تؤكد على العدالة، واحترام الحقوق، والإبداع، والعمل الجماعي، وسرعة الاستجابة، والسعي المستمر لتقديم خدمات ذات قيمة مضافة تتجاوز توقعات جميع فئات العملاء، فإنها تساعد لتعظيم مساهمة القطاع التجاري في دعم واستدامة الاقتصاد الوطني"
    },
    {
        id: 2,
        logo: 'media/images/company-2.svg',
        title: "MOT",
        about: "بدأت وزارة السياحة عملياتها في عام 2000، مع التركيز على النمو على المدى الطويل. هدفها الرئيسي هو تنفيذ رؤية المملكة للسياحة، إلى جانب تسهيل التعاون الناجح وتطوير رأس المال البشري الوطني."
    },
    {
        id: 3,
        logo: 'media/images/company-3.svg',
        title: "NG",
        about: "الحرس الوطني هو قوة عسكرية مسلحة تساهم في الدفاع عن أراضي وحدود المملكة العربية السعودية والحفاظ على الأمن والاستقرار الداخلي."
    },
    {
        id: 4,
        logo: 'media/images/company-4.svg',
        title: "SBA",
        about: "هيئة الإذاعة والتلفزيون السعودية هي هيئة حكومية سعودية تتمتع بالشخصية الاعتبارية والاستقلال المالي وتتبع وزارة الإعلام السعودية. وتسعى إلى إيصال رسالة المملكة العربية السعودية إلى كافة المناطق محلياً وعالمياً من خلال الكلمة والصورة، ورفع وتطوير مستوى الأداء الإذاعي والتلفزيوني. ولها عدة قنوات تلفزيونية وإذاعية حكومية ورسمية، وهي القناة السعودية، وقناة SBC، وقناة الذكريات، وقناة الأخبار، والقنوات الرياضية السعودية، وقناة القرآن الكريم، وقناة السنة النبوية. ومن المحطات الإذاعية إذاعة القرآن الكريم، وإذاعة جدة، وإذاعة الرياض، وإذاعة نداء الإسلام، وإذاعة الإذاعة السعودية. والإذاعة السعودية العالمية ."
    },
    {
        id: 5,
        logo: 'media/images/company-5.svg',
        title: "MOMRAH",
        about: "أنشئت وزارة الشؤون البلدية والقروية عام 1395هـ/1975م بموجب المرسوم الملكي رقم (أ/266) وتاريخ 1395/10/8هـ وأنيطت بها مسؤولية التخطيط العمراني لمدن المملكة، وما ويشمل ذلك توفير الطرق والتجهيزات الأساسية وتحسين وتجميل المدن وتطوير المناطق البلدية والقروية بالإضافة إلى إدارة الخدمات اللازمة للمحافظة على نظافة وصحة البيئة في المملكة."
    },
    {
        id: 6,
        logo: 'media/images/company-6.svg',
        title: "MOH",
        about: "منذ تأسيس المملكة العربية السعودية على يد الملك عبد العزيز، كانت الصحة العامة على رأس الأولويات. وفي عام 1925، أنشأ إدارة الصحة العامة في مكة المكرمة، حيث قام ببناء بنية تحتية متينة للرعاية الصحية بالتعاون الدولي. ولإدارة متطلبات الرعاية الصحية المتزايدة، بما في ذلك الحج والعمرة، تم تشكيل مجلس الصحة العامة. وفي عام 1951، تم إنشاء وزارة الصحة بموجب مرسوم ملكي، تحقيقاً لرؤية الملك عبد العزيز لنظام رعاية صحية وطني شامل."
    },
    {
        id: 7,
        logo: 'media/images/company-7.svg',
        title: "MRM",
        about: "تتولى أمانة منطقة المدينة المنورة مسؤولية تقديم الخدمات البلدية بهدف تطوير المنطقة وتحسينها من النواحي العمرانية والاقتصادية والاجتماعية. وفي عام 1401هـ صدر أمر ملكي بتغيير اسم أمانة المدينة إلى “أمانة المدينة المنورة”، وذلك عقب صدور قرار وزاري عام 1398م بتصنيف البلدية فئة ممتازة. تهتم الأمانة بمهام متعددة مثل الحفاظ على النظافة، ومكافحة آفات الصحة العامة، ومراقبة الأنشطة التجارية والتأكد من سلامة الأغذية، بالإضافة إلى صيانة الطرق والإنارة، ووضع لوائح البناء، والإشراف على تقديم الخدمات البلدية لسكان وزوار المدينة المنورة. ."
    },
    {
        id: 8,
        logo: 'media/images/company-8.svg',
        title: "MOHRSD",
        about: "وزارة الموارد البشرية والتنمية الاجتماعية هي الجهة الحكومية المسؤولة عن وضع السياسة العامة لأنظمة العمل والعمال في القطاعين العام والخاص داخل المملكة العربية السعودية، وكذلك كل ما يتعلق بالشؤون الاجتماعية وبرامجها التنموية. والتي تتوافق مع الرؤى والسياسات التي تتبناها حكومة المملكة."
    }
];
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
let hijriDate = date.toLocaleDateString('ar-u-ca-islamic', options);
document.querySelector('.timeline-ar').innerHTML = `${hijriDate} | بتوقيت الرياض ${date.getHours()}:${date.getMinutes()} ${date.getHours() >= 12 ? 'م' : 'ص'}`;

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
            <div onclick="displayCurrentItem(${i}, 'services')" class="service ar ${i === indexServices ? 'active' : window.innerWidth > 767 ? '' : 'active'}">
                <h5>${services[i].title}</h5>
                <div class="service-info">
                    <h4>${services[i].subtitle}</h4>
                    <p>${services[i].description}</p>
                    <ul>
                        <li class="d-flex align-items-center">
                            <img class="ar" loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                            <span>مواءمة استراتيجية البيانات مع استراتيجية العمل</span>
                        </li>
                        <li class="d-flex align-items-center">
                            <img class="ar" loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                            <span>الامتثال لمتطلبات NDMO</span>
                        </li>
                        <li class="d-flex align-items-center">
                            <img class="ar" loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                            <span>نصيحه مهنيه</span>
                        </li>
                        <li class="d-flex align-items-center mb-0">
                            <img class="ar" loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                            <span>يساعد على تسخير المعلومات لدفع رؤى الأعمال</span>
                        </li>
                    </ul>
                    <button class="btn-contact-us" type="button" data-bs-toggle="modal" data-bs-target="#contactUs">طلب الخدمة</button>
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
            <h4>عن ${companies[indexCompanies].title}</h4>
            <hr>
            <p>${companies[indexCompanies].about}</p>
        </div>
    `;
    let collaboration = `
        <div>
            <h4>بالتعاون مع ${companies[indexCompanies].title}</h4>
            <hr>
            <p>وقد تعاون أعضاء فريقنا مع ${companies[indexCompanies].title} في جوانب عديدة على النحو التالي:</p>
            <ul>
                <li class="d-flex align-items-center">
                    <img class="ar" loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                    <span>مواءمة استراتيجية البيانات مع استراتيجية العمل في أكثر من 35 مشروعًا مختلفًا في المملكة العربية السعودية</span>
                </li>
                <li class="d-flex align-items-center">
                    <img class="ar" loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                    <span>الامتثال لمتطلبات NDMO مع العديد من المنظمات التي يمكن أن تؤثر على تكنولوجيا العالم الحقيقي</span>
                </li>
                <li class="d-flex align-items-center">
                    <img class="ar" loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                    <span>استشارات احترافية لأكثر من 35 مشروعًا مختلفًا في المملكة العربية السعودية</span>
                </li>
                <li class="d-flex align-items-center mb-0">
                    <img class="ar" loading="lazy" src="media/icons/caret-right.svg" alt="D4Ds">
                    <span>مواءمة استراتيجية البيانات مع استراتيجية العمل في أكثر من 35 مشروعًا مختلفًا في المملكة العربية السعودية</span>
                </li>
            </ul>
            <button class="btn-contact-us" type="button" data-bs-toggle="modal" data-bs-target="#contactUs">طلب الخدمة</button>
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
$('.owl-carousel.owl-carousel-about-us').owlCarousel({
    margin: -120,
    nav: true,
    loop: true,
    dots: false,
    rtl: true,
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

const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');
myModal.addEventListener('shown.bs.modal', () => myInput.focus());

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