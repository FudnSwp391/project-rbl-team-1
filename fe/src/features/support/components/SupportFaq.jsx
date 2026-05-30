import { useState } from 'react'
import { SUPPORT_FAQS } from '../supportMockData'

export default function SupportFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="support-section support-section--narrow" id="faq">
      <h2 className="support-section__title">Câu hỏi phổ biến</h2>
      <div className="support-faq">
        {SUPPORT_FAQS.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div key={item.question} className={`support-faq__item${isOpen ? ' support-faq__item--open' : ''}`}>
              <button
                type="button"
                className="support-faq__trigger"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronIcon open={isOpen} />
              </button>
              {isOpen && <p className="support-faq__answer">{item.answer}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
      className={open ? 'support-faq__chevron--open' : ''}
    >
      <path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
