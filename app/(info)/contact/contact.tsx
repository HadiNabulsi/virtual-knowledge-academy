'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Select from 'react-select';
import xCircle from '@/components/images/x-circle.svg';

const Contact: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [issueType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isSubjectFocused, setIsSubjectFocused] = useState(false);
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);

  useEffect(() => {
    const header = document.getElementById('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
    const handleResize = () => {
      const header = document.getElementById('header');
      if (header) setHeaderHeight(header.offsetHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [error]);

  useEffect(() => {
    if (success) {
      const t = setTimeout(() => setSuccess(''), 3000);
      return () => clearTimeout(t);
    }
  }, [success]);

  useEffect(() => {
    if (error && (name || email || subject || issueType || description)) setError('');
  }, [name, email, subject, issueType, description, error]);

  function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    setTimeout(() => {
      if (!name || !email || !subject || !issueType || !description) {
        setError('يرجى تعبئة جميع الحقول.');
        setLoading(false);
        return;
      }
      if (!isValidEmail(email)) {
        setError('يرجى إدخال بريد إلكتروني صحيح.');
        setLoading(false);
        return;
      }
      setSuccess('تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً.');
      setName('');
      setEmail('');
      setSubject('');
      setIssueType('');
      setDescription('');
      setLoading(false);
    }, 900);
  };

  return (
    <div
      style={{ paddingTop: `${(headerHeight > 0 ? headerHeight : 100) + 80}px` }}
      className="flex justify-center items-start min-h-screen bg-gradient-to-t from-[#fcfcfc] to-[#aa7fff] dark:from-[#3B3371] dark:via-[#443266] dark:to-[#443266] transition-all duration-300 overflow-y-auto"
    >
      <div className="lg:w-4/6 lg:m-auto text-center lg:text-right">
        <div className="border border-gray-200 dark:border-[#443266] shadow w-full max-w-2xl h-auto rounded-2xl px-8 mx-auto mb-10 pt-7 pb-8 bg-white dark:bg-[#382a55] transition-all duration-300 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-center text-[#aa7fff] mb-5 dark:text-[#aa7fff] transition-colors duration-300 drop-shadow tracking-wide select-none">
            تواصل معنا
          </div>
          {error && (
            <div
              className="text-sm text-gray-600 mt-5 mb-4 text-center w-full"
              aria-live="polite"
              dir="rtl"
            >
              <div className="flex justify-between items-center bg-red-100 px-4 pt-3 pb-4 border border-solid border-red-400 rounded-md">
                <span>{error}</span>
                <span title="خطأ في البيانات">
                  <Image src={xCircle} alt="error" width={24} height={24} />
                </span>
              </div>
            </div>
          )}
          <form noValidate onSubmit={handleSubmit} className="mt-6 w-full" autoComplete="off">
            <div className="text-right">
              <label htmlFor="name" className="text-gray-900 dark:text-white text-sm font-bold">
                الاسم الكامل
              </label>
              <div className="flex items-center w-full mt-2 mb-6" dir="rtl">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  maxLength={64}
                  className={`dark:text-black w-full border ${
                    error && !name ? 'border-red-500' : 'border-gray-200'
                  } bg-white focus:outline-none focus:${
                    error && !name ? 'border-red-500' : 'border-gray-200'
                  } focus:shadow-none px-4 py-3 rounded-lg h-12 ${
                    isNameFocused ? (error && !name ? '' : 'ring ring-[#aa7fff]') : ''
                  } transition-all duration-200`}
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={() => setIsNameFocused(false)}
                  disabled={loading}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.getElementById('email')?.focus();
                    }
                  }}
                />
              </div>
            </div>
            <div className="text-right">
              <label htmlFor="email" className="text-gray-900 dark:text-white text-sm font-bold">
                البريد الإلكتروني
              </label>
              <div className="flex items-center w-full mt-2 mb-6" dir="rtl">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  maxLength={64}
                  className={`dark:text-black w-full border ${
                    error && !email ? 'border-red-500' : 'border-gray-200'
                  } bg-white focus:outline-none focus:${
                    error && !email ? 'border-red-500' : 'border-gray-200'
                  } focus:shadow-none px-4 py-3 rounded-lg h-12 ${
                    isEmailFocused ? (error && !email ? '' : 'ring ring-[#aa7fff]') : ''
                  } transition-all duration-200`}
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  disabled={loading}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      document.getElementById('subject')?.focus();
                    }
                  }}
                />
              </div>
            </div>
            <div className="text-right">
              <label htmlFor="subject" className="text-gray-900 dark:text-white text-sm font-bold">
                الموضوع
              </label>
              <div className="flex items-center w-full mt-2 mb-6" dir="rtl">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  autoComplete="off"
                  maxLength={128}
                  className={`dark:text-black w-full border ${
                    error && !subject ? 'border-red-500' : 'border-gray-200'
                  } bg-white focus:outline-none focus:${
                    error && !subject ? 'border-red-500' : 'border-gray-200'
                  } focus:shadow-none px-4 py-3 rounded-lg h-12 ${
                    isSubjectFocused ? (error && !subject ? '' : 'ring ring-[#aa7fff]') : ''
                  } transition-all duration-200`}
                  placeholder=""
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  onFocus={() => setIsSubjectFocused(true)}
                  onBlur={() => setIsSubjectFocused(false)}
                  disabled={loading}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const selectInput = document.querySelector('.react-select__control input');
                      if (selectInput) (selectInput as HTMLElement).focus();
                      else {
                        const control = document.querySelector('.react-select__control');
                        if (control) (control as HTMLElement).click();
                      }
                    }
                  }}
                />
              </div>
            </div>
            <div className="text-right">
              <label
                htmlFor="issueType"
                className="text-gray-900 dark:text-white text-sm font-bold"
              >
                نوع المشكلة
              </label>
              <div className="flex items-center w-full mt-2 mb-6" dir="rtl">
                <div className="w-full">
                  <Select
                    id="issueType"
                    name="issueType"
                    classNamePrefix="react-select"
                    isDisabled={loading}
                    value={
                      [
                        { value: 'SIGN_UP', label: 'التسجيل' },
                        { value: 'SIGN_IN', label: 'تسجيل الدخول' },
                        { value: 'COURSES', label: 'الدورات' },
                        { value: 'OTHER', label: 'اخرى' },
                      ].find((option) => option.value === issueType) || null
                    }
                    onChange={(option) => setIssueType(option ? option.value : '')}
                    options={[
                      { value: 'SIGN_UP', label: 'التسجيل' },
                      { value: 'SIGN_IN', label: 'تسجيل الدخول' },
                      { value: 'COURSES', label: 'الدورات' },
                      { value: 'OTHER', label: 'اخرى' },
                    ]}
                    placeholder=""
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        minHeight: '3rem',
                        borderRadius: '0.5rem',
                        borderColor: error && !issueType ? '#ef4444' : '#e5e7eb',
                        backgroundColor: loading ? '#f3f4f6' : '#fff',
                        boxShadow: state.isFocused ? '0 0 0 1px #aa7fff' : undefined,
                        direction: 'rtl',
                        fontSize: '1rem',
                        color: '#222',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        transition: 'all 0.2s',
                        outline: 'none',
                        ':hover': {
                          borderColor: error && !issueType ? '#ef4444' : '#e5e7eb',
                          boxShadow: state.isFocused ? '0 0 0 1px #aa7fff' : undefined,
                        },
                      }),
                      option: (base, state) => {
                        const isDark =
                          typeof window !== 'undefined' &&
                          document.documentElement.classList.contains('dark');
                        let bg = '#fff';
                        let color = '#222';
                        if (state.isSelected) {
                          bg = isDark ? '#382a55' : '#aa7fff';
                          color = '#fff';
                        } else if (state.isFocused) {
                          bg = isDark ? '#443266' : '#ede9fe';
                          color = isDark ? '#fff' : '#222';
                        }
                        return {
                          ...base,
                          backgroundColor: bg,
                          color: color,
                          textAlign: 'right',
                          fontSize: '1rem',
                          padding: '0.75rem 1.25rem',
                          boxShadow: 'none',
                          outline: 'none',
                          ':active': {
                            backgroundColor: isDark ? '#382a55' : '#aa7fff',
                            color: '#fff',
                          },
                        };
                      },
                      singleValue: (base) => ({
                        ...base,
                        textAlign: 'right',
                        color: '#222',
                        fontSize: '1rem',
                      }),
                      placeholder: (base) => ({
                        ...base,
                        textAlign: 'right',
                        color: '#888',
                        fontSize: '1rem',
                      }),
                      dropdownIndicator: (base) => ({ ...base, color: '#64748b' }),
                      indicatorSeparator: (base) => ({ ...base, display: 'none' }),
                      menu: (base) => ({
                        ...base,
                        borderRadius: '0.75rem',
                        boxShadow: '0 2px 8px #0001',
                        marginTop: 2,
                      }),
                    }}
                    isRtl
                    menuPlacement="auto"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        document.getElementById('description')?.focus();
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="text-right">
              <label
                htmlFor="description"
                className="text-gray-900 dark:text-white text-sm font-bold"
              >
                الوصف
              </label>
              <div className="flex items-center w-full mt-2 mb-6" dir="rtl">
                <textarea
                  id="description"
                  name="description"
                  className={`dark:text-black w-full border ${
                    error && !description ? 'border-red-500' : 'border-gray-200'
                  } bg-white focus:outline-none focus:${
                    error && !description ? 'border-red-500' : 'border-gray-200'
                  } focus:shadow-none px-4 py-3 rounded-lg min-h-[120px] transition-all duration-200 ${
                    isDescriptionFocused ? (error && !description ? '' : 'ring ring-[#aa7fff]') : ''
                  } transition-all duration-200`}
                  placeholder="يرجى توضيح المشكلة بالتفصيل لتمكيننا من مساعدتك بشكل أفضل"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  onFocus={() => setIsDescriptionFocused(true)}
                  onBlur={() => setIsDescriptionFocused(false)}
                  disabled={loading}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      document.getElementById('contact-submit-btn')?.focus();
                    }
                  }}
                />
              </div>
            </div>
            <div className="text-right mt-4">
              <button
                id="contact-submit-btn"
                type="submit"
                className="bg-[#aa7fff] w-full h-14 pb-2 text-white rounded-lg cursor-pointer font-bold shadow transition-all duration-300 hover:bg-[#8469d4] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#aa7fff] dark:bg-[#443266] dark:hover:bg-[#aa7fff] dark:text-white disabled:opacity-60 disabled:cursor-not-allowed text-lg tracking-wide"
                disabled={loading}
              >
                {loading ? '...جاري الإرسال' : 'إرسال'}
              </button>
            </div>
          </form>
          {success && (
            <div
              className="text-green-600 dark:text-green-400 text-center mt-4 font-bold transition-colors duration-300 text-md"
              role="status"
            >
              {success}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
