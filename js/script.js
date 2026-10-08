/* =========================================================
   STUDENT DATABASE
========================================================= */

const students = {

    alex:{

        password:"alex123",

        name:"Alex Sharma",

        id:"21CS001",

        course:"B.E. Computer Science",

        semester:"VI",

        email:"alex@college.edu",

        phone:"+91 98765 43210",

        attendance:92,

        cgpa:8.6,

        totalCredits:24,

        completedCredits:21,

        fees:{
            total:85000,
            paid:79800
        },

        subjects:[
            ["Mathematics",85,92,4],
            ["Physics",78,89,4],
            ["Chemistry",90,94,4],
            ["DSA",88,95,4],
            ["English",80,90,3]
        ],

        assignments:[
            [
                "Data Structures",
                "AVL Tree Implementation",
                "10 Sep 2026",
                "Pending"
            ],
            [
                "Operating Systems",
                "CPU Scheduling Report",
                "12 Sep 2026",
                "Submitted"
            ],
            [
                "Machine Learning",
                "Regression Mini Project",
                "18 Sep 2026",
                "Pending"
            ]
        ]

    },


    priya:{

        password:"priya123",

        name:"Priya Verma",

        id:"21IT014",

        course:"B.Tech Information Technology",

        semester:"VI",

        email:"priya@college.edu",

        phone:"+91 99887 65432",

        attendance:88,

        cgpa:8.2,

        totalCredits:24,

        completedCredits:20,

        fees:{
            total:85000,
            paid:85000
        },

        subjects:[
            ["Mathematics",82,88,4],
            ["Database",91,95,4],
            ["Web Technology",89,93,4],
            ["Networks",80,86,4],
            ["English",84,91,3]
        ],

        assignments:[
            [
                "Database",
                "SQL Optimization",
                "11 Sep 2026",
                "Submitted"
            ],
            [
                "Web Technology",
                "Responsive UI",
                "16 Sep 2026",
                "Pending"
            ],
            [
                "Networks",
                "Protocol Analysis",
                "20 Sep 2026",
                "Submitted"
            ]
        ]

    },


    rahul:{

        password:"rahul123",

        name:"Rahul Mehta",

        id:"21EC019",

        course:"B.Tech Electronics & Communication",

        semester:"VI",

        email:"rahul@college.edu",

        phone:"+91 91234 56780",

        attendance:76,

        cgpa:7.4,

        totalCredits:24,

        completedCredits:18,

        fees:{
            total:85000,
            paid:60000
        },

        subjects:[
            ["Digital Electronics",78,81,4],
            ["Microprocessors",74,76,4],
            ["Signals",81,83,4],
            ["Communication",72,79,4],
            ["Embedded",85,88,3]
        ],

        assignments:[
            [
                "Microprocessors",
                "8086 Lab Record",
                "13 Sep 2026",
                "Pending"
            ],
            [
                "Embedded",
                "STM32 Mini Project",
                "17 Sep 2026",
                "Pending"
            ],
            [
                "Digital Electronics",
                "Logic Design",
                "22 Sep 2026",
                "Submitted"
            ]
        ]

    }

};


/* =========================================================
   FACULTY
========================================================= */

const faculty = [

    {
        id:"neha",
        name:"Dr. Neha Kapoor",
        subject:"Data Structures",
        email:"neha.kapoor@college.edu",
        icon:"👩‍🏫"
    },

    {
        id:"arjun",
        name:"Prof. Arjun Rao",
        subject:"Operating Systems",
        email:"arjun.rao@college.edu",
        icon:"👨‍🏫"
    },

    {
        id:"meera",
        name:"Dr. Meera Iyer",
        subject:"Database Systems",
        email:"meera.iyer@college.edu",
        icon:"👩‍🏫"
    },

    {
        id:"karan",
        name:"Prof. Karan Singh",
        subject:"Computer Networks",
        email:"karan.singh@college.edu",
        icon:"👨‍🏫"
    },

    {
        id:"ritu",
        name:"Dr. Ritu Shah",
        subject:"Machine Learning",
        email:"ritu.shah@college.edu",
        icon:"👩‍🏫"
    }

];


/* =========================================================
   EVENTS
========================================================= */

const events = [

    [
        "10",
        "SEP",
        "Science Exhibition",
        "10:00 AM – 01:00 PM",
        "School Auditorium"
    ],

    [
        "15",
        "SEP",
        "Parent Teacher Meeting",
        "02:00 PM – 04:00 PM",
        "Room 204"
    ],

    [
        "21",
        "SEP",
        "Technical Workshop",
        "10:00 AM – 12:00 PM",
        "Seminar Hall"
    ]

];


/* =========================================================
   NOTICES
========================================================= */

const notices = [

    [
        "College will remain closed on Sept 12",
        "Sep 5, 2026"
    ],

    [
        "Exam timetable released",
        "Sep 3, 2026"
    ],

    [
        "Library new books available",
        "Aug 30, 2026"
    ]

];


/* =========================================================
   BOOKS
========================================================= */

const books = [

    [
        "Clean Code",
        "Robert C. Martin",
        "📕"
    ],

    [
        "Operating System Concepts",
        "Silberschatz",
        "📗"
    ],

    [
        "Database System Concepts",
        "Korth",
        "📘"
    ],

    [
        "Computer Networks",
        "Tanenbaum",
        "📙"
    ],

    [
        "Hands-On Machine Learning",
        "Aurélien Géron",
        "📓"
    ],

    [
        "Java Complete Reference",
        "Herbert Schildt",
        "📔"
    ]

];


/* =========================================================
   VARIABLES
========================================================= */

let currentUser = null;

let captchaValue = "";

let selectedFaculty = "neha";

let messages = JSON.parse(
    localStorage.getItem("studentMessages") || "{}"
);

let uploadedPictures = JSON.parse(
    localStorage.getItem("profilePictures") || "{}"
);

let notificationCount = 3;

let toastTimer;


/* =========================================================
   HELPERS
========================================================= */

function $(id){
    return document.getElementById(id);
}


function money(value){

    return "₹" +
        Number(value).toLocaleString("en-IN");

}


function grade(mark){

    if(mark >= 90) return "A+";

    if(mark >= 80) return "A";

    if(mark >= 70) return "B+";

    if(mark >= 60) return "B";

    return "C";

}


function showToast(message){

    const toast = $("toast");

    toast.textContent = message;

    toast.style.display = "block";

    clearTimeout(toastTimer);

    toastTimer = setTimeout(()=>{

        toast.style.display = "none";

    },2400);

}


