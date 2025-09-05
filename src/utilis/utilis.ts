// utils/experience.js
export const totalExperience = () => {
    const startDate = new Date('2022-01-01');
    const now = new Date();
  
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    return `${years} y ${months} m`;
    // return `${years} +`
  };


export const teachingExp = "4"

  