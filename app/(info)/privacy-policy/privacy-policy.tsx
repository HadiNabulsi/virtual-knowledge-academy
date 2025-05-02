'use client';

import React, { useState } from 'react';

const PrivacyPolicy: React.FC = () => {
  const [headerHeight] = useState(0);

  return (
    <div
      style={{ paddingTop: `${(headerHeight > 0 ? headerHeight : 100) + 80}px` }}
      className="flex justify-center items-start min-h-screen bg-gradient-to-t from-[#fcfcfc] to-[#aa7fff] dark:from-[#3B3371] dark:via-[#443266] dark:to-[#443266] transition-all duration-300 overflow-y-auto font-arabic"
      dir="rtl"
    >
      <div className="lg:w-4/6 lg:m-auto w-full text-center lg:text-right">
        <div className="border border-gray-200 dark:border-[#443266] shadow w-full max-w-5xl h-auto rounded-2xl px-8 mx-auto mb-10 pt-7 pb-8 bg-white dark:bg-[#382a55] transition-all duration-300 flex flex-col items-center justify-center">
          <h1 className="text-[#aa7fff] text-3xl font-bold mb-8 dark:text-white drop-shadow tracking-wide select-none text-center">
            سياسة الخصوصية
          </h1>
          <section className="w-full">
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              المقدمة
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              تقدم أكاديمية المعرفة الإفتراضية هذه السياسة بهدف تعريفك بالإجراءات والممارسات المتبعة
              لدينا لحماية حقوق مستخدمينا، من خلال الحفاظ على سرية المعلومات الشخصية والخاصة
              بالمستخدمين. تم إعداد هذه السياسة لتوضيح كيفية جمع واستخدام ونشر المعلومات عبر
              الأكاديمية. يُرجى قراءة ومراجعة هذه السياسة بعناية قبل استخدام الأكاديمية، حيث يعد
              استخدامك لها موافقة صريحة منك غير مشروطة ولا رجعة فيها على الالتزام بهذه السياسة.
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
            <h3 className="text-lg font-bold mb-2 mt-6">ما هي البيانات التي يتم جمعها؟</h3>
            <p className="text-lg leading-relaxed mb-4">
              عند تقديم طلب الانضمام إلى الأكاديمية، نقوم بجمع مجموعة من المعلومات والبيانات الشخصية
              الأساسية لإتمام عملية التسجيل. يتم استخدام هذه البيانات بشكل محدود للغاية لضمان حماية
              الأنظمة ضد الاعتداءات غير المشروعة. وبإدخالك لبياناتك الشخصية، فإنك توافق ضمنيًا على
              سياسة الخصوصية هذه.
            </p>
            <h3 className="text-lg font-bold mb-2 mt-6">كيف يتم جمع البيانات؟</h3>
            <ul className="list-disc pr-6 mb-4 text-lg leading-relaxed space-y-1">
              <li>
                عند استخدام الأكاديمية: قد نقوم بتتبع وجمع بعض بيانات استخدام التطبيق مثل وقت وتاريخ
                الدخول، عدد مرات التسجيل، الالتحاق بالدروس، وغيرها من المعلومات المتوفرة على حسابك.
              </li>
              <li>
                من خلالك: يمكننا جمع معلومات عامة تشمل (الاسم، البريد الإلكتروني، رقم الجوال، تاريخ
                الميلاد، الجنسية، الجنس) عند تقديمك طوعًا لهذه المعلومات.
              </li>
              <li>
                عبر الموقع الجغرافي: قد نحتاج إلى بعض المعلومات الجغرافية في بعض الحالات. في هذه
                الحالة، قد نلجأ لاستخدام خدمات طرف ثالث لجمع هذه البيانات. تخضع هذه المعلومات لسياسة
                خصوصية الطرف الثالث ولا تتحمل الأكاديمية مسؤولية التعامل معها. يتحمل المستخدم أي
                مسؤولية تجاه الالتزامات المتعلقة بالطرف الثالث.
              </li>
            </ul>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              كيفية استخدام البيانات؟ (آلية الاستخدام)
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              يتم استخدام البيانات التي نقدمها للأغراض المحددة في هذه السياسة، مثل تمكينك من استخدام
              خدمات الأكاديمية، إرسال إشعارات، نشرات، رسائل إخبارية وغيرها من الخدمات التي تحقق
              الأهداف المنشودة.
            </p>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              كيف تتم حماية البيانات؟ (السرية والأمان)
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              نلتزم بالحفاظ على خصوصية وسرية جميع البيانات الشخصية التي نحصل عليها. لن يتم إفشاء هذه
              البيانات إلا في الحالات التالية: عندما يُطلب ذلك بموجب القانون. عندما نعتقد بحسن نية
              أن ذلك ضروري للامتثال للأنظمة أو للدفاع عن حقوق الملكية الخاصة بالأكاديمية أو الأطراف
              المستفيدة.
            </p>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              آلية الاحتفاظ بالبيانات
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              تحتفظ الأكاديمية بالبيانات الشخصية طوال مدة عضويتك. يمكننا أيضًا الاحتفاظ بالبيانات
              لفترة أطول إذا تطلب الأمر لحماية أنفسنا ضد أي مطالبات قانونية. يحق لك دائمًا طلب حذف
              بياناتك، وسنقوم بتلبية هذا الطلب قدر الإمكان.
            </p>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              سياسة الكوكيز
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              ملفات الكوكيز هي ملفات نصية تُستخدم للتمييز بين الزوار وتتبع المعلومات خلال زيارات
              متعددة. يتم استخدام الكوكيز لتخزين بيانات مثل عدد مرات تسجيل الدخول وزيارات الموقع.
            </p>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              الارتباطات التشعبية
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              قد تحتوي الأكاديمية على روابط لمواقع طرف ثالث. يتم توفير هذه الروابط فقط كوسيلة للوصول
              إلى محتوى خارجي. لا تتحمل الأكاديمية أي مسؤولية عن محتوى أو منتجات أو خدمات هذه
              المواقع أو مواردها.
            </p>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              التغييرات على سياسة الخصوصية
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              تتم مراجعة سياسة الخصوصية بشكل دوري، وقد نقوم بإجراء بعض التغييرات عليها. تسري
              التعديلات فور نشر السياسة الجديدة، لذا يُنصح بزيارة هذه الصفحة بانتظام للاطلاع على
              النسخة الأحدث من سياسة الخصوصية.
            </p>
            <h2 className="text-xl font-bold text-[#aa7fff] mb-4 mt-8 border-b border-[#aa7fff] pb-2">
              الاستفسارات
            </h2>
            <p className="text-lg leading-relaxed mb-2">
              لأي استفسارات إضافية حول بنود سياسة الخصوصية أو الشروط والأحكام، أو إذا كنت ترغب في
              معرفة المزيد حول كيفية استخدام بياناتك أو حمايتها، يُرجى التواصل معنا عبر البريد
              الإلكتروني :{' '}
              <span className="text-[#aa7fff] font-bold">info@knowledgeacademy.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
