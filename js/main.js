(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1000);
    };
    spinner();
    
    
    // Initiate The wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Active Link Based on Current URL
    const currentUrl = window.location.pathname;

    $(".navbar-nav .nav-link, .navbar-nav .dropdown-item").each(function () {
        const linkUrl = $(this).attr("href");

        // Check if the current URL matches the link (excluding '#' links)
        if (currentUrl.includes(linkUrl) && linkUrl !== '#') {
            $(".navbar-nav .nav-link, .navbar-nav .dropdown-item").removeClass("active"); // Remove active class from all links
            $(this).addClass("active"); // Add active class to the matched link

            // If it's a dropdown item, make its parent dropdown toggle active
            if ($(this).hasClass('dropdown-item')) {
                $(this).closest('.dropdown').find('.nav-link.dropdown-toggle').addClass('active');
            }
        }
    });

    // Facts Counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    // Back To Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth'); // Smooth scroll to the top
        return false; // Prevent default behavior (for safety)
    });


    // Testimonial Slider
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Vendor Slider
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });

    // Gallery Slider
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        auto: true,             // Enable auto play
        pause: 2000,            // Time in milliseconds between slides
        speed: 700,             // Speed of the slide transition
        onSliderLoad: function(){
            $('#autoWidth').removeClass('cs-hidden');
        }
    });

    // Whatsapp Button
    document.addEventListener("DOMContentLoaded", function() {
        var whatsappLink = document.getElementById("whatsapp-link");
        var phoneNumber = "919760676500"; // Your WhatsApp number
        
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // Mobile devices
            whatsappLink.href = "https://wa.me/" + phoneNumber;
        } else {
            // Desktop devices
            whatsappLink.href = "https://web.whatsapp.com/send?phone=" + phoneNumber;
        }
    });

    // Enquiry Form Submission
	$(document).ready(function () {
		$("#enquiryForm").on("submit", function (event) {
			event.preventDefault(); // Prevent the default form submission

			const fullName = $("input[name='fullName']").val();
            const email = $("input[name='email']").val();
			const contactNo = $("input[name='contactNo']").val();
			const serviceType = $("input[name='serviceType']").val();
			const shiftingFrom = $("input[name='shiftingFrom']").val();
			const shiftingTo = $("input[name='shiftingTo']").val();
			const message = $("textarea[name='message']").val();

			// Create an array for the message lines
			const messageLines = [
				`Enquiry By Customer:`,
				`Full Name: ${fullName}`,
                `Email: ${email}`,
				`Contact No: ${contactNo}`,
				`Service Type: ${serviceType}`,
				`Shifting From: ${shiftingFrom}`,
				`Shifting To: ${shiftingTo}`,
				`Message: ${message}`
			];

			// Join the message lines with line breaks
			const whatsappMessage = messageLines.join('\n');

			// Detect if the user is on mobile or desktop
			const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
			const whatsappUrl = isMobile
				? `https://wa.me/9760676500?text=${encodeURIComponent(whatsappMessage)}` // Mobile link
				: `https://web.whatsapp.com/send?phone=9760676500&text=${encodeURIComponent(whatsappMessage)}`; // WhatsApp Web link

			// Open WhatsApp link
			window.open(whatsappUrl, '_blank');

			// Show Thank You Modal
			$("#thankYouModal").modal('show');
		});
	});

    // Contact Form Submission
	$(document).ready(function () {
		$("#contactForm").on("submit", function (event) {
			event.preventDefault(); // Prevent the default form submission

			const fullName = $("input[name='fullName']").val();
			const contactNo = $("input[name='contactNo']").val();
			const subject = $("input[name='subject']").val();
			const message = $("textarea[name='message']").val();

			// Create an array for the message lines
			const messageLines = [
				`Customer Query:`,
				`Full Name: ${fullName}`,
				`Contact No: ${contactNo}`,
				`Subject: ${subject}`,
				`Message: ${message}`
			];

			// Join the message lines with line breaks
			const whatsappMessage = messageLines.join('\n');

			// Detect if the user is on mobile or desktop
			const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
			const whatsappUrl = isMobile
				? `https://wa.me/9760676500?text=${encodeURIComponent(whatsappMessage)}` // Mobile link
				: `https://web.whatsapp.com/send?phone=9760676500&text=${encodeURIComponent(whatsappMessage)}`; // WhatsApp Web link

			// Open WhatsApp link
			window.open(whatsappUrl, '_blank');

			// Show Thank You Modal
			$("#thankYouModal").modal('show');
		});
	});
    
})(jQuery);

