import React from 'react'
import type { Metadata } from 'next'
import PDFViewerStruktur from '../components/pdf/pdfViewstruktur'

export const metadata: Metadata = {
  title: 'BAKEUDA - Struktur Organisasi',
}
export default function StrukturOrganisasi() {
  return (
    <div>
      <PDFViewerStruktur/>
    </div>
  )
}
