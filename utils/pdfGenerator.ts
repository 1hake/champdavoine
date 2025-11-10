import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { resumeData } from '@/data/data';

const createResumeHTML = (): string => {
    return `
        <div id="temp-resume-content" style="
            background: white;
            padding: 20px;
            width: 100%;
            max-width: none;
            margin: 0;
            font-family: 'Space Grotesk', 'Geist', 'Inter', sans-serif;
            line-height: 1.4;
            color: #000000;
            font-size: 12px;
            box-sizing: border-box;
        ">
            <!-- Header -->
            <header style="border-bottom: 2px solid #000000; padding-bottom: 12px; margin-bottom: 20px;">
                <div style="display: flex; align-items: center; justify-content: center; gap: 20px; margin-bottom: 12px;">
                    <div style="flex-shrink: 0;">
                        <img src="/images/profile_pic.jpg" alt="Profile Picture" style="
                            width: 80px; 
                            height: 80px; 
                            border-radius: 50%; 
                            object-fit: cover;
                            border: 2px solid #000000;
                            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                        " />
                    </div>
                    <div style="text-align: center; flex-grow: 1;">
                        <h1 style="font-size: 24px; font-weight: bold; color: #000000; margin: 0 0 6px 0; letter-spacing: 2px; font-family: 'Anton', 'Bebas Neue', Impact, sans-serif; text-transform: uppercase;">
                            ${resumeData.name.toUpperCase()}
                        </h1>
                        <h2 style="font-size: 14px; color: #000000; font-weight: normal; margin: 0; font-style: italic;">
                            ${resumeData.headline}
                        </h2>
                    </div>
                </div>
                
                <div style="text-align: center; font-size: 10px; color: #333333;">
                    <span>📍 ${resumeData.location}</span> • 
                    <span>✉️ ${resumeData.contact.email}</span> • 
                    <span>📱 ${resumeData.contact.phone}</span> • 
                    <span>💻 github.com/1hake</span>
                </div>
            </header>

            <!-- Profile Summary -->
            <section style="margin-bottom: 20px;">
                <h3 style="font-size: 13px; font-weight: bold; color: #000000; margin: 0 0 8px 0; border-bottom: 1px solid #000000; padding-bottom: 2px; text-transform: uppercase; letter-spacing: 1px; font-family: 'Anton', 'Bebas Neue', Impact, sans-serif;">
                    Profil Professionnel
                </h3>
                <p style="color: #000000; line-height: 1.4; margin: 0 0 8px 0; text-align: justify; font-size: 11px;">
                    ${resumeData.profile.summary}
                </p>
                <div style="line-height: 1.3; margin-top: 6px;">
                    <strong style="font-size: 10px;">Compétences clés :</strong>
                    <span style="font-size: 10px;">
                        ${resumeData.profile.qualities.join(' • ')}
                    </span>
                </div>
            </section>

            <!-- Experience -->
            <section style="margin-bottom: 20px;">
                <h3 style="font-size: 13px; font-weight: bold; color: #000000; margin: 0 0 10px 0; border-bottom: 1px solid #000000; padding-bottom: 2px; text-transform: uppercase; letter-spacing: 1px; font-family: 'Anton', 'Bebas Neue', Impact, sans-serif;">
                    Expérience Professionnelle
                </h3>
                <div>
                    ${resumeData.experience.map(exp => `
                        <div style="margin-bottom: 16px;">
                            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
                                <div>
                                    <h4 style="font-size: 12px; font-weight: bold; color: #000000; margin: 0; display: inline;">
                                        ${exp.title}
                                    </h4>
                                    <span style="font-size: 12px; color: #000000; margin-left: 6px;">
                                        chez <strong>${exp.employer}</strong>
                                    </span>
                                    ${exp.location ? `
                                        <span style="font-size: 10px; color: #666666; margin-left: 6px;">
                                            📍 ${exp.location}
                                        </span>
                                    ` : ''}
                                </div>
                                <div style="font-size: 10px; color: #666666; font-style: italic;">
                                    📅 ${exp.start} - ${exp.end}
                                    ${exp.duration ? ` | ${exp.duration}` : ''}
                                </div>
                            </div>
                            <ul style="margin: 4px 0 0 12px; padding: 0; list-style-type: none;">
                                ${exp.description.map(desc => `
                                    <li style="font-size: 10px; color: #000000; margin-bottom: 2px; line-height: 1.3; position: relative; padding-left: 12px;">
                                        <span style="position: absolute; left: 0; color: #000000;">•</span>
                                        ${desc}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- Education -->
            <section style="margin-bottom: 20px;">
                <h3 style="font-size: 13px; font-weight: bold; color: #000000; margin: 0 0 10px 0; border-bottom: 1px solid #000000; padding-bottom: 2px; text-transform: uppercase; letter-spacing: 1px; font-family: 'Anton', 'Bebas Neue', Impact, sans-serif;">
                    Formation
                </h3>
                <div>
                    ${resumeData.education.map(edu => `
                        <div style="margin-bottom: 12px;">
                            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 3px;">
                                <div>
                                    <h4 style="font-size: 12px; font-weight: bold; color: #000000; margin: 0; display: inline;">
                                        ${edu.field}
                                    </h4>
                                    <span style="font-size: 12px; color: #000000; margin-left: 6px;">
                                        - <strong>${edu.school}</strong>
                                    </span>
                                </div>
                                <div style="font-size: 10px; color: #666666; font-style: italic;">
                                    📅 ${edu.period}
                                </div>
                            </div>
                            <p style="font-size: 10px; color: #000000; margin: 0; line-height: 1.3; margin-left: 12px;">
                                ${edu.description}
                            </p>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- Technical Skills -->
            <section style="margin-bottom: 20px;">
                <h3 style="font-size: 13px; font-weight: bold; color: #000000; margin: 0 0 10px 0; border-bottom: 1px solid #000000; padding-bottom: 2px; text-transform: uppercase; letter-spacing: 1px; font-family: 'Anton', 'Bebas Neue', Impact, sans-serif;">
                    Compétences Techniques
                </h3>
                <div style="display: flex; justify-content: space-between;">
                    <div style="width: 48%;">
                        <h4 style="font-weight: bold; color: #000000; margin: 0 0 6px 0; font-size: 11px;">
                            Frontend & Frameworks
                        </h4>
                        <p style="font-size: 10px; line-height: 1.3; margin: 0;">
                            ${resumeData.skills.techniques.slice(0, Math.ceil(resumeData.skills.techniques.length / 2)).join(' • ')}
                        </p>
                    </div>
                    <div style="width: 48%;">
                        <h4 style="font-weight: bold; color: #000000; margin: 0 0 6px 0; font-size: 11px;">
                            Backend & Infra
                        </h4>
                        <p style="font-size: 10px; line-height: 1.3; margin: 0;">
                            ${resumeData.skills.techniques.slice(Math.ceil(resumeData.skills.techniques.length / 2)).join(' • ')}
                        </p>
                    </div>
                </div>
            </section>

         

          
        </div>
    `;
};

export const generateResumePDF = async (): Promise<void> => {
    try {
        // Create a temporary container for the resume
        const tempDiv = document.createElement('div');
        tempDiv.style.position = 'absolute';
        tempDiv.style.left = '-9999px';
        tempDiv.style.top = '0';
        tempDiv.style.width = '210mm'; // A4 width
        tempDiv.style.height = 'auto';
        tempDiv.style.backgroundColor = 'white';
        tempDiv.style.padding = '0';
        tempDiv.style.margin = '0';
        tempDiv.innerHTML = createResumeHTML();

        document.body.appendChild(tempDiv);

        // Wait for proper rendering and image loading
        await new Promise(resolve => setTimeout(resolve, 1200));

        // Ensure all images are loaded
        const images = tempDiv.querySelectorAll('img');
        await Promise.all(Array.from(images).map(img => {
            return new Promise((resolve) => {
                if (img.complete) {
                    resolve(img);
                } else {
                    img.onload = () => resolve(img);
                    img.onerror = () => resolve(img); // Still resolve to continue
                }
            });
        }));

        // Get the resume element
        const resumeElement = tempDiv.querySelector('#temp-resume-content') as HTMLElement;
        if (!resumeElement) {
            throw new Error('Resume element not found');
        }

        // Configure html2canvas for optimal quality
        const canvas = await html2canvas(resumeElement, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            width: resumeElement.scrollWidth,
            height: resumeElement.scrollHeight,
            logging: false,
            removeContainer: false,
            imageTimeout: 0,
            windowWidth: 794, // A4 width in pixels at 96 DPI
            onclone: (clonedDoc) => {
                const clonedElement = clonedDoc.querySelector('#temp-resume-content') as HTMLElement;
                if (clonedElement) {
                    clonedElement.style.transform = 'none';
                    clonedElement.style.zoom = '1';
                }
            }
        });

        // Remove temporary element
        document.body.removeChild(tempDiv);

        // Create PDF with minimal margins
        const imgData = canvas.toDataURL('image/png', 1.0);
        const pdf = new jsPDF('p', 'mm', 'a4');

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        // Use very small margins for maximum width usage
        const margin = 5; // 5mm margin
        const availableWidth = pdfWidth - (margin * 2);
        const availableHeight = pdfHeight - (margin * 2);

        // Calculate image dimensions
        const pixelsPerMm = 3.78;
        const scale = 2;
        const imgWidthMM = canvas.width / (pixelsPerMm * scale);
        const imgHeightMM = canvas.height / (pixelsPerMm * scale);

        // Scale to fit available width (prioritize width usage)
        const scaleToFit = Math.min(availableWidth / imgWidthMM, availableHeight / imgHeightMM, 1);

        const finalWidth = imgWidthMM * scaleToFit;
        const finalHeight = imgHeightMM * scaleToFit;

        // Position on page
        const x = margin;
        const y = margin;

        // Add image to PDF
        pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight, '', 'FAST');

        // Generate filename with current date
        const currentDate = new Date().toISOString().split('T')[0];
        const filename = `CV_Colin_Champdavoine_${currentDate}.pdf`;

        // Download the PDF
        pdf.save(filename);
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw new Error('Failed to generate PDF');
    }
};