/* =========================================================
   CAPTCHA
========================================================= */

function generateCaptcha(){

    captchaValue =
        Math.random()
        .toString(36)
        .substring(2,8)
        .toUpperCase();

    $("captchaCode").textContent =
        captchaValue;

}

generateCaptcha();


/* =========================================================
   PASSWORD TOGGLE
========================================================= */

$("togglePassword").onclick = ()=>{

    const password = $("password");

    if(password.type === "password"){

        password.type = "text";

        $("togglePassword").textContent =
            "Hide";

    }

    else{

        password.type = "password";

        $("togglePassword").textContent =
            "Show";

    }

};


/* =========================================================
   LOGIN
========================================================= */

$("loginForm").onsubmit = function(event){

    event.preventDefault();


    const username =
        $("username")
        .value
        .trim()
        .toLowerCase();


    const password =
        $("password").value;


    const enteredCaptcha =
        $("captchaInput")
        .value
        .trim()
        .toUpperCase();


    if(
        !students[username] ||
        students[username].password !== password
    ){

        $("loginError").textContent =
            "Invalid username or password.";

        return;

    }


    if(
        enteredCaptcha !== captchaValue
    ){

        $("loginError").textContent =
            "Incorrect CAPTCHA.";

        generateCaptcha();

        return;

    }


    currentUser = username;


    $("loginScreen")
        .classList
        .add("hidden");


    $("app")
        .classList
        .remove("hidden");


    $("topUserName").textContent =
        students[username].name;


    updateHeaderAvatar();


    renderHome();


    showToast(
        "Welcome back, " +
        students[username].name.split(" ")[0] +
        "!"
    );

};


/* =========================================================
   HEADER AVATAR
========================================================= */

function updateHeaderAvatar(){

    const avatar = $("topAvatar");

    const picture =
        uploadedPictures[currentUser];


    if(picture){

        avatar.innerHTML =
            `<img src="${picture}" alt="Profile">`;

    }

    else{

        avatar.textContent =
            students[currentUser]
            .name
            .charAt(0);

    }

}


/* =========================================================
   NAVIGATION
========================================================= */

document
.querySelectorAll(".nav-btn[data-page]")
.forEach(button=>{

    button.onclick = ()=>{

        openPage(
            button.dataset.page
        );

    };

});


function openPage(id){

    document
    .querySelectorAll(".page")
    .forEach(page=>{

        page.classList.remove("active");

    });


    $(id).classList.add("active");


    document
    .querySelectorAll(".nav-btn[data-page]")
    .forEach(button=>{

        button.classList.toggle(
            "active",
            button.dataset.page === id
        );

    });


    renderPage(id);

    $("sidebar")
    .classList
    .remove("open");

    window.scrollTo(0,0);

}


/* =========================================================
   PAGE RENDER ROUTER
========================================================= */

function renderPage(id){

    switch(id){

        case "home":
            renderHome();
            break;

        case "profile":
            renderProfile();
            break;

        case "attendance":
            renderAttendance();
            break;

        case "grades":
            renderGrades();
            break;

        case "analysis":
            renderAnalysis();
            break;

        case "assignments":
            renderAssignments();
            break;

        case "exams":
            renderExams();
            break;

        case "timetable":
            renderTimetable();
            break;

        case "fees":
            renderFees();
            break;

        case "events":
            renderEvents();
            break;

        case "notices":
            renderNotices();
            break;

        case "gallery":
            renderGallery();
            break;

        case "library":
            renderLibrary();
            break;

        case "staff":
            renderStaff();
            break;

        case "chat":
            renderChat();
            break;

        case "settings":
            renderSettings();
            break;

    }

}


/* =========================================================
   HOME
========================================================= */

function renderHome(){

    const u =
        students[currentUser];


    const average =
        Math.round(
            u.subjects
            .reduce(
                (sum,item)=>sum+item[1],
                0
            )
            / u.subjects.length
        );


    const pending =
        u.assignments
        .filter(a=>a[3] === "Pending")
        .length;


    const balance =
        u.fees.total -
        u.fees.paid;


    $("home").innerHTML = `

        <div class="hero">

            <div>

                <h1>
                    Hello,
                    ${u.name.split(" ")[0]}
                    👋
                </h1>

                <p>
                    Have a great day ahead!
                </p>

            </div>


            <div class="hero-quote">

                “Education is the foundation
                for a better tomorrow.”

            </div>

        </div>


        <div class="section-head">

            <h2>
                Quick Access
            </h2>

            <button
                class="link-btn"
                onclick="openPage('analysis')">

                View Analysis

            </button>

        </div>


        <div class="quick-grid">


            ${quickCard(
                "profile",
                "Profile",
                "View & edit profile",
                "q1",
                "👤"
            )}


            ${quickCard(
                "events",
                "Events",
                "School events",
                "q2",
                "▣"
            )}


            ${quickCard(
                "staff",
                "Faculty",
                "Message faculty",
                "q3",
                "👥"
            )}


            ${quickCard(
                "attendance",
                "Attendance",
                "Check attendance",
                "q4",
                "✓"
            )}


            ${quickCard(
                "chat",
                "Messages",
                "Chat with faculty",
                "q5",
                "💬"
            )}


            ${quickCard(
                "grades",
                "Grade Sheet",
                "View your grades",
                "q6",
                "📊"
            )}


            ${quickCard(
                "analysis",
                "Student Analysis",
                "Detailed performance",
                "q7",
                "📈"
            )}


            ${quickCard(
                "fees",
                "Fees Details",
                "Payments & history",
                "q8",
                "₹"
            )}


            ${quickCard(
                "notices",
                "Notices",
                "Latest updates",
                "q9",
                "🔔"
            )}


            ${quickCard(
                "assignments",
                "Assignments",
                "Tasks & submissions",
                "q10",
                "☑"
            )}


            ${quickCard(
                "exams",
                "Exams",
                "Schedule & results",
                "q11",
                "🎓"
            )}


            ${quickCard(
                "library",
                "Library",
                "Books & resources",
                "q12",
                "📚"
            )}

        </div>


        <div class="section-head">

            <h2>
                Academic Overview
            </h2>

            <button
                class="link-btn"
                onclick="openPage('analysis')">

                View Details

            </button>

        </div>


        <div class="metrics">


            <div class="card metric">

                <div class="metric-top">

                    <h3>
                        ${u.attendance}%
                    </h3>

                    <span class="badge green">
                        Good
                    </span>

                </div>

                <p>
                    Attendance
                </p>

            </div>


            <div class="card metric">

                <div class="metric-top">

                    <h3>
                        ${u.cgpa}
                    </h3>

                    <span class="badge purple">
                        CGPA
                    </span>

                </div>

                <p>
                    Current CGPA
                </p>

            </div>


            <div class="card metric">

                <div class="metric-top">

                    <h3>
                        ${average}%
                    </h3>

                    <span class="badge blue">
                        Average
                    </span>

                </div>

                <p>
                    Academic Average
                </p>

            </div>


            <div class="card metric">

                <div class="metric-top">

                    <h3>
                        ${money(balance)}
                    </h3>

                    <span class="badge orange">
                        Due
                    </span>

                </div>

                <p>
                    Fee Balance
                </p>

            </div>

        </div>


        <div class="section-head">

            <h2>
                Upcoming Events
            </h2>

            <button
                class="link-btn"
                onclick="openPage('events')">

                View Calendar

            </button>

        </div>


        <div class="two-col">


            <div class="card">

                ${events
                .map(eventHTML)
                .join("")}

            </div>


            <div class="card">

                <h3>
                    Performance Overview
                </h3>


                <div class="chart">

                    ${u.subjects
                    .map(subject=>`

                        <div class="bar-column">

                            <div class="bar-area">

                                <div
                                    class="bar"
                                    style="
                                        height:
                                        ${subject[1]}%
                                    ">

                                    <span
                                        class="bar-label">

                                        ${subject[1]}

                                    </span>

                                </div>

                            </div>

                            ${subject[0]}

                        </div>

                    `)
                    .join("")}

                </div>

            </div>

        </div>


        <div class="section-head">

            <h2>
                Recent Notices
            </h2>

            <button
                class="link-btn"
                onclick="openPage('notices')">

                View All

            </button>

        </div>


        <div class="card">

            ${notices
            .map(n=>`

                <div class="event-row">

                    <span style="color:#e74f63">
                        ●
                    </span>

                    <div>

                        <b>${n[0]}</b>

                        <div class="muted">
                            ${n[1]}
                        </div>

                    </div>

                </div>

            `)
            .join("")}

        </div>

    `;

}


