(function () {
    var contactLink = document.querySelector(
        "a.float, a.clients-whatsapp, a.nevora-whatsapp-contact"
    );
    var contactButton = document.createElement("a");

    if (contactLink) {
        contactLink.replaceWith(contactButton);
    } else {
        document.body.appendChild(contactButton);
    }

    contactButton.className = "nevora-whatsapp-contact";
    contactButton.href =
        "https://wa.me/254769101739?text=Hello%2C%20I%27d%20like%20to%20talk%20with%20NEVORA%20Technologies.";
    contactButton.target = "_blank";
    contactButton.rel = "noopener noreferrer";
    contactButton.setAttribute(
        "aria-label",
        "Chat with NEVORA Technologies on WhatsApp"
    );

    var mark = document.createElement("span");
    mark.className = "nevora-whatsapp-contact-mark";
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = "WA";

    var label = document.createElement("span");
    label.textContent = "Chat with us";

    contactButton.replaceChildren(mark, label);
})();
