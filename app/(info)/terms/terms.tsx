'use client';

import React, { useState } from 'react';

const Terms: React.FC = () => {
  const [headerHeight] = useState(0);

  return (
    <div
      style={{ paddingTop: `${(headerHeight > 0 ? headerHeight : 100) + 80}px` }}
      className="flex justify-center items-start min-h-screen bg-gradient-to-t from-[#fcfcfc] to-[#aa7fff] dark:from-[#3B3371] dark:via-[#443266] dark:to-[#443266] transition-all duration-300 overflow-y-auto font-arabic"
      dir="rtl"
    >
      <div className="lg:w-4/6 lg:m-auto w-full text-center lg:text-right">
        <div className="border border-gray-200 dark:border-[#443266] shadow w-full max-w-5xl h-auto rounded-2xl px-8 mx-auto mb-10 pt-7 pb-8 bg-white dark:bg-[#382a55] transition-all duration-300 flex flex-col items-center justify-center">
          <h1 className="text-[#aa7fff] text-3xl font-bold mb-8 dark:text-[#aa7fff] drop-shadow tracking-wide select-none text-center">
            الشروط والأحكام
          </h1>
          <section className="w-full">
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              المقدمة
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              تقدم أكاديمية المعرفة الإفتراضية هذه الشروط والأحكام بهدف تعريفكم بالإجراءات
              والممارسات القانونية التي تحكم استخدام هذه الأكاديمية وجميع الخدمات المرتبطة بها. لذا،
              يرجى قراءة ومراجعة هذه الشروط والأحكام بعناية قبل استخدام هذه الأكاديمية. يُعد
              استخدامك لها موافقة صريحة منك غير مشروطة ولا رجعة فيها على الالتزام بهذه الشروط
              والأحكام.
            </p>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              التعريفات والتفسيرات
            </h2>
            <ul className="list-disc pr-6 mb-6 text-lg leading-relaxed space-y-1">
              <li>الأكاديمية: تشير إلى أكاديمية المعرفة الإفتراضية.</li>
              <li>المستخدم: هو الشخص الذي يطلب الانضمام إلى هذه الأكاديمية.</li>
            </ul>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              البيانات المستخدمة
            </h2>
            <h3 className="text-lg font-bold mb-2 mt-6">الأكاديمية:</h3>
            <p className="text-lg leading-relaxed mb-4">
              تهدف الأكاديمية إلى رفع مستوى الوعي لدى المهتمين في مجال تقنية المعلومات من خلال تقديم
              دورات تدريبية عبر الإنترنت وتحميل الكتب بالمجان للاستخدام الشخصي، بالإضافة إلى إقامة
              المعسكرات والفعاليات في مجال تقنية المعلومات.
            </p>
            <h3 className="text-lg font-bold mb-2 mt-6">المستخدم:</h3>
            <p className="text-lg leading-relaxed mb-4">
              يستطيع المستخدم الاستفادة من خدمات الأكاديمية بعد إتمام عملية التسجيل كمشترك.
            </p>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              المسؤولية
            </h2>
            <ul className="list-disc pr-6 mb-4 text-lg leading-relaxed space-y-1">
              <li>
                إذا كنت تستخدم خدمات الأكاديمية نيابة عن شركة أو كيان قانوني آخر، فأنت تقر بأنك
                تتمتع بالصلاحية لربط ذلك الكيان بالشروط.
              </li>
              <li>
                إذا كنت قاصراً (أقل من 18 عاماً)، يجب أن يوافق والديك أو الوصي الشرعي نيابة عنك.
              </li>
            </ul>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              كلمات السر والأمن
            </h2>
            <h3 className="text-lg font-bold mb-2 mt-6">المستخدم:</h3>
            <ul className="list-disc pr-6 mb-4 text-lg leading-relaxed space-y-1">
              <li>
                عند إعداد حسابك، يجب أن تزودنا بمعلومات دقيقة وكاملة. كما يجب عليك تقديم معلومات
                حديثة عند التسجيل.
              </li>
              <li>
                يتحمل المستخدم المسؤولية كاملة عن إدارة حسابه في حال اكتشافك لاستخدام غير مصرح به
                لحسابك، يجب عليك إبلاغنا فورًا.
              </li>
            </ul>
            <h3 className="text-lg font-bold mb-2 mt-6">الأكاديمية:</h3>
            <ul className="list-disc pr-6 mb-4 text-lg leading-relaxed space-y-1">
              <li>
                لا تتحمل الأكاديمية المسؤولية عن الأضرار أو الخسائر الناتجة عن استخدام شخص آخر
                لحسابك دون إذن منك.
              </li>
            </ul>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              الملكية الفكرية وحقوق النشر
            </h2>
            <h3 className="text-lg font-bold mb-2 mt-6">الأكاديمية:</h3>
            <p className="text-lg leading-relaxed mb-4">
              يحتوي الموقع على علامات تجارية وشعارات تخص الأكاديمية أو شركات أخرى.
            </p>
            <h3 className="text-lg font-bold mb-2 mt-6">المستخدم:</h3>
            <p className="text-lg leading-relaxed mb-4">
              لا يُمنح المستخدم أي حقوق أو تراخيص لاستخدام هذه العلامات التجارية أو الشعارات دون إذن
              كتابي مسبق.
            </p>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              المحتوى والمتطلبات القانونية
            </h2>
            <p className="text-lg leading-relaxed">
              بالتسجيل في الأكاديمية، فإنك توافق على استخدام خدماتها لأغراض مشروعة فقط، وتتعهد بعدم:
            </p>
            <ul className="list-disc pr-6 mb-4 text-lg leading-relaxed space-y-1">
              <li>إساءة استخدام الأكاديمية.</li>
              <li>انتحال الشخصية أو ادعاء تمثيل أي شخص أو كيان قانوني آخر.</li>
              <li>تغيير أو حذف أو تحريف أي محتوى من الأكاديمية.</li>
              <li>نشر مواد تنتهك حقوق الملكية الفكرية.</li>
            </ul>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              سلوك المستخدم
            </h2>
            <p className="text-lg leading-relaxed">
              بموجب استخدام الأكاديمية، فإنك تقر بعدم استخدام الخدمات لأي غرض غير قانوني أو محظور.
              يشمل ذلك:
            </p>
            <ul className="list-disc pr-6 mb-4 text-lg leading-relaxed space-y-1">
              <li>الإساءة أو المضايقة أو التهديد.</li>
              <li>نشر أو إرسال محتوى مسيء أو ينتهك حقوق النشر.</li>
              <li>جمع معلومات خاصة عن الآخرين بغرض إلحاق الضرر بهم.</li>
            </ul>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              النزاعات والأنظمة والتشريعات الحاكمة
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              تخضع هذه الأكاديمية لجميع الأنظمة والتشريعات السارية في الجمهورية العربية السورية،
              وتختص محاكم مدينة دمشق بالفصل في أي نزاع قد ينشأ عن استخدام الأكاديمية.
            </p>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              تاريخ النفاذ والتعديلات
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              تسري شروط الاستخدام اعتبارًا من تاريخ النشر. تحتفظ الأكاديمية بحق تعديل الشروط
              والأحكام من وقت لآخر. يتحمل المستخدم مسؤولية الاطلاع على الشروط بشكل دوري للتأكد من
              الالتزام بها.
            </p>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              الامتثال القانوني والافصاح
            </h2>
            <p className="text-lg leading-relaxed">
              لا تقوم الأكاديمية بالإفصاح عن بيانات المستخدم الشخصية إلا في الحالات التالية:
            </p>
            <ul className="list-disc pr-6 mb-6 text-lg leading-relaxed space-y-1">
              <li>عندما يكون الإفصاح مطلوبا بموجب القانون.</li>
              <li>لحماية ممتلكاتنا وحقوقنا.</li>
              <li>للامتثال لأحكام الشروط.</li>
            </ul>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              شروط عامة
            </h2>
            <ul className="list-disc pr-6 mb-6 text-lg leading-relaxed space-y-1">
              <li>
                تشكل هذه الشروط والأحكام التفاهم الكامل بين الأكاديمية والمستخدم وتحل محل جميع
                الاتفاقات السابقة.
              </li>
              <li>أي إشعارات سترسل عبر البريد الإلكتروني أو نشرها على موقع الأكاديمية.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
