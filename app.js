// Portfolio application data with complete information
const portfolioData = {
  "profile": {
    "name": "Arunaachalam Alagappan",
    "email": "arunaachalam.al@gmail.com",
    "phone": "+91 9962132636",
    "linkedin": "linkedin.com/in/arunaachalamalagappan",
    "location": "India",
    "profileImage": "Screenshot-2025-09-23-at-2.29.12-AM.jpeg"
  },
  "about": {
    "content": "🎓 Arunaachalam Alagappan\n\n🏆 Second Class Upper Honours (2:1) – BSc Business & Management, University of London (LSE guidance), Singapore\n\n📚 Currently: Pursuing ACCA to sharpen technical expertise in accounting and finance.\n\n💼 Specialties:\n\n🔍 Financial Reporting & Management Accounting\n\n✅ Auditing, Internal Controls & Compliance Testing\n\n📈 Business & Management Strategy\n\n🚀 Next Episode: Aspiring Audit Associate, eager to apply strong quantitative and qualitative skills to deliver high-quality assurance and insights."
  },
  "education": [
    {
      "institution": "University of London – London School of Economics",
      "degree": "Bachelor of Science (Hons) - Business and Management",
      "grade": "Second Class Honours (Upper Division, 2:1 – Equivalent to GPA 3.3–3.6)",
      "location": "Singapore",
      "period": "Aug 2022 - Aug 2025"
    }
  ],
  "certifications": [
    {
      "name": "ACCA – Association of Chartered Certified Accountants",
      "status": "In Progress"
    },
    {
      "name": "Analytics: From Data to Insights – National University of Singapore", 
      "status": "In Progress"
    },
    {
      "name": "Singapore Taxation – Singapore Institute of Management",
      "status": "Completed 2025"
    },
    {
      "name": "Singapore Law – Singapore Institute of Management",
      "status": "Completed 2024"
    },
    {
      "name": "Certificate in Excellency – Indian School Certificate (ISC)",
      "status": "Completed 2022"
    }
  ],
  "experience": [
    {
      "company": "Empact",
      "position": "Volunteer",
      "period": "Jun 2024 – Feb 2025",
      "location": "Singapore",
      "achievements": [
        "Managed payroll for 15 employees, by automating Excel validations and ensuring 100% compliance with CPF submissions, reducing errors in monthly reporting",
        "Registered CPF contributions for employees on the CPF website, exported data to Excel, and submitted it to superiors, maintaining compliance with statutory requirements",
        "Consolidated payroll data across IShine Cloud, OCBC Velocity, and QuickBooks, improving transparency and enabling faster financial reporting for supervisors"
      ]
    },
    {
      "company": "Sundaram Asset Management Company",
      "position": "Compliance Volunteer",
      "period": "Jul 2024 - Sep 2024",
      "location": "Singapore",
      "achievements": [
        "Analyzed customer transaction data for 800+ clients, identifying 20+ high-risk activities and escalating cases for further investigation, reinforcing AML and KYC compliance",
        "Conducted KYC and financial risk assessments for accredited investors, screening and reporting customer data in Excel, and applying KYC data to AML software, ensuring compliance and operational integrity"
      ]
    },
    {
      "company": "CNGSN Associates",
      "position": "Account Intern",
      "period": "Jul 2023 – Aug 2023",
      "location": "Chennai",
      "achievements": [
        "Prepared and reconciled journal entries in Tally, ensuring error-free ledgers and supporting preparation of financial statements for SME clients",
        "Managed the recording of income tax refunds, contributing to the accuracy of financial statements and reporting"
      ]
    },
    {
      "company": "Sundaram Asset Management Company",
      "position": "Data Analyst Intern",
      "period": "Jun 2023 – Jul 2023",
      "location": "Chennai",
      "achievements": [
        "Managed documents and compiled reports, enhancing efficiency by maintaining comprehensive records",
        "Analyzed census data to extract valuable insights into population demographics, contributing to informed decision-making and accurate forecasting through the application of statistical methods"
      ]
    },
    {
      "company": "ICSE StudyMate India",
      "position": "Public Relations Intern",
      "period": "2021 – 2022",
      "location": "India",
      "achievements": [
        "Assisted students with queries and created sample answers"
      ]
    }
  ],
  "leadership": [
    {
      "organization": "SIM Career Champs",
      "position": "Subcommittee Member",
      "period": "Sep 2024 – May 2025",
      "location": "Singapore",
      "achievements": [
        "IGNITE: Facilitated event logistics and coordinated ushering services, enhancing the experience for over 200 employers and participants through efficient organization and a welcoming environment",
        "Engaged in professional development workshops and networking opportunities, expanding industry knowledge and building connections to support career growth"
      ]
    },
    {
      "organization": "SIM International Student Office",
      "position": "Buddy and Events Committee Member",
      "period": "Jun 2024 – May 2025",
      "location": "Singapore",
      "achievements": [
        "Supported new international students from diverse backgrounds, including Chinese, Indian, and Korean, in adapting to academic and social life in Singapore by sharing insights on local culture and essential resources",
        "Spearheaded themed events (e.g., Halloween, prom) for 100+ international freshmen, ensuring flawless execution and fostering connections to enhance their social networks"
      ]
    },
    {
      "organization": "SIM Accounting Association",
      "position": "Events Sub-committee Member",
      "period": "Sep 2023 – Jun 2024",
      "location": "Singapore",
      "achievements": [
        "Drafted comprehensive proposals for career talks, optimizing resource allocation and ensuring successful event execution to facilitate 150 students to network with expert accountants",
        "Contributed to the financial planning of 6 events, helping the committee maximize the resources within budget"
      ]
    },
    {
      "organization": "SIM Tamil Youth Society",
      "position": "Finance Subcommittee",
      "period": "Mar 2023 – Jun 2024",
      "location": "Singapore",
      "achievements": [
        "Organized online events for 80 participants",
        "Created budgets, posters, and proposals",
        "Performed as MC, boosting engagement"
      ]
    },
    {
      "organization": "SIM Sociology Club",
      "position": "Events Subcommittee",
      "period": "Jun 2024 – Jul 2025",
      "location": "Singapore",
      "achievements": [
        "Supported events fostering social integration"
      ]
    },
    {
      "organization": "SIM Photography Club",
      "position": "Events Subcommittee",
      "period": "Jun 2024 – Jul 2025",
      "location": "Singapore",
      "achievements": [
        "Captured high-quality photos & videos for events",
        "Conducted workshops, handled budgets & logistics",
        "Performed risk assessments for smooth execution"
      ]
    }
  ]
};

