import PageTitle from '@/components/shared/PageTitle';
import AppLayout from '@/layouts/AppLayout';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';

type Props = {};

const Contact = (props: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const openGmail = () => {
    const { name, email, subject, message } = formData;
  
    // Check if all fields are filled
    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    // Simple email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Construct the mailto link
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=rajeshjanyani7@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0A--%0A%0A${encodeURIComponent(name)}`;
    window.open(mailtoLink, '_blank');
  };
  

  return (
    <AppLayout title="Contact">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '' },
        ]}
      >
        Contact
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
            <h6 className="text-2xl font-bold">Contact with me</h6>
            <p className="mt-2">I would love to hear from you. 👋</p>
            <div className="mt-10 text-gray-400">
              <p>Baroda, Gujarat, India</p>
              <p className="mt-4">+919724167245</p>
              <p>rajeshjanyani7@gmail.com</p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid gap-8 md:grid-cols-2">
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
              />
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
              />
            </div>

            <div className="mt-8">
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
              />
            </div>
            <div className="mt-8">
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
              />
            </div>
            <div className="mt-8">
              <Button
                onClick={openGmail}  // Trigger openGmail function when button is clicked
                className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;
