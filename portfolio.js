/**
 * Md. Mahfuz Sarker - Executive Portfolio Application
 * Dark Theme with Professional Yellow Accent & Minimal Rounded Corners
 * Waterdrop Glass Navbar, High-Resolution Portrait & Executive Footer
 */

(function () {
    'use strict';

    const PortfolioApp = {
        config: {
            mountSelector: '#app',
            basePath: './Portfolio_files/'
        },

        // 1. Waterdrop Liquid Glass Navbar with Mobile Drawer & Close Button
        renderHeader: function () {
            return `
    <div class="menu-backdrop" id="menu-backdrop"></div>
    <header class="header" id="header">
        <div class="container">
            <nav class="navbar">
                <a class="brand" href="#Home">
                    <img src="./Portfolio_files/logo_mahfuz.png" alt="Md. Mahfuz Sarker" style="height: 38px; width: auto; object-fit: contain;">
                </a>
                <div class="burger" id="burger" aria-label="Toggle navigation">
                    <span class="burger-line"></span>
                    <span class="burger-line"></span>
                    <span class="burger-line"></span>
                </div>
                <div class="menu" id="menu">
                    <!-- Drawer Header for Mobile with Brand and Close Button -->
                    <div class="menu-drawer-header">
                        <div class="menu-drawer-brand">
                            <img src="./Portfolio_files/logo_mahfuz.png" alt="Md. Mahfuz Sarker" style="height: 32px; width: auto;">
                        </div>
                        <button class="menu-close-btn" id="menu-close" aria-label="Close Navigation Menu">
                            <i class="bx bx-x"></i>
                        </button>
                    </div>

                    <ul class="menu-inner mb-0">
                        <li class="menu-item"><a href="#Home" class="menu-link">Home</a></li>
                        <li class="menu-item"><a href="#Services" class="menu-link">Services</a></li>
                        <li class="menu-item"><a href="#Portfolio" class="menu-link">Resume</a></li>
                        <li class="menu-item"><a href="#Experience" class="menu-link">Experience</a></li>
                        <li class="menu-item"><a href="#Contact" class="menu-link">Contact</a></li>
                    </ul>

                    <!-- Drawer Actions for Mobile (CV Download & Hire Me) -->
                    <div class="menu-drawer-actions">
                        <a href="./asset/Md. Mahfuz Sarker cv(S & M).pdf" target="_blank" class="btn btn-warning menu-action-btn">
                            <i class="bx bxs-file-pdf"></i> Download CV (PDF)
                        </a>
                        <a href="#Contact" class="btn btn-outline-hero menu-action-btn menu-link">
                            <i class="bx bx-envelope"></i> Get In Touch
                        </a>
                    </div>
                </div>
                <a href="#Contact" class="menu-block">Get In Touch <i class="bx bxs-right-arrow-alt"></i></a>
            </nav>
        </div>
    </header>`;
        },

        // 2. Hero / Banner with High-Resolution Portrait & Minimal Rounded Corners
        renderBanner: function () {
            return `
    <section class="Banner_cntr" id="Home">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0" data-motion>
                    <div class="banner_box">
                        <h1>Hey, I am <br><span style="color: var(--primary-accent);">Md. Mahfuz Sarker</span></h1>
                        <p>International Sales Executive | CSE Graduate<br>
                            Specializing in <span class="typed-text"></span><span class="cursor">&nbsp;</span>
                        </p>
                        <div class="hero_btn_group mb-4">
                            <a href="#Contact" class="btn btn-warning hero_btn">
                                Hire Me <i class="bx bxs-right-arrow-alt"></i>
                            </a>
                            <a href="./asset/Md. Mahfuz Sarker cv(S & M).pdf" target="_blank" class="btn btn-outline-hero hero_btn">
                                <i class="bx bxs-file-pdf"></i> Download CV
                            </a>
                        </div>
                    </div>

                    <p class="tagline">
                        Interested in <span style="color: var(--primary-accent); font-weight: 700;">International Client-Facing</span> sales &amp; business development.
                    </p>
                </div>
                <div class="col-lg-6" data-motion data-delay="100">
                    <div class="hero_showcase">
                        <div class="floating_pill floating_pill_top">
                            <i class="bx bx-globe" style="color: var(--primary-accent);"></i>
                            <div>
                                <span>International Sales</span>
                                <small>Client Relations</small>
                            </div>
                        </div>
                        <div class="hero_image_wrapper">
                            <img src="./Portfolio_files/profi.jpeg" alt="Md. Mahfuz Sarker - High Resolution Portrait">
                        </div>
                        <div class="floating_pill floating_pill_bottom">
                            <i class="bx bx-code-alt" style="color: var(--primary-accent);"></i>
                            <div>
                                <span>CSE Graduate</span>
                                <small>Green University</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
        },

        // 3. Social Links Showcase
        renderSocialLinks: function () {
            return `
    <section class="Social_links" data-motion>
        <div class="container">
            <div class="row g-3">
                <div class="col-6 col-md-3">
                    <a href="https://www.linkedin.com/in/md-mahfuz-sarker-b828b4253/" target="_blank" title="LinkedIn">
                        <img src="./Portfolio_files/LinkedIn.png" class="img-fluid" alt="LinkedIn">
                    </a>
                </div>
                <div class="col-6 col-md-3">
                    <a href="https://www.facebook.com/md.mahfuzsarker.58" target="_blank" title="Facebook">
                        <img src="./Portfolio_files/Facebook.png" class="img-fluid" alt="Facebook">
                    </a>
                </div>
                <div class="col-6 col-md-3">
                    <a href="https://www.instagram.com/md.mahfuz.sarker/" target="_blank" title="Instagram">
                        <img src="./Portfolio_files/Instagram.png" class="img-fluid" alt="Instagram">
                    </a>
                </div>
                <div class="col-6 col-md-3">
                    <a href="https://github.com/221002349-maf" target="_blank" title="GitHub">
                        <img src="./Portfolio_files/GitHub.png" class="img-fluid" alt="GitHub">
                    </a>
                </div>
            </div>
        </div>
    </section>`;
        },

        // 4. Services Section
        renderServices: function () {
            return `
    <section class="services_cntr" id="Services">
        <div class="container">
            <div class="row mb-5 align-items-center" data-motion>
                <div class="col-lg-5">
                    <h2>Expertise &amp; Services! Let's check it out.</h2>
                </div>
                <div class="col-lg-7">
                    <p class="mb-0 services_lead">
                        CSE graduate with strong communication, analytical thinking, and leadership exposure. Specializing in international client-facing sales roles where technical understanding supports business communication and client relationship building.
                    </p>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-md-4" data-motion data-delay="100">
                    <div class="services_box">
                        <img src="./Portfolio_files/se-icon1.png" class="img-fluid" width="75" alt="International Sales">
                        <h3>International Sales &amp; Client Relations</h3>
                        <p>Communicating effectively with international clients, identifying key business requirements, and cultivating long-term customer partnerships.</p>
                        <a href="mailto:mahfuzsarker6408@gmail.com">Connect Now <i class="bx bx-right-top-arrow-circle"></i></a>
                    </div>
                </div>
                <div class="col-md-4" data-motion data-delay="200">
                    <div class="services_box">
                        <img src="./Portfolio_files/se-icon2.png" class="img-fluid" width="75" alt="Technical Business Communication">
                        <h3>Technical Business Communication</h3>
                        <p>Bridging engineering logic and commercial strategy with analytical thinking, product presentations, and transparent client reporting.</p>
                        <a href="mailto:mahfuzsarker6408@gmail.com">Learn more <i class="bx bx-right-top-arrow-circle"></i></a>
                    </div>
                </div>
                <div class="col-md-4" data-motion data-delay="300">
                    <div class="services_box">
                        <img src="./Portfolio_files/se-icon3.png" class="img-fluid" width="75" alt="Mentorship & Leadership">
                        <h3>Mentorship &amp; Workflow Leadership</h3>
                        <p>Proven track record as Student Mentor guiding peers and Publication Secretary managing academic documentation workflows at IEEE Chapter.</p>
                        <a href="mailto:mahfuzsarker6408@gmail.com">Learn more <i class="bx bx-right-top-arrow-circle"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
        },

        // 5. Resume & Experience Section
        renderResume: function () {
            return `
    <section class="Resume_cntr" id="Portfolio">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header pb-4">
                            <h1><strong>Resume &amp; Experience</strong></h1>
                        </div>
                        <div class="card-body p-0">
                            <div class="row pb-5 align-items-center">
                                <div class="col-md-4">
                                    <div class="Resume_owner d-flex align-items-center justify-content-between">
                                        <div class="user_name">
                                            <h4>Md. Mahfuz Sarker</h4>
                                            <p>International Sales Executive | CSE</p>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <h2 class="mb-0">2026</h2>
                                        </div>
                                    </div>
                                    <p class="mb-3 resume_bio">
                                        Hi there! My name is <strong>Md. Mahfuz Sarker</strong>, a Computer Science &amp; Engineering graduate from <strong>Green University of Bangladesh</strong>, based in West Shewrapara, Kafrul, Dhaka.
                                    </p>
                                    <p class="resume_sub">
                                        Equipped with strong communication, problem solving, and analytical thinking, I specialize in international sales and client relationship management.
                                    </p>
                                </div>
                                <div class="col-md-4 text-center my-4 my-md-0">
                                    <div class="resume_photo_wrapper">
                                        <img src="./Portfolio_files/profi.jpeg" alt="Md. Mahfuz Sarker" class="img-fluid">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="Company_history">
                                        <div class="user_name">
                                            <h5>Student Mentor</h5>
                                            <p>Green University of Bangladesh</p>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0)">2024–2025</a>
                                        </div>
                                    </div>
                                    <div class="Company_history">
                                        <div class="user_name">
                                            <h5>Publication Secretary</h5>
                                            <p>IEEE CS Student Branch Chapter, GUB</p>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0)">2024–2025</a>
                                        </div>
                                    </div>
                                    <div class="Company_history">
                                        <div class="user_name">
                                            <h5>B.Sc. in CSE (CGPA: 2.72)</h5>
                                            <p>Green University of Bangladesh</p>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0)">2022–2026</a>
                                        </div>
                                    </div>
                                    <div class="Company_history">
                                        <div class="user_name">
                                            <h5>HSC (Science, GPA: 4.92)</h5>
                                            <p>Sonar Bangla College, Cumilla</p>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0)">2019</a>
                                        </div>
                                    </div>
                                    <div class="Company_history">
                                        <div class="user_name">
                                            <h5>SSC (Science, GPA: 5.00)</h5>
                                            <p>Debidwar Reaz Uddin Pilot Model School</p>
                                        </div>
                                        <div>
                                            <a href="javascript:void(0)">2017</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-5">
                                <div class="col-md-6 mb-4 mb-md-0">
                                    <h4 class="detail_title">Core Competencies &amp; Skills</h4>
                                    <div class="skills_cntr">
                                        <a href="javascript:void(0)">Communication &amp; Presentation</a>
                                        <a href="javascript:void(0)">Customer Relationship</a>
                                        <a href="javascript:void(0)">International Sales</a>
                                        <a href="javascript:void(0)">Teamwork &amp; Collaboration</a>
                                        <a href="javascript:void(0)">Time Management</a>
                                        <a href="javascript:void(0)">Problem Solving</a>
                                        <a href="javascript:void(0)">Leadership</a>
                                        <a href="javascript:void(0)">Microsoft Office</a>
                                        <a href="javascript:void(0)">Programming Fundamentals</a>
                                        <a href="javascript:void(0)">Machine Learning Basics</a>
                                        <a href="javascript:void(0)">English (Fluent)</a>
                                        <a href="javascript:void(0)">Bengali (Native)</a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h4 class="detail_title">Tools &amp; Technologies</h4>
                                    <div class="Tech_skills_cntr">
                                        <a href="javascript:void(0)" title="PowerPoint & Office"><img src="./Portfolio_files/PowerPoint.png" alt="Microsoft Office"></a>
                                        <a href="javascript:void(0)" title="AI & Machine Learning"><img src="./Portfolio_files/ai.png" alt="AI & ML"></a>
                                        <a href="javascript:void(0)" title="HTML5"><img src="./Portfolio_files/html-5.png" alt="HTML5"></a>
                                        <a href="javascript:void(0)" title="CSS3"><img src="./Portfolio_files/css-3.png" alt="CSS3"></a>
                                        <a href="javascript:void(0)" title="JavaScript"><img src="./Portfolio_files/js.png" alt="JavaScript"></a>
                                        <a href="javascript:void(0)" title="Bootstrap"><img src="./Portfolio_files/bootstrap.png" alt="Bootstrap"></a>
                                        <a href="javascript:void(0)" title="Sass"><img src="./Portfolio_files/sass.png" alt="SASS"></a>
                                        <a href="javascript:void(0)" title="React"><img src="./Portfolio_files/React.png" alt="React"></a>
                                        <a href="javascript:void(0)" title="Adobe XD"><img src="./Portfolio_files/xd.png" alt="Adobe XD"></a>
                                        <a href="javascript:void(0)" title="Figma"><img src="./Portfolio_files/figma.png" alt="Figma"></a>
                                        <a href="javascript:void(0)" title="Sketch"><img src="./Portfolio_files/sketch.png" alt="Sketch"></a>
                                        <a href="javascript:void(0)" title="Photoshop"><img src="./Portfolio_files/photoshop.png" alt="Photoshop"></a>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="detail_title">Institutional Affiliations &amp; Partners</h4>
                                    <div class="freelance_client">
                                        <p class="active"><img src="./Portfolio_files/meta3.png" alt="IEEE CS Chapter"></p>
                                        <p><img src="./Portfolio_files/mtg.png" alt="Green University of Bangladesh"></p>
                                        <p><img src="./Portfolio_files/Sanchar_Shakti.png" alt="Sonar Bangla College"></p>
                                        <p><img src="./Portfolio_files/abbottz.png" alt="Global Outreach"></p>
                                        <p><img src="./Portfolio_files/javnic_solutions.png" alt="Client Network"></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
        },

        // 6. Professional Experience Section (Matching User Reference Image)
        renderExperience: function () {
            return `
    <section class="experience_cntr" id="Experience">
        <div class="container">
            <div class="row mb-5" data-motion>
                <div class="col-12">
                    <h2 class="exp_section_title">Professional Experience.</h2>
                    <h1 class="exp_section_subtitle">Industry Practice &amp; Roles.</h1>
                </div>
            </div>

            <!-- Experience Card 1: Technical Business Communication & Client Relations -->
            <div class="exp_card mb-4" data-motion data-delay="100">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-4 mb-3 mb-md-0 d-flex align-items-center gap-3">
                        <img src="./Portfolio_files/profi.jpeg" alt="Md. Mahfuz Sarker" class="exp_avatar">
                        <div>
                            <h5 class="exp_user_name mb-0">Md. Mahfuz Sarker</h5>
                            <span class="exp_user_role">International Sales Executive | CSE</span>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-7 mb-3 mb-md-0">
                        <div class="exp_meta_badge mb-1">
                            <span>Nov 2025 – Present</span> • <span>Full-time</span>
                        </div>
                        <h3 class="exp_role_title mb-3">Technical Business Communication &amp; Client Relations.</h3>
                        <div class="exp_tags_wrap">
                            <span class="exp_tag">International Client Communication <i class="bx bx-chevron-right"></i></span>
                            <span class="exp_tag">Requirements Clarification <i class="bx bx-chevron-right"></i></span>
                            <span class="exp_tag">Technical Coordination <i class="bx bx-chevron-right"></i></span>
                            <span class="exp_tag">SDLC &amp; Negotiation <i class="bx bx-chevron-right"></i></span>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-1 text-md-end">
                        <div class="exp_arrow_btn" title="View Details">
                            <i class="bx bx-right-arrow-alt"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Experience Card 2: Student Mentor at Green University -->
            <div class="exp_card mb-4" data-motion data-delay="200">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-4 mb-3 mb-md-0 d-flex align-items-center gap-3">
                        <img src="./Portfolio_files/profi.jpeg" alt="Md. Mahfuz Sarker" class="exp_avatar">
                        <div>
                            <h5 class="exp_user_name mb-0">Md. Mahfuz Sarker</h5>
                            <span class="exp_user_role">International Sales Executive | CSE</span>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-7 mb-3 mb-md-0">
                        <div class="exp_meta_badge mb-1">
                            <span>2024 – 2025</span> • <span>Student Mentorship</span>
                        </div>
                        <h3 class="exp_role_title mb-3">Student Mentor at Green University of Bangladesh.</h3>
                        <div class="exp_tags_wrap">
                            <span class="exp_tag">Junior Student Guidance <i class="bx bx-chevron-right"></i></span>
                            <span class="exp_tag">Programming Fundamentals <i class="bx bx-chevron-right"></i></span>
                            <span class="exp_tag">Machine Learning Basics <i class="bx bx-chevron-right"></i></span>
                            <span class="exp_tag">Academic Problem Solving <i class="bx bx-chevron-right"></i></span>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-1 text-md-end">
                        <div class="exp_arrow_btn" title="View Details">
                            <i class="bx bx-right-arrow-alt"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Experience Card 3: Publication Secretary IEEE CS -->
            <div class="exp_card mb-4" data-motion data-delay="300">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-4 mb-3 mb-md-0 d-flex align-items-center gap-3">
                        <img src="./Portfolio_files/profi.jpeg" alt="Md. Mahfuz Sarker" class="exp_avatar">
                        <div>
                            <h5 class="exp_user_name mb-0">Md. Mahfuz Sarker</h5>
                            <span class="exp_user_role">International Sales Executive | CSE</span>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-7 mb-3 mb-md-0">
                        <div class="exp_meta_badge mb-1">
                            <span>2024 – 2025</span> • <span>Executive Leadership</span>
                        </div>
                        <h3 class="exp_role_title mb-3">Publication Secretary at IEEE Computer Society GUB Chapter.</h3>
                        <div class="exp_tags_wrap">
                            <span class="exp_tag">Publication Workflows <i class="bx bx-chevron-right"></i></span>
                            <span class="exp_tag">Technical Content Writing <i class="bx bx-chevron-right"></i></span>
                            <span class="exp_tag">Event &amp; Media Coordination <i class="bx bx-chevron-right"></i></span>
                            <span class="exp_tag">Executive Collaboration <i class="bx bx-chevron-right"></i></span>
                        </div>
                    </div>
                    <div class="col-lg-1 col-md-1 text-md-end">
                        <div class="exp_arrow_btn" title="View Details">
                            <i class="bx bx-right-arrow-alt"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>`;
        },

        // 7. Executive Bigger Text Footer with Complete Contact Info
        renderFooter: function () {
            return `
    <footer class="footer_cntr" id="Contact">
        <div class="container">
            <div class="footer_cta_box mb-5" data-motion>
                <div class="row align-items-center">
                    <div class="col-lg-7 mb-4 mb-lg-0">
                        <span class="footer_subheading">GET IN TOUCH</span>
                        <h2 class="footer_heading">Let's Connect &amp; Build Something Great Together</h2>
                        <p class="footer_lead">
                            Ready to discuss international client opportunities, sales partnerships, or technical consultation.
                        </p>
                    </div>
                    <div class="col-lg-5 text-lg-end">
                        <a href="mailto:mahfuzsarker6408@gmail.com" class="btn btn-warning footer_cta_btn">
                            <i class="bx bx-envelope"></i> Send an Email
                        </a>
                    </div>
                </div>
            </div>

            <div class="row g-4 mb-5 footer_info_row" data-motion data-delay="100">
                <div class="col-md-4">
                    <div class="footer_card">
                        <div class="footer_icon_box">
                            <img src="./Portfolio_files/icon-location.png" alt="Location Icon" class="footer_orig_icon_img">
                        </div>
                        <h5 class="footer_card_title">Location</h5>
                        <p class="footer_card_text">West Shewrapara, Kafrul, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="footer_card">
                        <div class="footer_icon_box">
                            <img src="./Portfolio_files/icon-phone.png" alt="Phone Icon" class="footer_orig_icon_img">
                        </div>
                        <h5 class="footer_card_title">Direct Phone</h5>
                        <p class="footer_card_text">
                            <a href="tel:01904730636" class="footer_link_highlight">+880 1904730636</a>
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="footer_card">
                        <div class="footer_icon_box">
                            <img src="./Portfolio_files/icon-email.png" alt="Email Icon" class="footer_orig_icon_img">
                        </div>
                        <h5 class="footer_card_title">Email Address</h5>
                        <p class="footer_card_text">
                            <a href="mailto:mahfuzsarker6408@gmail.com" class="footer_link_highlight">mahfuzsarker6408@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="footer_bottom pt-4">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <div class="footer_brand">
                            <img src="./Portfolio_files/logo_mahfuz.png" alt="Md. Mahfuz Sarker" style="height: 34px; width: auto;">
                        </div>
                        <p class="footer_copy mb-0 mt-2">© 2026 Md. Mahfuz Sarker. All rights reserved.</p>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="footer_social_links">
                            <a href="https://www.linkedin.com/in/md-mahfuz-sarker-b828b4253/" target="_blank" title="LinkedIn">
                                <i class="bx bxl-linkedin"></i>
                            </a>
                            <a href="https://www.facebook.com/md.mahfuzsarker.58" target="_blank" title="Facebook">
                                <i class="bx bxl-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/md.mahfuz.sarker/" target="_blank" title="Instagram">
                                <i class="bx bxl-instagram"></i>
                            </a>
                            <a href="https://github.com/221002349-maf" target="_blank" title="GitHub">
                                <i class="bx bxl-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>`;
        },

        // Render entire document
        renderAll: function () {
            return [
                this.renderHeader(),
                this.renderBanner(),
                this.renderSocialLinks(),
                this.renderServices(),
                this.renderResume(),
                this.renderExperience(),
                this.renderFooter()
            ].join('\n');
        },

        // Interactive Handlers
        initInteractions: function () {
            // 1. Mobile Menu / Burger Handlers with Dedicated Close Button & Backdrop
            const navbarMenu = document.getElementById("menu");
            const burgerMenu = document.getElementById("burger");
            const menuCloseBtn = document.getElementById("menu-close");
            const menuBackdrop = document.getElementById("menu-backdrop");

            const closeMenu = () => {
                if (burgerMenu) burgerMenu.classList.remove("is-active");
                if (navbarMenu) navbarMenu.classList.remove("is-active");
                if (menuBackdrop) menuBackdrop.classList.remove("is-active");
            };

            const openMenu = () => {
                if (burgerMenu) burgerMenu.classList.add("is-active");
                if (navbarMenu) navbarMenu.classList.add("is-active");
                if (menuBackdrop) menuBackdrop.classList.add("is-active");
            };

            if (burgerMenu && navbarMenu) {
                burgerMenu.addEventListener("click", () => {
                    if (navbarMenu.classList.contains("is-active")) {
                        closeMenu();
                    } else {
                        openMenu();
                    }
                });

                if (menuCloseBtn) {
                    menuCloseBtn.addEventListener("click", closeMenu);
                }

                if (menuBackdrop) {
                    menuBackdrop.addEventListener("click", closeMenu);
                }

                document.querySelectorAll(".menu-link").forEach((link) => {
                    link.addEventListener("click", closeMenu);
                });

                window.addEventListener("resize", () => {
                    if (window.innerWidth >= 992) {
                        closeMenu();
                    }
                });
            }

            // 2. Sticky Waterdrop Navbar Handler (Smooth, Zero Layout Jump)
            const header = document.getElementById('header');
            if (header) {
                const updateHeader = () => {
                    if (window.scrollY >= 25) {
                        header.classList.add('Sticky');
                    } else {
                        header.classList.remove('Sticky');
                    }
                };
                window.addEventListener('scroll', updateHeader, { passive: true });
                updateHeader();
            }

            // 3. Typewriter Animation from CV
            const typedText = document.querySelector(".typed-text");
            const cursor = document.querySelector(".cursor");
            const textArray = [
                "International Sales",
                "Client Relationships",
                "Technical Communication",
                "Problem Solving",
                "Global Partnerships"
            ];

            if (typedText && cursor) {
                let textArrayIndex = 0;
                let charIndex = 0;

                const erase = () => {
                    if (charIndex > 0) {
                        cursor.classList.remove('blink');
                        typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
                        charIndex--;
                        setTimeout(erase, 60);
                    } else {
                        cursor.classList.add('blink');
                        textArrayIndex++;
                        if (textArrayIndex > textArray.length - 1) {
                            textArrayIndex = 0;
                        }
                        setTimeout(type, 1000);
                    }
                };

                const type = () => {
                    if (charIndex <= textArray[textArrayIndex].length - 1) {
                        cursor.classList.remove('blink');
                        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
                        charIndex++;
                        setTimeout(type, 100);
                    } else {
                        cursor.classList.add('blink');
                        setTimeout(erase, 1400);
                    }
                };

                type();
            }

            // 4. Fluid Motion & Scroll Reveal System
            this.initMotion();

            // 5. Lenis Smooth Scroll (Desktop Only - Disabled on Mobile)
            this.initLenisScroll();
        },

        // Fluid Scroll-Triggered Reveal Motion
        initMotion: function () {
            const elements = document.querySelectorAll('[data-motion]');
            if (!elements.length) return;

            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries, obs) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-revealed');
                            obs.unobserve(entry.target);
                        }
                    });
                }, {
                    root: null,
                    threshold: 0.08,
                    rootMargin: '0px 0px -20px 0px'
                });

                elements.forEach(el => observer.observe(el));
            } else {
                elements.forEach(el => el.classList.add('is-revealed'));
            }
        },

        // Lenis Smooth Scroll Implementation
        initLenisScroll: function () {
            const LenisClass = window.Lenis;
            if (!LenisClass) return;

            let lenis = null;
            let rafId = null;

            function isDesktop() {
                const isWide = window.innerWidth > 991;
                const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0 && window.innerWidth <= 991);
                return isWide && !isTouch;
            }

            function raf(time) {
                if (lenis) {
                    lenis.raf(time);
                    rafId = requestAnimationFrame(raf);
                }
            }

            function enableLenis() {
                if (lenis) return;
                lenis = new LenisClass({
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    smoothWheel: true,
                    syncTouch: false,
                    touchMultiplier: 0
                });
                rafId = requestAnimationFrame(raf);
                window.lenis = lenis;

                // Handle anchor links smoothly via Lenis
                document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
                    anchor.addEventListener('click', function (e) {
                        const targetId = this.getAttribute('href');
                        if (targetId && targetId !== '#') {
                            const target = document.querySelector(targetId);
                            if (target && lenis) {
                                e.preventDefault();
                                lenis.scrollTo(target, { offset: -70 });
                            }
                        }
                    });
                });
            }

            function disableLenis() {
                if (lenis) {
                    if (rafId) {
                        cancelAnimationFrame(rafId);
                        rafId = null;
                    }
                    lenis.destroy();
                    lenis = null;
                    window.lenis = null;
                }
            }

            function updateScrollMode() {
                if (isDesktop()) {
                    enableLenis();
                } else {
                    disableLenis();
                }
            }

            // Initialize mode check
            updateScrollMode();

            // React to orientation and window resize events
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(updateScrollMode, 200);
            });
        },

        // Main Initialization
        init: function () {
            let container = document.querySelector(this.config.mountSelector);
            if (!container) {
                container = document.body;
            }
            container.innerHTML = this.renderAll();
            this.initInteractions();
        }
    };

    // Auto mount when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            PortfolioApp.init();
        });
    } else {
        PortfolioApp.init();
    }

    window.PortfolioApp = PortfolioApp;
})();