class PortfolioApp {
  constructor() {
    this.currentPage = 'profile';
    this.init();
  }

  init() {
    console.log('Initializing Netflix-style Portfolio App...');
    // Wait for DOM to be fully ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.bindEvents();
        this.showPage('profile');
      });
    } else {
      this.bindEvents();
      this.showPage('profile');
    }
  }

  bindEvents() {
    console.log('Binding events...');
    
    // Profile photo click - with improved error handling
    const profilePhoto = document.getElementById('profile-photo');
    if (profilePhoto) {
      console.log('Profile photo found, binding click event');
      
      // Remove any existing event listeners
      const newProfilePhoto = profilePhoto.cloneNode(true);
      profilePhoto.parentNode.replaceChild(newProfilePhoto, profilePhoto);
      
      // Add click event with multiple approaches
      newProfilePhoto.addEventListener('click', (e) => {
        console.log('Profile photo clicked - navigating to dashboard');
        e.preventDefault();
        e.stopPropagation();
        this.showPage('dashboard');
      });
      
      // Also add pointer cursor
      newProfilePhoto.style.cursor = 'pointer';
      
    } else {
      console.error('Profile photo element not found');
    }

    // Back to profile button
    const backButton = document.getElementById('back-to-profile');
    if (backButton) {
      console.log('Back button found, binding click event');
      backButton.addEventListener('click', (e) => {
        console.log('Back button clicked - returning to profile');
        e.preventDefault();
        this.showPage('profile');
      });
    }

    // Portfolio cards click - with improved binding
    setTimeout(() => {
      const portfolioCards = document.querySelectorAll('.portfolio-card, .contact-bar');
      console.log(`Found ${portfolioCards.length} portfolio cards`);
      
      portfolioCards.forEach((card, index) => {
        console.log(`Binding click event for card ${index}`);
        card.addEventListener('click', (e) => {
          console.log('Portfolio card clicked');
          e.preventDefault();
          const section = card.getAttribute('data-section');
          console.log(`Opening modal for section: ${section}`);
          this.openModal(section);
        });
        card.style.cursor = 'pointer';
      });
    }, 100);

    // Modal close events
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
    
    if (modalClose) {
      console.log('Modal close button found');
      modalClose.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.closeModal();
      });
    }

    if (modalOverlay) {
      console.log('Modal overlay found');
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          this.closeModal();
        }
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });

    console.log('All events bound successfully');
  }

  showPage(pageId) {
    console.log(`Attempting to show page: ${pageId}`);
    
    try {
      // Hide all pages
      const pages = document.querySelectorAll('.page');
      console.log(`Found ${pages.length} pages`);
      
      pages.forEach(page => {
        page.classList.remove('active');
        console.log(`Removed active class from: ${page.id}`);
      });

      // Show target page
      const targetPage = document.getElementById(`${pageId}-page`);
      if (targetPage) {
        targetPage.classList.add('active');
        this.currentPage = pageId;
        console.log(`Successfully activated page: ${targetPage.id}`);
        
        // Re-bind events if switching to dashboard
        if (pageId === 'dashboard') {
          setTimeout(() => {
            this.bindDashboardEvents();
          }, 100);
        }
      } else {
        console.error(`Page not found: ${pageId}-page`);
      }
    } catch (error) {
      console.error('Error in showPage:', error);
    }
  }

  bindDashboardEvents() {
    console.log('Binding dashboard-specific events...');
    const portfolioCards = document.querySelectorAll('.portfolio-card, .contact-bar');
    
    portfolioCards.forEach((card, index) => {
      // Remove existing listeners and rebind
      const newCard = card.cloneNode(true);
      card.parentNode.replaceChild(newCard, card);
      
      newCard.addEventListener('click', (e) => {
        e.preventDefault();
        const section = newCard.getAttribute('data-section');
        console.log(`Dashboard card clicked: ${section}`);
        this.openModal(section);
      });
      
      newCard.style.cursor = 'pointer';
    });
  }

  openModal(section) {
    console.log(`Opening modal for section: ${section}`);
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    
    if (modalContent && modalOverlay) {
      try {
        modalContent.innerHTML = this.generateModalContent(section);
        modalOverlay.classList.remove('hidden');
        
        // Force reflow before adding visible class
        modalOverlay.offsetHeight;
        
        setTimeout(() => {
          modalOverlay.classList.add('visible');
        }, 10);
        
        console.log(`Modal opened successfully for: ${section}`);
      } catch (error) {
        console.error('Error opening modal:', error);
      }
    } else {
      console.error('Modal elements not found');
    }
  }

  closeModal() {
    console.log('Closing modal');
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
      modalOverlay.classList.remove('visible');
      
      setTimeout(() => {
        modalOverlay.classList.add('hidden');
      }, 250);
    }
  }

  generateModalContent(section) {
    switch (section) {
      case 'about':
        return this.generateAboutContent();
      case 'education':
        return this.generateEducationContent();
      case 'experience':
        return this.generateExperienceContent();
      case 'leadership':
        return this.generateLeadershipContent();
      case 'contact':
        return this.generateContactContent();
      default:
        return '<h1>Content not found</h1>';
    }
  }

  generateAboutContent() {
    return `
      <h1>About Me</h1>
      <div class="about-content">
        <div class="about-section">
          <p style="font-size: 1.3em; margin-bottom: 24px; font-weight: 600;">🎓 <strong>Arunachalam Alagappan</strong></p>
        </div>
        
        <div class="about-section">
          <p style="margin-bottom: 24px;">🏆 <strong>Second Class Upper Honours (2:1)</strong> – BSc Business & Management, University of London (LSE guidance), Singapore</p>
        </div>
        
        <div class="about-section">
          <p style="margin-bottom: 24px;">📚 <strong>Currently:</strong> Pursuing ACCA to sharpen technical expertise in accounting and finance.</p>
        </div>
        
        <div class="about-section">
          <p style="margin-bottom: 16px; font-weight: 600;">💼 <strong>Specialties:</strong></p>
          <ul class="specialties-list">
            <li>🔍 Financial Reporting & Management Accounting</li>
            <li>✅ Auditing, Internal Controls & Compliance Testing</li>
            <li>📈 Business & Management Strategy</li>
          </ul>
        </div>
        
        <div class="about-section">
          <p style="font-size: 1.2em; font-weight: 600;">🚀 <strong>Next Episode:</strong> Aspiring Audit Associate, eager to apply strong quantitative and qualitative skills to deliver high-quality assurance and insights.</p>
        </div>
      </div>
    `;
  }

  generateEducationContent() {
    const { education, certifications } = portfolioData;
    
    return `
      <h1>🎓 Education & Certifications</h1>
      
      <h2>Education</h2>
      ${education.map(edu => `
        <div class="education-item">
          <div class="education-header">
            <div>
              <div class="degree-title">${edu.degree}</div>
              <div class="institution-name">${edu.institution}</div>
            </div>
            <div class="period">${edu.period}</div>
          </div>
          <p><strong>Grade:</strong> ${edu.grade}</p>
          <p><strong>Location:</strong> ${edu.location}</p>
        </div>
      `).join('')}
      
      <h2>Professional Certifications</h2>
      ${certifications.map(cert => `
        <div class="education-item">
          <div class="education-header">
            <div>
              <div class="degree-title">${cert.name}</div>
            </div>
            <div class="status">${cert.status}</div>
          </div>
        </div>
      `).join('')}
    `;
  }

  generateExperienceContent() {
    const { experience } = portfolioData;
    
    return `
      <h1>💼 Work Experience</h1>
      <p>Comprehensive experience across compliance, audit, accounting, and data analysis roles in Singapore, Chennai, and India.</p>
      
      ${experience.map(exp => `
        <div class="experience-item">
          <div class="experience-header">
            <div>
              <div class="position-title">${exp.position}</div>
              <div class="company-name">${exp.company}</div>
            </div>
            <div class="period">${exp.period}</div>
          </div>
          <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 12px; font-style: italic;"><strong>Location:</strong> ${exp.location}</p>
          <ul>
            ${exp.achievements.map(achievement => `<li>✅ ${achievement}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    `;
  }

  generateLeadershipContent() {
    const { leadership } = portfolioData;
    
    return `
      <h1>🚀 Leadership & Activities</h1>
      <p>Active involvement in student organizations, event management, and community building across various Singapore Institute of Management (SIM) societies.</p>
      
      ${leadership.map(activity => `
        <div class="leadership-item">
          <div class="leadership-header">
            <div>
              <div class="position-title">${activity.position}</div>
              <div class="company-name">${activity.organization}</div>
            </div>
            <div class="period">${activity.period}</div>
          </div>
          <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 12px; font-style: italic;"><strong>Location:</strong> ${activity.location}</p>
          <ul>
            ${activity.achievements.map(achievement => `<li>🎯 ${achievement}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    `;
  }

  generateContactContent() {
    const { profile } = portfolioData;
    
    return `
      <h1>📞 Contact Information</h1>
      <p>Let's connect! I'm always open to discussing new opportunities in accounting, finance, and audit.</p>
      
      <div class="contact-info">
        <div class="contact-item">
          <strong>📧 Email</strong>
          <a href="mailto:${profile.email}" target="_blank">${profile.email}</a>
        </div>
        
        <div class="contact-item">
          <strong>📱 Phone</strong>
          <a href="tel:${profile.phone}">${profile.phone}</a>
        </div>
        
        <div class="contact-item">
          <strong>📍 Location</strong>
          <span>${profile.location}</span>
        </div>
        
        <div class="contact-item">
          <strong>🔗 LinkedIn</strong>
          <a href="https://${profile.linkedin}" target="_blank">View Profile</a>
        </div>
        
        <div class="contact-item">
          <strong>📄 Message Me</strong>
          <a href="mailto:${profile.email}?subject=Portfolio%20Inquiry&body=Hi%20Arunachalam,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards" target="_blank">Send Message</a>
        </div>
      </div>
      
      <h3>🎯 Professional Interests</h3>
      <ul>
        <li>🔍 Audit and Assurance Services</li>
        <li>⚖️ Risk Management and Compliance</li>
        <li>📈 Strategic Finance and Planning</li>
        <li>⚡ Business Process Optimization</li>
        <li>📊 Financial Analysis and Reporting</li>
        <li>🏛️ Regulatory Compliance (AML, KYC)</li>
        <li>💼 Management Accounting</li>
      </ul>
      
      <div style="margin-top: 24px; padding: 16px; background: rgba(229, 9, 20, 0.1); border: 1px solid rgba(229, 9, 20, 0.3); border-radius: 8px;">
        <p style="margin: 0; font-style: italic; color: rgba(255, 255, 255, 0.9);">
          💡 <strong>Ready for my next episode:</strong> Seeking opportunities as an Audit Associate where I can contribute my analytical skills, compliance expertise, and passion for financial accuracy.
        </p>
      </div>
    `;
  }
}

// Initialize the application when DOM is loaded
console.log('Script loaded, waiting for DOM...');

// Multiple initialization approaches for reliability
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded via event listener, initializing app...');
    new PortfolioApp();
  });
} else {
  console.log('DOM already loaded, initializing app immediately...');
  new PortfolioApp();
}

// Fallback initialization
setTimeout(() => {
  if (!window.portfolioAppInitialized) {
    console.log('Fallback initialization triggered...');
    window.portfolioAppInitialized = true;
    new PortfolioApp();
  }
}, 500);
