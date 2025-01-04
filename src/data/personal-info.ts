export const personalInfo = {
    name: "Rajesh Janyani",
    title: "Rajesh J",
    developer: ['Frontend Developer', 'React JS Developer', 'Next JS Developer'],
    mobile: "+919724167245",
    email: "rajeshjanyani7@gmail.com",
    address: "Baroda, Gujarat, India",
    totalProjectsDone: "5+",
    totalExperience: "2+",
    
    generateAboutMe() {
        return `
        I’m a Software Developer with over ${this.totalExperience} years of experience in building responsive and engaging applications. 
        Specializing in ReactJS, Next.js, TypeScript, and JavaScript, I’m dedicated to delivering high-quality, 
        user-focused solutions.

        I excel at transforming complex requirements into seamless digital experiences and work closely with 
        design, backend, and QA teams using Agile and Scrum to ensure efficient, timely project delivery. 
        I take pride in writing clean, maintainable code and continuously improving development processes to create scalable, 
        high-performance apps.

        With a strong problem-solving mindset and a passion for innovation, I embrace new challenges 
        and continually learn to stay ahead in the dynamic field of web development.
        `;
    }
}


