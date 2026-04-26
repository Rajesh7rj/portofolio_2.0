export const personalInfo = {
  name: 'Rajesh Janyani',
  title: 'Rajesh Janyani',
  developer: ['React.js, Next Js', 'Node.js, Express.js', 'API Development, Database Management'],
  mobile: '+91 97241 67245',
  email: 'rajeshjanyani7@gmail.com',
  address: 'Vadodara (Baroda), Gujarat, India',
  totalProjectsDone: '10+',
  totalExperience: '3+',
  employeeOfTheYear: 'Employee of the Year',
  generateAboutMe() {
    const start = new Date(2022, 0, 1);
    const now = new Date();
    let yrs = now.getFullYear() - start.getFullYear();
    let mos = now.getMonth() - start.getMonth();
    if (mos < 0) { yrs -= 1; mos += 12; }
    const expStr = mos > 0 ? `${yrs} years ${mos} months` : `${yrs} years`;
    return `Senior Software Engineer with ${expStr} of experience building scalable, high-performance web applications. Expert in React and Next.js, with solid backend experience in Node.js and API development. Focused on clean architecture, performance optimization, and delivering user-centric solutions, while leveraging modern AI-assisted development workflows to improve efficiency and code quality.`;
  }
};