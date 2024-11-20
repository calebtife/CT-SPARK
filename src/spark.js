document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    // Check if elements exist before adding event listeners
    if (registerLink) {
        registerLink.addEventListener('click', () => {
            if (wrapper) {
                wrapper.classList.add('active');
            }
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', () => {
            if (wrapper) {
                wrapper.classList.remove('active');
            }
        });
    }

    console.log(document.querySelector('.swiper'));

    // JSON data for plans
    const plans = [
        { title: "Novice", data: "1GB", price: 400, validity: "1 Day", device: "1" },
        { title: "Amateur", data: "3GB", price: 1000, validity: "3 Days", device: "1" },
        { title: "ACTIVE", data: "5GB", price: 1600, validity: "7 Days", device: "1" },
        { title: "Day King", data: "unlimited", price: 3000, validity: "1 Day", device: "1" },
        { title: "Beginner", data: "20GB", price: 3000, validity: "14 Days", device: "2 " },
        { title: "Intermediate", data: "40GB", price: 5000, validity: "30 Days", device: "2 " },
        { title: "Proficient", data: "90GB", price: 10000, validity: "30 Days", device: "2 " },
        { title: "Skilled", data: "150GB", price: 15000, validity: "30 Days", device: "2 " },
        { title: "Advanced", data: "250GB", price: 20000, validity: "30 Days", device: "3 " },
        { title: "Expert", data: "Unlimited", price: 25000, validity: "30 Days", device: "3 " }
    ];

    // Target the container
    const plansContainer = document.getElementById("plans-container");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    let currentPage = 0;
    const plansPerPage = 3;

    function renderPlans() {
        // Clear the current plans
        plansContainer.innerHTML = '';

        // Calculate the start and end indices for the current page
        const start = currentPage * plansPerPage;
        const end = start + plansPerPage;

        // Slice the plans array to get the current page plans
        const currentPlans = plans.slice(start, end);

        // Render the current plans
        currentPlans.forEach(plan => {
            const planCard = document.createElement("div");
            planCard.className = "plan-card border rounded-lg p-5 shadow-lg bg-white";

            planCard.innerHTML = `
                <div class="plan-title flex justify-between items-center mb-4">
                    <h3 class="font-bold text-lg">${plan.title}</h3>
                    <i class='bx bx-wifi bx-md'></i>
                </div>
                <ul class="plan-details flex flex-col gap-2 items-start mb-4">
                    <li><i class='bx bx-wifi bx-sm mr-1'></i> ${plan.data} Data</li>
                    <li><i class='bx bx-time bx-sm mr-1'></i> ${plan.validity} Validity</li>
                    <li><i class='bx bxs-devices bx-sm mr-1'></i> ${plan.device} Device</li>
                </ul>
                <div class="plan-price font-bold text-xl">₦${plan.price.toLocaleString()}</div>
                <button class="select-plan-btn mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Select Plan</button>
            `;

            plansContainer.appendChild(planCard);
        });

        // Update button states
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = end >= plans.length;
    }

    // Event listeners for navigation buttons
    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            renderPlans();
        }
    });

    nextButton.addEventListener('click', () => {
        if ((currentPage + 1) * plansPerPage < plans.length) {
            currentPage++;
            renderPlans();
        }
    });

    // Initial render
    renderPlans();
});
  

// Sidebar functions
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}