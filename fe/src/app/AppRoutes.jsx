import { Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ModRoute from './ModRoute'
import AdminRoute from './AdminRoute'
import ModLayout from '@/shared/layouts/ModLayout'
import AdminLayout from '@/shared/layouts/AdminLayout'
import LandingPage from '@/features/landing/pages/LandingPage'
import CommunityPage from '@/features/community/pages/CommunityPage'
import SupportPage from '@/features/support/pages/SupportPage'
import ExamLibraryPage from '@/features/exam/pages/ExamLibraryPage'
import PracticeLibraryPage from '@/features/exam/pages/PracticeLibraryPage'
import DocumentLibraryPage from '@/features/document/pages/DocumentLibraryPage'
import LoginPage from '@/features/auth/pages/LoginPage'
import LoggedInCommunityPage from '@/features/community/pages/LoggedInCommunityPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/exams" element={<ExamLibraryPage />} />
      <Route path="/practice" element={<PracticeLibraryPage />} />
      <Route path="/documents" element={<DocumentLibraryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<div className="page"><h1>Đăng ký</h1></div>} />
      <Route path="/pricing" element={<div className="page"><h1>Bảng giá Premium</h1></div>} />

      <Route
        path="/feed"
        element={
          <PrivateRoute>
            <LoggedInCommunityPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/mod"
        element={
          <ModRoute>
            <ModLayout />
          </ModRoute>
        }
      >
        <Route index element={<Navigate to="/mod/reports" replace />} />
        <Route path="reports" element={<div className="page"><h1>Báo cáo</h1></div>} />
      </Route>

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index element={<div className="page"><h1>Dashboard</h1></div>} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