/* =========================================================
   QUICK CARD
========================================================= */

function quickCard(
    page,
    title,
    description,
    className,
    icon
){

    return `

        <div
            class="quick-card"
            onclick="openPage('${page}')">

            <div
                class="quick-icon ${className}">

                ${icon}

            </div>

            <h3>
                ${title}
            </h3>

            <p>
                ${description}
            </p>

        </div>

    `;

}


/* =========================================================
   EVENT
========================================================= */

function eventHTML(event){

    return `

        <div class="event-row">

            <div class="date-box">

                <small>
                    ${event[1]}
                </small>

                <b>
                    ${event[0]}
                </b>

            </div>


            <div>

                <b>
                    ${event[2]}
                </b>

                <div class="muted"
                     style="font-size:11px">

                    🕐 ${event[3]}

                    &nbsp; • &nbsp;

                    📍 ${event[4]}

                </div>

            </div>


            <span
                class="badge purple"
                style="margin-left:auto">

                Upcoming

            </span>

        </div>

    `;

}


/* =========================================================
   PROFILE + UPLOAD
========================================================= */

function renderProfile(){

    const u =
        students[currentUser];


    const image =
        uploadedPictures[currentUser];


    $("profile").innerHTML = `

        <div class="section-head">

            <h2>
                Student Profile
            </h2>

            <button
                class="primary-btn"
                onclick="editProfile()">

                Edit Details

            </button>

        </div>


        <div class="card profile-layout">


            <div class="profile-picture-area">

                <div
                    id="profilePicturePreview"
                    class="profile-picture">

                    ${
                        image
                        ?
                        `<img
                            src="${image}"
                            alt="Profile picture"
                         >`
                        :
                        "👨‍🎓"
                    }

                </div>


                <label
                    class="upload-label"
                    for="profileUpload">

                    📷 Upload Profile Picture

                </label>


                <input
                    id="profileUpload"
                    type="file"
                    accept="image/*"
                >


                <div class="profile-actions">

                    ${
                        image
                        ?
                        `<button
                            class="secondary-btn"
                            onclick="removeProfilePicture()">

                            Remove

                        </button>`
                        :
                        ""
                    }

                </div>

            </div>


            <div>

                <h1>
                    ${u.name}
                </h1>

                <p class="muted">
                    ${u.course}
                </p>


                <div class="info-grid">


                    <div class="info-box">

                        <small>
                            Student ID
                        </small>

                        <b>
                            ${u.id}
                        </b>

                    </div>


                    <div class="info-box">

                        <small>
                            Semester
                        </small>

                        <b>
                            ${u.semester}
                        </b>

                    </div>


                    <div class="info-box">

                        <small>
                            Email
                        </small>

                        <b>
                            ${u.email}
                        </b>

                    </div>


                    <div class="info-box">

                        <small>
                            Phone
                        </small>

                        <b>
                            ${u.phone}
                        </b>

                    </div>


                    <div class="info-box">

                        <small>
                            Attendance
                        </small>

                        <b>
                            ${u.attendance}%
                        </b>

                    </div>


                    <div class="info-box">

                        <small>
                            CGPA
                        </small>

                        <b>
                            ${u.cgpa}
                        </b>

                    </div>


                </div>

            </div>

        </div>

    `;


    $("profileUpload").addEventListener(
        "change",
        handleProfileUpload
    );

}


function handleProfileUpload(event){

    const file =
        event.target.files[0];


    if(!file){
        return;
    }


    if(!file.type.startsWith("image/")){

        showToast(
            "Please select an image file."
        );

        return;

    }


    const reader =
        new FileReader();


    reader.onload = function(){

        uploadedPictures[currentUser] =
            reader.result;


        localStorage.setItem(
            "profilePictures",
            JSON.stringify(uploadedPictures)
        );


        updateHeaderAvatar();

        renderProfile();

        showToast(
            "Profile picture uploaded successfully."
        );

    };


    reader.readAsDataURL(file);

}


function removeProfilePicture(){

    delete uploadedPictures[currentUser];


    localStorage.setItem(
        "profilePictures",
        JSON.stringify(uploadedPictures)
    );


    updateHeaderAvatar();

    renderProfile();

    showToast(
        "Profile picture removed."
    );

}


/* =========================================================
   EDIT PROFILE
========================================================= */

