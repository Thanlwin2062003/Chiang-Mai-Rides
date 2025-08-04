document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
        });
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
    
    // Vehicle Data
    const motorbikes = [
        {
            id: 1,
            name: "Honda PCX 150",
            type: "scooter",
            image: "https://images.unsplash.com/photo-1580310614697-2a716a3ab61b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            price: 250,
            period: "day",
            rating: 4.8,
            reviews: 124,
            specs: {
                engine: "150cc",
                seats: 2,
                fuel: "Petrol",
                gear: "Automatic"
            }
        },
        {
            id: 2,
            name: "Yamaha NMAX",
            type: "scooter",
            image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            price: 300,
            period: "day",
            rating: 4.9,
            reviews: 98,
            specs: {
                engine: "155cc",
                seats: 2,
                fuel: "Petrol",
                gear: "Automatic"
            }
        },
        {
            id: 3,
            name: "Honda CRF250L",
            type: "motorbike",
            image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            price: 500,
            period: "day",
            rating: 4.7,
            reviews: 76,
            specs: {
                engine: "250cc",
                seats: 2,
                fuel: "Petrol",
                gear: "Manual"
            }
        }
    ];
    
    const cars = [
        {
            id: 4,
            name: "Toyota Yaris",
            type: "sedan",
            image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            price: 1200,
            period: "day",
            rating: 4.6,
            reviews: 65,
            specs: {
                seats: 5,
                doors: 4,
                fuel: "Petrol",
                gear: "Automatic",
                ac: "Yes"
            }
        },
        {
            id: 5,
            name: "Honda CR-V",
            type: "suv",
            image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            price: 1800,
            period: "day",
            rating: 4.8,
            reviews: 54,
            specs: {
                seats: 5,
                doors: 4,
                fuel: "Petrol",
                gear: "Automatic",
                ac: "Yes"
            }
        },
        {
            id: 6,
            name: "Toyota Hilux",
            type: "pickup",
            image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            price: 1500,
            period: "day",
            rating: 4.5,
            reviews: 42,
            specs: {
                seats: 5,
                doors: 4,
                fuel: "Diesel",
                gear: "Automatic",
                ac: "Yes"
            }
        }
    ];
    
    // Render Vehicles
    function renderVehicles(vehicles, containerClass) {
        const container = document.querySelector(`.${containerClass} .vehicle-grid`);
        container.innerHTML = '';
        
        vehicles.forEach(vehicle => {
            const vehicleCard = document.createElement('div');
            vehicleCard.className = 'vehicle-card';
            
            vehicleCard.innerHTML = `
                <div class="vehicle-img">
                    <img src="${vehicle.image}" alt="${vehicle.name}">
                </div>
                <div class="vehicle-info">
                    <h3>${vehicle.name}</h3>
                    <div class="vehicle-meta">
                        <span><i class="fas fa-star"></i> ${vehicle.rating} (${vehicle.reviews})</span>
                        <span><i class="fas fa-gas-pump"></i> ${vehicle.specs.fuel}</span>
                    </div>
                    <div class="vehicle-price">
                        ฿${vehicle.price}<span>/ ${vehicle.period}</span>
                    </div>
                    <a href="#" class="view-details" data-id="${vehicle.id}">View Details</a>
                </div>
            `;
            
            container.appendChild(vehicleCard);
        });
    }
    
    // Initial render
    renderVehicles(motorbikes, 'motorbikes');
    renderVehicles(cars, 'cars');
    
    // Form Submission
    const searchForm = document.getElementById('search-form');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const pickupDate = document.getElementById('pickup-date').value;
        const dropoffDate = document.getElementById('dropoff-date').value;
        const vehicleType = document.getElementById('vehicle-type').value;
        const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
        
        // In a real app, you would filter vehicles based on these parameters
        alert(`Searching for ${vehicleType || 'all'} ${activeTab}s from ${pickupDate} to ${dropoffDate}`);
    });
    
    // Set minimum date for pickup to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('pickup-date').min = today;
    
    // Update dropoff date min when pickup date changes
    document.getElementById('pickup-date').addEventListener('change', function() {
        document.getElementById('dropoff-date').min = this.value;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});