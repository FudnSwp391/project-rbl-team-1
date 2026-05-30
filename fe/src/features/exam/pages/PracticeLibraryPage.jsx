import SubjectLibraryLayout from '@/shared/components/SubjectLibrary/SubjectLibraryLayout'
import SubjectLibraryContent from '@/shared/components/SubjectLibrary/SubjectLibraryContent'
import { PRACTICE_SEMESTERS } from '../practiceMockData'

export default function PracticeLibraryPage() {
  return (
    <SubjectLibraryLayout activeSubject="practice">
      <SubjectLibraryContent
        title="Câu hỏi thực hành"
        description="Bài tập thực hành và câu hỏi luyện tập dành cho sinh viên"
        semesters={PRACTICE_SEMESTERS}
      />
    </SubjectLibraryLayout>
  )
}