function editProfile(){

    const u =
        students[currentUser];


    openModal(`

        <h2>
            Edit Profile
        </h2>


        <label>
            Email
        </label>

        <input
            id="editEmail"
            value="${u.email}"
            style="
                width:100%;
                padding:12px;
                margin:6px 0 15px;
                border:1px solid var(--border);
                border-radius:10px;
                background:var(--soft);
                color:var(--text);
            "
        >


        <label>
            Phone
        </label>

        <input
            id="editPhone"
            value="${u.phone}"
            style="
                width:100%;
                padding:12px;
                margin:6px 0 18px;
                border:1px solid var(--border);
                border-radius:10px;
                background:var(--soft);
                color:var(--text);
            "
        >


        <button
            class="primary-btn full"
            onclick="saveProfile()">

            Save Changes

        </button>

    `);

}


function saveProfile(){

    students[currentUser].email =
        $("editEmail").value;

    students[currentUser].phone =
        $("editPhone").value;


    closeModal();

    renderProfile();

    showToast(
        "Profile updated successfully."
    );

}


/* =========================================================
   ATTENDANCE
========================================================= */

function renderAttendance(){

    const u =
        students[currentUser];


    $("attendance").innerHTML = `

        <div class="section-head">

            <h2>
                Attendance Report
            </h2>

            <button
                class="link-btn"
                onclick="
                    showToast(
                        'Attendance report downloaded'
                    )
                ">

                ⬇ Download

            </button>

        </div>


        <div class="card table-wrap">

            <table class="table">

                <thead>

                    <tr>

                        <th>
                            Subject
                        </th>

                        <th>
                            Attendance
                        </th>

                        <th>
                            Classes
                        </th>

                        <th>
                            Status
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${u.subjects
                    .map((subject,index)=>{

                        const percentage =
                            Math.max(
                                65,
                                Math.min(
                                    100,
                                    u.attendance +
                                    ((index%3)-1)*3
                                )
                            );


                        return `

                            <tr>

                                <td>
                                    <b>
                                        ${subject[0]}
                                    </b>
                                </td>


                                <td>

                                    <div
                                        class="progress">

                                        <div
                                            style="
                                                width:${percentage}%
                                            ">
                                        </div>

                                    </div>

                                    <small>
                                        ${percentage}%
                                    </small>

                                </td>


                                <td>
                                    ${
                                        32 +
                                        index*2
                                    }
                                    / 
                                    ${
                                        35 +
                                        index*2
                                    }
                                </td>


                                <td>

                                    <span
                                        class="
                                        badge
                                        ${
                                            percentage>=75
                                            ? "green"
                                            : "red"
                                        }">

                                        ${
                                            percentage>=75
                                            ? "Good"
                                            : "Shortage"
                                        }

                                    </span>

                                </td>

                            </tr>

                        `;

                    })
                    .join("")}

                </tbody>

            </table>

        </div>

    `;

}


/* =========================================================
   GRADES
========================================================= */

function renderGrades(){

    const u =
        students[currentUser];


    $("grades").innerHTML = `

        <div class="section-head">

            <h2>
                Grade Sheet
            </h2>

            <button
                class="link-btn"
                onclick="
                    showToast(
                        'Grade sheet downloaded'
                    )
                ">

                ⬇ Download

            </button>

        </div>


        <div class="card table-wrap">

            <table class="table">

                <thead>

                    <tr>

                        <th>
                            Subject
                        </th>

                        <th>
                            Marks
                        </th>

                        <th>
                            Grade
                        </th>

                        <th>
                            Internal
                        </th>

                        <th>
                            Performance
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${u.subjects
                    .map(s=>`

                        <tr>

                            <td>
                                ${s[0]}
                            </td>

                            <td>
                                ${s[1]}/100
                            </td>

                            <td>

                                <span
                                    class="
                                    badge
                                    ${
                                        s[1]>=80
                                        ? "green"
                                        : "orange"
                                    }">

                                    ${grade(s[1])}

                                </span>

                            </td>

                            <td>
                                ${s[2]}%
                            </td>

                            <td>
                                ${
                                    s[1]>=90
                                    ? "Excellent"
                                    :
                                    s[1]>=80
                                    ? "Very Good"
                                    :
                                    s[1]>=70
                                    ? "Good"
                                    :
                                    "Needs Improvement"
                                }
                            </td>

                        </tr>

                    `)
                    .join("")}

                </tbody>

            </table>

        </div>


        <div class="card"
             style="margin-top:16px">

            <h3>
                Subject Performance
            </h3>

            <div class="chart">

                ${u.subjects
                .map(s=>`

                    <div class="bar-column">

                        <div class="bar-area">

                            <div
                                class="bar"
                                style="
                                    height:${s[1]}%
                                ">

                                <span
                                    class="bar-label">

                                    ${s[1]}

                                </span>

                            </div>

                        </div>

                        ${s[0]}

                    </div>

                `)
                .join("")}

            </div>

        </div>

    `;

}


/* =========================================================
   ENHANCED STUDENT ANALYSIS
========================================================= */

