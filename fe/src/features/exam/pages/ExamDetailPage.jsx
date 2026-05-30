import { Link, useParams } from 'react-router-dom'
import useAuth from '@/shared/hooks/useAuth'
import { isPremium } from '@/shared/utils/roleHelper'
import SubjectLibraryLayout from '@/shared/components/SubjectLibrary/SubjectLibraryLayout'
import ExamPreviewBreadcrumb from '../components/ExamPreviewBreadcrumb'
import ExamInfoBar from '../components/ExamInfoBar'
import ExamLockedQuestionPanel from '../components/ExamLockedQuestionPanel'
import { getExamPreview } from '../examMockData'
import '../exam.css'

export default function ExamDetailPage() {
  const { subjectCode = '', examId = '' } = useParams()
  const { plan } = useAuth()
  const normalizedCode = subjectCode.toUpperCase()
  const exam = getExamPreview(normalizedCode, examId)
  const hasPremium = isPremium(plan)

  if (!exam) {
    return (
      <SubjectLibraryLayout activeSubject="exams">
        <section className="exam-detail">
          <ExamPreviewBreadcrumb subjectCode={normalizedCode} />
          <div className="exam-detail__empty">
            <h1>Không tìm thấy đề thi</h1>
            <p>Đề thi này không tồn tại hoặc đã bị gỡ.</p>
            <Link to={`/exams/${subjectCode.toLowerCase()}`}>Quay lại danh sách</Link>
          </div>
        </section>
      </SubjectLibraryLayout>
    )
  }

  return (
    <SubjectLibraryLayout activeSubject="exams">
      <section className="exam-detail">
        <ExamPreviewBreadcrumb subjectCode={normalizedCode} />

        <div className="exam-detail__content">
          <ExamInfoBar exam={exam} isPremium={hasPremium} />
          <ExamLockedQuestionPanel exam={exam} />
        </div>
      </section>
    </SubjectLibraryLayout>
  )
}
