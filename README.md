# 📓 Zettle — Your Study Hub

A beautiful, dark-themed static website to organise and share college study materials — question papers, notes, and more — sorted by semester and subject.

**🌐 Live Site:** [https://mathesh08-pc.github.io/Zettle/](https://mathesh08-pc.github.io/Zettle/)

---

## ✨ Features

- 📚 **8-semester grid** — clean navigation across all semesters
- 📄 **Material viewer** — inline PDF preview and image viewer
- 📥 **Download support** — one-click download for all materials
- 📱 **Fully responsive** — works on mobile, tablet, and desktop
- 🌑 **Dark theme** — easy on the eyes, premium aesthetic
- ⚡ **Zero dependencies** — pure HTML, CSS, and vanilla JS

---

## 📁 Project Structure

```
Zettle/
├── index.html        ← Home page (semester grid)
├── semester.html     ← Subject listing for a semester
├── subject.html      ← Materials page (QP / Notes / Other)
├── viewer.html       ← PDF & image viewer
├── styles.css        ← All styling
├── data.js           ← Semester, course & material data
└── materials/        ← All uploaded files
    ├── sem1/
    ├── sem2/
    ├── sem3/
    ├── sem4/
    └── sem5/
```

---

## 🚀 How to Add New Notes / Question Papers

### Step 1: Prepare your files

- PDFs, images (`.png`, `.jpg`, `.jpeg`, `.webp`), or documents
- Rename them descriptively, e.g., `physics_2024_endsem.pdf`

### Step 2: Upload files to the `materials/` folder

Place your file inside the correct semester and course-code folder:

```
materials/sem{N}/{COURSE_CODE}/your_file.pdf
```

**Example:**
```
materials/sem1/PH3123/physics_2024_endsem.pdf
materials/sem3/EI3361/unit1_notes.jpg
```

> If the course folder doesn't exist, create it!

### Step 3: Register the material in `data.js`

Open `data.js` and add an entry in the `MATERIALS` object under the correct course code:

```javascript
const MATERIALS = {
    "PH3123": [
        {
            name: "Engineering Physics — 2024 End Sem",
            desc: "University Exam · April 2024",
            file: "materials/sem1/PH3123/physics_2024_endsem.pdf",
            type: "pdf",          // "pdf", "img", or "doc"
            category: "qp"        // "qp", "notes", or "other"
        },
        {
            name: "Unit 1 — Quantum Physics Notes",
            desc: "Handwritten · 24 pages",
            file: "materials/sem1/PH3123/unit1_notes.pdf",
            type: "pdf",
            category: "notes"
        }
    ],
    "MA3122": [
        {
            name: "Matrices & Calculus — 2024",
            desc: "University Exam · End Semester",
            file: "materials/sem1/MA3122/maths_2024.pdf",
            type: "pdf",
            category: "qp"
        }
    ]
};
```

### Step 4: Commit and push

```bash
git add .
git commit -m "Add physics 2024 QP"
git push
```

The site will auto-update via GitHub Pages within ~1 minute.

---

## 📋 Material Fields Reference

| Field      | Required | Values                         | Description                          |
|------------|----------|--------------------------------|--------------------------------------|
| `name`     | ✅       | Any string                     | Display title of the material        |
| `desc`     | ✅       | Any string                     | Short description                    |
| `file`     | ✅       | Relative path                  | Path to the file in `materials/`     |
| `type`     | ✅       | `"pdf"`, `"img"`, `"doc"`      | File type badge shown on UI          |
| `category` | ✅       | `"qp"`, `"notes"`, `"other"`   | Which tab the material appears under |

---

## 🌐 Hosting with GitHub Pages

This site is hosted for free using GitHub Pages:

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch and **/ (root)** folder
4. Click **Save**
5. Your site will be live at: `https://<username>.github.io/Zettle/`

---

## 🤝 Contributing

1. Fork this repo
2. Add your materials following the steps above
3. Open a Pull Request

---

## 📜 License

Free and open source. Made with ❤️ for students.