function renderAnalysis(){

    const u =
        students[currentUser];


    const scores =
        u.subjects.map(s=>s[1]);


    const average =
        scores.reduce(
            (a,b)=>a+b,
            0
        ) / scores.length;


    const highest =
        Math.max(...scores);


    const lowest =
        Math.min(...scores);


    const best =
        u.subjects.find(
            s=>s[1]===highest
        )[0];


    const needsWork =
        u.subjects.find(
            s=>s[1]===lowest
        )[0];


    const assignmentCompletion =
        Math.round(
            (
                u.assignments
                .filter(a=>a[3]==="Submitted")
                .length
                /
                u.assignments.length
            ) * 100
        );


    const attendanceScore =
        u.attendance >= 90
        ? 100
        : u.attendance >= 80
        ? 88
        : 72;


    const academicIndex =
        Math.round(
            (
                average*.5 +
                attendanceScore*.25 +
                assignmentCompletion*.25
            )
        );


    let level =
        academicIndex >= 90
        ? "Outstanding"
        :
        academicIndex >= 80
        ? "Strong"
        :
        academicIndex >= 70
        ? "Moderate"
        :
        "Needs Focus";


    let recommendation;


    if(u.attendance < 75){

        recommendation =
            "Attendance needs immediate attention. Attend regular classes to protect eligibility.";

    }

    else if(lowest < 75){

        recommendation =
            `Focus more on ${needsWork}. Extra practice and revision can improve your overall average.`;

    }

    else if(assignmentCompletion < 70){

        recommendation =
            "Try to complete assignments earlier and maintain a consistent submission routine.";

    }

    else{

        recommendation =
            "Your academic performance is consistent. Keep the same routine and target higher marks in your weaker subjects.";

    }


    $("analysis").innerHTML = `

        <div class="section-head">

            <h2>
                Student Performance Analysis
            </h2>

            <button
                class="primary-btn"
                onclick="showToast('Analysis report generated')">

                Generate Report

            </button>

        </div>


        <div class="metrics">


            <div class="card metric">

                <div class="metric-top">

                    <h3>
                        ${Math.round(average)}%
                    </h3>

                    <span
                        class="badge blue">

                        Average

                    </span>

                </div>

                <p>
                    Overall Academic Average
                </p>

            </div>


            <div class="card metric">

                <div class="metric-top">

                    <h3>
                        ${highest}
                    </h3>

                    <span
                        class="badge green">

                        Best

                    </span>

                </div>

                <p>
                    Highest Subject Mark
                </p>

            </div>


            <div class="card metric">

                <div class="metric-top">

                    <h3>
                        ${academicIndex}
                    </h3>

                    <span
                        class="badge purple">

                        Index

                    </span>

                </div>

                <p>
                    Student Performance Index
                </p>

            </div>


            <div class="card metric">

                <div class="metric-top">

                    <h3>
                        ${level}
                    </h3>

                    <span
                        class="badge green">

                        Status

                    </span>

                </div>

                <p>
                    Current Performance
                </p>

            </div>

        </div>


        <div
            class="analysis-grid"
            style="margin-top:16px">


            <div class="card">

                <h3>
                    Subject-wise Analysis
                </h3>


                ${u.subjects
                .map(s=>`

                    <div
                        class="analysis-item"
                        style="margin-bottom:10px">

                        <div
                            class="analysis-header">

                            <b>
                                ${s[0]}
                            </b>

                            <span>
                                ${s[1]}%
                            </span>

                        </div>


                        <div
                            class="progress">

                            <div
                                style="
                                    width:${s[1]}%
                                ">
                            </div>

                        </div>


                        <small
                            class="muted">

                            ${
                                s[1]>=90
                                ? "Excellent performance"
                                :
                                s[1]>=80
                                ? "Very good performance"
                                :
                                s[1]>=75
                                ? "Good performance"
                                :
                                "Needs improvement"

                            }

                        </small>

                    </div>

                `)
                .join("")}

            </div>


            <div class="card">

                <h3>
                    Performance Indicators
                </h3>


                <div
                    class="analysis-item">

                    <div
                        class="analysis-header">

                        <b>
                            Attendance
                        </b>

                        <strong>
                            ${u.attendance}%
                        </strong>

                    </div>

                    <div class="progress">

                        <div
                            style="
                                width:${u.attendance}%
                            ">
                        </div>

                    </div>

                </div>


                <div
                    class="analysis-item"
                    style="margin-top:10px">

                    <div
                        class="analysis-header">

                        <b>
                            Assignment Completion
                        </b>

                        <strong>
                            ${assignmentCompletion}%
                        </strong>

                    </div>

                    <div class="progress">

                        <div
                            style="
                                width:${assignmentCompletion}%
                            ">
                        </div>

                    </div>

                </div>


                <div
                    class="analysis-item"
                    style="margin-top:10px">

                    <div
                        class="analysis-header">

                        <b>
                            Academic Consistency
                        </b>

                        <strong>
                            ${u.cgpa}/10
                        </strong>

                    </div>

                    <div class="progress">

                        <div
                            style="
                                width:${u.cgpa*10}%
                            ">
                        </div>

                    </div>

                </div>


                <div
                    class="insight">

                    <strong>
                        🏆 Strongest Subject
                    </strong>

                    ${best}
                    with ${highest} marks.

                </div>


                <div
                    class="insight">

                    <strong>
                        🎯 Area to Improve
                    </strong>

                    ${needsWork}
                    with ${lowest} marks.

                </div>


                <div
                    class="insight">

                    <strong>
                        💡 Recommendation
                    </strong>

                    ${recommendation}

                </div>

            </div>

        </div>


        <div
            class="card"
            style="margin-top:16px">

            <h3>
                Academic Summary
            </h3>

            <p
                class="muted"
                style="
                    line-height:1.8;
                    margin-bottom:0">

                ${u.name}
                currently has a CGPA of
                <b>${u.cgpa}</b>
                with an average score of
                <b>${Math.round(average)}%</b>.
                Attendance is
                <b>${u.attendance}%</b>
                and
                <b>${assignmentCompletion}%</b>
                of assignments are completed.
                The strongest subject is
                <b>${best}</b>,
                while
                <b>${needsWork}</b>
                should receive additional attention.

            </p>

        </div>

    `;

}


/* =========================================================
   ASSIGNMENTS
========================================================= */

function renderAssignments(){

    const u =
        students[currentUser];


    $("assignments").innerHTML = `

        <div class="section-head">

            <h2>
                Assignments
            </h2>

            <button
                class="link-btn"
                onclick="
                    showToast(
                        'Assignments refreshed'
                    )
                ">

                ↻ Refresh

            </button>

        </div>


        <div class="card table-wrap">

            <table class="table">

                <thead>

                    <tr>

                        <th>
                            Subject
                        </th>

                        <th>
                            Assignment
                        </th>

                        <th>
                            Due Date
                        </th>

                        <th>
                            Status
                        </th>

                        <th>
                            Action
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${u.assignments
                    .map((a,i)=>`

                        <tr>

                            <td>
                                ${a[0]}
                            </td>

                            <td>
                                <b>
                                    ${a[1]}
                                </b>
                            </td>

                            <td>
                                ${a[2]}
                            </td>

                            <td>

                                <span
                                    class="
                                    badge
                                    ${
                                        a[3]==="Submitted"
                                        ? "green"
                                        : "orange"
                                    }">

                                    ${a[3]}

                                </span>

                            </td>


                            <td>

                                <button
                                    class="link-btn"
                                    onclick="
                                        assignmentAction(${i})
                                    ">

                                    ${
                                        a[3]==="Pending"
                                        ? "Submit"
                                        : "View"
                                    }

                                </button>

                            </td>

                        </tr>

                    `)
                    .join("")}

                </tbody>

            </table>

        </div>

    `;

}


