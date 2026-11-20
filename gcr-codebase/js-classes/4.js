"use strict";

// Create a dynamic form using FormBuilder class
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        const formFields = this.fields.map(field => `
            <label>${field.label}</label>
            <input type="${field.type}" name="${field.name}" required>
            <br><br>
        `).join("");

        document.body.innerHTML = `
            <h2>Dynamic Form</h2>
            <form id="dynamicForm">
                ${formFields}
                <button type="submit">Submit</button>
            </form>
            <pre id="output"></pre>
        `;

        document.getElementById("dynamicForm").addEventListener("submit", event => {
            event.preventDefault();
            document.getElementById("output").textContent =
                JSON.stringify(this.getFormData(), null, 2);
        });
    }

    getFormData() {
        const formData = new FormData(document.getElementById("dynamicForm"));
        return Object.fromEntries(formData.entries());
    }
}

// Create form fields
const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

const formBuilder = new FormBuilder(fields);
formBuilder.createForm();
