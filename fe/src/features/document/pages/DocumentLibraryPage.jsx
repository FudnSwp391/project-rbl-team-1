import SubjectLibraryLayout from '@/shared/components/SubjectLibrary/SubjectLibraryLayout'
import SubjectLibraryContent from '@/shared/components/SubjectLibrary/SubjectLibraryContent'
import { DOCUMENT_SEMESTERS } from '../documentMockData'

export default function DocumentLibraryPage() {
  return (
    <SubjectLibraryLayout activeSubject="documents">
      <SubjectLibraryContent
        title="Tài liệu học tập"
        description="Tài liệu học tập và tài nguyên tham khảo dành cho sinh viên"
        semesters={DOCUMENT_SEMESTERS}
      />
    </SubjectLibraryLayout>
  )
}