function assignmentAction(index){

    const assignment =
        students[currentUser]
        .assignments[index];


    if(
        assignment[3] === "Pending"
    ){

        assignment[3] =
            "Submitted";


        renderAssignments();

        renderHome();

        showToast(
            "Assignment submitted successfully."
        );

    }

    else{

        openModal(`

            <h2>
                Assignment Details
            </h2>

            <p>
                <b>
                    ${assignment[1]}
                </b>
            </p>

            <p>
                Subject:
                ${assignment[0]}
            </p>

            <p>
                Due Date:
                ${assignment[2]}
            </p>

            <p>
                Status:
                <span class="badge green">
                    Submitted
                </span>
            </p>

        `);

    }

}


/* =========================================================
   EXAMS
========================================================= */

function renderExams(){

    const examData = [

        [
            "Mid Semester",
            "18 Sep 2026",
            "10:00 AM",
            "Block A – 204"
        ],

        [
            "Practical Examination",
            "25 Sep 2026",
            "09:30 AM",
            "Lab Complex"
        ],

        [
            "End Semester",
            "10 Oct 2026",
            "10:00 AM",
            "Main Hall"
        ]

    ];


    $("exams").innerHTML = `

        <div class="section-head">

            <h2>
                Exam Schedule
            </h2>

        </div>


        <div class="card table-wrap">

            <table class="table">

                <thead>

                    <tr>

                        <th>
                            Exam
                        </th>

                        <th>
                            Date
                        </th>

                        <th>
                            Time
                        </th>

                        <th>
                            Venue
                        </th>

                        <th>
                            Status
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${examData
                    .map(e=>`

                        <tr>

                            <td>
                                ${e[0]}
                            </td>

                            <td>
                                ${e[1]}
                            </td>

                            <td>
                                ${e[2]}
                            </td>

                            <td>
                                ${e[3]}
                            </td>

                            <td>

                                <span
                                    class="badge purple">

                                    Scheduled

                                </span>

                            </td>

                        </tr>

                    `)
                    .join("")}

                </tbody>

            </table>

        </div>

    `;

}


/* =========================================================
   TIMETABLE
========================================================= */

function renderTimetable(){

    const timetable = [

        [
            "Mon",
            "10:00 AM",
            "Data Structures",
            "Room 205"
        ],

        [
            "Tue",
            "11:00 AM",
            "Operating Systems",
            "Room 104"
        ],

        [
            "Wed",
            "09:00 AM",
            "Database Systems",
            "Lab 2"
        ],

        [
            "Thu",
            "12:00 PM",
            "Computer Networks",
            "Room 302"
        ],

        [
            "Fri",
            "10:00 AM",
            "Machine Learning",
            "AI Lab"
        ]

    ];


    $("timetable").innerHTML = `

        <div class="section-head">

            <h2>
                Weekly Timetable
            </h2>

            <button
                class="link-btn"
                onclick="
                    showToast(
                        'Timetable exported'
                    )
                ">

                ⬇ Export

            </button>

        </div>


        <div class="card">

            ${timetable.map(t=>`

                <div class="event-row">

                    <b style="width:45px">
                        ${t[0]}
                    </b>

                    <b>
                        ${t[1]}
                    </b>

                    <span>
                        ${t[2]}
                    </span>

                    <span
                        class="muted"
                        style="margin-left:auto">

                        ${t[3]}

                    </span>

                </div>

            `)
            .join("")}

        </div>

    `;

}


/* =========================================================
   FEES
========================================================= */

function renderFees(){

    const u =
        students[currentUser];


    const balance =
        u.fees.total -
        u.fees.paid;


    const paidPercent =
        Math.round(
            u.fees.paid /
            u.fees.total *
            100
        );


    $("fees").innerHTML = `

        <div class="metrics">


            <div class="card metric">

                <h3>
                    ${money(u.fees.total)}
                </h3>

                <p>
                    Total Fees
                </p>

            </div>


            <div class="card metric">

                <h3>
                    ${money(u.fees.paid)}
                </h3>

                <p>
                    Paid
                </p>

            </div>


            <div class="card metric">

                <h3>
                    ${money(balance)}
                </h3>

                <p>
                    Balance
                </p>

            </div>


            <div class="card metric">

                <h3>
                    ${paidPercent}%
                </h3>

                <p>
                    Payment Progress
                </p>

            </div>

        </div>


        <div class="section-head">

            <h2>
                Payment History
            </h2>

            <button
                class="primary-btn"
                onclick="
                    showToast(
                        'Receipt downloaded'
                    )
                ">

                ⬇ Receipt

            </button>

        </div>


        <div class="card table-wrap">

            <table class="table">

                <thead>

                    <tr>

                        <th>
                            Date
                        </th>

                        <th>
                            Reference
                        </th>

                        <th>
                            Amount
                        </th>

                        <th>
                            Status
                        </th>

                    </tr>

                </thead>


                <tbody>

                    <tr>

                        <td>
                            02 Aug 2026
                        </td>

                        <td>
                            TXN-88241
                        </td>

                        <td>
                            ${money(40000)}
                        </td>

                        <td>

                            <span
                                class="badge green">

                                Paid

                            </span>

                        </td>

                    </tr>


                    <tr>

                        <td>
                            02 Sep 2026
                        </td>

                        <td>
                            TXN-91752
                        </td>

                        <td>
                            ${money(
                                u.fees.paid - 40000
                            )}
                        </td>

                        <td>

                            <span
                                class="badge green">

                                Paid

                            </span>

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>

    `;

}


/* =========================================================
   EVENTS
========================================================= */

function renderEvents(){

    $("events").innerHTML = `

        <div class="section-head">

            <h2>
                Events Calendar
            </h2>

            <button
                class="primary-btn"
                onclick="
                    showToast(
                        'Calendar synced'
                    )
                ">

                Sync Calendar

            </button>

        </div>


        <div class="card">

            ${events
            .map(eventHTML)
            .join("")}

        </div>

    `;

}


/* =========================================================
   NOTICES
========================================================= */

function renderNotices(){

    $("notices").innerHTML = `

        <div class="section-head">

            <h2>
                Notices & Announcements
            </h2>

            <button
                class="link-btn"
                onclick="
                    notificationCount=0;
                    document.querySelector('.notification-count').textContent=0;
                    showToast('All notices marked as read')
                ">

                ✓ Mark all read

            </button>

        </div>


        <div class="card">

            ${notices.map(n=>`

                <div class="event-row">

                    <span
                        style="color:#e74f63">

                        ●

                    </span>


                    <div>

                        <b>
                            ${n[0]}
                        </b>

                        <div
                            class="muted">

                            ${n[1]}

                        </div>

                    </div>

                </div>

            `)
            .join("")}

        </div>

    `;

}


/* =========================================================
   GALLERY
========================================================= */

