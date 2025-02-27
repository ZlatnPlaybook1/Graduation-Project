import React from 'react';
import './services.css';

const ServiceCard = ({ iconClass, title, description, path, color }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
      <div className="services__card" style={{ '--clr': color }}>
        <div className="services__card__content">
          <div className="services__card__icon">
            <i className={iconClass}></i>
          </div>
          <div className="services__card__text">
            <h3 className="services__card__title">{title}</h3>
            <p className="services__card__description">{description}</p>
            <a href={path} className="services__card__link">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const servicesData = [
    {
      iconClass: 'fa fa-shield-alt', 
      title: 'Cybersecurity Fundamentals',
      description: 'Learn key concepts and best practices for cybersecurity.',
      path: '/cybersecurity-fundamentals',
      color: '#007BFF', 
    },
    {
      iconClass: 'fa fa-network-wired', 
      title: 'Network Security',
      description: 'Master techniques to protect and monitor networks.',
      path: '/network-security',
      color: '#28a745', 
    },
    {
      iconClass: 'fa fa-exclamation-triangle', 
      title: 'Threat Detection & Response',
      description: 'Identify and counter security threats effectively.',
      path: '/threat-detection-response',
      color: '#dc3545', 
    },
    {
      iconClass: 'fa fa-user-secret', // Ethical Hacking & Pen Testing
      title: 'Ethical Hacking & Pen Testing',
      description: 'Practice ethical hacking to find vulnerabilities.',
      path: '/ethical-hacking-penetration-testing',
      color: '#ffc107', // Yellow
    },
    {
      iconClass: 'fa fa-cogs', // Incident Response & Management
      title: 'Incident Response & Management',
      description: 'Manage cybersecurity incidents with proven strategies.',
      path: '/incident-response-management',
      color: '#17a2b8', // Teal
    },
    {
      iconClass: 'fa fa-cloud', // Cloud Security
      title: 'Cloud Security',
      description: 'Secure cloud environments with best practices.',
      path: '/cloud-security',
      color: '#6f42c1', // Purple
    },
  ];

  return (
    <section className="services">
      <div className="container py-5"> 
        <div className="services__header text-center mb-5">
          <h2 className="services__header__title">Our Cybersecurity Learning Pathways</h2>
          <h4 className="services__header__subtitle">Explore Our Courses</h4>
          <p className="services__header__description">
            Our platform offers a variety of learning pathways designed to equip you 
            with the skills needed to excel in the field of cybersecurity.
          </p>
        </div>
        <div className="row justify-content-center">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
