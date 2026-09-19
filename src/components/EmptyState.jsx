import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceFrown,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function EmptyState({ resetFilters }) {
  return (
    <div className="text-center py-20">
      <div className="w-24 h-24 bg-[#161616] border border-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
        <FontAwesomeIcon
          icon={faFaceFrown}
          className="text-5xl text-neutral-500"
        />
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">
        لا توجد مقالات
      </h3>

      <p className="text-neutral-400 mb-6">
        حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
      </p>

      <button
        onClick={resetFilters}
        className="btn-primary inline-flex items-center gap-2 rounded-full"
      >
        <FontAwesomeIcon icon={faRotateLeft} />
        إعادة تعيين الفلاتر
      </button>
    </div>
  );
}