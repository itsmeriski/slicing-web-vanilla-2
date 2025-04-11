const aboutDatas = [
  {
    img: "assets/icons/about-icon/file-invoice.svg",
    title: "Online Billing, Invoicing, & Contracts",
    paragraph: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
  },
  {
    img: "assets/icons/about-icon/calendar.svg",
    title: "Easy Scheduling & Attendance Tracking",
    paragraph: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    img: "assets/icons/about-icon/users.svg",
    title: "Customer Tracking",
    paragraph: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
  },
];

const featureListDatas = [
  {
    img: "assets/icons/features-icon/menu.svg",
    paragraph: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
  },
  {
    img: "assets/icons/features-icon/layer.svg",
    paragraph: "TA’s and presenters can be moved to the front of the class.",
  },
  {
    img: "assets/icons/features-icon/people.svg",
    paragraph: "Teachers can easily see all students and class data at one time.",
  },
];

const featureSectionDatas = [
  {
    img: "assets/images/feature-img-2.png",
    title: "<span class='feature__title--highlight'>Tools</span> For Teachers And Learners",
    paragraph: "Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.",
  },
  {
    img: "assets/images/feature-img-3.png",
    title: "Assessments, <span class='feature__title--highlight'>Quizzes, </span> Tests",
    paragraph: "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
  },
  {
    img: "assets/images/feature-img-4.png",
    title: "<span class='feature__title--highlight'>Class Management</span> Tools for Educators",
    paragraph: "Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.",
  },
  {
    img: "assets/images/feature-img-5.png",
    title: "One-on-One <span class='feature__title--highlight'>Discussions</span>",
    paragraph: "Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
  },
];

function createdIterationElement(parent, dataArray, elementType, className, templateCallback) {
  if (!parent || dataArray.length === 0) return;

  dataArray.forEach((item) => {
    const newElement = document.createElement(elementType);
    newElement.classList.add(className);
    newElement.innerHTML = templateCallback(item);
    parent[0].appendChild(newElement);
  });
}

createdIterationElement(
  document.getElementsByClassName("about__cards"),
  aboutDatas,
  "li",
  "about__card",
  (item) => {
    return `
      <div class="about__card-icon"><img src="${item.img}"/></div>
      <h3 class="about__card-title">${item.title}</h3>
      <p class="about__card-paragraph">${item.paragraph}</p>
    `
  },
);

createdIterationElement(
  document.getElementsByClassName("feature__lists"),
  featureListDatas,
  "li",
  "feature__list",
  (item) => {
    return `
      <div class="feature__icon"><img src="${item.img}" /></div>
      <p class="feature__paragraph">${item.paragraph}</p>
    `
  },
);

createdIterationElement(
  document.getElementsByClassName("feature__wrapper-lists"),
  featureSectionDatas,
  "div",
  "feature__wrapper",
  (item) => {
    return `
      <div>
        <h3 class="feature__title">
          ${item.title}
        </h3>
        <p class="feature__paragraph">${item.paragraph}</p>
      </div>

      <img src="${item.img}" alt="" class="feature__illustration">
    `
  }
);