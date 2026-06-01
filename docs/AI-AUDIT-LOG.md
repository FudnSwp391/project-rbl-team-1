# AI Audit Log — SEHub Frontend (Module Auth)

**Dự án:** SEHub — Nền tảng cộng đồng sinh viên IT  
**Phạm vi:** Trang Login, Register, Forgot Password (5 bước)  
**Công cụ AI:** Cursor Agent + Figma MCP  
**Ngày cập nhật:** 30/05/2026

---

| STT | Giai đoạn / Thành phần DTC | Nội dung Prompt (Câu lệnh) | Phản hồi của AI & Quyết định của người học (Reflection) |
|:---:|---|---|---|
| 1 | **Phân rã / Trừu tượng hóa (Decomposition / Abstraction)** | *"Dựa vào Figma node 6-2, implement trang Login tuân thủ 20 rule kiến trúc (feature-based, Zustand, React Query, validation Zod…)"* | AI đề xuất tách `features/auth/` thành `api/`, `services/`, `hooks/`, `stores/`, `validations/`, `components/`, `pages/` và đặt UI tái sử dụng vào `shared/components/` (`InputField`, `Checkbox`, `Divider`). **Quyết định:** Chấp nhận cấu trúc; yêu cầu AI không gọi API trực tiếp trong component — mọi request đi qua `authApi.ts` → `authService.ts` → hook React Query. Build pass sau lần triển khai đầu. |
| 2 | **Nhận dạng mẫu (Pattern Recognition / Evaluation)** | *"Migrate auth state từ Redux sang Zustand; cập nhật `useAuth`, `axiosInstance`, `ProfileMenu`"* | AI tạo `shared/stores/authStore.ts` (global session) và `features/auth/stores/loginStore.ts` (UI state: rememberMe, showPassword). **Quyết định:** Giữ tách **global store** (session) và **feature store** (form UI) theo rule 13; không xóa Redux cũ ngay toàn project — chỉ migrate phần auth đang dùng để tránh phá module khác. |
| 3 | **Giải quyết vấn đề (Problem Solving)** | *"Implement Register từ Figma node 6-107, tái sử dụng pattern Login"* | AI refactor `LoginBrandPanel` → `AuthBrandPanel` với prop `titleLines`, thêm `registerSchema`, `useRegister`, `registerStore`. **Quyết định:** Dùng chung `login.css` cho layout split thay vì tạo file CSS mới — giảm duplicate; bổ sung `confirmPassword` validation bằng Zod `.refine()` để khớp mật khẩu. |
| 4 | **Phân rã / Trừu tượng hóa** | *"Implement luồng Forgot Password 5 màn: chọn phương thức → nhập email/SĐT → OTP → reset → success (Figma 6-216, 6-309, 6-382, 6-459, 6-532)"* | AI thiết kế multi-step với `forgotPasswordStore` (method, contact, resend cooldown, isOtpVerified) và `forgotPasswordSuccessStore` riêng. **Quyết định:** Chấp nhận route chain `/forgot-password` → `/verify` → `/otp` → `/reset` → `/success`; guard redirect nếu thiếu state (vd. vào `/otp` mà chưa chọn method). |
| 5 | **Nhận dạng mẫu (Pattern Recognition)** | *"Tạo component tái sử dụng cho OTP input và card chọn phương thức"* | AI đặt `SelectionCard` và `OtpInput` vào `shared/components/`, còn `ForgotPasswordBrandPanel`, `ForgotPasswordVerifyFormPanel`… trong `features/auth/components/`. **Quyết định:** Đúng rule 2 vs 19 — UI generic (OTP box, selection card) ở shared; copy/strings và layout auth-specific ở feature. `OtpInput` hỗ trợ paste, auto-focus, keyboard navigation. |
| 6 | **Xác minh (Verification)** | *"Figma MCP hết quota Starter plan — implement các màn OTP/Reset/Success"* | AI không đọc được node 6-382, 6-459, 6-532 qua MCP; suy luận layout từ các màn trước (title 32px, nút primary + arrow, footer hỗ trợ). **Quyết định:** Chấp nhận triển khai theo pattern đã có; ghi chú trong audit log để review lại pixel-perfect khi MCP còn quota. Chạy `npm run build` — pass. |
| 7 | **Giải quyết vấn đề / Xác minh** | *"Merge nhánh `main` vào `hau` — conflict `ProfileMenu.jsx` (3 conflicts)"* | AI phát hiện `main` dùng Redux `dispatch(logout())`, `hau` dùng Zustand `clearAuthSession()` + `navigate('/login')`. **Quyết định:** Giữ phiên bản `hau` vì auth đã migrate; từ chối revert về Redux. Merge commit hoàn tất, working tree clean. |
| 8 | **Đánh giá (Evaluation)** | *"Service layer khi API backend chưa sẵn sàng"* | AI thêm pattern demo fallback: `Promise.race` timeout 3s → trả response giả cho login/register/forgot-password. **Quyết định:** Chấp nhận cho dev/demo; ghi nhận rủi ro — cần thay bằng error handling thật khi BE deploy; không commit secret/credentials. |
| 9 | **Trừu tượng hóa (Abstraction)** | *"Validation schemas cho từng bước forgot password"* | AI tạo `forgotPasswordSchema`, `forgotPasswordVerifyEmailSchema`, `forgotPasswordVerifyPhoneSchema`, `forgotPasswordOtpSchema`, `forgotPasswordResetSchema` trong `feature/validations/`. **Quyết định:** Mỗi bước một schema riêng thay vì một schema khổng lồ — dễ test và đúng single responsibility. Phone regex `(0|+84)[0-9]{9,10}` cho thị trường VN. |
| 10 | **Xác minh (Verification)** | *"Kiểm tra toàn luồng trên dev server"* | AI chạy `npm run dev`; nhiều instance cũ chiếm port 5173–5179 → server mới lên 5180. **Quyết định:** Dùng tạm port 5180; cần kill process cũ trước khi demo chính thức. Luồng: `/` → `/login` → `/forgot-password` → … → `/success` → `/login`. |

---

## Tóm tắt phản chiếu (Reflection Summary)

| Hạng mục | Nội dung |
|---|---|
| **Điểm mạnh AI** | Tốc độ scaffold feature-based architecture, barrel exports, hooks/services tách lớp rõ; tái sử dụng component giữa Login/Register/Forgot Password. |
| **Hallucination / Sai sót** | Figma MCP hết quota → layout bước 3–5 có thể lệch pixel so với design gốc; cần đối chiếu lại khi có quota. |
| **Quyết định con người** | Giữ Zustand thay Redux khi merge; tách global/feature store; guard route theo state; chuẩn hóa validation Zod từng bước. |
| **Việc cần làm tiếp** | Đối chiếu Figma node 6-382/459/532 khi MCP available; kết nối API BE thật; dọn zombie dev-server processes. |

---

## Tham chiếu Figma

| Node ID | Màn hình | Route |
|---------|----------|-------|
| 6-2 | Login | `/login` |
| 6-107 | Register | `/register` |
| 6-216 | Chọn phương thức khôi phục | `/forgot-password` |
| 6-309 | Nhập Email / SĐT | `/forgot-password/verify` |
| 6-382 | Nhập OTP | `/forgot-password/otp` |
| 6-459 | Đặt lại mật khẩu | `/forgot-password/reset` |
| 6-532 | Khôi phục thành công | `/forgot-password/success` |

---

*Tài liệu này được tạo theo mẫu AI Audit Log (STT · Giai đoạn DTC · Prompt · Reflection) phục vụ báo cáo quá trình học tập và giám sát sử dụng AI trong dự án SEHub.*
