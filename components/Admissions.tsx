"use client";

import React from "react";
import { Button, Card, CardBody, Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";
import { 
  FileCheck, 
  CalendarDays, 
  School, 
  ClipboardList, 
  Download, 
  ArrowRight, 
  CheckCircle2,
  HelpCircle,
  Sparkles
} from "lucide-react";

const processSteps = [
  {
    title: "Inquiry",
    desc: "Fill the online form or visit campus.",
    icon: CalendarDays,
    color: "from-blue-400 to-cyan-400"
  },
  {
    title: "Campus Tour",
    desc: "See our facilities & meet teachers.",
    icon: School,
    color: "from-violet-400 to-purple-400"
  },
  {
    title: "Apply",
    desc: "Submit application with docs.",
    icon: FileCheck,
    color: "from-pink-400 to-rose-400"
  },
  {
    title: "Interact",
    desc: "Student assessment & parent meet.",
    icon: ClipboardList,
    color: "from-orange-400 to-amber-400"
  },
  {
    title: "Success",
    desc: "Pay fees & confirm admission.",
    icon: CheckCircle2,
    color: "from-emerald-400 to-green-400"
  }
];

export default function AdmissionsPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#F8FAFC] overflow-hidden pt-20 md:pt-24 pb-12 md:pb-20" id="admissions">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 md:w-[500px] md:h-[500px] bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 md:w-[500px] md:h-[500px] bg-fuchsia-200/20 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
        
        {/* HERO HEADER */}
        <div className="text-center mb-12 md:mb-16 lg:mb-24 space-y-4 md:space-y-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-indigo-100 shadow-sm mb-3 md:mb-4">
               <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-indigo-500 fill-indigo-500" />
               <span className="text-xs md:text-sm font-bold text-indigo-900 uppercase tracking-wider">Admissions Open 2024-25</span>
             </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight"
          >
            Start Your Journey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              at Minerva Academy
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium px-2"
          >
            We nurture curious minds and kind hearts. Join a community dedicated to holistic growth, creative learning, and global excellence.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 pt-2 md:pt-4"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm md:text-base px-6 md:px-8 py-4 md:py-5 rounded-xl shadow-lg shadow-indigo-500/25"
              endContent={<ArrowRight className="w-4 h-4 md:w-5 md:h-5" />}
            >
              Apply Online Now
            </Button>
            <Button 
              size="lg" 
              variant="bordered"
              className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 font-bold text-sm md:text-base px-6 md:px-8 py-4 md:py-5 rounded-xl hover:bg-slate-50"
              startContent={<Download className="w-4 h-4 md:w-5 md:h-5" />}
            >
              Download Brochure
            </Button>
          </motion.div>
        </div>

        {/* ADMISSION PROCESS (Steps) */}
        <section className="mb-16 md:mb-20 lg:mb-32">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-2 md:mb-3 lg:mb-4">Simple Admission Process</h2>
            <p className="text-sm md:text-base lg:text-lg text-slate-500 font-medium">Your five steps to joining our family</p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl md:rounded-[2rem] flex items-center justify-center mb-3 md:mb-4 lg:mb-6 shadow-lg shadow-indigo-100 bg-gradient-to-br ${step.color} transform transition-all duration-300 group-hover:scale-105`}>
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white drop-shadow-md" />
                  </div>
                  <div className="bg-white px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl border border-slate-100 shadow-sm w-full">
                    <h3 className="font-bold text-base md:text-lg text-slate-800 mb-1">{step.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ELIGIBILITY & DOCUMENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20 lg:mb-32 items-start">
          
          {/* Left: Age Criteria Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
               <div className="p-2 md:p-3 bg-violet-100 text-violet-600 rounded-lg md:rounded-xl">
                 <CalendarDays className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">Age Eligibility</h3>
            </div>

            <Card className="border-none shadow-lg md:shadow-xl bg-white/70 backdrop-blur-sm ring-1 ring-slate-900/5 rounded-2xl md:rounded-3xl overflow-hidden">
              <CardBody className="p-0">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-3 md:p-4 lg:p-5">
                   <div className="grid grid-cols-2">
                      <span className="text-white font-bold uppercase tracking-wider text-xs md:text-sm">Grade Level</span>
                      <span className="text-white font-bold uppercase tracking-wider text-xs md:text-sm">Required Age</span>
                   </div>
                </div>
                <div className="divide-y divide-slate-100">
                  {[
                    { grade: "Grade 1", age: "5 Years + 6 Months" },
                    { grade: "Grade 2", age: "6 Years + 6 Months" },
                    { grade: "Grade 3", age: "7 Years + 6 Months" },
                    { grade: "Grade 4", age: "8 Years + 6 Months" },
                    { grade: "Grade 5", age: "9 Years + 6 Months" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-2 p-3 md:p-4 lg:p-5 hover:bg-violet-50/50 transition-colors">
                      <span className="font-bold text-slate-700 text-sm md:text-base">{row.grade}</span>
                      <span className="font-medium text-slate-600 text-sm md:text-base">{row.age}</span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
            <div className="mt-3 md:mt-4 flex items-start gap-2 text-xs md:text-sm text-slate-500 bg-white/50 p-2 md:p-3 rounded-lg border border-slate-100">
                <HelpCircle className="w-4 h-4 md:w-5 md:h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <p>Age relaxation of up to 30 days may be considered based on the entrance assessment results and principal's discretion.</p>
            </div>
          </motion.div>

          {/* Right: Documents Required */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
               <div className="p-2 md:p-3 bg-rose-100 text-rose-600 rounded-lg md:rounded-xl">
                 <ClipboardList className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">Documents Needed</h3>
            </div>

            <Card className="shadow-lg md:shadow-xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 rounded-2xl md:rounded-3xl">
              <CardBody className="p-4 md:p-6 lg:p-8">
                <ul className="space-y-3 md:space-y-4">
                  {[
                    "Original Birth Certificate (for verification)",
                    "Transfer Certificate (from previous school)",
                    "Passport size photographs of student (4 copies)",
                    "Passport size photographs of parents (2 copies)",
                    "Copy of Aadhar Card (Student & Parents)",
                    "Previous year's Report Card / Mark Sheet"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 p-2 md:p-3 rounded-lg md:rounded-xl hover:bg-white hover:shadow-sm transition-all group">
                      <div className="p-1 rounded-full bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                      </div>
                      <span className="font-semibold text-slate-700 text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                   <div className="text-slate-600 font-medium text-sm md:text-base">Need checklist help?</div>
                   <Button 
                      size="sm"
                      className="bg-slate-900 text-white font-bold rounded-lg text-sm md:text-base"
                      endContent={<ArrowRight size={14} />}
                   >
                      Contact Office
                   </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        {/* FAQS */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-sm md:text-base">Everything you need to know about joining us</p>
          </div>
          
          <Accordion 
            variant="splitted" 
            className="gap-3 md:gap-4"
            itemClasses={{
              base: "group bg-white shadow-md shadow-slate-200/50 border border-slate-100 rounded-xl md:rounded-2xl px-2 md:px-4",
              title: "font-bold text-slate-800 text-base md:text-lg lg:text-xl group-hover:text-indigo-600 transition-colors",
              trigger: "py-3 md:py-4",
              content: "text-slate-600 font-medium pb-4 md:pb-6 pt-0 text-sm md:text-base",
              indicator: "text-indigo-400 font-bold"
            }}
          >
            <AccordionItem key="1" aria-label="Admission Start" title="When does the admission process start?">
              Admissions for the upcoming academic year typically open in <span className="text-indigo-600 font-bold">November</span>. We recommend applying early as seats are limited.
            </AccordionItem>
            <AccordionItem key="2" aria-label="Transportation" title="Is transportation available for students?">
              Yes, Minerva provides safe and GPS-tracked bus transportation covering a <span className="text-indigo-600 font-bold">25km radius</span> around the campus.
            </AccordionItem>
            <AccordionItem key="3" aria-label="Student-Teacher Ratio" title="What is the student-teacher ratio?">
              To ensure personal attention, we maintain a strict student-teacher ratio of <span className="text-indigo-600 font-bold">25:1</span> in all primary grades.
            </AccordionItem>
            <AccordionItem key="4" aria-label="Entrance Exam" title="Is there an entrance exam?">
              For Grade 1 and above, there is a basic interaction/assessment to understand the child's current learning level in English and Mathematics.
            </AccordionItem>
          </Accordion>
        </section>

      </div>
    </div>
  );
}