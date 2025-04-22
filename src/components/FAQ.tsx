
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is LuckyJob?",
    answer: "LuckyJob is a modern job search platform that connects talented professionals with top companies. Our platform streamlines the job search process with intelligent filtering, real-time updates, and personalized job matches."
  },
  {
    question: "How do I search for jobs?",
    answer: "You can easily search for jobs using our intuitive search bar and filters. Enter keywords, select your preferred location, experience level, and salary range to find the perfect job match. Our smart filtering system ensures you see the most relevant opportunities."
  },
  {
    question: "What makes LuckyJob different?",
    answer: "LuckyJob stands out with its user-friendly interface, advanced filtering capabilities, and focus on quality job listings. We partner with reputable companies to ensure all job postings are verified and current."
  },
  {
    question: "How do I apply for a job?",
    answer: "Simply click on any job card that interests you to view the full details. From there, you can review the requirements and click the apply button to submit your application directly through our platform."
  },
  {
    question: "Can I save jobs for later?",
    answer: "Yes! Once you create an account, you can save interesting jobs to your favorites list and return to them later. This helps you keep track of opportunities you'd like to explore further."
  }
];

export const FAQ = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
