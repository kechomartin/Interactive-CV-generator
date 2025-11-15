import React, { useState } from 'react';
import { FileText, Download, Edit2, User, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Github } from 'lucide-react';

export default function CVPDFGenerator() {
  const [editMode, setEditMode] = useState(false);
  const [cvData, setCvData] = useState({
    name: "MARTIN KECHO KAKUKO",
    contact: {
      address: "P. O. Box 9324 - 3100, Eldoret, Kenya",
      mobile: "0748905258",
      email: "kecho.mk@gmail.com",
      github: "https://github.com/kechomartin"
    },
    profile: "Research and Social Work professional combining academic training in Sociology & Fieldwork experience and Education Research, Household Surveys in both Public and Non-Governmental Organization projects, with a track record of conducting data collection using both hard copies and electronic questionnaires using ICT tools. A Software engineer versed in Javascript programming language and related technologies, I have had a chance to learn the language and put what I have learnt to practice and have worked on applicable projects in the modern world touching majorly on finance and health.",
    education: [
      {
        degree: "Bachelor of Arts (Sociology, Psychology & Philosophy)",
        institution: "University of Nairobi, Kenya",
        year: "2022 - to date"
      },
      {
        degree: "Certificate - Moringa School Kenya",
        institution: "Moringa School Kenya",
        year: "2022"
      },
      {
        degree: "Kenya Certificate of Secondary Education",
        institution: "Lenana School",
        year: ""
      }
    ],
    competencies: [
      "Experience in quantitative and/or qualitative methodologies and using different research techniques",
      "Organization skills, excellent time management and the ability to work under pressure and meet deadlines",
      "Confidence in using Microsoft Office software and ICT data collection & management tools",
      "Accuracy and attention to detail for handling data and reporting research findings",
      "Excellent communication skills, both written and verbal",
      "Interpersonal skills to develop and maintain relationships",
      "Practical skills in Git version control",
      "Team Working skills and the ability to work well on my own",
      "Key understanding in Database and database management and relational technologies (NoSql, mySql and mongoDB)",
      "Experience working with UI design tools such as Figma and Adobe XD",
      "Strong command in Client side development, versed in (html, css, javascript, and react as a framework)",
      "Versed with IT service management tools such as ServiceNow and BMC Remedy",
      "Utilization of tools such as PowerBI and Tableau to create mobile friendly dashboards",
      "Knowledge in mobile security practices, data protection and security in mobile applications",
      "Experience in Linux/UNIX Operating Systems",
      "Report writing skills"
    ],
    experience: [
      {
        company: "Kenya Livestock Commercialization Project (Kelcop)",
        position: "Enumerator",
        period: "April - May 2023",
        responsibilities: [
          "Participate in Enumerators training on administration of Questionnaires using applications provided on tablets",
          "Used electronic questionnaires in tablets to interview the sampled pupils",
          "Verify that all assessments have been captured on the tablet and uploaded successfully",
          "Attended debrief meetings to polish up on enumeration skills",
          "Report to the supervisor at the end of each survey and identify problems in obtaining valid data"
        ]
      },
      {
        company: "Independent Electoral and Boundaries Commission",
        position: "Deputy Presiding Officer",
        period: "August 2022",
        responsibilities: [
          "Collect election materials from the tallying center in accordance to the election materials checklist and transport them to the polling station",
          "Assisted in instructing and supervising the work of polling clerks and security officers by ensuring that they follow statutory electoral procedures",
          "Assisted with management of attendance of those entitled to be in the polling station",
          "Accounted for all the electoral materials, both used and unused",
          "Ensured that voters cast their votes and put them in the correct ballot boxes and help voters where necessary",
          "Assisted with counting of votes in liaison with the presiding officer and fill the designated forms for dissemination to the tallying center",
          "Participated in debrief meetings to reflect on field events"
        ]
      }
    ],
    certifications: [
      "JavaScript: Basic Certification | Issued by HackerRank | 15/03/2023",
      "Vue JS 3: Certification | Issued by MindLuster | 09/05/2024",
      "Introduction to Data Analytics: Certification | Issued by Simplilearn | 01/02/2024",
      "Modernized Infrastructure And Applications with Google Cloud | Issued by SimpliLearn | 13/11/2024",
      "Introduction To CISSP Security Assessment & Testing and Security Operations | 11/05/2025",
      "Scaling with Google Cloud Operations | 11/05/2025"
    ],
    references: [
      {
        name: "Nicholas Nyongio",
        position: "Kelcop coordinator",
        address: "P.O BOX 1404-30200, Kitale",
        phone: "0723396050",
        email: "nkakuko102@gmail.com"
      },
      {
        name: "Michael Kibet",
        position: "Regional IEBC ICT coordinator-North rift",
        address: "P.O BOX 822-30100, Eldoret",
        phone: "0724009200",
        email: "Mpello@iebc.or.ke"
      }
    ]
  });

  const generatePDF = () => {
    const printWindow = window.open('', '_blank');
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${cvData.name} - CV</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 40px; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #2563eb; padding-bottom: 20px; }
            .header h1 { color: #1e40af; font-size: 28px; margin-bottom: 15px; }
            .contact-info { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; font-size: 12px; }
            .contact-item { display: flex; align-items: center; gap: 5px; }
            .section { margin-bottom: 25px; }
            .section-title { color: #1e40af; font-size: 18px; font-weight: bold; margin-bottom: 10px; border-bottom: 2px solid #93c5fd; padding-bottom: 5px; }
            .profile-text { text-align: justify; margin-bottom: 20px; font-size: 13px; }
            .education-item, .experience-item { margin-bottom: 15px; }
            .education-item h3, .experience-item h3 { color: #1e40af; font-size: 14px; margin-bottom: 5px; }
            .education-item p, .experience-item p { font-size: 12px; color: #666; }
            .competencies-list, .cert-list { columns: 2; column-gap: 20px; font-size: 12px; }
            .competencies-list li, .cert-list li { margin-bottom: 8px; break-inside: avoid; }
            .responsibilities { margin-top: 8px; }
            .responsibilities li { font-size: 12px; margin-bottom: 5px; }
            .references { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .reference-item { border: 1px solid #e5e7eb; padding: 15px; border-radius: 5px; }
            .reference-item h4 { color: #1e40af; margin-bottom: 8px; }
            .reference-item p { font-size: 12px; margin-bottom: 3px; }
            @media print {
              body { padding: 20px; }
              .section { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${cvData.name}</h1>
            <div class="contact-info">
              <div class="contact-item">📍 ${cvData.contact.address}</div>
              <div class="contact-item">📧 ${cvData.contact.email}</div>
              <div class="contact-item">📱 ${cvData.contact.mobile}</div>
              <div class="contact-item">🔗 ${cvData.contact.github}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">PERSONAL PROFILE</div>
            <p class="profile-text">${cvData.profile}</p>
          </div>

          <div class="section">
            <div class="section-title">EDUCATION</div>
            ${cvData.education.map(edu => `
              <div class="education-item">
                <h3>${edu.degree}</h3>
                <p>${edu.institution} ${edu.year ? `| ${edu.year}` : ''}</p>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <div class="section-title">PROFESSIONAL COMPETENCIES</div>
            <ul class="competencies-list">
              ${cvData.competencies.map(comp => `<li>${comp}</li>`).join('')}
            </ul>
          </div>

          <div class="section">
            <div class="section-title">WORK EXPERIENCE</div>
            ${cvData.experience.map(exp => `
              <div class="experience-item">
                <h3>${exp.company}</h3>
                <p><strong>${exp.position}</strong> | ${exp.period}</p>
                <ul class="responsibilities">
                  ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <div class="section-title">CERTIFICATIONS</div>
            <ul class="cert-list">
              ${cvData.certifications.map(cert => `<li>${cert}</li>`).join('')}
            </ul>
          </div>

          <div class="section">
            <div class="section-title">REFERENCES</div>
            <div class="references">
              ${cvData.references.map(ref => `
                <div class="reference-item">
                  <h4>${ref.name}</h4>
                  <p>${ref.position}</p>
                  <p>${ref.address}</p>
                  <p>Tel: ${ref.phone}</p>
                  <p>Email: ${ref.email}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </body>
      </html>
    `;
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  const updateField = (path, value) => {
    const keys = path.split('.');
    setCvData(prev => {
      const newData = JSON.parse(JSON.stringify(prev));
      let current = newData;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-4">{cvData.name}</h1>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{cvData.contact.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>{cvData.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>{cvData.contact.mobile}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github size={16} />
                    <span>{cvData.contact.github}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditMode(!editMode)}
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2"
                >
                  <Edit2 size={18} />
                  {editMode ? 'View Mode' : 'Edit Mode'}
                </button>
                <button
                  onClick={generatePDF}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition flex items-center gap-2"
                >
                  <Download size={18} />
                  Generate PDF
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Profile */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                <User size={24} />
                Personal Profile
              </h2>
              {editMode ? (
                <textarea
                  value={cvData.profile}
                  onChange={(e) => updateField('profile', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg min-h-32"
                />
              ) : (
                <p className="text-gray-700 text-justify">{cvData.profile}</p>
              )}
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                <GraduationCap size={24} />
                Education
              </h2>
              <div className="space-y-4">
                {cvData.education.map((edu, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                    {editMode ? (
                      <>
                        <input
                          value={edu.degree}
                          onChange={(e) => {
                            const newEdu = [...cvData.education];
                            newEdu[idx].degree = e.target.value;
                            updateField('education', newEdu);
                          }}
                          className="w-full p-2 border border-gray-300 rounded mb-2"
                          placeholder="Degree"
                        />
                        <input
                          value={edu.institution}
                          onChange={(e) => {
                            const newEdu = [...cvData.education];
                            newEdu[idx].institution = e.target.value;
                            updateField('education', newEdu);
                          }}
                          className="w-full p-2 border border-gray-300 rounded mb-2"
                          placeholder="Institution"
                        />
                        <input
                          value={edu.year}
                          onChange={(e) => {
                            const newEdu = [...cvData.education];
                            newEdu[idx].year = e.target.value;
                            updateField('education', newEdu);
                          }}
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="Year"
                        />
                      </>
                    ) : (
                      <>
                        <h3 className="font-semibold text-lg text-gray-800">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.institution}</p>
                        {edu.year && <p className="text-gray-500 text-sm">{edu.year}</p>}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Competencies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Professional Competencies</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {cvData.competencies.map((comp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700 text-sm">{comp}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                <Briefcase size={24} />
                Work Experience
              </h2>
              <div className="space-y-6">
                {cvData.experience.map((exp, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-bold text-lg text-gray-800">{exp.company}</h3>
                    <p className="text-blue-600 font-semibold">{exp.position}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, ridx) => (
                        <li key={ridx} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-gray-700 text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                <Award size={24} />
                Certifications
              </h2>
              <ul className="space-y-2">
                {cvData.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700 text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* References */}
            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">References</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cvData.references.map((ref, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">{ref.name}</h4>
                    <p className="text-gray-600 text-sm">{ref.position}</p>
                    <p className="text-gray-500 text-sm">{ref.address}</p>
                    <p className="text-gray-500 text-sm">Tel: {ref.phone}</p>
                    <p className="text-gray-500 text-sm">Email: {ref.email}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}