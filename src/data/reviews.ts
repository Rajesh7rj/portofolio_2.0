import { Review } from '@/types';

export const reviews: Review[] = [
  {
    author: {
      name: 'Nikunj Prajapati',
      imageUrl: '/images/testimonial/nikunj-qa-lead.jpeg',
      designation: 'Lead Quality Analyst',
      // company: 'Ventaja IT Solutions',
    },
    comment: `
          I had the pleasure of working with Rajesh Janyani and can confidently say they are an exceptional 
          Next.js developer. With a deep technical understanding, Rajesh Janyani consistently delivered 
          innovative solutions and played a key role in leading sprints and retrospectives. 
          They are also a fantastic mentor, always willing to help the team and guide junior developers. 
          Their leadership, product insight, and ability to collaborate effectively make them a valuable asset. 
          A true go-to person for both technical challenges and team support. 
          I highly recommend Rajesh Janyani for any team looking for a skilled and reliable developer.
    `,
  },
  {
    author: {
      name: 'Hunny Sindhakar',
      imageUrl: '/images/testimonial/hunny-ui-designer.jpeg',
      designation: 'UI/UX Designer',
      // company: '',
    },
    comment: `
I had the pleasure of working with Rajesh during our time at the same company. His expertise with ReactJS and NextJS was evident in how efficiently he brought complex interfaces to life. He consistently translated designs into scalable, performant solutions while maintaining a strong focus on user experience and code quality.

What truly stood out was his calm, solution-oriented mindset and ability to collaborate across functions. Whether it was syncing with designers, coordinating with backend teams, or managing timelines, he approached each task with clarity and professionalism.

I highly recommend Rajesh to any team looking for someone who combines technical skill with strong team values. 🙌
    `,
  },
];
