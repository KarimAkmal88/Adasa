import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faLock,
  faShieldHalved,
  faCircleCheck,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Privacy() {
  return (
    <div className="bg-[#0a0a0a]" dir="rtl">
      <header className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm mb-8">
            <Link
              to="/"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              الرئيسية
            </Link>

            <FontAwesomeIcon
              icon={faChevronLeft}
              className="w-4 h-4 text-neutral-600"
            />

            <span className="text-orange-500 font-medium">
              سياسة الخصوصية
            </span>
          </nav>

          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">
            <FontAwesomeIcon
              icon={faLock}
              className="w-8 h-8 text-orange-500"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            سياسة الخصوصية
          </h1>

          <p className="text-neutral-400 text-lg">
            آخر تحديث: 15 يناير 2026
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 mb-12">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="w-6 h-6 text-orange-500"
              />
            </div>

            <div>
              <h3 className="font-semibold text-orange-500 mb-1">
                خصوصيتك تهمنا
              </h3>

              <p className="text-orange-300/80 text-sm">
                نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                1
              </span>
              مقدمة
            </h2>

            <div className="pr-11">
              <p className="text-neutral-400 leading-relaxed">
                مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية
                بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية
                ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية
                الخاصة بك.
              </p>
            </div>
          </section>

          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                2
              </span>
              المعلومات التي نجمعها
            </h2>

            <div className="pr-11">
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-neutral-400">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                  />
                  <span>
                    <strong className="text-white">بيانات الهوية:</strong>{" "}
                    تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.
                  </span>
                </li>

                <li className="flex items-start gap-3 text-neutral-400">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                  />
                  <span>
                    <strong className="text-white">بيانات الاتصال:</strong>{" "}
                    تشمل عنوان البريد الإلكتروني.
                  </span>
                </li>

                <li className="flex items-start gap-3 text-neutral-400">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                  />
                  <span>
                    <strong className="text-white">البيانات التقنية:</strong>{" "}
                    تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.
                  </span>
                </li>

                <li className="flex items-start gap-3 text-neutral-400">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                  />
                  <span>
                    <strong className="text-white">بيانات الاستخدام:</strong>{" "}
                    تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                3
              </span>
              كيف نستخدم معلوماتك
            </h2>

            <div className="pr-11">
              <ul className="space-y-3">
                {[
                  "لتقديم خدمتنا والحفاظ عليها",
                  "لإخطارك بالتغييرات في خدمتنا",
                  "لتقديم دعم العملاء",
                  "لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا",
                  "لمراقبة استخدام خدمتنا",
                  "لاكتشاف ومنع ومعالجة المشاكل التقنية",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-neutral-400"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                4
              </span>
              ملفات تعريف الارتباط
            </h2>

            <div className="pr-11">
              <p className="text-neutral-400 leading-relaxed">
                نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع
                النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف
                الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا
                لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض
                أجزاء موقعنا.
              </p>
            </div>
          </section>

          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                5
              </span>
              أمان البيانات
            </h2>

            <div className="pr-11">
              <p className="text-neutral-400 leading-relaxed">
                لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو
                استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ.
                نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة
                عملية للمعرفة.
              </p>
            </div>
          </section>

          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                6
              </span>
              حقوقك
            </h2>

            <div className="pr-11">
              <ul className="space-y-3">
                {[
                  "طلب الوصول إلى بياناتك الشخصية",
                  "طلب تصحيح بياناتك الشخصية",
                  "طلب مسح بياناتك الشخصية",
                  "الاعتراض على معالجة بياناتك الشخصية",
                  "طلب تقييد معالجة بياناتك الشخصية",
                  "الحق في سحب الموافقة",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-neutral-400"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                7
              </span>
              تواصل معنا
            </h2>

            <div className="pr-11">
              <p className="text-neutral-400 leading-relaxed mb-4">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل
                معنا:
              </p>

              <a
                href="mailto:hello@adasah.com"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-5 h-5"
                />
                hello@adasah.com
              </a>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#262626]">
          <p className="text-neutral-500 text-sm text-center">
            باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً{" "}
            <Link
              to="/terms"
              className="text-orange-500 hover:text-orange-400 font-medium"
            >
              شروط الخدمة
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}