function renderGallery(){

    const albums = [

        ["Science Exhibition","🔬"],

        ["Sports Day","🏆"],

        ["Coding Hackathon","💻"],

        ["Annual Function","🎭"],

        ["Workshop","🧪"],

        ["Campus Life","🏫"]

    ];


    $("gallery").innerHTML = `

        <div class="section-head">

            <h2>
                Gallery
            </h2>

        </div>


        <div class="grid3">

            ${albums
            .map(a=>`

                <div class="card">

                    <div class="visual">

                        ${a[1]}

                    </div>

                    <h3>
                        ${a[0]}
                    </h3>

                    <small
                        class="muted">

                        Campus album

                    </small>

                </div>

            `)
            .join("")}

        </div>

    `;

}


/* =========================================================
   LIBRARY
========================================================= */

function renderLibrary(){

    $("library").innerHTML = `

        <div class="section-head">

            <h2>
                Library
            </h2>

            <input
                id="bookSearch"
                class="inner-search"
                placeholder="Search books..."
            >

        </div>


        <div
            id="bookGrid"
            class="grid3">

            ${books
            .map(book=>`

                <div
                    class="card book-card">

                    <div
                        style="
                            font-size:42px">

                        ${book[2]}

                    </div>

                    <h3>
                        ${book[0]}
                    </h3>

                    <p
                        class="muted">

                        ${book[1]}

                    </p>

                    <button
                        class="secondary-btn"
                        onclick="
                            showToast(
                                'Book reserved successfully'
                            )
                        ">

                        Reserve

                    </button>

                </div>

            `)
            .join("")}

        </div>

    `;


    $("bookSearch").addEventListener(
        "input",
        function(){

            const value =
                this.value
                .toLowerCase();


            document
            .querySelectorAll(".book-card")
            .forEach(card=>{

                card.style.display =
                    card.textContent
                    .toLowerCase()
                    .includes(value)
                    ? ""
                    : "none";

            });

        }
    );

}


/* =========================================================
   FACULTY LIST
========================================================= */

function renderStaff(){

    $("staff").innerHTML = `

        <div class="section-head">

            <h2>
                Faculty Directory
            </h2>

            <input
                id="facultySearch"
                class="inner-search"
                placeholder="Search faculty..."
            >

        </div>


        <div
            id="facultyCards"
            class="grid3">

            ${faculty
            .map(f=>`

                <div
                    class="card faculty-card">

                    <div
                        class="faculty-user">

                        <div
                            class="faculty-avatar">

                            ${f.icon}

                        </div>

                        <div>

                            <b>
                                ${f.name}
                            </b>

                            <div
                                class="muted"
                                style="
                                    font-size:12px">

                                ${f.subject}

                            </div>

                        </div>

                    </div>


                    <p
                        class="muted">

                        ${f.email}

                    </p>


                    <button
                        class="primary-btn full"
                        onclick="
                            openFacultyChat(
                                '${f.id}'
                            )
                        ">

                        💬 Message Faculty

                    </button>

                </div>

            `)
            .join("")}

        </div>

    `;


    $("facultySearch").addEventListener(
        "input",
        function(){

            const value =
                this.value
                .toLowerCase();


            document
            .querySelectorAll(
                ".faculty-card"
            )
            .forEach(card=>{

                card.style.display =
                    card.textContent
                    .toLowerCase()
                    .includes(value)
                    ? ""
                    : "none";

            });

        }
    );

}


/* =========================================================
   FACULTY CHAT / MESSAGE SYSTEM
========================================================= */

function initializeFacultyMessages(){

    if(!messages[currentUser]){
        messages[currentUser] = {};
    }


    faculty.forEach(f=>{

        if(!messages[currentUser][f.id]){

            messages[currentUser][f.id] = [

                {
                    sender:"faculty",

                    text:
                        `Hello ${
                            students[currentUser]
                            .name
                            .split(" ")[0]
                        }! Feel free to ask me about ${f.subject}.`,

                    time:"Today"
                }

            ];

        }

    });


    saveMessages();

}


function saveMessages(){

    localStorage.setItem(
        "studentMessages",
        JSON.stringify(messages)
    );

}


function openFacultyChat(facultyId){

    selectedFaculty =
        facultyId;

    openPage("chat");

}


function renderChat(){

    initializeFacultyMessages();


    const selected =
        faculty.find(
            f=>f.id===selectedFaculty
        );


    $("chat").innerHTML = `

        <div class="section-head">

            <div>

                <h2>
                    Messages
                </h2>

                <div
                    class="muted"
                    style="font-size:12px">

                    Send messages directly
                    to your faculty

                </div>

            </div>


            <button
                class="primary-btn"
                onclick="openPage('staff')">

                + New Message

            </button>

        </div>


        <div class="message-layout">


            <div class="card faculty-list">

                <h3
                    style="
                        margin-top:0">

                    Faculty

                </h3>


                ${faculty
                .map(f=>`

                    <div
                        class="
                        faculty-item
                        ${
                            f.id===selected.id
                            ? "active"
                            : ""
                        }"
                        onclick="
                            selectedFaculty='${f.id}';
                            renderChat()
                        ">

                        <div
                            class="faculty-user">

                            <div
                                class="faculty-avatar">

                                ${f.icon}

                            </div>


                            <div>

                                <b>
                                    ${f.name}
                                </b>

                                <div
                                    class="muted"
                                    style="
                                        font-size:11px">

                                    ${f.subject}

                                </div>

                            </div>

                        </div>

                    </div>

                `)
                .join("")}

            </div>


            <div
                class="card chat-card">


                <div class="chat-header">

                    <div
                        class="faculty-user">

                        <div
                            class="faculty-avatar">

                            ${selected.icon}

                        </div>


                        <div>

                            <b>
                                ${selected.name}
                            </b>

                            <div
                                class="muted"
                                style="
                                    font-size:12px">

                                ${selected.subject}
                                ·
                                Faculty

                            </div>

                        </div>

                    </div>

                </div>


                <div
                    id="chatMessages"
                    class="chat-messages">

                    ${renderMessagesForFaculty(
                        selected.id
                    )}

                </div>


                <div
                    class="attachment-box">

                    <button
                        class="attach-btn"
                        onclick="
                            showToast(
                                'Attachment option selected'
                            )
                        ">

                        📎 Attach File

                    </button>

                    <span>
                        Send academic questions,
                        doubts, requests or files
                        to faculty.
                    </span>

                </div>


                <div
                    class="chat-composer">

                    <textarea
                        id="facultyMessageInput"
                        placeholder="
                        Write a message to
                        ${selected.name}...
                        "
                    ></textarea>


                    <button
                        class="primary-btn"
                        onclick="sendFacultyMessage()">

                        Send

                    </button>

                </div>


            </div>

        </div>

    `;


    const textarea =
        $("facultyMessageInput");


    textarea.addEventListener(
        "keydown",
        event=>{

            if(
                event.key === "Enter" &&
                !event.shiftKey
            ){

                event.preventDefault();

                sendFacultyMessage();

            }

        }
    );

}


