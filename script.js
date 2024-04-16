
// Data for tour services
const toursData = [
    {
        title: "Ultimate Johannesburg Tour",
        highlights: ["City skyline view", "Constitution Hill", "Apartheid Museum"],
        tariffs: "R1150 Single / R990 Per Person Sharing",
        departures: "Daily",
        startTime: "09:00",
        duration: "7.5-8 Hours"
    },
    {
        title: "Soweto, Apartheid Museum & Traditional African Meal Tour",
        highlights: ["Soweto Township", "Apartheid Museum", "Traditional African Meal"],
        tariffs: "R1250 Single / R1050 Per Person Sharing",
        departures: "Daily",
        startTime: "09:00",
        duration: "7.5-8 Hours"
    }
];

// Function to generate tour HTML
function generateTourHTML(tour) {
    return `
        <div class="tour">
            <h2>${tour.title}</h2>
            <p><strong>Highlights:</strong> ${tour.highlights.join(", ")}</p>
            <p><strong>Tariffs:</strong> ${tour.tariffs}</p>
            <p><strong>Departures:</strong> ${tour.departures}</p>
            <p><strong>Tour starts:</strong> ${tour.startTime}</p>
            <p><strong>Duration:</strong> ${tour.duration}</p>
            <button class="btn-book">Book Now</button>
        </div>
    `;
}

// Function to display tours on the page
function displayTours() {
    const toursContainer = document.getElementById("tours");
    toursData.forEach(tour => {
        const tourHTML = generateTourHTML(tour);
        toursContainer.innerHTML += tourHTML;
    });
}

// Display tours when the page loads
window.addEventListener("load", displayTours);
