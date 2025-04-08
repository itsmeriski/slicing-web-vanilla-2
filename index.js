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
]

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
  }
)