function renderMessagesForFaculty(facultyId){

    const list =
        messages[currentUser][facultyId] ||
        [];


    return list
    .map(m=>`

        <div
            class="
            chat-message
            ${
                m.sender==="student"
                ? "me"
                : ""
            }">

            ${escapeHTML(m.text)}

            <span
                class="chat-time">

                ${m.time}

            </span>

        </div>

    `)
    .join("");

}


function sendFacultyMessage(){

    const input =
        $("facultyMessageInput");


    if(!input){
        return;
    }


    const text =
        input.value.trim();


    if(!text){

        showToast(
            "Please type a message."
        );

        return;

    }


    if(!messages[currentUser]){
        messages[currentUser] = {};
    }


    if(
        !messages[currentUser][selectedFaculty]
    ){

        messages[currentUser][selectedFaculty] =
            [];

    }


    messages[currentUser][selectedFaculty]
    .push({

        sender:"student",

        text:text,

        time:"Just now"

    });


    saveMessages();


    renderChat();


    showToast(
        "Message sent to faculty."
    );


    /* Simulated faculty reply */

    setTimeout(()=>{

        const f =
            faculty.find(
                x=>x.id===selectedFaculty
            );


        messages[currentUser][selectedFaculty]
        .push({

            sender:"faculty",

            text:
                `Thanks for your message. ${
                    f.name
                } will review it shortly.`,

            time:"Just now"

        });


        saveMessages();

        renderChat();

    },900);

}


function escapeHTML(text){

    return text
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");

}


/* =========================================================
   SETTINGS / DARK MODE
========================================================= */

function renderSettings(){

    const savedDark =
        localStorage.getItem(
            "darkMode"
        ) === "true";


    $("settings").innerHTML = `

        <div class="section-head">

            <h2>
                Settings
            </h2>

        </div>


        <div class="card">


            <div class="setting-row">

                <div class="setting-info">

                    <b>
                        🌙 Dark Mode
                    </b>

                    <span>
                        Switch between light
                        and dark appearance.
                    </span>

                </div>


                <button
                    id="darkModeSwitch"
                    class="
                    switch
                    ${savedDark ? "on" : ""}
                    "
                    onclick="toggleDarkMode()">

                </button>

            </div>


            <div class="setting-row">

                <div class="setting-info">

                    <b>
                        🔔 Notifications
                    </b>

                    <span>
                        Receive academic alerts.
                    </span>

                </div>


                <button
                    class="switch on"
                    onclick="this.classList.toggle('on')">

                </button>

            </div>


            <div class="setting-row">

                <div class="setting-info">

                    <b>
                        📚 Assignment Reminders
                    </b>

                    <span>
                        Get reminders before due dates.
                    </span>

                </div>


                <button
                    class="switch on"
                    onclick="this.classList.toggle('on')">

                </button>

            </div>


            <div class="setting-row">

                <div class="setting-info">

                    <b>
                        📩 Faculty Message Alerts
                    </b>

                    <span>
                        Notify when faculty replies.
                    </span>

                </div>


                <button
                    class="switch on"
                    onclick="this.classList.toggle('on')">

                </button>

            </div>

        </div>

    `;


    if(savedDark){

        document.body.classList.add("dark");

    }

}


/* =========================================================
   DARK MODE
========================================================= */

function toggleDarkMode(){

    document.body
    .classList
    .toggle("dark");


    const enabled =
        document.body
        .classList
        .contains("dark");


    localStorage.setItem(
        "darkMode",
        enabled
    );


    const switchButton =
        $("darkModeSwitch");


    if(switchButton){

        switchButton
        .classList
        .toggle(
            "on",
            enabled
        );

    }


    showToast(
        enabled
        ? "Dark mode enabled."
        : "Light mode enabled."
    );

}


/* =========================================================
   MODAL
========================================================= */

function openModal(content){

    $("modalBody").innerHTML =
        content;

    $("modal")
    .classList
    .remove("hidden");

}


function closeModal(){

    $("modal")
    .classList
    .add("hidden");

}


$("closeModal").onclick =
    closeModal;


/* =========================================================
   NOTIFICATIONS
========================================================= */

$("notificationBtn").onclick = ()=>{

    openModal(`

        <h2>
            Notifications
        </h2>


        <div
            class="insight">

            <strong>
                🔴 Exam Timetable
            </strong>

            The examination schedule
            has been released.

        </div>


        <div
            class="insight">

            <strong>
                🟠 Parent Teacher Meeting
            </strong>

            Your PTM reminder is active.

        </div>


        <div
            class="insight">

            <strong>
                🟢 Library Update
            </strong>

            New books are now available.

        </div>

    `);

};


/* =========================================================
   MOBILE MENU
========================================================= */

$("menuBtn").onclick = ()=>{

    $("sidebar")
    .classList
    .toggle("open");

};


/* =========================================================
   GLOBAL SEARCH
========================================================= */

$("globalSearch").addEventListener(
    "input",
    function(){

        const value =
            this.value
            .trim()
            .toLowerCase();


        if(!value){
            return;
        }


        const navButtons =
            document
            .querySelectorAll(
                ".nav-btn[data-page]"
            );


        for(
            const button
            of navButtons
        ){

            if(
                button.textContent
                .toLowerCase()
                .includes(value)
            ){

                openPage(
                    button.dataset.page
                );

                break;

            }

        }

    }
);


/* =========================================================
   LOGOUT
========================================================= */

$("logoutBtn").onclick = ()=>{

    currentUser = null;

    $("app")
    .classList
    .add("hidden");


    $("loginScreen")
    .classList
    .remove("hidden");


    $("loginForm").reset();

    $("loginError").textContent = "";

    generateCaptcha();

};


/* =========================================================
   NOTIFICATION COUNT
========================================================= */

function updateNotificationCount(){

    const countElement =
        document.querySelector(
            ".notification-count"
        );


    countElement.textContent =
        notificationCount;

}


updateNotificationCount();


/* =========================================================
   STARTUP
========================================================= */

renderHome();
