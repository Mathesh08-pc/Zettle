// ===== ALL SEMESTER & COURSE DATA =====
const SEMESTERS = {
    1: {
        title: "Semester 1",
        courses: [
            { code: "EN3111", title: "Professional English - I" },
            { code: "MA3122", title: "Matrices and Calculus" },
            { code: "PH3123", title: "Engineering Physics" },
            { code: "CH3124", title: "Engineering Chemistry" },
            { code: "GE3133", title: "Basic Civil and Mechanical Engineering" },
            { code: "GE3111", title: "Heritage of Tamils" },
            { code: "GE3121", title: "Physics and Chemistry Laboratory" },
            { code: "GE3134", title: "Engineering Practices Laboratory" },
            { code: "EN3119", title: "English Language Learning Laboratory" }
        ]
    },
    2: {
        title: "Semester 2",
        courses: [
            { code: "EN3211", title: "Professional English - II" },
            { code: "MA3222", title: "Statistics and Numerical Methods" },
            { code: "PH3223", title: "Physics for Electronics Engineering" },
            { code: "CH3223", title: "Chemistry of Electronic Materials" },
            { code: "GE3231", title: "Problem Solving and Python Programming" },
            { code: "GE3211", title: "Tamils and Technology" },
            { code: "GE3233", title: "Engineering Graphics and Design" },
            { code: "GE3221", title: "Engineering Sciences Laboratory" },
            { code: "GE3232", title: "Problem Solving and Python Programming Laboratory" }
        ]
    },
    3: {
        title: "Semester 3",
        courses: [
            { code: "MA3321", title: "Transforms and Partial Differential Equations" },
            { code: "EE3363", title: "Electric Circuit Analysis" },
            { code: "EI3361", title: "Electron Devices and Circuits" },
            { code: "EI3362", title: "Electrical and Electronic Instruments" },
            { code: "EI3363", title: "Transducers Engineering" },
            { code: "ME3366", title: "Applied Fluid Dynamics and Thermodynamics" },
            { code: "EI3364", title: "Measurements and Transducers Laboratory" },
            { code: "EE3365", title: "Electric Circuits Laboratory" },
            { code: "EI3365", title: "Electron Devices and Circuits Laboratory" }
        ]
    },
    4: {
        title: "Semester 4",
        courses: [
            { code: "MA3423", title: "Applied Mathematics for EIE" },
            { code: "EI3461", title: "Electrical Machines" },
            { code: "EE3361", title: "Digital Logic Circuits" },
            { code: "EI3463", title: "Electronics for Analog Signal Processing" },
            { code: "EI3464", title: "Control Systems" },
            { code: "EI3465", title: "Microprocessors and Microcontrollers" },
            { code: "EI3466", title: "Electrical Machines and Control Systems Laboratory" },
            { code: "EI3467", title: "Linear and Digital Integrated Circuits Laboratory" },
            { code: "EI3468", title: "Microprocessors and Microcontrollers Laboratory" }
        ]
    },
    5: {
        title: "Semester 5",
        courses: [
            { code: "EI3561", title: "Industrial Instrumentation" },
            { code: "EC3568", title: "Discrete Time Systems and Signal Processing" },
            { code: "EI3562", title: "Process Control" },
            { code: "CE3531", title: "Environmental Studies" },
            { code: "PEIXXX", title: "Professional Elective - I" },
            { code: "PEIXXX2", title: "Professional Elective - II" },
            { code: "EI3563", title: "Industrial Automation Systems" },
            { code: "EI3564", title: "Industrial Instrumentation Laboratory" },
            { code: "EI3565", title: "Process Control Laboratory" }
        ]
    }
};

/*
 * ============================================================
 *  HOW TO ADD MATERIALS
 * ============================================================
 *
 *  STEP 1: Upload your PDF/image to the GitHub repo under:
 *          materials/sem{N}/{COURSE_CODE}/filename.pdf
 *
 *          Example: materials/sem3/PH3123/physics_2024.pdf
 *
 *  STEP 2: Add an entry below in the MATERIALS object under
 *          the correct course code:
 *
 *          "PH3123": [
 *              {
 *                  name: "Engineering Physics — 2024",
 *                  desc: "University Exam · End Semester",
 *                  file: "materials/sem1/PH3123/physics_2024.pdf",
 *                  type: "pdf",
 *                  category: "qp"       // "qp", "notes", or "other"
 *              },
 *              {
 *                  name: "Engineering Physics — Unit 1",
 *                  desc: "Handwritten · 24 pages",
 *                  file: "materials/sem1/PH3123/unit1_notes.pdf",
 *                  type: "pdf",
 *                  category: "notes"
 *              }
 *          ]
 *
 *  STEP 3: Push to GitHub. Done!
 *
 *  CATEGORIES:
 *    "qp"    → shown under "Question Papers" tab
 *    "notes" → shown under "Notes" tab
 *    "other" → shown under "Other Materials" tab
 *
 *  TYPES:
 *    "pdf"   → shows PDF badge
 *    "img"   → shows IMG badge
 *    "doc"   → shows DOC badge
 * ============================================================
 */
const MATERIALS = {
    // === SEMESTER 1 ===
    // "EN3111": [
    //     { name: "Professional English — 2024", desc: "University Exam · End Semester", file: "materials/sem1/EN3111/english_2024.pdf", type: "pdf", category: "qp" },
    // ],
    // "MA3122": [
    //     { name: "Matrices and Calculus — Unit 1", desc: "Typed Notes · 30 pages", file: "materials/sem1/MA3122/unit1.pdf", type: "pdf", category: "notes" },
    // ],

    // Add your materials here!
};
