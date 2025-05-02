'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'ماهي أكاديمية المعرفة الإفتراضية؟',
    answer:
      'منصة عربية تعليمية توفر محتوى متنوع ومتكامل بالإضافة إلى أنه يتم تحديث محتواها بشكل دائم ومتجدد لتعلم لغات البرمجة والتقنيات الحديثة بكل سهولة ومتعة.',
  },
  {
    question: 'تخصصي وخبرتي غير تقنية هل يمكنني الالتحاق بإحدى دورات أكاديمية المعرفة؟',
    answer:
      'نعم يمكن لأي أحد التسجيل في دورات أكاديمية المعرفة حيث إنها تبدأ من الصفر ولا تتطلب وجود أي خبرة برمجية مسبقة.',
  },
  {
    question: 'كيف أختار مسار البرمجة المناسب لي؟',
    answer: (
      <>
        <span>
          الإجابة تعتمد عليك وعلى توجهك، ففي حال كنت ترغب في تطوير صفحات الويب فيمكنك التسجيل في
          إحدى الدورات التالية: (Java- Python- PHP - JavaScript - .Net - CSS - HTML)
        </span>
        <br />
        <span>في حال كنت ترغب في تطوير تطبيقات الهاتف لديك ثلاث خيارات:</span>
        <br />
        <span>لتطوير تطبيقات iOS فإن لغة swift هي المناسبة لك.</span>
        <br />
        <span>لتطوير تطبيقات Android فإن لغة Kotlin أو Java هي المناسبة لك.</span>
        <br />
        <span>
          لتطوير تطبيقات أجهزة iOS و Android معاً فإن Flutter أو React Native هي المناسبة لك.
        </span>
      </>
    ),
  },
  {
    question: 'هل يمكنني التسجيل في أكثر من دورة ومسار؟',
    answer: 'نعم، يمكنك التسجيل في أكثر من دورة ومسار تدريبي.',
  },
  {
    question: 'هل هناك وقت محدد لإتمام الدورات والمسارات التدريبية؟',
    answer: 'لا، فمحتوى أكاديمية المعرفة متاح للجميع في أي وقت.',
  },
  {
    question: 'ما هي المتطلبات أو البرامج المطلوب مني توفيرها؟',
    answer:
      'يمكنك استخدام أجهزة Windows أو macOS لتطبيق دروس جميع الدورات والمسارات ماعدا دورات مسار iOS فإنها تتطلب وجود جهاز macOS. مع العلم بأن لكل دورة برنامج محدد يُطلب تثبيته ويتم شرح طريقة التثبيت في بداية الدورة التدريبية .',
  },
  {
    question: 'كیف احصل على الشھادة بعد إتمام الدورة؟',
    answer: 'بعد إتمامك لدورة على أكاديمية المعرفة ستحصل على الشهادة تضاف إالى ملفك الشخصي.',
  },
  {
    question: 'كیف اسلم المشروع بنھایة الدورة؟',
    answer:
      'المشروع لا یتطلب التسلیم على أكاديمیة المعرفة , یکنک الاستفادة من حل المشروع لتطویر مھاراتك.',
  },
  {
    question: 'كیف اتابع الدورة المضافة حدیثاً؟',
    answer:
      'یکنک متابعة حساب أكادیمیة المعرفة على منصات التواصل الاجتماعي لمتابعة إعلانات الدورات المضافة حدیثاً',
  },
  {
    question: 'ماھي الفئة المحددة لحضور دورات أكاديمية المعرفة؟',
    answer:
      'الدورات في أكاديمية المعرفة مقسمة إلى مستویات من المبتدىء إلى المتقدمة ویمكنك حضور الدورات على حسب المستوى.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [headerHeight] = useState(0);

  return (
    <div
      style={{ paddingTop: `${(headerHeight > 0 ? headerHeight : 100) + 80}px` }}
      className="flex justify-center items-start min-h-screen bg-gradient-to-t from-[#fcfcfc] to-[#aa7fff] dark:from-[#3B3371] dark:via-[#443266] dark:to-[#443266] transition-all duration-300 overflow-y-auto"
    >
      <div className="lg:w-4/6 lg:m-auto text-center lg:text-right">
        <div className="border border-gray-200 dark:border-[#443266] shadow w-full max-w-5xl h-auto rounded-2xl px-8 mx-auto mb-10 pt-7 pb-8 bg-white dark:bg-[#382a55] transition-all duration-300 flex flex-col items-center justify-center">
          <h1 className="text-[#aa7fff] text-3xl font-bold mb-8 dark:text-white drop-shadow tracking-wide select-none text-center">
            الأسئلة الشائعة
          </h1>
          <div className="w-full mt-5">
            {faqs.map((faq, idx) => (
              <div
                className="w-full border-b border-b-black/10 dark:border-b-white/10 p-5 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-[#443266] rounded-xl"
                key={idx}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="flex w-full cursor-pointer items-center justify-between gap-2 focus:outline-none"
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <h4 className="text-lg font-bold text-[#aa7fff] dark:text-[#aa7fff] text-right transition-colors duration-200">
                    {faq.question}
                  </h4>
                  <span
                    className={`transition-transform duration-200 ${
                      openIndex === idx ? 'rotate-45 text-primary' : 'rotate-0 text-primary'
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#443266] dark:text-white text-base"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`grid transition-all duration-300 ${
                    openIndex === idx
                      ? 'grid-rows-[1fr] opacity-100 mt-3'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0 max-w-max overflow-hidden text-slate-600 dark:text-white">
                    <div
                      dir="rtl"
                      className="markdown-wrapper prose prose-sm sm:prose-sm lg:prose-base xl:prose-base w-full"
                    >
                      {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
