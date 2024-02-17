import { menuHide_foreign } from './menu.js';
import { is_mobile } from './om2.js';

export let previously_focused_element;

export function CONFIRM_action_modal(message) {
    return new Promise((resolve, reject) => {
        /* set focus for keyboards */
        previously_focused_element = document.activeElement;
        let interactType = "mouse";

        // set interactType in a sane way. with compatibility for webkit and chromium
        if ((event.webkitForce == 1) || (event.webkitForce == 0)) {
            if (event.webkitForce == 0) {
                interactType = "keyboard";
            }
        } else {
            if (event.pointerType !== "mouse") {
                interactType = "keyboard";
            }
        }

        /* prepare and display the confirm dialog */
        const confirmParentContainer = document.getElementById("confirmModal");
        const confirmDeleteModal = `
            <div class="CONFIRMmodal-modal">
                <div class="CONFIRMmodalForm">
                    <p>${message}</p>
                    <div class="buttons">
                        <button id="CONFIRMmodalDeleteButton" class="CONFIRMmodalDelete">Delete</button>
                        <button id="CONFIRMmodalCancelButton" class="CONFIRMmodalCancel">Cancel</button>
                    </div>
                </div>
            </div>
        `;

        confirmParentContainer.innerHTML = confirmDeleteModal;
        confirmParentContainer.style.visibility = "visible";

        /* add event listeners */
        const deleteButton = document.getElementById("CONFIRMmodalDeleteButton");
        const cancelButton = document.getElementById("CONFIRMmodalCancelButton");

        function doDelete() {
            hideConfirmModal();
            resolve("delete");
        }

        function dontDelete() {
            previously_focused_element.focus();
            hideConfirmModal();
            resolve("cancel");
        }

        confirmParentContainer.addEventListener("click", (event) => {
            const target = event.target;
            if (target === deleteButton) {
                doDelete();
            } else if (target === cancelButton) {
                dontDelete();
            } else if (target === confirmParentContainer) {
                dontDelete();
            }
        });

        /* !is_mobile, since this styling now won't show up on mobile, where it is annoying and weird */
        if ((interactType === "keyboard") && !is_mobile()) {
            cancelButton.focus();
        } else if ((interactType == "mouse") && !is_mobile()) {
            menuHide_foreign();
            cancelButton.focus();
            /* Find some other solution than blur, which will hide the stylings for that first button
            this is necessary because webkit is a little annoying, and perhaps there is a better way of 
            dealing with this.
            */
            cancelButton.blur();
        }
    });
}

function hideConfirmModal() {
    const confirmParentContainer = document.getElementById("confirmModal");
    confirmParentContainer.style.visibility = "hidden";
}