export function scrollMaster() {
    console.log("scroollmaster");
    const main = document.querySelector("main");

    // Add a scroll event listener
    scrollTrigger('.checkpoint')

}

function scrollTrigger(selector) {
    // Multiple element can have same class/selector,
    // so we are using querySelectorAll
    let els = document.querySelectorAll(selector)
    // The above `querySelectorAll` returns a nodeList,
    // so we are converting it to an array
    els = Array.from(els)
    // Now we are iterating over the elements array
    els.forEach(el => {
        // `addObserver function` will attach the IntersectionObserver to the element
        // We will create this function next
        addObserver(el, selector)
    })
}

function addObserver(el, selector) {
    // We are creating a new IntersectionObserver instance
    let observer = new IntersectionObserver((entries, observer) => { // This takes a callback function that receives two arguments: the elements list and the observer instance.
        entries.forEach(entry => {
            // `entry.isIntersecting` will be true if the element is visible
            if (entry.isIntersecting) {
                if (selector == ".checkpoint") {
                    console.log("make le image smaller")
                    const heroImage = document.querySelector(".mainHeroImage")
                    const mainTop = document.querySelector(".main-top")
                    heroImage.classList.add('active')
                    mainTop.classList.add('active')
                } else {

                    entry.target.classList.add('active')
                }

                // We are removing the observer from the element after adding the active class
                observer.unobserve(entry.target)
            }
        })
    })
    // Adding the observer to the element
    observer.observe(el)
}