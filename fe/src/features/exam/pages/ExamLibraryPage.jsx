import SubjectLibraryLayout from '@/shared/components/SubjectLibrary/SubjectLibraryLayout'
import SubjectLibraryContent from '@/shared/components/SubjectLibrary/SubjectLibraryContent'
import { EXAM_SEMESTERS } from '../examMockData'

export default function ExamLibraryPage() {
  return (
    <SubjectLibraryLayout activeSubject="exams">
      <SubjectLibraryContent
        title="Đề thi cuối kỳ"
        description="Đề thi cuối kỳ và tài liệu học tập dành cho sinh viên"
        semesters={EXAM_SEMESTERS}
      />
    </SubjectLibraryLayout>
  )
}
